/*
 * Morphodex HUD — injecté sur chaque page démo.
 * Lit <body data-style="..."> , va chercher la fiche dans MORPHODEX,
 * construit le placard méta : retour galerie, nav ‹ ›, fiche, clavier.
 */
(function () {
  var DATA = window.MORPHODEX;
  if (!DATA) return;

  var key = document.body.getAttribute("data-style");
  var s = DATA.styles[key];
  if (!s) return;

  var order = DATA.order;
  var idx = order.indexOf(key);
  var prev = order[(idx - 1 + order.length) % order.length];
  var next = order[(idx + 1) % order.length];
  var total = order.length;

  function li(items, cls) {
    return items.map(function (t) { return "<li>" + t + "</li>"; }).join("");
  }
  function chips(items) {
    return items.map(function (t) { return "<span>" + t + "</span>"; }).join("");
  }

  var hud = document.createElement("div");
  hud.className = "mdx-hud";
  hud.setAttribute("data-open", "false");
  hud.style.setProperty("--mdx-accent", s.accent);

  hud.innerHTML =
    '<a class="mdx-back" href="../index.html" aria-label="Retour à la galerie">' +
      "&larr;&nbsp; <b>Morphodex</b></a>" +

    '<nav class="mdx-bar" aria-label="Navigation entre styles">' +
      '<button class="mdx-nav mdx-prev" aria-label="Style précédent">&lsaquo;</button>' +
      '<div class="mdx-meta">' +
        '<span class="mdx-count">' + s.num + " / " + (total < 10 ? "0" + total : total) + "</span>" +
        '<span class="mdx-name"><span class="mdx-dot" style="background:' + s.accent + '"></span>' + s.name + "</span>" +
      "</div>" +
      '<button class="mdx-info" aria-label="Ouvrir la fiche du style">' +
        '<span class="mdx-i">i</span> Fiche</button>' +
      '<button class="mdx-nav mdx-next" aria-label="Style suivant">&rsaquo;</button>' +
    "</nav>" +

    '<div class="mdx-scrim"></div>' +
    '<aside class="mdx-sheet" role="dialog" aria-label="Fiche du style ' + s.name + '">' +
      '<div class="mdx-sheet-top">' +
        '<button class="mdx-close" aria-label="Fermer">&times;</button>' +
        '<div class="mdx-eyebrow">Style ' + s.num + " · Morphodex</div>" +
        "<h2>" + s.name + "</h2>" +
        '<div class="mdx-tag">' + s.tagline + "</div>" +
        '<div class="mdx-era">' + s.era + "</div>" +
      "</div>" +
      '<div class="mdx-sheet-body">' +
        "<h3>Définition</h3><p>" + s.def + "</p>" +
        "<h3>Traits caractéristiques</h3><ul class=\"mdx-list\">" + li(s.traits) + "</ul>" +
        "<h3>À utiliser quand</h3><ul class=\"mdx-list\">" + li(s.usequand) + "</ul>" +
        "<h3>Pièges</h3><ul class=\"mdx-list mdx-pieges\">" + li(s.pieges) + "</ul>" +
        "<h3>Exemples réels</h3><div class=\"mdx-chips\">" + chips(s.exemples) + "</div>" +
      "</div>" +
      '<div class="mdx-sheet-foot">' +
        '<button class="mdx-foot-prev">&lsaquo; ' + DATA.styles[prev].name + "</button>" +
        '<button class="mdx-foot-next">' + DATA.styles[next].name + " &rsaquo;</button>" +
      "</div>" +
    "</aside>";

  document.body.appendChild(hud);

  function go(k) { window.location.href = DATA.styles[k].file; }
  function open() { hud.setAttribute("data-open", "true"); }
  function close() { hud.setAttribute("data-open", "false"); }
  function toggle() { hud.setAttribute("data-open", hud.getAttribute("data-open") === "true" ? "false" : "true"); }

  hud.querySelector(".mdx-prev").addEventListener("click", function () { go(prev); });
  hud.querySelector(".mdx-next").addEventListener("click", function () { go(next); });
  hud.querySelector(".mdx-foot-prev").addEventListener("click", function () { go(prev); });
  hud.querySelector(".mdx-foot-next").addEventListener("click", function () { go(next); });
  hud.querySelector(".mdx-info").addEventListener("click", toggle);
  hud.querySelector(".mdx-close").addEventListener("click", close);
  hud.querySelector(".mdx-scrim").addEventListener("click", close);

  document.addEventListener("keydown", function (e) {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === "ArrowLeft") go(prev);
    else if (e.key === "ArrowRight") go(next);
    else if (e.key === "i" || e.key === "I") toggle();
    else if (e.key === "Escape") close();
  });
})();
