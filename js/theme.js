const toggleButton = document.querySelector("#toggle-mode");
const themeContainer = document.querySelector(".theme-container");
const iconMode = document.querySelector("#icon-mode");
document.querySelector("#toggle-mode").onclick = (e) => {
  themeContainer.classList.toggle("light-mode");
  e.preventDefault();

  //icon swith mode
  if (themeContainer.classList.contains("light-mode")) {
    toggleButton.innerHTML = '<i data-feather="toggle-right"></i>';
    iconMode.innerHTML = '<i data-feather="sun"></i>';
  } else {
    toggleButton.innerHTML = '<i data-feather="toggle-left"></i>';
    iconMode.innerHTML = '<i data-feather="moon"></i>';
  }

  feather.replace();
};
