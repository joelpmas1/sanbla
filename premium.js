// premium.js — shared interactions for Sanbla v2 (premium) pages
(function () {
  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) { item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
    });
  });

  // ---- Mega menu (full-screen overlay, desktop + mobile) ----
  var LOGO = '<a class="logo" href="Inicio-v2.html" aria-label="Sanbla Finance — inicio"><svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="11" fill="url(#lg)"/><path d="M26.5 14.5C25 12.8 22.7 12 20.2 12c-3.4 0-5.7 1.6-5.7 4 0 5.6 12.9 2.8 12.9 8.7 0 2.7-2.7 4.5-6.6 4.5-2.9 0-5.4-1-6.8-2.9" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="logo-text"><b>Sanbla</b><span>Finance</span></span></a>';
  var ARROW = '<svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  function li(label, href, cls) {
    if (!href) return '<li><span class="mega-na">' + label + '</span></li>';
    return '<li><a href="' + href + '"' + (cls ? ' class="' + cls + '"' : '') + '>' + label + '</a></li>';
  }

  var liquidez = ['Póliza de Crédito|Poliza-v2.html','Factoring|Factoring-v2.html','Confirming|Liquidez-v2.html','Anticipo de facturas|Liquidez-v2.html','Descuento Comercial|Liquidez-v2.html','Financiación de IVA e Impuestos|Liquidez-v2.html','Líneas COMEX|Liquidez-v2.html','Confirming / Factoring Internacional|Liquidez-v2.html'];
  var inversion = ['Préstamo de Inversión|Inversion-v2.html','Leasing|Inversion-v2.html','Renting|Inversion-v2.html','Hipoteca Empresarial|Inversion-v2.html','Financiación de Maquinaria|Inversion-v2.html','Financiación Tecnológica|Inversion-v2.html','Sale & Leaseback|Inversion-v2.html','Project Finance|Inversion-v2.html'];
  var publica = ['Líneas ICO|','ENISA / CDTI|','Subvenciones · Next Generation|'];

  function listFrom(arr) {
    return arr.map(function (it) { var p = it.split('|'); return li(p[0], p[1]); }).join('');
  }

  var megaHTML =
    '<div class="mega" id="megaMenu" aria-hidden="true">' +
      '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#36D8BD"/><stop offset="1" stop-color="#0B6E63"/></linearGradient></defs></svg>' +
      '<div class="mega-bar">' + LOGO +
        '<div class="mega-right"><a href="Contacto-v2.html" class="btn btn-primary"><span>Solicita asesoramiento</span></a>' +
        '<button class="mega-close" id="megaClose" aria-label="Cerrar menú"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg></button></div>' +
      '</div>' +
      '<div class="mega-inner">' +
        '<div class="mega-main">' +
          '<div class="mega-sect stag s1">Productos</div>' +
          '<div class="mega-cols">' +
            '<div>' +
              '<div class="mega-group stag s1"><a class="mega-cat" href="Liquidez-v2.html">Liquidez y circulante' + ARROW + '</a><ul class="mega-list">' + listFrom(liquidez) + '</ul></div>' +
              '<div class="mega-group stag s3"><a class="mega-cat" href="#">Financiación pública' + ARROW + '</a><ul class="mega-list">' + listFrom(publica) + '</ul></div>' +
            '</div>' +
            '<div>' +
              '<div class="mega-group stag s2"><a class="mega-cat" href="Inversion-v2.html">Inversión y crecimiento' + ARROW + '</a><ul class="mega-list">' + listFrom(inversion) + '</ul></div>' +
              '<div class="mega-group stag s4"><a class="mega-cat" href="#">Refinanciación' + ARROW + '</a></div>' +
            '</div>' +
          '</div>' +
          '<div class="mega-grupo stag s4"><div class="mega-sect">El Grupo Sanbla</div><div class="mega-row"><a href="#">Sanbla · Consultoría financiera</a><span class="mega-na">Sanbla Fiscal · Próximamente</span></div></div>' +
        '</div>' +
        '<aside class="mega-aside stag s2">' +
          '<div class="mega-sect">Conoce Sanbla</div>' +
          '<ul class="mega-nav">' +
            '<li><a href="Sobre-nosotros-v2.html">Sobre nosotros' + ARROW + '</a></li>' +
            '<li><a href="Sobre-nosotros-v2.html">Cómo trabajamos' + ARROW + '</a></li>' +
            '<li><a href="Contacto-v2.html">Contacto' + ARROW + '</a></li>' +
          '</ul>' +
          '<div class="mega-card"><div class="mc-k">¿Hablamos?</div><p>Una primera llamada sin coste y sin compromiso.</p><a href="Contacto-v2.html" class="btn btn-primary"><span>Solicita asesoramiento</span></a></div>' +
        '</aside>' +
      '</div>' +
    '</div>';

  document.body.insertAdjacentHTML('beforeend', megaHTML);
  var mega = document.getElementById('megaMenu');

  function openMega() { mega.classList.add('open'); mega.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
  function closeMega() { mega.classList.remove('open'); mega.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }

  document.querySelectorAll('.nav-trigger, .menu-btn').forEach(function (t) {
    t.addEventListener('click', function (e) { e.preventDefault(); openMega(); });
  });
  document.getElementById('megaClose').addEventListener('click', closeMega);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mega.classList.contains('open')) closeMega(); });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Scroll reveal ----
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // ---- Count-up for stats (data-count="85", optional data-suffix / data-prefix) ----
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dur = 1400, start = null;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = (el.getAttribute('data-count').split('.')[1] || '').length;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = (target * eased).toFixed(decimals);
      el.firstChild ? (el.childNodes[0].nodeValue = prefix + val) : (el.textContent = prefix + val);
      el.innerHTML = prefix + val + (suffix ? '<span class="u">' + suffix + '</span>' : '');
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counters = document.querySelectorAll('[data-count]');
  if (reduce || !('IntersectionObserver' in window)) {
    counters.forEach(function (el) {
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      el.innerHTML = prefix + el.getAttribute('data-count') + (suffix ? '<span class="u">' + suffix + '</span>' : '');
    });
  } else {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }
})();
