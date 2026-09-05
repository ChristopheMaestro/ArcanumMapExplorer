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
const outputCode = document.getElementById('output-code');

const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');

const filterDropdownBtn = document.getElementById('filterDropdownBtn');
const filterDropdownContent = document.getElementById('filterDropdownContent');
const chkQuest = document.getElementById('chk-quest');
const chkFollowers = document.getElementById('chk-followers');
const chkShop = document.getElementById('chk-shop');
const chkWaypoint = document.getElementById('chk-waypoint');
const chkOverworldAll = document.getElementById('chk-overworld-all');
const lblOverworldAll = document.getElementById('lbl-overworld-all');

const mapCoordinatesHud = document.getElementById('map-coordinates-hud');
const hudValW = document.getElementById('hud-val-w');
const hudValS = document.getElementById('hud-val-s');

let domElementsRegistry = []; 
let scale = 1;
let posX = 0;
let posY = 0;

let isDragging = false;
let startX = 0;
let startY = 0;
let isCreatorMode = false;

let targetX = 0;
let targetY = 0;
let currentMapFilename = ""; 
let currentMapType = ""; 
let activeModCategory = "arcanum"; 

const minScale = 0.05;
const maxScale = 12;

const filterRegistry = {
    quest: true,
    followers: true,
    shop: true,
    waypoint: true,
    overworldAll: true
};

// Local file safe reloading configuration bypasses origin security rules
window.hotReloadMapDatabase = function() {
    window.location.reload();
};

function initViewer() {
    if (typeof ArcanumMapData === 'undefined') {
        menuContainer.innerHTML = '<div style="text-align:center;color:#ff6b6b;padding:20px;">Error: maps.js not loaded.</div>';
        return;
    }

    if (ArcanumMapData.length > 0) {
        renderGroupedFileList();
        loadImage(0); 
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
    chkOverworldAll.addEventListener('change', () => processFilterChange('overworldAll', chkOverworldAll));


// Part 2

    toggleCreatorModeBtn.addEventListener('click', () => {
        isCreatorMode = !isCreatorMode;
        if (isCreatorMode) {
            toggleCreatorModeBtn.textContent = "Exit Editor";
            toggleCreatorModeBtn.classList.add('active-tool');
            toolStatus.style.display = 'inline';
            creatorPanel.style.display = 'flex';
            viewport.classList.add('creator-mode');
            clearActivePopups();
        } else {
            toggleCreatorModeBtn.textContent = "Label Editor";
            toggleCreatorModeBtn.classList.remove('active-tool');
            toolStatus.style.display = 'none';
            creatorPanel.style.removeProperty('display');
            viewport.classList.remove('creator-mode');
        }
    });

    addToPreviewBtn.addEventListener('click', () => {
        const labelTitle = newLabelText.value.trim() || "New Marker Location";
        const labelDescription = newLabelDesc.value.trim();
        
        const dynamicMockObject = {
            x: targetX,
            y: targetY,
            text: labelTitle,
            description: labelDescription,
            category: "quest" 
        };
        
        renderSingleLabel(dynamicMockObject);
        newLabelText.value = '';
        newLabelDesc.value = '';
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
            const cat = el.getAttribute('data-category');
            if (filterRegistry[cat] === true || cat === 'uncategorized') {
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
        return (group === "World Map" || group === "Arcanum");
    } else if (categoryKey === "cerestored") {
        return (group === "Arcanum CE Restored" || group === "Forgotten Places" || group === "CE Restored World Map");
    } else if (categoryKey === "modules") {
        return (group !== "World Map" && group !== "Arcanum" && group !== "Arcanum CE Restored" && group !== "Forgotten Places" && group !== "CE Restored World Map");
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

function loadImage(index, arrivalViewOverride) {
    domElementsRegistry.forEach((el) => {
        if (el) el.classList.remove('active');
    });
    
    const activeSubmenus = menuContainer.querySelectorAll('.submenu-list');
    activeSubmenus.forEach(menu => menu.remove());

    clearOldLabels();
    clearActivePopups();

    const selectedMap = ArcanumMapData[index];
    currentMapFilename = selectedMap.filename; 
    currentMapType = selectedMap.typemap || ""; 
    img.style.display = 'block';
    img.src = selectedMap.filename; 

    if (selectedMap.background) {
        viewport.style.background = selectedMap.background;
    } else {
        viewport.style.background = "#0b0a08"; 
    }

    if (currentMapType === "overworld") {
        mapCoordinatesHud.style.display = 'flex';
        lblOverworldAll.style.display = 'flex';
        chkQuest.parentElement.style.display = 'none';
        chkFollowers.parentElement.style.display = 'none';
        chkShop.parentElement.style.display = 'none';
        chkWaypoint.parentElement.style.display = 'none';
    } else {
        mapCoordinatesHud.style.display = 'none';
        lblOverworldAll.style.display = 'none';
        chkQuest.parentElement.style.display = 'flex';
        chkFollowers.parentElement.style.display = 'flex';
        chkShop.parentElement.style.display = 'flex';
        chkWaypoint.parentElement.style.display = 'flex';
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
        const finalView = arrivalViewOverride || selectedMap.defaultView;
        resetView(finalView);
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
    const matchedIndex = ArcanumMapData.findIndex(map => map.filename === targetName);
    if (matchedIndex !== -1) {
        const targetMap = ArcanumMapData[matchedIndex];
        
        let targetCategory = "modules";
        if (checkMapCategoryMatch(targetMap, "arcanum")) targetCategory = "arcanum";
        else if (checkMapCategoryMatch(targetMap, "cerestored")) targetCategory = "cerestored";
        
        if (targetCategory !== activeModCategory) {
            activeModCategory = targetCategory;
            document.getElementById('tab-arcanum').classList.toggle('active-tab', targetCategory === 'arcanum');
            document.getElementById('tab-cerestored').classList.toggle('active-tab', targetCategory === 'cerestored');
            document.getElementById('tab-modules').classList.toggle('active-tab', categoryKey === 'modules');
            renderGroupedFileList();
        }

        loadImage(matchedIndex, arrivalViewOverride);
    } else {
        alert(`Travel target failed: "${targetName}" is not registered inside your maps.js file.`);
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

function renderSingleLabel(label) {
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
        dot.style.left = `${renderX}px`; dot.style.top = `${renderY}px`;
        dot.addEventListener('click', (e) => { e.stopPropagation(); openInfoPopup(); });
        container.appendChild(dot);

        const txt = document.createElement('div');
        txt.className = 'arcanum-world-text';
        txt.innerHTML = `<span>${label.text}</span>`;
        txt.style.left = `${renderX}px`; txt.style.top = `${renderY}px`;
        txt.addEventListener('click', (e) => { e.stopPropagation(); openInfoPopup(); });
        
        txt.setAttribute('data-raw-x', renderX);
        txt.setAttribute('data-raw-y', renderY);

        container.appendChild(txt);
    } else {
        const labelElement = document.createElement('div');
        labelElement.className = 'map-label';
        labelElement.style.left = `${label.x}px`;
        labelElement.style.top = `${label.y}px`;
        
        const targetCat = label.category || "uncategorized";
        labelElement.setAttribute('data-category', targetCat);

        if (targetCat === "quest") {
            labelElement.classList.add('cat-quest');
            labelElement.innerHTML = `📜 ${label.text}`;
            labelElement.addEventListener('click', (e) => { e.stopPropagation(); openInfoPopup(); });
        } else if (targetCat === "followers") {
            labelElement.classList.add('cat-followers');
            labelElement.innerHTML = `🛡️ ${label.text}`;
            labelElement.addEventListener('click', (e) => { e.stopPropagation(); openInfoPopup(); });
        } else if (targetCat === "shop") {
            labelElement.classList.add('cat-shop');
            labelElement.innerHTML = `🪙 ${label.text}`;
            labelElement.addEventListener('click', (e) => { e.stopPropagation(); openInfoPopup(); });
        } else if (targetCat === "waypoint") {
            labelElement.classList.add('cat-waypoint');
            labelElement.innerHTML = `🚪 ${label.text}`;
            
            labelElement.addEventListener('click', (e) => { 
                e.stopPropagation(); 
                if (label.targetMapFilename) {
                    let viewOverride = null;
                    if (typeof label.targetX === 'number') {
                        viewOverride = { x: label.targetX, y: label.targetY, zoom: label.targetZoom || 1 };
                    }
                    travelToMapByFilename(label.targetMapFilename, viewOverride); 
                }
            });
        } else {
            labelElement.textContent = label.text;
            labelElement.addEventListener('click', (e) => { e.stopPropagation(); openInfoPopup(); });
        }

        container.appendChild(labelElement);
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

function updateOutputSnippet() {
    if (currentMapType === "overworld") {
        const normalizedX = (targetX / img.clientWidth) * 2000;
        const normalizedY = (targetY / img.clientHeight) * 2000;
        outputCode.textContent = `{ x: ${Math.round(2000 - normalizedX)}, y: ${Math.round(normalizedY)}, text: "${newLabelText.value.trim()}", description: "${newLabelDesc.value.trim()}" },`;
    } else {
        outputCode.textContent = `{ x: ${targetX}, y: ${targetY}, text: "${newLabelText.value.trim()}", description: "${newLabelDesc.value.trim()}", category: "quest" },`;
    }
}

newLabelText.addEventListener('input', updateOutputSnippet);
newLabelDesc.addEventListener('input', updateOutputSnippet);

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
    if (!img.src || img.style.display === 'none' || isCreatorMode) return;
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
});

viewport.addEventListener('click', (e) => {
    if (isCreatorMode) {
        const rect = img.getBoundingClientRect();
        const clickX = Math.round((e.clientX - rect.left) / scale);
        const clickY = Math.round((e.clientY - rect.top) / scale);
        if (clickX >= 0 && clickX <= img.clientWidth && clickY >= 0 && clickY <= img.clientHeight) {
            targetX = clickX;
            targetY = clickY;
            if (currentMapType === "overworld") {
                const normalizedX = (targetX / img.clientWidth) * 2000;
                const normalizedY = (targetY / img.clientHeight) * 2000;
                coordDisplay.textContent = `W: ${Math.round(2000 - normalizedX)}, S: ${Math.round(normalizedY)}`;
            } else {
                coordDisplay.textContent = `X: ${targetX}, Y: ${targetY}`;
            }
            updateOutputSnippet();
        }
    } else {
        clearActivePopups();
    }
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    updateTransform();
});

window.addEventListener('mouseup', () => { isDragging = false; });

window.addEventListener('DOMContentLoaded', () => {
    initViewer();
    
    const targetObserver = new MutationObserver(() => {
        if (typeof resolveOverworldLabelCollisions === 'function') {
            resolveOverworldLabelCollisions();
        }
    });
    targetObserver.observe(container, { childList: true });
});
