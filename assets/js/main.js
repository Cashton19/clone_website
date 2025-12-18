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

  hamburgerMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
    closeBtn.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });

  dropDown.addEventListener("click", (e) => {
    dropDownList.classList.toggle("active");
    dropDown.classList.toggle("active"); // i'm using this for carrat rotation not selecting the entire dropdown.. so don't get confused
  });

  deepDropDown.addEventListener("click", (e) => {
    deepDropDownList.classList.toggle("active");
    deepDropDown.classList.toggle("active");
  });
}
hamburger();
