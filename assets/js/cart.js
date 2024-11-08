document.addEventListener('DOMContentLoaded', function () {
  // Get elements related to the cart
  const quantityButtons = document.querySelectorAll('.quantity-btn');
  const removeButtons = document.querySelectorAll('.remove-btn');
  const totalPriceElement = document.querySelector('.total-price');
  const subtotalElement = document.querySelector('.subtotal');
  const deliveryChargeElement = document.querySelector('.delivery-charge');
  const taxElement = document.querySelector('.tax');
  const cartItems = document.querySelectorAll('.cart-item');
  
  let subtotal = 0;
  let deliveryCharge = 3.00;  // Fixed delivery charge
  let taxRate = 0.08;  // Tax rate (8%)
  
  // Function to update the total and subtotal values
  function updateCart() {
      subtotal = 0;

      // Loop through each cart item and calculate subtotal
      cartItems.forEach(item => {
          const priceElement = item.querySelector('.item-price');
          const quantityElement = item.querySelector('.quantity');
          const price = parseFloat(priceElement.textContent.replace('₹', '').trim()); // Remove ₹ and convert to float
          const quantity = parseInt(quantityElement.textContent);

          subtotal += price * quantity;
      });

      const tax = subtotal * taxRate;
      const total = subtotal + tax + deliveryCharge;

      // Update the displayed values
      subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
      taxElement.textContent = `₹${tax.toFixed(2)}`;
      totalPriceElement.textContent = `₹${total.toFixed(2)}`;
      deliveryChargeElement.textContent = `₹${deliveryCharge.toFixed(2)}`;
  }

  // Event listeners for quantity buttons
  quantityButtons.forEach(button => {
      button.addEventListener('click', function () {
          const cartItem = this.closest('.cart-item');
          const quantityElement = cartItem.querySelector('.quantity');
          let currentQuantity = parseInt(quantityElement.textContent);

          // Check if it is a minus or plus button
          if (this.textContent === '-') {
              if (currentQuantity > 1) {
                  currentQuantity--;
              }
          } else if (this.textContent === '+') {
              currentQuantity++;
          }

          // Update the quantity display
          quantityElement.textContent = currentQuantity;

          // Update the total price and subtotal
          updateCart();
      });
  });

  // Event listeners for remove buttons
  removeButtons.forEach(button => {
      button.addEventListener('click', function () {
          const cartItem = this.closest('.cart-item');
          cartItem.classList.add('fade-out'); // Apply fade-out animation
          
          // Remove the item after the fade-out animation
          setTimeout(() => {
              cartItem.remove();
              updateCart(); // Recalculate the total after removal
          }, 500); // Fade-out duration (0.5s)
      });
  });

  // Initial calculation of the cart total
  updateCart();
});
