function renderProducts(products) {
  const container = document.getElementById("productContainer");

  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  container.innerHTML = products.map(p => `
    <div class="product-card">
      <h3>${p.nameTamil} / ${p.nameEnglish}</h3>
      <p>👨‍🌾 ${p.farmer}</p>
      <p>₹${p.price} / kg</p>
      <p>Stock: ${p.stock} kg</p>
    </div>
  `).join("");
}