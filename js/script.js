// Toglle class active hamburger-menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle(
    "active"
  ); /*class yang dituju tidak menggunakan TITIK*/
  e.preventDefault();
};

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
//   klik di luar rnavbar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove(
      "active"
    ); /*class yang dituju tidak menggunakan TITIK*/
  }
});

// ----------------------------------------------------memunculkan Modal container
const modalContainer = document.querySelector(".modal");
const modalButtons = document.querySelectorAll(".modal-button");

// setiap button yang di klik di element manapun akan memunculkan modal detailnya
modalButtons.forEach((btn) => {
  btn.onclick = (e) => {
    const description = btn.dataset.description;
    const imageSrc = btn.dataset.image;
    const title = btn.dataset.title;
    const price = btn.dataset.price;
    const sale = btn.dataset.sale;

    const descriptionElement = document.querySelector(".description-product");
    const imageElement = document.querySelector(".product-image");
    const titleElement = document.querySelector(".title-product");
    const priceElement = document.querySelector(".price-product");
    const saleElement = document.querySelector(".product-sale");
    const buyButton = document.querySelector(".buy-button");

    buyButton.setAttribute("data-product", title);
    buyButton.setAttribute("data-price", sale);
    buyButton.setAttribute("data-image", imageSrc);

    descriptionElement.textContent = description;
    imageElement.src = imageSrc;
    titleElement.textContent = title;
    priceElement.textContent = price;
    saleElement.textContent = sale;

    modalContainer.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".close-icon").onclick = (e) => {
  modalContainer.style.display = "none";
  e.preventDefault();
};

// ketika di klik di semua elemetn selain dari element modalnya maka akan menghilangkan modal detailnya
window.onclick = (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
};
// ----------------------------------------SHOPPING CART

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// menghapus item di keranjang
const cart = document.querySelector("#cart");
cart.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-button")) {
    const item = event.target.closest(".card-items");
    const cartItems = cart.querySelectorAll(".card-items");
    if (cartItems.length === 1) {
      // Jika hanya ada 1 item, periksa apakah item yang dihapus adalah satu-satunya item
      if (item === cartItems[0]) {
        cart.classList.remove("active");
      }
    }
    item.remove();
  }
});
function removeItem(event) {
  const item = event.target.closest(".card-items");
  const cartItems = cart.querySelectorAll(".card-items");
  if (cartItems.length === 1) {
    // Jika hanya ada 1 item,  apakah item yang dihapus adalah satu-satunya item
    if (item === cartItems[0]) {
      cart.classList.remove("active");
    }
  }
  item.remove();

  // Perbarui nilai notifikasi
  const updatedCartItems = cart.querySelectorAll(".card-items");
  notificationBadge.textContent = updatedCartItems.length;

  // Periksa apakah ada item di keranjang belanja, jika tidak, sembunyikan notifikasi
  if (updatedCartItems.length === 0) {
    notificationBadge.style.display = "none";
  }
}
// icon notifikasi keranjang
const shoppingCartIcon = document.querySelector("#shopping-cart");
const notificationBadge = document.createElement("span");
notificationBadge.classList.add("notification-badge");

const buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", addToCart);

const cardButton = document.querySelectorAll(".card-button");
cardButton.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  const template = document.querySelector("#product-template");
  const clone = template.content.cloneNode(true);
  const image = clone.querySelector(".product-img");
  const productName = clone.querySelector(".product-name");
  const itemPrice = clone.querySelector(".item-price");
  const removeButton = clone.querySelector(".remove-button");

  if (this.classList.contains("buy-button")) {
    // Jika tombol "buy-button" di klik
    productName.textContent = this.getAttribute("data-product");
    itemPrice.textContent = `Price: $` + this.getAttribute("data-price");
    image.src = this.getAttribute("data-image");
  } else if (this.classList.contains("card-button")) {
    // Jika tombol "card-button" di klik
    const card = this.closest(".content-card");
    const cardImage = card.querySelector(".content-img img");
    const cardTitle = card.querySelector(".content-text h3");
    const cardPrice = card.querySelector(".content-text .price-shop");

    image.src = cardImage.src;
    productName.textContent = cardTitle.textContent;
    itemPrice.textContent = cardPrice.textContent;
  }

  removeButton.addEventListener("click", removeItem);

  // Append cloned item to the shopping cart
  cart.appendChild(clone);

  // Add active class to shopping cart to show it
  // cart.classList.add("active");

  // Prevent default button behavior (e.g., form submission)
  event.preventDefault();

  feather.replace();

  // icon notifikasi keranjang
  const cartItems = cart.querySelectorAll(".card-items");
  notificationBadge.textContent = cartItems.length;
  notificationBadge.style.display = "inline-block";
}
// Tambahkan notifikasi badge ke dalam ikon shopping cart
shoppingCartIcon.appendChild(notificationBadge);
