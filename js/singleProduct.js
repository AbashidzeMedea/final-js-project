export async function fetchSingleProduct(productId) {
  try {
    const apiUrl = `https://dummyjson.com/products/${productId}`;
    const response = await fetch(apiUrl);
    const productData = await response.json();

    if (productData.id) {
      return productData;
    } else {
      console.error("Product data is missing the ID.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export function displaySingleProduct(product) {
  if (!product) {
    console.error("Product data is empty.");
    return;
  }

  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";
  const productDivs = document.getElementsByClassName("product");

  for (const div of productDivs) {
    div.style.height = "50px";
  }

  const singleProductDiv = createProductElement(product);
  productContainer.appendChild(singleProductDiv);
}

function createProductElement(product) {
  const singleProductDiv = document.createElement("div");
  singleProductDiv.classList.add("single-product");

  const productTitle = createElement("h2", product.title);
  const productDescription = createElement(
    "p",
    `Description: ${product.description}`
  );
  const productPrice = createElement("p", `Price: $${product.price}`);

  singleProductDiv.appendChild(productTitle);
  singleProductDiv.appendChild(productDescription);
  singleProductDiv.appendChild(productPrice);

  return singleProductDiv;
}

function createElement(elementType, textContent) {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  return element;
}
