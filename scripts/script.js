const hamburgerMenu = document.getElementById("nav-icon2");

const mobileNav = document.getElementById("mobileNav");

const navIcon = document.getElementById("nav-icon2");

hamburgerMenu.addEventListener("click", () => {
  console.log("haha");
  mobileNav.classList.toggle("showMobileMenu");
  navIcon.classList.toggle("nav-icon-open");
});
