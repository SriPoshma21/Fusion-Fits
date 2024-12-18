// Load wishlist data from localStorage
let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];

// Function to render wishlist items
function renderWishlist() {
  const wishlistItems = document.getElementById("wishlistItems");
  wishlistItems.innerHTML = "";

  if (wishlistData.length === 0) {
    wishlistItems.innerHTML = "<p>Your wishlist is empty!</p>";
    return;
  }

  wishlistData.forEach((product, index) => {
    const wishlistCard = document.createElement("div");
    wishlistCard.className = "wishlist-card";
    wishlistCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="wishlist-image">
      <div class="wishlist-details">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">₹${product.price}</p>
        <div class="wishlist-actions">
          <button class="remove-btn">Remove</button>
        </div>
      </div>
    `;
    wishlistItems.appendChild(wishlistCard);

    // Remove button functionality
    const removeBtn = wishlistCard.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      wishlistData.splice(index, 1); // Remove item from the array
      localStorage.setItem("wishlistData", JSON.stringify(wishlistData)); // Update localStorage
      renderWishlist(); // Re-render the wishlist
    });
  });
}

// Initial render
renderWishlist();