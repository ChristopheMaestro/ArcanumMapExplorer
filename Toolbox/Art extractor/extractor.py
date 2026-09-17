import os
import struct
import numpy as np
from PIL import Image

def decode_and_convert_art_file(file_path, base_extract_dir):
    """
    1. Extracts raw .ART assets into real 8-bit standard indexed .bmp files in /extract/bmp/
    2. Converts those .bmp files to alpha-transparent .png files in /extract/
    """
    filename = os.path.basename(file_path)
    base_name = os.path.splitext(filename)[0]

    # Create distinct stage folders
    bmp_dir = os.path.join(base_extract_dir, 'bmp')
    os.makedirs(bmp_dir, exist_ok=True)
    os.makedirs(base_extract_dir, exist_ok=True)

    with open(file_path, "rb") as f:
        data = f.read()

    if len(data) < 0x84:
        print(f"Skipping {filename}: File too small to contain valid headers.")
        return

    # 1. Parse THead Header Structure (array[$00..$20] of DWORD = 33 elements)
    head_words = struct.unpack(f"<{33}I", data[0:0x84])
    
    # Determine Palette Quantities inside file boundaries
    if head_words[6] != 0: palette_count = 4
    elif head_words[5] != 0: palette_count = 3
    elif head_words[4] != 0: palette_count = 2
    else: palette_count = 1

    # Determine Picture / Frame indexing structures
    if head_words[0] in (0, 2):
        picture_count = 8
        frame_count = head_words[8]
    else:
        picture_count = head_words[8]
        frame_count = 1

    total_images = picture_count * frame_count
    current_offset = 0x84

    # 2. Extract Color Palettes (Each palette is 256 entries * 4 bytes BGRA)
    palettes_raw_bytes = []
    palettes_rgb_tuples = []
    
    for _ in range(palette_count):
        pal_bytes = data[current_offset:current_offset + 1024]
        current_offset += 1024
        palettes_raw_bytes.append(pal_bytes)
        
        # Build parsed lookup for the transparent converter pass
        pal_entries = []
        for p_idx in range(256):
            b, g, r, _ = struct.unpack("4B", pal_bytes[p_idx*4 : (p_idx+1)*4])
            pal_entries.append((r, g, b))
        palettes_rgb_tuples.append(pal_entries)

    # Use first palette channel as primary default reference layout
    active_palette_bytes = palettes_raw_bytes[0]
    active_palette_tuples = palettes_rgb_tuples[0]

    # 3. Read Image Specifications Info Blocks (0x1C / 28 bytes per record)
    image_infos = []
    for _ in range(total_images):
        img_info_bytes = data[current_offset:current_offset + 28]
        current_offset += 28
        
        width, height, size, left, top, delta_x, delta_y = struct.unpack("<3I4i", img_info_bytes)
        image_infos.append({
            'width': width, 'height': height, 'size': size,
            'left': left, 'top': top, 'dx': delta_x, 'dy': delta_y
        })

    # 4. Decompress Pixel Payloads & Build BMP Stream Header Records
    for img_idx, info in enumerate(image_infos):
        w, h, compressed_size = info['width'], info['height'], info['size']
        if w == 0 or h == 0:
            continue

        img_data_chunk = data[current_offset:current_offset + compressed_size]
        current_offset += compressed_size

        pixel_indices = bytearray()

        # Check if stream data is uncompressed RAW array sequence or structural RLE packed
        if w * h == compressed_size:
            pixel_indices = bytearray(img_data_chunk)
        else:
            # Execute Run-Length Encoding Decompression Routine matching Delphi specs
            src_ptr = 0
            while src_ptr < len(img_data_chunk):
                control_byte = img_data_chunk[src_ptr]
                src_ptr += 1
                
                is_repeating = (control_byte & 0x80) == 0
                count = control_byte & 0x7F

                if is_repeating:
                    repeat_val = img_data_chunk[src_ptr]
                    src_ptr += 1
                    pixel_indices.extend([repeat_val] * count)
                else:
                    pixel_indices.extend(img_data_chunk[src_ptr:src_ptr + count])
                    src_ptr += count

        # Normalize pixel indexing boundaries
        if len(pixel_indices) < (w * h):
            pixel_indices.extend([0] * ((w * h) - len(pixel_indices)))
        else:
            pixel_indices = pixel_indices[:w * h]

        # Name formatting handles frame sheets gracefully
        file_suffix = f"_{img_idx}" if total_images > 1 else ""
        bmp_filename = f"{base_name}{file_suffix}.bmp"
        png_filename = f"{base_name}{file_suffix}.png"
        
        bmp_path = os.path.join(bmp_dir, bmp_filename)
        png_path = os.path.join(base_extract_dir, png_filename)

        # ----------------------------------------------------
        # STAGE 1: Construct a flawless 8-bit standard Indexed .BMP
        # ----------------------------------------------------
        # BMP rows are aligned to 4-byte boundaries
        stride_width = (w + 3) & ~3 
        header_size = 14 + 40 + 1024  # FileHeader(14) + InfoHeader(40) + Palette(1024)
        total_bmp_size = header_size + (h * stride_width)

        # Assemble Bitmap File Header
        file_header = struct.pack("<2sIHHI", b"BM", total_bmp_size, 0, 0, header_size)
        # Assemble Bitmap Info Header (biBitCount = 8 bits)
        info_header = struct.pack("<IIIIHHIIIIII", 40, w, h, 1, 8, 0, 0, 0, 0, 0, 0, 0)

        # Compile pixel grid line elements in REVERSE vertical line order (standard BMP layout)
        bmp_pixel_payload = bytearray()
        for r_idx in range(h - 1, -1, -1):
            row_data = pixel_indices[r_idx * w : (r_idx + 1) * w]
            padding_needed = stride_width - len(row_data)
            bmp_pixel_payload.extend(row_data)
            bmp_pixel_payload.extend([0] * padding_needed)

        # Write clean .bmp directly to disk inside /extract/bmp/
        with open(bmp_path, "wb") as bmp_out:
            bmp_out.write(file_header)
            bmp_out.write(info_header)
            bmp_out.write(active_palette_bytes)
            bmp_out.write(bmp_pixel_payload)

        # ----------------------------------------------------
        # STAGE 2: Map Palette & Convert to Transparent Alpha .PNG
        # ----------------------------------------------------
        try:
            # Reshape standard layout list indices down to an internal matrix
            index_matrix = np.array(pixel_indices, dtype=np.uint8).reshape((h, w))
            rgba_canvas = np.zeros((h, w, 4), dtype=np.uint8)

            for y in range(h):
                for x in range(w):
                    color_index = index_matrix[y, x]
                    r, g, b = active_palette_tuples[color_index]
                    
                    rgba_canvas[y, x, 0] = r
                    rgba_canvas[y, x, 1] = g
                    rgba_canvas[y, x, 2] = b
                    
                    # Target pure background color #0000FF to make completely transparent
                    if r == 0 and g == 0 and b == 255:
                        rgba_canvas[y, x, 3] = 0
                    else:
                        rgba_canvas[y, x, 3] = 255

            # Save the clean transparency layer directly to the main extraction directory
            final_png = Image.fromarray(rgba_canvas, 'RGBA')
            final_png.save(png_path, "PNG")
            print(f"   Processed Frame [{img_idx}]: BMP -> '/extract/bmp/{bmp_filename}' | PNG -> '/extract/{png_filename}'")

        except Exception as conv_err:
            print(f"   BMP saved successfully, but PNG translation failed for frame {img_idx}: {conv_err}")

def run_extraction_pipeline():
    # Targets your raw source files folder
    source_art_dir = "./art"
    # Target base destination directory paths
    base_extract_dir = "./extract"

    if not os.path.exists(source_art_dir):
        print(f"Error: Could not locate source folder path: '{source_art_dir}'.")
        return

    print(f"Initializing dual-stage conversion pipeline on target: '{source_art_dir}'...")
    processed_files = 0

    for filename in os.listdir(source_art_dir):
        if filename.lower().endswith('.art'):
            file_path = os.path.join(source_art_dir, filename)
            print(f"\nDecoding Package Container: '{filename}'")
            try:
                decode_and_convert_art_file(file_path, base_extract_dir)
                processed_files += 1
            except Exception as file_err:
                print(f"   Critical file structural compilation error handling '{filename}': {file_err}")

    print(f"\nPipeline Finished! Cleanly unpacked {processed_files} container systems.")

if __name__ == "__main__":
    run_extraction_pipeline()
