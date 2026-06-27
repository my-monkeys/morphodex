# Morphodex — le catalogue des styles d'interface

Un petit site-référence : **une même landing fictive** (l'appli *Nimbus*) refaite
à l'identique dans **10 styles graphiques**, pour servir d'aide-mémoire visuel.

> « Dix manières de dessiner exactement la même chose. »

## Les 10 spécimens

| # | Style | Idée |
|---|---|---|
| 01 | Skeuomorphisme | L'écran imite le réel (cuir, métal, papier) |
| 02 | Néomorphisme | Formes extrudées d'un fond monochrome (soft UI) |
| 03 | Glassmorphisme | Verre dépoli flou sur fond coloré |
| 04 | Claymorphisme | Pâte à modeler 3D, pastel, gonflé |
| 05 | Minimalisme | Blanc, typo reine, un seul accent |
| 06 | Maximalisme | Couleurs qui clashent, stickers, densité |
| 07 | Brutalisme | HTML brut, Times, liens bleus, bordures noires |
| 08 | Liquid Glass | Verre vivant qui réfracte (Apple 2025) |
| 09 | Bento Grid | Grille de tuiles, une info par case |
| 10 | Spatial UI | Panneaux flottants en profondeur (visionOS) |

## Structure

```
morphodex/
├── index.html              galerie (catalogue de spécimens)
├── assets/
│   ├── styles-data.js      base de données des styles (fiches : déf, traits, pièges…)
│   ├── shell.css           identité de la galerie + 10 vignettes (mini-UI re-skinnée)
│   ├── gallery.js          construit les vignettes depuis styles-data
│   ├── landing.js          CONTENU de la landing Nimbus (sprite d'icônes + sections)
│   ├── landing-base.css    STRUCTURE des pages démo (grilles, rythme, responsive)
│   ├── hud.css             le « placard » méta (fiche, nav ‹ ›)
│   └── hud.js              injecte le HUD + clavier (←/→, i, Échap)
└── styles/
    ├── skeuomorphisme.html   ← chaque page = une PEAU CSS (<style>) + 3 <script>
    └── …                       (landing.js, styles-data.js, hud.js)
```

### Le principe : un contenu, dix habillages

La thèse du site est réalisée littéralement dans le code :

- **`landing.js`** injecte la *même* landing Nimbus (icônes SVG + toutes les
  sections) sur les 10 pages — le contenu est identique partout.
- **`landing-base.css`** porte toute la **géométrie** (grilles, espacements,
  responsive) sans aucune couleur ni matière.
- Chaque page de `styles/` ne contient qu'une **peau** : un `<style>` qui habille
  ces mêmes classes (`.surface`, `.feature`, `.hero-title`…). C'est *là* que vit
  le style — verre, argile, métal, néon brutaliste, etc.

Le chrome méta (retour galerie, navigation ‹ ›, fiche) est injecté par `hud.js`,
qui lit `<body data-style="…">` et récupère la fiche dans `styles-data.js`.

**Ajouter un style** = ① une entrée dans `styles-data.js` ② une page `styles/<slug>.html`
(copier une peau existante et la retravailler) ③ une peau de vignette dans `shell.css`.

> Les pages démo nécessitent JavaScript (le contenu et le HUD sont injectés).

### Raccourcis clavier (sur une page démo)
- `←` / `→` : style précédent / suivant
- `i` : ouvrir/fermer la fiche
- `Échap` : fermer la fiche

## Lancer en local

```bash
cd morphodex
python3 -m http.server 8080
# → http://localhost:8080
```

(Ou ouvrir `index.html` directement — tout est en relatif, aucun build.)

## Déploiement

Site 100 % statique. Un fichier `.monkey` est prêt pour un déploiement via release
GitHub (cf. système *monkey*). Décommenter le bloc `site` pour l'afficher sur la
landing My-Monkey.
