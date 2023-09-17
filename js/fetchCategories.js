export async function fetchCategories() {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      const categories = await response.json();
      return Array.isArray(categories) ? categories : [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }
  