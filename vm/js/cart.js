// Simple local storage cart implementation
document.addEventListener('DOMContentLoaded', () => {
  window.addToCart = (id, name, price, imgId) => {
    const qtyInput = document.getElementById(`qty-${id}`);
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    
    let cart = JSON.parse(localStorage.getItem('greenharvest_cart')) || [];
    
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.qty += qty;
    } else {
      cart.push({ id, name, price, qty, img: imgId });
    }
    
    localStorage.setItem('greenharvest_cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show visual feedback
    const btn = document.getElementById(`btn-${id}`);
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Added! ✓';
      btn.style.backgroundColor = '#16a34a';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = '';
      }, 1500);
    }
  };

  window.changeQty = (id, delta) => {
    const input = document.getElementById(`qty-${id}`);
    if (input) {
      let val = parseInt(input.value) + delta;
      if (val < 1) val = 1;
      input.value = val;
    }
  };

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('greenharvest_cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.setAttribute('data-count', count);
      // Optional: visually update cart icon with a badge if added to CSS
    }
  };

  updateCartCount();
});
