document.addEventListener('DOMContentLoaded', () => {
  const category = window.CURRENT_CATEGORY || 'vegetables';
  const products = JSON.parse(localStorage.getItem('farmer_products')) || [];

  const filtered = products.filter(p => p.category === category);

  if (filtered.length === 0) return;

  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const sectionDiv = document.createElement('div');
  sectionDiv.className = 'farmer-products-section';

  sectionDiv.innerHTML = `
    <div class="farmer-section-header">
      <h2>👨‍🌾 Products from Local Farmers</h2>
      <span class="badge-count">${filtered.length} item${filtered.length > 1 ? 's' : ''}</span>
    </div>
  `;

  const farmerGrid = document.createElement('div');
  farmerGrid.className = 'product-grid';
  farmerGrid.style.padding = '0';

  const categoryEmoji = {
    vegetables: '🥬',
    fruits: '🍎',
    leafygreens: '🌿'
  };

  const imageMap = {
  "tomato": "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
  "onion": "https://upload.wikimedia.org/wikipedia/commons/2/25/Onion_on_White.JPG",
  "potato": "https://upload.wikimedia.org/wikipedia/commons/6/60/Potato_and_cross_section.jpg",
  "brinjal": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Aubergine.jpg",
  "ladies finger": "https://upload.wikimedia.org/wikipedia/commons/3/31/Okra.jpg",
  "carrot": "https://upload.wikimedia.org/wikipedia/commons/7/70/Carrot.jpg",
  "green chilli": "https://upload.wikimedia.org/wikipedia/commons/8/88/Green_Chili.jpg",
  "cabbage": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Cabbage_and_cross_section_on_white.jpg",
  "garlic": "https://upload.wikimedia.org/wikipedia/commons/2/22/Garlic.jpg",
  "ginger": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Ginger.jpg",
  "beetroot": "https://upload.wikimedia.org/wikipedia/commons/2/29/Beetroot_jm26647.jpg",
  "radish": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Radish.jpg",
  "cucumber": "https://upload.wikimedia.org/wikipedia/commons/9/96/Cucumis_sativus.jpg",
  "snake gourd": "https://upload.wikimedia.org/wikipedia/commons/7/78/Snake_Gourd.jpg",
  "bottle gourd": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Bottle_gourd.jpg"
};

const productName = englishName.trim().toLowerCase();

const imageUrl = imageMap[productName];

  filtered.forEach((prod, index) => {
    const tamilName = prod.nameTamil || prod.name || 'Unknown';
    let englishName = prod.nameEnglish || prod.name || 'Unknown';

    if (typeof getBilingualName === 'function' && tamilName) {
      const bilingual = getBilingualName(tamilName);

      if (bilingual.english && bilingual.english !== tamilName) {
        englishName = bilingual.english;
      }
    }

    const prodId = prod.id || ('farmer_' + index);
    const emoji = categoryEmoji[prod.category] || '🌱';

    const farmerName = prod.farmer || 'Local Farmer';
    const price = prod.price || 0;
    const stock = prod.stock || 0;
    const desc = prod.description || '';

    const imageUrl =
      prod.imageUrl ||
      defaultImages[englishName] ||
      "https://via.placeholder.com/300x200?text=Vegetable";

    const card = document.createElement('div');
    card.className = 'product-card animate-fade-in';
    card.style.animationDelay = (index * 0.1) + 's';

    card.innerHTML = `
      <img
        src="${imageUrl}"
        alt="${englishName}"
        class="product-img"
        style="width:100%;height:200px;object-fit:cover;border-radius:15px 15px 0 0;"
        onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'"
      >

      <div class="product-info">
        <div class="product-name-bilingual">
          <span class="name-english">${englishName}</span>
          <span class="name-tamil">${tamilName}</span>
        </div>

        <div class="farmer-badge">
          👨‍🌾 ${farmerName}
        </div>

        <div class="price">
          ₹${price} / kg
        </div>

        <div class="stock">
          In Stock: ${stock} kg
        </div>

        ${desc ? `<div class="benefits">${desc}</div>` : ''}

        <div class="card-actions">
          <div class="qty-control">
            <button onclick="changeQty('${prodId}', -1)">-</button>

            <input
              type="number"
              id="qty-${prodId}"
              value="1"
              min="1"
            >

            <button onclick="changeQty('${prodId}', 1)">+</button>
          </div>

          <button
            class="btn btn-primary add-btn"
            id="btn-${prodId}"
            onclick="addToCart('${prodId}', '${englishName}', ${price}, '${emoji}')"
          >
            Add to Cart
          </button>
        </div>
      </div>
    `;

    farmerGrid.appendChild(card);
  });

  sectionDiv.appendChild(farmerGrid);
  grid.parentNode.insertBefore(sectionDiv, grid.nextSibling);
});