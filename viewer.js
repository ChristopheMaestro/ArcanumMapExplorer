// Part 1

// Merge the three per-tab data files (arcanummaps.js, cerestoredmaps.js, modulesmaps.js)
// into the single ArcanumMapData array the rest of this file expects. Each guard falls
// back to an empty array so a syntax error in just one file doesn't take down the others.
function normalizeMapMetadata(maps) {
    const mapsByFilename = new Map(maps.map(map => [map.filename, map]));
    const resolvingGroups = new Set();

    function resolveModGroup(map) {
        if (!map.parentFilename) return map.modGroup;
        const parent = mapsByFilename.get(map.parentFilename);
        if (!parent || resolvingGroups.has(map.filename)) return map.modGroup;

        resolvingGroups.add(map.filename);
        const parentGroup = resolveModGroup(parent);
        resolvingGroups.delete(map.filename);
        return parentGroup || map.modGroup;
    }

    return maps.map(map => ({
        ...map,
        typemap: map.typemap || 'local',
        modGroup: resolveModGroup(map)
    }));
}

const ArcanumMapData = normalizeMapMetadata([
    ...(typeof ArcanumCitiesMapData !== 'undefined' ? ArcanumCitiesMapData : []),
    ...(typeof CERestoredMapData !== 'undefined' ? CERestoredMapData : []),
    ...(typeof ModulesMapData !== 'undefined' ? ModulesMapData : [])
]);
const ItemDataByName = new Map(
    (typeof ArcanumItemData !== 'undefined' ? ArcanumItemData : []).map(item => [item.name, item])
);

// A map object can optionally carry `altViews`: an array of { displayName, defaultView }
// entries. These let the same filename/labels/quests show up as more than one menu entry
// (e.g. two names for the same location) without duplicating the map data - only the name
// and the starting view differ. This resolves either a map's own displayName or one of its
// altViews' displayNames, returning the map plus whichever displayName/defaultView matched.
function resolveMapEntryByDisplayName(name) {
    for (let index = 0; index < ArcanumMapData.length; index++) {
        const map = ArcanumMapData[index];
        if (map.displayName === name) {
            return { map, index, displayName: map.displayName, defaultView: map.defaultView };
        }
        if (Array.isArray(map.altViews)) {
            const alt = map.altViews.find(a => a.displayName === name);
            if (alt) {
                return { map, index, displayName: alt.displayName, defaultView: alt.defaultView || map.defaultView };
            }
        }
    }
    return null;
}

const menuContainer = document.getElementById('menu-container');
const viewport = document.getElementById('viewport');
const container = document.getElementById('pan-container');
const img = document.getElementById('zoomImage');

// Chunked-map support: for maps with `chunked: true`, `filename` points to a folder of tiles
// named "<chunkPrefix>_<pixelX>_<pixelY>.(jpg|png)" instead of a single image. This div stands in
// for `img` as the map's full-size backdrop; individual tile <img> elements are absolutely
// positioned inside it and are only created once they enter (or approach) the viewport.
const chunkContainer = document.createElement('div');
chunkContainer.id = 'chunk-container';
chunkContainer.style.position = 'absolute';
chunkContainer.style.top = '0';
chunkContainer.style.left = '0';
chunkContainer.style.display = 'none';
container.appendChild(chunkContainer);

let currentMapChunked = false;
let currentMapTotalWidth = 0;
let currentMapTotalHeight = 0;
let currentChunkSize = 500;
let currentChunkFolder = '';
let currentChunkPrefix = '';
let loadedChunkKeys = new Set();
let currentMapLoaded = false; // true once either the single image or the chunk grid is ready - replaces the old img.src/display checks used to gate panning/zooming
const toggleCreatorModeBtn = document.getElementById('toggleCreatorModeBtn');
const toolStatus = document.getElementById('tool-status');
const creatorPanel = document.getElementById('creator-panel');
const coordDisplay = document.getElementById('coord-display');
const newLabelText = document.getElementById('new-label-text');
const toggleDescBtn = document.getElementById('toggle-desc-btn');
const descriptionField = document.getElementById('description-field');
const newLabelDesc = document.getElementById('new-label-desc');
const newLabelMaster = document.getElementById('new-label-master');
const newLabelLinks = document.getElementById('new-label-links');
const genericLinksField = document.getElementById('generic-links-field');
const questFields = document.getElementById('quest-fields');
const newLabelQuestName = document.getElementById('new-label-quest-name');
const newLabelQuestDesc = document.getElementById('new-label-quest-desc');
const newLabelQuestTarget = document.getElementById('new-label-quest-target');
const newLabelQuestPart = document.getElementById('new-label-quest-part');
const addToPreviewBtn = document.getElementById('add-to-preview-btn');
const copyAllBtn = document.getElementById('copy-all-btn');
const copyNewBtn = document.getElementById('copy-new-btn');
const categoryField = document.getElementById('category-field');
const newLabelCategoryChecks = document.querySelectorAll('.new-label-cat-chk');
const masterFields = document.getElementById('master-fields');
const followerFields = document.getElementById('follower-fields');
const newLabelFollowerType = document.getElementById('new-label-follower-type');
const statsFields = document.getElementById('stats-fields');
const newLabelSex = document.getElementById('new-label-sex');
const newLabelRace = document.getElementById('new-label-race');
const newLabelLevel = document.getElementById('new-label-level');
const waypointFields = document.getElementById('waypoint-fields');
const newLabelTargetMap = document.getElementById('new-label-target-map');
const targetWaypointRow = document.getElementById('target-waypoint-row');
const newLabelTargetWaypoint = document.getElementById('new-label-target-waypoint');
const newLabelTargetX = document.getElementById('new-label-target-x');
const newLabelTargetY = document.getElementById('new-label-target-y');
const shopFields = document.getElementById('shop-fields');
const newLabelShopType = document.getElementById('new-label-shop-type');
const newLabelShopMarkup = document.getElementById('new-label-shop-markup');
const chestFields = document.getElementById('chest-fields');
const newLabelChestState = document.getElementById('new-label-chest-state');
const chestKeyRow = document.getElementById('chest-key-row');
const newLabelChestKey = document.getElementById('new-label-chest-key');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const editingIndicator = document.getElementById('editing-indicator');
const editingLabelName = document.getElementById('editing-label-name');
let editingLabel = null;
let editingLabelDomEls = [];

const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const altViewBtn = document.getElementById('altViewBtn');
const altViewIcon = document.getElementById('altViewIcon');
let isShowingAltView = false;

const filterDropdownBtn = document.getElementById('filterDropdownBtn');
let labelsVisible = true;

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
const statisticsBtn = document.getElementById('statisticsBtn');
const statisticsOverlay = document.getElementById('statistics-overlay');
const statisticsMapName = document.getElementById('statistics-mapname');
const statisticsContent = document.getElementById('statistics-content');
const statisticsClose = document.getElementById('statistics-close');
const questsTableOverlay = document.getElementById('quests-table-overlay');
const questsTableMapName = document.getElementById('quests-table-mapname');
const questsTableContent = document.getElementById('quests-table-content');
const questsTableClose = document.getElementById('quests-table-close');
const itemImageOverlay = document.getElementById('item-image-overlay');
const itemImageOverlayImg = document.getElementById('item-image-overlay-img');

function showItemImage(imagePath) {
    itemImageOverlayImg.src = imagePath;
    itemImageOverlay.style.display = 'flex';
}

function hideItemImage() {
    itemImageOverlay.style.display = 'none';
    itemImageOverlayImg.src = '';
}
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
let altMenuEntries = []; // { index, displayName, el } for each altViews menu entry currently rendered
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
let draggedLabelCoordKeys = { xKey: "x", yKey: "y" };
let dragLastScreenX = 0;
let dragLastScreenY = 0;
let suppressNextLabelClick = false;

// Labels added in this editing session, not yet part of the map's own labels array
let pendingNewLabels = [];
let modifiedLabels = new Set();

let clickMapX = 0;
let clickMapY = 0;
let currentMapFilename = ""; 
let currentDisplayName = ""; // the displayName of whichever entry (primary or altViews) is currently showing
let currentMapType = ""; 
let activeModCategory = "arcanum"; 
let pendingAutoOpenLabelText = null;

let currentMusicPath = null;
let isMusicMuted = false;
let musicVolume = 0.5;

const minScale = 0.05;
const maxScale = 12;

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
    bounty: '💰',
    master: '🎓'
};

const CATEGORY_LABELS = {
    quest: 'Quest',
    followers: 'Followers',
    shop: 'Shop',
    waypoint: 'Waypoint',
    key: 'Key',
    npc: 'NPC',
    chest: 'Chest',
    information: 'Information',
    altar: 'Altar',
    bounty: 'Bounty',
    master: 'Master'
};

// Canonical display order for a label's categories - so a label authored as
// ["followers", "quest"] and one authored as ["quest", "followers"] always render their
// icons/colors in the same order, instead of whatever order they happen to appear in the
// source js file.
const CATEGORY_ORDER = Object.keys(CATEGORY_EMOJI);

function getOrderedCategories(categoryValue) {
    const cats = Array.isArray(categoryValue) ? categoryValue.filter(Boolean) : (categoryValue ? [categoryValue] : []);
    return cats.slice().sort((a, b) => {
        const ia = CATEGORY_ORDER.indexOf(a);
        const ib = CATEGORY_ORDER.indexOf(b);
        return (ia === -1 ? CATEGORY_ORDER.length : ia) - (ib === -1 ? CATEGORY_ORDER.length : ib);
    });
}

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
    bounty: '#e84393',
    master: '#f1c40f'
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

// Sex displays as an emoji only - edit/extend this map for other values you use
const SEX_EMOJI = {
    male: '♂️',
    m: '♂️',
    female: '♀️',
    f: '♀️'
};

// Inventory item tiers - "regular" is the default when no tier is set (or for plain-string items).
// Edit these to adjust the colors, or add new tiers.
const ITEM_TIER_COLORS = {
    regular: '#ffffff',
    magick: '#5dade2',
    hexed: '#e67e22'
};

// The "part" field on a quest is normally a number ("Part 1", "Part 2", ...), but also
// accepts the sentinel string "reward" for the step where the quest's reward is handed
// out - rendered as a distinct green "Reward" badge instead of "Part N".
function buildQuestPartBadge(part) {
    if (!part) return '';
    if (part === 'reward') return ` <span class="quest-part-badge quest-reward-badge">Reward</span>`;
    return ` <span class="quest-part-badge">Part ${part}</span>`;
}

// A quest can optionally be flagged as the main storyline (✨) or a quest to become a
// master of a discipline (🎓). Plain side quests get no marker at all.
const QUEST_TYPE_MARKER = {
    main: '✨',
    master: '🎓'
};
const QUEST_TYPE_COLOR = {
    main: '#ffd700',
    master: '#f1c40f'
};

function buildQuestTypeMarker(questType) {
    return QUEST_TYPE_MARKER[questType] ? ` <span class="quest-type-marker quest-type-${questType}">${QUEST_TYPE_MARKER[questType]}</span>` : '';
}

function buildLabelStatsRowHtml(label) {
    const parts = [];
    if (label.sex) {
        const key = String(label.sex).trim().toLowerCase();
        parts.push(SEX_EMOJI[key] || label.sex);
    }
    if (label.race) parts.push(label.race);
    if (label.level !== undefined && label.level !== null && label.level !== '') parts.push(`Level ${label.level}`);
    if (label.age !== undefined && label.age !== null && label.age !== '') parts.push(`Age ${label.age}`);
    return parts.length > 0 ? `<div class="label-stats-row">${parts.join(' &middot; ')}</div>` : '';
}

function buildLabelMasterHtml(label) {
    return label.master ? `<div class="label-master">${label.master}</div>` : '';
}

// A follower's type is one of a fixed set of values, rendered the same way as the Master
// line - an italic line right below the label's name.
const FOLLOWER_TYPE_LABELS = {
    regular: 'Regular Follower',
    special: 'Special Follower',
    temporary: 'Temporary Follower'
};

function buildLabelFollowerTypeHtml(label) {
    const text = FOLLOWER_TYPE_LABELS[label.followerType];
    return text ? `<div class="label-follower-type">${text}</div>` : '';
}

// Shared renderer for inventory-like item lists (inventory / offering / blessing) - each entry is
// either a plain string (regular tier, not clickable) or { name, image?, tier? }. fieldName is used
// to route clicks back to the right array on the label object when opening a clickable item's image.
function buildItemListHtml(items, sectionTitle, fieldName) {
    if (!Array.isArray(items) || items.length === 0) return '';
    const itemsHtml = items.map((item, i) => {
        const itemData = typeof item === 'string' ? { name: item } : item;
        const catalogItem = ItemDataByName.get(itemData.name) || {};
        const resolvedItem = { ...catalogItem, ...itemData };
        const name = resolvedItem.name;
        const tier = resolvedItem.tier || 'regular';
        const color = ITEM_TIER_COLORS[tier] || ITEM_TIER_COLORS.regular;
        const clickable = Boolean(resolvedItem.image);
        const cls = clickable ? ' class="inventory-item-clickable"' : '';
        const dataAttr = clickable ? ` data-item-field="${fieldName}" data-item-index="${i}"` : '';
        return `<li${cls}${dataAttr} style="color:${color};">${name}</li>`;
    }).join('');
    return `<div class="npc-inventory-block">
        <div class="npc-inventory-title">${sectionTitle}</div>
        <ul class="npc-inventory-list">${itemsHtml}</ul>
    </div>`;
}

function getSelectedNewLabelCategories() {
    return Array.from(newLabelCategoryChecks).filter(cb => cb.checked).map(cb => cb.value);
}

// Sex/Race/Level only make sense for categories that represent a person - NPC, Shop
// (shopkeepers), Followers, and Master trainers all qualify.
function categoriesUseStatsFields(cats) {
    return cats.includes('npc') || cats.includes('shop') || cats.includes('followers') || cats.includes('master');
}

// Category checkboxes are visually hidden - keeps their pill's highlighted state in sync
// with the (possibly programmatically-set) checked value. Call after any change that
// doesn't go through the checkbox's own "change" event (e.g. loading a label for editing).
function syncCategoryPillActiveStates() {
    newLabelCategoryChecks.forEach(cb => {
        const pill = cb.closest('.category-icon-pill');
        if (pill) pill.classList.toggle('active', cb.checked);
    });
}

// Shows/hides the Description Note field behind the 💡 toggle next to Label Text, and
// keeps the button's own highlighted state in sync.
function setDescriptionFieldVisible(visible) {
    if (!descriptionField || !toggleDescBtn) return;
    descriptionField.style.display = visible ? 'flex' : 'none';
    toggleDescBtn.classList.toggle('active', visible);
}

// A chest's key is an item name that some label carries in its Inventory (an NPC, shop,
// or another chest) - the picker surfaces inventory items whose name contains "key" (a
// heuristic, since item data carries no explicit type flag), split into "in this location"
// (the current map, its parent if it's a submap, and that parent's other submaps) versus
// everywhere else, so the locally-relevant ones surface first. Clicking the resulting
// "Opens With" link travels to whichever label's inventory has that exact item name
// (see findLabelCarryingItem) - not to a same-named label placed on the map.
function getInventoryKeyOptionsForCurrentLocation() {
    const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    if (!selectedMap) return { local: [], other: [] };

    const topMap = selectedMap.parentFilename
        ? (ArcanumMapData.find(m => m.filename === selectedMap.parentFilename) || selectedMap)
        : selectedMap;

    const groupFilenames = new Set([topMap.filename]);
    ArcanumMapData.forEach(m => { if (m.parentFilename === topMap.filename) groupFilenames.add(m.filename); });

    const seen = new Set();
    const local = [];
    const other = [];

    ArcanumMapData.forEach(map => {
        if (!Array.isArray(map.labels)) return;
        map.labels.forEach(label => {
            if (!Array.isArray(label.inventory)) return;
            label.inventory.forEach(item => {
                const name = typeof item === 'string' ? item : (item && item.name);
                if (!name || seen.has(name) || !name.toLowerCase().includes('key')) return;
                seen.add(name);
                const entry = { text: name, mapDisplayName: map.displayName };
                (groupFilenames.has(map.filename) ? local : other).push(entry);
            });
        });
    });

    local.sort((a, b) => a.text.localeCompare(b.text));
    other.sort((a, b) => a.text.localeCompare(b.text));

    return { local, other };
}

function populateChestKeyOptions() {
    if (!newLabelChestKey) return;
    const previousValue = newLabelChestKey.value;
    newLabelChestKey.innerHTML = '<option value="">— no key needed —</option>';

    const { local, other } = getInventoryKeyOptionsForCurrentLocation();

    if (local.length > 0) {
        const localGroup = document.createElement('optgroup');
        localGroup.label = 'In this location';
        local.forEach(entry => {
            const opt = document.createElement('option');
            opt.value = entry.text;
            opt.textContent = entry.text;
            localGroup.appendChild(opt);
        });
        newLabelChestKey.appendChild(localGroup);
    }

    if (other.length > 0) {
        const otherGroup = document.createElement('optgroup');
        otherGroup.label = 'Elsewhere';
        other.forEach(entry => {
            const opt = document.createElement('option');
            opt.value = entry.text;
            opt.textContent = `${entry.text} (${entry.mapDisplayName})`;
            otherGroup.appendChild(opt);
        });
        newLabelChestKey.appendChild(otherGroup);
    }

    if (previousValue && Array.from(newLabelChestKey.options).some(o => o.value === previousValue)) {
        newLabelChestKey.value = previousValue;
    }
}

function updateChestKeyRowVisibility() {
    if (!chestKeyRow || !newLabelChestState) return;
    chestKeyRow.style.display = newLabelChestState.value === 'locked' ? 'flex' : 'none';
}

function populateTargetMapOptions() {
    if (!newLabelTargetMap) return;
    const previousValue = newLabelTargetMap.value;
    newLabelTargetMap.innerHTML = '<option value="">— choose a map —</option>';

    const seen = new Set();
    const uniqueMaps = [];
    ArcanumMapData.forEach(map => {
        const dedupeKey = `${map.displayName}::${map.modGroup || ''}`;
        if (seen.has(dedupeKey)) return;
        seen.add(dedupeKey);
        uniqueMaps.push(map);
    });

    // Submaps of the map you're currently editing make sense as waypoint targets (e.g.
    // an "enter the cellar" label on the city map). If the current map is itself a submap,
    // its parent is also a sensible target (e.g. an "exit to the street" label inside that
    // cellar), so it's listed first and flagged as the parent - and so are its sibling
    // submaps (other interiors under that same parent, e.g. a tunnel connecting two
    // dungeon sections), flagged as siblings.
    const currentMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    const submapsOfCurrent = uniqueMaps.filter(map => map.parentFilename === currentMapFilename);
    const parentOfCurrent = (currentMap && currentMap.parentFilename)
        ? uniqueMaps.find(map => map.filename === currentMap.parentFilename)
        : null;
    const siblingsOfCurrent = (currentMap && currentMap.parentFilename)
        ? uniqueMaps.filter(map => map.parentFilename === currentMap.parentFilename && map.filename !== currentMapFilename)
        : [];
    const targetMapEntries = parentOfCurrent
        ? [parentOfCurrent, ...siblingsOfCurrent, ...submapsOfCurrent]
        : submapsOfCurrent;

    targetMapEntries.forEach(map => {
        const isParent = !!parentOfCurrent && map.filename === parentOfCurrent.filename;
        const isSibling = siblingsOfCurrent.some(s => s.filename === map.filename);
        const opt = document.createElement('option');
        opt.value = map.displayName;
        const label = isParent ? `↑ ${map.displayName} (parent map)`
            : isSibling ? `↔ ${map.displayName} (sibling map)`
            : map.displayName;
        opt.textContent = map.modGroup ? `${label} — ${map.modGroup}` : label;
        newLabelTargetMap.appendChild(opt);

        // Each altViews entry is its own selectable destination (same filename/labels,
        // different name + starting view), so list it right after the primary entry.
        if (Array.isArray(map.altViews)) {
            map.altViews.forEach(alt => {
                const altOpt = document.createElement('option');
                altOpt.value = alt.displayName;
                const altLabel = isParent ? `↑ ${alt.displayName} (parent map)`
                    : isSibling ? `↔ ${alt.displayName} (sibling map)`
                    : alt.displayName;
                altOpt.textContent = map.modGroup ? `${altLabel} — ${map.modGroup}` : altLabel;
                newLabelTargetMap.appendChild(altOpt);
            });
        }
    });

    if (previousValue && Array.from(newLabelTargetMap.options).some(o => o.value === previousValue)) {
        newLabelTargetMap.value = previousValue;
    }
}

function populateTargetWaypointOptions() {
    if (!newLabelTargetWaypoint || !targetWaypointRow) return;
    const previousValue = newLabelTargetWaypoint.value;
    newLabelTargetWaypoint.innerHTML = '<option value="">— pick a waypoint on that map —</option>';

    const resolvedTarget = resolveMapEntryByDisplayName(newLabelTargetMap.value);
    const targetMap = resolvedTarget ? resolvedTarget.map : null;
    const labels = (targetMap && targetMap.labels) ? targetMap.labels : [];
    // Index into the map's own labels array (rather than label text) so two waypoints that
    // happen to share the same name on that map can still be told apart.
    const waypointEntries = labels
        .map((label, index) => ({ label, index }))
        .filter(({ label }) => {
            const cats = Array.isArray(label.category) ? label.category : (label.category ? [label.category] : []);
            return cats.includes('waypoint');
        });

    targetWaypointRow.style.display = waypointEntries.length > 0 ? 'flex' : 'none';

    waypointEntries.forEach(({ label, index }) => {
        const opt = document.createElement('option');
        opt.value = String(index);
        opt.textContent = `${label.text} (${label.x}, ${label.y})`;
        newLabelTargetWaypoint.appendChild(opt);
    });

    if (previousValue && Array.from(newLabelTargetWaypoint.options).some(o => o.value === previousValue)) {
        newLabelTargetWaypoint.value = previousValue;
    }
}

function populateShopTypeOptions() {
    const datalist = document.getElementById('shop-type-options');
    if (!datalist) return;
    const types = new Set();
    ArcanumMapData.forEach(map => {
        if (!map.labels) return;
        map.labels.forEach(label => {
            if (label.shopType) types.add(label.shopType.trim());
        });
    });
    [...types].sort().forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        datalist.appendChild(opt);
    });
}

// Collects every quest name already in use (from inline linkedLabels quest entries, from
// string references to another quest label, and from quest labels with no linkedLabels at
// all - where the label's own text IS the quest name) so the Quest Name field can suggest
// existing quests instead of risking a typo'd duplicate.
function populateQuestNameOptions() {
    const datalist = document.getElementById('quest-name-options');
    if (!datalist) return;
    const names = new Set();
    ArcanumMapData.forEach(map => {
        if (!Array.isArray(map.labels)) return;
        map.labels.forEach(label => {
            const cats = Array.isArray(label.category) ? label.category : (label.category ? [label.category] : []);
            if (!cats.includes('quest')) return;
            if (Array.isArray(label.linkedLabels) && label.linkedLabels.length > 0) {
                label.linkedLabels.forEach(entry => {
                    if (typeof entry === 'string') {
                        if (entry.trim()) names.add(entry.trim());
                    } else if (entry && entry.questName) {
                        names.add(String(entry.questName).trim());
                    }
                });
            } else if (label.text) {
                names.add(label.text.trim());
            }
        });
    });
    datalist.innerHTML = '';
    [...names].filter(Boolean).sort().forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        datalist.appendChild(opt);
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
                displayName: currentDisplayName,
                modCategory: activeModCategory,
                scale: scale,
                posX: posX,
                posY: posY,
                menuScrollTop: menuContainer.scrollTop
            }));
        } catch (e) {
            // Storage full/unavailable - nothing we can do, fail silently
        }
    }, 250);
}

// Persist the location list's scroll position as the user scrolls it, so it can be restored
// after a reload - without this, only actions that already call saveViewerState (loading a
// map, panning/zooming) would pick up whatever the scroll happened to be at the time.
menuContainer.addEventListener('scroll', saveViewerState);

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
    const resolved = resolveMapEntryByDisplayName(mapName);
    if (!resolved) return null;

    const x = parseFloat(params.get('x'));
    const y = parseFloat(params.get('y'));
    const zoom = parseFloat(params.get('zoom'));
    // Explicit x/y/zoom in the link wins; otherwise fall back to whichever entry (primary
    // or altViews) the "map" name resolved to, so an alt-name link opens at its own view.
    const view = (!isNaN(x) && !isNaN(y) && !isNaN(zoom)) ? { x, y, zoom } : resolved.defaultView;
    return { index: resolved.index, view, displayName: resolved.displayName };
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
        params.set('map', currentDisplayName || selectedMap.displayName);
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
        const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
        if (selectedMap && selectedMap.modGroup === 'World Map') {
            const isOpen = questsTableOverlay.classList.toggle('open');
            if (isOpen) renderQuestsTable();
        } else {
            const isOpen = questListPanel.classList.toggle('open');
            if (isOpen) renderQuestPanel();
        }
    });

    questPanelClose.addEventListener('click', () => {
        questListPanel.classList.remove('open');
    });

    statisticsBtn.addEventListener('click', () => {
        const isOpen = statisticsOverlay.classList.toggle('open');
        if (isOpen) renderStatisticsPanel();
    });

    statisticsClose.addEventListener('click', () => {
        statisticsOverlay.classList.remove('open');
    });

    statisticsOverlay.addEventListener('click', (e) => {
        if (e.target === statisticsOverlay) statisticsOverlay.classList.remove('open');
    });

    questsTableClose.addEventListener('click', () => {
        questsTableOverlay.classList.remove('open');
    });

    questsTableOverlay.addEventListener('click', (e) => {
        if (e.target === questsTableOverlay) questsTableOverlay.classList.remove('open');
    });

    itemImageOverlay.addEventListener('click', hideItemImage);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && itemImageOverlay.style.display === 'flex') hideItemImage();
        if (e.key === 'Escape' && statisticsOverlay.classList.contains('open')) statisticsOverlay.classList.remove('open');
        if (e.key === 'Escape' && questsTableOverlay.classList.contains('open')) questsTableOverlay.classList.remove('open');
    });

    if (ArcanumMapData.length > 0) {
        let startIndex = 0;
        let restorePosition = null;
        let arrivalView = null;
        let displayNameToRestore = null;
        let savedMenuScrollTop = null;

        const shared = parseShareLink();
        if (shared) {
            startIndex = shared.index;
            arrivalView = shared.view;
            displayNameToRestore = shared.displayName;
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
                    displayNameToRestore = saved.displayName || null;
                    if (saved.modCategory) activeModCategory = saved.modCategory;
                    if (typeof saved.scale === 'number' && typeof saved.posX === 'number' && typeof saved.posY === 'number') {
                        restorePosition = { scale: saved.scale, posX: saved.posX, posY: saved.posY };
                    }
                    if (typeof saved.menuScrollTop === 'number') {
                        savedMenuScrollTop = saved.menuScrollTop;
                    }
                }
            }
        }

        document.getElementById('tab-arcanum').classList.toggle('active-tab', activeModCategory === 'arcanum');
        document.getElementById('tab-cerestored').classList.toggle('active-tab', activeModCategory === 'cerestored');
        document.getElementById('tab-modules').classList.toggle('active-tab', activeModCategory === 'modules');

        renderGroupedFileList();
        populateTargetMapOptions();
        populateShopTypeOptions();
        populateQuestNameOptions();
        loadImage(startIndex, arrivalView, restorePosition, displayNameToRestore);

        // Restore the location list's scroll position last, after renderGroupedFileList and
        // loadImage have both finished building the menu (including the active map's submenu),
        // so nothing afterward resets it back to the top.
        if (savedMenuScrollTop !== null) {
            menuContainer.scrollTop = savedMenuScrollTop;
        }
    } else {
        menuContainer.innerHTML = '<div style="text-align:center;color:#888;padding:20px;">No maps registered.</div>';
    }

    filterDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        labelsVisible = !labelsVisible;
        filterDropdownBtn.textContent = labelsVisible ? 'Hide labels' : 'Display labels';
        filterDropdownBtn.classList.toggle('active-tool', !labelsVisible);
        applyActiveFilters();
    });


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

    if (toggleDescBtn) {
        toggleDescBtn.addEventListener('click', () => {
            const isVisible = descriptionField.style.display !== 'none';
            setDescriptionFieldVisible(!isVisible);
        });
    }

    newLabelCategoryChecks.forEach(cb => {
        cb.addEventListener('change', () => {
            const cats = getSelectedNewLabelCategories();
            waypointFields.style.display = cats.includes('waypoint') ? 'flex' : 'none';
            shopFields.style.display = cats.includes('shop') ? 'flex' : 'none';
                masterFields.style.display = cats.includes('master') ? 'flex' : 'none';
                followerFields.style.display = cats.includes('followers') ? 'flex' : 'none';
                statsFields.style.display = categoriesUseStatsFields(cats) ? 'flex' : 'none';
            questFields.style.display = cats.includes('quest') ? 'flex' : 'none';
            genericLinksField.style.display = cats.includes('quest') ? 'none' : 'flex';
            chestFields.style.display = cats.includes('chest') ? 'flex' : 'none';
            if (cats.includes('chest')) {
                populateChestKeyOptions();
                updateChestKeyRowVisibility();
            }
            syncCategoryPillActiveStates();
        });
    });

    if (newLabelChestState) {
        newLabelChestState.addEventListener('change', () => {
            updateChestKeyRowVisibility();
            populateChestKeyOptions();
        });
    }

    // Initial pill highlight to match whatever categories are checked by default in the HTML.
    syncCategoryPillActiveStates();

    newLabelTargetMap.addEventListener('change', () => {
        populateTargetWaypointOptions();
    });

    newLabelTargetWaypoint.addEventListener('change', () => {
        if (!newLabelTargetWaypoint.value) return;
        const targetMap = ArcanumMapData.find(m => m.displayName === newLabelTargetMap.value);
        const label = targetMap && targetMap.labels && targetMap.labels[parseInt(newLabelTargetWaypoint.value, 10)];
        if (!label) return;
        newLabelTargetX.value = label.x;
        newLabelTargetY.value = label.y;
    });

// Parses the Quest Part field: the sentinel word "reward" (any case) becomes the string
// 'reward' (see buildQuestPartBadge), anything else is parsed as the usual part number.
function parseQuestPartValue(raw) {
    const trimmed = (raw || '').trim();
    if (!trimmed) return null;
    if (trimmed.toLowerCase() === 'reward') return 'reward';
    return parseInt(trimmed, 10);
}

function buildQuestEntryFromFields() {
    const questNameVal = newLabelQuestName.value.trim();
    const questDescVal = newLabelQuestDesc.value.trim();
    const questTargetVal = newLabelQuestTarget.value.trim();
    const questPartVal = newLabelQuestPart.value.trim();
    if (!questNameVal && !questDescVal && !questTargetVal && !questPartVal) return null;
    const entry = {};
    if (questNameVal) entry.questName = questNameVal;
    if (questDescVal) entry.questDescription = questDescVal;
    if (questTargetVal) entry.target = questTargetVal;
    if (questPartVal !== '') entry.part = parseQuestPartValue(questPartVal);
    return entry;
}

    addToPreviewBtn.addEventListener('click', () => {
        const labelTitle = newLabelText.value.trim() || "New Marker Location";
        const labelDescription = newLabelDesc.value.trim();
        const linkedText = newLabelLinks.value.trim();
        const cats = (currentMapType !== "overworld") ? getSelectedNewLabelCategories() : [];

        if (editingLabel) {
            // --- Save edits to an existing (or still-pending) label, in place ---
            editingLabel.text = labelTitle;
            editingLabel.description = labelDescription;

            // Quest category: linkedLabels holds a single structured quest object built
            // from the Quest Name/Description/Target/Part fields, replacing whatever was
            // there before. Any other category: the Linked Label(s) field only ever
            // represents simple string-form links - preserve any object-form entries
            // (e.g. Myrth-style multi-quest objects) that might already be there from
            // hand-edited maps.js data.
            if (cats.includes('quest')) {
                const questEntry = buildQuestEntryFromFields();
                if (questEntry) {
                    // questType (✨ main / 🎓 master) has no field in this form - it's set by
                    // hand in maps.js, so preserve it rather than silently dropping it on save.
                    const previousObjectEntry = Array.isArray(editingLabel.linkedLabels)
                        ? editingLabel.linkedLabels.find(e => e && typeof e === 'object') : null;
                    if (previousObjectEntry && previousObjectEntry.questType) questEntry.questType = previousObjectEntry.questType;
                    editingLabel.linkedLabels = [questEntry];
                } else {
                    delete editingLabel.linkedLabels;
                }
            } else {
                const preservedObjectLinks = Array.isArray(editingLabel.linkedLabels)
                    ? editingLabel.linkedLabels.filter(e => typeof e !== 'string') : [];
                const newStringLinks = linkedText ? linkedText.split(',').map(s => s.trim()).filter(Boolean) : [];
                const combinedLinks = [...newStringLinks, ...preservedObjectLinks];
                if (combinedLinks.length > 0) editingLabel.linkedLabels = combinedLinks;
                else delete editingLabel.linkedLabels;
            }

            if (currentMapType !== "overworld") {
                if (cats.length === 1) editingLabel.category = cats[0];
                else if (cats.length > 1) editingLabel.category = cats;
                else delete editingLabel.category;

                if (cats.includes('waypoint')) {
                    delete editingLabel.description;
                    const targetMapName = newLabelTargetMap.value;
                    if (targetMapName) editingLabel.targetMapFilename = targetMapName; else delete editingLabel.targetMapFilename;
                    const tX = newLabelTargetX.value.trim();
                    const tY = newLabelTargetY.value.trim();
                    if (tX !== '') editingLabel.targetX = parseInt(tX, 10); else delete editingLabel.targetX;
                    if (tY !== '') editingLabel.targetY = parseInt(tY, 10); else delete editingLabel.targetY;
                } else {
                    delete editingLabel.targetMapFilename;
                    delete editingLabel.targetX;
                    delete editingLabel.targetY;
                }

                if (cats.includes('shop')) {
                    const shopTypeVal = newLabelShopType.value.trim();
                    if (shopTypeVal) editingLabel.shopType = shopTypeVal; else delete editingLabel.shopType;
                    const markupVal = newLabelShopMarkup.value.trim();
                    if (markupVal !== '') editingLabel.shopMarkup = parseFloat(markupVal); else delete editingLabel.shopMarkup;
                } else {
                    delete editingLabel.shopType;
                    delete editingLabel.shopMarkup;
                }

                if (cats.includes('master')) {
                    const masterValue = newLabelMaster.value.trim();
                    if (masterValue) editingLabel.master = masterValue; else delete editingLabel.master;
                } else {
                    delete editingLabel.master;
                }

                if (cats.includes('followers')) {
                    const followerTypeValue = newLabelFollowerType.value;
                    if (followerTypeValue) editingLabel.followerType = followerTypeValue; else delete editingLabel.followerType;
                } else {
                    delete editingLabel.followerType;
                }

                if (categoriesUseStatsFields(cats)) {
                    const sexValue = newLabelSex.value;
                    if (sexValue) editingLabel.sex = sexValue; else delete editingLabel.sex;
                    const raceValue = newLabelRace.value;
                    if (raceValue) editingLabel.race = raceValue; else delete editingLabel.race;
                    const levelValue = newLabelLevel.value.trim();
                    if (levelValue !== '') editingLabel.level = parseInt(levelValue, 10); else delete editingLabel.level;
                } else {
                    delete editingLabel.sex;
                    delete editingLabel.race;
                    delete editingLabel.level;
                }

                if (cats.includes('chest')) {
                    const chestStateVal = newLabelChestState.value;
                    if (chestStateVal) editingLabel.chestState = chestStateVal; else delete editingLabel.chestState;
                    const chestKeyVal = newLabelChestKey.value;
                    if (chestKeyVal) editingLabel.chestKey = chestKeyVal; else delete editingLabel.chestKey;
                } else {
                    delete editingLabel.chestState;
                    delete editingLabel.chestKey;
                }
            }

            const wasPending = pendingNewLabels.includes(editingLabel);
            if (!wasPending) modifiedLabels.add(editingLabel);
            editingLabelDomEls.forEach(el => el.remove());
            renderSingleLabel(editingLabel, wasPending);

            stopEditingLabel();
            return;
        }

        // --- Add a brand-new label ---
        const newLabelObj = {
            x: clickMapX,
            y: clickMapY,
            text: labelTitle
        };

        if (!cats.includes('waypoint')) newLabelObj.description = labelDescription;

        if (cats.includes('quest')) {
            const questEntry = buildQuestEntryFromFields();
            if (questEntry) newLabelObj.linkedLabels = [questEntry];
        } else if (linkedText) {
            newLabelObj.linkedLabels = linkedText.split(',').map(s => s.trim()).filter(Boolean);
        }

        if (currentMapType !== "overworld") {
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
            if (cats.includes('shop')) {
                const shopTypeVal = newLabelShopType.value.trim();
                if (shopTypeVal) newLabelObj.shopType = shopTypeVal;
                const markupVal = newLabelShopMarkup.value.trim();
                if (markupVal !== '') newLabelObj.shopMarkup = parseFloat(markupVal);
            }
            if (cats.includes('master')) {
                const masterValue = newLabelMaster.value.trim();
                if (masterValue) newLabelObj.master = masterValue;
            }
            if (cats.includes('followers')) {
                const followerTypeValue = newLabelFollowerType.value;
                if (followerTypeValue) newLabelObj.followerType = followerTypeValue;
            }
            if (categoriesUseStatsFields(cats)) {
                const sexValue = newLabelSex.value;
                if (sexValue) newLabelObj.sex = sexValue;
                const raceValue = newLabelRace.value;
                if (raceValue) newLabelObj.race = raceValue;
                const levelValue = newLabelLevel.value.trim();
                if (levelValue !== '') newLabelObj.level = parseInt(levelValue, 10);
            }
            if (cats.includes('chest')) {
                const chestStateVal = newLabelChestState.value;
                if (chestStateVal) newLabelObj.chestState = chestStateVal;
                const chestKeyVal = newLabelChestKey.value;
                if (chestKeyVal) newLabelObj.chestKey = chestKeyVal;
            }
        }

        renderSingleLabel(newLabelObj, true);
        pendingNewLabels.push(newLabelObj);

        // Keep coordinate/category/target-map selections sticky so placing a run of
        // similar labels is quick - only the free-text fields reset between placements.
        newLabelText.value = '';
        newLabelDesc.value = '';
        setDescriptionFieldVisible(false);
        newLabelMaster.value = '';
        newLabelLinks.value = '';
        newLabelQuestName.value = '';
        newLabelQuestDesc.value = '';
        newLabelQuestTarget.value = '';
        newLabelQuestPart.value = '';
        newLabelTargetX.value = '';
        newLabelTargetY.value = '';
        if (newLabelTargetWaypoint) newLabelTargetWaypoint.value = '';
        newLabelShopType.value = '';
        newLabelShopMarkup.value = '';
        newLabelChestState.value = '';
        newLabelChestKey.value = '';
        newLabelSex.value = '';
        newLabelRace.value = '';
        newLabelLevel.value = '';
        updateChestKeyRowVisibility();
        populateQuestNameOptions();
    });

    cancelEditBtn.addEventListener('click', () => {
        stopEditingLabel();
    });

    const copyLabels = (button, labels) => {
        const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
        if (!selectedMap) return;
        const lines = labels.map(label => `\t\t\t${buildLabelCodeLine(label)}`).join('\n');

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(lines).then(() => {
                flashButtonText(button, '✓ Copied!');
            }).catch(() => {
                window.prompt('Copy this text:', lines);
            });
        } else {
            window.prompt('Copy this text:', lines);
        }
    };

    copyAllBtn.addEventListener('click', () => {
        const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
        copyLabels(copyAllBtn, selectedMap ? (selectedMap.labels || []) : []);
    });

    copyNewBtn.addEventListener('click', () => {
        copyLabels(copyNewBtn, [...modifiedLabels, ...pendingNewLabels]);
    });

    zoomInBtn.addEventListener('click', (e) => { e.stopPropagation(); executeButtonZoom(true); });
    zoomOutBtn.addEventListener('click', (e) => { e.stopPropagation(); executeButtonZoom(false); });

    altViewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
        if (!selectedMap || !selectedMap.altView) return;
        isShowingAltView = !isShowingAltView;
        img.src = isShowingAltView ? selectedMap.altView.image : selectedMap.filename;
        altViewBtn.classList.toggle('active', isShowingAltView);
        altViewBtn.title = isShowingAltView ? 'Show original view' : 'Show alternate view';
    });

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
    const elements = container.querySelectorAll('.arcanum-world-dot, .arcanum-world-text, .map-label');
    elements.forEach(el => el.classList.toggle('filter-hidden', !labelsVisible));
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
    if (!currentMapLoaded) return;
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
    altMenuEntries = [];
    const grouped = {};
    
    ArcanumMapData.forEach((map, index) => {
        if (map.parentFilename) return; 
        if (!checkMapCategoryMatch(map, activeModCategory)) return;
        
        const groupName = map.modGroup || 'Uncategorized Mod';
        if (!grouped[groupName]) grouped[groupName] = [];

        // A map contributes its own entry plus one entry per altViews name - all treated
        // as independent, identically-styled rows and sorted alphabetically together within
        // the group, so an altViews entry doesn't stand out as "belonging" to the map above it.
        grouped[groupName].push({ displayName: map.displayName, index, defaultView: map.defaultView, isAlt: false });
        if (Array.isArray(map.altViews)) {
            map.altViews.forEach(alt => {
                grouped[groupName].push({ displayName: alt.displayName, index, defaultView: alt.defaultView, isAlt: true });
            });
        }
    });
    
    for (const modName in grouped) {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'mod-heading';
        headerDiv.textContent = modName;
        menuContainer.appendChild(headerDiv);
        
        const ul = document.createElement('ul');
        ul.className = 'file-list';
        
        grouped[modName]
            .sort((a, b) => a.displayName.localeCompare(b.displayName))
            .forEach(entry => {
                const li = document.createElement('li');
                li.textContent = entry.displayName;
                li.addEventListener('click', () => loadImage(entry.index, entry.defaultView, null, entry.displayName));
                ul.appendChild(li);

                if (entry.isAlt) {
                    altMenuEntries.push({ index: entry.index, displayName: entry.displayName, el: li });
                } else {
                    domElementsRegistry[entry.index] = li;
                }
            });
        menuContainer.appendChild(ul);
    }
}

function loadImage(index, arrivalViewOverride, restorePosition, displayNameOverride) {
    domElementsRegistry.forEach((el) => {
        if (el) el.classList.remove('active');
    });
    altMenuEntries.forEach((entry) => entry.el.classList.remove('active'));
    
    const activeSubmenus = menuContainer.querySelectorAll('.submenu-list');
    activeSubmenus.forEach(menu => menu.remove());

    clearOldLabels();
    clearActivePopups();
    clearPendingEditorState();

    const selectedMap = ArcanumMapData[index];
    currentMapFilename = selectedMap.filename; 
    currentDisplayName = displayNameOverride || selectedMap.displayName;
    currentMapType = selectedMap.typemap || ""; 
    currentMapChunked = !!selectedMap.chunked;
    currentMapLoaded = false;

    updateBackgroundMusic(selectedMap);

    isShowingAltView = false;
    if (selectedMap.altView && selectedMap.altView.icon) {
        altViewBtn.style.display = 'flex';
        altViewIcon.src = selectedMap.altView.icon;
        altViewBtn.classList.remove('active');
        altViewBtn.title = 'Show alternate view';
    } else {
        altViewBtn.style.display = 'none';
    }

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
        categoryField.style.display = 'none';
        waypointFields.style.display = 'none';
        shopFields.style.display = 'none';
        masterFields.style.display = 'none';
        followerFields.style.display = 'none';
        statsFields.style.display = 'none';
        questFields.style.display = 'none';
        chestFields.style.display = 'none';
        genericLinksField.style.display = 'flex';
    } else {
        mapCoordinatesHud.style.display = 'flex';
        hudBoxW.style.display = 'none';
        hudBoxS.style.display = 'none';
        hudBoxZoom.style.display = 'inline-flex';
        categoryField.style.display = 'flex';
        waypointFields.style.display = getSelectedNewLabelCategories().includes('waypoint') ? 'flex' : 'none';
        shopFields.style.display = getSelectedNewLabelCategories().includes('shop') ? 'flex' : 'none';
        masterFields.style.display = getSelectedNewLabelCategories().includes('master') ? 'flex' : 'none';
        followerFields.style.display = getSelectedNewLabelCategories().includes('followers') ? 'flex' : 'none';
        statsFields.style.display = categoriesUseStatsFields(getSelectedNewLabelCategories()) ? 'flex' : 'none';
        questFields.style.display = getSelectedNewLabelCategories().includes('quest') ? 'flex' : 'none';
        genericLinksField.style.display = getSelectedNewLabelCategories().includes('quest') ? 'none' : 'flex';
        const catsForChest = getSelectedNewLabelCategories();
        chestFields.style.display = catsForChest.includes('chest') ? 'flex' : 'none';
        if (catsForChest.includes('chest')) {
            populateChestKeyOptions();
            updateChestKeyRowVisibility();
        }
    }

    let primaryTargetIndex = index;
    if (selectedMap.parentFilename) {
        const parentIdx = ArcanumMapData.findIndex(m => m.filename === selectedMap.parentFilename);
        if (parentIdx !== -1) primaryTargetIndex = parentIdx;
    }
    
    // If an altViews entry is what's actually showing, highlight that li instead of the
    // primary one (they share the same underlying map/index, but are separate menu rows).
    const activeAltEntry = altMenuEntries.find(entry => entry.index === index && entry.displayName === currentDisplayName);
    if (activeAltEntry) {
        activeAltEntry.el.classList.add('active');
    } else if (domElementsRegistry[primaryTargetIndex]) {
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

    if (currentMapChunked) {
        // Chunked maps have no single image to wait on - the tile grid's dimensions are
        // known upfront from the map data, so we can finish loading immediately.
        // Clear the previous map's onload/onerror and just hide the element rather than
        // reassigning its src - img is invisible either way, and touching src risked firing
        // a load/error cycle (possibly against a stale handler) for no reason.
        img.onload = null;
        img.onerror = null;
        img.style.display = 'none';
        setupChunkedMap(selectedMap);
        currentMapLoaded = true;
        finishMapLoad(selectedMap, arrivalViewOverride, restorePosition);
    } else {
        chunkContainer.style.display = 'none';
        img.style.display = 'block';
        img.src = selectedMap.filename;
        img.onload = () => {
            currentMapLoaded = true;
            finishMapLoad(selectedMap, arrivalViewOverride, restorePosition);
        };
        img.onerror = () => {
            img.style.display = 'none';
            alert(`Could not find or render image: "${selectedMap.filename}"`);
        };
    }
}

function finishMapLoad(selectedMap, arrivalViewOverride, restorePosition) {
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

    populateTargetMapOptions();

    applyActiveFilters(); 
    if (questListPanel.classList.contains('open')) renderQuestPanel();
    if (statisticsOverlay.classList.contains('open')) renderStatisticsPanel();
    if (questsTableOverlay.classList.contains('open')) renderQuestsTable();

    if (pendingAutoOpenLabelText) {
        const labelMatch = container.querySelector(`[data-label-text="${CSS.escape(pendingAutoOpenLabelText)}"]`);
        if (labelMatch) {
            pendingAutoOpenLabelText = null;
            labelMatch.click();
        }
    }

    // resetView()/updateTransform() above already schedules a chunk update via
    // scheduleChunkUpdate(), and loadVisibleChunks() is a no-op until discoverChunkBounds()
    // finishes probing the real tile grid (it calls loadVisibleChunks() itself once ready).
    // This call just covers the case where bounds were already known (e.g. revisiting a map).
    loadVisibleChunks();
}

function travelToMapByFilename(targetName, arrivalViewOverride, autoOpenLabelText = null) {
    const resolved = resolveMapEntryByDisplayName(targetName);
    if (resolved) {
        const { map: targetMap, index: matchedIndex, displayName: resolvedDisplayName, defaultView } = resolved;
        pendingAutoOpenLabelText = autoOpenLabelText || null;

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

        const normalizedView = arrivalViewOverride
            ? { ...arrivalViewOverride, zoom: 1 }
            : (defaultView ? { ...defaultView, zoom: 1 } : { x: 0, y: 0, zoom: 1 });

        loadImage(matchedIndex, normalizedView, null, resolvedDisplayName);
    } else {
        alert(`Travel target failed: "${targetName}" is not registered inside your maps.js file (no map with that displayName).`);
    }
}

function normalizeLabelText(value) {
    if (value === null || value === undefined) return '';
    return String(value).replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, ' ').trim().toLowerCase();
}

function findLabelAnywhereByText(searchText) {
    const target = normalizeLabelText(searchText);
    if (!target) return null;

    let fallback = null;

    for (const map of ArcanumMapData) {
        if (!Array.isArray(map.labels)) continue;
        for (const label of map.labels) {
            if (!label || typeof label !== 'object' || !label.text) continue;

            const labelText = normalizeLabelText(label.text);
            if (!labelText) continue;

            if (labelText === target) return { map, label };
            if (!fallback) {
                const containsTarget = labelText.includes(target) || target.includes(labelText);
                if (containsTarget) fallback = { map, label };
            }
        }
    }

    return fallback;
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
    const viewOverride = (map.typemap === "overworld") ? null : { x: label.x, y: label.y, zoom: 1 };
    travelToMapByFilename(map.displayName, viewOverride, searchText);
}

// A chest's "Opens With" key doesn't point at a same-named label - it points at whichever
// label actually carries that item in its Inventory (an NPC, a shop, or another chest).
// One key per chest is assumed, so the first match found wins.
function findLabelCarryingItem(itemName) {
    const target = normalizeLabelText(itemName);
    if (!target) return null;

    for (const map of ArcanumMapData) {
        if (!Array.isArray(map.labels)) continue;
        for (const label of map.labels) {
            if (!Array.isArray(label.inventory)) continue;
            const carries = label.inventory.some(item => {
                const name = typeof item === 'string' ? item : (item && item.name);
                return name && normalizeLabelText(name) === target;
            });
            if (carries) return { map, label };
        }
    }
    return null;
}

function travelToLabelCarryingKey(itemName) {
    const result = findLabelCarryingItem(itemName);
    if (!result) {
        alert(`No label found carrying "${itemName}" in its Inventory - check that some NPC/Shop/Chest lists this exact item name in its Inventory.`);
        return;
    }
    const { map, label } = result;
    const viewOverride = (map.typemap === "overworld") ? null : { x: label.x, y: label.y, zoom: 1 };
    travelToMapByFilename(map.displayName, viewOverride, label.text);
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

function buildQuestListForMap(selectedMap) {
    if (!selectedMap || !selectedMap.labels) return { npcGroups: [], unassigned: [] };

    const npcGroups = [];

    selectedMap.labels.forEach(questLabel => {
        const cats = Array.isArray(questLabel.category) ? questLabel.category : (questLabel.category ? [questLabel.category] : []);
        if (!cats.includes('quest')) return;

        const quests = (Array.isArray(questLabel.linkedLabels) ? questLabel.linkedLabels : []).map(entry => {
            if (typeof entry === 'string') {
                const found = findLabelAnywhereByText(entry);
                if (!found) return null;
                const foundCats = Array.isArray(found.label.category) ? found.label.category : (found.label.category ? [found.label.category] : []);
                if (!foundCats.includes('quest') || foundCats.includes('npc')) return null;
                return { title: entry, description: found.label.description || '', target: entry, part: found.label.part || null, questType: found.label.questType || null };
            }
            return { title: entry.questName || entry.target || questLabel.text, description: entry.questDescription || '', target: entry.target || null, part: entry.part || null, questType: entry.questType || null };
        }).filter(Boolean);

        if (quests.length === 0) {
            quests.push({ title: questLabel.text, description: questLabel.description || '', target: null, ownLabel: questLabel, part: questLabel.part || null, questType: questLabel.questType || null });
        }
        npcGroups.push({ npcLabel: questLabel, quests });
    });

    npcGroups.sort((a, b) => a.npcLabel.text.localeCompare(b.npcLabel.text));

    return { npcGroups, unassigned: [] };
}

function buildQuestListForCurrentMap() {
    const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    return buildQuestListForMap(selectedMap);
}

function renderQuestPanel() {
    const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    questPanelMapName.textContent = selectedMap ? (currentDisplayName || selectedMap.displayName) : '';

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
                <div class="quest-panel-quest-title">📜 ${q.title}${buildQuestTypeMarker(q.questType)}${buildQuestPartBadge(q.part)}</div>
                ${q.description ? `<div class="quest-panel-quest-desc">${q.description}</div>` : ''}
            </div>`;
        });
        html += `</div>`;
    });

    if (unassigned.length > 0) {
        html += `<div class="quest-panel-section-label">Other quests</div>`;
        unassigned.forEach((q, ui) => {
            html += `<div class="quest-panel-quest-item" data-unassigned-index="${ui}">
                <div class="quest-panel-quest-title">📜 ${q.title}${buildQuestTypeMarker(q.questType)}${buildQuestPartBadge(q.part)}</div>
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
            else if (quest.ownLabel) jumpToLabelOnCurrentMap(quest.ownLabel);
        });
    });

    questPanelContent.querySelectorAll('.quest-panel-quest-item[data-unassigned-index]').forEach(el => {
        el.addEventListener('click', () => {
            const ui = parseInt(el.getAttribute('data-unassigned-index'), 10);
            jumpToLabelOnCurrentMap(unassigned[ui].ownLabel);
        });
    });
}

// --- Quests table modal: flat, sortable list of every quest across a region (used on the World
// Map, where the side panel above has no single map's worth of quests to group by) ---

function buildAllQuestsRows(selectedMap) {
    const sourceMaps = getStatisticsSourceMaps(selectedMap);
    const rows = [];
    sourceMaps.forEach(map => {
        const { npcGroups } = buildQuestListForMap(map);
        npcGroups.forEach(group => {
            group.quests.forEach(quest => {
                rows.push({
                    questName: quest.title,
                    description: quest.description || '',
                    connectedLabelName: group.npcLabel.text,
                    mapDisplayName: map.displayName,
                    mapFilename: map.filename,
                    target: quest.target || null,
                    ownLabel: quest.ownLabel || null,
                    part: (typeof quest.part === 'number' || quest.part === 'reward') ? quest.part : null,
                    questType: quest.questType || null
                });
            });
        });
    });
    return rows;
}

// Collapses every row sharing the same quest name into one group. A group with more than one
// row is a "multi-part" quest: it renders as a single [+] row (part count = the highest part
// number seen) that expands to list each part's label/location, in ascending part order.
// A part's sort position within a multi-part quest: numbers sort normally, and "reward"
// (the quest's payoff step) always sorts last, after every numbered part.
function questPartSortValue(part) {
    if (part === 'reward') return Infinity;
    return typeof part === 'number' ? part : 0;
}

function groupQuestsTableRows(rows) {
    const groupsByName = new Map();
    rows.forEach(row => {
        const key = (row.questName || '').trim();
        if (!groupsByName.has(key)) groupsByName.set(key, { questName: row.questName, rows: [] });
        groupsByName.get(key).rows.push(row);
    });

    return Array.from(groupsByName.values()).map(group => {
        const sortedRows = group.rows.slice().sort((a, b) => questPartSortValue(a.part) - questPartSortValue(b.part));
        const isMultiPart = sortedRows.length > 1;
        const partNumbers = sortedRows.map(r => r.part).filter(p => typeof p === 'number');
        const partCount = isMultiPart
            ? (partNumbers.length > 0 ? Math.max(...partNumbers) : sortedRows.length)
            : null;
        // A multi-part quest's parts should all agree on questType, but fall back to
        // whichever part actually carries it (usually part 1) just in case they don't.
        const representative = sortedRows.find(r => r.part === 1) || sortedRows[0];
        const questType = representative.questType || sortedRows.find(r => r.questType)?.questType || null;
        return { questName: group.questName, rows: sortedRows, isMultiPart, partCount, questType };
    });
}

let questsTableGroups = [];
let questsTableSortColumn = null;
let questsTableSortDirection = 'asc';
let questsTableExpanded = new Set(); // quest names currently expanded
let questsTableLocationIndexMap = new Map(); // map filename -> default sort-bucket position
let questsTableLocationInfoMap = new Map(); // map filename -> { displayName, isSub }
let questsTableLocationFilter = ''; // top-level map filename to restrict to, '' = all locations
let questsTableTypeFilter = new Set(['main', 'master', 'side']); // quest-type buckets currently shown (OR filter)

// Default (unsorted) ordering for the quests table: Cities first (each city's submaps'
// quests listed right after it), then Quest locations, then Other locations - mirroring
// how getStatisticsSourceMaps aggregates the World Map. Non-World-Map callers just get the
// selected map followed by its own submaps. A map that is both a top-level entry and someone
// else's submap (e.g. Hall of Records, filed under Quest locations but parented to Tarant)
// keeps only its first-seen bucket, matching the dedupe behavior used elsewhere.
function buildQuestsTableLocationOrder(selectedMap) {
    const order = [];
    if (!selectedMap) return order;

    if (selectedMap.modGroup === 'World Map') {
        const groupOrder = ['Cities', 'Quest locations', 'Other locations'];
        groupOrder.forEach(modGroup => {
            // modGroup is inherited from the parent map (see resolveModGroup), so a submap's
            // modGroup matches its parent's - exclude anything with a parentFilename here or
            // submaps would also be picked up as "top-level" locations.
            const topMaps = ArcanumMapData.filter(m => m.modGroup === modGroup && !m.parentFilename);
            topMaps.forEach(topMap => {
                order.push({ filename: topMap.filename, displayName: topMap.displayName, isSub: false, parentFilename: null });
                const subMaps = ArcanumMapData.filter(m => m.parentFilename === topMap.filename);
                subMaps.forEach(subMap => {
                    order.push({ filename: subMap.filename, displayName: subMap.displayName, isSub: true, parentFilename: topMap.filename });
                });
            });
        });
    } else {
        order.push({ filename: selectedMap.filename, displayName: selectedMap.displayName, isSub: false, parentFilename: null });
        const subMaps = ArcanumMapData.filter(m => m.parentFilename === selectedMap.filename);
        subMaps.forEach(subMap => {
            order.push({ filename: subMap.filename, displayName: subMap.displayName, isSub: true, parentFilename: selectedMap.filename });
        });
    }
    return order;
}

// A location filter can leave a multi-part quest's usual "part 1" row outside the
// selected location (its other parts happen to live elsewhere) - fall back to whichever
// row actually landed in the filtered set so the header/columns shown stay consistent
// with what's visible.
function getQuestsTableGroupRepresentative(group, locationFilenames) {
    if (locationFilenames) {
        const matching = group.rows.find(r => locationFilenames.has(r.mapFilename));
        if (matching) return matching;
    }
    return group.rows.find(r => r.part === 1) || group.rows[0];
}

function getQuestsTableGroupMapFilename(group, locationFilenames) {
    return getQuestsTableGroupRepresentative(group, locationFilenames).mapFilename;
}

function getQuestsTableGroupLocationIndex(group, locationFilenames) {
    const filename = getQuestsTableGroupMapFilename(group, locationFilenames);
    return questsTableLocationIndexMap.has(filename)
        ? questsTableLocationIndexMap.get(filename)
        : Number.MAX_SAFE_INTEGER;
}

function getQuestsTableSortValue(group, key, locationFilenames) {
    const representative = getQuestsTableGroupRepresentative(group, locationFilenames);
    switch (key) {
        case 'quest': return (group.questName || '').toLowerCase();
        case 'part': return group.partCount || 0;
        case 'connected': return (representative.connectedLabelName || '').toLowerCase();
        case 'location': return (representative.mapDisplayName || '').toLowerCase();
        default: return '';
    }
}

// A quest's "type" for filtering purposes: the two explicit markers, or "side" for
// anything else (the vast majority of quests, which carry no questType at all).
function getQuestsTableTypeBucket(questType) {
    if (questType === 'main') return 'main';
    if (questType === 'master') return 'master';
    return 'side';
}

// Resolves a top-level location filename into itself plus its direct submaps, so picking
// a city in the location filter also shows quests from that city's interiors.
function getQuestsTableLocationFilterFilenames(topFilename) {
    if (!topFilename) return null;
    const set = new Set([topFilename]);
    ArcanumMapData.forEach(m => { if (m.parentFilename === topFilename) set.add(m.filename); });
    return set;
}

function getFilteredQuestsTableGroups() {
    const locationFilenames = getQuestsTableLocationFilterFilenames(questsTableLocationFilter);
    return questsTableGroups.filter(group => {
        if (!questsTableTypeFilter.has(getQuestsTableTypeBucket(group.questType))) return false;
        if (locationFilenames && !group.rows.some(r => locationFilenames.has(r.mapFilename))) return false;
        return true;
    });
}

// Builds the Location filter's <select> options: one per top-level location that actually
// has quests (its own or its submaps' - submaps themselves are never listed separately, and
// picking a parent location folds its submap quests in automatically), grouped into
// Cities/Quest locations/Other locations on the World Map, or just the current map on any
// other map.
function populateQuestsTableLocationFilterOptions(selectedMap) {
    const select = document.getElementById('quests-table-location-filter');
    if (!select) return;

    const topLevelEntries = buildQuestsTableLocationOrder(selectedMap)
        .filter(e => !e.isSub)
        .filter(e => {
            const locationFilenames = getQuestsTableLocationFilterFilenames(e.filename);
            return questsTableGroups.some(group => group.rows.some(r => locationFilenames.has(r.mapFilename)));
        });
    select.innerHTML = '<option value="">All locations</option>';

    if (selectedMap && selectedMap.modGroup === 'World Map') {
        const groupOrder = ['Cities', 'Quest locations', 'Other locations'];
        groupOrder.forEach(modGroup => {
            const entries = topLevelEntries
                .filter(e => {
                    const m = ArcanumMapData.find(mm => mm.filename === e.filename);
                    return m && m.modGroup === modGroup;
                })
                .slice()
                .sort((a, b) => a.displayName.localeCompare(b.displayName));
            if (entries.length === 0) return;
            const optgroup = document.createElement('optgroup');
            optgroup.label = modGroup;
            entries.forEach(e => {
                const opt = document.createElement('option');
                opt.value = e.filename;
                opt.textContent = e.displayName;
                optgroup.appendChild(opt);
            });
            select.appendChild(optgroup);
        });
    } else {
        topLevelEntries.forEach(e => {
            const opt = document.createElement('option');
            opt.value = e.filename;
            opt.textContent = e.displayName;
            select.appendChild(opt);
        });
    }

    select.value = questsTableLocationFilter;
}

function navigateToQuestRow(row) {
    questsTableOverlay.classList.remove('open');
    if (row.target) {
        travelToLinkedLabel(row.target);
    } else if (row.ownLabel) {
        if (row.mapFilename === currentMapFilename) {
            jumpToLabelOnCurrentMap(row.ownLabel);
        } else {
            travelToMapByFilename(row.mapDisplayName, { x: row.ownLabel.x, y: row.ownLabel.y, zoom: 1.5 });
        }
    }
}

function renderQuestsTableBody() {
    const locationFilenames = getQuestsTableLocationFilterFilenames(questsTableLocationFilter);
    let sortedGroups = getFilteredQuestsTableGroups();
    let showLocationHeaders = false;
    if (questsTableSortColumn) {
        sortedGroups.sort((a, b) => {
            const va = getQuestsTableSortValue(a, questsTableSortColumn, locationFilenames);
            const vb = getQuestsTableSortValue(b, questsTableSortColumn, locationFilenames);
            if (va < vb) return questsTableSortDirection === 'asc' ? -1 : 1;
            if (va > vb) return questsTableSortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    } else {
        // Default view: Cities (with their submaps' quests right below), then Quest
        // locations, then Other locations - alphabetical by quest name within each map,
        // except the main quest (✨) always floats to the top of its location.
        showLocationHeaders = true;
        sortedGroups.sort((a, b) => {
            const ia = getQuestsTableGroupLocationIndex(a, locationFilenames);
            const ib = getQuestsTableGroupLocationIndex(b, locationFilenames);
            if (ia !== ib) return ia - ib;
            const aMain = a.questType === 'main' ? 0 : 1;
            const bMain = b.questType === 'main' ? 0 : 1;
            if (aMain !== bMain) return aMain - bMain;
            return (a.questName || '').toLowerCase().localeCompare((b.questName || '').toLowerCase());
        });
    }

    const tbody = document.getElementById('quests-table-body');

    if (sortedGroups.length === 0) {
        tbody.innerHTML = '<tr class="stats-empty-row"><td colspan="4">No quests match the current filters.</td></tr>';
        return;
    }

    let lastLocationFilename = null;
    let lastTopLevelFilename = null;
    const rowsHtml = sortedGroups.map((group, gi) => {
        let headerHtml = '';
        if (showLocationHeaders) {
            const filename = getQuestsTableGroupMapFilename(group, locationFilenames);
            if (filename !== lastLocationFilename) {
                const info = questsTableLocationInfoMap.get(filename);

                // If this map is a submap and we haven't shown its parent's header yet
                // (e.g. the parent city itself has no quests of its own, only its submaps
                // do), show the parent header first so the section isn't missing its heading.
                if (info && info.isSub && info.parentFilename !== lastTopLevelFilename) {
                    const parentInfo = questsTableLocationInfoMap.get(info.parentFilename);
                    const parentDisplayName = parentInfo ? parentInfo.displayName : '';
                    if (parentDisplayName) {
                        headerHtml += `<tr class="quest-location-header"><td colspan="4">${parentDisplayName}</td></tr>`;
                    }
                    lastTopLevelFilename = info.parentFilename;
                }

                const displayName = info ? info.displayName : (group.rows[0].mapDisplayName || '');
                const subClass = info && info.isSub ? ' sub' : '';
                headerHtml += `<tr class="quest-location-header${subClass}"><td colspan="4">${displayName}</td></tr>`;

                lastLocationFilename = filename;
                if (!info || !info.isSub) lastTopLevelFilename = filename;
            }
        }

        if (!group.isMultiPart) {
            const row = group.rows[0];
            const descHtml = row.description ? `<div class="quest-subrow-desc">${row.description}</div>` : '';
            const rowClass = group.questType ? ` class="quest-row-${group.questType}"` : '';
            return headerHtml + `<tr${rowClass} data-group-index="${gi}" data-row-index="0">
                <td>${group.questName}${buildQuestTypeMarker(group.questType)}${descHtml}</td>
                <td>&mdash;</td>
                <td>${row.connectedLabelName || '&mdash;'}</td>
                <td>${row.mapDisplayName}</td>
            </tr>`;
        }

        const isExpanded = questsTableExpanded.has(group.questName);
        const partOneRow = getQuestsTableGroupRepresentative(group, locationFilenames);
        const groupRowClass = group.questType ? ` quest-row-${group.questType}` : '';
        let html = headerHtml + `<tr class="quest-group-header${groupRowClass}" data-group-index="${gi}">
            <td><span class="quest-group-toggle">${isExpanded ? '[-]' : '[+]'}</span> ${group.questName}${buildQuestTypeMarker(group.questType)}</td>
            <td>${group.partCount}</td>
            <td>${partOneRow.connectedLabelName || '&mdash;'}</td>
            <td>${partOneRow.mapDisplayName}</td>
        </tr>`;

        if (isExpanded) {
            html += group.rows.map((row, ri) => {
                const partBadge = row.part ? buildQuestPartBadge(row.part).trim() : '&mdash;';
                const descHtml = row.description ? `<div class="quest-subrow-desc">${row.description}</div>` : '';
                return `<tr class="quest-group-subrow" data-group-index="${gi}" data-row-index="${ri}">
                <td class="quest-subrow-cell">${partBadge}${descHtml}</td>
                <td></td>
                <td>${row.connectedLabelName || '&mdash;'}</td>
                <td>${row.mapDisplayName}</td>
            </tr>`;
            }).join('');
        }
        return html;
    }).join('');

    tbody.innerHTML = rowsHtml;

    questsTableContent.querySelectorAll('th[data-sort-key]').forEach(th => {
        th.classList.toggle('sorted-asc', th.getAttribute('data-sort-key') === questsTableSortColumn && questsTableSortDirection === 'asc');
        th.classList.toggle('sorted-desc', th.getAttribute('data-sort-key') === questsTableSortColumn && questsTableSortDirection === 'desc');
    });

    tbody.querySelectorAll('tr.quest-group-header').forEach(tr => {
        tr.addEventListener('click', () => {
            const gi = parseInt(tr.getAttribute('data-group-index'), 10);
            const group = sortedGroups[gi];
            if (questsTableExpanded.has(group.questName)) {
                questsTableExpanded.delete(group.questName);
            } else {
                questsTableExpanded.add(group.questName);
            }
            renderQuestsTableBody();
        });
    });

    tbody.querySelectorAll('tr[data-group-index]:not(.quest-group-header)').forEach(tr => {
        tr.addEventListener('click', () => {
            const gi = parseInt(tr.getAttribute('data-group-index'), 10);
            const ri = parseInt(tr.getAttribute('data-row-index'), 10);
            navigateToQuestRow(sortedGroups[gi].rows[ri]);
        });
    });
}

function renderQuestsTable() {
    const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    questsTableMapName.textContent = selectedMap ? (currentDisplayName || selectedMap.displayName) : '';

    const rawRows = selectedMap ? buildAllQuestsRows(selectedMap) : [];
    questsTableGroups = groupQuestsTableRows(rawRows);
    questsTableSortColumn = null;
    questsTableSortDirection = 'asc';
    questsTableExpanded = new Set();
    questsTableLocationFilter = '';
    questsTableTypeFilter = new Set(['main', 'master', 'side']);

    questsTableLocationIndexMap = new Map();
    questsTableLocationInfoMap = new Map();
    buildQuestsTableLocationOrder(selectedMap).forEach((entry, i) => {
        if (!questsTableLocationIndexMap.has(entry.filename)) {
            questsTableLocationIndexMap.set(entry.filename, i);
            questsTableLocationInfoMap.set(entry.filename, entry);
        }
    });

    if (questsTableGroups.length === 0) {
        questsTableContent.innerHTML = '<div class="quest-panel-empty">No quests found.</div>';
        return;
    }

    const questTypePillsHtml = [
        { type: 'main', emoji: '✨', label: 'Main Quest' },
        { type: 'master', emoji: '🎓', label: 'Master Quest' },
        { type: 'side', emoji: '📜', label: 'Side Quest' }
    ].map(t => `<span class="stats-legend-icon active" data-quest-type="${t.type}" title="${t.label}"><span class="stats-legend-icon-emoji">${t.emoji}</span><span class="stats-legend-icon-label">${t.label}</span></span>`).join('');

    questsTableContent.innerHTML = `
        <div class="stats-summary quests-table-filters">
            <div class="stats-summary-group">
                <span class="stats-summary-label">Location</span>
                <select id="quests-table-location-filter" class="quests-table-location-select"></select>
            </div>
            <div class="stats-summary-group stats-legend-group">
                <span class="stats-summary-label">Quest Type</span>
                <div class="stats-legend-icons quest-type-filter-icons">${questTypePillsHtml}</div>
            </div>
        </div>
        <table class="stats-table">
            <thead><tr>
                <th data-sort-key="quest">Quest Name</th>
                <th data-sort-key="part">Part</th>
                <th data-sort-key="connected">Label Name</th>
                <th data-sort-key="location">Map Location</th>
            </tr></thead>
            <tbody id="quests-table-body"></tbody>
        </table>
    `;

    populateQuestsTableLocationFilterOptions(selectedMap);

    questsTableContent.querySelectorAll('th[data-sort-key]').forEach(th => {
        th.addEventListener('click', () => {
            const key = th.getAttribute('data-sort-key');
            if (questsTableSortColumn === key) {
                questsTableSortDirection = questsTableSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                questsTableSortColumn = key;
                questsTableSortDirection = 'asc';
            }
            renderQuestsTableBody();
        });
    });

    const locationFilterSelect = document.getElementById('quests-table-location-filter');
    if (locationFilterSelect) {
        locationFilterSelect.addEventListener('change', () => {
            questsTableLocationFilter = locationFilterSelect.value;
            renderQuestsTableBody();
        });
    }

    questsTableContent.querySelectorAll('.quest-type-filter-icons .stats-legend-icon').forEach(el => {
        el.addEventListener('click', () => {
            const type = el.getAttribute('data-quest-type');
            if (questsTableTypeFilter.has(type)) {
                questsTableTypeFilter.delete(type);
            } else {
                questsTableTypeFilter.add(type);
            }
            el.classList.toggle('active');
            renderQuestsTableBody();
        });
    });

    renderQuestsTableBody();
}

function dedupeMapsByFilename(maps) {
    const seen = new Set();
    return maps.filter(m => {
        if (seen.has(m.filename)) return false;
        seen.add(m.filename);
        return true;
    });
}

function getStatisticsSourceMaps(selectedMap) {
    if (selectedMap.modGroup === 'World Map') {
        // The Arcanum overworld itself: aggregate every Cities/Quest locations/Other locations
        // map plus their submaps, rather than the World Map's own (mostly waypoint) labels
        const groups = new Set(['Cities', 'Quest locations', 'Other locations']);
        const topMaps = ArcanumMapData.filter(m => groups.has(m.modGroup));
        const topFilenames = new Set(topMaps.map(m => m.filename));
        const subMaps = ArcanumMapData.filter(m => m.parentFilename && topFilenames.has(m.parentFilename));
        // A map can legitimately be both "top-level" (its own modGroup) and someone else's
        // submap (e.g. Hall of Records is filed under Quest locations but parented to Tarant) -
        // dedupe so its labels aren't counted twice.
        return dedupeMapsByFilename([...topMaps, ...subMaps]);
    }
    // Normal case: this map plus its own direct submaps
    const subMaps = ArcanumMapData.filter(m => m.parentFilename === selectedMap.filename);
    return dedupeMapsByFilename([selectedMap, ...subMaps]);
}

function buildStatisticsForCurrentMap() {
    const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    if (!selectedMap) return { entries: [], npcCount: 0, shopCount: 0, followerCount: 0, raceCounts: {}, sexCounts: {} };

    const sourceMaps = getStatisticsSourceMaps(selectedMap);

    const entries = [];
    sourceMaps.forEach(map => {
        if (!map.labels) return;
        map.labels.forEach(label => {
            const cats = Array.isArray(label.category) ? label.category : (label.category ? [label.category] : []);
            if (cats.includes('npc') || cats.includes('shop') || cats.includes('followers')) {
                entries.push({ label, mapDisplayName: map.displayName, mapFilename: map.filename });
            }
        });
    });

    let npcCount = 0, shopCount = 0, followerCount = 0;
    const raceCounts = {};
    const sexCounts = {};

    entries.forEach(({ label }) => {
        const cats = Array.isArray(label.category) ? label.category : (label.category ? [label.category] : []);
        if (cats.includes('npc')) npcCount++;
        if (cats.includes('shop')) shopCount++;
        if (cats.includes('followers')) followerCount++;

        if (label.race) {
            raceCounts[label.race] = (raceCounts[label.race] || 0) + 1;
        }
        if (label.sex) {
            const key = String(label.sex).trim().toLowerCase();
            const normalized = (key === 'm' || key === 'male') ? 'Male' : (key === 'f' || key === 'female') ? 'Female' : label.sex;
            sexCounts[normalized] = (sexCounts[normalized] || 0) + 1;
        }
    });

    return { entries, npcCount, shopCount, followerCount, raceCounts, sexCounts };
}

let statsEntries = [];
let statsSortColumn = null;
let statsSortDirection = 'asc';
let statsCategoryFilter = new Set(); // categories currently selected in the icon legend (OR filter); empty = show all

function getStatsEntryCategories(entry) {
    return getOrderedCategories(entry.label.category);
}

// Which category icons actually appear among the current entries, in CATEGORY_EMOJI's order.
function getStatsPresentCategories(entries) {
    const present = new Set();
    entries.forEach(entry => {
        getStatsEntryCategories(entry).forEach(c => { if (CATEGORY_EMOJI[c]) present.add(c); });
    });
    return Object.keys(CATEGORY_EMOJI).filter(c => present.has(c));
}

function getStatsSortValue(entry, key) {
    const { label, mapDisplayName } = entry;
    switch (key) {
        case 'name': return (label.text || '').toLowerCase();
        case 'sex': return (label.sex || '').toLowerCase();
        case 'race': return (label.race || '').toLowerCase();
        case 'level': {
            if (typeof label.level === 'number') return label.level;
            const parsed = parseFloat(label.level);
            return isNaN(parsed) ? -Infinity : parsed;
        }
        case 'location': return (mapDisplayName || '').toLowerCase();
        default: return '';
    }
}

function renderStatsTableBody() {
    let sortedEntries = statsEntries.filter(entry => {
        if (statsCategoryFilter.size === 0) return true;
        return getStatsEntryCategories(entry).some(c => statsCategoryFilter.has(c));
    });
    if (statsSortColumn) {
        sortedEntries.sort((a, b) => {
            const va = getStatsSortValue(a, statsSortColumn);
            const vb = getStatsSortValue(b, statsSortColumn);
            if (va < vb) return statsSortDirection === 'asc' ? -1 : 1;
            if (va > vb) return statsSortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const rows = sortedEntries.map(entry => {
        const { label, mapDisplayName } = entry;
        const cats = getStatsEntryCategories(entry);
        const iconsHtml = cats.map(c => CATEGORY_EMOJI[c] || '').filter(Boolean).join('');
        const sexDisplay = label.sex ? (SEX_EMOJI[String(label.sex).trim().toLowerCase()] || label.sex) : '&mdash;';
        const raceDisplay = label.race || '&mdash;';
        const levelDisplay = (label.level !== undefined && label.level !== null && label.level !== '') ? label.level : '&mdash;';
        return `<tr data-stat-entry-index="${statsEntries.indexOf(entry)}">
            <td>${iconsHtml ? `<span class="stats-row-icons">${iconsHtml}</span>` : ''}${label.text}</td>
            <td>${sexDisplay}</td>
            <td>${raceDisplay}</td>
            <td>${levelDisplay}</td>
            <td>${mapDisplayName}</td>
        </tr>`;
    }).join('');

    const tbody = document.getElementById('stats-table-body');
    tbody.innerHTML = rows || `<tr class="stats-empty-row"><td colspan="5">No entries match the selected filter.</td></tr>`;

    statisticsContent.querySelectorAll('th[data-sort-key]').forEach(th => {
        th.classList.toggle('sorted-asc', th.getAttribute('data-sort-key') === statsSortColumn && statsSortDirection === 'asc');
        th.classList.toggle('sorted-desc', th.getAttribute('data-sort-key') === statsSortColumn && statsSortDirection === 'desc');
    });

    tbody.querySelectorAll('tr[data-stat-entry-index]').forEach(tr => {
        tr.addEventListener('click', () => {
            const idx = parseInt(tr.getAttribute('data-stat-entry-index'), 10);
            const entry = statsEntries[idx];
            statisticsOverlay.classList.remove('open');
            if (entry.mapFilename === currentMapFilename) {
                jumpToLabelOnCurrentMap(entry.label);
            } else {
                travelToMapByFilename(entry.mapDisplayName, { x: entry.label.x, y: entry.label.y, zoom: 1.5 });
            }
        });
    });
}

function renderStatisticsPanel() {
    const selectedMap = ArcanumMapData.find(m => m.filename === currentMapFilename);
    statisticsMapName.textContent = selectedMap ? (currentDisplayName || selectedMap.displayName) : '';

    const { entries, npcCount, shopCount, followerCount, raceCounts, sexCounts } = buildStatisticsForCurrentMap();
    statsEntries = entries;
    statsSortColumn = null;
    statsSortDirection = 'asc';
    statsCategoryFilter = new Set();

    if (entries.length === 0) {
        statisticsContent.innerHTML = '<div class="quest-panel-empty">No NPCs, Shops, or Followers found here.</div>';
        return;
    }

    const raceItems = Object.entries(raceCounts).sort((a, b) => b[1] - a[1]).map(([race, count]) => `<li>${race}: ${count}</li>`).join('');
    const sexItems = Object.entries(sexCounts).map(([sex, count]) => `<li>${sex}: ${count}</li>`).join('');

    // Icon legend: only the category icons actually present here. Clicking one (or several)
    // filters the table below to entries carrying any of the selected categories.
    const legendCategories = getStatsPresentCategories(entries);
    const legendHtml = legendCategories.length ? `
        <div class="stats-summary-group stats-legend-group">
            <span class="stats-summary-label">Legend</span>
            <div class="stats-legend-icons">
                ${legendCategories.map(c => `<span class="stats-legend-icon" data-category="${c}" title="${CATEGORY_LABELS[c] || c}"><span class="stats-legend-icon-emoji">${CATEGORY_EMOJI[c]}</span><span class="stats-legend-icon-label">${CATEGORY_LABELS[c] || c}</span></span>`).join('')}
            </div>
        </div>` : '';

    statisticsContent.innerHTML = `
        <div class="stats-summary">
            <div class="stats-summary-count"><strong>${npcCount}</strong>NPC${npcCount !== 1 ? 's' : ''}</div>
            <div class="stats-summary-count"><strong>${shopCount}</strong>Shop${shopCount !== 1 ? 's' : ''}</div>
            <div class="stats-summary-count"><strong>${followerCount}</strong>Follower${followerCount !== 1 ? 's' : ''}</div>
            ${raceItems ? `<div class="stats-summary-group"><span class="stats-summary-label">By Race</span><ul>${raceItems}</ul></div>` : ''}
            ${sexItems ? `<div class="stats-summary-group"><span class="stats-summary-label">By Sex</span><ul>${sexItems}</ul></div>` : ''}
            ${legendHtml}
        </div>
        <table class="stats-table">
            <thead><tr>
                <th data-sort-key="name">Name</th>
                <th data-sort-key="sex">Sex</th>
                <th data-sort-key="race">Race</th>
                <th data-sort-key="level">Level</th>
                <th data-sort-key="location">Location</th>
            </tr></thead>
            <tbody id="stats-table-body"></tbody>
        </table>
    `;

    statisticsContent.querySelectorAll('th[data-sort-key]').forEach(th => {
        th.addEventListener('click', () => {
            const key = th.getAttribute('data-sort-key');
            if (statsSortColumn === key) {
                statsSortDirection = statsSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                statsSortColumn = key;
                statsSortDirection = 'asc';
            }
            renderStatsTableBody();
        });
    });

    statisticsContent.querySelectorAll('.stats-legend-icon').forEach(el => {
        el.addEventListener('click', () => {
            const category = el.getAttribute('data-category');
            if (statsCategoryFilter.has(category)) {
                statsCategoryFilter.delete(category);
            } else {
                statsCategoryFilter.add(category);
            }
            el.classList.toggle('active');
            renderStatsTableBody();
        });
    });

    renderStatsTableBody();
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

function attachLabelDragHandlers(labelData, elements, coordMode, coordKeys) {
    const keys = coordKeys || { xKey: "x", yKey: "y" };
    elements.forEach(el => {
        el.addEventListener('mousedown', (e) => {
            if (!isCreatorMode) return;
            e.stopPropagation();
            isDraggingLabel = true;
            draggedLabelData = labelData;
            draggedLabelElements = elements;
            draggedLabelCoordMode = coordMode;
            draggedLabelCoordKeys = keys;
            dragLastScreenX = e.clientX;
            dragLastScreenY = e.clientY;
            // Dragging a label also opens/refreshes it in the editor, same as clicking it,
            // so its fields are there to tweak as soon as you start moving it.
            startEditingLabel(labelData);
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

        const statsRowHtml = buildLabelStatsRowHtml(label);
        let portraitSrc = label.portrait;
        if (popupCats.includes('chest') && label.text === 'Junk Pile') portraitSrc = 'Textures/junkpile.png';
        if (!portraitSrc && popupCats.includes('altar')) portraitSrc = 'Textures/altar.png';
        if (!portraitSrc && popupCats.includes('chest')) portraitSrc = 'Textures/chest.png';
        if (!portraitSrc && label.race) portraitSrc = `Textures/${label.race}.png`;
        const portraitHtml = portraitSrc ? `<img class="popup-portrait" src="${portraitSrc}" alt="" onerror="this.style.display='none'">` : '';
        const godTypeHtml = label.godType ? `<div class="altar-god-type">${label.godType}</div>` : '';
        let chestStatusHtml = '';
        if (label.chestState === 'locked') {
            chestStatusHtml = label.chestKey
                ? `<div class="chest-status-row">Opens with <span class="chest-key-link" data-chest-key="${label.chestKey}">${label.chestKey}</span></div>`
                : `<div class="chest-status-row">Locked</div>`;
        }
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

        const inventoryHtml = buildItemListHtml(label.inventory, 'Inventory', 'inventory');
        const offeringHtml = buildItemListHtml(label.offering, 'Offering', 'offering');
        const blessingHtml = buildItemListHtml(label.blessing, 'Blessing', 'blessing');

        let inscriptionHtml = "";
        if (label.inscription) {
            inscriptionHtml = `<div class="npc-inventory-block"><span class="inventory-item-clickable altar-inscription-label">📜 Altar Inscription</span></div>`;
        }
        
        let travelButtonHtml = "";
        if (label.targetMapFilename) {
            const viewData = (typeof label.targetX === 'number') ? `data-x="${label.targetX}" data-y="${label.targetY}" data-z="${label.targetZoom || 1}"` : "";
            travelButtonHtml = `<button class="travel-link-btn" data-target="${label.targetMapFilename}" ${viewData}>🧭 Travel to Location</button>`;
        }

        let linkedButtonsHtml = "";
        if (Array.isArray(label.linkedLabels) && label.linkedLabels.length > 0) {
            const blocks = label.linkedLabels.map((entry, i) => {
                let title, icon, titleColor, descHtml, targetText, partValue, questType;

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
                    targetText = entry;
                    partValue = found ? found.label.part : null;
                    questType = found ? found.label.questType : null;
                } else {
                    // Inline form: { questName, questDescription, target, category?, part?, questType? } - the quest's own
                    // name/description live here directly, separate from wherever "target" actually is
                    const cat = entry.category || 'quest';
                    title = entry.questName || entry.target || 'Quest';
                    icon = CATEGORY_EMOJI[cat] || '📜';
                    titleColor = CATEGORY_COLORS[cat] || '#ffaa00';
                    descHtml = entry.questDescription ? `<p class="linked-quest-desc">${entry.questDescription}</p>` : '';
                    targetText = entry.target || null;
                    partValue = entry.part || null;
                    questType = entry.questType || null;
                }

                // Main/master quests get a distinct title color on top of their marker,
                // so they stand out from an ordinary side quest at a glance.
                if (QUEST_TYPE_COLOR[questType]) titleColor = QUEST_TYPE_COLOR[questType];

                // Only clickable when there's actually somewhere to send you
                const blockClass = targetText ? 'linked-quest-block clickable-quest-block' : 'linked-quest-block';
                const dataAttr = targetText ? ` data-link-index="${i}"` : '';

                return `<div class="${blockClass}"${dataAttr}>
                    <div class="linked-quest-title" style="color:${titleColor};">${icon} ${title}${buildQuestTypeMarker(questType)}${buildQuestPartBadge(partValue)}</div>
                    ${descHtml}
                </div>`;
            }).join('');
            linkedButtonsHtml = blocks;
        }

        const hasPopupBody = [
            chestStatusHtml,
            shopInfoHtml,
            inscriptionHtml,
            inventoryHtml,
            offeringHtml,
            blessingHtml,
            descHtmlMain,
            travelButtonHtml,
            linkedButtonsHtml
        ].some(Boolean);
        const headerClass = hasPopupBody ? 'popup-header' : 'popup-header popup-header-only';
        const masterHtml = buildLabelMasterHtml(label);
        const followerTypeHtml = buildLabelFollowerTypeHtml(label);
        // "has-master" just zeroes the h4's bottom margin so it sits flush against whichever
        // italic subtitle line (Master or Follower Type) follows it - reused here rather than
        // adding a near-identical class, since the two lines never both need that margin removed.
        const masterHeaderClass = (label.master || label.followerType) ? ' has-master' : '';
        const headerHtml = `<div class="${headerClass}${masterHeaderClass}">${portraitHtml}<div class="popup-header-text"><h4>${label.text}${buildQuestTypeMarker(label.questType)}${buildQuestPartBadge(label.part)}</h4>${masterHtml}${followerTypeHtml}${godTypeHtml}${chestStatusHtml}${statsRowHtml}</div></div>`;
        
        popup.innerHTML = `<span class="close-btn">&times;</span>${headerHtml}${shopInfoHtml}${inscriptionHtml}${inventoryHtml}${offeringHtml}${blessingHtml}${descHtmlMain}${travelButtonHtml}${linkedButtonsHtml}`;
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

        if (Array.isArray(label.linkedLabels)) {
            popup.querySelectorAll('.clickable-quest-block').forEach(blockEl => {
                blockEl.addEventListener('click', (el) => {
                    el.stopPropagation();
                    const i = parseInt(blockEl.getAttribute('data-link-index'), 10);
                    const entry = label.linkedLabels[i];
                    const targetText = (typeof entry === 'string') ? entry : entry.target;
                    if (targetText) travelToLinkedLabel(targetText);
                });
            });
        }

        popup.querySelectorAll('.inventory-item-clickable[data-item-field]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const fieldName = el.getAttribute('data-item-field');
                const idx = parseInt(el.getAttribute('data-item-index'), 10);
                const items = label[fieldName];
                const rawItem = items && items[idx];
                const itemName = typeof rawItem === 'string' ? rawItem : rawItem?.name;
                const item = typeof rawItem === 'string'
                    ? ItemDataByName.get(itemName)
                    : { ...(ItemDataByName.get(itemName) || {}), ...rawItem };
                if (item && item.image) showItemImage(item.image);
            });
        });

        if (label.inscription) {
            const inscriptionEl = popup.querySelector('.altar-inscription-label');
            if (inscriptionEl) {
                inscriptionEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showItemImage(label.inscription);
                });
            }
        }

        if (label.chestKey) {
            const chestKeyEl = popup.querySelector('.chest-key-link');
            if (chestKeyEl) {
                chestKeyEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                    travelToLabelCarryingKey(label.chestKey);
                });
            }
        }

        container.appendChild(popup);
    };

    if (currentMapType === "overworld") {
        const renderX = (img.clientWidth / 2000) * (2000 - label.x);
        const renderY = (img.clientHeight / 2000) * label.y;

        // Optional independent placement for the text, separate from the point (dot). Falls
        // back to the dot's position when the label has no textX/textY set.
        const hasTextPosition = typeof label.textX === 'number' && typeof label.textY === 'number';
        const textRenderX = hasTextPosition ? (img.clientWidth / 2000) * (2000 - label.textX) : renderX;
        const textRenderY = hasTextPosition ? (img.clientHeight / 2000) * label.textY : renderY;

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
                startEditingLabel(label);
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
        dot.setAttribute('data-label-text', label.text);
        dot.addEventListener('mouseenter', showHoverTooltip);
        dot.addEventListener('mouseleave', hideHoverTooltip);
        dot.addEventListener('click', handleWorldLabelClick);
        container.appendChild(dot);

        const txt = document.createElement('div');
        txt.className = 'arcanum-world-text';
        if (isPending) txt.classList.add('pending-label');
        txt.innerHTML = `<span>${label.text}</span>`;
        txt.style.left = `${textRenderX}px`; txt.style.top = `${textRenderY}px`;
        txt.setAttribute('data-label-text', label.text);
        txt.addEventListener('mouseenter', showHoverTooltip);
        txt.addEventListener('mouseleave', hideHoverTooltip);
        txt.addEventListener('click', handleWorldLabelClick);

        container.appendChild(txt);
        // The dot is dragged against x/y (the point); the text is dragged against its own
        // textX/textY, so the two can be positioned independently.
        attachLabelDragHandlers(label, [dot], "overworld", { xKey: "x", yKey: "y" });
        attachLabelDragHandlers(label, [txt], "overworld", { xKey: "textX", yKey: "textY" });
    } else {
        const labelElement = document.createElement('div');
        labelElement.className = 'map-label';
        if (isPending) labelElement.classList.add('pending-label');
        labelElement.style.left = `${label.x}px`;
        labelElement.style.top = `${label.y}px`;
        
        const cats = getOrderedCategories(label.category);
        const dataCatString = cats.length ? cats.join(' ') : 'uncategorized';
        labelElement.setAttribute('data-category', dataCatString);
        labelElement.setAttribute('data-label-text', label.text);

        const guardedClick = (handler) => (e) => {
            e.stopPropagation();
            if (suppressNextLabelClick) { suppressNextLabelClick = false; return; }
            if (isCreatorMode) { startEditingLabel(label); return; }
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

function buildLabelCodeLine(labelData) {
    const parts = [
        `x: ${labelData.x}`,
        `y: ${labelData.y}`,
        `text: "${labelData.text}"`
    ];
    if (typeof labelData.textX === 'number' && !isNaN(labelData.textX)) parts.push(`textX: ${labelData.textX}`);
    if (typeof labelData.textY === 'number' && !isNaN(labelData.textY)) parts.push(`textY: ${labelData.textY}`);
    if (labelData.description) parts.push(`description: "${labelData.description}"`);
    if (labelData.master) parts.push(`master: "${labelData.master}"`);
    if (labelData.followerType) parts.push(`followerType: "${labelData.followerType}"`);
    if (labelData.category) {
        if (Array.isArray(labelData.category)) {
            parts.push(`category: [${labelData.category.map(c => `"${c}"`).join(', ')}]`);
        } else {
            parts.push(`category: "${labelData.category}"`);
        }
    }
    if (labelData.shopType) parts.push(`shopType: "${labelData.shopType}"`);
    if (typeof labelData.shopMarkup === 'number' && !isNaN(labelData.shopMarkup)) parts.push(`shopMarkup: ${labelData.shopMarkup}`);
    if (labelData.portrait) parts.push(`portrait: "${labelData.portrait}"`);
    if (labelData.level !== undefined && labelData.level !== null && labelData.level !== '') {
        parts.push(typeof labelData.level === 'number' ? `level: ${labelData.level}` : `level: "${labelData.level}"`);
    }
    if (labelData.sex) parts.push(`sex: "${labelData.sex}"`);
    if (labelData.race) parts.push(`race: "${labelData.race}"`);
    if (labelData.age !== undefined && labelData.age !== null && labelData.age !== '') {
        parts.push(typeof labelData.age === 'number' ? `age: ${labelData.age}` : `age: "${labelData.age}"`);
    }
    if (labelData.godType) parts.push(`godType: "${labelData.godType}"`);
    if (labelData.inscription) parts.push(`inscription: "${labelData.inscription}"`);
    if (labelData.chestState) parts.push(`chestState: "${labelData.chestState}"`);
    if (labelData.chestKey) parts.push(`chestKey: "${labelData.chestKey}"`);
    if (labelData.part !== undefined && labelData.part !== null && labelData.part !== '') {
        parts.push(typeof labelData.part === 'number' ? `part: ${labelData.part}` : `part: "${labelData.part}"`);
    }
    const serializeItemList = (items) => items.map(item => {
        return `"${typeof item === 'string' ? item : item.name}"`;
    }).join(', ');
    if (Array.isArray(labelData.inventory) && labelData.inventory.length > 0) {
        parts.push(`inventory: [${serializeItemList(labelData.inventory)}]`);
    }
    if (Array.isArray(labelData.offering) && labelData.offering.length > 0) {
        parts.push(`offering: [${serializeItemList(labelData.offering)}]`);
    }
    if (Array.isArray(labelData.blessing) && labelData.blessing.length > 0) {
        parts.push(`blessing: [${serializeItemList(labelData.blessing)}]`);
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
            if (entry.questType) objParts.push(`questType: "${entry.questType}"`);
            if (entry.part !== undefined && entry.part !== null && entry.part !== '') {
                objParts.push(typeof entry.part === 'number' ? `part: ${entry.part}` : `part: "${entry.part}"`);
            }
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
    stopEditingLabel();
}

function startEditingLabel(label) {
    editingLabel = label;
    editingLabelDomEls = Array.from(container.querySelectorAll('[data-label-text]'))
        .filter(el => el.getAttribute('data-label-text') === label.text);

    newLabelText.value = label.text || '';
    newLabelDesc.value = label.description || '';
    setDescriptionFieldVisible(Boolean(label.description));
    newLabelMaster.value = label.master || '';
    newLabelFollowerType.value = label.followerType || '';
    const sexKey = label.sex ? String(label.sex).trim().toLowerCase() : '';
    newLabelSex.value = (sexKey === 'm') ? 'male' : (sexKey === 'f') ? 'female' : sexKey;
    newLabelRace.value = label.race || '';
    newLabelLevel.value = (typeof label.level === 'number') ? label.level : (label.level || '');

    const stringLinks = Array.isArray(label.linkedLabels) ? label.linkedLabels.filter(e => typeof e === 'string') : [];
    newLabelLinks.value = stringLinks.join(', ');

    // Quest category stores its data as a single structured linkedLabels object rather
    // than the plain string links above - pull the first one back into the Quest fields.
    const questEntry = (Array.isArray(label.linkedLabels) ? label.linkedLabels.find(e => e && typeof e === 'object') : null) || {};
    newLabelQuestName.value = questEntry.questName || '';
    newLabelQuestDesc.value = questEntry.questDescription || '';
    newLabelQuestTarget.value = questEntry.target || '';
    newLabelQuestPart.value = (typeof questEntry.part === 'number') ? questEntry.part : (questEntry.part === 'reward' ? 'reward' : '');

    if (currentMapType !== "overworld") {
        const cats = Array.isArray(label.category) ? label.category : (label.category ? [label.category] : []);
        newLabelCategoryChecks.forEach(cb => { cb.checked = cats.includes(cb.value); });
        syncCategoryPillActiveStates();

        waypointFields.style.display = cats.includes('waypoint') ? 'flex' : 'none';
        masterFields.style.display = cats.includes('master') ? 'flex' : 'none';
        followerFields.style.display = cats.includes('followers') ? 'flex' : 'none';
        statsFields.style.display = categoriesUseStatsFields(cats) ? 'flex' : 'none';
        newLabelTargetMap.value = label.targetMapFilename || '';
        populateTargetWaypointOptions();
        newLabelTargetX.value = (typeof label.targetX === 'number') ? label.targetX : '';
        newLabelTargetY.value = (typeof label.targetY === 'number') ? label.targetY : '';

        shopFields.style.display = cats.includes('shop') ? 'flex' : 'none';
        newLabelShopType.value = label.shopType || '';
        newLabelShopMarkup.value = (typeof label.shopMarkup === 'number') ? label.shopMarkup : '';

        questFields.style.display = cats.includes('quest') ? 'flex' : 'none';
        genericLinksField.style.display = cats.includes('quest') ? 'none' : 'flex';

        chestFields.style.display = cats.includes('chest') ? 'flex' : 'none';
        newLabelChestState.value = label.chestState || '';
        if (cats.includes('chest')) populateChestKeyOptions();
        newLabelChestKey.value = label.chestKey || '';
        updateChestKeyRowVisibility();
    }

    addToPreviewBtn.textContent = '💾 Save Edits';
    cancelEditBtn.style.display = 'block';
    editingIndicator.style.display = 'block';
    editingLabelName.textContent = label.text;
}

function stopEditingLabel() {
    if (!editingLabel) return;
    editingLabel = null;
    editingLabelDomEls = [];
    addToPreviewBtn.textContent = '+ Add Label';
    cancelEditBtn.style.display = 'none';
    editingIndicator.style.display = 'none';
    newLabelText.value = '';
    newLabelDesc.value = '';
    setDescriptionFieldVisible(false);
    newLabelMaster.value = '';
    newLabelFollowerType.value = '';
    newLabelLinks.value = '';
    newLabelQuestName.value = '';
    newLabelQuestDesc.value = '';
    newLabelQuestTarget.value = '';
    newLabelQuestPart.value = '';
    newLabelTargetX.value = '';
    newLabelTargetY.value = '';
    if (newLabelTargetWaypoint) newLabelTargetWaypoint.value = '';
    newLabelShopMarkup.value = '';
    newLabelChestState.value = '';
    newLabelChestKey.value = '';
    newLabelSex.value = '';
    newLabelRace.value = '';
    newLabelLevel.value = '';
    updateChestKeyRowVisibility();
    populateQuestNameOptions();
}

// Returns the current map's full pixel dimensions, regardless of whether it's a single
// image (img.clientWidth/Height) or a chunked map (its declared total width/height).
function getMapWidth() {
    return currentMapChunked ? currentMapTotalWidth : img.clientWidth;
}
function getMapHeight() {
    return currentMapChunked ? currentMapTotalHeight : img.clientHeight;
}

function resetView(viewOverride) {
    if (viewOverride && typeof viewOverride.x === 'number' && typeof viewOverride.y === 'number') {
        scale = viewOverride.zoom || 1;
        posX = (viewport.clientWidth / 2) - (viewOverride.x * scale);
        posY = (viewport.clientHeight / 2) - (viewOverride.y * scale);
    } else {
        scale = 1;
        posX = (viewport.clientWidth - getMapWidth()) / 2;
        posY = (viewport.clientHeight / 2) - (getMapHeight() / 2);
    }
    updateTransform();
}


// Part 6

function updateTransform() {
    container.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
    if (hudValZoom) hudValZoom.textContent = `${Math.round(scale * 100)}%`;
    saveViewerState();
    scheduleChunkUpdate();
}

// --- Chunked map loading -------------------------------------------------
// Splits a big map into <chunkSize>x<chunkSize> tiles named "<chunkPrefix>_<pixelX>_<pixelY>.jpg"
// (falling back to .png). Only tiles overlapping the current viewport (plus a small margin)
// are ever created, and only within the real extent of the tile grid - see chunk bounds
// discovery below, which figures out where the grid actually ends before any tile is requested.

function clearMapChunks() {
    chunkContainer.innerHTML = '';
    loadedChunkKeys = new Set();
}

let chunkBoundsReady = false;
let discoveredMaxCol = -1;
let discoveredMaxRow = -1;
let chunkLoadGeneration = 0;

// Resolves true/false for whether a tile exists at this base path (tries .jpg then .png).
function chunkExistsAt(basePath) {
    return new Promise(resolve => {
        const probe = new Image();
        probe.onload = () => resolve(true);
        probe.onerror = () => {
            if (probe.dataset.triedPng) { resolve(false); return; }
            probe.dataset.triedPng = 'true';
            probe.src = `${basePath}.png`;
        };
        probe.src = `${basePath}.jpg`;
    });
}

// Binary search for the highest index (0..maxCandidate) whose tile exists, given index 0 exists.
async function probeMaxChunkIndex(basePathForIndex, maxCandidate) {
    if (maxCandidate <= 0) return maxCandidate;
    if (!(await chunkExistsAt(basePathForIndex(maxCandidate)))) {
        let lo = 0, hi = maxCandidate;
        while (lo < hi) {
            const mid = Math.ceil((lo + hi) / 2);
            if (await chunkExistsAt(basePathForIndex(mid))) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }
    return maxCandidate; // the declared edge tile exists - trust the declared bound
}

// Finds the real last existing column (probing along row 0) and last existing row (probing
// along column 0) before any viewport-driven tile loading starts, so we never request a tile
// we already know is missing.
async function discoverChunkBounds(selectedMap) {
    const generation = ++chunkLoadGeneration;
    chunkBoundsReady = false;

    const declaredMaxCol = Math.ceil(currentMapTotalWidth / currentChunkSize) - 1;
    const declaredMaxRow = Math.ceil(currentMapTotalHeight / currentChunkSize) - 1;

    const [maxCol, maxRow] = await Promise.all([
        probeMaxChunkIndex(i => `${currentChunkFolder}/${currentChunkPrefix}_${i * currentChunkSize}_0`, declaredMaxCol),
        probeMaxChunkIndex(i => `${currentChunkFolder}/${currentChunkPrefix}_0_${i * currentChunkSize}`, declaredMaxRow)
    ]);

    if (generation !== chunkLoadGeneration) return; // user switched maps while we were probing

    discoveredMaxCol = maxCol;
    discoveredMaxRow = maxRow;
    chunkBoundsReady = true;
    loadVisibleChunks();
}

function setupChunkedMap(selectedMap) {
    clearMapChunks();
    currentMapTotalWidth = selectedMap.width;
    currentMapTotalHeight = selectedMap.height;
    currentChunkSize = selectedMap.chunkSize || 500;
    currentChunkFolder = selectedMap.filename.replace(/\/+$/, '');
    currentChunkPrefix = selectedMap.chunkPrefix || currentChunkFolder.split('/').pop();
    chunkContainer.style.width = `${currentMapTotalWidth}px`;
    chunkContainer.style.height = `${currentMapTotalHeight}px`;
    chunkContainer.style.display = 'block';
    discoverChunkBounds(selectedMap);
}

// How far (in unscaled map pixels) each tile should overshoot into its neighbor's space.
// Sized so the overlap is always ~2 real screen pixels regardless of zoom level - a fixed
// unscaled overlap (e.g. always 1px) shrinks to a fraction of a device pixel once zoomed out
// far enough, which is exactly when the rounding-gap seam becomes visible.
function getChunkOverlap() {
    return Math.min(currentChunkSize / 4, Math.max(1, Math.ceil(2 / scale)));
}

function applyChunkOverlap(tile) {
    const tw = parseFloat(tile.dataset.tileWidth);
    const th = parseFloat(tile.dataset.tileHeight);
    const overlap = getChunkOverlap();
    tile.style.width = `${tw + overlap}px`;
    tile.style.height = `${th + overlap}px`;
}

let lastOverlapScale = null;
function refreshChunkOverlaps() {
    if (!currentMapChunked || lastOverlapScale === scale) return;
    lastOverlapScale = scale;
    chunkContainer.querySelectorAll('.map-chunk-tile').forEach(applyChunkOverlap);
}

function loadChunk(col, row) {
    if (!chunkBoundsReady) return; // don't request anything until we know the grid's real extent
    if (col < 0 || row < 0 || col > discoveredMaxCol || row > discoveredMaxRow) return;

    const key = `${col}_${row}`;
    if (loadedChunkKeys.has(key)) return;
    loadedChunkKeys.add(key);

    const tileWidth = Math.min(currentChunkSize, currentMapTotalWidth - col * currentChunkSize);
    const tileHeight = Math.min(currentChunkSize, currentMapTotalHeight - row * currentChunkSize);

    const tile = document.createElement('img');
    tile.className = 'map-chunk-tile';
    tile.dataset.tileWidth = tileWidth;
    tile.dataset.tileHeight = tileHeight;
    tile.style.position = 'absolute';
    tile.style.left = `${col * currentChunkSize}px`;
    tile.style.top = `${row * currentChunkSize}px`;
    applyChunkOverlap(tile);

    const basePath = `${currentChunkFolder}/${currentChunkPrefix}_${col * currentChunkSize}_${row * currentChunkSize}`;
    tile.onerror = () => {
        if (tile.dataset.triedPng) {
            // Shouldn't normally happen since discoverChunkBounds already checked the grid's
            // real extent, but a sparse/irregular map could still be missing an interior tile -
            // remove it rather than leave a broken-image icon, and don't retry.
            tile.remove();
            return;
        }
        tile.dataset.triedPng = 'true';
        tile.src = `${basePath}.png`;
    };
    tile.src = `${basePath}.jpg`;

    chunkContainer.appendChild(tile);
}

// The set of chunks strictly inside the viewport, plus a 1-chunk margin so panning/zooming
// doesn't show blank tiles for a frame before the next update fires.
function loadVisibleChunks() {
    if (!currentMapChunked || !chunkBoundsReady) return;
    const margin = 1;
    const viewLeft = (-posX) / scale;
    const viewTop = (-posY) / scale;
    const viewRight = viewLeft + viewport.clientWidth / scale;
    const viewBottom = viewTop + viewport.clientHeight / scale;

    const colStart = Math.floor(viewLeft / currentChunkSize) - margin;
    const colEnd = Math.floor(viewRight / currentChunkSize) + margin;
    const rowStart = Math.floor(viewTop / currentChunkSize) - margin;
    const rowEnd = Math.floor(viewBottom / currentChunkSize) + margin;

    for (let row = rowStart; row <= rowEnd; row++) {
        for (let col = colStart; col <= colEnd; col++) {
            loadChunk(col, row);
        }
    }
}

let chunkUpdateScheduled = false;
function scheduleChunkUpdate() {
    if (!currentMapChunked || chunkUpdateScheduled) return;
    chunkUpdateScheduled = true;
    requestAnimationFrame(() => {
        chunkUpdateScheduled = false;
        loadVisibleChunks();
        refreshChunkOverlaps();
    });
}

viewport.addEventListener('wheel', (e) => {
    if (!currentMapLoaded) return;
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

viewport.addEventListener('mousemove', (e) => {
    if (!currentMapChunked || !currentMapLoaded) return;
    const rect = container.getBoundingClientRect();
    const mapX = (e.clientX - rect.left) / scale;
    const mapY = (e.clientY - rect.top) / scale;
    if (mapX < 0 || mapY < 0 || mapX > currentMapTotalWidth || mapY > currentMapTotalHeight) return;
    const hoverCol = Math.floor(mapX / currentChunkSize);
    const hoverRow = Math.floor(mapY / currentChunkSize);
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            loadChunk(hoverCol + dc, hoverRow + dr);
        }
    }
});

viewport.addEventListener('mousedown', (e) => {
    if (!currentMapLoaded) return;
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
        const rect = container.getBoundingClientRect();
        const clickX = Math.round((e.clientX - rect.left) / scale);
        const clickY = Math.round((e.clientY - rect.top) / scale);
        if (clickX >= 0 && clickX <= getMapWidth() && clickY >= 0 && clickY <= getMapHeight()) {
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
        });

        const refEl = draggedLabelElements[0];
        const finalLeft = parseFloat(refEl.style.left);
        const finalTop = parseFloat(refEl.style.top);
        const { xKey, yKey } = draggedLabelCoordKeys;
        if (draggedLabelCoordMode === "overworld") {
            const normalizedX = (finalLeft / img.clientWidth) * 2000;
            const normalizedY = (finalTop / img.clientHeight) * 2000;
            draggedLabelData[xKey] = Math.round(2000 - normalizedX);
            draggedLabelData[yKey] = Math.round(normalizedY);
        } else {
            draggedLabelData[xKey] = Math.round(finalLeft);
            draggedLabelData[yKey] = Math.round(finalTop);
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
});

