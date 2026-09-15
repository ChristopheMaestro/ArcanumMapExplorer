import os
import glob
import time
import cv2

def stitch_grid_map(folder_path, output_name="final_city_grid_map.png"):
    start_time = time.time()
    print("==================================================")
    print("      🚀 STARTING 2D GRID MAP STITCHING 🚀        ")
    print("==================================================")
    
    # 1. Scan the folder for images
    print(f"[1/4] Scanning folder '{folder_path}' for screenshots...")
    search_path = os.path.join(folder_path, "*.png")
    image_paths = sorted(glob.glob(search_path))
    
    total_files = len(image_paths)
    if total_files < 2:
        print(f"❌ Error: Found only {total_files} images. You need at least 2 screenshots to stitch.")
        return

    print(f" -> Found {total_files} images in chronological order.")

    # 2. Load images into memory
    print(f"\n[2/4] Loading {total_files} images into memory...")
    images = []
    for idx, path in enumerate(image_paths, 1):
        print(f" -> [{idx}/{total_files}] Reading: {os.path.basename(path)}", end="\r")
        img = cv2.imread(path)
        if img is not None:
            images.append(img)
    print(f"\n -> Successfully loaded all {len(images)} images.")

    # 3. Initialize Stitcher and process
    print("\n[3/4] Analyzing images & matching 2D features...")
    print(" -> Using SCANS mode (Optimized for flat 2D grid/aerial maps)")
    print(" -> Finding overlapping buildings, roads, and landscape features...")
    print(" ⏳ This may take a few moments depending on image resolution... Please wait.")
    
    stitcher = cv2.Stitcher.create(cv2.Stitcher_SCANS)
    
    # Run the heavy matching algorithm
    match_start = time.time()
    status, stitched_image = stitcher.stitch(images)
    match_duration = time.time() - match_start
    
    print(f" -> Feature matching completed in {match_duration:.2f} seconds.")

    # 4. Check results and save
    print("\n[4/4] Processing results...")
    if status == cv2.Stitcher_OK:
        print(f" -> Stitching successful! Writing final output file...")
        cv2.imwrite(output_name, stitched_image)
        
        total_duration = time.time() - start_time
        print("==================================================")
        print(f" 🎉 SUCCESS! Final map saved as: '{output_name}'")
        print(f" ⏱️ Total processing time: {total_duration:.2f} seconds")
        print("==================================================")
    else:
        print("==================================================")
        print(f" ❌ STITCHING FAILED! OpenCV Error Code: {status}")
        print("==================================================")
        print("\nWhat went wrong?")
        if status == 1:
            print(" -> Error Code 1 (ERR_NEED_MORE_IMGS): Not enough matching features found.")
            print("    Your images likely don't overlap enough. Ensure your 'Down' transition")
            print("    shares 30-50% of the same visuals as the rows above/below it.")
        elif status == 2:
            print(" -> Error Code 2 (ERR_HOMOGRAPHY_EST_FAIL): Geometric alignment failed.")
            print("    This usually happens if a static game HUD/UI is visible, confusing the camera.")
        elif status == 3:
            print(" -> Error Code 3 (ERR_CAMERA_PARAMS_ADJUST_FAIL): Camera calibration failed.")
        
        print("\n💡 Tips to fix:")
        print(" - Hide your game's HUD (health bars, maps) using game hotkeys before taking screenshots.")
        print(" - Adjust your movement distances to ensure screenshots overlap heavily in all directions.")

if __name__ == "__main__":
    screenshot_folder = "screenshots_20260915_134259"
    stitch_grid_map(screenshot_folder)
