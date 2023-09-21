let products = []; 
export async function fetchProductsForCategory(category) {
  try {
    const apiUrl = `https://dummyjson.com/products/category/${category}`;
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    
    if (Array.isArray(responseData.products) && responseData.products.length > 0) {
      
      products = responseData.products;
      return products;
    } else {
      console.log(`No products available for category: ${category}`);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return [];
  }
}

export { products };
  