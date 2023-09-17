export function displayCategories(categories, onCategoryClick) {
    const categoriesContainer = document.querySelector('.categories-container');
  
    categories.forEach((category) => {
      const categoryDiv = createCategoryElement(category);
      categoryDiv.addEventListener('click', () => {
        onCategoryClick(category);
      });
      categoriesContainer.appendChild(categoryDiv);
    });
  
    document.body.appendChild(categoriesContainer);
  }
  
  function createCategoryElement(category) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    categoryDiv.textContent = category;
    return categoryDiv;
  }
  