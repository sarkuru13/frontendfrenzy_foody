document.getElementById('payment-method').addEventListener('change', function() {
  const cardDetails = document.getElementById('card-details');
  if (this.value === 'credit') {
      cardDetails.disabled = false;
  } else {
      cardDetails.disabled = true;
  }
});

document.getElementById('place-order-btn').addEventListener('click', function() {
  const form = document.getElementById('checkout-form');
  if (form.checkValidity()) {
      alert('Order placed successfully!');
  } else {
      alert('Please fill in all the required fields.');
  }
});
