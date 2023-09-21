import { displayProducts } from "./displayProducts.js";
import { products } from "./fetchProducts.js";

let originalProducts = [...products];

async function fetchAndDisplayProducts() {
  originalProducts = [...products];
  displayProducts(products);
}

function sortProductsByPriceAscending() {
  products.sort((a, b) => a.price - b.price);
  displayProducts(products);
}

function sortProductsByPriceDescending() {
  products.sort((a, b) => b.price - a.price);
  displayProducts(products);
}

function resetSorting() {
  products = [...originalProducts];
  displayProducts(products);
}

export {
  fetchAndDisplayProducts,
  sortProductsByPriceAscending,
  sortProductsByPriceDescending,
  resetSorting,
};
