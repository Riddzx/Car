const toggleButton = document.querySelector("#toggle-mode");
const themeContainer = document.querySelector(".theme-container");
const iconMode = document.querySelector("#icon-mode");
document.querySelector("#toggle-mode").onclick = (e) => {
  themeContainer.classList.toggle("light-mode");

  //icon swith mode
  toggleButton.innerHTML = themeContainer.classList.contains("light-mode")
    ? '<i data-feather="toggle-right"></i>'
    : '<i data-feather="toggle-left"></i>';
  iconMode.innerHTML = themeContainer.classList.contains("light-mode")
    ? '<i data-feather="sun"></i>'
    : '<i data-feather="moon"></i>';

  feather.replace();
  e.preventDefault();
};
