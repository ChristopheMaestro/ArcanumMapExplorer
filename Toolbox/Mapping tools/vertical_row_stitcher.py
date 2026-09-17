import os
import glob
import re
import cv2
import numpy as np

# ==================== CONFIGURATION ====================
ANCHOR_H = 50       # Height of the search strip taken from the top of the lower image part
ANCHOR_W = 2000     # Width of the search strip taken from the center of the lower image part

CONFIDENCE_THRESH = 0.40  # Score threshold to verify connection alignment

# 🛠️ DEBUG CONFIGURATION
DEBUG_MODE = True   # Set to True to output visual matching diagnostics for every step
DEBUG_DIR = "debug_stitches"
# =======================================================

def get_latest_session_prefix():
    """Scans the directory to find the most recent session timestamp prefix."""
    files = glob.glob("map_session_*.png")
    if not files:
        return None
    latest_file = max(files, key=os.path.getmtime)
    match = re.search(r'map_session_(\d+_\d+)_row', latest_file)
    return match.group(1) if match else None

def ensure_alpha_channel(img):
    """Converts a BGR image to BGRA to enable transparency support."""
    if len(img.shape) == 3 and img.shape[2] == 3:
        return cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    return img

def stitch_part_globally(canvas_img, part_img, name_tag):
    """
    Stitches an individual image part into the global canvas using template matching.
    Returns the updated canvas or the original if matching fails.
    """
    canvas_img = ensure_alpha_channel(canvas_img)
    part_img = ensure_alpha_channel(part_img)
    
    h_canv, w_canv = canvas_img.shape[:2]
    h_part, w_part = part_img.shape[:2]
    
    # Template matching requires grayscale
    g_canvas = cv2.cvtColor(canvas_img, cv2.COLOR_BGRA2GRAY)
    g_part = cv2.cvtColor(part_img, cv2.COLOR_BGRA2GRAY)
    
    current_anchor_w = min(ANCHOR_W, w_part, w_canv)
    current_anchor_h = min(ANCHOR_H, h_part, h_canv)
    
    if current_anchor_w <= 0 or current_anchor_h <= 0:
        print(f"❌ Error: Dimension mismatch for {name_tag}. Skipping.")
        return canvas_img

    # Anchor extraction coordinates (top center of the incoming part)
    x_start_part = (w_part // 2) - (current_anchor_w // 2)
    y_start_part = 0
    
    anchor_strip = g_part[y_start_part : y_start_part + current_anchor_h, x_start_part : x_start_part + current_anchor_w]
    
    print(f" -> Searching anchor strip for {name_tag} globally on canvas...")
    res = cv2.matchTemplate(g_canvas, anchor_strip, cv2.TM_CCOEFF_NORMED)
    _, max_val, _, max_loc = cv2.minMaxLoc(res)
    
    print(f"    Match confidence score: {max_val:.2f}")
    if max_val < CONFIDENCE_THRESH:
        print(f"❌ Error: Could not find reliable connection for {name_tag}. Skipping segment.")
        return canvas_img

    match_x, match_y = max_loc
    
    # Calculate geometric shifts relative to anchor origin placement
    dx = match_x - x_start_part
    dy = match_y - y_start_part
    
    min_x = min(0, dx)
    max_x = max(w_canv, dx + w_part)
    
    seam_in_part = current_anchor_h
    seam_on_canvas = match_y + current_anchor_h
    
    new_w = max_x - min_x
    new_h = max(h_canv, seam_on_canvas + (h_part - seam_in_part))
    
    # Create new background canvas with 100% alpha transparency (no black background!)
    master_mosaic = np.zeros((new_h, new_w, 4), dtype=np.uint8)
    
    # Copy baseline canvas layer
    offset_canvas_x = -min_x if min_x < 0 else 0
    master_mosaic[0:h_canv, offset_canvas_x : offset_canvas_x + w_canv] = canvas_img
    
    # Prepare overlay splice of new part
    offset_part_x = dx - min_x
    part_slice = part_img[seam_in_part:h_part, :]
    slice_h, slice_w = part_slice.shape[:2]
    
    target_y_start = seam_on_canvas
    target_y_end = seam_on_canvas + slice_h
    target_x_start = offset_part_x
    target_x_end = offset_part_x + slice_w
    
    master_mosaic[target_y_start:target_y_end, target_x_start:target_x_end] = part_slice

    # 🎨 GENERATE VISUAL DEBUG EXPORT
    if DEBUG_MODE:
        debug_img = master_mosaic.copy()
        
        # 1. GRAY BOX: Search zone location on the baseline row above
        cv2.rectangle(debug_img, (match_x + offset_canvas_x, match_y), 
                      (match_x + offset_canvas_x + current_anchor_w, match_y + current_anchor_h), 
                      (128, 128, 128, 255), 3)
        
        # 2. GREEN BOX: The Anchor slice taken from the lower part
        cv2.rectangle(debug_img, (x_start_part + offset_part_x, target_y_start - current_anchor_h), 
                      (x_start_part + offset_part_x + current_anchor_w, target_y_start), 
                      (0, 255, 0, 255), 4)
                      
        # 3. RED BOX: Limits of the screenshot being attached
        cv2.rectangle(debug_img, (target_x_start, target_y_start - current_anchor_h), 
                      (target_x_end, target_y_end), 
                      (0, 0, 255, 255), 2)
        
        cv2.imwrite(f"{DEBUG_DIR}/match_{name_tag}.png", debug_img)

    return master_mosaic

def main():
    print("==================================================")
    print(" 📐 PART-BY-PART TRANS-ALPHA STITCHER (WITH DEBUG) 📐   ")
    print("==================================================")
    
    if DEBUG_MODE:
        os.makedirs(DEBUG_DIR, exist_ok=True)
    
    session_prefix = get_latest_session_prefix()
    if not session_prefix:
        print("❌ Error: No clean 'map_session_*.png' row image segments found.")
        return
        
    print(f"👉 Target session identifier recognized: [ {session_prefix} ]")
    
    all_files = glob.glob(f"map_session_{session_prefix}_row_*_part*.png")
    
    row_groups = {}
    for f in all_files:
        match = re.search(r'_row_(\d+)_part(\d+)', f)
        if match:
            r_idx = int(match.group(1))
            p_idx = int(match.group(2))
            if r_idx not in row_groups:
                row_groups[r_idx] = {}
            row_groups[r_idx][p_idx] = f
            
    sorted_row_indices = sorted(row_groups.keys())
    
    if not sorted_row_indices:
        print("❌ Error: No valid rows detected.")
        return

    print(f"\nFound available rows: {sorted_row_indices[0]} through {sorted_row_indices[-1]}")
    try:
        start_row = int(input(f"Enter the START row number (default {sorted_row_indices[0]}): ") or sorted_row_indices[0])
        end_row = int(input(f"Enter the END row number (default {sorted_row_indices[-1]}): ") or sorted_row_indices[-1])
    except ValueError:
        print("❌ Error: Invalid input. Row numbers must be integers.")
        return

    filtered_row_indices = [r for r in sorted_row_indices if start_row <= r <= end_row]
    
    if not filtered_row_indices:
        print("❌ Error: No matching rows found within that range.")
        return
        
    print(f"\n🧬 BEGINNING CASCADE LAYER STITCHING PROCESS...")
    
    # Initialize the base canvas using the very first part of your first selected row
    first_row = filtered_row_indices[0]
    sorted_parts = sorted(row_groups[first_row].keys())
    first_part_idx = sorted_parts[0]
    base_file_path = row_groups[first_row][first_part_idx]
    
    print(f"[ Seed Origin ] Starting canvas initialization with file: {os.path.basename(base_file_path)}")
    master_canvas = ensure_alpha_channel(cv2.imread(base_file_path))
    
    # Process remaining parts of the initial row
    for p_idx in sorted_parts[1:]:
        part_path = row_groups[first_row][p_idx]
        part_img = cv2.imread(part_path)
        tag = f"row_{first_row:02d}_part{p_idx:02d}"
        master_canvas = stitch_part_globally(master_canvas, part_img, tag)

    # Process all subsequent rows sequentially down the selection chain
    for r_idx in filtered_row_indices[1:]:
        print(f"\n🔽 Merging Row {r_idx} components into layout stack...")
        row_parts = sorted(row_groups[r_idx].keys())
        
        for p_idx in row_parts:
            part_path = row_groups[r_idx][p_idx]
            part_img = cv2.imread(part_path)
            tag = f"row_{r_idx:02d}_part{p_idx:02d}"
            master_canvas = stitch_part_globally(master_canvas, part_img, tag)
        
    suffix = f"_rows_{start_row}_to_{end_row}"
    output_mosaic_name = f"final_world_mosaic_{session_prefix}{suffix}.png"
    cv2.imwrite(output_mosaic_name, master_canvas)
    
    print("\n==================================================")
    print(" 🎉 SUCCESS! Mosaic rendering chain built successfully.")
    print(f" 💾 Saved alpha-transparent layout as: '{output_mosaic_name}'")
    if DEBUG_MODE:
        print(f" 🔍 Debug Mode Active: Diagnostic step overlays saved inside directory '/{DEBUG_DIR}'")
    print("==================================================")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        import traceback
        print("\n💥 CRASH DETECTED! Details below:")
        traceback.print_exc()
    finally:
        print("\n" + "="*50)
        input("Press Enter to close this window...")
