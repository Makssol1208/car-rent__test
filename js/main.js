/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");
const node = document.getElementById("node");

mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");

  document.body.classList.toggle("body_overlay");
  document.body.classList.toggle("no-scroll");
  document.body.classList.toggle("overflow");
});

document.addEventListener("mousedown", (e) => {
  if (!node.contains(e.target) && !mobileNavButton.contains(e.target)) {
    mobileNav.classList.remove("active");
    document.body.classList.remove("body_overlay");
    document.body.classList.remove("overflow");
  }
});
