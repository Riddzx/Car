const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// add item in recommendation to cart
const buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", addToCart);

// add item in shop to cart
const cardButton = document.querySelectorAll(".card-button");
cardButton.forEach((button) => {
  button.addEventListener("click", addToCart);
});

// Remove item in cart
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
