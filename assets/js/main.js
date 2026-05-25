// 2026 Marblehead Voter Guide — light enhancements (page works fully without JS)

(function () {
  'use strict';

  // -----------------------------------------------------------
  // Expand / collapse all Q&A within a race
  // -----------------------------------------------------------
  document.querySelectorAll('.race').forEach(function (race) {
    var detailsList = race.querySelectorAll('details.qa');
    if (detailsList.length < 2) return;

    var header = race.querySelector('.race-header');
    if (!header) return;

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'expand-toggle';
    toggle.setAttribute('aria-pressed', 'false');
    toggle.textContent = 'Expand all responses';

    toggle.addEventListener('click', function () {
      var anyClosed = Array.prototype.some.call(detailsList, function (d) { return !d.open; });
      detailsList.forEach(function (d) { d.open = anyClosed; });
      toggle.setAttribute('aria-pressed', String(anyClosed));
      toggle.textContent = anyClosed ? 'Collapse all responses' : 'Expand all responses';
    });

    header.appendChild(toggle);
  });

  // -----------------------------------------------------------
  // Scroll-spy: highlight nav link for the section currently in view
  // -----------------------------------------------------------
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  if (!('IntersectionObserver' in window) || navLinks.length === 0) return;

  var sectionMap = {};
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (section) sectionMap[id] = link;
  });

  var current = null;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        var link = sectionMap[id];
        if (!link) return;
        if (current && current !== link) current.classList.remove('is-current');
        link.classList.add('is-current');
        current = link;
      }
    });
  }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

  Object.keys(sectionMap).forEach(function (id) {
    observer.observe(document.getElementById(id));
  });
})();
