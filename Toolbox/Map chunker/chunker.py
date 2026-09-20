#!/usr/bin/env python3
"""
generate_chunk_tiers.py
========================

Does two passes over a folder tree (default: ArcanumBase/):

  1. BASE CHUNKING: finds single-file map images (e.g. "HugeWorldMap.jpg") that are large
     enough to be worth chunking (either dimension over --chunk-threshold px, default 4000)
     and don't already have a tile folder, and slices each one into a folder of original
     "<name>_<x>_<y>.jpg/png" tiles (chunkSize from --chunk-size, default 500) - exactly the
     tile-folder layout the viewer's chunked-map loader expects. The source image itself is
     left untouched alongside the new folder.

  2. TIER GENERATION: scans for tile folders - directories containing files named
     "<prefix>_<x>_<y>.jpg" or "<prefix>_<x>_<y>.png" (including ones just produced by pass 1
     above) - and generates two extra, coarser tile "tiers" for each one it finds:

       - "low" tier: used by the viewer when zoom is below 20%
       - "mid" tier: used by the viewer when zoom is between 20% and 60%

     The original tiles are left untouched and keep being used above 60% zoom.

Run the whole thing with one command; a map that's already chunked just skips straight to
pass 2, and a map that isn't big enough to chunk (below --chunk-threshold) is left as a
single file and skipped entirely.

Why bigger tiles, not just smaller files
-----------------------------------------
At low zoom the viewport covers most/all of the map in map-pixel terms, so the number of
chunks the viewer has to request is driven almost entirely by how many grid cells the
original chunk size divides the map into - NOT by how zoomed-out you are on screen. Simply
shipping smaller/blurrier copies of the *same* grid would still mean fetching the same huge
number of tiles. Instead, each tier uses a *larger* chunkSize (fewer, bigger cells covering
more map area each), and each of those bigger cells is rendered at a resolution matched to
that tier's zoom band - so both the tile *count* and the tile *bytes* drop together.

Concretely, for a tier meant to top out at zoom level Z, a tile is generated at Z of its
native map-pixel size, and the tier's chunkSize (in the map's own pixel coordinates) is
chosen so the generated file is roughly the same pixel dimensions as one of the map's
original tiles (so tile weight/texture stays consistent across tiers):

    tier_chunk_size = round(original_chunk_size / tier_scale)

    low tier (tops out at 20%): tier_chunk_size = round(original_chunk_size / 0.20)
    mid tier (tops out at 60%): tier_chunk_size = round(original_chunk_size / 0.60)

Tiles are still positioned in the map's real, full-resolution coordinate space (labels/dots
don't need to know any of this happened) - only the viewer's currentChunkSize changes per
tier. See the "Tiered chunk sets" comment above the chunk state variables in viewer.js.

Output
------
For a tile set found at "ArcanumBase/SomeMap/" with prefix "somemap":

    ArcanumBase/SomeMap_low/somemap_low_<x>_<y>.jpg
    ArcanumBase/SomeMap_mid/somemap_mid_<x>_<y>.jpg

A summary is written to a text file (default: chunk_tier_sizes.txt) with one line per
(map, tier), giving the values needed to add a `chunkTiers` block to that map's entry in
arcanumbase.js:

    # mapKey | tier | chunkSize | folder | prefix | totalWidth | totalHeight | originalChunkSize
    SomeMap | low | 2500 | ArcanumBase/SomeMap_low | somemap_low | 8000 | 6000 | 500
    SomeMap | mid | 833  | ArcanumBase/SomeMap_mid | somemap_mid | 8000 | 6000 | 500

`mapKey` is the folder path relative to the scan root (--source) - the same value that
belongs in a map's `filename` field in arcanumbase.js (the "ArcanumBase/" prefix is added
automatically by the viewer, so it's left off here too).

Usage
-----
    pip install pillow
    python3 generate_chunk_tiers.py --source /path/to/ArcanumBase --output chunk_tier_sizes.txt

Useful flags:
    --chunk-size 500          chunkSize used when slicing a not-yet-chunked base image (pass 1)
    --chunk-threshold 4000    only auto-chunk a base image if width or height exceeds this (px)
    --skip-base-chunking      disable pass 1 entirely - only generate low/mid tiers for maps that are already chunked
    --low-scale 0.20          downsample scale for the low tier (must match CHUNK_TIER_LOW_MAX in viewer.js)
    --mid-scale 0.60          downsample scale for the mid tier (must match CHUNK_TIER_MID_MAX in viewer.js)
    --quality 85              JPEG quality for generated tiles
    --force                   regenerate a tier (or re-slice a base image) even if its output already exists
    --dry-run                 just print what would be generated, without touching any files
    --only NAME                only process the map(s) whose relative path contains NAME
"""

import argparse
import os
import re
import sys
import time
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("This script needs Pillow. Install it with: pip install pillow --break-system-packages")

TILE_RE = re.compile(r'^(?P<prefix>.+)_(?P<x>-?\d+)_(?P<y>-?\d+)\.(?P<ext>jpe?g|png)$', re.IGNORECASE)
TIER_SUFFIX_RE = re.compile(r'_(low|mid)$', re.IGNORECASE)

Image.MAX_IMAGE_PIXELS = None
IMAGE_EXT_RE = re.compile(r'\.(jpe?g|png)$', re.IGNORECASE)


def find_base_images(root: Path, only_filter: str | None):
    """
    Walks `root` and yields single-file map images that look like they still need to be
    chunked: not already a "<prefix>_<x>_<y>" tile themselves, and not sitting in a directory
    that already contains tiles for the same base name (i.e. already chunked). Directories
    that are themselves tier output (_low/_mid) are skipped, same as find_tile_sets.
    """
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if not TIER_SUFFIX_RE.search(d)]
        dir_path = Path(dirpath)
        tiled_stems = {TILE_RE.match(f).group('prefix') for f in filenames if TILE_RE.match(f)}
        for fname in filenames:
            if TILE_RE.match(fname) or not IMAGE_EXT_RE.search(fname):
                continue
            stem = Path(fname).stem
            if stem in tiled_stems:
                continue  # a tile set for this same name already lives right here - odd, but skip it
            rel = (dir_path / fname).relative_to(root).as_posix()
            if only_filter and only_filter.lower() not in rel.lower():
                continue
            yield dir_path / fname


def slice_base_image(image_path: Path, chunk_size: int, quality: int, force: bool, dry_run: bool):
    """
    Slices a single big map image into a sibling folder of "<stem>_<x>_<y>.<ext>" tiles - the
    same layout find_tile_sets()/generate_tier() expect. Returns the new (dir_path, prefix) so
    the caller can feed it straight into tier generation, or None if this image was skipped
    (below threshold is checked by the caller; this only checks "already chunked").
    """
    stem = image_path.stem
    out_dir = image_path.parent / stem

    if out_dir.exists() and not force:
        existing = [f for f in out_dir.iterdir() if TILE_RE.match(f.name)]
        if existing:
            print(f"{image_path.name}: skip (already chunked at {out_dir}; use --force to redo)")
            return out_dir, stem

    with Image.open(image_path) as im:
        width, height = im.size
        mode = 'RGBA' if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info) else 'RGB'
        ext = 'png' if mode == 'RGBA' else 'jpg'
        print(f"{image_path.name}: chunking {width}x{height} -> {out_dir} (chunkSize={chunk_size})")

        if dry_run:
            return out_dir, stem

        out_dir.mkdir(parents=True, exist_ok=True)
        im_conv = im.convert(mode)
        cols = -(-width // chunk_size)
        rows = -(-height // chunk_size)
        made = 0
        for row in range(rows):
            for col in range(cols):
                x0, y0 = col * chunk_size, row * chunk_size
                x1, y1 = min(width, x0 + chunk_size), min(height, y0 + chunk_size)
                tile = im_conv.crop((x0, y0, x1, y1))
                out_path = out_dir / f"{stem}_{x0}_{y0}.{ext}"
                if ext == 'jpg':
                    tile.convert('RGB').save(out_path, quality=quality, optimize=True)
                else:
                    tile.save(out_path, optimize=True)
                made += 1
        print(f"  -> {made} tile(s)")

    return out_dir, stem


def find_tile_sets(root: Path, only_filter: str | None):
    """
    Walks `root` and yields (dir_path, prefix, {(x, y): file_path}) for every distinct
    (directory, prefix) group of tile files it finds. Skips directories that already look
    like a generated tier output (name ends in _low/_mid), so re-running this script is safe.
    """
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if not TIER_SUFFIX_RE.search(d)]
        dir_path = Path(dirpath)
        groups = {}
        for fname in filenames:
            m = TILE_RE.match(fname)
            if not m:
                continue
            prefix = m.group('prefix')
            x, y = int(m.group('x')), int(m.group('y'))
            groups.setdefault(prefix, {})[(x, y)] = dir_path / fname
        for prefix, tiles in groups.items():
            if len(tiles) < 1:
                continue
            rel = dir_path.relative_to(root).as_posix()
            if only_filter and only_filter.lower() not in rel.lower():
                continue
            yield dir_path, prefix, tiles


def detect_grid(tiles: dict):
    """
    Given {(x, y): file_path} for one tile set, figures out the original chunk size and the
    map's total pixel dimensions, using the tiles' own coordinates/pixel sizes rather than
    trusting any external metadata (the map data file isn't available to this script).
    """
    xs = sorted({xy[0] for xy in tiles})
    ys = sorted({xy[1] for xy in tiles})

    chunk_w = xs[1] - xs[0] if len(xs) > 1 else None
    chunk_h = ys[1] - ys[0] if len(ys) > 1 else None

    max_x, max_y = max(xs), max(ys)
    # Width of the rightmost column (from any tile present in that column).
    right_col_tile = next(path for (x, y), path in tiles.items() if x == max_x)
    with Image.open(right_col_tile) as im:
        right_w = im.width
    # Height of the bottom row (from any tile present in that row).
    bottom_row_tile = next(path for (x, y), path in tiles.items() if y == max_y)
    with Image.open(bottom_row_tile) as im:
        bottom_h = im.height

    if chunk_w is None:
        with Image.open(right_col_tile) as im:
            chunk_w = im.width
    if chunk_h is None:
        with Image.open(bottom_row_tile) as im:
            chunk_h = im.height
    chunk_size = chunk_w if chunk_w == chunk_h else min(chunk_w, chunk_h)

    total_width = max_x + right_w
    total_height = max_y + bottom_h
    return chunk_size, total_width, total_height


def has_alpha(tiles: dict):
    sample = next(iter(tiles.values()))
    with Image.open(sample) as im:
        return im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info)


def build_region(tiles: dict, chunk_size: int, x0, y0, x1, y1, mode):
    """
    Assembles the original-resolution pixel region [x0,x1) x [y0,y1) by cropping and pasting
    from whichever original tiles overlap it. Returns None if no source tile covers any of it
    (a sparse/irregular map missing that area).
    """
    region_w, region_h = x1 - x0, y1 - y0
    canvas = None
    painted = False

    col_start = x0 // chunk_size
    col_end = (x1 - 1) // chunk_size
    row_start = y0 // chunk_size
    row_end = (y1 - 1) // chunk_size

    for row in range(row_start, row_end + 1):
        for col in range(col_start, col_end + 1):
            tx, ty = col * chunk_size, row * chunk_size
            path = tiles.get((tx, ty))
            if not path:
                continue
            with Image.open(path) as tile_im:
                tile_im = tile_im.convert(mode)
                tw, th = tile_im.size
                # Overlap between this tile's real extent and the requested region, in
                # original map-pixel coordinates.
                ox0, oy0 = max(tx, x0), max(ty, y0)
                ox1, oy1 = min(tx + tw, x1), min(ty + th, y1)
                if ox1 <= ox0 or oy1 <= oy0:
                    continue
                crop = tile_im.crop((ox0 - tx, oy0 - ty, ox1 - tx, oy1 - ty))
                if canvas is None:
                    fill = (0, 0, 0, 0) if mode == 'RGBA' else (0, 0, 0)
                    canvas = Image.new(mode, (region_w, region_h), fill)
                canvas.paste(crop, (ox0 - x0, oy0 - y0))
                painted = True

    return canvas if painted else None


def generate_tier(dir_path: Path, prefix: str, tiles: dict, chunk_size: int,
                   total_w: int, total_h: int, root: Path, tier_name: str, tier_scale: float,
                   quality: int, force: bool, dry_run: bool):
    tier_chunk_size = max(1, round(chunk_size / tier_scale))
    out_dir = dir_path.parent / f"{dir_path.name}_{tier_name}"
    out_prefix = f"{prefix}_{tier_name}"
    mode = 'RGBA' if has_alpha(tiles) else 'RGB'
    ext = 'png' if mode == 'RGBA' else 'jpg'

    if out_dir.exists() and not force:
        already = any(TILE_RE.match(f.name) for f in out_dir.iterdir())
        if already:
            print(f"  [{tier_name}] skip (already generated at {out_dir}; use --force to redo)")
            return tier_chunk_size, out_dir, out_prefix

    if not dry_run:
        out_dir.mkdir(parents=True, exist_ok=True)

    cols = -(-total_w // tier_chunk_size)  # ceil div
    rows = -(-total_h // tier_chunk_size)
    made = 0
    for row in range(rows):
        for col in range(cols):
            x0, y0 = col * tier_chunk_size, row * tier_chunk_size
            x1, y1 = min(total_w, x0 + tier_chunk_size), min(total_h, y0 + tier_chunk_size)
            region = build_region(tiles, chunk_size, x0, y0, x1, y1, mode)
            if region is None:
                continue  # no source data here - sparse/irregular map, leave this cell absent
            down_w = max(1, round((x1 - x0) * tier_scale))
            down_h = max(1, round((y1 - y0) * tier_scale))
            resized = region.resize((down_w, down_h), Image.LANCZOS)
            out_path = out_dir / f"{out_prefix}_{x0}_{y0}.{ext}"
            made += 1
            if dry_run:
                continue
            if ext == 'jpg':
                resized.convert('RGB').save(out_path, quality=quality, optimize=True)
            else:
                resized.save(out_path, optimize=True)

    print(f"  [{tier_name}] {made} tile(s) -> {out_dir} (chunkSize={tier_chunk_size})")
    return tier_chunk_size, out_dir, out_prefix


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--source', default='ArcanumBase', help='Root folder to scan (default: ArcanumBase)')
    ap.add_argument('--output', default='chunk_tier_sizes.txt', help='Summary text file to write')
    ap.add_argument('--chunk-size', type=int, default=500, help='chunkSize to use when slicing a not-yet-chunked base image (default 500)')
    ap.add_argument('--chunk-threshold', type=int, default=4000, help='Only auto-chunk a base image if width or height exceeds this many pixels (default 4000)')
    ap.add_argument('--skip-base-chunking', action='store_true', help='Skip pass 1 - only generate low/mid tiers for maps that are already chunked')
    ap.add_argument('--low-scale', type=float, default=0.20, help='Downsample scale for the low tier (must match CHUNK_TIER_LOW_MAX in viewer.js)')
    ap.add_argument('--mid-scale', type=float, default=0.60, help='Downsample scale for the mid tier (must match CHUNK_TIER_MID_MAX in viewer.js)')
    ap.add_argument('--quality', type=int, default=85, help='JPEG quality for generated tiles (default 85)')
    ap.add_argument('--force', action='store_true', help='Regenerate a tier even if its output folder already exists')
    ap.add_argument('--dry-run', action='store_true', help='Print what would be generated without writing any files')
    ap.add_argument('--only', default=None, help='Only process map folders whose relative path contains this text')
    args = ap.parse_args()

    root = Path(args.source).resolve()
    if not root.is_dir():
        sys.exit(f"Source folder not found: {root}")

    summary_lines = [
        "# Arcanum chunk tile-pyramid generation summary",
        f"# Generated: {time.strftime('%Y-%m-%d %H:%M:%S')}",
        f"# Source: {root}",
        "# Format: mapKey | tier | chunkSize | folder | prefix | totalWidth | totalHeight | originalChunkSize",
    ]

    if not args.skip_base_chunking:
        candidates = list(find_base_images(root, args.only))
        chunked_count, skipped_small = 0, 0
        for image_path in candidates:
            with Image.open(image_path) as im:
                width, height = im.size
            if max(width, height) < args.chunk_threshold:
                skipped_small += 1
                continue
            slice_base_image(image_path, args.chunk_size, args.quality, args.force, args.dry_run)
            chunked_count += 1
        if candidates:
            print(f"Base chunking: {chunked_count} image(s) chunked, "
                  f"{skipped_small} left as single files (below --chunk-threshold={args.chunk_threshold}px)\n")

    tile_sets = list(find_tile_sets(root, args.only))
    if not tile_sets:
        print("No chunked tile sets found.")
        return

    for dir_path, prefix, tiles in tile_sets:
        rel = dir_path.relative_to(root).as_posix()
        chunk_size, total_w, total_h = detect_grid(tiles)
        print(f"{rel} (prefix='{prefix}', {len(tiles)} original tiles, "
              f"chunkSize={chunk_size}, {total_w}x{total_h})")

        for tier_name, tier_scale in (('low', args.low_scale), ('mid', args.mid_scale)):
            tier_chunk_size, out_dir, out_prefix = generate_tier(
                dir_path, prefix, tiles, chunk_size, total_w, total_h, root,
                tier_name, tier_scale, args.quality, args.force, args.dry_run
            )
            out_rel = out_dir.relative_to(root).as_posix()
            summary_lines.append(
                f"{rel} | {tier_name} | {tier_chunk_size} | {root.name}/{out_rel} | "
                f"{out_prefix} | {total_w} | {total_h} | {chunk_size}"
            )

    if not args.dry_run:
        Path(args.output).write_text("\n".join(summary_lines) + "\n", encoding='utf-8')
        print(f"\nWrote summary for {len(tile_sets)} map(s) to {args.output}")
    else:
        print("\n(dry run - no files written)")
        print("\n".join(summary_lines))


if __name__ == '__main__':
    main()
