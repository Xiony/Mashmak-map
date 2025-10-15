// Définition des icônes
const ICO_FOREUSE = "assets/Foreuse.png";
const CAT_FOREUSE = "Foreuse colossale";
const CAT_FREGATE = "Frégate de classe Exil";
const ICO_FREGATE = "assets/Fregate.png";
const ICO_FREGATE_100 = "assets/Fregate100.png";
const CAT_CANON = "Grand Séparateur";
const ICO_CANON = "assets/Grand_Separateur.png";
const CAT_MINI_BOSS = "Strikers de troisiéme génération"
const ICO_MINI_BOSS = "assets/Boss.png";
const CAT_CONSTANTINE = "CONSTANTINE";
const ICO_CONSTANTINE = "assets/Constantine.png";
const CAT_VAISSEAU_RENFORTS = "Vaisseau de renforts"
const ICO_VAISSEAU_RENFORTS = "assets/Vaisseaux_Renforts.png";
const CAT_MARTLET = "MARTLET"
const ICO_MARTLET = "assets/Martlet.png";
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
const CAT_CAISSE_RAVITAILLEMENT = "Caisse de ravitaillement"
const ICO_CAISSE_RAVITAILLEMENT = "assets/Caisse_Ravitaillement.png";
const CAT_DONJON_BLEU = "Zone restreintes bleu"
const ICO_DONJON_BLEU = "assets/donjon_bleu.png";
const ICO_DONJON_BLEU_1 = "assets/donjon_bleu_1.png";
const ICO_DONJON_BLEU_2 = "assets/donjon_bleu_2.png";
const ICO_DONJON_BLEU_3 = "assets/donjon_bleu_3.png";
const OBJ_DONJON_BLEU_1 = "Détruire 30 YUTSUYU (sniper). En moins de 2 min.";
const OBJ_DONJON_BLEU_2 = "Détruire 30 spécimens de corite. En moins de 3 min. <br> Il est conseillé de les détruire en priorité sans combattre les ennemis de la zone.";
const OBJ_DONJON_BLEU_3 = "Défendez le convois jusqu'à la fin de son parcours. En moins de 4 min.";
const CAT_DONJON_VIOLET = "Zone restreintes violet"
const ICO_DONJON_VIOLET = "assets/donjon_violet.png";
const ICO_DONJON_VIOLET_1 = "assets/donjon_violet_1.png";
const ICO_DONJON_VIOLET_2 = "assets/donjon_violet_2.png";
const ICO_DONJON_VIOLET_3 = "assets/donjon_violet_3.png";
const ICO_DONJON_VIOLET_4 = "assets/donjon_violet_4.png";
const OBJ_DONJON_VIOLET_1 = "Détruire un extracteur de corite colossal dans une mine. En moins de 4 min.";
const OBJ_DONJON_VIOLET_2 = "Détruire 3 foreuses rapidement. En moins de 5 min. <br> Il est conseillé de détruire en priorité les bras de sécurité fixer au plafond et les Splitters (ennemi en forme de toupis).";
const OBJ_DONJON_VIOLET_3 = "5 frégates à tuer rapidement. En moins de 4 min.";
const OBJ_DONJON_VIOLET_4 = "Zone aérienne, tuer 80 ennemis. En moins de 4 min.<br> Dans cette zone, il est possible d'utiliser des fusées.";
const CAT_DONJON_OR = "Zone restreintes or"
const ICO_DONJON_OR = "assets/donjon_or.png";
const ICO_DONJON_OR_1 = "assets/donjon_or_1.png";
const OBJ_DONJON_OR_1 = "Vous devez détruire HELLCAT, un boss volant extrêmement puissant. En moins de 4 min. <br>Dans cette zone, il est possible de tomber et de mourir, faites attention.";


const ICONS_DATA = [
  // #region donjon bleu
  { category: CAT_DONJON_BLEU, coords: [0, 0], icon: ICO_DONJON_BLEU },
  { category: CAT_DONJON_BLEU, coords: [481, 114], icon: ICO_DONJON_BLEU_1, description: { objectif: OBJ_DONJON_BLEU_1, sortieCoords: [874, 934], urlVideo: "https://youtu.be/9NjYfyimECE?si=9v1qXWYyDxLRLpij&t=65" }, image: "assets/capture/20251002215314_1.webp" },
  { category: CAT_DONJON_BLEU, coords: [874, 934], icon: ICO_DONJON_BLEU_1, description: { objectif: OBJ_DONJON_BLEU_1, sortieCoords: [481, 114], urlVideo: "https://youtu.be/9NjYfyimECE?si=9v1qXWYyDxLRLpij&t=65" }, image: "assets/capture/20251002215314_1.webp" },
  { category: CAT_DONJON_BLEU, coords: [338, 184], icon: ICO_DONJON_BLEU_2, description: { objectif: OBJ_DONJON_BLEU_2, sortieCoords: [139, 856], urlVideo: "https://youtu.be/9NjYfyimECE?si=Iaue51xiOc_XIzjb&t=543" }, image: "assets/capture/20251005221625_1.webp" },
  { category: CAT_DONJON_BLEU, coords: [139, 856], icon: ICO_DONJON_BLEU_2, description: { objectif: OBJ_DONJON_BLEU_2, sortieCoords: [338, 184], urlVideo: "https://youtu.be/9NjYfyimECE?si=Iaue51xiOc_XIzjb&t=543" }, image: "assets/capture/20251005221625_1.webp" },
  { category: CAT_DONJON_BLEU, coords: [866, 628], icon: ICO_DONJON_BLEU_3, description: { objectif: OBJ_DONJON_BLEU_3, sortieCoords: [940, 269], urlVideo: "https://youtu.be/9NjYfyimECE?si=FCQQyQuMxSYM2y8B&t=216" }, image: "assets/capture/20251001185949_1.webp" },
  { category: CAT_DONJON_BLEU, coords: [940, 269], icon: ICO_DONJON_BLEU_3, description: { objectif: OBJ_DONJON_BLEU_3, sortieCoords: [866, 628], urlVideo: "https://youtu.be/9NjYfyimECE?si=FCQQyQuMxSYM2y8B&t=216" }, image: "assets/capture/20251001185949_1.webp" },
  // #endregion
  // #region donjon violet
  { category: CAT_DONJON_VIOLET, coords: [0, 0], icon: ICO_DONJON_VIOLET },
  { category: CAT_DONJON_VIOLET, coords: [790, 432], icon: ICO_DONJON_VIOLET_1, description: { objectif: OBJ_DONJON_VIOLET_1, sortieCoords: [277, 394], urlVideo: "https://youtu.be/9NjYfyimECE?si=ZGWAnDK_LGykjgiz&t=702" }, image: "assets/capture/20251003180429_1.webp" },
  { category: CAT_DONJON_VIOLET, coords: [277, 394], icon: ICO_DONJON_VIOLET_1, description: { objectif: OBJ_DONJON_VIOLET_1, sortieCoords: [790, 432], urlVideo: "https://youtu.be/9NjYfyimECE?si=ZGWAnDK_LGykjgiz&t=702" }, image: "assets/capture/20251003180429_1.webp" },
  { category: CAT_DONJON_VIOLET, coords: [123, 446], icon: ICO_DONJON_VIOLET_2, description: { objectif: OBJ_DONJON_VIOLET_2, sortieCoords: [886, 96], urlVideo: "https://youtu.be/9NjYfyimECE?si=ZDTzduSbicbHrldD&t=867" }, image: "assets/capture/20251003181429_1.webp" },
  { category: CAT_DONJON_VIOLET, coords: [886, 96], icon: ICO_DONJON_VIOLET_2, description: { objectif: OBJ_DONJON_VIOLET_2, sortieCoords: [123, 446], urlVideo: "https://youtu.be/9NjYfyimECE?si=ZDTzduSbicbHrldD&t=867" }, image: "assets/capture/20251003181429_1.webp" },
  { category: CAT_DONJON_VIOLET, coords: [431, 910], icon: ICO_DONJON_VIOLET_3, description: { objectif: OBJ_DONJON_VIOLET_3, sortieCoords: [339, 319], urlVideo: "https://youtu.be/9NjYfyimECE?si=YUc2G_4YbWZf3a78&t=1062" }, image: "assets/capture/20251003180936_1.webp" },
  { category: CAT_DONJON_VIOLET, coords: [339, 319], icon: ICO_DONJON_VIOLET_3, description: { objectif: OBJ_DONJON_VIOLET_3, sortieCoords: [431, 910], urlVideo: "https://youtu.be/9NjYfyimECE?si=YUc2G_4YbWZf3a78&t=1062" }, image: "assets/capture/20251003180936_1.webp" },
  { category: CAT_DONJON_VIOLET, coords: [435, 582], icon: ICO_DONJON_VIOLET_4, description: { objectif: OBJ_DONJON_VIOLET_4, sortieCoords: [155, 148], urlVideo: "https://youtu.be/9NjYfyimECE?si=VFwtHFf2V6nFUN0f&t=1264" }, image: "assets/capture/20251003181242_1.webp" },
  { category: CAT_DONJON_VIOLET, coords: [155, 148], icon: ICO_DONJON_VIOLET_4, description: { objectif: OBJ_DONJON_VIOLET_4, sortieCoords: [435, 582], urlVideo: "https://youtu.be/9NjYfyimECE?si=VFwtHFf2V6nFUN0f&t=1264" }, image: "assets/capture/20251003181242_1.webp" },
  // #endregion
  // #region donjon or
  { category: CAT_DONJON_OR, coords: [0, 0], icon: ICO_DONJON_OR },
  { category: CAT_DONJON_OR, coords: [135, 752], icon: ICO_DONJON_OR_1, description: { objectif: OBJ_DONJON_OR_1, sortieCoords: [797, 804], urlVideo: "https://www.youtube.com/watch?v=9NjYfyimECE&t=1445s" }, image: "assets/capture/20251005221300_1.webp" },
  { category: CAT_DONJON_OR, coords: [797, 804], icon: ICO_DONJON_OR_1, description: { objectif: OBJ_DONJON_OR_1, sortieCoords: [135, 752], urlVideo: "https://www.youtube.com/watch?v=9NjYfyimECE&t=1445s" }, image: "assets/capture/20251005221300_1.webp" },
  // #endregion
  // #region Station de réparation
  { category: CAT_REPARATEUR, coords: [923, 956], icon: ICO_REPARATEUR, image: "assets/capture/20250923130240_1.webp" },
  { category: CAT_REPARATEUR, coords: [950, 939], icon: ICO_REPARATEUR, image: "assets/capture/20251004200121_1.webp" },
  { category: CAT_REPARATEUR, coords: [901, 692], icon: ICO_REPARATEUR, image: "assets/capture/20251004201512_1.webp" },
  { category: CAT_REPARATEUR, coords: [864, 648], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [869, 216], icon: ICO_REPARATEUR, image: "assets/capture/20250921163116_1.webp" },
  { category: CAT_REPARATEUR, coords: [366, 82], icon: ICO_REPARATEUR, image: "assets/capture/20251004220712_1.webp" },
  { category: CAT_REPARATEUR, coords: [339, 171], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [235, 228], icon: ICO_REPARATEUR, image: "assets/capture/20250917194853_1.webp" },
  { category: CAT_REPARATEUR, coords: [192, 260], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [347, 328], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [359, 272], icon: ICO_REPARATEUR, image: "assets/capture/20251004202424_1.webp" },
  { category: CAT_REPARATEUR, coords: [414, 365], icon: ICO_REPARATEUR, image: "assets/capture/20250920163955_1.webp" },
  { category: CAT_REPARATEUR, coords: [461, 571], icon: ICO_REPARATEUR, image: "assets/capture/20251002225838_1.webp" },
  { category: CAT_REPARATEUR, coords: [487, 574], icon: ICO_REPARATEUR, image: "assets/capture/20251003181139_1.webp" },
  { category: CAT_REPARATEUR, coords: [148, 539], icon: ICO_REPARATEUR, image: "assets/capture/20250917193935_1.webp" },
  { category: CAT_REPARATEUR, coords: [169, 520], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [219, 962], icon: ICO_REPARATEUR, image: "assets/capture/20250923131456_1.webp" },
  { category: CAT_REPARATEUR, coords: [176, 868], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [539, 941], icon: ICO_REPARATEUR },
  { category: CAT_REPARATEUR, coords: [623, 917], icon: ICO_REPARATEUR, image: "assets/capture/20250928165831_1.webp" },
  { category: CAT_REPARATEUR, coords: [881, 251], icon: ICO_REPARATEUR, image: "assets/capture/20250920121423_1.webp" },
  { category: CAT_REPARATEUR, coords: [130, 868], icon: ICO_REPARATEUR, image: "assets/capture/20250917193816_1.webp" },
  { category: CAT_REPARATEUR, coords: [577, 942], icon: ICO_REPARATEUR, image: "assets/capture/20250923140006_1.webp" },
  { category: CAT_REPARATEUR, coords: [234, 287], icon: ICO_REPARATEUR, image: "assets/capture/20250923141744_1.webp" },
  { category: CAT_REPARATEUR, coords: [365, 129], icon: ICO_REPARATEUR, image: "assets/capture/20250923211740_1.webp" },
  // #endregion
  // #region Caisse à munitions
  // #endregion
  // #region Fusées cargo
  { category: CAT_FUSEE, coords: [777, 194], icon: ICO_FUSEE, image: "assets/capture/20250921163029_1.webp" },
  { category: CAT_FUSEE, coords: [157, 915], icon: ICO_FUSEE, image: "assets/capture/20250920111819_1.webp" },
  { category: CAT_FUSEE, coords: [145, 867], icon: ICO_FUSEE, image: "assets/capture/20250830142110_1.webp" },
  { category: CAT_FUSEE, coords: [84, 732], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [287, 664], icon: ICO_FUSEE, image: "assets/capture/20251003182426_1.webp" },
  { category: CAT_FUSEE, coords: [150, 546], icon: ICO_FUSEE, image: "assets/capture/20250917193935_1.webp" },
  { category: CAT_FUSEE, coords: [201, 259], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [204, 109], icon: ICO_FUSEE, image: "assets/capture/20250924152935_1.webp" },
  { category: CAT_FUSEE, coords: [462, 50], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [553, 222], icon: ICO_FUSEE, image: "assets/capture/20250829225210_1.webp" },
  { category: CAT_FUSEE, coords: [616, 124], icon: ICO_FUSEE, image: "assets/capture/20251004200723_1.webp" },
  { category: CAT_FUSEE, coords: [904, 917], icon: ICO_FUSEE, image: "assets/capture/20251004195220_1.webp" },
  { category: CAT_FUSEE, coords: [876, 802], icon: ICO_FUSEE, image: "assets/capture/20251004201609_1.webp" },
  { category: CAT_FUSEE, coords: [893, 232], icon: ICO_FUSEE, image: "assets/capture/20250829231856_1.webp" },
  { category: CAT_FUSEE, coords: [363, 936], icon: ICO_FUSEE, image: "assets/capture/20250920112249_1.webp" },
  { category: CAT_FUSEE, coords: [589, 916], icon: ICO_FUSEE },
  { category: CAT_FUSEE, coords: [330, 803], icon: ICO_FUSEE, image: "assets/capture/20251004200238_1.webp" },
  { category: CAT_FUSEE, coords: [645, 349], icon: ICO_FUSEE, image: "assets/capture/20250920161357_1.webp" },
  { category: CAT_FUSEE, coords: [354, 129], icon: ICO_FUSEE, image: "assets/capture/20250921185340_1.webp" },
  { category: CAT_FUSEE, coords: [846, 632], icon: ICO_FUSEE, image: "assets/capture/20251003002102_1.webp" },
  { category: CAT_FUSEE, coords: [432, 332], icon: ICO_FUSEE, image: "assets/capture/20251004230218_1.webp" },
  // #endregion
  // #region Caisse de ravitaillement
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [184, 542], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/2025092411.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [838, 799], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250922143353_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [322, 925], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250923131309_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [431, 120], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250923141940_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [736, 241], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250923220336_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [129, 742], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250924123214_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [144, 849], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250924183314_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [473, 30], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250919214156_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [830, 158], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/160110.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [228, 234], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250924225035_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [888, 209], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250926153900_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [862, 596], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250923201858_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [353, 179], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250926204655_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [904, 944], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250926_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [605, 107], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250929003639_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [782, 815], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20250929225639_1.webp" },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [799, 873], icon: ICO_CAISSE_RAVITAILLEMENT },
  { category: CAT_CAISSE_RAVITAILLEMENT, coords: [612, 915], icon: ICO_CAISSE_RAVITAILLEMENT, image: "assets/capture/20251010215039_1.webp" },
  // #endregion
  // #region Vaisseaux de renforts
  { category: CAT_VAISSEAU_RENFORTS, coords: [852, 914], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829232753_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [810, 807], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829221544_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [569, 919], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [363, 924], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20251004195833_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [186, 942], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250830142834_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [122, 863], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250830142125_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [124, 541], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250917194030_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [196, 312], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [242, 107], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829224425_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [325, 121], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829224651_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [457, 42], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829224907_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [563, 206], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829225210_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [598, 120], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20251004194222_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [698, 324], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829230715_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [857, 105], icon: ICO_VAISSEAU_RENFORTS, image: "assets/capture/20250829231414_1.webp" },
  { category: CAT_VAISSEAU_RENFORTS, coords: [794, 228], icon: ICO_VAISSEAU_RENFORTS_POSSIBLE, image: "assets/capture/20250829231728_1.webp", description: "Il n’est pas sûr à 100% : de nombreuses fois j’ai nettoyé la zone sans qu’il apparaisse, et je ne connais pas la condition pour le faire apparaître." },
  { category: CAT_VAISSEAU_RENFORTS, coords: [857, 278], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [337, 260], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [405, 842], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [654, 529], icon: ICO_VAISSEAU_RENFORTS },
  { category: CAT_VAISSEAU_RENFORTS, coords: [584, 925], icon: ICO_VAISSEAU_RENFORTS_POSSIBLE, image: "assets/capture/20250829222925_1.webp", description: "Il est possible d'avoir un deuxiéme vaisseaux de renfort aprés le premier (pas à 100%)." },
  // #endregion
  // #region MARTLET
  { category: CAT_MARTLET, coords: [860, 589], icon: ICO_MARTLET, image: "assets/capture/20251004201311_1.webp", description: "Nettoyer la zone du haut pour le faire apparaitre." },
  { category: CAT_MARTLET, coords: [80, 716], icon: ICO_MARTLET, image: "assets/capture/20250917193708_1.webp", description: "Nettoyer la zone pour le faire apparaitre." },
  { category: CAT_MARTLET, coords: [362, 336], icon: ICO_MARTLET, image: "assets/capture/20251004202604_1.webp" },
  // #endregion
  // #region Fregate
  { category: CAT_FREGATE, coords: [646, 921], icon: ICO_FREGATE, image: "assets/capture/20250829221815_1.webp" },
  { category: CAT_FREGATE, coords: [373, 958], icon: ICO_FREGATE, image: "assets/capture/20250829234747_1.webp" },
  { category: CAT_FREGATE, coords: [506, 950], icon: ICO_FREGATE },
  { category: CAT_FREGATE, coords: [65, 733], icon: ICO_FREGATE, image: "assets/capture/20250917193525_1.webp" },
  { category: CAT_FREGATE, coords: [87, 509], icon: ICO_FREGATE },
  { category: CAT_FREGATE, coords: [254, 58], icon: ICO_FREGATE },
  { category: CAT_FREGATE, coords: [941, 898], icon: ICO_FREGATE, image: "assets/capture/20250928171014_1.webp" },
  { category: CAT_FREGATE, coords: [317, 942], icon: ICO_FREGATE_100, image: "assets/capture/20251004195802_1.webp" },
  { category: CAT_FREGATE, coords: [768, 901], icon: ICO_FREGATE_100, image: "assets/capture/20250829221634_1.webp" },
  { category: CAT_FREGATE, coords: [96, 328], icon: ICO_FREGATE_100, image: "assets/capture/20250917194507_1.webp" },
  { category: CAT_FREGATE, coords: [93, 284], icon: ICO_FREGATE_100, image: "assets/capture/20250829224305_1.webp" },
  // #endregion
  // #region Constantine
  { category: CAT_CONSTANTINE, coords: [876, 888], icon: ICO_CONSTANTINE, image: "assets/capture/20250829232219_1.webp" },
  { category: CAT_CONSTANTINE, coords: [596, 966], icon: ICO_CONSTANTINE, image: "assets/capture/20251013150748_1.webp" },
  { category: CAT_CONSTANTINE, coords: [91, 781], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [256, 261], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [464, 339], icon: ICO_CONSTANTINE },
  { category: CAT_CONSTANTINE, coords: [283, 66], icon: ICO_CONSTANTINE, image: "assets/capture/20251003162704_1.webp" },
  { category: CAT_CONSTANTINE, coords: [411, 134], icon: ICO_CONSTANTINE, image: "assets/capture/20251013230410_1.webp" },
  { category: CAT_CONSTANTINE, coords: [80, 482], icon: ICO_CONSTANTINE },
  // #endregion
  // #region MAKALU
  { category: CAT_MAKALU, coords: [607, 100], icon: ICO_MAKALU, image: "assets/capture/20250831192852_1.webp" },
  { category: CAT_MAKALU, coords: [843, 252], icon: ICO_MAKALU, image: "assets/capture/20250925172649_1.webp" },
  { category: CAT_MAKALU, coords: [448, 552], icon: ICO_MAKALU, image: "assets/capture/20250919200529_1.webp" },
  { category: CAT_MAKALU, coords: [597, 469], icon: ICO_MAKALU, image: "assets/capture/20251003231019_1.webp" },
  // #endregion
  // #region Canon
  { category: CAT_CANON, coords: [875, 953], icon: ICO_CANON, image: "assets/capture/20251004223413_1.webp" },
  { category: CAT_CANON, coords: [569, 887], icon: ICO_CANON },
  { category: CAT_CANON, coords: [405, 922], icon: ICO_CANON, image: "assets/capture/20251003181732_1.webp" },
  { category: CAT_CANON, coords: [218, 920], icon: ICO_CANON },
  { category: CAT_CANON, coords: [143, 519], icon: ICO_CANON, image: "assets/capture/20250917193914_1.webp" },
  { category: CAT_CANON, coords: [226, 86], icon: ICO_CANON },
  { category: CAT_CANON, coords: [353, 144], icon: ICO_CANON },
  { category: CAT_CANON, coords: [491, 37], icon: ICO_CANON },
  { category: CAT_CANON, coords: [944, 300], icon: ICO_CANON, image: "assets/capture/20251003182556_1.webp" },
  { category: CAT_CANON, coords: [892, 601], icon: ICO_CANON },
  { category: CAT_CANON, coords: [800, 819], icon: ICO_CANON, image: "assets/capture/20251004200029_1.webp" },
  { category: CAT_CANON, coords: [300, 662], icon: ICO_CANON, image: "assets/capture/20250917195241_1.webp" },
  { category: CAT_CANON, coords: [204, 269], icon: ICO_CANON },
  { category: CAT_CANON, coords: [332, 329], icon: ICO_CANON, image: "assets/capture/20251004202324_1.webp" },
  { category: CAT_CANON, coords: [796, 119], icon: ICO_CANON, image: "assets/capture/20251012230819_1.webp" },
  { category: CAT_CANON, coords: [135, 844], icon: ICO_CANON },
  { category: CAT_CANON, coords: [731, 258], icon: ICO_CANON },
  // #endregion
  // #region Foreuse
  { category: CAT_FOREUSE, coords: [670, 555], icon: ICO_FOREUSE, image: "assets/capture/20251003181550_1.webp" },
  { category: CAT_FOREUSE, coords: [411, 805], icon: ICO_FOREUSE, image: "assets/capture/20251003183221_1.webp" },
  { category: CAT_FOREUSE, coords: [283, 678], icon: ICO_FOREUSE, image: "assets/capture/20251004203005_1.webp" },
  { category: CAT_FOREUSE, coords: [179, 86], icon: ICO_FOREUSE, image: "assets/capture/20251004193938_1.webp" },
  { category: CAT_FOREUSE, coords: [540, 224], icon: ICO_FOREUSE, image: "assets/capture/20251003181506_1.webp" },
  // #endregion
  // #region Allosaure
  { category: CAT_ALLOSAURE, coords: [352, 166], icon: ICO_ALLOSAURE, image: "assets/capture/20250829224743_1.webp" },
  { category: CAT_ALLOSAURE, coords: [812, 171], icon: ICO_ALLOSAURE, image: "assets/capture/20250829231104_1.webp" },
  { category: CAT_ALLOSAURE, coords: [150, 850], icon: ICO_ALLOSAURE, image: "assets/capture/20250830142011_1.webp" },
  // #endregion
  // #region MiniBoss
  { category: CAT_MINI_BOSS, coords: [147, 913], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [342, 917], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [387, 930], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [525, 940], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [572, 908], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [863, 898], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [846, 866], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [782, 835], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [899, 683], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [859, 616], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [923, 280], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [686, 541], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [828, 106], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [712, 317], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [909, 209], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [623, 115], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [559, 234], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [479, 55], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [260, 86], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [222, 274], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [215, 290], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [185, 531], icon: ICO_MINI_BOSS, image: "assets/capture/20250917194246_1.webp" },
  { category: CAT_MINI_BOSS, coords: [270, 681], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [298, 677], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [419, 814], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [135, 869], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [466, 557], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [343, 280], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [466, 357], icon: ICO_MINI_BOSS },
  { category: CAT_MINI_BOSS, coords: [121, 755], icon: ICO_MINI_BOSS, image: "assets/capture/20250917193614_1.webp" },
  { category: CAT_MINI_BOSS, coords: [446, 533], icon: ICO_MINI_BOSS },
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
// Descriptions des icones
const DESC_FOREUSE = "Les positions des foreuses peuvent varier et sont indiquées sur la carte au début de la partie.";
const DESC_FREGATE = "Les icônes 100% indiquent les frégates toujours présentes, les autres peuvent varier.";
const DESC_CANON = "Les positions des canons peuvent varier et sont indiquées sur la carte au début de la partie.";
const DESC_MINI_BOSS = "Ils apparaissent en entrant dans la zone ou après avoir vaincu assez d’ennemis.";
const DESC_CONSTANTINE = "Boss rare pouvant apparaître aléatoirement sur la carte après un certain temps (il se peut qu’il n’apparaisse pas).";
const DESC_VAISSEAU_RENFORTS = "Ils apparaissent une fois les ennemis et leurs renforts de la zone détruits.";
const DESC_MARTLET = "Ils apparaissent une fois les ennemis et leurs renforts de la zone détruits.";
const DESC_FUSEE = "Elles apparaissent aléatoirement après l’attaque d’une zone et la destruction de plusieurs ennemis. Elles sont rares et peuvent ne pas apparaître";
const DESC_CAISSE_MUNITIONS = "Elles sont toujours présentes dans une zone, mais à un point ou à un autre.";
const DESC_REPARATEUR = "Elles sont toujours présentes dans une zone, mais à un point ou à un autre.";
const DESC_ALLOSAURE = "Des char présent à 100%";
const DESC_MAKALU = "Boss rare pouvant apparaître aléatoirement sur la carte après un certain temps (il se peut qu’il n’apparaisse pas).";
const DESC_CAISSE_RAVITAILLEMENT = "Caisse dorée unique. Trouvable dès le début, mais à ouvrir après 12-14 min. Contient 0 à 4 objets rares.";
const DESC_DONJON_BLEU = "Vous avez besoin d'un localisateur et une clé bleu pour y accéder (uniquement en équipe). 3 Disponible.";
const DESC_DONJON_VIOLET = "Vous avez besoin d'un localisateur et une clé violette pour y accéder (uniquement en équipe en mode difficile ou plus). 4 Disponible.";
const DESC_DONJON_OR = "Vous avez besoin d'un localisateur et une clé or pour y accéder.";

const CATEGORY_DESCRIPTIONS = {
  [CAT_FOREUSE]: DESC_FOREUSE,
  [CAT_FREGATE]: DESC_FREGATE,
  [CAT_CANON]: DESC_CANON,
  [CAT_MINI_BOSS]: DESC_MINI_BOSS,
  [CAT_CONSTANTINE]: DESC_CONSTANTINE,
  [CAT_VAISSEAU_RENFORTS]: DESC_VAISSEAU_RENFORTS,
  [CAT_MARTLET]: DESC_MARTLET,
  [CAT_FUSEE]: DESC_FUSEE,
  [CAT_CAISSE_MUNITIONS]: DESC_CAISSE_MUNITIONS,
  [CAT_REPARATEUR]: DESC_REPARATEUR,
  [CAT_ALLOSAURE]: DESC_ALLOSAURE,
  [CAT_MAKALU]: DESC_MAKALU,
  [CAT_CAISSE_RAVITAILLEMENT]: DESC_CAISSE_RAVITAILLEMENT,
  [CAT_DONJON_BLEU]: DESC_DONJON_BLEU,
  [CAT_DONJON_VIOLET]: DESC_DONJON_VIOLET,
  [CAT_DONJON_OR]: DESC_DONJON_OR,
};