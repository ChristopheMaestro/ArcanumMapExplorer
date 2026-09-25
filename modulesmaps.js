// Arcanum CE Restored - Map Database Manifest (Modules)
const ModulesMapData = [

/// TROIKA MODULES
// 1 - Buried Secrets (Worldmap)
// 2 - Death Match (Worldmap)
// 3 - Dusty Dunes (Broken)
// 4 - Hellgate (Worldmap + Cave)
// 5 - The Lost Dungeon of Souls (Worldmap)
// 6 - Time (Worldmap)
// 7 - Vormantown (Vormantown / Mansion / Ter'elon / Stone Heart Clan's Seat / SHC Level 1)
// 8 - Woodmir Race (Worldmap)

  {
    filename: "Modules/BuriedSecrets.jpg",
    displayName: "Buried Secrets",
    modGroup: "Buried Secrets",
    defaultView: { x: 821, y: 2353 }, // Good
    labels: []
  },
  {
    filename: "Modules/Deathmatch",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 6982,
    height: 5956,
    displayName: "Death Match",
    modGroup: "Death Match",
    defaultView: { x: 2533, y: 1872 }, // Good
    labels: []
  },
  {
    filename: "Modules/Hellgate.png",
    displayName: "Hellgate",
    modGroup: "Hellgate",
    defaultView: { x: 1201, y: 272 }, // Good
    background: "#000000",
    labels: [
      { x: 1972, y: 487, text: "Hellgate - Cave", category: "waypoint", targetMapFilename: "Hellgate - Cave", targetX: 2267, targetY: 1842 },
    ]
  },
  {
    filename: "Modules/Hellgate-Cave.png",
    displayName: "Hellgate - Cave",
    modGroup: "Hellgate",
    defaultView: { x: 2267, y: 1842 }, // Good
    background: "#000000",
    labels: [
      { x: 2267, y: 1842, text: "Hellgate", category: "waypoint", targetMapFilename: "Hellgate", targetX: 1972, targetY: 487 },
    ]
  },
  {
    filename: "Modules/LostDungeonOfSouls",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 6620,
    height: 4257,
    displayName: "Lost Dungeon of Souls",
    modGroup: "Lost Dungeon of Souls",
    defaultView: { x: 1450, y: 3575 }, // Good
    background: "#000000",
    labels: []
  },
  {
    filename: "Modules/Time",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 11087,
    height: 5535,
    displayName: "Time",
    modGroup: "Time",
    defaultView: { x: 2368, y: 1624 }, // Good
    labels: []
  },
  {
    filename: "Modules/Vormantown.jpg",
    displayName: "Vormantown",
    modGroup: "Vormantown",
    defaultView: { x: 895, y: 1422 }, // Good
    background: "url('Textures/Water.png') repeat",
    labels: [
      { x: 2884, y: 1268, text: "Vorman Mansion", category: "waypoint", targetMapFilename: "Vorman Mansion", targetX: 465, targetY: 645 },
      { x: 1317, y: 909, text: "Ter'elon", category: "waypoint", targetMapFilename: "Ter'elon", targetX: 585, targetY: 2469 },
      { x: 4362, y: 1478, text: "Stone Heart Clan's seat", category: "waypoint", targetMapFilename: "Stone Heart Clan's seat", targetX: 3438, targetY: 490 },
    ]
  },
  {
    filename: "Modules/Vormantown-Terelon",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 7704,
    height: 4243,
    displayName: "Ter'elon",
    modGroup: "Vormantown",
    defaultView: { x: 585, y: 2469 }, // Good
    background: "url('Textures/Water.png') repeat",
    labels: [
      { x: 585, y: 2469, text: "Vormantown", category: "waypoint", targetMapFilename: "Vormantown", targetX: 1317, targetY: 909 },
    ]
  },
  {
    filename: "Modules/Vormantown-Seat",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 4557,
    height: 2461,
    displayName: "Stone Heart Clan's seat",
    modGroup: "Vormantown",
    //defaultView: { x: 2085, y: 706 },
    labels: [
      { x: 3438, y: 490, text: "Vormantown", category: "waypoint", targetMapFilename: "Vormantown", targetX: 4362, targetY: 1478 },
      { x: 2405, y: 1012, text: "Stone Heart Clan's seat - Level 1", category: "waypoint", targetMapFilename: "Stone Heart Clan's seat - Level 1" },
    ]
  },
  {
    filename: "Modules/Vormantown-Mansion.png",
    displayName: "Vorman Mansion",
    modGroup: "Vormantown",
    parentFilename: "Modules/Vormantown.jpg",
    defaultView: { x: 465, y: 645 }, // Good
    background: "#000000",
    labels: [
      { x: 465, y: 645, text: "Vormantown", category: "waypoint", targetMapFilename: "Vormantown", targetX: 2884, targetY: 1268 },
    ]
  },
  {
    filename: "Modules/Vormantown-SeatLevel1.png",
    displayName: "Stone Heart Clan's seat - Level 1",
    modGroup: "Vormantown",
    parentFilename: "Modules/Vormantown-Seat",
    defaultView: { x: 521, y: 682 }, // Good
    background: "#000000",
    labels: [
      { x: 522, y: 673, text: "Stone Heart Clan's seat", category: "waypoint", targetMapFilename: "Stone Heart Clan's seat", targetX: 2405, targetY: 1012 },
      { x: 603, y: 131, text: "Stone Heart Clan's seat - Level 2", category: "waypoint" },
    ]
  },
  {
    filename: "Modules/WoodmirRace",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 9041,
    height: 4997,
    displayName: "Woodmir Race",
    modGroup: "Woodmir Race",
    defaultView: { x: 5172, y: 2789 }, // Good
    background: "#000000",
    labels: []
  },

/// TROIKA MODULES - OTHERS
// Tutorial module: Dungeon Crawl 2 (worldmap) - Cave to do
  {
    filename: "Modules/DungeonCrawl2",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 17306,
    height: 7963,
    displayName: "Dungeon Crawl 2",
    modGroup: "Dungeon Crawl 2",
    defaultView: { x: 11391, y: 2146 },
    labels: []
  },

/// FRENCH MODULES
// Triblonto 1 - The Secret of Professor Quentin Blafard (Worldmap [Malicorne])
// Triblonto 2 - L'epee du naufrageur
// Triblonto 3 - Tomb of Tol Gurdur (COMPLETE)
// Triblonto 4 - Treasure Island (COMPLETE)
// Triblonto 5 - The Valley of the Exiled (Unreleased)
// Triblonto 6 - L'affaire du mort mysterieux (Unreleased)
// Triblonto 7 - Mystere a l'abbaye (Unreleased)
// Triblonto 8 - Le livre des ombres (Unreleased)
// Destos - Bourrin (To do)

  {
    filename: "Modules/Malicorne",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 24920,
    height: 8195,
    displayName: "Malicorne",
    modGroup: "The Secret of Professor Quentin Blafard",
    defaultView: { x: 7467, y: 2802 },
    labels: []
  },
  {
    filename: "Modules/TombTolGurdurCity.jpg",
    displayName: "City",
    modGroup: "Tomb of Tol Gurdur",
    defaultView: { x: 901, y: 531, zoom: 0.8},
    labels: [
      { x: 2691, y: 1761, text: "Teleport to Underground", description: "", category: "waypoint", targetMapFilename: "Underground"},
    ]
  },
  {
    filename: "Modules/TombTolGurdurUnderground.jpg",
    displayName: "Underground",
    modGroup: "Tomb of Tol Gurdur",
    defaultView: { x: 3890, y: 2352, zoom: 0.8},
    background: "#000000",
    labels: []
  },
  {
    filename: "Modules/TreasureIsland.jpg",
    displayName: "Treasure Island",
    modGroup: "Treasure Island",
    defaultView: { x: 4711, y: 1804 },
    background: "url('Textures/Water.png') repeat",
    labels: [
      { x: 5890, y: 595, text: "Shop", description: "", category: "shop" },

      { x: 2440, y: 697, text: "Recruit Henri", description: "Recruit Henri", category: "followers" },

      { x: 5577, y: 1506, text: "Recruit Henri", description: "Chateau de Be'ron Wine", category: "quest" },
      { x: 1743, y: 3160, text: "Treasure note", description: "", category: "quest" },
      { x: 1026, y: 1241, text: "Treasure note - Blue Star", description: "", category: "quest" },
      { x: 7392, y: 2112, text: "Treasure note - Spyglass", description: "", category: "quest" },
      { x: 4185, y: 1039, text: "Treasure note - Shovel", description: "", category: "quest" },
      { x: 2840, y: 2715, text: "Treasure note (I)", description: "The eagle's eye perched in the tree.", category: "quest" },
      { x: 3466, y: 2800, text: "Treasure note (II)", description: "At the foot of the skull...", category: "quest" },
      { x: 4059, y: 2800, text: "Treasure note (III)", description: "...41 paces across of the river.", category: "quest" },
      { x: 4590, y: 2801, text: "Treasure note (IV)", description: "15 paces toward Petra's Twins.", category: "quest" },

      { x: 5262, y: 1424, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 2085, targetY: 706}, // A
      { x: 2392, y: 1704, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 2327, targetY: 164}, // B
      { x: 1785, y: 3456, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 2393, targetY: 1082}, // C      
      { x: 1980, y: 2651, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 881, targetY: 891}, // D
      { x: 5604, y: 1559, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 2007, targetY: 1355}, // E

      { x: 4113, y: 480, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 3030, targetY: 837}, // F
      { x: 3030, y: 837, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 4113, targetY: 480}, // F

      { x: 4590, y: 2549, text: "Treasure Location", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 169, targetY: 1250}, // Treasure

    ]
  },
  {
    filename: "Modules/TreasureUnderground.png",
    displayName: "Treasure Island Underground",
    modGroup: "Treasure Island",
    defaultView: { x: 2085, y: 706, zoom: 0.8},
    background: "#000000",
    labels: [
      { x: 2085, y: 706, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 5262, targetY: 1424}, // A
      { x: 2327, y: 164, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 2392, targetY: 1704}, // B
      { x: 2393, y: 1082, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 1785, targetY: 3456}, // C
      { x: 881, y: 891, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 1980, targetY: 2651}, // D
      { x: 2007, y: 1355, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 5604, targetY: 1559}, // E      
    ]
  },

/// RUSSIAN MODULES
// Hell Day (Complete!)

  {
    filename: "Modules/HellDay",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 17359,
    height: 9654,
    displayName: "Hell Day",
    modGroup: "Hell Day",
    defaultView: { x: 12319, y: 4065 }, // Good
    labels: [
      { x: 13537, y: 3684, text: "Hell Day - Cave", category: "waypoint", targetMapFilename: "Hell Day - Cave", targetX: 3318, targetY: 189 },
      { x: 6715, y: 1157, text: "Hell Day - Mines", category: "waypoint", targetMapFilename: "Hell Day - Mines", targetX: 1281, targetY: 2302 },
    ]
  },
  {
    filename: "Modules/HellDay-Cave.png",
    displayName: "Hell Day - Cave",
    modGroup: "Hell Day",
    parentFilename: "Modules/HellDay",
    defaultView: { x: 3318, y: 189 }, // Good
    background: "#000000",
    labels: [
      { x: 3318, y: 189, text: "Hell Day", category: "waypoint", targetMapFilename: "Hell Day", targetX: 13537, targetY: 3684 },
    ]
  },
  {
    filename: "Modules/HellDay-Mines.png",
    displayName: "Hell Day - Mines",
    modGroup: "Hell Day",
    defaultView: { x: 1281, y: 2302 }, // Good
    background: "#000000",
    labels: [
      { x: 1281, y: 2302, text: "Hell Day", category: "waypoint", targetMapFilename: "Hell Day", targetX: 6715, targetY: 1157 },
      { x: 549, y: 493, text: "Hell Day - Desert", category: "waypoint", targetMapFilename: "Hell Day - Desert", targetX: 9754, targetY: 2571 },
    ]
  },
  {
    filename: "Modules/HellDay-Desert",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 12000,
    height: 5340,
    displayName: "Hell Day - Desert",
    modGroup: "Hell Day",
    defaultView: { x: 9754, y: 2571 }, // Good
    labels: [
      { x: 9754, y: 2571, text: "Hell Day - Mines", category: "waypoint", targetMapFilename: "Hell Day - Mines", targetX: 549, targetY: 493 },
      { x: 8061, y: 3388, text: "Hell Day - Desert", category: "waypoint", targetMapFilename: "Hell Day - Desert", targetX: 7673, targetY: 3615 },
      { x: 7673, y: 3615, text: "Hell Day - Desert", category: "waypoint", targetMapFilename: "Hell Day - Desert", targetX: 8061, targetY: 3388 },
    ]
  },


/// OTHER MODULES
// Delirium of Evil (Castle) - In .dat, the only other map is "ShopMap". So what, is that it? Castle is only 4 sectors also. Now, comments online talks of 50 random dungeons sooo ???
// Grayhills (Worldmap) - In .dat, there is also a "amtut_cave" map (and a ShopMap, but that's probably irrelevant)
// WhiteSands

  {
    filename: "Modules/DeliriumOfEvil.png",
    displayName: "Delirium of Evil - Castle",
    modGroup: "Delirium of Evil",
    defaultView: { x: 1372, y: 350 }, // Good
    background: "#000000",
    labels: []
  },
  {
    filename: "Modules/Grayhills",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 31656,
    height: 9042,
    displayName: "Grayhills",
    modGroup: "Grayhills",
    defaultView: { x: 14862, y: 7919 }, // Good
    labels: []
  },

];
