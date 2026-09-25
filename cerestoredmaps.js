// Arcanum CE Restored - Map Database Manifest (CE Restored)
const CERestoredMapData = [
  {
    filename: "ArcanumBase/ArcanumWorldMap.jpg",
    displayName: "Arcanum Forgotten Places",
    modGroup: "CE Restored World Map",
    typemap: "overworld",
    altView: {
      icon: "Textures/itemimg/drawing.png",
      image: "ArcanumBase/ArcanumWorldMap.png"
    },
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [
      { x: 1057, y: 813, text: "Fan Graveyard", textX: 1115, textY: 825, targetMapFilename: "Fan Graveyard" },
      { x: 750, y: 560, text: "Old Blind Master", textX: 750, textY: 547, description: "See Quests For More Details.", targetMapFilename: "Old Blind Master" },
      { x: 618, y: 563, text: "Acererak's Tomb", textX: 618, textY: 563, description: "The forbidding entrance leading deep into a legendary dungeon.", targetMapFilename: "Acererak's Tomb" },
      { x: 1177, y: 879, text: "Big Woods Lodge", textX: 1176, textY: 879, targetMapFilename: "Big Woods Lodge" },
      { x: 488, y: 1358, text: "Black Rock Lighthouse", textX: 485, textY: 1359, targetMapFilename: "Black Rock Lighthouse" },
      { x: 1279, y: 1427, text: "Brandybuck", textX: 1337, textY: 1411, targetMapFilename: "Brandybuck" },
      { x: 774, y: 1268, text: "Cotswold", textX: 774, textY: 1266, targetMapFilename: "Cotswold" },
      { x: 428, y: 813, text: "Leahbo", textX: 503, textY: 812, targetMapFilename: "Leahbo" },
      { x: 1160, y: 894, text: "Lynchbany", textX: 1159, textY: 895, targetMapFilename: "Lynchbany" },
      { x: 1611, y: 1123, text: "Marsyona", textX: 1611, textY: 1123, targetMapFilename: "Marsyona" },
      { x: 900, y: 387, text: "Merchants' Faire", textX: 899, textY: 387, description: "A crowded gathering node for nomadic traders.", targetMapFilename: "Merchant's Faire" },
      { x: 1289, y: 1734, text: "Plainwicke Plantation", textX: 1290, textY: 1735, targetMapFilename: "Plainwicke Plantation" },
      { x: 393, y: 772, text: "Port Ruins", textX: 393, textY: 783, targetMapFilename: "Port Ruins (1)" },
      { x: 349, y: 755, text: "Port Ruins", textX: 347, textY: 765, targetMapFilename: "Port Ruins (2)" },
      { x: 306, y: 733, text: "Port Ruins", textX: 308, textY: 723, targetMapFilename: "Port Ruins (3)" },
      { x: 1286, y: 682, text: "Spider Cave", textX: 1287, textY: 682, targetMapFilename: "Spider Cave" },
      { x: 1465, y: 1596, text: "The Cavern of Madness", textX: 1466, textY: 1605, targetMapFilename: "The Cavern of Madness" },
      { x: 996, y: 1003, text: "The Tempter of Fate", textX: 997, textY: 1004, targetMapFilename: "The Tempter of Fate" },
      { x: 920, y: 1023, text: "Vaselan", textX: 920, textY: 1023, targetMapFilename: "Vaselan" },
      { x: 622, y: 1009, text: "Well of Lost Souls", textX: 621, textY: 1020, targetMapFilename: "Well of Lost Souls" },
      { x: 739, y: 573, text: "An Old Mine", textX: 738, textY: 572 },
      { x: 658, y: 670, text: "Mines of Dwarrowdelf", textX: 759, textY: 654 },
      { x: 658, y: 694, text: "Ancient Trail", textX: 657, textY: 694 },
      { x: 1252, y: 1712, text: "Norleigh Seahold", textX: 1250, textY: 1711 },
      { x: 1293, y: 1777, text: "Brookeside Plantation", textX: 1292, textY: 1777 },
      { x: 1309, y: 1785, text: "Freebooter's Pass", textX: 1419, textY: 1789 },
      { x: 1320, y: 1751, text: "Bone Hill", textX: 1415, textY: 1751 },
      { x: 361, y: 874, text: "Secret Landing", textX: 362, textY: 864 },
      { x: 367, y: 909, text: "Veloren Island", textX: 368, textY: 909 },
      { x: 1338, y: 1816, text: "Monaco", textX: 1337, textY: 1815 },
      { x: 1452, y: 1252, text: "Ivory Lake", textX: 1453, textY: 1267 },

      /*
      { x: 1060, y: 809, text: "Fan Graveyard", description: "", targetMapFilename: "Fan Graveyard" },
      { x: 750, y: 556, text: "Old Blind Master", description: "See Quests For More Details.", targetMapFilename: "Old Blind Master" },

      { x: 610, y: 555, text: "Acererak's Tomb", description: "The forbidding entrance leading deep into a legendary dungeon.", targetMapFilename: "Acererak's Tomb" },
        // To do: Inside
      { x: 1184, y: 879, text: "Big Woods Lodge", description: "", targetMapFilename: "Big Woods Lodge" },
      { x: 477, y: 1369, text: "Black Rock Lighthouse", description: "", targetMapFilename: "Black Rock Lighthouse" },
      { x: 1286, y: 1436, text: "Brandybuck", description: "", targetMapFilename: "Brandybuck"},
      { x: 770, y: 1274, text: "Cotswold", description: "", targetMapFilename: "Cotswold" },
      { x: 418, y: 811, text: "Leahbo", description: "", targetMapFilename: "Leahbo" },
      { x: 1166, y: 894, text: "Lynchbany", description: "", targetMapFilename: "Lynchbany" },
      { x: 1627, y: 1127, text: "Marsyona", description: "", targetMapFilename: "Marsyona" },
      { x: 899, y: 374, text: "Merchant's Faire", description: "A crowded gathering node for nomadic traders.", targetMapFilename: "Merchant's Faire" },
      { x: 1297, y: 1753, text: "Plainwicke Plantation", description: "", targetMapFilename: "Plainwicke Plantation" },
      { x: 383, y: 767, text: "Port Ruins", description: "", targetMapFilename: "Port Ruins (1)" },
      { x: 336, y: 749, text: "Port Ruins", description: "", targetMapFilename: "Port Ruins (2)" },
      { x: 295, y: 727, text: "Port Ruins", description: "", targetMapFilename: "Port Ruins (3)" }, // Temporary map
      { x: 1293, y: 676, text: "Spider Cave", description: "", targetMapFilename: "Spider Cave" },
      { x: 1477, y: 1610, text: "The Cavern of Madness", description: "", targetMapFilename: "The Cavern of Madness" },
        // To do: Inside
      { x: 1003, y: 1004, text: "The Tempter of Fate", description: "", targetMapFilename: "The Tempter of Fate" },
      { x: 923, y: 1024, text: "Vaselan", description: "", targetMapFilename: "Vaselan" },
      { x: 615, y: 1013, text: "Well of Lost Souls", description: "", targetMapFilename: "Well of Lost Souls" },

      { x: 732, y: 565, text: "An Old Mine", description: "" },
      { x: 654, y: 664, text: "Mines of Dwarrowdelf", description: "" }, // Together
      { x: 654, y: 687, text: "Ancient Trail", description: "" }, // Together
        // Work ongoing - map really too big (long!), maybe should be split in two with Mines?

      { x: 1261, y: 1727, text: "Norleigh Seahold", description: "" }, // Empty (Boat)
      { x: 1301, y: 1795, text: "Brookeside Plantation", description: "" }, // Empty (Sign welcome)
      { x: 1317, y: 1802, text: "Freebooter's Pass", description: "" }, // Empty
      { x: 1329, y: 1770, text: "Bone Hill", description: "" }, // Empty    
      { x: 354, y: 871, text: "Secret Landing", description: "" }, // Empty
      { x: 358, y: 908, text: "Veloren Island", description: "" }, // Empty
      { x: 1348, y: 1835, text: "Monaco", description: "" }, // Empty
      { x: 1464, y: 1259, text: "Ivory Lake", description: "" }, // Empty
      */
    ]
  },

/// CE RESTORED

  {
    filename: "Arcanum CE Restored/OldBlindMaster.png",
    displayName: "Old Blind Master",
    modGroup: "Arcanum CE Restored",
    labels: []
  },
  {
    filename: "Arcanum CE Restored/FanGraveyard.png",
    displayName: "Fan Graveyard",
    modGroup: "Arcanum CE Restored",
    defaultView: { x: 1922, y: 280, zoom: 1 },
    labels: []
  },

/// FORGOTTEN PLACES

  {
    filename: "Forgotten Places/ForgottenPlaces-AcereraksTombOutside.png",
    displayName: "Acererak's Tomb",
    modGroup: "Forgotten Places",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-BigWoodsLodge.png",
    displayName: "Big Woods Lodge",
    modGroup: "Forgotten Places",
    defaultView: { x: 970, y: 1098, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-BlackRockLighthouse",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 6958,
    height: 3680,
    displayName: "Black Rock Lighthouse",
    modGroup: "Forgotten Places",
    defaultView: { x: 3769, y: 1727 },
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Brandybuck.jpg",
    displayName: "Brandybuck",
    modGroup: "Forgotten Places",
    defaultView: { x: 3383, y: 4382, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Cotswold.png",
    displayName: "Cotswold",
    modGroup: "Forgotten Places",
    defaultView: { x: 865, y: 1028, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Leahbo",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 9720,
    height: 4656,
    displayName: "Leahbo",
    modGroup: "Forgotten Places",
    defaultView: { x: 6596, y: 2036 }, // Good
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Lynchbany.jpg",
    displayName: "Lynchbany",
    modGroup: "Forgotten Places",
    defaultView: { x: 2761, y: 2824, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Marsyona.png",
    displayName: "Marsyona",
    modGroup: "Forgotten Places",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-MerchantsFair.png",
    displayName: "Merchant's Faire",
    modGroup: "Forgotten Places",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-PlainwickePlantation.jpg",
    displayName: "Plainwicke Plantation",
    modGroup: "Forgotten Places",
    defaultView: { x: 7132, y: 4143, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-PortRuins-1.png",
    displayName: "Port Ruins (1)",
    modGroup: "Forgotten Places",
    defaultView: { x: 1306, y: 581, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-PortRuins-2.png",
    displayName: "Port Ruins (2)",
    modGroup: "Forgotten Places",
    defaultView: { x: 798, y: 719, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-PortRuins-3.jpg",
    displayName: "Port Ruins (3)",
    modGroup: "Forgotten Places",
    defaultView: { x: 649, y: 3082 }, // Good for temp image
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-SpiderCave.png",
    displayName: "Spider Cave",
    modGroup: "Forgotten Places",
    defaultView: { x: 993, y: 710 }, // Good
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-TempterOfFate",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 5840,
    height: 3625,
    displayName: "The Tempter of Fate",
    modGroup: "Forgotten Places",
    defaultView: { x: 2427, y: 1799 }, // Good 
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-TheCavernOfMadness.png",
    displayName: "The Cavern of Madness",
    modGroup: "Forgotten Places",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Vaselan.png",
    displayName: "Vaselan",
    modGroup: "Forgotten Places",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-WellOfLostSouls.jpg",
    displayName: "Well of Lost Souls",
    modGroup: "Forgotten Places",
    defaultView: { x: 8550, y: 2796, zoom: 1},
    labels: []
  },
];
