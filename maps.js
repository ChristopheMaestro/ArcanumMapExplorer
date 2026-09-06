// Arcanum CE Restored - Map Database Manifest (Organized by Subfolders)
const ArcanumMapData = [
  {
    filename: "World Map/ArcanumWorldMap.jpg",
    displayName: "Arcanum World Map",
    modGroup: "World Map",
    typemap: "overworld",
    music: "music/arcanum.flac",
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [
      { x: 503, y: 977, text: "Ashbury", description: "A city on the eastern seaboard.", targetMapFilename: "Ashbury" },
      { x: 1098, y: 1441, text: "Black Root", description: "A border town.", targetMapFilename: "Black Root" },
      { x: 1604, y: 1828, text: "Caladon", description: "A thriving feudal kingdom.", targetMapFilename: "Caladon" },
      { x: 1237, y: 1650, text: "Dernholm", description: "Capital of Cumbria - A dying feudal kingdom.", targetMapFilename: "Dernholm" },
      { x: 323, y: 877, text: "Isle of Despair", description: "A penal colony.", targetMapFilename: "Isle of Despair" },
      { x: 1545, y: 656, text: "Qintarra", description: "A large elven community.", targetMapFilename: "Qintarra"},
      { x: 1752, y: 1514, text: "Roseborough", description: "A small town near the Ring of Brodgar.", targetMapFilename: "Roseborough"},
      { x: 1410, y: 1317, text: "Shrouded Hills", description: "A small mining town.", targetMapFilename: "Shrouded Hills" },
      { x: 1190, y: 753, text: "Stillwater", description: "A small town, famed for its swords.", targetMapFilename: "Stillwater" },
      { x: 972, y: 1028, text: "Tarant", description: "The biggest, most industrial city in Arcanum", targetMapFilename: "Tarant"},
      { x: 1179, y: 316, text: "The Bedokaan Village", description: "As small village of reptilian creatures." },
      { x: 1505, y: 297, text: "Tsen-Ang", description: "Home of the Dark Elves.", targetMapFilename: "T'sen-Ang"},
      { x: 444, y: 489, text: "Tulla", description: "A mysterious city of mages deep in the Vendigroth Wastes.", targetMapFilename: "Tulla"},
      { x: 868, y: 1191, text: "Vooriden", description: "A small village just south of Tarant.", targetMapFilename: "Vooriden"},
      { x: 954, y: 667, text: "Wheel Clan", description: "A Dwarven society deep in the Grey Mountains.", targetMapFilename: "Wheel Clan"},
   
      { x: 1452, y: 1303, text: "Arbalah's House", description: "Arbalah's House.", targetMapFilename: "Arbalah's House"},
      { x: 1586, y: 1816, text: "A mysterious location", description: "Discovered on the wall painting in the Mushroom." },
      { x: 1754, y: 1479, text: "Ancient Ruins", description: "Ancient ruins.", targetMapFilename: "Ancient Ruins" },
      { x: 776, y: 919, text: "Ancient Temple", description: "A temple rumored to hold treasures untold.", targetMapFilename: "Ancient Temple"},
      { x: 1627, y: 1635, text: "Bolo’s Altar", description: "A weathered stone altar.", targetMapFilename:"Bolo's Altar" },
      { x: 1453, y: 1289, text: "Crash Site", description: "The remains of the crashed blimp.", targetMapFilename: "Crash Site"},
      { x: 711, y: 1022, text: "Elven Ruins", description: "A place that may hold untold elven riches.", targetMapFilename: "Elven Ruins"},
      { x: 830, y: 1036, text: "Forbidden Pit", description: "Dangerous looking pit filled with skeletons and widowers.", targetMapFilename: "Forbidden Pit" },
      { x: 923, y: 1689, text: "Half Ogre Island", description: "The rumored location of the secret breeding laboratory.", targetMapFilename: "Half Ogre Island"},
      { x: 882, y: 423, text: "Kerlin’s Altar", description: "An ancient, golden altar.", targetMapFilename:"Kerlin’s Altar"},
      { x: 720, y: 1886, text: "Land Bridge", description: "Beginning of the trail leading to the god of Thanatos.", targetMapFilename: "Land Bridge", targetX: 1435, targetY: 735},
      { x: 721, y: 1890, text: "Nasrudin's Resting Place", description: "Reputed to be the location of the remains of Nasrudin.", targetMapFilename: "Nasrudin's Resting Place", targetX: 3144, targetY: 2443},
      { x: 1503, y: 1771, text: "Razor’s Pointe", description: "Ships fear these treacherous waters that must be passed to navigate around the tip of Arcanum." },
      { x: 1514, y: 1184, text: "Secret Entrance To The Iron Clan", description: "The entrance to the legendary dwarven clan.", targetMapFilename: "Secret Entrance to the Iron Clan"},
      { x: 346, y: 827, text: "Shades Beach", description: "A place reputed to be full of strange objects.", targetMapFilename: "Shades Beach"},
      { x: 1450, y: 1325, text: "Simon Fahrkus' Shack", description: "Simon Fahrkus' Shack.", targetMapFilename: "Simon Fahrkus' Shack"},
      { x: 1260, y: 479, text: "Small Camp", description: "A small camp is visible from a distance.", targetMapFilename: "Small Camp" },
      { x: 617, y: 527, text: "Strange Pond", description: "An interesting pond in the middle of nowhere.", targetMapFilename: "Strange Pond"},
      { x: 1308, y: 754, text: "The Black Mountain Mines", description: "The abandoned home of the Black Mountain Clan.", targetMapFilename: "The Black Mountain Mines"},
      { x: 1629, y: 1205, text: "The Broken Cathedral", description: "A place of old ruins.", targetMapFilename: "The Broken Cathedral"},
      { x: 1613, y: 1413, text: "The Cold Place", description: "An ominous place.", targetMapFilename: "The Cold Place"},
      { x: 768, y: 838, text: "The Lair of Bellerogrim", description: "A cave where they discovered Arcanum’s last Dragon.", targetMapFilename: "The Lair of Bellerogrim"},
      { x: 642, y: 1765, text: "The Lair Of The Bogaroth", description: "The reputed lair of the monster that slaughtered the entire Ashlag tribe.", targetMapFilename: "The Lair of the Bogaroth"},
      { x: 1695, y: 1318, text: "The Old Lagoon", description: "A remote lagoon.", targetMapFilename: "The Old Lagoon"},
      { x: 1076, y: 514, text: "The Bog", description: "An evil looking place.", targetMapFilename: "The Bog"},
      { x: 1364, y: 936, text: "The Pit Of Fires", description: "The location of the Blade Of Xerxes.", targetMapFilename: "The Pit of Fires"},
      { x: 1320, y: 827, text: "The Place Of Lost Voices", description: "A place shown to you by the map in the Iron Clan Chest.", targetMapFilename: "The Place of Lost Voices" },
      { x: 509, y: 1113, text: "The Williamson Homestead", description: "A run-down shanty.", targetMapFilename: "TheWilliamsonHomestead" },
      { x: 1214, y: 1137, text: "Torg’s Altar", description: "An old, stone altar.", targetMapFilename: "Torg'sAltar"},
      { x: 1419, y: 1099, text: "Torin Quarry", description: "An ancient dwarven stone quarry.", targetMapFilename: "Torin Quarry"},
      { x: 745, y: 1700, text: "Village Of the Ashlag Tribe", description: "The home of a primitive tribe that worships a primate deity.", targetMapFilename: "Village of the Ashlag Tribe"},
      { x: 307, y: 587, text: "Vendigroth Ruins", description: "The remnants of an ancient city.", targetMapFilename: "Vendigroth Ruins" },
      { x: 1230, y: 981, text: "Vollinger’s Meeting Place", description: "Vollinger’s Meeting Place.", targetMapFilename: "Vollinger’s Meeting Place"},

      { x: 1182, y: 1583, text: "A Lair Of Gyr Dolours", description: "The last known location of the tormented Lady Druella." },
      { x: 1367, y: 1582, text: "Ancient Maze", description: "A mysterious old maze." },
      { x: 498, y: 892, text: "Ancient Shipwreck", description: "The remains of an ancient pirate ship." },
      { x: 629, y: 1593, text: "Boat Landing On Thanatos", description: "Landing for the Isle of Death." },
      { x: 346, y: 679, text: "Dark Elf Camp", description: "The dark elves' base camp near the ruins of Vendigroth." },
      { x: 993, y: 790, text: "Dungeon Of The Dragon Pool", description: "Source of Dragon’s Blood for reviving Torian Kel." },
      { x: 1627, y: 564, text: "Falcon’s Ache", description: "Elven holy ground, at the edge of the Glimmering Forest." },
      { x: 466, y: 741, text: "Gateway To The Wastes", description: "A bridge leading into the Vendigroth Wastes." },
      { x: 1500, y: 1442, text: "Gorgoth Pass", description: "A long forgotten pass joining the kingdoms of Dernholm and Caladon." },
      { x: 1288, y: 713, text: "Hardin’s Pass", description: "A treacherous snowy pass leading to the Glimmering Forest." },
      { x: 1435, y: 616, text: "K’na Tha", description: "A place of ancient magick rumored to contain Azram’s Star." },
      { x: 635, y: 1204, text: "Kree", description: "The once great city destroyed by the Bane of Kree." },
      { x: 1580, y: 1009, text: "Lethe Wyvern Sighting", description: "Rumored lair of the lethe wyvern." },
      { x: 1179, y: 1465, text: "Liam’s Workshop", description: "Liam Cameron’s Workshop." },
      { x: 474, y: 694, text: "Mysterious Ruins Of the Wastes", description: "A location shown to you by Weldo Rubin." },
      { x: 1025, y: 1333, text: "Ruins of Szabo", description: "Some ancient ruins." },
      { x: 1320, y: 179, text: "Secret Village", description: "You hear high pitched rejoicing." },
      { x: 1595, y: 882, text: "Small Pond", description: "You hear shouts and whip-cracking." },
      { x: 1343, y: 887, text: "Stonecutter Clan", description: "The home of the Stonecutter Clan." },
      { x: 1373, y: 705, text: "Strange Ceremony", description: "Strange chanting can be heard nearby...." },
      { x: 682, y: 1339, text: "Stringy Pete’s Cove", description: "A haunted cove." },
      { x: 808, y: 1341, text: "Stringy Pete’s Treasure", description: "The final resting place of the infamous pirate’s bounty." },
      { x: 1178, y: 289, text: "The Bangellian Deeps", description: "The resting place of the Bangellian Scourge." },
      { x: 1386, y: 640, text: "The Castle S’nel N’fa", description: "A trap filled ruin rumored to contain the staff of K’an Tau." },
      { x: 320, y: 838, text: "The Home Of Maximillan", description: "A strange old man on the Isle of Despair." },
      { x: 1206, y: 276, text: "The Poachers Camp", description: "The camp of some Bedokaan poachers." },
      { x: 749, y: 249, text: "The Ruby Glade", description: "An eerie, ancient place." },
      { x: 268, y: 824, text: "The Women’s Camp", description: "A small village comprised solely of nomadic women." },
      { x: 1529, y: 1534, text: "Thieves Cave", description: "Thieves Cave." },
      { x: 1046, y: 693, text: "Uncharted Cave", description: "No one knows what mysteries may lie in this unexplored cave." },
      { x: 1230, y: 1530, text: "Wolf Cave", description: "Wolf Cave." }
    ]
  },
  {
    filename: "World Map/ArcanumWorldMap.jpg",
    displayName: "Arcanum Forgotten Places",
    modGroup: "CE Restored World Map",
    typemap: "overworld",
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [
      { x: 1060, y: 809, text: "Fan Graveyard", description: "", targetMapFilename: "Fan Graveyard" },
      { x: 750, y: 556, text: "Old Blind Master", description: "See Quests For More Details.", targetMapFilename: "Old Blind Master" },

      { x: 610, y: 555, text: "Acererak's Tomb", description: "The forbidding entrance leading deep into a legendary dungeon.", targetMapFilename: "Acererak's Tomb" },
      { x: 899, y: 374, text: "Merchant's Faire", description: "A crowded gathering node for nomadic traders.", targetMapFilename: "Merchant's Faire" },
      { x: 732, y: 565, text: "An Old Mine", description: "" },
      { x: 654, y: 664, text: "Mines of Dwarrowdelf", description: "" },
      { x: 654, y: 687, text: "Ancient Trail", description: "" },
      { x: 418, y: 811, text: "Leahbo", description: "" },
      { x: 295, y: 727, text: "Port Ruins", description: "" },
      { x: 336, y: 749, text: "Port Ruins", description: "" },
      { x: 383, y: 767, text: "Port Ruins", description: "" },
      { x: 354, y: 871, text: "Secret Landing", description: "" },
      { x: 358, y: 908, text: "Veloren Island", description: "" },
      { x: 615, y: 1013, text: "Well of Lost Souls", description: "" },
      { x: 923, y: 1024, text: "Vaselan", description: "" },
      { x: 1003, y: 1004, text: "The Tempter of Fate", description: "" },
      { x: 770, y: 1274, text: "Cotswold", description: "" },
      { x: 477, y: 1369, text: "Black Rock Lighthouse", description: "" },
      { x: 1261, y: 1727, text: "Norleigh Seahold", description: "" },
      { x: 1297, y: 1753, text: "Plainwicke Plantation", description: "" },
      { x: 1329, y: 1770, text: "Bone Hill", description: "" },
      { x: 1301, y: 1795, text: "Brookeside Plantation", description: "" },
      { x: 1317, y: 1802, text: "Freebooter's Pass", description: "" },
      { x: 1348, y: 1835, text: "Monaco", description: "" },
      { x: 1477, y: 1610, text: "The Cavern of Madness", description: "" },
      { x: 1286, y: 1436, text: "Brandybuck", description: "" },
      { x: 1464, y: 1259, text: "Ivory Lake", description: "" },
      { x: 1627, y: 1127, text: "Marsyona", description: "" },
      { x: 1166, y: 894, text: "Lynchbany", description: "" },
      { x: 1184, y: 879, text: "Big Woods Lodge", description: "" },
      { x: 1293, y: 676, text: "Spider Cave", description: "" },
    ]
  },
  {
    filename: "ArcanumBase/Ashburysmall.jpg",
    displayName: "Ashbury",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 4116, y: 3252, zoom: 1 },
    labels: [
      { x: 5663, y: 2388, text: "Worthless Mutt (Dog)", description: "", category: "followers" },
      { x: 2947, y: 3240, text: "Geoffrey Tarellond-Ashe", description: "", category: "followers" },

      { x: 2041, y: 2737, text: "Crematorium (Level I)", description: "", category: "waypoint" },
      { x: 3707, y: 1325, text: "Haunted Castle", description: "", category: "waypoint" },
      { x: 3277, y: 2500, text: "Scienticians Underground", description: "", category: "waypoint" },

    ]
  },
  {
    filename: "ArcanumBase/BlackRootsmall.jpg",
    displayName: "Black Root",
    modGroup: "Arcanum",
    typemap: "local",
    labels: [
      { x: 5586, y: 1308, text: "Dante", description: "", category: "followers" },
      { x: 4656, y: 3063, text: "Franklin Payne", description: "", category: "followers" },
    ]
  },
  {
    filename: "ArcanumBase/Caladonsmall.jpg",
    displayName: "Caladon",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3596, y: 3305, zoom: 1 },
    labels: [
      { x: 4401, y: 1297, text: "Caladon - Panarii Temple", description: "", category: "waypoint" },
      { x: 6613, y: 1768, text: "Caladon Castle", description: "", category: "waypoint" },
      { x: 6870, y: 2460, text: "Caladon Guardhouse Basement", description: "", category: "waypoint" },
      { x: 7529, y: 1837, text: "Caladon High Security Prison", description: "", category: "waypoint" },
      { x: 5883, y: 1959, text: "Caladon Mafia Underground", description: "", category: "waypoint" },
      { x: 5390, y: 1723, text: "Caladon Sanders Basement", description: "", category: "waypoint" },
      { x: 6879, y: 782, text: "Caladon Trap Disarm Dungeon", description: "", category: "waypoint" },
    ]
  },
  {
    filename: "ArcanumBase/Dernholmsmall.jpg",
    displayName: "Dernholm",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1870, y: 2624, zoom: 1 },
    labels: [
      { x: 2416, y: 2728, text: "Jayna Stiles", description: "", category: "followers" },
      { x: 3002, y: 2146, text: "Vollinger", description: "", category: "followers" },

      { x: 4391, y: 1155, text: "Dernholm Pits", description: "", category: "waypoint" },
      { x: 3629, y: 1775, text: "Dernholm Castle", description: "", category: "waypoint" },
    ]
  },
  {
    filename: "ArcanumBase/IsleofDespairsmall.jpg",
    displayName: "Isle of Despair",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 2976, y: 1409, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/Qintarrasmall.jpg",
    displayName: "Qintarra",
    modGroup: "Arcanum",
    typemap: "local",
    music: "music/qintarra.flac",
    defaultView: { x: 1749, y: 1327, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/Roseboroughsmall.jpg",
    displayName: "Roseborough",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3064, y: 2710, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/ShroudedHillssmall.jpg",
    displayName: "Shrouded Hills",
    modGroup: "Arcanum",
    typemap: "local",
    music: "music/towns.flac",
    defaultView: { x: 5689, y: 3230, zoom: 1 },
    labels: [
      { x: 5262, y: 2990, text: "Ristezze Imported Goods", description: "Key to Ristezze's Bedroom", category: ["shop", "quest", "key"] },
      { x: 4975, y: 3178, text: "Gurloes' Metalworkings", description: "Blacksmith / Find Ore / Key to Lloyd Gurloes' backroom", category:  ["shop", "quest", "key"]},
      { x: 4575, y: 3237, text: "Slim Pickens", description: "", category: "shop" },
      { x: 4561, y: 2421, text: "Herbalist Gaylin", description: "", category: "shop" },
      { x: 7136, y: 2559, text: "Gypsy", description: "", category: "shop" },

      { x: 5914, y: 3147, text: "Shrouded Hills Panarii Temple", description: "", category: "waypoint", targetMapFilename: "Panarii Temple"},
      { x: 2179, y: 3272, text: "Bessie Toone Mine", description: "", category: "waypoint", targetMapFilename: "Bessie Toone Mine", targetX: 1697, targetY: 805},

      { x: 5762, y: 3504, text: "Sogg Mead Mug", description: "", category: "followers" },
    ]
  },
  {
    filename: "ArcanumBase/Stillwater.jpg",
    displayName: "Stillwater",
    modGroup: "Arcanum",
    typemap: "local",
    music: "music/villages.flac",
    defaultView: { x: 2816, y: 2407, zoom: 1 },
    labels: [
      { x: 1293, y: 2938, text: "Find the Stolen Idol (I)", description: "", category: "quest" },
      { x: 3777, y: 3372, text: "Find the Stolen Idol (II)", description: "", category: "quest" },
      { x: 721, y: 2002, text: "Rescue Cyrus (II)", description: "", category: "quest" },
      { x: 1748, y: 549, text: "Rescue Cyrus (III)", description: "", category: "quest" },
      { x: 2389, y: 3537, text: "Elder Joachim's paper trail (III)", description: "", category: "quest" },
      { x: 2271, y: 2586, text: "Myrth", category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Stillwater Giant (Part I)",
            questDescription: "Myrth, an elf residing in Stillwater, instructs you to perform a rite of passage, killing a Stillwater Giant and bringing its pelt to him. He directs you to Stanley Xavier Hippington, living directly North from his house.",
            target: "Stanley Xavier Hippington" },
          { questName: "Find the Amulet of N'Tala (Part II)",
            questDescription: "The amulet can be obtained from Myrth either by stealing it or by taking it from his corpse after killing him.",
            target: "Sister Elowen" }
        ]
      },
      { x: 2719, y: 1753, text: "Stanley Xavier Hippington", description: "", category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Stillwater Giant (Part II)",
            questDescription: "Upon talking to Stanley Xavier Hippington, a cryptozoologist, he gives you a Stillwater trap and a bottle of Stillwater Giant scent to use to capture a Stillwater Giant, residing in a cave nearby.",
            target: "The Stillwater Giant (Part III)" },
          ]
      },
      { x: 2627, y: 2829, text: "Retrieving the Ruby (I)", description: "", category: "quest" },

      { x: 1978, y: 3831, text: "General Goods", description: "", category: "shop" },
      { x: 2278, y: 3130, text: "The Falling Hammer", description: "Blacksmith / Quest: Rescue Cyrus (I)", category:  ["shop", "quest"]},

      { x: 1681, y: 633, text: "Drogs Cave", description: "", category: "waypoint", targetMapFilename: "Drogs Cave"},
      { x: 4211, y: 1759, text: "Stillwater Giants Cave", description: "", category: "waypoint", targetMapFilename: "Stillwater Giants Cave"},
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
      { x: 4570, y: 2347, text: "Black Market", description: "", category: "shop" },

      { x: 3800, y: 2093, text: "Magnus", description: "", category: "followers" },
      { x: 4792, y: 1662, text: "Gar", description: "", category: "followers" },
      { x: 3225, y: 2223, text: "Perriman Smythe", description: "", category: "followers" },
      { x: 2463, y: 2798, text: "Sebastian", description: "", category: "followers" },

      { x: 4162, y: 1649, text: "The Crystal Ball (Part I)", description: "", category: "quest", linkedLabels: ["The Crystal Ball (Part II)"] },
      { x: 4340, y: 2454, text: "The Crystal Ball (Part II)", description: "Madame Toussaude wants you to deliver her crystal ball to Delores Beston.", category: "quest" },
      { x: 4668, y: 2647, text: "Rid Mr. Plough's Warehouses of Rats", description: "Mr. Plough wants you to rid his warehouses, near the docks in Tarant, of rats.", category: "quest" },
    
      { x: 5442, y: 1502, text: "Bates Mansion", description: "", category: "waypoint" },
      { x: 4947, y: 1428, text: "City Hall Underground", description: "", category: "waypoint" },
      { x: 3780, y: 1940, text: "P. Schuyler & Sons (Level I)", description: "", category: "waypoint" },
      { x: 1812, y: 2706, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 3081, y: 2970, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 5443, y: 2279, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 5066, y: 3131, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers", targetX: 3805, targetY: 2237, targetZoom: 1.0},
      { x: 3302, y: 2074, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3849, y: 2316, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3976, y: 1990, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3871, y: 1649, text: "Tarant New Sewers", description: "", category: "waypoint" },
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
    filename: "ArcanumBase/TsenAngsmall.jpg",
    displayName: "T'sen-Ang",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3841, y: 1707, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/Tullasmall.jpg",
    displayName: "Tulla",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1910, y: 1655, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/Vooriden.png",
    displayName: "Vooriden",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1031, y: 496, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClan.png",
    displayName: "Wheel Clan",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },

/// DUNGEONS MAPS
  {
    filename: "ArcanumBase/Arbalah'sHouse.png",
    displayName: "Arbalah's House",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 1031, y: 605, zoom: 1 },
    labels: [
      { x: 912, y: 477, text: "Quest: The Priest and the Bandit (Part II)", description: "", category: "quest" },
    ],
  }, 
  {
    filename: "ArcanumBase/AMysteriousLocation.png",
    displayName: "A mysterious location",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: { x: 796, y: 1211, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/AncientRuins.png",
    displayName: "Ancient Ruins",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: { x: 655, y: 493, zoom: 1 },
    labels: [
      { x: 835, y: 390, text: "Mystic Chest", description: "", category: ["chest"] },
    ],
  },
  {
    filename: "ArcanumBase/AncientTemple.png",
    displayName: "Ancient Temple",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: { x: 1026, y: 849, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/Bolo'sAltar.png",
    displayName: "Bolo's Altar",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 763, y: 587, zoom: 1 },
    // background: "#000000",
    labels: [],
  }, 
  {
    filename: "ArcanumBase/CrashSite.jpg",
    displayName: "Crash Site",
    modGroup: "Other locations",
    typemap: "local",
    music: "music/wilderness.flac",
    defaultView: { x: 2145, y: 1331, zoom: 1 },
    background: "#000000",
    labels: [
      { x: 2353, y: 1112, text: "Camera", description: "", category: "quest" },
      { x: 2872, y: 1312, text: "Letter", description: "", category: "quest" },
      { x: 3239, y: 894, text: "Crash Site - Cave", description: "", category: "waypoint", targetMapFilename: "Crash Site - Cave" },
      { x: 2165, y: 1323, text: "Virgil", description: "", category: "followers" },
      { x: 1309, y: 1733, text: "Magick Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/ElvenRuins.png",
    displayName: "Elven Ruins",
    modGroup: "Other locations",
    typemap: "local",
    //music: 
    defaultView: { x: 837, y: 611, zoom: 1 },
    //background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/ForbiddenPit.png",
    displayName: "Forbidden Pit",
    modGroup: "Other locations",
    typemap: "local",
    //music: 
    defaultView: { x: 1076, y: 399, zoom: 1 },
    //background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/HalfOgreIsland.jpg",
    displayName: "Half Ogre Island",
    modGroup: "Other locations",
    typemap: "local",
    //music: 
    defaultView: { x: 2145, y: 1331, zoom: 1 },
    //background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Kerlin'sAltar.png",
    displayName: "Kerlin’s Altar",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 813, y: 464, zoom: 1 },
    // background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/NasrudinRestingPlace.jpg",
    displayName: "Land Bridge",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 1435, y: 735, zoom: 1 },
    labels: [],
  }, 
  {
    filename: "ArcanumBase/NasrudinRestingPlace.jpg",
    displayName: "Nasrudin's Resting Place",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 3144, y: 2443, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/IronClan_Gate.jpg",
    displayName: "Secret Entrance to the Iron Clan",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 3100, y: 1730, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/Razor'sPointe.png",
    displayName: "Razor’s Pointe",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 1615, y: 594, zoom: 1 },
    labels: [],
  }, 
  {
    filename: "ArcanumBase/ShadesBeach.png",
    displayName: "Shades Beach",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 1617, y: 1238, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/SimonFahrkusShack.png",
    displayName: "Simon Fahrkus' Shack",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 705, y: 555, zoom: 1 },
    labels: [
      { x: 828, y: 498, text: "Quest: The Priest and the Bandit (Part III)", description: "", category: "quest" },
    ],
  },
  {
    filename: "ArcanumBase/SmallCamp.png",
    displayName: "Small Camp",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 816, y: 711, zoom: 1 },
    // background: "#000000",
    labels: [
      { x: 1170, y: 246, text: "Arcane Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/StrangePond.jpg",
    displayName: "Strange Pond",
    modGroup: "Other locations",
    typemap: "local",
    //music: No music here.
    defaultView: { x: 2532, y: 562, zoom: 1 },
    labels: [
      { x: 1501, y: 1146, text: "Arcane Chest", description: "Always contains a Ring of Shadows", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/Black.Mountain.Mines.png",
    displayName: "The Black Mountain Mines",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheBog.jpg",
    displayName: "The Bog",
    modGroup: "Other locations",
    typemap: "local",
    //music: No music here.
    defaultView: { x: 1396, y: 1442, zoom: 1 },
    labels: [
      { x: 1563, y: 789, text: "Wood Chest", description: "Contains an Arcane Great Sword and an Axe of Creeping Death.", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/TheBrokenCathedral.png",
    displayName: "The Broken Cathedral",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [
      { x: 1061, y: 524, text: "Arcane Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/TheColdPlace.jpg",
    displayName: "The Cold Place",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 911, y: 1701, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheLairofBellerogrim.jpg",
    displayName: "The Lair of Bellerogrim",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 3245, y: 2009, zoom: 1 },
    labels: [
      { x: 1418, y: 1344, text: "Underground", description: "", category: "waypoint" },
    ],
  },
  {
    filename: "ArcanumBase/TheLairOfTheBogaroth.png",
    displayName: "The Lair of the Bogaroth",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 880, y: 646, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheOldLagoon.jpg",
    displayName: "The Old Lagoon",
    modGroup: "Other locations",
    // music: no music here
    typemap: "local",
    defaultView: { x: 1917, y: 1048, zoom: 1 },
    labels: [],
  },
    {
    filename: "ArcanumBase/ThePitOfFires.png",
    displayName: "The Pit of Fires",
    modGroup: "Other locations",
    music: "music/villages.flac",
    typemap: "local",
    defaultView: { x: 1098, y: 606, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/ThePlaceOfLostVoices.jpg",
    displayName: "The Place of Lost Voices",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 7612, y: 2443, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheWilliamsonHomestead.png",
    displayName: "The Williamson Homestead",
    modGroup: "Other locations",
    // music: no music here
    typemap: "local",
    defaultView: { x: 1306, y: 323, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/Torg'sAltar.png",
    displayName: "Torg’s Altar",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 763, y: 587, zoom: 1 },
    // background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/TorinQuarry.png",
    displayName: "Torin Quarry",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 1470, y: 762, zoom: 1 },
    // background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/VillageOfTheAshlagTribe.png",
    displayName: "Village of the Ashlag Tribe",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [],
  }, 
  {
    filename: "ArcanumBase/VendigrothRuinssmall.jpg",
    displayName: "Vendigroth Ruins",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [],
  },
/* 
  {
    filename: "ArcanumBase/Void_01.jpg",
    displayName: "Void",
    modGroup: "Other locations",
    typemap: "local",
    labels: []
  },
*/
  {
    filename: "ArcanumBase/Vollinger'sMeetingPlace.png",
    displayName: "Vollinger’s Meeting Place",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 852, y: 617, zoom: 1 },
    labels: [],
  },

/// SUBMAPS

  {
    filename: "ArcanumBase/Ashbury-Castle1.png",
    displayName: "Ashbury Castle - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium1.png",
    displayName: "Ashbury Crematorium - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 618, y: 419, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium2.png",
    displayName: "Ashbury Crematorium - Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1339, y: 1240, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium3.png",
    displayName: "Ashbury Crematorium - Level 3",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 322, y: 641, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-ScienticiansUnderground.png",
    displayName: "Scienticians Underground",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 655, y: 408, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Black.Mountain.Mines_01.jpg",
    displayName: "The Black Mountain Mines - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 108, y: 614, zoom: 1 },
    parentFilename: "ArcanumBase/Black.Mountain.Mines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/Black.Mountain.Mines_02.jpg",
    displayName: "The Black Mountain Mines - Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 773, y: 405, zoom: 1 },
    parentFilename: "ArcanumBase/Black.Mountain.Mines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/Black.Mountain.Mines_03.jpg",
    displayName: "The Black Mountain Mines - Level 3",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1254, y: 941, zoom: 1 },
    parentFilename: "ArcanumBase/Black.Mountain.Mines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/CrashSite-Cave.png",
    displayName: "Crash Site - Cave",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 266, y: 583, zoom: 1 },
    music: "music/mines.flac",
    parentFilename: "ArcanumBase/CrashSite.jpg",
    background: "#000000",
    labels: [
      { x: 234, y: 629, text: "Crash Site", description: "", category: "waypoint", targetMapFilename: "Crash Site", targetX: 3239, targetY: 894},
      { x: 360, y: 191, text: "Quest: The Priest and the Bandit (Part I)", description: "", category: "quest" },
    ],
  }, 
  {
    filename: "ArcanumBase/IronClan_ThroneHall.jpg",
    displayName: "Iron Clan - Throne Hall",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3740, y: 1571, zoom: 1 },
    parentFilename: "ArcanumBase/IronClan_Gate.jpg",
    labels: [],
  }, 
  {
    filename: "ArcanumBase/ShroudedHillsTemple.png",
    displayName: "Panarii Temple",
    modGroup: "Arcanum",
    typemap: "local",
    music: "music/mines.flac",
    defaultView: { x: 545, y: 599, zoom: 1 },
    parentFilename: "ArcanumBase/ShroudedHillssmall.jpg",
    labels: [
      { x: 545, y: 599, text: "Shrouded Hills", description: "", category: "waypoint" , targetMapFilename: "Shrouded Hills", targetX: 5914, targetY: 3147},
    ],
  },
  {
    filename: "ArcanumBase/ShroudedHillsBessieToone.png",
    displayName: "Bessie Toone Mine",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1697, y: 805, zoom: 1 },
    parentFilename: "ArcanumBase/ShroudedHillssmall.jpg",
    labels: [
      { x: 1697, y: 805, text: "Shrouded Hills", description: "", category: "waypoint" , targetMapFilename: "Shrouded Hills", targetX: 2179, targetY: 3272},
    ],
  },

  {
    filename: "ArcanumBase/StillwaterGiantsCave.png",
    displayName: "Stillwater Giants Cave",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Stillwater.jpg",
    labels: [
      { x: 432, y: 719, text: "Stillwater", description: "", category: "waypoint", targetMapFilename: "Stillwater", targetX: 4211, targetY: 1759, targetZoom: 1.0},
      { x: 1264, y: 483, text: "The Stillwater Giant (Part III)", description: "", category: "quest", linkedLabels: ["The Stillwater Giant (Part IV)"] },
    ]
  },
  {
    filename: "ArcanumBase/StillwaterDrogsCave.png",
    displayName: "Drogs Cave",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Stillwater.jpg",
    labels: [
      { x: 850, y: 597, text: "Stillwater", description: "", category: "waypoint" , targetMapFilename: "Stillwater"},
    ]
  },
  {
    filename: "ArcanumBase/Tarant_02.jpg",
    displayName: "Tarant New Sewers",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    labels: [
      { x: 1202, y: 863, text: "Tarant", description: "", category: "waypoint" },
      { x: 2023, y: 1108, text: "Tarant", description: "", category: "waypoint" },
      { x: 2044, y: 997, text: "Tarant", description: "", category: "waypoint" },
      { x: 2235, y: 529, text: "Tarant", description: "", category: "waypoint" },
    ]
  },
  {
    filename: "ArcanumBase/Tarant_03.jpg",
    displayName: "Tarant Old Sewers",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    labels: [
      { x: 564, y: 1778, text: "Tarant", description: "", category: "waypoint" },
      { x: 1714, y: 2153, text: "Tarant", description: "", category: "waypoint" },
      { x: 3805, y: 2239, text: "Tarant", description: "", category: "waypoint" },
      { x: 4273, y: 1436, text: "Tarant", description: "", category: "waypoint" },
    ]
  },
  {
    filename: "ArcanumBase/Tulla_02.jpg",
    displayName: "Simeons Chamber",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tullasmall.jpg",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanMainHall.jpg",
    displayName: "Wheel Clan - Main Hall",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_02.jpg",
    displayName: "Vendigroth Ruins - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_04.jpg",
    displayName: "Vendigroth Ruins - Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_03.jpg",
    displayName: "Vendigroth Ruins - Velorien's Altar",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_05.jpg",
    displayName: "Vendigroth Ruins - Laboratory",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanCommecialDistrict.jpg",
    displayName: "Wheel Clan - Commercial District",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanMine.jpg",
    displayName: "Wheel Clan - Mine",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanThroneHall.jpg",
    displayName: "Wheel Clan - Throne Hall",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
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
    filename: "Forgotten Places/ForgottenPlaces-BigWoodsLodge.png",
    displayName: "Big Woods Lodge",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 970, y: 1098, zoom: 1},
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
    filename: "Forgotten Places/ForgottenPlaces-Leahbo.jpg",
    displayName: "Leahbo",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 865, y: 1028, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Lynchbany.jpg",
    displayName: "Lynchbany",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 2761, y: 2824, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Marsyona.png",
    displayName: "Marsyona",
    modGroup: "Forgotten Places",
    typemap: "local",
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
    filename: "Forgotten Places/ForgottenPlaces-TempterOfFate.png",
    displayName: "The Tempter of Fate",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-TheCavernOfMadness.png",
    displayName: "The Cavern of Madness",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Vaselan.png",
    displayName: "Vaselan",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },

/// MODULES

  {
    filename: "Tomb of Tol Gurdur/TombTolGurdurCity.jpg",
    displayName: "City",
    modGroup: "Tomb of Tol Gurdur",
    typemap: "local",
    defaultView: { x: 901, y: 531, zoom: 0.8},
    labels: [
      { x: 2691, y: 1761, text: "Teleport to Underground", description: "", category: "waypoint", targetMapFilename: "Underground"},
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
    filename: "Treasure Island/TreasureUnderground.png",
    displayName: "Treasure Island Underground",
    modGroup: "Treasure Island",
    typemap: "local",
    defaultView: { x: 2085, y: 706, zoom: 0.8},
    background: "#000000",
    labels: [
      { x: 2085, y: 706, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 5262, targetY: 1424}, // A
      { x: 2327, y: 164, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 2392, targetY: 1704}, // B
      { x: 2393, y: 1082, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 1785, targetY: 3456}, // C
      { x: 881, y: 891, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 1980, targetY: 2651}, // D
      { x: 2007, y: 1355, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 5604, targetY: 1559}, // E      
    ]
  }
];