/* Sharpened Crayon: the only script on the site.
   Hides seasonal notices after their expiry date (data-expires="YYYY-MM-DD").
   TODO: delete the holiday markup itself after Oct 30, 2026 (see HTML comments). */
(function () {
  var now = new Date();
  document.querySelectorAll('[data-expires]').forEach(function (el) {
    var end = new Date(el.getAttribute('data-expires') + 'T23:59:59-07:00');
    if (now > end) el.hidden = true;
  });
})();
