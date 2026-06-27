/*
 * Morphodex — base de données des styles.
 * Pilote la galerie (index) ET la fiche flottante (HUD) de chaque page démo.
 * Une seule source de vérité : on ajoute un style ici, il apparaît partout.
 */
window.MORPHODEX = {
  // Ordre d'affichage = ordre de navigation ‹ ›
  order: [
    "skeuomorphisme",
    "neomorphisme",
    "glassmorphisme",
    "claymorphisme",
    "minimalisme",
    "maximalisme",
    "brutalisme",
    "liquid-glass",
    "bento-grid",
    "spatial-ui",
  ],

  styles: {
    "skeuomorphisme": {
      num: "01",
      name: "Skeuomorphisme",
      file: "skeuomorphisme.html",
      tagline: "L'écran imite le réel : cuir, métal, papier.",
      era: "≈ 2007 – 2013 · iOS 6, Mac OS X",
      accent: "#3f7fd6",
      def: "Une interface qui copie les objets physiques : textures, reflets, ombres portées, coutures. Un bouton ressemble à un vrai bouton qu'on a envie d'enfoncer.",
      traits: [
        "Textures réalistes (cuir, bois, feutrine, métal brossé)",
        "Dégradés brillants + reflets spéculaires (le verre, le plastique)",
        "Ombres portées profondes pour ancrer dans l'espace",
        "Volume et relief : tout a l'air pressable, palpable",
        "Métaphores littérales (poubelle, étagère, calepin)",
      ],
      usequand: [
        "Public novice : l'objet réel guide l'usage sans apprentissage",
        "Univers nostalgique / rétro assumé",
      ],
      pieges: [
        "Vite kitsch et lourd ; alourdit les pages",
        "Incohérent à grande échelle, difficile à maintenir",
      ],
      exemples: ["iOS 6 (Notes en feutrine)", "iCal en cuir cousu", "Game Center"],
    },

    "neomorphisme": {
      num: "02",
      name: "Néomorphisme",
      file: "neomorphisme.html",
      tagline: "Des formes qui émergent doucement du fond.",
      era: "≈ 2020 · « Soft UI »",
      accent: "#6d5dfc",
      def: "Les éléments semblent extrudés ou enfoncés dans une surface monochrome, grâce à une double ombre (claire en haut-gauche, sombre en bas-droite). Tout est de la même couleur que le fond.",
      traits: [
        "Fond et éléments quasi de la même teinte (faible contraste)",
        "Double ombre opposée : une lumière, une sombre",
        "Angles très arrondis, surfaces lisses et mates",
        "Sensation « creusé / bombé » (inset vs extrude)",
        "Palette désaturée, souvent gris-bleu très clair",
      ],
      usequand: [
        "Dashboards calmes, players audio, toggles, cartes",
        "Effet doux et tactile recherché sur peu d'éléments",
      ],
      pieges: [
        "Contraste insuffisant = accessibilité catastrophique",
        "Boutons illisibles : on ne sait plus ce qui est cliquable",
      ],
      exemples: ["Concepts Dribbble 2020", "Players & widgets « soft »"],
    },

    "glassmorphisme": {
      num: "03",
      name: "Glassmorphisme",
      file: "glassmorphisme.html",
      tagline: "Du verre dépoli posé sur un fond coloré.",
      era: "≈ 2013 / 2020 · iOS 7, Windows Acrylic, macOS Big Sur",
      accent: "#8a5cff",
      def: "Des panneaux translucides et flous (backdrop-blur) laissent deviner ce qu'il y a derrière. Une fine bordure lumineuse simule le bord du verre.",
      traits: [
        "backdrop-filter: blur() — le fond transparaît, flouté",
        "Fonds vifs, multicolores, blobs/gradients derrière",
        "Bordure claire 1px + légère ombre pour décoller la vitre",
        "Couches empilées qui jouent sur la profondeur",
        "Transparence 10–30 %, jamais opaque",
      ],
      usequand: [
        "Overlays, cartes, barres de navigation modernes",
        "On veut de la profondeur sans cacher le décor",
      ],
      pieges: [
        "Lisibilité du texte sur fond chargé (contraste)",
        "Coût GPU du blur ; pénible en accessibilité",
      ],
      exemples: ["iOS 7+", "macOS Big Sur", "Windows 11 Acrylic/Mica"],
    },

    "claymorphisme": {
      num: "04",
      name: "Claymorphisme",
      file: "claymorphisme.html",
      tagline: "De la pâte à modeler 3D, douce et gonflée.",
      era: "≈ 2021",
      accent: "#ff8a8a",
      def: "Des éléments épais, bombés et tout doux, comme moulés dans de l'argile. Double ombre intérieure claire + ombre extérieure colorée donnent un volume « gonflé » et ludique.",
      traits: [
        "Très gros arrondis, formes pleines et joufflues",
        "Ombre extérieure colorée + 2 ombres internes (haut clair / bas)",
        "Palette pastel saturée, gaie",
        "Aspect 3D « jouet », illustratif",
        "Profondeur exagérée, presque rebondissante",
      ],
      usequand: [
        "Produits ludiques, enfants, onboarding, illustrations",
        "Marque chaleureuse, fun, peu corporate",
      ],
      pieges: [
        "Peu sérieux pour un contexte pro/financier",
        "Lourd visuellement si appliqué partout",
      ],
      exemples: ["Illustrations 3D type Clay", "Landing pages ludiques 2021+"],
    },

    "minimalisme": {
      num: "05",
      name: "Minimalisme",
      file: "minimalisme.html",
      tagline: "Tout enlever jusqu'à ce qu'il ne reste que l'essentiel.",
      era: "intemporel · « less is more »",
      accent: "#111111",
      def: "Le contenu d'abord : beaucoup de blanc, une typographie soignée, une seule couleur d'accent. Pas de décor, pas d'ombre superflue — la hiérarchie fait tout le travail.",
      traits: [
        "Espaces blancs généreux, beaucoup d'air",
        "Palette quasi monochrome + 1 accent maximum",
        "Typographie reine : hiérarchie nette, peu d'effets",
        "Grille éditoriale, alignements rigoureux",
        "Zéro ornement : chaque élément se justifie",
      ],
      usequand: [
        "Contenu sérieux, lecture, portfolios, SaaS premium",
        "On veut durer (peu sujet aux modes)",
      ],
      pieges: [
        "Froid / vide si la typo et le rythme sont ratés",
        "Le moindre détail bâclé se voit immédiatement",
      ],
      exemples: ["Apple", "Stripe", "Linear", "presse en ligne haut de gamme"],
    },

    "maximalisme": {
      num: "06",
      name: "Maximalisme",
      file: "maximalisme.html",
      tagline: "Trop, c'est exactement assez.",
      era: "≈ 2022+ · anti-flat, « more is more »",
      accent: "#ff2e63",
      def: "L'opposé revendiqué du minimalisme : couleurs qui claquent, typos qui s'entrechoquent, stickers, motifs, densité. Le débordement est le message.",
      traits: [
        "Couleurs vives et qui clashent volontairement",
        "Plusieurs polices très typées mélangées",
        "Densité, collage, stickers, motifs, bordures épaisses",
        "Animations et détails partout, horror vacui",
        "Personnalité forte, mémorable, « bordélique » maîtrisé",
      ],
      usequand: [
        "Marques jeunes, créatif, musique, mode, événementiel",
        "Se démarquer à tout prix, assumer le bruit",
      ],
      pieges: [
        "Vite illisible et fatigant si non maîtrisé",
        "Performance & accessibilité souvent sacrifiées",
      ],
      exemples: ["Gumroad (refonte)", "sites de festivals / labels", "Figma Config"],
    },

    "brutalisme": {
      num: "07",
      name: "Brutalisme",
      file: "brutalisme.html",
      tagline: "Le HTML brut, sans excuse ni décoration.",
      era: "≈ 2016+ · web brutalist",
      accent: "#1a1aff",
      def: "Un retour cru au web par défaut : Times/monospace, liens bleus soulignés, bordures noires, contrastes violents, mise en page « moche exprès ». L'honnêteté du matériau prime sur le confort.",
      traits: [
        "Polices système / Times New Roman / monospace brutes",
        "Bordures noires épaisses, blocs rectangulaires",
        "Contraste maximal, souvent noir sur blanc ou couleurs criardes",
        "Liens soulignés bleus par défaut, peu d'arrondis",
        "Mise en page volontairement rudimentaire, asymétrique",
      ],
      usequand: [
        "Posture artistique / contre-culture, portfolios créa",
        "Manifeste anti-corporate, on veut choquer",
      ],
      pieges: [
        "Inconfort réel pour l'utilisateur lambda",
        "Confond souvent « brut maîtrisé » et « juste négligé »",
      ],
      exemples: ["Bloomberg (touches brutalist)", "Balenciaga", "portfolios indés"],
    },

    "liquid-glass": {
      num: "08",
      name: "Liquid Glass",
      file: "liquid-glass.html",
      tagline: "Le verre devient vivant : il coule et réfracte la lumière.",
      era: "2025 · Apple (iOS 26 / macOS 26)",
      accent: "#5ac8fa",
      def: "L'évolution dynamique du glassmorphisme par Apple : des couches de verre qui réfractent et déforment l'arrière-plan, avec des reflets spéculaires sur les bords et une matière qui réagit, fluide et lumineuse.",
      traits: [
        "Réfraction / déformation du fond (pas qu'un simple flou)",
        "Reflets spéculaires lumineux sur les bords (lensing)",
        "Matière fluide, qui réagit au mouvement et à la lumière",
        "Translucidité profonde, teintes irisées",
        "Continuité douce, morphing entre les éléments",
      ],
      usequand: [
        "Interfaces système modernes, contrôles flottants",
        "Sensation premium, « matière » vivante et tactile",
      ],
      pieges: [
        "Très coûteux à rendre, lisibilité à surveiller de près",
        "Vite gadget si l'effet n'est pas justifié",
      ],
      exemples: ["iOS 26 / macOS Tahoe", "barres & contrôles flottants Apple 2025"],
    },

    "bento-grid": {
      num: "09",
      name: "Bento Grid",
      file: "bento-grid.html",
      tagline: "Une boîte à compartiments : chaque case raconte un truc.",
      era: "≈ 2022+ · keynotes Apple, dashboards",
      accent: "#0a84ff",
      def: "Une grille modulaire de cartes arrondies de tailles variées, comme une boîte bento japonaise. Chaque cellule présente une info ou une fonctionnalité de façon compacte et scannable.",
      traits: [
        "Grille de tuiles de tailles différentes (1×1, 2×1, 2×2…)",
        "Cartes arrondies, espacées régulièrement (gap égal)",
        "Une idée par tuile, contenu varié (chiffre, image, mini-graph)",
        "Composition équilibrée, dense mais aérée",
        "Très lisible, hiérarchie par la taille des cases",
      ],
      usequand: [
        "Pages produit, features, dashboards, récaps",
        "Beaucoup d'infos à montrer d'un coup, sans scroll infini",
      ],
      pieges: [
        "Devient un patchwork sans hiérarchie réelle",
        "Responsive délicat (réagencer les tuiles proprement)",
      ],
      exemples: ["Keynotes Apple", "Vercel / Linear", "dribbble dashboards"],
    },

    "spatial-ui": {
      num: "10",
      name: "Spatial UI",
      file: "spatial-ui.html",
      tagline: "L'interface flotte dans l'espace, en profondeur réelle.",
      era: "2024+ · visionOS, AR/VR",
      accent: "#a78bfa",
      def: "Des panneaux de verre flottants disposés en profondeur dans un espace 3D. La hiérarchie se joue sur les axes X-Y-Z : parallaxe, perspective, ombres de profondeur, lumière ambiante.",
      traits: [
        "Profondeur réelle : couches en perspective, parallaxe",
        "Panneaux de verre flottants avec ombres douces portées loin",
        "Lumière ambiante, halos, environnement immersif sombre",
        "Cibles tactiles généreuses, focus par survol/regard",
        "Composition pensée en 3D, pas seulement à plat",
      ],
      usequand: [
        "Casques AR/VR, expériences immersives, démos futuristes",
        "On veut un effet « hors écran », profondeur spatiale",
      ],
      pieges: [
        "Hors casque, vite gadget et désorientant",
        "Performance et accessibilité (mouvement, vertige)",
      ],
      exemples: ["visionOS (Apple Vision Pro)", "Meta Quest", "concepts AR"],
    },
  },
};
