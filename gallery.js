/* ─────────────────────────────────────────────────────────────
   FROM MY KITCHEN — Instagram gallery
   To update: edit the POSTS array below. Nothing else.
   Each item:
     image   — path to the photo, e.g. "burrata.jpg"
     postUrl — the Instagram post link
     alt     — short description of the dish (used by screen readers)
   Leave `image` empty ("") and the tile renders as a placeholder.
   Add or remove items freely; the grid reflows.
   ───────────────────────────────────────────────────────────── */

var POSTS = [
  {
    image: "kitchen-1.webp",
    postUrl: "https://www.instagram.com/p/Dc-npOPDrnR/",
    alt: "A dish from Chef Tadiwa's kitchen"
  },
  {
    image: "kitchen-2.webp",
    postUrl: "https://www.instagram.com/p/DanaQjziG_v/",
    alt: "A dish from Chef Tadiwa's kitchen"
  },
  {
    image: "kitchen-3.webp",
    postUrl: "https://www.instagram.com/reel/DVOizG1Eyyz/",
    alt: "A dish from Chef Tadiwa's kitchen"
  }
];

var INSTAGRAM_PROFILE = "https://www.instagram.com/tadiwa_tendayi/";

(function () {
  var grid = document.querySelector('.kitchen-grid');
  if (!grid) return;

  POSTS.forEach(function (post, i) {
    var filled = post.image && post.postUrl;
    var tile = document.createElement(filled ? 'a' : 'div');

    if (filled) {
      tile.href = post.postUrl;
      tile.target = '_blank';
      tile.rel = 'noopener noreferrer';
      tile.setAttribute('aria-label', (post.alt || 'Dish') + ' — view on Instagram');
    }
    tile.className = 'kitchen-tile';

    if (filled) {
      var img = document.createElement('img');
      img.src = post.image;
      img.alt = post.alt || '';
      img.loading = i < 3 ? 'eager' : 'lazy';
      img.decoding = 'async';
      tile.appendChild(img);

      var label = document.createElement('span');
      label.className = 'kitchen-label';
      label.textContent = 'View on Instagram \u2197';
      tile.appendChild(label);
    } else {
      var ph = document.createElement('span');
      ph.className = 'kitchen-ph';
      ph.textContent = 'Photo ' + (i + 1);
      tile.appendChild(ph);
    }

    grid.appendChild(tile);
  });

  var cta = document.querySelector('.kitchen-cta');
  if (cta) {
    cta.href = INSTAGRAM_PROFILE;
    cta.target = '_blank';
    cta.rel = 'noopener noreferrer';
  }
})();
