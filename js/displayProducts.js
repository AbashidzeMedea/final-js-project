import { fetchSingleProduct } from './singleProduct.js';
import { displaySingleProduct } from './singleProduct.js';

export function displayProducts(products) {
  const productsContainer = document.querySelector(`.products-container`);

  products.forEach((product) => {
    const productDiv = createProductElement(product);
  
    productDiv.addEventListener('click', async () => {
      try {
        const fullProduct = await fetchSingleProduct(product.id);
        const productDetailsWindow = window.open('productDetails.html', '_blank');
        
        if (productDetailsWindow) {
          
          productDetailsWindow.onload = function () {
            const productDetailsContainer = productDetailsWindow.document.querySelector('.product-details-container');
            displaySingleProduct(fullProduct, productDetailsContainer);
          };
        } else {
          console.error('Failed to open a new window.');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    });
  
    productsContainer.appendChild(productDiv);
  });
  
  document.body.appendChild(productsContainer);
}  

function createProductElement(product) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const productTitle = createElement('h2', product.title);
  const productPrice = createElement('p', `Price: $${product.price}`);

  productDiv.appendChild(productTitle);

  productDiv.appendChild(productPrice);

  return productDiv;
}

function createElement(elementType, textContent) {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  return element;
}
