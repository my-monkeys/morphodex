/*
 * Morphodex — contenu commun des pages démo.
 * Injecte le sprite d'icônes + la landing Nimbus (markup IDENTIQUE
 * pour les 10 styles). Seule la « peau » CSS de chaque page change.
 * Tourne avant hud.js (ordre des <script> en bas de page).
 */
(function () {
  var SPRITE =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<symbol id="i-cloud" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></symbol>' +
    '<symbol id="i-zap" viewBox="0 0 24 24"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></symbol>' +
    '<symbol id="i-share" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></symbol>' +
    '<symbol id="i-bell" viewBox="0 0 24 24"><path d="M10.3 21a2 2 0 0 0 3.4 0"/><path d="M3.3 15.3A1 1 0 0 0 4 17h16a1 1 0 0 0 .7-1.7C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.4 6-2.7 7.3"/></symbol>' +
    '<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></symbol>' +
    '<symbol id="i-lock" viewBox="0 0 24 24"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></symbol>' +
    '<symbol id="i-download" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></symbol>' +
    '<symbol id="i-sparkles" viewBox="0 0 24 24"><path d="M9.9 15.5A2 2 0 0 0 8.5 14L2.4 12.5a.5.5 0 0 1 0-1L8.5 10A2 2 0 0 0 9.9 8.5l1.6-6.1a.5.5 0 0 1 1 0L14.1 8.5A2 2 0 0 0 15.5 9.9l6.1 1.6a.5.5 0 0 1 0 1L15.5 14a2 2 0 0 0-1.4 1.4l-1.6 6.1a.5.5 0 0 1-1 0z"/></symbol>' +
    '<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>' +
    '<symbol id="i-star" viewBox="0 0 24 24"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2l-5-4.9 6.9-1z"/></symbol>' +
    '<symbol id="i-play" viewBox="0 0 24 24"><path d="M6 3 20 12 6 21Z"/></symbol>' +
    '<symbol id="i-folder" viewBox="0 0 24 24"><path d="M4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"/></symbol>' +
    '<symbol id="i-inbox" viewBox="0 0 24 24"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"/></symbol>' +
    '</defs></svg>';

  function ic(name) { return '<svg class="ic"><use href="#i-' + name + '"/></svg>'; }
  function stars() { var s = ""; for (var i = 0; i < 5; i++) s += ic("star"); return '<span class="stars">' + s + "</span>"; }

  var GRAPH =
    '<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid meet">' +
    '<g class="edges"><path class="edge" d="M70 60 L160 110 M160 110 L250 70 M160 110 L120 180 M160 110 L240 170 M70 60 L120 180"/></g>' +
    '<g class="nodes">' +
    '<circle class="node node-a" cx="70" cy="60" r="14"/>' +
    '<circle class="node node-b" cx="160" cy="110" r="20"/>' +
    '<circle class="node node-c" cx="250" cy="70" r="12"/>' +
    '<circle class="node node-d" cx="120" cy="180" r="13"/>' +
    '<circle class="node node-e" cx="240" cy="170" r="11"/>' +
    "</g></svg>";

  var MINIGRAPH =
    '<svg class="app-graph" viewBox="0 0 120 92"><g class="edges"><path class="edge" d="M20 18 Q60 28 92 58 M20 18 Q40 66 78 78"/></g>' +
    '<g class="nodes"><circle class="node" cx="20" cy="18" r="5"/><circle class="node" cx="92" cy="58" r="5"/><circle class="node" cx="78" cy="78" r="5"/></g></svg>';

  var HTML =
    SPRITE +
    '<div class="bg" aria-hidden="true"><span class="bg-1"></span><span class="bg-2"></span><span class="bg-3"></span></div>' +

    '<header class="site-header"><div class="wrap">' +
      '<nav class="nav surface">' +
        '<div class="brand"><span class="brand-logo">' + ic("cloud") + "</span> Nimbus</div>" +
        '<div class="nav-links">' +
          '<a href="#fonctions">Fonctions</a><a href="#methode">Méthode</a><a href="#avis">Avis</a><a href="#tarifs">Tarifs</a>' +
          '<button class="btn btn-primary nav-cta">Essayer</button>' +
        "</div>" +
      "</nav>" +
    "</div></header>" +

    '<main class="wrap">' +

      // HERO
      '<section class="hero">' +
        '<div class="hero-copy">' +
          '<span class="eyebrow surface">' + ic("sparkles") + " Nouveau — Nimbus v3</span>" +
          '<h1 class="hero-title">Pensez moins.<br><span class="accent">Retenez tout.</span></h1>' +
          '<p class="hero-sub">Nimbus capture vos idées, les relie entre elles, et vous les ressert pile au bon moment. Votre second cerveau, enfin.</p>' +
          '<div class="hero-actions">' +
            '<button class="btn btn-primary">Commencer — c\'est gratuit ' + ic("arrow") + "</button>" +
            '<button class="btn">' + ic("play") + " Voir la démo</button>" +
          "</div>" +
          '<div class="hero-trust">' + stars() + " <span>4,9/5 · déjà 12 480 cerveaux augmentés</span></div>" +
        "</div>" +
        '<div class="hero-visual">' +
          '<div class="appwin surface">' +
            '<div class="appbar"><span class="appbar-dot"></span><span class="appbar-dot"></span><span class="appbar-dot"></span><span class="app-addr">nimbus.app · Mon espace</span></div>' +
            '<div class="appbody">' +
              '<aside class="app-side">' +
                '<a class="on">' + ic("inbox") + " Boîte</a>" +
                "<a>" + ic("folder") + " Projets</a>" +
                "<a>" + ic("share") + " Liens</a>" +
                "<a>" + ic("bell") + " Rappels</a>" +
                "<a>" + ic("search") + " Recherche</a>" +
              "</aside>" +
              '<div class="app-canvas">' +
                '<div class="app-note" data-tag="Idée"><div class="app-note-title">Et si Nimbus rappelait au bon moment ?</div><div class="app-note-text">Relié à « Onboarding » et « Sprint juin ».</div></div>' +
                '<div class="app-note" data-tag="Lecture"><div class="app-note-title">Le second cerveau — T. Forte</div><div class="app-note-text">Chapitre 4 · 3 notes extraites</div></div>' +
                '<div class="app-note"><div class="app-note-title">Réunion produit</div><div class="app-note-text">Relier l\'onboarding au sprint de juin.</div></div>' +
                MINIGRAPH +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</section>" +

      // TRUST
      '<div class="trustbar">' +
        '<span class="trustbar-label">Adopté au quotidien par les équipes de</span>' +
        '<div class="trust-logos"><b>Lumio</b><b>Northwind</b><b>Atelier 9</b><b>Kestra</b><b>Volta</b><b>Mercato</b></div>' +
      "</div>" +

      // FONCTIONS
      '<section class="section" id="fonctions">' +
        '<div class="section-head">' +
          '<span class="section-kicker">Trois fonctions, zéro friction</span>' +
          '<h2 class="section-title">Tout ce qu\'il faut pour ne plus rien perdre</h2>' +
          '<p class="section-sub">Capturez à la vitesse de la pensée, laissez Nimbus relier, et retrouvez l\'idée juste au moment où elle compte.</p>' +
        "</div>" +
        '<div class="features">' +
          '<div class="feature surface"><div class="feature-icon">' + ic("zap") + '</div><h3 class="feature-title">Capture éclair</h3><p class="feature-text">Une touche, et l\'idée est sauvée — depuis n\'importe où, même hors-ligne. Texte, voix, photo, lien : tout entre en une seconde.</p></div>' +
          '<div class="feature surface"><div class="feature-icon">' + ic("share") + '</div><h3 class="feature-title">Liens automatiques</h3><p class="feature-text">Vos notes se connectent toutes seules. Nimbus détecte les idées proches et tisse le fil rouge à votre place.</p></div>' +
          '<div class="feature surface"><div class="feature-icon">' + ic("bell") + '</div><h3 class="feature-title">Rappels intelligents</h3><p class="feature-text">La bonne note remonte quand vous en avez besoin, pas avant. Un contexte, un lieu, une date : Nimbus s\'en souvient.</p></div>' +
        "</div>" +
      "</section>" +

      // SPOTLIGHT
      '<section class="section">' +
        '<div class="spotlight surface">' +
          '<div class="spotlight-copy">' +
            '<h2 class="spotlight-title">Un graphe vivant de tout ce que vous savez</h2>' +
            '<p class="spotlight-text">Chaque note devient un nœud. Plus vous écrivez, plus la toile se densifie — et plus vos vieilles idées ressurgissent au bon moment.</p>' +
            '<ul class="checks">' +
              "<li>" + ic("check") + " Connexions suggérées en temps réel</li>" +
              "<li>" + ic("check") + " Recherche sémantique, pas juste par mot-clé</li>" +
              "<li>" + ic("check") + " Vue carte pour explorer vos thèmes</li>" +
            "</ul>" +
          "</div>" +
          '<div class="spotlight-visual surface">' + GRAPH + "</div>" +
        "</div>" +
      "</section>" +

      // MÉTHODE
      '<section class="section" id="methode">' +
        '<div class="section-head">' +
          '<span class="section-kicker">Comment ça marche</span>' +
          '<h2 class="section-title">Trois gestes, et c\'est dans votre tête augmentée</h2>' +
        "</div>" +
        '<div class="steps">' +
          '<div class="step surface"><div class="step-num">ÉTAPE 01</div><div class="step-icon">' + ic("zap") + '</div><h4 class="step-title">Capturez</h4><p class="step-text">Notez l\'idée brute, sans la ranger. Raccourci clavier, widget ou partage : Nimbus avale tout.</p></div>' +
          '<div class="step surface"><div class="step-num">ÉTAPE 02</div><div class="step-icon">' + ic("share") + '</div><h4 class="step-title">Reliez</h4><p class="step-text">Nimbus rapproche les notes qui se parlent et vous propose des connexions que vous n\'auriez pas vues.</p></div>' +
          '<div class="step surface"><div class="step-num">ÉTAPE 03</div><div class="step-icon">' + ic("bell") + '</div><h4 class="step-title">Retrouvez</h4><p class="step-text">Au bon moment, la bonne note revient d\'elle-même. Vous ne cherchez plus : vous vous souvenez.</p></div>' +
        "</div>" +
      "</section>" +

      // CHIFFRES
      '<section class="section">' +
        '<div class="stats surface">' +
          '<div class="stat"><strong class="stat-num">12 480</strong><span class="stat-label">cerveaux augmentés</span></div>' +
          '<div class="stat"><strong class="stat-num">4,9/5</strong><span class="stat-label">note sur les stores</span></div>' +
          '<div class="stat"><strong class="stat-num">2,1 M</strong><span class="stat-label">notes reliées</span></div>' +
          '<div class="stat"><strong class="stat-num">0</strong><span class="stat-label">pub, traceur, prise de tête</span></div>' +
        "</div>" +
      "</section>" +

      // TÉMOIGNAGE
      '<section class="section" id="avis">' +
        '<div class="quote surface">' +
          '<p class="quote-text">« J\'ai arrêté de noter dans douze endroits différents. Maintenant tout vit au même endroit et <span class="accent">les idées reviennent toutes seules</span>. Je ne reviendrai jamais en arrière. »</p>' +
          '<div class="quote-author"><span class="quote-avatar"></span><div><b class="quote-name">Camille R.</b><span class="quote-role">Designer produit · utilise Nimbus depuis 8 mois</span></div></div>' +
        "</div>" +
      "</section>" +

      // CTA
      '<section class="section" id="tarifs">' +
        '<div class="cta surface">' +
          '<h2 class="cta-title">Prêt à vider votre tête ?</h2>' +
          '<p class="cta-text">Gratuit pour toujours sur l\'essentiel. Pas de carte, pas de pub.</p>' +
          '<div class="hero-actions cta-actions">' +
            '<button class="btn btn-primary">Créer mon Nimbus ' + ic("arrow") + "</button>" +
            '<button class="btn">' + ic("download") + " Télécharger l\'app</button>" +
          "</div>" +
        "</div>" +
      "</section>" +

    "</main>" +

    // FOOTER
    '<footer class="site-footer"><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-brand"><div class="brand"><span class="brand-logo">' + ic("cloud") + '</span> Nimbus</div><p class="foot-tagline">Votre second cerveau. Capturez, reliez, retrouvez — sans jamais rien perdre.</p></div>' +
        '<div class="foot-col"><h6>Produit</h6><a href="#">Fonctions</a><a href="#">Tarifs</a><a href="#">Nouveautés</a><a href="#">Mobile</a></div>' +
        '<div class="foot-col"><h6>Ressources</h6><a href="#">Journal</a><a href="#">Guides</a><a href="#">Communauté</a><a href="#">Statut</a></div>' +
        '<div class="foot-col"><h6>Entreprise</h6><a href="#">À propos</a><a href="#">Confidentialité</a><a href="#">Contact</a><a href="#">Presse</a></div>' +
      "</div>" +
      '<div class="foot-bottom"><span>Nimbus — © 2026 · Démo Morphodex · Produit fictif</span><span>Conçu sans émoji, sans pub, sans cookie.</span></div>' +
    "</div></footer>";

  document.body.insertAdjacentHTML("afterbegin", HTML);
})();
