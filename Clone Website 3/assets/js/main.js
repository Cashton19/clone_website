/* ==================================================
                Hamburger-Menu logic
================================================== */

function hamburger() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navBar = document.querySelector(".nav-bar");
  const overlay = document.querySelector(".nav-bar__overlay");
  const closeBtn = document.querySelector(".hamburger-menu >:last-child");
  const dropDown = document.querySelectorAll(".nav-bar__dropdown--carat")[0]; //can't use .nav-bar__dropdown because it's a ul whis is already hidden and it wont appear until an event
  const dropDownList = document.querySelector(".nav-bar__dropdown");
  const deepDropDown = document.querySelectorAll(
    ".nav-bar__dropdown--carat"
  )[1];
  const deepDropDownList = document.querySelector(".nav-bar__deep-dropdown");
  const mediaQuery = window.matchMedia("(max-width: 1023px)");

  function hamburgerToggle() {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
    closeBtn.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  }

  function dropDownToggle() {
    dropDownList.classList.toggle("active");
    dropDown.classList.toggle("active"); // i'm using this for carrat rotation not selecting the entire dropdown.. so don't get confused
  }

  function deepDropDownToggle() {
    deepDropDownList.classList.toggle("active");
    deepDropDown.classList.toggle("active");
  }

  let active = false;

  function enable() {
    if (active) return;
    hamburgerMenu.addEventListener("click", hamburgerToggle);
    dropDown.addEventListener("click", dropDownToggle);
    deepDropDown.addEventListener("click", deepDropDownToggle);
    active = true;
  }

  function disable() {
    if (!active) return;
    hamburgerMenu.removeEventListener("click", hamburgerToggle);
    dropDown.removeEventListener("click", dropDownToggle);
    deepDropDown.removeEventListener("click", deepDropDownToggle);
    active = false;
  }

  mediaQuery.addEventListener("change", (e) => {
    if (e.matches) enable();
    else disable();
  });

  if (mediaQuery.matches) enable();
}

hamburger();

/* ==================================================
                Header scroll logic
================================================== */

const pageHeader = document.querySelector(".header");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    pageHeader.classList.add("scrolled");
  } else {
    pageHeader.classList.remove("scrolled");
  }
});
