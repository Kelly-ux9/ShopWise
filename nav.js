(function () {
  function initNav() {
    const button = document.getElementById('sw-menu');
    const menu = document.getElementById('sw-mobile-menu');
    if (!button || !menu || button.dataset.ready === 'true') return;
    button.dataset.ready = 'true';
    button.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Open menu');
      });
    });
  }
  window.ShopWiseNav = { init: initNav };
})();
