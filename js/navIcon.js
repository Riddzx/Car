// Toglle class active hamburger-menu---------------------------------------
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle(
    "active"
  ); /*class yang dituju tidak menggunakan TITIK*/
  e.preventDefault();
};

//   klik di luar rnavbar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove(
      "active"
    ); /*class yang dituju tidak menggunakan TITIK*/
  }
});

// ---------------------------------------------------------------toggle class active search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  e.preventDefault();
  searchBox.focus();
  if (searchBox.classList.contains("active")) {
  } else {
    searchBox.value = "";
  }
};
// klik diluar search menghilangkan search-form
const searchButton = document.querySelector("#search-button");
document.addEventListener("click", (e) => {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
