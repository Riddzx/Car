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

    // memasukkan image , title dan harga sesuai dari card nya
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
