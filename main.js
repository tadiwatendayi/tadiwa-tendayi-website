(function () {
  var header = document.querySelector('.site-nav');
  var menuPanel = document.querySelector('.mobile-menu');
  var menuBtn = document.querySelector('.hamburger');
  var menuOpen = false;

  function updateNav() {
    var scrolled = window.scrollY > 40;
    header.classList.toggle('is-scrolled', scrolled || menuOpen);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  function setMenu(open) {
    menuOpen = open;
    menuPanel.classList.toggle('is-open', open);
    menuBtn.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
    updateNav();
  }
  menuBtn.addEventListener('click', function () { setMenu(!menuOpen); });
  Array.prototype.forEach.call(menuPanel.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  var storyMore = document.querySelector('.story-more');
  var storyOpenBtn = document.querySelector('.story-open-btn');
  var storyCloseBtn = document.querySelector('.story-close-btn');
  function setStory(open) {
    storyMore.hidden = !open;
    storyOpenBtn.hidden = open;
    storyCloseBtn.hidden = !open;
  }
  storyOpenBtn.addEventListener('click', function () { setStory(true); });
  storyCloseBtn.addEventListener('click', function () { setStory(false); });

  var giftForm = document.querySelector('.gift-form');
  var giftSent = document.querySelector('.gift-sent');
  if (giftForm) {
    giftForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = giftForm.querySelector('input[type=email]');
      var email = (input && input.value || '').trim();
      if (!email) return;
      giftForm.hidden = true;
      giftSent.hidden = false;
      fetch('https://formspree.io/f/xkoldrjq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email: email, _subject: 'New Honest Kitchen download — tadiwatendayi.com' })
      }).catch(function () {});
    });
  }
})();
