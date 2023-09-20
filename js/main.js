import { fetchCategories } from "./fetchCategories.js";
import { fetchProductsForCategory } from "./fetchProducts.js";
import { displayCategories } from "./displayCategories.js";
import { displayProducts } from "./displayProducts.js";


const productsContainer = document.querySelector(".products-container");

async function main() {
  const categories = await fetchCategories();
  if (categories.length > 0) {
    displayCategories(categories, onCategoryClick);
  } else {
    console.log("No category data available.");
  }
}

async function onCategoryClick(category) {
  try {
    const products = await fetchProductsForCategory(category);

    if (products.length > 0) {
      const categoryElements = document.getElementsByClassName("category");

      for (const element of categoryElements) {
        element.style.height = "50px";
      }
      productsContainer.innerHTML = "";

      displayProducts(products);
    } else {
      console.log(`No products available for category: ${category}`);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

main();
