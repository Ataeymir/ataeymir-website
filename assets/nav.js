/* ─── ATAEYMIR SHARED NAV JS ─────────────────────────── */
(function () {
  var menuBtn  = document.getElementById('menuBtn');
  var navLinks = document.getElementById('navLinks');

  /* Hamburger aç/kapat */
  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    var isOpen = navLinks.classList.contains('open');
    document.body.classList.toggle('menu-open', isOpen);
    menuBtn.innerHTML = isOpen
      ? '<span style="transform:rotate(45deg) translate(5px,5px)"></span><span style="opacity:0"></span><span style="transform:rotate(-45deg) translate(5px,-5px)"></span>'
      : '<span></span><span></span><span></span>';
  });

  /* Menü linkine tıklayınca kapat */
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      menuBtn.innerHTML = '<span></span><span></span><span></span>';
    });
  });
})();
