// script.js

document.addEventListener('DOMContentLoaded', function() {
    const mainCategorySelect = document.getElementById('mainCategory');
    const subCategorySelect = document.getElementById('subCategory');
    const bookForm = document.getElementById('bookForm');
  
    // Load main categories
    fetch('https://localhost:7013/api/MainCategoriesFromEF')
      .then(response => response.json())
      .then(data => {
        data.forEach(category => {
          const option = document.createElement('option');
          option.value = category.mainCategoryId;
          option.textContent = category.name;
          mainCategorySelect.appendChild(option);
        });
      })
      .catch(error => console.error('Error fetching main categories:', error));
  
    // Load subcategories based on selected main category
    mainCategorySelect.addEventListener('change', function() {
      const mainCategoryId = this.value;
      subCategorySelect.innerHTML = '<option value="" disabled selected>Select Sub Category</option>'; // Reset subcategory options
  
      fetch(`https://localhost:7013/api/MainCategoriesFromEF/subcategories/${mainCategoryId}`)
        .then(response => response.json())
        .then(data => {
          data.forEach(subcategory => {
            const option = document.createElement('option');
            option.value = subcategory.name;
            option.textContent = subcategory.name;
            subCategorySelect.appendChild(option);
          });
        })
        .catch(error => console.error('Error fetching subcategories:', error));
    });
  
    
  });
  