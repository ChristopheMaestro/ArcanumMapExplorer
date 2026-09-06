// Part 1

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
const addToPreviewBtn = document.getElementById('add-to-preview-btn');
const clearPendingBtn = document.getElementById('clear-pending-btn');
const outputCode = document.getElementById('output-code');
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
const bgMusicAudio = new Audio();
bgMusicAudio.loop = true;
bgMusicAudio.onerror = () => {
    console.warn(`Could not load background music track: "${bgMusicAudio.src}"`);
};

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

// Labels added in this editing session (not yet pasted into maps.js) + any existing labels that were moved
let outputEntries = [];

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
    overworldAll: true
};

const CATEGORY_EMOJI = {
    quest: '📜',
    followers: '🛡️',
    shop: '🪙',
    waypoint: '🚪',
    key: '🔑'
};

const CATEGORY_COLORS = {
    quest: '#ffaa00',
    followers: '#5dade2',
    shop: '#2ecc71',
    waypoint: '#e74c3c',
    key: '#9b59b6'
};

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

function attemptPlayMusic() {
    if (!bgMusicAudio.src) return;
    const playPromise = bgMusicAudio.play();
    if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
            // Most browsers block audio until the user interacts with the page at least once -
            // silently retry on the first click anywhere, by which point that's no longer an issue
            document.addEventListener('click', () => { bgMusicAudio.play().catch(() => {}); }, { once: true });
        });
    }
}

function updateBackgroundMusic(selectedMap) {
    const resolvedPath = resolveMusicPath(selectedMap);
    if (resolvedPath === currentMusicPath) return; // same track (or still no track) - leave it playing as-is
    currentMusicPath = resolvedPath;
    if (!resolvedPath) {
        bgMusicAudio.pause();
        bgMusicAudio.removeAttribute('src');
        return;
    }
    bgMusicAudio.src = resolvedPath;
    // Keep playing even while muted (silently) so unmuting resumes mid-track instead of restarting
    attemptPlayMusic();
}

function initViewer() {
    if (typeof ArcanumMapData === 'undefined') {
        menuContainer.innerHTML = '<div style="text-align:center;color:#ff6b6b;padding:20px;">Error: maps.js not loaded.</div>';
        return;
    }

    loadMusicSettings();
    bgMusicAudio.volume = musicVolume;
    bgMusicAudio.muted = isMusicMuted;
    musicVolumeSlider.value = Math.round(musicVolume * 100);
    musicToggleBtn.textContent = isMusicMuted ? '🔇' : '🔊';
    musicToggleBtn.title = isMusicMuted ? 'Unmute background music' : 'Mute background music';

    musicToggleBtn.addEventListener('click', () => {
        isMusicMuted = !isMusicMuted;
        bgMusicAudio.muted = isMusicMuted;
        musicToggleBtn.textContent = isMusicMuted ? '🔇' : '🔊';
        musicToggleBtn.title = isMusicMuted ? 'Unmute background music' : 'Mute background music';
        saveMusicSettings();
        if (!isMusicMuted) attemptPlayMusic(); // covers the case where autoplay was blocked before the first click
    });

    musicVolumeSlider.addEventListener('input', () => {
        musicVolume = musicVolumeSlider.value / 100;
        bgMusicAudio.volume = musicVolume;
        saveMusicSettings();
    });

    if (ArcanumMapData.length > 0) {
        let startIndex = 0;
        let restorePosition = null;

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

        document.getElementById('tab-arcanum').classList.toggle('active-tab', activeModCategory === 'arcanum');
        document.getElementById('tab-cerestored').classList.toggle('active-tab', activeModCategory === 'cerestored');
        document.getElementById('tab-modules').classList.toggle('active-tab', activeModCategory === 'modules');

        renderGroupedFileList();
        populateTargetMapOptions();
        loadImage(startIndex, null, restorePosition);
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
        outputEntries.push({ kind: 'new', label: newLabelObj });
        renderOutputPanel();

        // Keep coordinate/category/target-map selections sticky so placing a run of
        // similar labels is quick - only the free-text fields reset between placements.
        newLabelText.value = '';
        newLabelDesc.value = '';
        newLabelTargetX.value = '';
        newLabelTargetY.value = '';
    });

    clearPendingBtn.addEventListener('click', () => {
        clearPendingEditorState();
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
        return (group === "World Map" || group === "Arcanum" || group === "Other locations");
    } else if (categoryKey === "cerestored") {
        return (group === "Arcanum CE Restored" || group === "Forgotten Places" || group === "CE Restored World Map");
    } else if (categoryKey === "modules") {
        return (group !== "World Map" && group !== "Arcanum" && group !== "Arcanum CE Restored" && group !== "Forgotten Places" && group !== "CE Restored World Map" && group !== "Other locations");
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
        const descText = label.description || "No archival notes recorded for this location.";
        
        let travelButtonHtml = "";
        if (label.targetMapFilename) {
            const viewData = (typeof label.targetX === 'number') ? `data-x="${label.targetX}" data-y="${label.targetY}" data-z="${label.targetZoom || 1}"` : "";
            travelButtonHtml = `<button class="travel-link-btn" data-target="${label.targetMapFilename}" ${viewData}>🧭 Travel to Location</button>`;
        }
        
        popup.innerHTML = `<span class="close-btn">&times;</span><h4>${label.text}</h4><p style="margin:0;">${descText}</p>${travelButtonHtml}`;
        popup.querySelector('.close-btn').addEventListener('click', (el) => { el.stopPropagation(); popup.remove(); });
        
        if (label.targetMapFilename) {
            popup.querySelector('.travel-link-btn').addEventListener('click', (el) => {
                el.stopPropagation();
                let viewOverride = null;
                if (typeof label.targetX === 'number') {
                    viewOverride = { x: label.targetX, y: label.targetY, zoom: label.targetZoom || 1 };
                }
                travelToMapByFilename(label.targetMapFilename, viewOverride);
            });
        }
        container.appendChild(popup);
    };

    if (currentMapType === "overworld") {
        const renderX = (img.clientWidth / 2000) * (2000 - label.x);
        const renderY = (img.clientHeight / 2000) * label.y;
        
        const dot = document.createElement('div');
        dot.className = 'arcanum-world-dot';
        if (isPending) dot.classList.add('pending-label');
        dot.style.left = `${renderX}px`; dot.style.top = `${renderY}px`;
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            if (suppressNextLabelClick) { suppressNextLabelClick = false; return; }
            openInfoPopup();
        });
        container.appendChild(dot);

        const txt = document.createElement('div');
        txt.className = 'arcanum-world-text';
        if (isPending) txt.classList.add('pending-label');
        txt.innerHTML = `<span>${label.text}</span>`;
        txt.style.left = `${renderX}px`; txt.style.top = `${renderY}px`;
        txt.addEventListener('click', (e) => {
            e.stopPropagation();
            if (suppressNextLabelClick) { suppressNextLabelClick = false; return; }
            openInfoPopup();
        });
        
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
    if (labelData.targetMapFilename) parts.push(`targetMapFilename: "${labelData.targetMapFilename}"`);
    if (typeof labelData.targetX === 'number' && !isNaN(labelData.targetX)) parts.push(`targetX: ${labelData.targetX}`);
    if (typeof labelData.targetY === 'number' && !isNaN(labelData.targetY)) parts.push(`targetY: ${labelData.targetY}`);
    return `{ ${parts.join(', ')} },`;
}

function renderOutputPanel() {
    if (outputEntries.length === 0) {
        outputCode.textContent = '// Click the map, fill in the fields, and hit "Add Label".\n// Drag any pin (new or existing) to reposition it.';
        return;
    }
    const lines = outputEntries.map(entry => {
        const codeLine = buildLabelCodeLine(entry.label);
        if (entry.kind === 'update') {
            return `// Moved "${entry.label.text}" - find its existing line in maps.js and replace it with:\n${codeLine}`;
        }
        return codeLine;
    });
    outputCode.textContent = lines.join('\n');
}

function clearPendingEditorState() {
    outputEntries = [];
    renderOutputPanel();
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
        const alreadyTracked = outputEntries.some(entry => entry.label === draggedLabelData);
        if (!alreadyTracked) {
            outputEntries.push({ kind: 'update', label: draggedLabelData });
        }
        renderOutputPanel();
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
