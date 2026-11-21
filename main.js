(function () {
  var root = document.documentElement;
  var burger = document.getElementById("hamburger");
  var drawer = document.getElementById("mobDrawer");
  var overlay = document.getElementById("mobOverlay");
  var closeBtn = document.getElementById("mobClose");
  function openMenu() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    root.style.overflow = "hidden";
    if (closeBtn) { closeBtn.focus(); }
  }
  function closeMenu() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    root.style.overflow = "";
  }
  if (burger && drawer) {
    burger.addEventListener("click", openMenu);
    overlay.addEventListener("click", closeMenu);
    closeBtn.addEventListener("click", closeMenu);
    drawer.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) { closeMenu(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeMenu(); }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) { closeMenu(); }
    });
  }
  var items = document.querySelectorAll(".faq-item");
  Array.prototype.forEach.call(items, function (item) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");
    btn.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
    });
  });
})();
