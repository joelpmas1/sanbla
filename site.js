// site.js — shared interactions for all Sanbla pages
(function () {
  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  // Mobile menu: toggle a simple dropdown of the nav links
  var menuBtn = document.querySelector('.menu-btn');
  var links = document.querySelector('.nav-links');
  if (menuBtn && links) {
    menuBtn.addEventListener('click', function () {
      var open = links.classList.toggle('open-mobile');
      if (open) {
        links.style.cssText = 'display:flex;flex-direction:column;align-items:flex-start;gap:18px;position:absolute;top:76px;left:0;right:0;background:#0d181b;border-bottom:1px solid rgba(255,255,255,.1);padding:22px var(--gutter,24px);';
      } else {
        links.style.cssText = '';
      }
    });
  }
})();
