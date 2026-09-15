import os
import sys
import time
import glob
import re
from datetime import datetime
import cv2
import numpy as np
import pydirectinput
import pyautogui
from pynput import keyboard as pynput_keyboard  

# ==================== CONFIGURATION ====================
DEBUG = False                # ENABLED: Generates side-by-side diagnostic images for every single stitch check

horizontal_hold_time = 3  # Seconds to hold RIGHT/LEFT
vertical_hold_time   = 3  # Seconds to hold DOWN

steps_per_row = 10          # Shots per row before snaking down
toggle_key = 'q'            # Key to start / stop and stitch

# Display settings
CROP_BOTTOM_PX = 100        # Clear the cursor zone from the bottom
# =======================================================

stitching_triggered = False

def extract_number(filename):
    """Extracts chronological frame counter number from name tags."""
    match = re.search(r'_(\d+)\.png', filename)
    return int(match.group(1)) if match else 0

def find_exact_vertical_splice(base_img, next_img, folder_path, current_frame_name):
    """Locates vertical overlap metrics across the entire width and height of the next image."""
    h, w = base_img.shape[:2]
    h_next, w_next = next_img.shape[:2]
    g_base = cv2.cvtColor(base_img, cv2.COLOR_BGR2GRAY)
    g_next = cv2.cvtColor(next_img, cv2.COLOR_BGR2GRAY)

    strip_w = 200
    y_start, y_end = 0, h  

    min_search_x = 0
    max_search_x = w_next - strip_w

    x_start_base = w - strip_w
    anchor_strip = g_base[y_start:y_end, x_start_base:w]
    
    search_zone = g_next[0:h_next, min_search_x : max_search_x]
    res = cv2.matchTemplate(search_zone, anchor_strip, cv2.TM_CCOEFF_NORMED)
    _, max_val, _, max_loc = cv2.minMaxLoc(res)
    
    is_success = max_val >= 0.55
    max_x, _ = max_loc
    actual_match_x = min_search_x + max_x
    
    # --- VISUAL DIAGNOSTIC GENERATION ---
    if DEBUG:
        left_diag = base_img.copy()
        right_diag = next_img.copy()
        
        cv2.rectangle(left_diag, (x_start_base, 0), (w, h), (0, 255, 0), 3)
        cv2.rectangle(right_diag, (min_search_x, 0), (max_search_x, h_next), (128, 128, 128), 3)
        
        color = (0, 255, 0) if is_success else (0, 0, 255)
        cv2.rectangle(right_diag, (actual_match_x, 0), (actual_match_x + strip_w, h_next), color, 4)
        
        h_min = min(h, h_next)
        diag_canvas = np.hstack((left_diag[:h_min, :], right_diag[:h_min, :]))
        
        cv2.putText(diag_canvas, f"Anchor (Prev Image) | Score: {max_val:.2f}", (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        cv2.putText(diag_canvas, f"Full Search Zone (Next Image) Success: {is_success}", (w + 20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2)
        
        diag_path = os.path.join(folder_path, f"diagnostics_match_to_{current_frame_name}")
        cv2.imwrite(diag_path, diag_canvas)

    base_trim_x = w
    next_start_x = actual_match_x + strip_w  
    return base_trim_x, next_start_x, is_success

def draw_label(img, text, x_offset=0, y_offset=0):
    if not DEBUG: return
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 0.5
    thickness = 1
    (text_w, text_h), _ = cv2.getTextSize(text, font, font_scale, thickness)
    bx, by = x_offset + 10, y_offset + 10
    cv2.rectangle(img, (bx, by), (bx + text_w + 6, by + text_h + 6), (0, 0, 0), -1)
    cv2.putText(img, text, (bx + 3, by + text_h + 3), font, font_scale, (255, 255, 255), thickness, cv2.LINE_AA)
def save_row_part(canvas, placements, session_timestamp, row_num, part_num):
    """Draws formatting layers and exports the finished row canvas explicitly in PNG format."""
    for shape_tuple, name, gx in placements:
        if DEBUG:
            # FIX: Properly extract individual integer dimensions from the stored shape tuple
            h_img, w_img = shape_tuple[:2]
            cv2.rectangle(canvas, (gx, 0), (gx + w_img - 1, h_img - 1), (0, 0, 255), 1)
        draw_label(canvas, name, gx, 0)

    output_row_name = f"map_session_{session_timestamp}_row_{row_num:02d}_part{part_num}.png"
    cv2.imwrite(output_row_name, canvas)
    print(f" 💾 Saved Row Map Segments: '{output_row_name}'")

def run_scanline_stitch(folder, session_timestamp):
    print("\n==================================================")
    print(" [ Stitching ] Processing Full-Picture Splicing Phase...")
    print("==================================================")
    
    search_path = os.path.join(folder, "*.png")
    all_images = [f for f in glob.glob(search_path) if "diagnostics_" not in os.path.basename(f)]
    
    if len(all_images) == 0:
        print(f"❌ Error: No images found inside '{folder}' to stitch.")
        return

    row_numbers = sorted(list(set([int(re.search(r'row_(\d+)_', f).group(1)) for f in all_images if re.search(r'row_(\d+)_', f)])))

    for row_num in row_numbers:
        row_paths = sorted([f for f in all_images if f"row_{row_num:02d}_" in os.path.basename(f)])
        
        if len(row_paths) == 0:
            continue
            
        print(f" -> Analyzing Row {row_num:02d} ({len(row_paths)} images)...")
        
        part_num = 1
        i = 0
        
        while i < len(row_paths):
            img_base = cv2.imread(row_paths[i])
            name_base = os.path.basename(row_paths[i])
            
            row_canvas = img_base.copy()
            row_placements = [(img_base.shape, name_base, 0)]
            
            next_idx = i + 1
            while next_idx < len(row_paths):
                next_img = cv2.imread(row_paths[next_idx])
                name_next = os.path.basename(row_paths[next_idx])
                
                base_trim, next_seam, is_success = find_exact_vertical_splice(row_canvas, next_img, folder, name_next)
                
                if not is_success:
                    print(f"⚠️ Stitch Collision! Frame '{name_next}' failed alignment. Creating Part {part_num}...")
                    break
                
                row_canvas = row_canvas[:, :base_trim]
                slice_part = next_img[:, next_seam:]
                local_x = row_canvas.shape[1]
                row_canvas = np.hstack((row_canvas, slice_part))
                row_placements.append((next_img.shape, name_next, local_x))
                
                next_idx += 1
                
            save_row_part(row_canvas, row_placements, session_timestamp, row_num, part_num)
            part_num += 1
            i = next_idx

    print("==================================================")
    print(" 🎉 SUCCESS! All row sub-segments rendered completely.")
    print("==================================================")

def move_character_safely(key, hold_duration):
    global stitching_triggered
    if stitching_triggered: return True
    
    pydirectinput.keyDown(key)
    start_hold = time.time()
    while time.time() - start_hold < hold_duration:
        if stitching_triggered:
            pydirectinput.keyUp(key)
            return True
        time.sleep(0.01)
    pydirectinput.keyUp(key)
    time.sleep(0.1)
    return False

script_running = False

def on_press(key):
    global script_running, stitching_triggered
    try:
        if hasattr(key, 'char') and key.char == toggle_key:
            if not script_running and not stitching_triggered:
                script_running = True
            else:
                script_running = False
                stitching_triggered = True
    except AttributeError:
        pass

listener = pynput_keyboard.Listener(on_press=on_press)
listener.start()

def main_loop():
    global script_running, stitching_triggered
    print("==================================================")
    print("   📊 FULL-PICTURE SCAN SPLICING MAP ENGINE 📊     ")
    print("==================================================")
    print(f"ℹ️ Press [ {toggle_key.upper()} ] inside or outside your game to START.")
    print("==================================================")
    
    while True:
        if script_running:
            time.sleep(0.2)
            
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            output_folder = f"screenshots_{timestamp}"
            os.makedirs(output_folder)
            
            print(f"\n📂 Session Started! Folder: ./{output_folder}/")
            print("🚀 Switch to your game window now. Mapping begins in 2 seconds...")
            time.sleep(2)
            
            current_row = 1
            direction = "right"
            
            while script_running and not stitching_triggered:
                print(f"\n--- Row {current_row} ({direction.upper()}) ---")
                is_moving_right = (direction == "right")
                
                for step in range(1, steps_per_row + 1):
                    if stitching_triggered or not script_running:
                        break
                        
                    print(f"Grid Frame {step}/{steps_per_row} ({direction})", end="\r")
                    stop_early = move_character_safely(direction, horizontal_hold_time)
                    if stop_early or stitching_triggered or not script_running:
                        stitching_triggered = True
                        break
                        
                    time.sleep(0.8)
                    shot = pyautogui.screenshot()
                    w, h = shot.size
                    cropped = shot.crop((0, 0, w, h - CROP_BOTTOM_PX))
                    
                    if is_moving_right:
                        screenshot_number = step
                    else:
                        screenshot_number = (steps_per_row + 1) - step
                        
                    filename = f"screenshot_row_{current_row:02d}_{screenshot_number:02d}.png"
                    cropped.save(os.path.join(output_folder, filename))
                    print(f" -> Captured: {filename}")
                    
                if stitching_triggered or not script_running:
                    break
                    
                print("⚡ Dropping down to setup next row track...")
                stop_early = move_character_safely('down', vertical_hold_time)
                if stop_early or stitching_triggered or not script_running:
                    stitching_triggered = True
                    break
                    
                current_row += 1
                direction = "left" if direction == "right" else "right"
            
            print("\n🛑 STOP DETECTED. Processing data lines...")
            time.sleep(0.5) 
            run_scanline_stitch(output_folder, timestamp)
            
            script_running = False
            stitching_triggered = False
            print("\n♻️ System Reset. Ready! Press [ Q ] to start next area map.")
            print("==================================================")
            
        time.sleep(0.1)

if __name__ == "__main__":
    try:
        main_loop()
    except KeyboardInterrupt:
        print("\n🛑 Script terminated.")
