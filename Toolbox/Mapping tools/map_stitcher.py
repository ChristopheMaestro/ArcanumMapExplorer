import os
import glob
import time
import queue
import threading
from collections import deque
from datetime import datetime

import cv2
import numpy as np
import pydirectinput
import pyautogui
import tkinter as tk
from PIL import Image, ImageTk
from pynput import keyboard as pynput_keyboard

# ==================== CONFIG ====================
DEBUG = True

HOLD_START_H = 3.00
HOLD_MIN_H   = 0.60
HOLD_MAX_H   = 3.00

HOLD_START_V = 2.00
HOLD_MIN_V   = 0.40
HOLD_MAX_V   = 2.00

HOLD_STEP_UP   = 1.10
HOLD_STEP_DOWN = 0.75

SCORE_GOOD = 0.85
SCORE_MIN  = 0.65

SETTLE_TIME = 0.35

CROP_TOP_PX    = 80
CROP_BOTTOM_PX = 100

PANEL_WIDTH_PX  = 260
PANEL_MARGIN_PX = 20

MIN_MOVE_PX     = 15
MAX_RINGS       = 20
BLACK_THRESHOLD = 12
ANCHOR_DARK_THRESHOLD = 20

H_TEMPLATE_W = 200
H_TEMPLATE_H = 620
V_TEMPLATE_W = 620
V_TEMPLATE_H = 200

MATCH_MIN_SCORE = 0.6

UP_KEY    = 'up'
DOWN_KEY  = 'down'
LEFT_KEY  = 'left'
RIGHT_KEY = 'right'

OPPOSITE = {'up': 'down', 'down': 'up', 'left': 'right', 'right': 'left'}

SNAP_PX = 1
FEATHER = 20

MINIMAP_MAX_W = PANEL_WIDTH_PX - 24
MINIMAP_MAX_H = 240

HOLE_CHECK_EVERY_N_TILES = 10
HOLE_MIN_AREA_FRACTION   = 0.03
HOLE_RECT_FILL_RATIO     = 0.80
HOLE_EDGE_MARGIN         = 2
HOLE_EDGE_SPAN_FRACTION  = 0.55

NAV_MAX_STEPS         = 60
NAV_TOLERANCE         = 100
NAV_HOLD_COARSE       = 1.00
NAV_HOLD_FINE         = 0.15
NAV_COARSE_DISTANCE   = 1200
NAV_OSCILLATION_N     = 4

RESUME_MATCH_MIN_SCORE = 0.75
RESUME_MIN_MAP_SIZE    = 1000

START_GRACE_SECONDS = 0.6

toggle_key = 'q'
# ================================================

script_running = False
stitching_triggered = False
run_start_time = None

tiles_lock = threading.Lock()
live_tiles = []

camera_state_lock = threading.Lock()
camera_state = {
    "wx": 0.0, "wy": 0.0, "direction": "right",
    "tile_w": 1470, "tile_h": 900,
}

hold_h = HOLD_START_H
hold_v = HOLD_START_V

score_history = deque(maxlen=20)

canvas_lock = threading.Lock()
canvas_state = {
    "acc": None, "cnt": None,
    "min_x": 0.0, "min_y": 0.0,
    "tile_w": 0, "tile_h": 0,
    "version": 0,
}

minimap_result_queue = queue.Queue(maxsize=2)
minimap_stop = threading.Event()

status_lock = threading.Lock()
status = {
    "state": "IDLE", "row": 0, "step": 0, "tiles": 0,
    "last_move": "-", "last_disp": "-",
    "hold_h": f"{HOLD_START_H:.2f}", "hold_v": f"{HOLD_START_V:.2f}",
    "last_score": "-", "avg_score": "-",
    "message": "Press Q to start",
}

def set_status(**kw):
    with status_lock:
        status.update(kw)

def get_status():
    with status_lock:
        return dict(status)

def set_camera(**kw):
    with camera_state_lock:
        camera_state.update(kw)

def get_camera():
    with camera_state_lock:
        return dict(camera_state)


def format_elapsed(seconds):
    seconds = int(seconds)
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60
    return f"{h:02d}:{m:02d}:{s:02d}"


def is_horizontal(direction):
    return direction in ('left', 'right')


def hold_bounds(direction):
    if is_horizontal(direction):
        return HOLD_MIN_H, HOLD_MAX_H
    return HOLD_MIN_V, HOLD_MAX_V


# ---------------- Map-edge check ----------------
def anchor_strip_would_be_dark(img, direction):
    if img is None:
        return False
    H, W = img.shape[:2]

    if direction in ('right', 'left'):
        ts_w = min(H_TEMPLATE_W, W - 20)
        ts_h = min(H_TEMPLATE_H, H - 20)
        if direction == 'right':
            x0 = int(W * 0.98) - ts_w
        else:
            x0 = int(W * 0.02)
        y0 = H // 2 - ts_h // 2
        x0 = max(0, min(x0, W - ts_w))
        y0 = max(0, min(y0, H - ts_h))
        strip = img[y0:y0+ts_h, x0:x0+ts_w]
    else:
        ts_w = min(V_TEMPLATE_W, W - 20)
        ts_h = min(V_TEMPLATE_H, H - 20)
        if direction == 'down':
            y0 = int(H * 0.98) - ts_h
        else:
            y0 = int(H * 0.02)
        x0 = W // 2 - ts_w // 2
        x0 = max(0, min(x0, W - ts_w))
        y0 = max(0, min(y0, H - ts_h))
        strip = img[y0:y0+ts_h, x0:x0+ts_w]

    if strip.size == 0:
        return False
    return strip.mean() < ANCHOR_DARK_THRESHOLD


# ---------------- Resume from last map ----------------
def find_latest_stitched_map():
    files = glob.glob("stitched_map_*.png")
    if not files:
        return None
    files.sort(key=os.path.getmtime, reverse=True)
    return files[0]


def try_resume_from_last_map(current_img):
    path = find_latest_stitched_map()
    if path is None:
        print("[RESUME] no previous stitched map found")
        return False, 0.0, 0.0, None

    loaded = cv2.imread(path)
    if loaded is None:
        print(f"[RESUME] could not read {path}")
        return False, 0.0, 0.0, None

    H, W = loaded.shape[:2]
    if W < RESUME_MIN_MAP_SIZE or H < RESUME_MIN_MAP_SIZE:
        print(f"[RESUME] map too small ({W}x{H})")
        return False, 0.0, 0.0, None

    h, w = current_img.shape[:2]
    if h >= H or w >= W:
        print(f"[RESUME] current screenshot is larger than the map")
        return False, 0.0, 0.0, None

    print(f"[RESUME] searching current view inside '{path}' "
          f"({W}x{H})... this may take a moment")

    g_map = cv2.cvtColor(loaded, cv2.COLOR_BGR2GRAY)
    g_cur = cv2.cvtColor(current_img, cv2.COLOR_BGR2GRAY)

    res = cv2.matchTemplate(g_map, g_cur, cv2.TM_CCOEFF_NORMED)
    _, max_val, _, max_loc = cv2.minMaxLoc(res)

    print(f"[RESUME] best match score={max_val:.3f} at {max_loc}")

    if max_val < RESUME_MATCH_MIN_SCORE:
        print(f"[RESUME] match too weak (< {RESUME_MATCH_MIN_SCORE})")
        return False, 0.0, 0.0, None

    wx = float(max_loc[0])
    wy = float(max_loc[1])
    print(f"[RESUME] SUCCESS: current position in world = ({wx:.0f},{wy:.0f})")
    return True, wx, wy, loaded


def load_map_into_canvas(loaded_map, resume_wx, resume_wy):
    with canvas_lock:
        canvas_state["acc"] = loaded_map.astype(np.float64)
        mask_valid = loaded_map.sum(axis=2) > 5
        cnt = mask_valid.astype(np.float64)[:, :, None]
        canvas_state["cnt"] = cnt
        canvas_state["min_x"] = float(-resume_wx)
        canvas_state["min_y"] = float(-resume_wy)
        canvas_state["tile_w"] = 0
        canvas_state["tile_h"] = 0
        canvas_state["version"] += 1
    print(f"[RESUME] canvas origin at ({-resume_wx:.0f},{-resume_wy:.0f}), "
          f"map is {loaded_map.shape[1]}x{loaded_map.shape[0]}")


# ---------------- Nearest unexplored-edge target ----------------
def find_nearest_unexplored_edge():
    """
    Given the current coverage mask, find the world position of the nearest
    location along the frontier of exploration (edges of the explored
    region that are not the outer boundary of the canvas because the canvas
    can grow).

    We look at the four sides of the explored bounding box. For each side,
    we check if the coverage mask's boundary touches the canvas edge on
    that side. If it does NOT touch, the exploration is 'open' in that
    direction and we can go there. If it DOES touch, we skip that side
    because we've likely reached the actual map boundary.

    Returns world (wx, wy) of the best target, or None.
    """
    mask, min_x, min_y = get_coverage_mask()
    if mask is None:
        return None

    with canvas_lock:
        tile_w = canvas_state["tile_w"]
        tile_h = canvas_state["tile_h"]
    if tile_w <= 0 or tile_h <= 0:
        tile_w = 1470
        tile_h = 900

    H, W = mask.shape
    ys, xs = np.where(mask > 0)
    if len(xs) == 0:
        return None

    xmin = xs.min(); xmax = xs.max()
    ymin = ys.min(); ymax = ys.max()

    # Determine which edges of the explored bbox are also edges of the canvas.
    # If an edge of the bbox coincides with the canvas edge, we can't explore
    # further that way via the currently-known data (though we could in the
    # map itself). If it doesn't coincide, there's room to grow.
    touches_left   = (xmin <= 1)
    touches_right  = (xmax >= W - 2)
    touches_top    = (ymin <= 1)
    touches_bottom = (ymax >= H - 2)

    # World coords of the explored bbox corners (tile top-left coords)
    cov_min_x = min_x + xmin
    cov_min_y = min_y + ymin
    cov_max_x = min_x + xmax - tile_w
    cov_max_y = min_y + ymax - tile_h

    mid_x = (cov_min_x + cov_max_x) / 2.0
    mid_y = (cov_min_y + cov_max_y) / 2.0

    cam = get_camera()
    cur_x = cam["wx"]; cur_y = cam["wy"]

    candidates = []
    if not touches_left:
        candidates.append(("left", cov_min_x, mid_y, abs(cur_x - cov_min_x)))
    if not touches_right:
        candidates.append(("right", cov_max_x, mid_y, abs(cov_max_x - cur_x)))
    if not touches_top:
        candidates.append(("top", mid_x, cov_min_y, abs(cur_y - cov_min_y)))
    if not touches_bottom:
        candidates.append(("bottom", mid_x, cov_max_y, abs(cov_max_y - cur_y)))

    if not candidates:
        # Everything touches the canvas edges: the whole explored region
        # is bounded. Fall back to going to the nearest of the four edges
        # anyway, in case the map continues.
        candidates = [
            ("left",   cov_min_x, mid_y, abs(cur_x - cov_min_x)),
            ("right",  cov_max_x, mid_y, abs(cov_max_x - cur_x)),
            ("top",    mid_x, cov_min_y, abs(cur_y - cov_min_y)),
            ("bottom", mid_x, cov_max_y, abs(cov_max_y - cur_y)),
        ]

    best = min(candidates, key=lambda t: t[3])
    print(f"[EDGE-TARGET] side={best[0]} target=({best[1]:.0f},{best[2]:.0f}) "
          f"touches: L={touches_left} R={touches_right} "
          f"T={touches_top} B={touches_bottom}")
    return best[1], best[2]


# ---------------- Minimap worker ----------------
def _composite_canvas_to_bgr():
    with canvas_lock:
        acc = canvas_state["acc"]
        cnt = canvas_state["cnt"]
        if acc is None or cnt is None:
            return None
    cntc = cnt.copy()
    cntc[cntc == 0] = 1
    return (acc / cntc).astype(np.uint8)


def _crop_and_scale(canvas_img):
    with canvas_lock:
        cnt = canvas_state["cnt"]
        min_x = canvas_state["min_x"]
        min_y = canvas_state["min_y"]
    if canvas_img is None or cnt is None:
        return None, 0.0, 0.0, 1.0
    mask = (cnt[:, :, 0] > 0)
    ys, xs = np.where(mask)
    if len(xs) == 0:
        return None, 0.0, 0.0, 1.0
    x0 = xs.min(); x1 = xs.max() + 1
    y0 = ys.min(); y1 = ys.max() + 1
    crop = canvas_img[y0:y1, x0:x1]
    ch, cw = crop.shape[:2]
    scale = min(MINIMAP_MAX_W / cw, MINIMAP_MAX_H / ch)
    out_w = max(1, int(cw * scale))
    out_h = max(1, int(ch * scale))
    small = cv2.resize(crop, (out_w, out_h), interpolation=cv2.INTER_AREA)
    return small, float(min_x + x0), float(min_y + y0), scale


def minimap_worker():
    last_built_version = -1
    cached_small = None
    cached_crop_x = 0.0
    cached_crop_y = 0.0
    cached_scale = 1.0

    while not minimap_stop.is_set():
        try:
            time.sleep(0.15)
        except Exception:
            pass

        with canvas_lock:
            version = canvas_state["version"]
            has_canvas = canvas_state["acc"] is not None

        if not has_canvas:
            continue

        if version != last_built_version:
            try:
                canvas_img = _composite_canvas_to_bgr()
                res = _crop_and_scale(canvas_img)
                small, cx, cy, sc = res
                if small is not None:
                    cached_small = small
                    cached_crop_x = cx
                    cached_crop_y = cy
                    cached_scale = sc
                    last_built_version = version
            except Exception as e:
                print(f"[minimap] worker error: {e}")
                continue

        if cached_small is None:
            continue

        try:
            cam = get_camera()
            img = cached_small.copy()
            center_world_x = cam["wx"] + cam["tile_w"] / 2.0
            center_world_y = cam["wy"] + cam["tile_h"] / 2.0
            mx = int((center_world_x - cached_crop_x) * cached_scale)
            my = int((center_world_y - cached_crop_y) * cached_scale)
            h, w = img.shape[:2]
            mx = max(0, min(mx, w - 1))
            my = max(0, min(my, h - 1))
            cv2.circle(img, (mx, my), 4, (0, 0, 255), -1)
            dirn = cam["direction"]
            arrow_len = 14
            if dirn == 'right':
                tip = (mx + arrow_len, my)
            elif dirn == 'left':
                tip = (mx - arrow_len, my)
            elif dirn == 'down':
                tip = (mx, my + arrow_len)
            else:
                tip = (mx, my - arrow_len)
            tip = (max(0, min(tip[0], w - 1)), max(0, min(tip[1], h - 1)))
            cv2.arrowedLine(img, (mx, my), tip, (0, 0, 255), 2, tipLength=0.5)
        except Exception as e:
            print(f"[minimap] marker error: {e}")
            continue

        try:
            minimap_result_queue.put_nowait(img)
        except queue.Full:
            try:
                minimap_result_queue.get_nowait()
            except queue.Empty:
                pass
            try:
                minimap_result_queue.put_nowait(img)
            except queue.Full:
                pass


def start_minimap_worker():
    t = threading.Thread(target=minimap_worker, daemon=True)
    t.start()
    return t


# ---------------- Overlay ----------------
def start_overlay(screen_w, screen_h):
    root = tk.Tk()
    root.overrideredirect(True)
    root.attributes("-topmost", True)
    try:
        root.attributes("-alpha", 0.9)
    except Exception:
        pass
    try:
        root.wm_attributes("-disabled", True)
    except Exception:
        pass

    x = max(0, screen_w - PANEL_WIDTH_PX - PANEL_MARGIN_PX)
    y = 80
    h = max(320, screen_h - 200)
    root.geometry(f"{PANEL_WIDTH_PX}x{h}+{x}+{y}")
    root.configure(bg="#101010")

    tk.Label(root, text="MAP STITCHER", bg="#101010", fg="#00ff88",
             font=("Consolas", 14, "bold")).pack(pady=(10, 4))
    state_lbl = tk.Label(root, text="IDLE", bg="#101010", fg="#ffff00",
                         font=("Consolas", 16, "bold"))
    state_lbl.pack(pady=(0, 6))

    timer_lbl = tk.Label(root, text="00:00:00", bg="#101010", fg="#00ccff",
                         font=("Consolas", 14, "bold"))
    timer_lbl.pack(pady=(0, 6))

    minimap_frame = tk.Frame(root, bg="#101010")
    minimap_frame.pack(pady=(2, 6))
    minimap_canvas = tk.Canvas(minimap_frame, width=MINIMAP_MAX_W,
                               height=MINIMAP_MAX_H, bg="#181818",
                               highlightthickness=1, highlightbackground="#333")
    minimap_canvas.pack()
    minimap_image_id = minimap_canvas.create_image(
        MINIMAP_MAX_W // 2, MINIMAP_MAX_H // 2, anchor="center")
    minimap_photo = {"img": None}

    body = tk.Label(root, text="", bg="#101010", fg="#dddddd",
                    font=("Consolas", 11), justify="left", anchor="nw")
    body.pack(fill="both", expand=True, padx=10, pady=4)
    msg = tk.Label(root, text="", bg="#101010", fg="#88ccff",
                   font=("Consolas", 10, "italic"),
                   wraplength=PANEL_WIDTH_PX - 20, justify="left", anchor="w")
    msg.pack(fill="x", padx=10, pady=(2, 10))

    def refresh():
        try:
            if run_start_time is not None:
                timer_lbl.config(text=format_elapsed(time.time() - run_start_time))
            else:
                timer_lbl.config(text="00:00:00")

            s = get_status()
            state_lbl.config(text=s["state"])
            body.config(text=(
                f"Row  : {s['row']}\n"
                f"Step : {s['step']}\n"
                f"Tiles: {s['tiles']}\n"
                f"Key  : {s['last_move']}\n"
                f"Disp : {s['last_disp']}\n"
                f"HoldH: {s['hold_h']}s\n"
                f"HoldV: {s['hold_v']}s\n"
                f"Match: {s['last_score']}\n"
                f"Avg  : {s['avg_score']}\n"
            ))
            msg.config(text=s["message"])

            try:
                latest = None
                while True:
                    try:
                        latest = minimap_result_queue.get_nowait()
                    except queue.Empty:
                        break
                if latest is not None:
                    rgb = cv2.cvtColor(latest, cv2.COLOR_BGR2RGB)
                    pil = Image.fromarray(rgb)
                    photo = ImageTk.PhotoImage(pil)
                    minimap_photo["img"] = photo
                    minimap_canvas.itemconfig(minimap_image_id, image=photo)
            except Exception as e:
                print(f"[overlay] minimap update error: {e}")
        except Exception as e:
            print(f"[overlay] refresh error: {e}")
        finally:
            try:
                root.after(200, refresh)
            except Exception:
                pass

    print(f"[overlay] at ({x},{y}) size {PANEL_WIDTH_PX}x{h}")
    root.after(200, refresh)
    root.mainloop()


# ---------------- Capture ----------------
def capture_screen():
    shot = pyautogui.screenshot()
    img = cv2.cvtColor(np.array(shot), cv2.COLOR_RGB2BGR)
    h, w = img.shape[:2]
    top = min(CROP_TOP_PX, h - 1)
    bot = h - CROP_BOTTOM_PX if CROP_BOTTOM_PX < h else h
    img = img[top:bot, :]
    h2, w2 = img.shape[:2]
    usable_right = w2 - (PANEL_WIDTH_PX + PANEL_MARGIN_PX + 10)
    if usable_right > 200:
        img = img[:, :usable_right]
    return img

def is_black(img):
    return img.mean() < BLACK_THRESHOLD


# ---------------- Directional strip matching ----------------
def measure_displacement(prev, curr, expected_direction, min_pixels=MIN_MOVE_PX):
    if prev is None or curr is None or prev.shape != curr.shape:
        return False, 0.0, 0.0, 0.0

    g_prev = cv2.cvtColor(prev, cv2.COLOR_BGR2GRAY)
    g_curr = cv2.cvtColor(curr, cv2.COLOR_BGR2GRAY)
    H, W = g_prev.shape

    if expected_direction in ('right', 'left'):
        ts_w = min(H_TEMPLATE_W, W - 20)
        ts_h = min(H_TEMPLATE_H, H - 20)
        ys = [int(H * f) - ts_h // 2 for f in (0.10, 0.30, 0.50, 0.70)]
        ys = [max(0, min(y, H - ts_h)) for y in ys]
        if expected_direction == 'right':
            xs = [int(W * f) - ts_w for f in (0.98, 0.92, 0.85, 0.78, 0.70)]
        else:
            xs = [int(W * f) for f in (0.02, 0.08, 0.15, 0.22, 0.30)]
        best = None
        for x in xs:
            for y in ys:
                if x < 0 or y < 0 or x + ts_w > W or y + ts_h > H:
                    continue
                tmpl = g_prev[y:y+ts_h, x:x+ts_w]
                if tmpl.shape[0] >= g_curr.shape[0] or tmpl.shape[1] >= g_curr.shape[1]:
                    continue
                band = g_curr[y:y+ts_h, :]
                if band.shape[1] < ts_w:
                    continue
                res = cv2.matchTemplate(band, tmpl, cv2.TM_CCOEFF_NORMED)
                _, val, _, loc = cv2.minMaxLoc(res)
                dx = loc[0] - x; dy = 0
                if best is None or val > best[0]:
                    best = (val, dx, dy)
        if best is None:
            return False, 0.0, 0.0, 0.0
        score, dx, dy = best
    else:
        ts_w = min(V_TEMPLATE_W, W - 20)
        ts_h = min(V_TEMPLATE_H, H - 20)
        xs = [int(W * f) - ts_w // 2 for f in (0.10, 0.30, 0.50, 0.70)]
        xs = [max(0, min(x, W - ts_w)) for x in xs]
        if expected_direction == 'down':
            ys = [int(H * f) - ts_h for f in (0.98, 0.92, 0.85, 0.78, 0.70)]
        else:
            ys = [int(H * f) for f in (0.02, 0.08, 0.15, 0.22, 0.30)]
        best = None
        for y in ys:
            for x in xs:
                if x < 0 or y < 0 or x + ts_w > W or y + ts_h > H:
                    continue
                tmpl = g_prev[y:y+ts_h, x:x+ts_w]
                if tmpl.shape[0] >= g_curr.shape[0] or tmpl.shape[1] >= g_curr.shape[1]:
                    continue
                band = g_curr[:, x:x+ts_w]
                if band.shape[0] < ts_h:
                    continue
                res = cv2.matchTemplate(band, tmpl, cv2.TM_CCOEFF_NORMED)
                _, val, _, max_loc = cv2.minMaxLoc(res)
                dx = 0; dy = max_loc[1] - y
                if best is None or val > best[0]:
                    best = (val, dx, dy)
        if best is None:
            return False, 0.0, 0.0, 0.0
        score, dx, dy = best

    if score < MATCH_MIN_SCORE:
        return False, 0.0, 0.0, score

    mag = float(np.hypot(dx, dy))
    if mag < min_pixels:
        return False, 0.0, 0.0, score

    if expected_direction == 'right' and dx > -min_pixels:
        return False, 0.0, 0.0, score
    if expected_direction == 'left' and dx < min_pixels:
        return False, 0.0, 0.0, score
    if expected_direction == 'down' and dy > -min_pixels:
        return False, 0.0, 0.0, score
    if expected_direction == 'up' and dy < min_pixels:
        return False, 0.0, 0.0, score

    return True, float(dx), float(dy), score


# ---------------- Movement ----------------
def move_character_safely(key, hold_duration):
    if stitching_triggered:
        return True
    pydirectinput.keyDown(key)
    t0 = time.time()
    while time.time() - t0 < hold_duration:
        if stitching_triggered:
            pydirectinput.keyUp(key)
            return True
        time.sleep(0.01)
    pydirectinput.keyUp(key)
    return False


def try_move(key, direction, prev_img, hold_time_local, max_attempts=3):
    current_hold = hold_time_local
    h_min, _ = hold_bounds(direction)

    for attempt in range(max_attempts):
        if stitching_triggered or not script_running:
            return False, 0.0, 0.0, None, 0.0, current_hold, "stopped"

        move_character_safely(key, current_hold)
        time.sleep(SETTLE_TIME)
        curr = capture_screen()

        if is_black(curr):
            move_character_safely(OPPOSITE[key], current_hold)
            time.sleep(SETTLE_TIME)
            current_hold = max(current_hold * HOLD_STEP_DOWN, h_min)
            continue

        ok, dx, dy, score = measure_displacement(prev_img, curr, direction)
        if ok:
            return True, -dx, -dy, curr, score, current_hold, "ok"

        new_hold = max(current_hold * HOLD_STEP_DOWN, h_min)
        move_character_safely(OPPOSITE[key], current_hold)
        time.sleep(SETTLE_TIME)
        current_hold = new_hold

    return False, 0.0, 0.0, None, 0.0, current_hold, "failed"


# ---------------- Fast incremental stitch ----------------
def reset_canvas_state():
    with canvas_lock:
        canvas_state["acc"] = None
        canvas_state["cnt"] = None
        canvas_state["min_x"] = 0.0
        canvas_state["min_y"] = 0.0
        canvas_state["tile_w"] = 0
        canvas_state["tile_h"] = 0
        canvas_state["version"] += 1


def add_tile_to_canvas(wx, wy, img):
    h, w = img.shape[:2]
    with canvas_lock:
        if canvas_state["acc"] is None:
            canvas_state["acc"] = img.astype(np.float64)
            canvas_state["cnt"] = np.ones((h, w, 1), np.float64)
            canvas_state["min_x"] = float(wx)
            canvas_state["min_y"] = float(wy)
            canvas_state["tile_w"] = w
            canvas_state["tile_h"] = h
            canvas_state["version"] += 1
            return

        W_canvas = canvas_state["acc"].shape[1]
        H_canvas = canvas_state["acc"].shape[0]
        min_x = canvas_state["min_x"]; min_y = canvas_state["min_y"]

        new_min_x = min(min_x, wx); new_min_y = min(min_y, wy)
        new_max_x = max(min_x + W_canvas, wx + w)
        new_max_y = max(min_y + H_canvas, wy + h)
        new_W = int(round(new_max_x - new_min_x))
        new_H = int(round(new_max_y - new_min_y))

        if (new_W, new_H) != (W_canvas, H_canvas):
            pad_left = int(round(min_x - new_min_x))
            pad_top = int(round(min_y - new_min_y))
            pad_right = new_W - W_canvas - pad_left
            pad_bottom = new_H - H_canvas - pad_top
            acc = canvas_state["acc"]; cnt = canvas_state["cnt"]
            if pad_left or pad_top or pad_right or pad_bottom:
                acc = np.pad(acc,
                             ((pad_top, pad_bottom), (pad_left, pad_right), (0, 0)),
                             mode='constant', constant_values=0)
                cnt = np.pad(cnt,
                             ((pad_top, pad_bottom), (pad_left, pad_right), (0, 0)),
                             mode='constant', constant_values=0)
            canvas_state["acc"] = acc
            canvas_state["cnt"] = cnt
            canvas_state["min_x"] = new_min_x
            canvas_state["min_y"] = new_min_y

        acc = canvas_state["acc"]; cnt = canvas_state["cnt"]
        min_x = canvas_state["min_x"]; min_y = canvas_state["min_y"]
        tx = int(round(wx - min_x)); ty = int(round(wy - min_y))

        weight = np.ones((h, w), np.float32)
        f = min(FEATHER, h // 4, w // 4)
        if f > 0:
            ramp = np.linspace(0, 1, f, dtype=np.float32)
            weight[:f, :] *= ramp[:, None]
            weight[-f:, :] *= ramp[::-1, None]
            weight[:, :f] *= ramp[None, :]
            weight[:, -f:] *= ramp[None, ::-1]

        im_f = img.astype(np.float64)
        for c in range(3):
            acc[ty:ty+h, tx:tx+w, c] += im_f[:, :, c] * weight
        cnt[ty:ty+h, tx:tx+w, 0] += weight
        canvas_state["version"] += 1


def incremental_save(ts):
    with canvas_lock:
        acc = canvas_state["acc"]; cnt = canvas_state["cnt"]
        if acc is None or cnt is None:
            return
        cntc = cnt.copy(); cntc[cntc == 0] = 1
        canvas = (acc / cntc).astype(np.uint8)
    out = f"stitched_map_{ts}.png"
    cv2.imwrite(out, canvas)
    with tiles_lock:
        n = len(live_tiles)
    print(f"[incremental] saved {out} ({canvas.shape[1]}x{canvas.shape[0]}, {n} tiles)")


def get_coverage_mask():
    with canvas_lock:
        cnt = canvas_state["cnt"]
        min_x = canvas_state["min_x"]; min_y = canvas_state["min_y"]
        if cnt is None:
            return None, 0.0, 0.0
        mask = (cnt[:, :, 0] > 0).astype(np.uint8) * 255
    return mask, min_x, min_y


# ---------------- Hole detection ----------------
def detect_holes():
    mask, min_x, min_y = get_coverage_mask()
    if mask is None:
        return []

    kernel = np.ones((3, 3), np.uint8)
    closed = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel, iterations=2)
    inv = cv2.bitwise_not(closed)

    h, w = inv.shape
    ff = inv.copy()
    flood_mask = np.zeros((h + 2, w + 2), np.uint8)
    cv2.floodFill(ff, flood_mask, (0, 0), 0)
    cv2.floodFill(ff, flood_mask, (w - 1, 0), 0)
    cv2.floodFill(ff, flood_mask, (0, h - 1), 0)
    cv2.floodFill(ff, flood_mask, (w - 1, h - 1), 0)

    contours, _ = cv2.findContours(ff, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return []

    with canvas_lock:
        tile_area = canvas_state["tile_w"] * canvas_state["tile_h"]
    if tile_area <= 0:
        tile_area = 1470 * 900
    min_area = HOLE_MIN_AREA_FRACTION * tile_area

    holes = []
    for c in contours:
        area = cv2.contourArea(c)
        if area < min_area:
            continue
        x, y, ww, hh = cv2.boundingRect(c)
        rect_area = ww * hh
        if rect_area <= 0:
            continue
        fill = area / rect_area
        if fill < HOLE_RECT_FILL_RATIO:
            continue
        if (x <= HOLE_EDGE_MARGIN and ww > HOLE_EDGE_SPAN_FRACTION * w):
            continue
        if (y <= HOLE_EDGE_MARGIN and hh > HOLE_EDGE_SPAN_FRACTION * h):
            continue
        if (x + ww >= w - HOLE_EDGE_MARGIN and ww > HOLE_EDGE_SPAN_FRACTION * w):
            continue
        if (y + hh >= h - HOLE_EDGE_MARGIN and hh > HOLE_EDGE_SPAN_FRACTION * h):
            continue

        wx = min_x + x
        wy = min_y + y
        holes.append((wx, wy, area, (x, y, ww, hh)))

    holes.sort(key=lambda t: -t[2])
    return holes


# ---------------- Nearest-border target ----------------
def nearest_border_target():
    mask, min_x, min_y = get_coverage_mask()
    if mask is None:
        return None
    with canvas_lock:
        tile_w = canvas_state["tile_w"]
        tile_h = canvas_state["tile_h"]
    if tile_w <= 0 or tile_h <= 0:
        tile_w = 1470
        tile_h = 900

    ys, xs = np.where(mask > 0)
    if len(xs) == 0:
        return None

    xmin = xs.min(); xmax = xs.max()
    ymin = ys.min(); ymax = ys.max()

    cov_min_x = min_x + xmin
    cov_min_y = min_y + ymin
    cov_max_x = min_x + xmax - tile_w
    cov_max_y = min_y + ymax - tile_h

    cam = get_camera()
    cur_x = cam["wx"]; cur_y = cam["wy"]

    d_left   = abs(cur_x - cov_min_x)
    d_right  = abs(cov_max_x - cur_x)
    d_top    = abs(cur_y - cov_min_y)
    d_bottom = abs(cov_max_y - cur_y)

    best_side = min(
        [("left", d_left), ("right", d_right),
         ("top", d_top), ("bottom", d_bottom)],
        key=lambda t: t[1]
    )[0]

    mid_x = (cov_min_x + cov_max_x) / 2.0
    mid_y = (cov_min_y + cov_max_y) / 2.0

    if best_side == "left":
        target = (cov_min_x, mid_y)
    elif best_side == "right":
        target = (cov_max_x, mid_y)
    elif best_side == "top":
        target = (mid_x, cov_min_y)
    else:
        target = (mid_x, cov_max_y)

    print(f"[BORDER] nearest side={best_side} "
          f"target=({target[0]:.0f},{target[1]:.0f})")
    return target


# ---------------- Navigate to target ----------------
def navigate_to(target_world_x, target_world_y, prev_img):
    cam = get_camera()
    cur_x = cam["wx"]; cur_y = cam["wy"]
    img = prev_img

    recent_x_dirs = deque(maxlen=NAV_OSCILLATION_N)
    recent_y_dirs = deque(maxlen=NAV_OSCILLATION_N)

    for step_i in range(NAV_MAX_STEPS):
        if stitching_triggered or not script_running:
            return False, cur_x, cur_y, img

        dx_world = target_world_x - cur_x
        dy_world = target_world_y - cur_y

        if abs(dx_world) < NAV_TOLERANCE and abs(dy_world) < NAV_TOLERANCE:
            print(f"[NAV] reached ({cur_x:.0f},{cur_y:.0f})")
            return True, cur_x, cur_y, img

        need_x = abs(dx_world) >= NAV_TOLERANCE
        need_y = abs(dy_world) >= NAV_TOLERANCE
        if need_x and need_y:
            if abs(dx_world) >= abs(dy_world):
                direction = 'right' if dx_world > 0 else 'left'
            else:
                direction = 'down' if dy_world > 0 else 'up'
        elif need_x:
            direction = 'right' if dx_world > 0 else 'left'
        elif need_y:
            direction = 'down' if dy_world > 0 else 'up'
        else:
            return True, cur_x, cur_y, img

        total_dist = max(abs(dx_world), abs(dy_world))
        nav_hold = NAV_HOLD_COARSE if total_dist > NAV_COARSE_DISTANCE else NAV_HOLD_FINE

        if direction in ('left', 'right'):
            recent_x_dirs.append(direction)
            if len(recent_x_dirs) == NAV_OSCILLATION_N and \
                    all(recent_x_dirs[i] != recent_x_dirs[i+1]
                        for i in range(len(recent_x_dirs) - 1)):
                print(f"[NAV] oscillating on X -> stop")
                return True, cur_x, cur_y, img
        else:
            recent_y_dirs.append(direction)
            if len(recent_y_dirs) == NAV_OSCILLATION_N and \
                    all(recent_y_dirs[i] != recent_y_dirs[i+1]
                        for i in range(len(recent_y_dirs) - 1)):
                print(f"[NAV] oscillating on Y -> stop")
                return True, cur_x, cur_y, img

        key = {'right': RIGHT_KEY, 'left': LEFT_KEY,
               'up': UP_KEY, 'down': DOWN_KEY}[direction]

        set_status(state="FILLING",
                   message=f"nav {direction} hold={nav_hold:.2f} "
                           f"dx={dx_world:.0f} dy={dy_world:.0f}")
        set_camera(direction=direction)

        ok, mdx, mdy, curr, score, _, why = try_move(
            key, direction, img, nav_hold, max_attempts=2
        )
        if not ok:
            print(f"[NAV] failed to move {direction}")
            return False, cur_x, cur_y, img

        cur_x += mdx; cur_y += mdy
        img = curr
        set_camera(wx=cur_x, wy=cur_y)

    print("[NAV] max steps reached")
    return False, cur_x, cur_y, img


# ---------------- Hole fill ----------------
def try_fill_hole(hole, prev_img, folder, ts, idx, tile_w, tile_h):
    hx, hy, area, rect = hole
    print(f"[HOLE] filling hole at world ({hx:.0f},{hy:.0f}) area={area:.0f}")

    ok, cur_x, cur_y, img = navigate_to(hx, hy, prev_img)
    if not ok:
        print("[HOLE] nav failed, skipping hole")
        return False, idx, prev_img

    idx += 1
    name = f"tile_{idx:04d}_hole.png"
    cv2.imwrite(os.path.join(folder, name), img)
    thumb = cv2.resize(img, (180, 110), interpolation=cv2.INTER_AREA)
    with tiles_lock:
        live_tiles.append((cur_x, cur_y, name, img, thumb))
        n = len(live_tiles)
    set_camera(wx=cur_x, wy=cur_y, tile_w=tile_w, tile_h=tile_h)
    set_status(tiles=n, message=f"filled hole -> tile {n}")

    add_tile_to_canvas(cur_x, cur_y, img)
    incremental_save(ts)

    return True, idx, img


# ---------------- Spiral ----------------
def spiral_capture(folder, ts, start_wx=0.0, start_wy=0.0, start_img=None):
    global hold_h, hold_v

    world_x, world_y = start_wx, start_wy
    prev_img = start_img

    with tiles_lock:
        live_tiles.clear()
    score_history.clear()

    if prev_img is None:
        reset_canvas_state()
        first = capture_screen()
        idx = 0
        name = f"tile_{idx:04d}.png"
        cv2.imwrite(os.path.join(folder, name), first)
        thumb = cv2.resize(first, (180, 110), interpolation=cv2.INTER_AREA)
        tile_h, tile_w = first.shape[:2]

        with tiles_lock:
            live_tiles.append((world_x, world_y, name, first, thumb))

        prev_img = first
        print(f"{name} world=(0,0)  size={first.shape[1]}x{first.shape[0]}")

        set_camera(wx=world_x, wy=world_y, direction='right',
                   tile_w=tile_w, tile_h=tile_h)
        set_status(tiles=1, hold_h=f"{hold_h:.2f}", hold_v=f"{hold_v:.2f}",
                   last_score="-", avg_score="-")

        add_tile_to_canvas(world_x, world_y, first)
        incremental_save(ts)
        idx = 0
    else:
        tile_h, tile_w = prev_img.shape[:2]
        idx = 0
        thumb = cv2.resize(prev_img, (180, 110), interpolation=cv2.INTER_AREA)
        with tiles_lock:
            live_tiles.append((world_x, world_y, f"tile_{idx:04d}_resume.png",
                               prev_img, thumb))
        set_camera(wx=world_x, wy=world_y, direction='right',
                   tile_w=tile_w, tile_h=tile_h)
        set_status(tiles=1, message=f"resumed at ({world_x:.0f},{world_y:.0f})")
        # Note: don't re-add the current view to the canvas here; it's already
        # inside the loaded map.

        # --- Head to nearest unexplored edge before spiraling ---
        target = find_nearest_unexplored_edge()
        if target is not None:
            set_status(state="HEADING",
                       message=f"heading to edge "
                               f"({target[0]:.0f},{target[1]:.0f})")
            okn, world_x, world_y, prev_img = navigate_to(
                target[0], target[1], prev_img
            )
            set_camera(wx=world_x, wy=world_y,
                       tile_w=tile_w, tile_h=tile_h)
            if okn:
                # Save this new position as a fresh tile
                idx += 1
                name = f"tile_{idx:04d}_edge.png"
                cv2.imwrite(os.path.join(folder, name), prev_img)
                thumb2 = cv2.resize(prev_img, (180, 110),
                                    interpolation=cv2.INTER_AREA)
                with tiles_lock:
                    live_tiles.append((world_x, world_y, name, prev_img, thumb2))
                add_tile_to_canvas(world_x, world_y, prev_img)
                incremental_save(ts)

    try:
        holes = detect_holes()
    except Exception as e:
        print(f"[HOLE] detection at start error: {e}")
        holes = []
    if holes:
        print(f"[HOLE] {len(holes)} hole(s) detected at start")
        for hole in holes[:5]:
            if stitching_triggered or not script_running:
                break
            okf, idx, prev_img = try_fill_hole(
                hole, prev_img, folder, ts, idx, tile_w, tile_h
            )

    tiles_since_hole_check = 0

    cycle = [
        (1,  0, RIGHT_KEY, 'right'),
        (0,  1, DOWN_KEY,  'down'),
        (-1, 0, LEFT_KEY,  'left'),
        (0, -1, UP_KEY,    'up'),
    ]
    dir_idx = 0
    step_len = 1
    legs = 0

    while legs < MAX_RINGS * 2:
        if stitching_triggered or not script_running:
            break
        _, _, key, direction = cycle[dir_idx]

        if anchor_strip_would_be_dark(prev_img, direction):
            print(f"[EDGE] anchor strip for {direction} is dark -> turning")
            set_status(state="EDGE",
                       message=f"edge ahead ({direction}), turning")
            dir_idx = (dir_idx + 1) % 4
            legs += 1
            if legs % 2 == 0:
                step_len += 1
            time.sleep(0.2)
            continue

        step_done = 0
        for step in range(step_len):
            if stitching_triggered or not script_running:
                break

            set_status(state="MOVING", row=legs + 1, step=step + 1,
                       last_move=key, message=f"Press {key} ({direction})")
            set_camera(direction=direction)

            current_hold = hold_h if is_horizontal(direction) else hold_v

            success, mdx, mdy, curr, score, final_hold, why = try_move(
                key, direction, prev_img, current_hold
            )

            if not success:
                if why == "stopped":
                    return
                print(f"[TURN] could not move {direction}, turning")
                set_status(state="EDGE",
                           message=f"could not move {direction}, turning")
                dir_idx = (dir_idx + 1) % 4
                break

            if is_horizontal(direction):
                hold_h = final_hold
            else:
                hold_v = final_hold

            score_history.append(score)
            avg_score = sum(score_history) / len(score_history)

            new_wx = world_x + mdx
            new_wy = world_y + mdy
            print(f"[PLACE] world=({new_wx:.0f},{new_wy:.0f}) "
                  f"mdx={mdx:.0f} mdy={mdy:.0f} score={score:.3f} "
                  f"avg={avg_score:.3f} holdH={hold_h:.2f} holdV={hold_v:.2f}")

            h_min, h_max = hold_bounds(direction)
            if score >= SCORE_GOOD:
                new_hold = min(final_hold * HOLD_STEP_UP, h_max)
                if abs(new_hold - final_hold) > 1e-3:
                    print(f"[ADAPT] score={score:.2f} good -> "
                          f"hold {final_hold:.2f} -> {new_hold:.2f}")
                if is_horizontal(direction):
                    hold_h = new_hold
                else:
                    hold_v = new_hold
            elif score < SCORE_MIN:
                new_hold = max(final_hold * HOLD_STEP_DOWN, h_min)
                print(f"[ADAPT] score={score:.2f} low -> "
                      f"hold {final_hold:.2f} -> {new_hold:.2f}")
                if is_horizontal(direction):
                    hold_h = new_hold
                else:
                    hold_v = new_hold
            else:
                print(f"[ADAPT] score={score:.2f} ok -> hold stays {final_hold:.2f}")

            world_x, world_y = new_wx, new_wy
            prev_img = curr

            idx += 1
            name = f"tile_{idx:04d}.png"
            cv2.imwrite(os.path.join(folder, name), curr)
            thumb = cv2.resize(curr, (180, 110), interpolation=cv2.INTER_AREA)

            with tiles_lock:
                live_tiles.append((world_x, world_y, name, curr, thumb))
                n_tiles = len(live_tiles)

            set_camera(wx=world_x, wy=world_y, direction=direction,
                       tile_w=tile_w, tile_h=tile_h)
            set_status(tiles=n_tiles,
                       last_disp=f"({mdx:+.0f},{mdy:+.0f})",
                       hold_h=f"{hold_h:.2f}", hold_v=f"{hold_v:.2f}",
                       last_score=f"{score:.3f}",
                       avg_score=f"{avg_score:.3f}",
                       message=f"tile {n_tiles}")

            try:
                add_tile_to_canvas(world_x, world_y, curr)
                incremental_save(ts)
            except Exception as e:
                print(f"[incremental] error: {e}")

            step_done += 1
            tiles_since_hole_check += 1

            if tiles_since_hole_check >= HOLE_CHECK_EVERY_N_TILES:
                tiles_since_hole_check = 0
                try:
                    holes = detect_holes()
                except Exception as e:
                    print(f"[HOLE] detection error: {e}")
                    holes = []
                if holes:
                    print(f"[HOLE] {len(holes)} hole(s) detected")
                    for hole in holes[:3]:
                        if stitching_triggered or not script_running:
                            break
                        okf, idx, prev_img = try_fill_hole(
                            hole, prev_img, folder, ts, idx, tile_w, tile_h
                        )
                    target = nearest_border_target()
                    if target is not None:
                        set_status(state="RETURNING",
                                   message=f"returning to border")
                        okn, world_x, world_y, prev_img = navigate_to(
                            target[0], target[1], prev_img
                        )
                        set_camera(wx=world_x, wy=world_y,
                                   tile_w=tile_w, tile_h=tile_h)
                        dir_idx = 0
                        step_len = 1
                        legs = 0

        if step_done == step_len:
            legs += 1
            dir_idx = (dir_idx + 1) % 4
            if legs % 2 == 0:
                step_len += 1

    print("[DONE] spiral finished")


# ---------------- Keyboard ----------------
def on_press(key):
    global script_running, stitching_triggered, run_start_time
    try:
        if hasattr(key, 'char') and key.char == toggle_key:
            if not script_running and not stitching_triggered:
                script_running = True
                run_start_time = time.time()
                set_status(state="STARTING", message="running")
                print("[Q] START")
            else:
                if run_start_time is not None and \
                        (time.time() - run_start_time) < START_GRACE_SECONDS:
                    print("[Q] stop ignored (within startup grace)")
                    return
                script_running = False
                stitching_triggered = True
                run_start_time = None
                set_status(state="STOPPING", message="finishing")
                print("[Q] STOP")
    except AttributeError:
        pass


# ---------------- Main loop ----------------
def main_loop():
    global script_running, stitching_triggered, hold_h, hold_v
    while True:
        if script_running:
            time.sleep(0.2)
            ts = datetime.now().strftime("%Y%m%d_%H%M%S")
            folder = f"screenshots_{ts}"
            os.makedirs(folder, exist_ok=True)

            hold_h = HOLD_START_H
            hold_v = HOLD_START_V

            set_status(state="READY", row=0, step=0, tiles=0,
                       last_move="-", last_disp="-",
                       hold_h=f"{hold_h:.2f}", hold_v=f"{hold_v:.2f}",
                       last_score="-", avg_score="-",
                       message="Checking for prior map...")
            print(f"\n>>> Output folder: {folder}\n")

            current_shot = capture_screen()
            ok_resume, rx, ry, loaded_map = try_resume_from_last_map(current_shot)

            if ok_resume:
                set_status(state="RESUMING",
                           message=f"resumed at ({rx:.0f},{ry:.0f})")
                reset_canvas_state()
                load_map_into_canvas(loaded_map, rx, ry)
                try:
                    spiral_capture(folder, ts,
                                   start_wx=0.0, start_wy=0.0,
                                   start_img=current_shot)
                except Exception as e:
                    print(f"[!] capture error: {e}")
                    set_status(state="ERROR", message=str(e))
            else:
                set_status(state="READY",
                           message=f"Folder: {folder}\nRunning fresh...")
                try:
                    spiral_capture(folder, ts)
                except Exception as e:
                    print(f"[!] capture error: {e}")
                    set_status(state="ERROR", message=str(e))

            set_status(state="STITCHING", message="final stitch")
            try:
                incremental_save(ts)
            except Exception as e:
                print(f"[!] stitch error: {e}")

            script_running = False
            stitching_triggered = False
            set_status(state="IDLE", message="press Q to start again")
        time.sleep(0.1)


if __name__ == "__main__":
    screen_w, screen_h = pyautogui.size()
    print(f"primary monitor: {screen_w}x{screen_h}")

    start_minimap_worker()

    listener = pynput_keyboard.Listener(on_press=on_press)
    listener.start()

    worker = threading.Thread(target=main_loop, daemon=True)
    worker.start()

    start_overlay(screen_w, screen_h)