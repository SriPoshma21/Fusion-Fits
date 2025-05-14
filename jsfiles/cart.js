// Fetch cart data from localStorage
document.getElementById("chk-btn").addEventListener("click", () => {
  const errorMsg = document.getElementById("error-msg");

  // 🔄 Get the latest cart data from localStorage
  const latestCartData = JSON.parse(localStorage.getItem("shoppingdata")) || [];

  if (latestCartData.length === 0) {
    errorMsg.textContent = "🛒 Your cart is empty. Please select items before proceeding.";
    return;
  }

  // ✅ Clear previous error and continue
  errorMsg.textContent = "";
  window.location.href = "checkoutpage.html";
});

let cartData = JSON.parse(localStorage.getItem("shoppingdata")) || [];

// Function to render cart items
function renderCart() {
  const cartProducts = document.querySelector(".cart-products");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");

  cartProducts.innerHTML = "";
  let subtotal = 0;

  cartData.map((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-details">
        <h2 class="product-name">${product.name}</h2>
      </div>
      <div class="product-quantity">
        <button class="quantity-btn decrement">-</button>
        <input type="text" class="quantity-input" value="${product.quantity}" readonly>
        <button class="quantity-btn increment">+</button>
      </div>
      <p class="product-price">₹${product.price * product.quantity}</p>
    `;

    // Create the remove button
    let removeBtn = document.createElement("div");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerText = "❌";
    cartItem.append(removeBtn);

    // Add remove functionality
    removeBtn.addEventListener("click", () => {
      // Remove the item from cartData
      cartData.splice(index, 1);

      // Update localStorage and re-render the cart
      updateCart();
    });

    // Add event listeners for increment and decrement
    cartItem.querySelector(".decrement").addEventListener("click", () => {
      if (product.quantity > 1) {
        product.quantity -= 1;
        updateCart();
      }
    });

    cartItem.querySelector(".increment").addEventListener("click", () => {
      product.quantity += 1;
      updateCart();
    });

    cartProducts.appendChild(cartItem);

    // Calculate subtotal
    subtotal += product.price * product.quantity;
  });

  // Update subtotal and total
  subtotalEl.textContent = `₹${subtotal}`;
  totalEl.textContent = `₹${subtotal}`;
}

// Function to update cart in localStorage and re-render
function updateCart() {
  localStorage.setItem("shoppingdata", JSON.stringify(cartData));
  renderCart();
}

// Initial render
renderCart();
