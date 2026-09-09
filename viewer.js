// Part 1

// Merge the three per-tab data files (arcanummaps.js, cerestoredmaps.js, modulesmaps.js)
// into the single ArcanumMapData array the rest of this file expects. Each guard falls
// back to an empty array so a syntax error in just one file doesn't take down the others.
const ArcanumMapData = [
    ...(typeof ArcanumCitiesMapData !== 'undefined' ? ArcanumCitiesMapData : []),
    ...(typeof CERestoredMapData !== 'undefined' ? CERestoredMapData : []),
    ...(typeof ModulesMapData !== 'undefined' ? ModulesMapData : [])
];

const menuContainer = document.getElementById('menu-container');
const viewport = document.getElementById('viewport');
const container = document.getElementById('pan-container');
const img = document.getElementById('zoomImage');
const toggleCreatorModeBtn = document.getElementById('toggleCreatorModeBtn');
const toolStatus = document.getElementById('tool-status');
const creatorPanel = document.getElementById('creator-panel');
const coordDisplay = document.getElementById('coord-display');
const newLabelText = document.getElementById('new-label-text');
const newLabelDesc = document.getElementById('new-label-desc');
const newLabelLinks = document.getElementById('new-label-links');
const addToPreviewBtn = document.getElementById('add-to-preview-btn');
const copyEditsBtn = document.getElementById('copy-edits-btn');
const categoryField = document.getElementById('category-field');
const newLabelCategoryChecks = document.querySelectorAll('.new-label-cat-chk');
const waypointFields = document.getElementById('waypoint-fields');
const newLabelTargetMap = document.getElementById('new-label-target-map');
const newLabelTargetX = document.getElementById('new-label-target-x');
const newLabelTargetY = document.getElementById('new-label-target-y');

const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');

const filterDropdownBtn = document.getElementById('filterDropdownBtn');
const filterDropdownContent = document.getElementById('filterDropdownContent');
const chkQuest = document.getElementById('chk-quest');
const chkFollowers = document.getElementById('chk-followers');
const chkShop = document.getElementById('chk-shop');
const chkWaypoint = document.getElementById('chk-waypoint');
const chkKey = document.getElementById('chk-key');
const chkNpc = document.getElementById('chk-npc');
const chkChest = document.getElementById('chk-chest');
const chkInformation = document.getElementById('chk-information');
const chkAltar = document.getElementById('chk-altar');
const chkBounty = document.getElementById('chk-bounty');
const chkOverworldAll = document.getElementById('chk-overworld-all');
const lblOverworldAll = document.getElementById('lbl-overworld-all');

const mapCoordinatesHud = document.getElementById('map-coordinates-hud');
const hudValW = document.getElementById('hud-val-w');
const hudValS = document.getElementById('hud-val-s');
const hudBoxW = document.getElementById('hud-box-w');
const hudBoxS = document.getElementById('hud-box-s');
const hudBoxZoom = document.getElementById('hud-box-zoom');
const hudValZoom = document.getElementById('hud-val-zoom');

const musicToggleBtn = document.getElementById('musicToggleBtn');
const musicVolumeSlider = document.getElementById('musicVolumeSlider');
const shareLinkBtn = document.getElementById('shareLinkBtn');
const questListBtn = document.getElementById('questListBtn');
const questListPanel = document.getElementById('quest-list-panel');
const questPanelMapName = document.getElementById('quest-panel-mapname');
const questPanelContent = document.getElementById('quest-panel-content');
const questPanelClose = document.getElementById('quest-panel-close');
const bgMusicAudioA = new Audio();
const bgMusicAudioB = new Audio();
bgMusicAudioA.loop = true;
bgMusicAudioB.loop = true;
bgMusicAudioA.onerror = () => console.warn(`Could not load background music track: "${bgMusicAudioA.src}"`);
bgMusicAudioB.onerror = () => console.warn(`Could not load background music track: "${bgMusicAudioB.src}"`);
let activeMusicAudio = bgMusicAudioA;
let inactiveMusicAudio = bgMusicAudioB;
let musicFadeRAF = null;
const MUSIC_FADE_MS = 1800;

let domElementsRegistry = []; 
let scale = 1;
let posX = 0;
let posY = 0;

let isDragging = false;
let startX = 0;
let startY = 0;
let isCreatorMode = false;

// Screen-space tracking used to tell a real click apart from a pan-drag
let mouseDownScreenX = 0;
let mouseDownScreenY = 0;
let hasDraggedPastThreshold = false;
const CLICK_DRAG_THRESHOLD = 4; // px of movement before a mousedown->mouseup counts as a pan, not a click

// Dragging an existing/pending label pin to reposition it
let isDraggingLabel = false;
let draggedLabelData = null;
let draggedLabelElements = null;
let draggedLabelCoordMode = "local";
let dragLastScreenX = 0;
let dragLastScreenY = 0;
let suppressNextLabelClick = false;

// Labels added in this editing session, not yet part of the map's own labels array
let pendingNewLabels = [];

let clickMapX = 0;
let clickMapY = 0;
let currentMapFilename = ""; 
let currentMapType = ""; 
let activeModCategory = "arcanum"; 

let currentMusicPath = null;
let isMusicMuted = false;
let musicVolume = 0.5;

const minScale = 0.05;
const maxScale = 12;

const filterRegistry = {
    quest: true,
    followers: true,
    shop: true,
    waypoint: true,
    key: true,
    npc: true,
    chest: true,
    information: true,
    altar: true,
    bounty: true,
    overworldAll: true
};

const CATEGORY_EMOJI = {
    quest: '📜',
    followers: '🛡️',
    shop: '🪙',
    waypoint: '🚪',
    key: '🔑',
    npc: '🧑',
    chest: '📦',
    information: 'ℹ️',
    altar: '🕯️',
    bounty: '💰'
};

const CATEGORY_COLORS = {
    quest: '#ffaa00',
    followers: '#5dade2',
    shop: '#2ecc71',
    waypoint: '#e74c3c',
    key: '#9b59b6',
    npc: '#20b2aa',
    chest: '#8b5a2b',
    information: '#95a5a6',
    altar: '#6c5ce7',
    bounty: '#e84393'
};

// Shop markup severity tags - checked highest threshold first, so a markup of 250
// gets "rip off" not "expensive". Edit freely to adjust the thresholds/wording/colors.
const SHOP_MARKUP_TIERS = [
    { min: 300, label: 'scam', color: '#e74c3c' },
    { min: 200, label: 'rip off', color: '#e67e22' },
    { min: 150, label: 'expensive', color: '#f1c40f' }
];

function getShopMarkupTier(markup) {
    if (typeof markup !== 'number') return null;
    return SHOP_MARKUP_TIERS.find(tier => markup >= tier.min) || null;
}

function getSelectedNewLabelCategories() {
    return Array.from(newLabelCategoryChecks).filter(cb => cb.checked).map(cb => cb.value);
}

function populateTargetMapOptions() {
    if (!newLabelTargetMap) return;
    const seen = new Set();
    ArcanumMapData.forEach(map => {
        const optionValue = map.displayName;
        const dedupeKey = `${map.displayName}::${map.modGroup || ''}`;
        if (seen.has(dedupeKey)) return;
        seen.add(dedupeKey);
        const opt = document.createElement('option');
        opt.value = optionValue;
        opt.textContent = map.modGroup ? `${map.displayName} — ${map.modGroup}` : map.displayName;
        newLabelTargetMap.appendChild(opt);
    });
}

// Local file safe reloading configuration bypasses origin security rules
window.hotReloadMapDatabase = function() {
    window.location.reload();
};

// --- Persisted viewer state (survives F5 / the Reload Data button) ---
const VIEWER_STATE_KEY = 'arcanumViewerState';
let saveStateTimer = null;

function loadSavedViewerState() {
    try {
        const raw = localStorage.getItem(VIEWER_STATE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null; // localStorage unavailable or corrupted entry - just start fresh
    }
}

function saveViewerState() {
    if (!currentMapFilename) return;
    clearTimeout(saveStateTimer);
    saveStateTimer = setTimeout(() => {
        try {
            localStorage.setItem(VIEWER_STATE_KEY, JSON.stringify({
                mapFilename: currentMapFilename,
                modCategory: activeModCategory,
                scale: scale,
                posX: posX,
                posY: posY
            }));
        } catch (e) {
            // Storage full/unavailable - nothing we can do, fail silently
        }
    }, 250);
}

// --- Background music ---
const MUSIC_SETTINGS_KEY = 'arcanumMusicSettings';

function loadMusicSettings() {
    try {
        const raw = localStorage.getItem(MUSIC_SETTINGS_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (typeof parsed.muted === 'boolean') isMusicMuted = parsed.muted;
        if (typeof parsed.volume === 'number' && parsed.volume >= 0 && parsed.volume <= 1) musicVolume = parsed.volume;
    } catch (e) {
        // localStorage unavailable or corrupted entry - just use the defaults
    }
}

function saveMusicSettings() {
    try {
        localStorage.setItem(MUSIC_SETTINGS_KEY, JSON.stringify({ muted: isMusicMuted, volume: musicVolume }));
    } catch (e) {
        // Storage full/unavailable - nothing we can do, fail silently
    }
}

function resolveMusicPath(selectedMap) {
    if (selectedMap.music) return selectedMap.music;
    // Submaps with no music of their own inherit their parent map's track
    if (selectedMap.parentFilename) {
        const parent = ArcanumMapData.find(m => m.filename === selectedMap.parentFilename);
        if (parent && parent.music) return parent.music;
    }
    return null;
}

function attemptPlayMusic(audioEl) {
    if (!audioEl.src) return;
    const playPromise = audioEl.play();
    if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
            // Most browsers block audio until the user interacts with the page at least once -
            // silently retry on the first click anywhere, by which point that's no longer an issue
            document.addEventListener('click', () => { audioEl.play().catch(() => {}); }, { once: true });
        });
    }
}

function crossfadeToTrack(newPath) {
    cancelAnimationFrame(musicFadeRAF);

    const outgoing = activeMusicAudio;
    const incoming = inactiveMusicAudio;
    const outgoingStartVolume = outgoing.volume;
    const startTime = performance.now();

    if (newPath) {
        incoming.src = newPath;
        incoming.volume = 0;
        attemptPlayMusic(incoming);
        activeMusicAudio = incoming;
        inactiveMusicAudio = outgoing;
    }

    function step(now) {
        const progress = Math.max(0, Math.min(1, (now - startTime) / MUSIC_FADE_MS));
        outgoing.volume = Math.max(0, Math.min(1, outgoingStartVolume * (1 - progress)));
        if (newPath) incoming.volume = Math.max(0, Math.min(1, musicVolume * progress)); // read musicVolume live so a slider change mid-fade still applies
        if (progress < 1) {
            musicFadeRAF = requestAnimationFrame(step);
        } else {
            outgoing.pause();
            outgoing.removeAttribute('src');
            outgoing.volume = musicVolume; // reset ready for whenever it becomes the "incoming" track next
        }
    }
    musicFadeRAF = requestAnimationFrame(step);
}

function updateBackgroundMusic(selectedMap) {
    const resolvedPath = resolveMusicPath(selectedMap);
    if (resolvedPath === currentMusicPath) return; // same track (or still no track) - leave it playing as-is
    currentMusicPath = resolvedPath;
    crossfadeToTrack(resolvedPath);
}

// --- Shareable links ---
// Reuses the same {x, y, zoom} view format as defaultView/travel arrivals, so a link
// reconstructs correctly regardless of the recipient's window size.

function getCurrentMapCenter() {
    const mapCenterX = (viewport.clientWidth / 2 - posX) / scale;
    const mapCenterY = (viewport.clientHeight / 2 - posY) / scale;
    return { x: Math.round(mapCenterX), y: Math.round(mapCenterY), zoom: scale };
}

function parseShareLink() {
    if (!window.location.hash || window.location.hash.length < 2) return null;
    const params = new URLSearchParams(window.location.hash.substring(1));
    const mapName = params.get('map');
    if (!mapName) return null;
    const matchIndex = ArcanumMapData.findIndex(m => m.displayName === mapName);
    if (matchIndex === -1) return null;

    const x = parseFloat(params.get('x'));
    const y = parseFloat(params.get('y'));
    const zoom = parseFloat(params.get('zoom'));
    const view = (!isNaN(x) && !isNaN(y) && !isNaN(zoom)) ? { x, y, zoom } : null;
    return { index: matchIndex, view };
}

function flashButtonText(btn, message) {
    const original = btn.textContent;
    btn.textContent = message;
    setTimeout(() => { btn.textContent = original; }, 1500);
}

function initViewer() {
    if (window.__mapsJsLoadErrors && window.__mapsJsLoadErrors.length > 0) {
        const errorBlocks = window.__mapsJsLoadErrors.map(err => {
            const lineInfo = (typeof err.line === 'number' && err.line > 0)
                ? `<div style="color:#ffaa00;font-family:monospace;margin-top:4px;">Line ${err.line}${err.column ? `, column ${err.column}` : ''}</div>`
                : '';
            return `<div style="margin-top:14px;padding-top:10px;border-top:1px solid #4a3e2e;">
                <strong style="color:#ff9999;">${err.file}</strong>
                <div style="margin-top:4px;font-size:12px;color:#f1e4c3;">${err.message}</div>
                ${lineInfo}
            </div>`;
        }).join('');
        menuContainer.innerHTML = `<div style="text-align:center;color:#ff6b6b;padding:20px;">
            <strong>One or more map data files failed to load</strong>
            ${errorBlocks}
        </div>`;
        return;
    }
    if (!ArcanumMapData || ArcanumMapData.length === 0) {
        menuContainer.innerHTML = '<div style="text-align:center;color:#ff6b6b;padding:20px;">Error: no map data loaded (check that arcanummaps.js, cerestoredmaps.js, and modulesmaps.js exist alongside Index.html).</div>';
        return;
    }

    loadMusicSettings();
    bgMusicAudioA.volume = musicVolume;
    bgMusicAudioB.volume = musicVolume;
    bgMusicAudioA.muted = isMusicMuted;
    bgMusicAudioB.muted = isMusicMuted;
    musicVolumeSlider.value = Math.round(musicVolume * 100);
    musicToggleBtn.textContent = isMusicMuted ? '🔇' : '🔊';
    musicToggleBtn.title = isMusicMuted ? 'Unmute background music' : 'Mute background music';

    musicToggleBtn.addEventListener('click', () => {
        isMusicMuted = !isMusicMuted;
        bgMusicAudioA.muted = isMusicMuted;
        bgMusicAudioB.muted = isMusicMuted;
        musicToggleBtn.textContent = isMusicMuted ? '🔇' : '🔊';
        musicToggleBtn.title = isMusicMuted ? 'Unmute background music' : 'Mute background music';
        saveMusicSettings();
        if (!isMusicMuted) attemptPlayMusic(activeMusicAudio); // covers the case where autoplay was blocked before the first click
    });

    musicVolumeSlider.addEventListener('input', () => {
        musicVolume = musicVolumeSlider.value / 100;
        activeMusicAudio.volume = musicVolume;
        saveMusicSettings();
    });

    shareLinkBtn.addEventListener('click', () => {
        const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
        if (!selectedMap) return;
        const center = getCurrentMapCenter();
        const params = new URLSearchParams();
        params.set('map', selectedMap.displayName);
        params.set('x', center.x);
        params.set('y', center.y);
        params.set('zoom', center.zoom.toFixed(3));
        const baseUrl = window.location.href.split('#')[0];
        const shareUrl = `${baseUrl}#${params.toString()}`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(shareUrl).then(() => {
                flashButtonText(shareLinkBtn, '✓ Copied!');
            }).catch(() => {
                window.prompt('Copy this link:', shareUrl);
            });
        } else {
            window.prompt('Copy this link:', shareUrl);
        }
    });

    questListBtn.addEventListener('click', () => {
        const isOpen = questListPanel.classList.toggle('open');
        if (isOpen) renderQuestPanel();
    });

    questPanelClose.addEventListener('click', () => {
        questListPanel.classList.remove('open');
    });

    if (ArcanumMapData.length > 0) {
        let startIndex = 0;
        let restorePosition = null;
        let arrivalView = null;

        const shared = parseShareLink();
        if (shared) {
            startIndex = shared.index;
            arrivalView = shared.view;
            const sharedMap = ArcanumMapData[startIndex];
            if (checkMapCategoryMatch(sharedMap, "arcanum")) activeModCategory = "arcanum";
            else if (checkMapCategoryMatch(sharedMap, "cerestored")) activeModCategory = "cerestored";
            else activeModCategory = "modules";
            // Strip the hash after applying it once, so it's a one-time teleport rather
            // than permanently overriding your own saved position on every future reload
            history.replaceState(null, '', window.location.href.split('#')[0]);
        } else {
            const saved = loadSavedViewerState();
            if (saved) {
                const savedIndex = ArcanumMapData.findIndex(m => m.filename === saved.mapFilename);
                if (savedIndex !== -1) {
                    startIndex = savedIndex;
                    if (saved.modCategory) activeModCategory = saved.modCategory;
                    if (typeof saved.scale === 'number' && typeof saved.posX === 'number' && typeof saved.posY === 'number') {
                        restorePosition = { scale: saved.scale, posX: saved.posX, posY: saved.posY };
                    }
                }
            }
        }

        document.getElementById('tab-arcanum').classList.toggle('active-tab', activeModCategory === 'arcanum');
        document.getElementById('tab-cerestored').classList.toggle('active-tab', activeModCategory === 'cerestored');
        document.getElementById('tab-modules').classList.toggle('active-tab', activeModCategory === 'modules');

        renderGroupedFileList();
        populateTargetMapOptions();
        loadImage(startIndex, arrivalView, restorePosition);
    } else {
        menuContainer.innerHTML = '<div style="text-align:center;color:#888;padding:20px;">No maps registered.</div>';
    }

    filterDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = filterDropdownContent.style.display === 'block';
        filterDropdownContent.style.display = isOpen ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        filterDropdownContent.style.display = 'none';
    });

    const processFilterChange = (key, checkbox) => {
        filterRegistry[key] = checkbox.checked;
        applyActiveFilters();
    };

    chkQuest.addEventListener('change', () => processFilterChange('quest', chkQuest));
    chkFollowers.addEventListener('change', () => processFilterChange('followers', chkFollowers));
    chkShop.addEventListener('change', () => processFilterChange('shop', chkShop));
    chkWaypoint.addEventListener('change', () => processFilterChange('waypoint', chkWaypoint));
    chkKey.addEventListener('change', () => processFilterChange('key', chkKey));
    chkNpc.addEventListener('change', () => processFilterChange('npc', chkNpc));
    chkChest.addEventListener('change', () => processFilterChange('chest', chkChest));
    chkInformation.addEventListener('change', () => processFilterChange('information', chkInformation));
    chkAltar.addEventListener('change', () => processFilterChange('altar', chkAltar));
    chkBounty.addEventListener('change', () => processFilterChange('bounty', chkBounty));
    chkOverworldAll.addEventListener('change', () => processFilterChange('overworldAll', chkOverworldAll));


// Part 2

    toggleCreatorModeBtn.addEventListener('click', () => {
        isCreatorMode = !isCreatorMode;
        if (isCreatorMode) {
            toggleCreatorModeBtn.textContent = "Exit Editor";
            toggleCreatorModeBtn.classList.add('active-tool');
            toolStatus.style.display = 'inline';
            creatorPanel.style.display = 'flex';
            menuContainer.style.display = 'none';
            viewport.classList.add('creator-mode');
            clearActivePopups();
        } else {
            toggleCreatorModeBtn.textContent = "Label Editor";
            toggleCreatorModeBtn.classList.remove('active-tool');
            toolStatus.style.display = 'none';
            creatorPanel.style.removeProperty('display');
            menuContainer.style.removeProperty('display');
            viewport.classList.remove('creator-mode');
            clearPendingEditorState();
        }
    });

    newLabelCategoryChecks.forEach(cb => {
        cb.addEventListener('change', () => {
            waypointFields.style.display = getSelectedNewLabelCategories().includes('waypoint') ? 'flex' : 'none';
        });
    });

    addToPreviewBtn.addEventListener('click', () => {
        const labelTitle = newLabelText.value.trim() || "New Marker Location";
        const labelDescription = newLabelDesc.value.trim();

        const newLabelObj = {
            x: clickMapX,
            y: clickMapY,
            text: labelTitle,
            description: labelDescription
        };

        const linkedText = newLabelLinks.value.trim();
        if (linkedText) {
            newLabelObj.linkedLabels = linkedText.split(',').map(s => s.trim()).filter(Boolean);
        }

        if (currentMapType !== "overworld") {
            const cats = getSelectedNewLabelCategories();
            if (cats.length === 1) {
                newLabelObj.category = cats[0];
            } else if (cats.length > 1) {
                newLabelObj.category = cats;
            }
            if (cats.includes('waypoint')) {
                const targetMapName = newLabelTargetMap.value;
                if (targetMapName) newLabelObj.targetMapFilename = targetMapName;
                const tX = newLabelTargetX.value.trim();
                const tY = newLabelTargetY.value.trim();
                if (tX !== '') newLabelObj.targetX = parseInt(tX, 10);
                if (tY !== '') newLabelObj.targetY = parseInt(tY, 10);
            }
        }

        renderSingleLabel(newLabelObj, true);
        pendingNewLabels.push(newLabelObj);

        // Keep coordinate/category/target-map selections sticky so placing a run of
        // similar labels is quick - only the free-text fields reset between placements.
        newLabelText.value = '';
        newLabelDesc.value = '';
        newLabelLinks.value = '';
        newLabelTargetX.value = '';
        newLabelTargetY.value = '';
    });

    copyEditsBtn.addEventListener('click', () => {
        const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
        if (!selectedMap) return;
        const allLabels = [...(selectedMap.labels || []), ...pendingNewLabels];
        const lines = allLabels.map(l => `  ${buildLabelCodeLine(l)}`).join('\n');
        const fullText = `labels: [\n${lines}\n]`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(fullText).then(() => {
                flashButtonText(copyEditsBtn, '✓ Copied!');
            }).catch(() => {
                window.prompt('Copy this text:', fullText);
            });
        } else {
            window.prompt('Copy this text:', fullText);
        }
    });

    zoomInBtn.addEventListener('click', (e) => { e.stopPropagation(); executeButtonZoom(true); });
    zoomOutBtn.addEventListener('click', (e) => { e.stopPropagation(); executeButtonZoom(false); });

    viewport.addEventListener('mousemove', (e) => {
        if (currentMapType !== "overworld" || !img.src) return;
        const rect = img.getBoundingClientRect();
        const currentPixelX = (e.clientX - rect.left) / scale;
        const currentPixelY = (e.clientY - rect.top) / scale;

        if (currentPixelX >= 0 && currentPixelX <= img.clientWidth && currentPixelY >= 0 && currentPixelY <= img.clientHeight) {
            const normalizedX = (currentPixelX / img.clientWidth) * 2000;
            const normalizedY = (currentPixelY / img.clientHeight) * 2000;
            hudValW.textContent = Math.round(2000 - normalizedX);
            hudValS.textContent = Math.round(normalizedY);
        }
    });
}

function applyActiveFilters() {
    if (currentMapType === "overworld") {
        const elements = container.querySelectorAll('.arcanum-world-dot, .arcanum-world-text');
        elements.forEach(el => {
            if (filterRegistry.overworldAll) el.classList.remove('filter-hidden');
            else el.classList.add('filter-hidden');
        });
    } else {
        const localElements = container.querySelectorAll('.map-label');
        localElements.forEach(el => {
            const catString = el.getAttribute('data-category') || 'uncategorized';
            const cats = catString.split(' ');
            const shouldShow = cats.some(cat => filterRegistry[cat] === true || cat === 'uncategorized');
            if (shouldShow) {
                el.classList.remove('filter-hidden');
            } else {
                el.classList.add('filter-hidden');
            }
        });
    }
    clearActivePopups();
}

window.switchModCategory = function(categoryKey) {
    activeModCategory = categoryKey;
    
    document.getElementById('tab-arcanum').classList.toggle('active-tab', categoryKey === 'arcanum');
    document.getElementById('tab-cerestored').classList.toggle('active-tab', categoryKey === 'cerestored');
    document.getElementById('tab-modules').classList.toggle('active-tab', categoryKey === 'modules');
    
    renderGroupedFileList();
    
    const firstMatch = ArcanumMapData.findIndex(map => !map.parentFilename && checkMapCategoryMatch(map, activeModCategory));
    if (firstMatch !== -1) loadImage(firstMatch);
};

function checkMapCategoryMatch(map, categoryKey) {
    const group = map.modGroup || "";
    if (categoryKey === "arcanum") {
        return (group === "World Map" || group === "Cities" || group === "Quest locations" || group === "Other locations");
    } else if (categoryKey === "cerestored") {
        return (group === "Arcanum CE Restored" || group === "Forgotten Places" || group === "CE Restored World Map");
    } else if (categoryKey === "modules") {
        return (group !== "World Map" && group !== "Cities" && group !== "Quest locations" && group !== "Arcanum CE Restored" && group !== "Forgotten Places" && group !== "CE Restored World Map" && group !== "Other locations");
    }
    return false;
}

function executeButtonZoom(isZoomIn) {
    if (!img.src || img.style.display === 'none') return;
    const zoomFactor = 1.3;
    let nextScale = isZoomIn ? scale * zoomFactor : scale / zoomFactor;
    if (nextScale < minScale || nextScale > maxScale) return;
    const centerX = viewport.clientWidth / 2;
    const centerY = viewport.clientHeight / 2;
    posX = centerX - (centerX - posX) * (nextScale / scale);
    posY = centerY - (centerY - posY) * (nextScale / scale);
    scale = nextScale;
    updateTransform();
}

// Part 3

function renderGroupedFileList() {
    menuContainer.innerHTML = '';
    domElementsRegistry = [];
    const grouped = {};
    
    ArcanumMapData.forEach((map, index) => {
        if (map.parentFilename) return; 
        if (!checkMapCategoryMatch(map, activeModCategory)) return;
        
        const groupName = map.modGroup || 'Uncategorized Mod';
        if (!grouped[groupName]) grouped[groupName] = [];
        grouped[groupName].push({ map, index });
    });
    
    for (const modName in grouped) {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'mod-heading';
        headerDiv.textContent = modName;
        menuContainer.appendChild(headerDiv);
        
        const ul = document.createElement('ul');
        ul.className = 'file-list';
        
        grouped[modName].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.map.displayName;
            li.addEventListener('click', () => loadImage(item.index));
            ul.appendChild(li);
            domElementsRegistry[item.index] = li;
        });
        menuContainer.appendChild(ul);
    }
}

function loadImage(index, arrivalViewOverride, restorePosition) {
    domElementsRegistry.forEach((el) => {
        if (el) el.classList.remove('active');
    });
    
    const activeSubmenus = menuContainer.querySelectorAll('.submenu-list');
    activeSubmenus.forEach(menu => menu.remove());

    clearOldLabels();
    clearActivePopups();
    clearPendingEditorState();

    const selectedMap = ArcanumMapData[index];
    currentMapFilename = selectedMap.filename; 
    currentMapType = selectedMap.typemap || ""; 
    img.style.display = 'block';
    img.src = selectedMap.filename; 

    updateBackgroundMusic(selectedMap);

    if (selectedMap.background) {
        viewport.style.background = selectedMap.background;
    } else {
        viewport.style.background = "#0b0a08"; 
    }

    if (currentMapType === "overworld") {
        mapCoordinatesHud.style.display = 'flex';
        hudBoxW.style.display = 'inline-flex';
        hudBoxS.style.display = 'inline-flex';
        hudBoxZoom.style.display = 'none';
        lblOverworldAll.style.display = 'flex';
        chkQuest.parentElement.style.display = 'none';
        chkFollowers.parentElement.style.display = 'none';
        chkShop.parentElement.style.display = 'none';
        chkWaypoint.parentElement.style.display = 'none';
        chkKey.parentElement.style.display = 'none';
        chkNpc.parentElement.style.display = 'none';
        chkChest.parentElement.style.display = 'none';
        chkInformation.parentElement.style.display = 'none';
        chkAltar.parentElement.style.display = 'none';
        chkBounty.parentElement.style.display = 'none';
        categoryField.style.display = 'none';
        waypointFields.style.display = 'none';
    } else {
        mapCoordinatesHud.style.display = 'flex';
        hudBoxW.style.display = 'none';
        hudBoxS.style.display = 'none';
        hudBoxZoom.style.display = 'inline-flex';
        lblOverworldAll.style.display = 'none';
        chkQuest.parentElement.style.display = 'flex';
        chkFollowers.parentElement.style.display = 'flex';
        chkShop.parentElement.style.display = 'flex';
        chkWaypoint.parentElement.style.display = 'flex';
        chkKey.parentElement.style.display = 'flex';
        chkNpc.parentElement.style.display = 'flex';
        chkChest.parentElement.style.display = 'flex';
        chkInformation.parentElement.style.display = 'flex';
        chkAltar.parentElement.style.display = 'flex';
        chkBounty.parentElement.style.display = 'flex';
        categoryField.style.display = 'flex';
        waypointFields.style.display = getSelectedNewLabelCategories().includes('waypoint') ? 'flex' : 'none';
    }

    let primaryTargetIndex = index;
    if (selectedMap.parentFilename) {
        const parentIdx = ArcanumMapData.findIndex(m => m.filename === selectedMap.parentFilename);
        if (parentIdx !== -1) primaryTargetIndex = parentIdx;
    }
    
    if (domElementsRegistry[primaryTargetIndex]) {
        domElementsRegistry[primaryTargetIndex].classList.add('active');
    }

    const parentToQuery = selectedMap.parentFilename || selectedMap.filename;
    const subMapsArray = ArcanumMapData.map((m, idx) => ({ m, idx })).filter(item => item.m.parentFilename === parentToQuery);
    const parentMapObject = ArcanumMapData.find(m => m.filename === parentToQuery);
    const parentMapIndex = ArcanumMapData.findIndex(m => m.filename === parentToQuery);

    if (subMapsArray.length > 0 && parentMapObject) {
        const subUl = document.createElement('ul');
        subUl.className = 'submenu-list';

        const pLi = document.createElement('li');
        pLi.textContent = `↳ Base: ${parentMapObject.displayName}`;
        if (index === parentMapIndex) pLi.classList.add('active');
        pLi.addEventListener('click', (e) => { e.stopPropagation(); loadImage(parentMapIndex); });
        subUl.appendChild(pLi);

        subMapsArray.forEach(item => {
            const cLi = document.createElement('li');
            cLi.textContent = `↳ Sub: ${item.m.displayName}`;
            if (index === item.idx) cLi.classList.add('active');
            cLi.addEventListener('click', (e) => { e.stopPropagation(); loadImage(item.idx); });
            subUl.appendChild(cLi);
        });

        const parentDomNode = domElementsRegistry[parentMapIndex];
        if (parentDomNode && parentDomNode.parentElement) {
            parentDomNode.parentElement.insertBefore(subUl, parentDomNode.nextSibling);
        }
    }

    img.onload = () => {
        if (restorePosition) {
            scale = restorePosition.scale;
            posX = restorePosition.posX;
            posY = restorePosition.posY;
            updateTransform();
        } else {
            const finalView = arrivalViewOverride || selectedMap.defaultView;
            resetView(finalView);
        }
        if (selectedMap.labels) {
            selectedMap.labels.forEach(label => renderSingleLabel(label));
        }
        applyActiveFilters(); 
        if (questListPanel.classList.contains('open')) renderQuestPanel();
    };
    img.onerror = () => {
        img.style.display = 'none';
        alert(`Could not find or render image: "${selectedMap.filename}"`);
    };
}

function travelToMapByFilename(targetName, arrivalViewOverride) {
    const matchedIndex = ArcanumMapData.findIndex(map => map.displayName === targetName);
    if (matchedIndex !== -1) {
        const targetMap = ArcanumMapData[matchedIndex];
        
        let targetCategory = "modules";
        if (checkMapCategoryMatch(targetMap, "arcanum")) targetCategory = "arcanum";
        else if (checkMapCategoryMatch(targetMap, "cerestored")) targetCategory = "cerestored";
        
        if (targetCategory !== activeModCategory) {
            activeModCategory = targetCategory;
            document.getElementById('tab-arcanum').classList.toggle('active-tab', targetCategory === 'arcanum');
            document.getElementById('tab-cerestored').classList.toggle('active-tab', targetCategory === 'cerestored');
            document.getElementById('tab-modules').classList.toggle('active-tab', targetCategory === 'modules');
            renderGroupedFileList();
        }

        loadImage(matchedIndex, arrivalViewOverride);
    } else {
        alert(`Travel target failed: "${targetName}" is not registered inside your maps.js file (no map with that displayName).`);
    }
}

function findLabelAnywhereByText(searchText) {
    for (const map of ArcanumMapData) {
        if (!map.labels) continue;
        const found = map.labels.find(l => l.text === searchText);
        if (found) return { map, label: found };
    }
    return null;
}

function travelToLinkedLabel(searchText) {
    const result = findLabelAnywhereByText(searchText);
    if (!result) {
        alert(`Linked label not found: "${searchText}" - check that a label with this exact text exists somewhere in maps.js.`);
        return;
    }
    const { map, label } = result;
    // The overworld's own x/y are in the special W/S grid, not raw pixels like every other
    // map's defaultView/arrival coordinates - rather than mis-convert it, just use that
    // map's default view when the link happens to land on the world map itself.
    const viewOverride = (map.typemap === "overworld") ? null : { x: label.x, y: label.y, zoom: 1.5 };
    travelToMapByFilename(map.displayName, viewOverride);
}

// --- Quest list panel: all quests on the current map, grouped by the NPC that gives them ---

function jumpToLabelOnCurrentMap(label) {
    resetView({ x: label.x, y: label.y, zoom: 1.5 });
    const allLabelEls = container.querySelectorAll('.map-label');
    for (const el of allLabelEls) {
        if (el.getAttribute('data-label-text') === label.text) {
            el.click();
            break;
        }
    }
}

function buildQuestListForCurrentMap() {
    const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    if (!selectedMap || !selectedMap.labels) return { npcGroups: [], unassigned: [] };

    const claimedQuestTexts = new Set();
    const npcGroups = [];

    selectedMap.labels.forEach(npcLabel => {
        const cats = Array.isArray(npcLabel.category) ? npcLabel.category : (npcLabel.category ? [npcLabel.category] : []);
        if (!cats.includes('npc')) return;
        if (!Array.isArray(npcLabel.linkedLabels) || npcLabel.linkedLabels.length === 0) return;

        const quests = npcLabel.linkedLabels.map(entry => {
            if (typeof entry === 'string') {
                const found = findLabelAnywhereByText(entry);
                if (!found) return null;
                const foundCats = Array.isArray(found.label.category) ? found.label.category : (found.label.category ? [found.label.category] : []);
                // Only treat this as a quest entry if the resolved label is actually a quest
                // (not an NPC) - otherwise its "description" is that person's own bio, not quest text
                if (!foundCats.includes('quest') || foundCats.includes('npc')) return null;
                claimedQuestTexts.add(entry);
                return { title: entry, description: found.label.description || '', target: entry };
            }
            if (entry.target) claimedQuestTexts.add(entry.target);
            return { title: entry.questName || entry.target || 'Quest', description: entry.questDescription || '', target: entry.target };
        }).filter(Boolean);

        if (quests.length === 0) return;
        npcGroups.push({ npcLabel, quests });
    });

    npcGroups.sort((a, b) => a.npcLabel.text.localeCompare(b.npcLabel.text));

    const unassigned = selectedMap.labels
        .filter(label => {
            const cats = Array.isArray(label.category) ? label.category : (label.category ? [label.category] : []);
            if (!cats.includes('quest')) return false;
            if (cats.includes('npc')) return false; // already represented as its own NPC group above
            return !claimedQuestTexts.has(label.text);
        })
        .map(label => ({ title: label.text, description: label.description || '', ownLabel: label }));

    return { npcGroups, unassigned };
}

function renderQuestPanel() {
    const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    questPanelMapName.textContent = selectedMap ? selectedMap.displayName : '';

    const { npcGroups, unassigned } = buildQuestListForCurrentMap();

    if (npcGroups.length === 0 && unassigned.length === 0) {
        questPanelContent.innerHTML = '<div class="quest-panel-empty">No quests found on this map.</div>';
        return;
    }

    let html = '';
    npcGroups.forEach((group, gi) => {
        html += `<div class="quest-panel-npc-group">
            <div class="quest-panel-npc-name" data-npc-index="${gi}">🧑 ${group.npcLabel.text}</div>`;
        group.quests.forEach((q, qi) => {
            html += `<div class="quest-panel-quest-item" data-npc-index="${gi}" data-quest-index="${qi}">
                <div class="quest-panel-quest-title">📜 ${q.title}</div>
                ${q.description ? `<div class="quest-panel-quest-desc">${q.description}</div>` : ''}
            </div>`;
        });
        html += `</div>`;
    });

    if (unassigned.length > 0) {
        html += `<div class="quest-panel-section-label">Other quests</div>`;
        unassigned.forEach((q, ui) => {
            html += `<div class="quest-panel-quest-item" data-unassigned-index="${ui}">
                <div class="quest-panel-quest-title">📜 ${q.title}</div>
                ${q.description ? `<div class="quest-panel-quest-desc">${q.description}</div>` : ''}
            </div>`;
        });
    }

    questPanelContent.innerHTML = html;

    questPanelContent.querySelectorAll('.quest-panel-npc-name').forEach(el => {
        el.addEventListener('click', () => {
            const gi = parseInt(el.getAttribute('data-npc-index'), 10);
            jumpToLabelOnCurrentMap(npcGroups[gi].npcLabel);
        });
    });

    questPanelContent.querySelectorAll('.quest-panel-quest-item[data-quest-index]').forEach(el => {
        el.addEventListener('click', () => {
            const gi = parseInt(el.getAttribute('data-npc-index'), 10);
            const qi = parseInt(el.getAttribute('data-quest-index'), 10);
            const quest = npcGroups[gi].quests[qi];
            if (quest.target) travelToLinkedLabel(quest.target);
        });
    });

    questPanelContent.querySelectorAll('.quest-panel-quest-item[data-unassigned-index]').forEach(el => {
        el.addEventListener('click', () => {
            const ui = parseInt(el.getAttribute('data-unassigned-index'), 10);
            jumpToLabelOnCurrentMap(unassigned[ui].ownLabel);
        });
    });
}

// Part 4

function clearOldLabels() {
    const elements = container.querySelectorAll('.map-label, .arcanum-world-dot, .arcanum-world-text');
    elements.forEach(el => el.remove());
}

function clearActivePopups() {
    const popups = container.querySelectorAll('.info-popup');
    popups.forEach(p => p.remove());
}

function attachLabelDragHandlers(labelData, elements, coordMode) {
    elements.forEach(el => {
        el.addEventListener('mousedown', (e) => {
            if (!isCreatorMode) return;
            e.stopPropagation();
            isDraggingLabel = true;
            draggedLabelData = labelData;
            draggedLabelElements = elements;
            draggedLabelCoordMode = coordMode;
            dragLastScreenX = e.clientX;
            dragLastScreenY = e.clientY;
        });
    });
}

function renderSingleLabel(label, isPending) {
    const openInfoPopup = () => {
        clearActivePopups();
        const popup = document.createElement('div');
        popup.className = 'info-popup';
        if (currentMapType === "overworld") {
            popup.style.left = `${(img.clientWidth / 2000) * (2000 - label.x)}px`;
            popup.style.top = `${(img.clientHeight / 2000) * label.y}px`;
        } else {
            popup.style.left = `${label.x}px`;
            popup.style.top = `${label.y}px`;
        }
        const popupCats = Array.isArray(label.category) ? label.category : (label.category ? [label.category] : []);
        const descHtmlMain = label.description ? `<p style="margin:0;">${label.description}</p>` : '';

        let shopInfoHtml = "";
        if (popupCats.includes('shop') && (label.shopType || typeof label.shopMarkup === 'number')) {
            const shopTypeHtml = label.shopType ? `<div class="shop-info-type">${label.shopType}</div>` : '';
            let shopMarkupHtml = '';
            if (typeof label.shopMarkup === 'number') {
                const tier = getShopMarkupTier(label.shopMarkup);
                const tierHtml = tier ? ` <span class="shop-markup-tier" style="color:${tier.color};">(${tier.label})</span>` : '';
                shopMarkupHtml = `<div class="shop-info-markup">Markup: <strong>${label.shopMarkup}%</strong>${tierHtml}</div>`;
            }
            shopInfoHtml = `<div class="shop-info-block">${shopTypeHtml}${shopMarkupHtml}</div>`;
        }

        let inventoryHtml = "";
        if (Array.isArray(label.inventory) && label.inventory.length > 0) {
            const itemsHtml = label.inventory.map(item => `<li>${item}</li>`).join('');
            inventoryHtml = `<div class="npc-inventory-block">
                <div class="npc-inventory-title">Inventory</div>
                <ul class="npc-inventory-list">${itemsHtml}</ul>
            </div>`;
        }
        
        let travelButtonHtml = "";
        if (label.targetMapFilename) {
            const viewData = (typeof label.targetX === 'number') ? `data-x="${label.targetX}" data-y="${label.targetY}" data-z="${label.targetZoom || 1}"` : "";
            travelButtonHtml = `<button class="travel-link-btn" data-target="${label.targetMapFilename}" ${viewData}>🧭 Travel to Location</button>`;
        }

        let linkedButtonsHtml = "";
        if (Array.isArray(label.linkedLabels) && label.linkedLabels.length > 0) {
            const blocks = label.linkedLabels.map((entry, i) => {
                let title, icon, titleColor, descHtml;

                if (typeof entry === 'string') {
                    // Plain form: links straight to another label, showing THAT label's own info
                    const found = findLabelAnywhereByText(entry);
                    const foundCats = found
                        ? (Array.isArray(found.label.category) ? found.label.category : (found.label.category ? [found.label.category] : []))
                        : [];
                    const cat = foundCats[0];
                    title = entry;
                    icon = (cat && CATEGORY_EMOJI[cat]) ? CATEGORY_EMOJI[cat] : '🔗';
                    titleColor = (cat && CATEGORY_COLORS[cat]) ? CATEGORY_COLORS[cat] : '#ffd700';
                    descHtml = (found && found.label.description) ? `<p class="linked-quest-desc">${found.label.description}</p>` : '';
                } else {
                    // Inline form: { questName, questDescription, target, category? } - the quest's own
                    // name/description live here directly, separate from wherever "target" actually is
                    const cat = entry.category || 'quest';
                    title = entry.questName || entry.target || 'Quest';
                    icon = CATEGORY_EMOJI[cat] || '📜';
                    titleColor = CATEGORY_COLORS[cat] || '#ffaa00';
                    descHtml = entry.questDescription ? `<p class="linked-quest-desc">${entry.questDescription}</p>` : '';
                }

                return `<div class="linked-quest-block">
                    <div class="linked-quest-title" style="color:${titleColor};">${icon} ${title}</div>
                    ${descHtml}
                    <button class="travel-link-btn linked-label-btn" data-link-index="${i}">🧭 Go to Location</button>
                </div>`;
            }).join('');
            const headingLabel = label.linkedLabels.length > 1 ? 'Quests:' : 'Quest:';
            linkedButtonsHtml = `<div class="popup-links-heading">${headingLabel}</div>${blocks}`;
        }
        
        popup.innerHTML = `<span class="close-btn">&times;</span><h4>${label.text}</h4>${shopInfoHtml}${inventoryHtml}${descHtmlMain}${travelButtonHtml}${linkedButtonsHtml}`;
        popup.querySelector('.close-btn').addEventListener('click', (el) => { el.stopPropagation(); popup.remove(); });
        
        if (label.targetMapFilename) {
            popup.querySelector('.travel-link-btn:not(.linked-label-btn)').addEventListener('click', (el) => {
                el.stopPropagation();
                let viewOverride = null;
                if (typeof label.targetX === 'number') {
                    viewOverride = { x: label.targetX, y: label.targetY, zoom: label.targetZoom || 1 };
                }
                travelToMapByFilename(label.targetMapFilename, viewOverride);
            });
        }

        if (Array.isArray(label.linkedLabels)) {
            popup.querySelectorAll('.linked-label-btn').forEach((btn, i) => {
                btn.addEventListener('click', (el) => {
                    el.stopPropagation();
                    const entry = label.linkedLabels[i];
                    const targetText = (typeof entry === 'string') ? entry : entry.target;
                    if (targetText) travelToLinkedLabel(targetText);
                });
            });
        }

        container.appendChild(popup);
    };

    if (currentMapType === "overworld") {
        const renderX = (img.clientWidth / 2000) * (2000 - label.x);
        const renderY = (img.clientHeight / 2000) * label.y;

        let hoverTooltip = null;
        let hoverTimeout = null;
        const showHoverTooltip = () => {
            if (isCreatorMode) return;
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                if (hoverTooltip) return;
                hoverTooltip = document.createElement('div');
                hoverTooltip.className = 'world-hover-tooltip';
                hoverTooltip.style.left = `${renderX}px`;
                hoverTooltip.style.top = `${renderY}px`;
                const descText = label.description || '';
                hoverTooltip.innerHTML = `<h4>${label.text}</h4>${descText ? `<p>${descText}</p>` : ''}`;
                container.appendChild(hoverTooltip);
                // Add the visible class on the next frame so the transition actually animates in
                requestAnimationFrame(() => {
                    if (hoverTooltip) hoverTooltip.classList.add('visible');
                });
            }, 300);
        };
        const hideHoverTooltip = () => {
            clearTimeout(hoverTimeout);
            if (hoverTooltip) { hoverTooltip.remove(); hoverTooltip = null; }
        };
        const handleWorldLabelClick = (e) => {
            e.stopPropagation();
            if (suppressNextLabelClick) { suppressNextLabelClick = false; return; }
            if (isCreatorMode) {
                openInfoPopup();
                return;
            }
            hideHoverTooltip();
            if (label.targetMapFilename) {
                let viewOverride = null;
                if (typeof label.targetX === 'number') {
                    viewOverride = { x: label.targetX, y: label.targetY, zoom: label.targetZoom || 1 };
                }
                travelToMapByFilename(label.targetMapFilename, viewOverride);
            }
        };
        
        const dot = document.createElement('div');
        dot.className = 'arcanum-world-dot';
        if (isPending) dot.classList.add('pending-label');
        dot.style.left = `${renderX}px`; dot.style.top = `${renderY}px`;
        dot.addEventListener('mouseenter', showHoverTooltip);
        dot.addEventListener('mouseleave', hideHoverTooltip);
        dot.addEventListener('click', handleWorldLabelClick);
        container.appendChild(dot);

        const txt = document.createElement('div');
        txt.className = 'arcanum-world-text';
        if (isPending) txt.classList.add('pending-label');
        txt.innerHTML = `<span>${label.text}</span>`;
        txt.style.left = `${renderX}px`; txt.style.top = `${renderY}px`;
        txt.addEventListener('mouseenter', showHoverTooltip);
        txt.addEventListener('mouseleave', hideHoverTooltip);
        txt.addEventListener('click', handleWorldLabelClick);
        
        txt.setAttribute('data-raw-x', renderX);
        txt.setAttribute('data-raw-y', renderY);

        container.appendChild(txt);
        attachLabelDragHandlers(label, [dot, txt], "overworld");
    } else {
        const labelElement = document.createElement('div');
        labelElement.className = 'map-label';
        if (isPending) labelElement.classList.add('pending-label');
        labelElement.style.left = `${label.x}px`;
        labelElement.style.top = `${label.y}px`;
        
        const cats = Array.isArray(label.category) ? label.category.filter(Boolean) : (label.category ? [label.category] : []);
        const dataCatString = cats.length ? cats.join(' ') : 'uncategorized';
        labelElement.setAttribute('data-category', dataCatString);
        labelElement.setAttribute('data-label-text', label.text);

        const guardedClick = (handler) => (e) => {
            e.stopPropagation();
            if (suppressNextLabelClick) { suppressNextLabelClick = false; return; }
            handler();
        };

        const openWaypointTravel = () => {
            if (label.targetMapFilename) {
                let viewOverride = null;
                if (typeof label.targetX === 'number') {
                    viewOverride = { x: label.targetX, y: label.targetY, zoom: label.targetZoom || 1 };
                }
                travelToMapByFilename(label.targetMapFilename, viewOverride);
            }
        };

        if (cats.length === 0) {
            labelElement.textContent = label.text;
            labelElement.addEventListener('click', guardedClick(openInfoPopup));
        } else {
            cats.forEach(c => labelElement.classList.add(`cat-${c}`));
            const emojiPrefix = cats.map(c => CATEGORY_EMOJI[c] || '').join('');
            labelElement.innerHTML = `${emojiPrefix} ${label.text}`;

            if (cats.length > 1) {
                // Multiple categories: box takes the first category's color, the little
                // arrow underneath takes the second - a quick two-tone hint it's dual-purpose
                const primaryColor = CATEGORY_COLORS[cats[0]];
                const accentColor = CATEGORY_COLORS[cats[1]] || primaryColor;
                if (primaryColor) labelElement.style.borderColor = primaryColor;
                if (accentColor) labelElement.style.setProperty('--label-color', accentColor);
            }

            // A waypoint travels; anything else (including a waypoint combined with
            // other categories) opens the info popup, which still offers the travel button
            if (cats.includes('waypoint') && cats.length === 1) {
                labelElement.addEventListener('click', guardedClick(openWaypointTravel));
            } else {
                labelElement.addEventListener('click', guardedClick(openInfoPopup));
            }
        }

        container.appendChild(labelElement);
        attachLabelDragHandlers(label, [labelElement], "local");
    }
}


// Part 5

function resolveOverworldLabelCollisions() {
    if (currentMapType !== "overworld") return;
    
    const labels = Array.from(container.querySelectorAll('.arcanum-world-text'));
    const allocatedBoxes = [];

    labels.sort((a, b) => parseFloat(a.getAttribute('data-raw-y')) - parseFloat(b.getAttribute('data-raw-y')));

    labels.forEach(label => {
        const rawX = parseFloat(label.getAttribute('data-raw-x'));
        const rawY = parseFloat(label.getAttribute('data-raw-y'));
        
        const textString = label.textContent || "";
        const approxWidth = (textString.length * 12) + 20; 
        const approxHeight = 26; 

        let currentOffsetY = 0;
        let collisionDetected = true;
        let attempts = 0;

        while (collisionDetected && attempts < 15) {
            collisionDetected = false;
            
            const testMinX = rawX + 12;
            const testMaxX = testMinX + approxWidth;
            const testMinY = rawY - (approxHeight / 2) + currentOffsetY;
            const testMaxY = testMinY + approxHeight;

            for (const box of allocatedBoxes) {
                const overlapX = testMinX < box.maxX && testMaxX > box.minX;
                const overlapY = testMinY < box.maxY && testMaxY > box.minY;

                if (overlapX && overlapY) {
                    collisionDetected = true;
                    currentOffsetY += 24; 
                    attempts++;
                    break;
                }
            }

            if (!collisionDetected) {
                allocatedBoxes.push({
                    minX: testMinX,
                    maxX: testMaxX,
                    minY: testMinY,
                    maxY: testMaxY
                });

                label.style.top = `${rawY + currentOffsetY}px`;
            }
        }
    });
}

function buildLabelCodeLine(labelData) {
    const parts = [
        `x: ${labelData.x}`,
        `y: ${labelData.y}`,
        `text: "${labelData.text}"`,
        `description: "${labelData.description || ''}"`
    ];
    if (labelData.category) {
        if (Array.isArray(labelData.category)) {
            parts.push(`category: [${labelData.category.map(c => `"${c}"`).join(', ')}]`);
        } else {
            parts.push(`category: "${labelData.category}"`);
        }
    }
    if (labelData.shopType) parts.push(`shopType: "${labelData.shopType}"`);
    if (typeof labelData.shopMarkup === 'number' && !isNaN(labelData.shopMarkup)) parts.push(`shopMarkup: ${labelData.shopMarkup}`);
    if (Array.isArray(labelData.inventory) && labelData.inventory.length > 0) {
        parts.push(`inventory: [${labelData.inventory.map(i => `"${i}"`).join(', ')}]`);
    }
    if (labelData.targetMapFilename) parts.push(`targetMapFilename: "${labelData.targetMapFilename}"`);
    if (typeof labelData.targetX === 'number' && !isNaN(labelData.targetX)) parts.push(`targetX: ${labelData.targetX}`);
    if (typeof labelData.targetY === 'number' && !isNaN(labelData.targetY)) parts.push(`targetY: ${labelData.targetY}`);
    if (Array.isArray(labelData.linkedLabels) && labelData.linkedLabels.length > 0) {
        const serializedEntries = labelData.linkedLabels.map(entry => {
            if (typeof entry === 'string') return `"${entry}"`;
            const objParts = [];
            if (entry.questName) objParts.push(`questName: "${entry.questName}"`);
            if (entry.questDescription) objParts.push(`questDescription: "${entry.questDescription}"`);
            if (entry.target) objParts.push(`target: "${entry.target}"`);
            if (entry.category) objParts.push(`category: "${entry.category}"`);
            return `{ ${objParts.join(', ')} }`;
        });
        parts.push(`linkedLabels: [${serializedEntries.join(', ')}]`);
    }
    return `{ ${parts.join(', ')} },`;
}

function clearPendingEditorState() {
    pendingNewLabels = [];
    const pendingEls = container.querySelectorAll('.pending-label');
    pendingEls.forEach(el => el.remove());
}

function resetView(viewOverride) {
    if (viewOverride && typeof viewOverride.x === 'number' && typeof viewOverride.y === 'number') {
        scale = viewOverride.zoom || 1;
        posX = (viewport.clientWidth / 2) - (viewOverride.x * scale);
        posY = (viewport.clientHeight / 2) - (viewOverride.y * scale);
    } else {
        scale = 1;
        posX = (viewport.clientWidth - img.clientWidth) / 2;
        posY = (viewport.clientHeight / 2) - (img.clientHeight / 2);
    }
    updateTransform();
}


// Part 6

function updateTransform() {
    container.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
    if (hudValZoom) hudValZoom.textContent = `${Math.round(scale * 100)}%`;
    saveViewerState();
}

viewport.addEventListener('wheel', (e) => {
    if (!img.src || img.style.display === 'none') return;
    e.preventDefault();
    const zoomFactor = 1.15;
    let nextScale = e.deltaY < 0 ? scale * zoomFactor : scale / zoomFactor;
    if (nextScale < minScale || nextScale > maxScale) return;
    const rect = viewport.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    posX = mouseX - (mouseX - posX) * (nextScale / scale);
    posY = mouseY - (mouseY - posY) * (nextScale / scale);
    scale = nextScale;
    updateTransform();
}, { passive: false });

viewport.addEventListener('mousedown', (e) => {
    if (!img.src || img.style.display === 'none') return;
    if (isDraggingLabel) return; // safety net; label mousedown handlers stopPropagation so this shouldn't fire anyway
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
    mouseDownScreenX = e.clientX;
    mouseDownScreenY = e.clientY;
    hasDraggedPastThreshold = false;
});

viewport.addEventListener('click', (e) => {
    if (hasDraggedPastThreshold) {
        // This click followed a pan-drag - it's not an intentional click, ignore it
        hasDraggedPastThreshold = false;
        return;
    }
    if (isCreatorMode) {
        const rect = img.getBoundingClientRect();
        const clickX = Math.round((e.clientX - rect.left) / scale);
        const clickY = Math.round((e.clientY - rect.top) / scale);
        if (clickX >= 0 && clickX <= img.clientWidth && clickY >= 0 && clickY <= img.clientHeight) {
            clickMapX = clickX;
            clickMapY = clickY;
            if (currentMapType === "overworld") {
                const normalizedX = (clickMapX / img.clientWidth) * 2000;
                const normalizedY = (clickMapY / img.clientHeight) * 2000;
                coordDisplay.textContent = `W: ${Math.round(2000 - normalizedX)}, S: ${Math.round(normalizedY)}`;
            } else {
                coordDisplay.textContent = `X: ${clickMapX}, Y: ${clickMapY}`;
            }
        }
    } else {
        clearActivePopups();
    }
});

window.addEventListener('mousemove', (e) => {
    if (isDraggingLabel) {
        const dx = (e.clientX - dragLastScreenX) / scale;
        const dy = (e.clientY - dragLastScreenY) / scale;
        dragLastScreenX = e.clientX;
        dragLastScreenY = e.clientY;

        draggedLabelElements.forEach(el => {
            const newLeft = parseFloat(el.style.left) + dx;
            const newTop = parseFloat(el.style.top) + dy;
            el.style.left = `${newLeft}px`;
            el.style.top = `${newTop}px`;
            if (el.hasAttribute('data-raw-x')) el.setAttribute('data-raw-x', newLeft);
            if (el.hasAttribute('data-raw-y')) el.setAttribute('data-raw-y', newTop);
        });

        const refEl = draggedLabelElements[0];
        const finalLeft = parseFloat(refEl.style.left);
        const finalTop = parseFloat(refEl.style.top);
        if (draggedLabelCoordMode === "overworld") {
            const normalizedX = (finalLeft / img.clientWidth) * 2000;
            const normalizedY = (finalTop / img.clientHeight) * 2000;
            draggedLabelData.x = Math.round(2000 - normalizedX);
            draggedLabelData.y = Math.round(normalizedY);
        } else {
            draggedLabelData.x = Math.round(finalLeft);
            draggedLabelData.y = Math.round(finalTop);
        }
        return;
    }

    if (!isDragging) return;
    if (Math.abs(e.clientX - mouseDownScreenX) > CLICK_DRAG_THRESHOLD || Math.abs(e.clientY - mouseDownScreenY) > CLICK_DRAG_THRESHOLD) {
        hasDraggedPastThreshold = true;
    }
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    updateTransform();
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    if (isDraggingLabel) {
        isDraggingLabel = false;
        suppressNextLabelClick = true;
        draggedLabelData = null;
        draggedLabelElements = null;
    }
});

window.addEventListener('DOMContentLoaded', () => {
    initViewer();
    
    const targetObserver = new MutationObserver(() => {
        if (typeof resolveOverworldLabelCollisions === 'function') {
            resolveOverworldLabelCollisions();
        }
    });
    targetObserver.observe(container, { childList: true });
});
