/* Tiny hash router: #projects, #skills, #contact ... (no hash = home) */
(function () {
  var views = document.querySelectorAll(".view");
  var links = document.querySelectorAll(".nav a");

  function show() {
    var id = location.hash.slice(1) || "home";
    var exists = Array.prototype.some.call(views, function (v) { return v.id === id; });
    if (!exists) id = "home";

    views.forEach(function (v) {
      v.hidden = v.id !== id;
      if (v.id === id) document.title = v.dataset.title;
    });

    links.forEach(function (a) {
      if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", show);
  show();
})();