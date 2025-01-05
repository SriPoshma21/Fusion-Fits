function navigateToCategory(category) {
    localStorage.setItem('selectedCategory', category);
    window.location.href = 'products.html';
  }
  function handleSearch(event) {
    event.preventDefault(); // Prevent default form submission

    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();

    // Check for specific categories
    if (searchInput.includes('women')) { 
      navigateToCategory('women');
    } else if (searchInput.includes('men')) {
      navigateToCategory('men');
    } else if (searchInput.includes('kids')) {
      navigateToCategory('kids');
    } else if (searchInput.includes('newborn')) {
      navigateToCategory('newborn');
    } else {
      alert("No matching category found!");
    }
  }


// toggle filter options
function toggleFilterOptions() {
  const filterOptions = document.getElementById("filter-options");
  if (filterOptions.classList.contains("hidden")) {
    filterOptions.classList.remove("hidden");
    filterOptions.style.display = "block"; // Ensure visibility
  } else {
    filterOptions.classList.add("hidden");
    filterOptions.style.display = "none"; // Hide when toggled again
  }
}

// Search functionality in main.html
// document.querySelector('form[role="search"]').addEventListener('submit', (event) => {
// event.preventDefault(); // Prevent form submission
// const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
// if (searchQuery) {
//   localStorage.setItem('searchQuery', searchQuery); // Store search query in localStorage
//   window.location.href = 'products.html'; // Navigate to products page
// }
// });
