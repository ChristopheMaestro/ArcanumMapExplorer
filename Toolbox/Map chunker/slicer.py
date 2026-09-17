from PIL import Image
import os

# --- ADJUST COMPRESSION HERE ---
COMPRESSION_QUALITY = 90
# -------------------------------

def slice_image(image_path, block_size=500, output_dir="output_blocks"):
    """Slices an image into JPEG blocks and prints real-time progress."""
    os.makedirs(output_dir, exist_ok=True)
    
    # Get the file name without the extension (e.g., "SmallPond")
    base_name = os.path.splitext(os.path.basename(image_path))[0]
    
    print(f"Opening original image: {image_path}...")
    img = Image.open(image_path)
    img_width, img_height = img.size
    print(f"Image dimensions: {img_width}x{img_height} px")
    
    if img.mode in ('RGBA', 'LA'):
        print("Converting image mode to RGB for JPEG compatibility...")
        img = img.convert('RGB')
    
    count = 0
    print("\nStarting slicing process...")
    
    for top in range(0, img_height, block_size):
        for left in range(0, img_width, block_size):
            right = min(left + block_size, img_width)
            bottom = min(top + block_size, img_height)
            
            block = img.crop((left, top, right, bottom))
            
            # Formatted exactly to: %namefile%_x_y.jpg
            file_name = f"{base_name}_{left}_{top}.jpg"
            output_path = os.path.join(output_dir, file_name)
            
            # Print live progress for each block
            print(f" -> Saving block to {output_path}...")
            
            block.save(
                output_path, 
                format="JPEG", 
                quality=COMPRESSION_QUALITY,
                optimize=True
            )
            count += 1
            
    print(f"\nFinished! Saved {count} total blocks to '{output_dir}' at {COMPRESSION_QUALITY}% quality.")

if __name__ == "__main__":
    slice_image("BlackRoot.jpg", block_size=500)