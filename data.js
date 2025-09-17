// Définition des icônes
const ICO_FOREUSE = "assets/foreuse.png";
const CAT_FOREUSE = "Foreuse colossale";
const CAT_FREGATE = "Frégate de classe Exil";
const ICO_FREGATE = "assets/Fregate.png";
const ICO_FREGATE_100 = "assets/Fregate100.png";
const CAT_CANON = "Grand Séparateur";
const ICO_CANON = "assets/Grand_Separateur.png";
const CAT_MINI_BOSS = "Strikers de troisiéme génération"
const ICO_MINI_BOSS = "assets/Boss.png";
const CAT_CONSTANTINE = "Constantine";
const ICO_CONSTANTINE = "assets/Constantine.png";
const CAT_VAISSEAU_RENFORTS = "Vaisseau de renforts"
const ICO_VAISSEAU_RENFORTS = "assets/Vaisseaux_Renforts.png";
const ICO_VAISSEAU_RENFORTS_POSSIBLE = "assets/Vaisseaux_Renforts_Possible.png";
const CAT_FUSEE = "Fusées cargo";
const ICO_FUSEE = "assets/Fusee.png";
const CAT_CAISSE_MUNITIONS = "Caisse à munitions";
const ICO_CAISSE_MUNITIONS = "assets/Munition.png";
const CAT_REPARATEUR = "Station de réparation"
const ICO_REPARATEUR = "assets/Reparation.png";
const CAT_ALLOSAURE = "Allosaure"
const ICO_ALLOSAURE = "assets/ALLOSAURE.png";
const CAT_MAKALU = "MAKALU"
const ICO_MAKALU = "assets/Makalu.png";

const ICONS_DATA = [
  // #region Station de réparation
  { category: CAT_REPARATEUR, coords: [923,956], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [949,933], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [914,696], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [864,648], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [858,200], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [366,82], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [339,171], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [235,228], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [229,256], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [336,316], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [414,356], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [468,567], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [439,559], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [148,539], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [169,520], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [219,962], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [176,868], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [539,941], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [623,917], icon: ICO_REPARATEUR },
  // #endregion
  // #region Caisse à munitions
  // #endregion
  // #region Fusées cargo
  { category: CAT_FUSEE, coords: [769.25, 170.5], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [157.5, 915.5], icon: ICO_FUSEE, image: "assets/capture/20250830142353_1.webp" },
  { category: CAT_FUSEE, coords: [145.25, 867.25], icon: ICO_FUSEE, image: "assets/capture/20250830142110_1.webp" },
  { category: CAT_FUSEE, coords: [84.25, 732], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [287.5, 664], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [140.25, 531.5], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [201.25, 259.25], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [204, 109], icon: ICO_FUSEE, image: "assets/capture/20250829224608_1.webp" },
  { category: CAT_FUSEE, coords: [462.75, 50.75], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [553, 222.25], icon: ICO_FUSEE, image: "assets/capture/20250829225210_1.webp" },
  { category: CAT_FUSEE, coords: [616, 124], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [904.75, 917.25], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [876.25, 802.5], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [893.25, 232], icon: ICO_FUSEE, image: "assets/capture/20250829231856_1.webp" },
  { category: CAT_FUSEE, coords: [363.25, 936.25], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [589.5, 916.75], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [329.25, 799.25], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [645.5, 349.75], icon: ICO_FUSEE },
  // #endregion
  // #region Vaisseaux de renforts
  { category: CAT_VAISSEAU_RENFORTS, coords: [852.5, 914], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829232753_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [810, 807.5], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829221544_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [569, 919.25], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [363, 924.25], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [186, 942.25], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250830142834_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [122.5, 863.25], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250830142125_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [124.25, 541.25], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [196.75, 312.25], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [242.25, 107], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829224425_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [325.75, 121.5], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829224651_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [457.75, 42.75], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829224907_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [563, 206.75], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829225210_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [598, 120], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [698.75, 324.5], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829230715_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [857.75, 105.25], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829231414_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [794.75, 228.25], icon: ICO_VAISSEAU_RENFORTS_POSSIBLE, image: "assets/capture/20250829231728_1.webp", description: "Il n’est pas sûr à 100% : de nombreuses fois j’ai nettoyé la zone sans qu’il apparaisse, et je ne connais pas la condition pour le faire apparaître." },
  { category: CAT_VAISSEAU_RENFORTS, coords: [857, 278.75], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [337.5, 260], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [405, 842.5], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [654.75, 529.25], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [584.75, 925], icon: ICO_VAISSEAU_RENFORTS_POSSIBLE, image: "assets/capture/20250829222925_1.webp", description: "Il est possible d'avoir un deuxiéme vaisseaux de renfort aprés le premier (pas à 100%)." },
  // #endregion
  // #region Fregate
  { category: CAT_FREGATE, coords: [646.25, 921.25], icon: ICO_FREGATE, image: "assets/capture/20250829221815_1.webp" },
  { category: CAT_FREGATE, coords: [373, 958.25], icon: ICO_FREGATE, image: "assets/capture/20250829234747_1.webp" },
  { category: CAT_FREGATE, coords: [506.25, 950.75], icon: ICO_FREGATE },
  { category: CAT_FREGATE, coords: [64.75, 733.25], icon: ICO_FREGATE },
  { category: CAT_FREGATE, coords: [87, 509.5], icon: ICO_FREGATE },
  { category: CAT_FREGATE, coords: [254.25, 58.25], icon: ICO_FREGATE },
  { category: CAT_FREGATE, coords: [317.5, 942.5], icon: ICO_FREGATE_100 },
  { category: CAT_FREGATE, coords: [768, 901.25], icon: ICO_FREGATE_100, image: "assets/capture/20250829221634_1.webp" },
  { category: CAT_FREGATE, coords: [96.75, 328.75], icon: ICO_FREGATE_100, image: "assets/capture/20250829224305_1.webp" },
  { category: CAT_FREGATE, coords: [93.5, 284.75], icon: ICO_FREGATE_100, image: "assets/capture/20250829224305_1.webp" },
  // #endregion
  // #region Constantine
  { category: CAT_CONSTANTINE, coords: [876, 888.75], icon: ICO_CONSTANTINE, image: "assets/capture/20250829232219_1.webp" },
  { category: CAT_CONSTANTINE, coords: [596.25, 966.25], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [91.5, 781.5], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [256.75, 261.5], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [464, 339.5], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [283, 66], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [411, 134.5], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [80.75, 482.25], icon: ICO_CONSTANTINE },
  // #endregion
  // #region MAKALU
  { category: CAT_MAKALU, coords: [607, 100], icon: ICO_MAKALU, image: "assets/capture/20250831192852_1.webp" },
  { category: CAT_MAKALU, coords: [843, 252], icon: ICO_MAKALU },
  { category: CAT_MAKALU, coords: [448, 552], icon: ICO_MAKALU },
  { category: CAT_MAKALU, coords: [597, 469], icon: ICO_MAKALU },
  // #endregion
  // #region Canon
  { category: CAT_CANON, coords: [875.25, 953], icon: ICO_CANON },
  { category: CAT_CANON, coords: [569, 887.75], icon: ICO_CANON },
  { category: CAT_CANON, coords: [405.5, 922], icon: ICO_CANON },
  { category: CAT_CANON, coords: [218.25, 920.5], icon: ICO_CANON },
  { category: CAT_CANON, coords: [143.75, 519], icon: ICO_CANON },
  { category: CAT_CANON, coords: [226.75, 86], icon: ICO_CANON },
  { category: CAT_CANON, coords: [353.75, 144.25], icon: ICO_CANON },
  { category: CAT_CANON, coords: [491, 37], icon: ICO_CANON },
  { category: CAT_CANON, coords: [944.25, 300.5], icon: ICO_CANON },
  { category: CAT_CANON, coords: [892.25, 601.5], icon: ICO_CANON },
  { category: CAT_CANON, coords: [800, 819.25], icon: ICO_CANON },
  { category: CAT_CANON, coords: [300.25, 662.75], icon: ICO_CANON },
  { category: CAT_CANON, coords: [204, 269.5], icon: ICO_CANON },
  { category: CAT_CANON, coords: [335, 330.5], icon: ICO_CANON },
  { category: CAT_CANON, coords: [796, 119.75], icon: ICO_CANON },
  { category: CAT_CANON, coords: [135.25, 844.25], icon: ICO_CANON },
  { category: CAT_CANON, coords: [731.75, 258.75], icon: ICO_CANON },
  // #endregion
  // #region Foreuse
  { category: CAT_FOREUSE, coords: [670.25, 555], icon: ICO_FOREUSE },
  { category: CAT_FOREUSE, coords: [411.5, 805.5], icon: ICO_FOREUSE },
  { category: CAT_FOREUSE, coords: [283.25, 678.25], icon: ICO_FOREUSE },
  { category: CAT_FOREUSE, coords: [179.75, 86.75], icon: ICO_FOREUSE },
  { category: CAT_FOREUSE, coords: [540.25, 224], icon: ICO_FOREUSE },
  { category: CAT_FREGATE, coords: [941, 898.5], icon: ICO_FREGATE },
  // #endregion
  // #region Allosaure
  { category: CAT_ALLOSAURE, coords: [352, 166], icon: ICO_ALLOSAURE, image: "assets/capture/20250829224743_1.webp" },
  { category: CAT_ALLOSAURE, coords: [812, 171], icon: ICO_ALLOSAURE, image: "assets/capture/20250829231104_1.webp" },
  { category: CAT_ALLOSAURE, coords: [150, 850], icon: ICO_ALLOSAURE, image: "assets/capture/20250830142011_1.webp" },
  // #endregion
  // #region MiniBoss
  { category: CAT_MINI_BOSS, coords: [147.75, 913], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [342.25, 917.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [387.25, 930], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [525, 940.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [572.25, 908.25], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [863, 898], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [846.75, 866], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [782.75, 835.25], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [899.5, 683.25], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [859.75, 616.75], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [923.5, 280], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [686.5, 541.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [828, 106.25], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [712.5, 317.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [909.75, 209.75], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [623, 115], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [559, 234.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [479.75, 55.75], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [260.5, 86], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [222.5, 274.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [215.25, 290.25], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [170, 514], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [270.5, 681], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [298.75, 677.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [419.5, 814.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [135.25, 869.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [466, 557.5], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [343.5, 280], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [466.75, 357.75], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [121.5, 755.25], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [446, 533.5], icon: ICO_MINI_BOSS },
  // #endregion

];

const CAT_CRISTAUX = "Zone de cristaux (corites et sauvetages)";
const COLOR_CRISTAUX = "#1f61dcff";
const CAT_RENTABLE = "Zone rentable de farm";
const COLOR_RENTABLE = "#1fd449ff";

// Définition des zones
const ZONES_DATA = [
  // #region Zone cristaux
  { category: CAT_CRISTAUX, center: [545, 220], radius: 23, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [185, 82], radius: 22, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [340, 334], radius: 27, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [361, 274], radius: 24, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [179, 536], radius: 35, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [217, 940], radius: 44, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [415, 803], radius: 24, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [609, 740], radius: 37, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [624, 620], radius: 32, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [675, 550], radius: 23, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [239, 262], radius: 33, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [910, 115], radius: 61, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [926, 678], radius: 37, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [771, 766], radius: 25, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [131, 710], radius: 23, color: COLOR_CRISTAUX },
  { category: CAT_CRISTAUX, center: [455, 545], radius: 47, color: COLOR_CRISTAUX },
  // #endregion
  // #region Zone rentable
  { category: CAT_RENTABLE, center: [97, 298], radius: 46, color: COLOR_RENTABLE },
  { category: CAT_RENTABLE, center: [581, 921], radius: 68, color: COLOR_RENTABLE },
  { category: CAT_RENTABLE, center: [877, 855], radius: 111, color: COLOR_RENTABLE },
  { category: CAT_RENTABLE, center: [328, 931], radius: 26, color: COLOR_RENTABLE },
  // #endregion
];