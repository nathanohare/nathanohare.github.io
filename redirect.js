// Sends anything under the old web app address (/Chem-Illustrator/...) to the same place under
// the new one (/Chemweave/...), keeping the ?query and #hash so shared links open the same thing.
(function () {
  var NEW = '/Chemweave/';
  var p = location.pathname.replace(/^\/Chem-Illustrator(\/|$)/i, NEW);
  if (p === location.pathname) p = NEW;
  location.replace(p + location.search + location.hash);
})();
