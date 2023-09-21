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

export function displaySingleProduct(fullProduct, productDetailsContainer) {
  if (!fullProduct) {
    console.error("Product data is empty.");
    return;
  }

  const singleProductDiv = createProductElement(fullProduct);
  productDetailsContainer.innerHTML = "";
  productDetailsContainer.appendChild(singleProductDiv);
  displayProductImages(fullProduct.images, productDetailsContainer);
}

function displayProductImages(imageUrls, container) {
  const imageContainer = document.createElement("div");

  imageUrls.forEach((imageUrl) => {
    const imageElement = createElement("img");
    imageElement.src = imageUrl;
    imageContainer.appendChild(imageElement);
  });

  container.appendChild(imageContainer);
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
  const discountPercentage = createElement(
    "p",
    `discount percentage: ${product.discountPercentage}`
  );
  const productRating = createElement("p", `Rating: ${product.rating}`);
  const productStock = createElement("p", `stock: ${product.stock}`);
  const productBrand = createElement("p", `Brand: ${product.brand}`);
  const productCategory = createElement("p", `Category: ${product.category}`);
  const productThumbnail = createElement("img");

  singleProductDiv.appendChild(productTitle);
  singleProductDiv.appendChild(productDescription);
  singleProductDiv.appendChild(productPrice);
  singleProductDiv.appendChild(discountPercentage);
  singleProductDiv.appendChild(productRating);
  singleProductDiv.appendChild(productStock);
  singleProductDiv.appendChild(productBrand);
  singleProductDiv.appendChild(productCategory);
  singleProductDiv.appendChild(productThumbnail);

  return singleProductDiv;
}

function createElement(elementType, textContent) {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  return element;
}
