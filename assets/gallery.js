/*
 * Morphodex — galerie. Construit les vignettes depuis MORPHODEX.
 * Markup de carte IDENTIQUE pour toutes : seule la classe .thumb--<key>
 * change la peau (c'est le principe du site, en miniature).
 */
(function () {
  var DATA = window.MORPHODEX;
  var root = document.getElementById("catalog");
  if (!DATA || !root) return;

  var thumb =
    '<div class="t-card">' +
      '<div class="t-bar"><i></i><i></i><i></i></div>' +
      '<div class="t-title"></div>' +
      '<div class="t-line"></div>' +
      '<div class="t-line t-line--s"></div>' +
      '<div class="t-btn">Nimbus</div>' +
    "</div>";

  var html = DATA.order
    .map(function (key) {
      var s = DATA.styles[key];
      return (
        '<article class="plate" style="--accent:' + s.accent + '">' +
          '<a class="plate-link" href="styles/' + s.file + '">' +
            '<div class="plate-num">' + s.num + " — Spécimen</div>" +
            '<div class="thumb thumb--' + key + '"><div class="t-stage">' + thumb + "</div></div>" +
            '<div class="plate-meta">' +
              '<h2 class="plate-name">' + s.name + "</h2>" +
              '<p class="plate-tag">' + s.tagline + "</p>" +
              '<span class="plate-cta">Voir le spécimen &rarr;</span>' +
            "</div>" +
          "</a>" +
        "</article>"
      );
    })
    .join("");

  root.innerHTML = html;
})();
