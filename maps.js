// Arcanum CE Restored - Map Database Manifest (Organized by Subfolders)
const ArcanumMapData = [
  {
    filename: "World Map/ArcanumWorldMap.jpg",
    displayName: "Arcanum World Map",
    modGroup: "World Map",
    typemap: "overworld",
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [
      { x: 1182, y: 1583, text: "A Lair Of Gyr Dolours", description: "The last known location of the tormented Lady Druella." },
      { x: 1586, y: 1816, text: "A Mysterious Location", description: "Discovered on the wall painting in the Mushroom." },
      { x: 1367, y: 1582, text: "Ancient Maze", description: "A mysterious old maze." },
      { x: 1754, y: 1479, text: "Ancient Ruins", description: "Ancient ruins." },
      { x: 498, y: 892, text: "Ancient Shipwreck", description: "The remains of an ancient pirate ship." },
      { x: 776, y: 919, text: "Ancient Temple", description: "A temple rumored to hold treasures untold." },
      { x: 1452, y: 1303, text: "Arbalah's House", description: "Arbalah's House." },
      { x: 503, y: 977, text: "Ashbury", description: "(CITY) A city on the eastern seaboard." },
      { x: 1098, y: 1441, text: "Black Root", description: "(CITY) A border town." },
      { x: 629, y: 1593, text: "Boat Landing On Thanatos", description: "Landing for the Isle of Death." },
      { x: 1627, y: 1635, text: "Bolo’s Altar", description: "A weathered stone altar." },
      { x: 1604, y: 1828, text: "Caladon", description: "(CITY) A thriving feudal kingdom." },
      { x: 1453, y: 1289, text: "Crash Site", description: "The remains of the crashed blimp." },
      { x: 346, y: 679, text: "Dark Elf Camp", description: "The dark elves' base camp near the ruins of Vendigroth." },
      { x: 1237, y: 1650, text: "Dernholm", description: "(CITY) Capital of Cumbria - A dying feudal kingdom." },
      { x: 993, y: 790, text: "Dungeon Of The Dragon Pool", description: "Source of Dragon’s Blood for reviving Torian Kel." },
      { x: 711, y: 1022, text: "Elven Ruins", description: "A place that may hold untold elven riches." },
      { x: 1627, y: 564, text: "Falcon’s Ache", description: "Elven holy ground, at the edge of the Glimmering Forest." },
      { x: 1060, y: 809, text: "Fan Graveyard", description: "", targetMapFilename: "Arcanum CE Restored/FanGraveyard.png" },
      { x: 830, y: 1036, text: "Forbidden Pit", description: "Dangerous looking pit filled with skeletons and widowers." },
      { x: 466, y: 741, text: "Gateway To The Wastes", description: "A bridge leading into the Vendigroth Wastes." },
      { x: 1500, y: 1442, text: "Gorgoth Pass", description: "A long forgotten pass joining the kingdoms of Dernholm and Caladon." },
      { x: 923, y: 1689, text: "Half Ogre Island", description: "The rumored location of the secret breeding laboratory." },
      { x: 1288, y: 713, text: "Hardin’s Pass", description: "A treacherous snowy pass leading to the Glimmering Forest." },
      { x: 323, y: 877, text: "Isle of Despair", description: "A penal colony." },
      { x: 1435, y: 616, text: "K’na Tha", description: "A place of ancient magick rumored to contain Azram’s Star." },
      { x: 882, y: 423, text: "Kerlin’s Altar", description: "An ancient, golden altar." },
      { x: 635, y: 1204, text: "Kree", description: "The once great city destroyed by the Bane of Kree." },
      { x: 720, y: 1886, text: "Land Bridge", description: "Beginning of the trail leading to the god of Thanatos." },
      { x: 1580, y: 1009, text: "Lethe Wyvern Sighting", description: "Rumored lair of the lethe wyvern." },
      { x: 1179, y: 1465, text: "Liam’s Workshop", description: "Liam Cameron’s Workshop." },
      { x: 474, y: 694, text: "Mysterious Ruins Of the Wastes", description: "A location shown to you by Weldo Rubin." },
      { x: 721, y: 1890, text: "Nasrudin's Resting Place", description: "Reputed to be the location of the remains of Nasrudin." },
      { x: 750, y: 556, text: "Old Blind Master", description: "(Secret Location) See Quests For More Details.", targetMapFilename: "Arcanum CE Restored/OldBlindMaster.png" },
      { x: 1545, y: 656, text: "Qintarra", description: "(CITY) A large elven community." },
      { x: 1503, y: 1771, text: "Razor’s Pointe", description: "Ships fear these treacherous waters that must be passed to navigate around the tip of Arcanum." },
      { x: 1752, y: 1514, text: "Roseborough", description: "(CITY) A small town near the Ring of Brodgar." },
      { x: 1025, y: 1333, text: "Ruins of Szabo", description: "Some ancient ruins." },
      { x: 1514, y: 1184, text: "Secret Entrance To The Iron Clan", description: "The entrance to the legendary dwarven clan." },
      { x: 1320, y: 179, text: "Secret Village", description: "You hear high pitched rejoicing." },
      { x: 346, y: 827, text: "Shades Beach", description: "A place reputed to be full of strange objects." },
      { x: 1410, y: 1317, text: "Shrouded Hills", description: "(CITY) A small mining town." },
      { x: 1450, y: 1325, text: "Simon Fahrkus' Shack", description: "Simon Fahrkus' Shack." },
      { x: 1260, y: 479, text: "Small Camp", description: "A small camp is visible from a distance." },
      { x: 1595, y: 882, text: "Small Pond", description: "You hear shouts and whip-cracking." },
      { x: 1190, y: 753, text: "Stillwater", description: "A small town, famed for its swords.", targetMapFilename: "ArcanumBase/Stillwatersmall.jpg" },
      { x: 1343, y: 887, text: "Stonecutter Clan", description: "The home of the Stonecutter Clan." },
      { x: 1373, y: 705, text: "Strange Ceremony", description: "Strange chanting can be heard nearby...." },
      { x: 617, y: 527, text: "Strange Pond", description: "An interesting pond in the middle of nowhere." },
      { x: 682, y: 1339, text: "Stringy Pete’s Cove", description: "A haunted cove." },
      { x: 808, y: 1341, text: "Stringy Pete’s Treasure", description: "The final resting place of the infamous pirate’s bounty." },
      { x: 972, y: 1028, text: "Tarant", description: "The biggest, most industrial city in Arcanum", targetMapFilename: "ArcanumBase/Tarant.png"},
      { x: 1178, y: 289, text: "The Bangellian Deeps", description: "The resting place of the Bangellian Scourge." },
      { x: 1179, y: 316, text: "The Bedokaan Village", description: "As small village of reptilian creatures." },
      { x: 1308, y: 754, text: "The Black Mountain Mines", description: "The abandoned home of the Black Mountain Clan." },
      { x: 1076, y: 514, text: "The Bog", description: "An evil looking place." },
      { x: 1629, y: 1205, text: "The Broken Cathedral", description: "A place of old ruins." },
      { x: 1386, y: 640, text: "The Castle S’nel N’fa", description: "A trap filled ruin rumored to contain the staff of K’an Tau." },
      { x: 1613, y: 1413, text: "The Cold Place", description: "An ominous place." },
      { x: 320, y: 838, text: "The Home Of Maximillan", description: "A strange old man on the Isle of Despair." },
      { x: 768, y: 838, text: "The Lair of Bellerogrim", description: "A cave where they discovered Arcanum’s last Dragon." },
      { x: 642, y: 1765, text: "The Lair Of The Bogaroth", description: "The reputed lair of the monster that slaughtered the entire Ashlag tribe." },
      { x: 1695, y: 1318, text: "The Old Lagoon", description: "A remote lagoon." },
      { x: 1364, y: 936, text: "The Pit Of Fires", description: "The location of the Blade Of Xerxes." },
      { x: 1320, y: 827, text: "The Place Of Lost Voices", description: "A place shown to you by the map in the Iron Clan Chest." },
      { x: 1206, y: 276, text: "The Poachers Camp", description: "The camp of some Bedokaan poachers." },
      { x: 749, y: 249, text: "The Ruby Glade", description: "An eerie, ancient place." },
      { x: 509, y: 1113, text: "The Williamson Homestead", description: "A run-down shanty." },
      { x: 268, y: 824, text: "The Women’s Camp", description: "A small village comprised solely of nomadic women." },
      { x: 1529, y: 1534, text: "Thieves Cave", description: "Thieves Cave." },
      { x: 1214, y: 1137, text: "Torg’s Altar", description: "An old, stone altar." },
      { x: 1419, y: 1099, text: "Torin Quarry", description: "An ancient dwarven stone quarry." },
      { x: 1505, y: 297, text: "Tsen-Ang", description: "(CITY) Home of the Dark Elves." },
      { x: 444, y: 489, text: "Tulla", description: "(CITY) A mysterious city of mages deep in the Vendigroth Wastes." },
      { x: 1046, y: 693, text: "Uncharted Cave", description: "No one knows what mysteries may lie in this unexplored cave." },
      { x: 307, y: 587, text: "Vendigroth Ruins", description: "The remnants of an ancient city." },
      { x: 745, y: 1700, text: "Village Of the Ashlag Tribe", description: "The home of a primitive tribe that worships a primate deity." },
      { x: 1230, y: 981, text: "Vollinger’s Meeting Place", description: "Vollinger’s Meeting Place." },
      { x: 868, y: 1191, text: "Vooriden", description: "(CITY) A small village just south of Tarant." },
      { x: 954, y: 667, text: "Wheel Clan", description: "A Dwarven society deep in the Grey Mountains." },
      { x: 1230, y: 1530, text: "Wolf Cave", description: "Wolf Cave." }
    ]
  },
  {
    filename: "World Map/ArcanumForgottenPlaces.jpg",
    displayName: "Arcanum Forgotten Places",
    modGroup: "CE Restored World Map",
    typemap: "overworld",
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [
      { x: 610, y: 555, text: "Acererak's Tomb", description: "The forbidding entrance leading deep into a legendary dungeon.", targetMapFilename: "Forgotten Places/ForgottenPlaces-AcereraksTombOutside.png" },
      { x: 899, y: 374, text: "Merchant's Faire", description: "A crowded gathering node for nomadic traders.", targetMapFilename: "Forgotten Places/ForgottenPlaces-MerchantsFair.png" }
    ]
  },
  {
    filename: "ArcanumBase/Ashbury.jpg",
    displayName: "Ashbury",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Black.Root.jpg",
    displayName: "Black Root",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Caladon_01.jpg",
    displayName: "Caladon",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Dernholm.jpg",
    displayName: "Dernholm",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Isle.of.Despair.jpg",
    displayName: "Isle of Despair",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Qintarra.jpg",
    displayName: "Qintarra",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Roseborough.jpg",
    displayName: "Roseborough",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Shrouded.Hills.jpg",
    displayName: "Shrouded Hills",
    modGroup: "Arcanum",
    typemap: "local",
    labels: [
      { x: 4365, y: 6553, text: "Bessie Toone Mine", description: "", category: "waypoint", targetMapFilename: "ArcanumBase/ShroudedHills.Mine.png"},
    ]
  },
  {
    filename: "ArcanumBase/Stillwatersmall.jpg",
    displayName: "Stillwater",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 2816, y: 2407, zoom: 1 },
    labels: [
      { x: 2547, y: 16, text: "Drogs Cave", description: "", category: "waypoint", targetMapFilename: "ArcanumBase/StillwaterDrogsCave.png"},
      { x: 4920, y: 854, text: "Stillwater Giants Cave", description: "", category: "waypoint", targetMapFilename: "ArcanumBase/StillwaterGiantsCave.png"},
    ],
  },
  {
    filename: "ArcanumBase/Tarant.png",
    displayName: "Tarant",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3338, y: 2537, zoom: 1 },
    labels: [
      { x: 3574, y: 2372, text: "Castleton's General Store", description: "", category: "shop" },
      { x: 3710, y: 2304, text: "Tailor", description: "", category: "shop" },
      { x: 4007, y: 2094, text: "Inventor", description: "", category: "shop" },
      { x: 4035, y: 2067, text: "Herbalist", description: "", category: "shop" },
      { x: 3932, y: 2486, text: "Junk Dealer", description: "", category: "shop" },
      { x: 3905, y: 1863, text: "Wallow's Quality Armour", description: "", category: "shop" },
      { x: 3782, y: 1797, text: "Smythe's Gun Shoppe", description: "", category: "shop" },
      { x: 2297, y: 2808, text: "Mellin Bungerton", description: "", category: "shop" },
      { x: 4523, y: 1634, text: "Magick Shop Clerk", description: "", category: "shop" },
      { x: 4410, y: 1558, text: "Magickal Smith", description: "", category: "shop" },
      { x: 4598, y: 1524, text: "Magick Shop Clerk", description: "", category: "shop" },

      { x: 3800, y: 2093, text: "Magnus", description: "", category: "followers" },
      { x: 4792, y: 1662, text: "Gar", description: "", category: "followers" },
      { x: 3225, y: 2223, text: "Perriman Smythe", description: "", category: "followers" },
      { x: 2463, y: 2798, text: "Sebastian", description: "", category: "followers" },

      { x: 4340, y: 2454, text: "The Crystal Ball (Part II)", description: "Madame Toussaude wants you to deliver her crystal ball to Delores Beston.", category: "quest" },
      { x: 4668, y: 2647, text: "Rid Mr. Plough's Warehouses of Rats", description: "Mr. Plough wants you to rid his warehouses, near the docks in Tarant, of rats.", category: "quest" },
    
      { x: 1812, y: 2706, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "ArcanumBase/Tarant_03.jpg" },
      { x: 3081, y: 2970, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "ArcanumBase/Tarant_03.jpg" },
      { x: 5443, y: 2279, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "ArcanumBase/Tarant_03.jpg" },
      { x: 5066, y: 3131, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "ArcanumBase/Tarant_03.jpg", targetX: 3805, targetY: 2237, targetZoom: 1.0},
      { x: 2816, y: 2083, text: "Bates Tunnel", description: "", category: "waypoint" },

      { x: 3417, y: 2459, text: "Station A: West Garillon Bridge", description: "", category: "waypoint" },
      { x: 3598, y: 1728, text: "Station B: Vermillion Station", description: "", category: "waypoint" },
      { x: 4499, y: 1279, text: "Station C: Tarant University", description: "", category: "waypoint" },
      { x: 6009, y: 1997, text: "Station D: Warehouse District", description: "", category: "waypoint" },
      { x: 5111, y: 2121, text: "Station E: Commercial District", description: "", category: "waypoint" },
      { x: 4350, y: 2624, text: "Station F: Tarantian Docks", description: "", category: "waypoint" },
      { x: 4462, y: 1939, text: "Station G: Kensington Park", description: "", category: "waypoint" },
      { x: 2309, y: 3003, text: "Station H: The Boil", description: "", category: "waypoint" },
      ]
  },
  {
    filename: "ArcanumBase/T'sen-Ang.jpg",
    displayName: "T'sen-Ang",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Tulla_01.jpg",
    displayName: "Tulla",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Wheel.Clan_01.jpg",
    displayName: "Wheel Clan",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },
  {
    filename: "ArcanumBase/Void_01.jpg",
    displayName: "Void",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },

/// SUBMAPS

  {
    filename: "ArcanumBase/ShroudedHills.Mine.png",
    displayName: "Bessie Toone Mine",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Shrouded.Hills.jpg",
    labels: []
  },
  {
    filename: "ArcanumBase/StillwaterGiantsCave.png",
    displayName: "Stillwater Giants Cave",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Stillwatersmall.jpg",
    labels: [
      { x: 197, y: 539, text: "Stillwater", description: "", category: "waypoint" , targetMapFilename: "ArcanumBase/Stillwatersmall.jpg", targetX: 4920, targetY: 854, targetZoom: 1.0},
    ]
  },
  {
    filename: "ArcanumBase/StillwaterDrogsCave.png",
    displayName: "Drogs Cave",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Stillwatersmall.jpg",
    labels: [
      { x: 850, y: 597, text: "Stillwater", description: "", category: "waypoint" , targetMapFilename: "ArcanumBase/Stillwatersmall.jpg"},
    ]
  },
  {
    filename: "ArcanumBase/Tarant_02.jpg",
    displayName: "Tarant New Sewers",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    labels: []
  },
  {
    filename: "ArcanumBase/Tarant_03.jpg",
    displayName: "Tarant Old Sewers",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    labels: []
  },

/// CE RESTORED

  {
    filename: "Arcanum CE Restored/OldBlindMaster.png",
    displayName: "Old Blind Master",
    modGroup: "Arcanum CE Restored",
    typemap: "local",
    labels: []
  },
  {
    filename: "Arcanum CE Restored/FanGraveyard.png",
    displayName: "Fan Graveyard",
    modGroup: "Arcanum CE Restored",
    typemap: "local",
    defaultView: { x: 1922, y: 280, zoom: 1 },
    labels: []
  },

/// FORGOTTEN PLACES

  {
    filename: "Forgotten Places/ForgottenPlaces-AcereraksTombOutside.png",
    displayName: "Acererak's Tomb",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Cotswold.png",
    displayName: "Cotswold",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 865, y: 1028, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-MerchantsFair.png",
    displayName: "Merchant's Faire",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Tomb of Tol Gurdur/TombTolGurdurCity.jpg",
    displayName: "City",
    modGroup: "Tomb of Tol Gurdur",
    typemap: "local",
    defaultView: { x: 901, y: 531, zoom: 0.8},
    labels: [
      { x: 2691, y: 1761, text: "Teleport to Underground", description: "", category: "waypoint", targetMapFilename: "Tomb of Tol Gurdur/TombTolGurdurUnderground.jpg"},
    ]
  },
  {
    filename: "Tomb of Tol Gurdur/TombTolGurdurUnderground.jpg",
    displayName: "Underground",
    modGroup: "Tomb of Tol Gurdur",
    typemap: "local",
    defaultView: { x: 3890, y: 2352, zoom: 0.8},
    background: "#000000",
    labels: []
  },
  {
    filename: "Treasure Island/TreasureIsland.jpg",
    displayName: "Treasure Island",
    modGroup: "Treasure Island",
    typemap: "local",
    background: "url('Textures/Water.png') repeat",
    labels: []
  },
  {
    filename: "Treasure Island/TreasureUnderground.png",
    displayName: "Underground",
    modGroup: "Treasure Island",
    typemap: "local",
    defaultView: { x: 2085, y: 706, zoom: 0.8},
    background: "#000000",
    labels: []
  }
];