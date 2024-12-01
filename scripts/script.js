const hamburgerMenu = document.getElementById("nav-icon2");

const mobileNav = document.getElementById("mobileNav");

hamburgerMenu.addEventListener("click", () => {
  console.log("haha");
  mobileNav.classList.toggle("showMobileMenu");
});
