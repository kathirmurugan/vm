const SEED_PRODUCTS = [
  // ── VEGETABLES ──
  { id: 'seed_v1', nameTamil: 'தக்காளி', nameEnglish: 'Tomato', category: 'vegetables', price: 40, stock: 100, farmer: 'Ramasamy', description: 'Fresh organic tomatoes', imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80' },
  { id: 'seed_v2', nameTamil: 'வெங்காயம்', nameEnglish: 'Onion', category: 'vegetables', price: 50, stock: 200, farmer: 'Murugan', description: 'Red onions', imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=80' },
  { id: 'seed_v3', nameTamil: 'உருளைக்கிழங்கு', nameEnglish: 'Potato', category: 'vegetables', price: 35, stock: 150, farmer: 'Kannan', description: 'Good quality potatoes', imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80' },
  { id: 'seed_v4', nameTamil: 'கத்தரிக்காய்', nameEnglish: 'Brinjal', category: 'vegetables', price: 45, stock: 80, farmer: 'Lakshmi', description: 'Fresh purple brinjal', imageUrl: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=400&q=80' },
  { id: 'seed_v5', nameTamil: 'வெண்டைக்காய்', nameEnglish: 'Ladies Finger', category: 'vegetables', price: 55, stock: 60, farmer: 'Velu', description: 'Tender okra', imageUrl: 'https://images.unsplash.com/photo-1425686566085-364239e23c72?w=400&q=80' },
  { id: 'seed_v6', nameTamil: 'கேரட்', nameEnglish: 'Carrot', category: 'vegetables', price: 60, stock: 90, farmer: 'Ramasamy', description: 'Ooty carrots', imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80' },
  { id: 'seed_v7', nameTamil: 'பச்சை மிளகாய்', nameEnglish: 'Green Chilli', category: 'vegetables', price: 30, stock: 50, farmer: 'Murugan', description: 'Spicy green chillies', imageUrl: 'https://images.unsplash.com/photo-1588267252115-5658b4da481f?w=400&q=80' },
  { id: 'seed_v8', nameTamil: 'முட்டைக்கோஸ்', nameEnglish: 'Cabbage', category: 'vegetables', price: 25, stock: 70, farmer: 'Kannan', description: 'Fresh cabbage', imageUrl: 'https://images.unsplash.com/photo-1593685517234-fc56c80521ca?w=400&q=80' },
  { id: 'seed_v9', nameTamil: 'பூண்டு', nameEnglish: 'Garlic', category: 'vegetables', price: 120, stock: 40, farmer: 'Lakshmi', description: 'Premium garlic', imageUrl: 'https://images.unsplash.com/photo-1540148426941-8f5539ab5cb6?w=400&q=80' },
  { id: 'seed_v10', nameTamil: 'இஞ்சி', nameEnglish: 'Ginger', category: 'vegetables', price: 90, stock: 45, farmer: 'Velu', description: 'Fresh ginger', imageUrl: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=400&q=80' },
  { id: 'seed_v11', nameTamil: 'பீட்ரூட்', nameEnglish: 'Beetroot', category: 'vegetables', price: 40, stock: 60, farmer: 'Ramasamy', description: 'Fresh beetroot', imageUrl: 'https://images.unsplash.com/photo-1593105550262-1b1bce2b61dc?w=400&q=80' },
  { id: 'seed_v12', nameTamil: 'முள்ளங்கி', nameEnglish: 'Radish', category: 'vegetables', price: 25, stock: 50, farmer: 'Murugan', description: 'White radish', imageUrl: 'https://images.unsplash.com/photo-1583095115206-613d9a19c522?w=400&q=80' },
  { id: 'seed_v13', nameTamil: 'வெள்ளரிக்காய்', nameEnglish: 'Cucumber', category: 'vegetables', price: 30, stock: 100, farmer: 'Kannan', description: 'Cooling cucumber', imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80' },
  { id: 'seed_v14', nameTamil: 'புடலங்காய்', nameEnglish: 'Snake Gourd', category: 'vegetables', price: 35, stock: 40, farmer: 'Lakshmi', description: 'Fresh snake gourd', imageUrl: 'https://images.unsplash.com/photo-1628156328325-1e351f0abf10?w=400&q=80' },
  { id: 'seed_v15', nameTamil: 'சுரைக்காய்', nameEnglish: 'Bottle Gourd', category: 'vegetables', price: 20, stock: 60, farmer: 'Velu', description: 'Healthy bottle gourd', imageUrl: 'https://images.unsplash.com/photo-1592520846506-613d9a19c522?w=400&q=80' },

  // ── FRUITS ──
  { id: 'seed_f1', nameTamil: 'மாம்பழம்', nameEnglish: 'Mango', category: 'fruits', price: 150, stock: 200, farmer: 'Ramasamy', description: 'Sweet Alphonso mangoes', imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fd8156?w=400&q=80' },
  { id: 'seed_f2', nameTamil: 'வாழைப்பழம்', nameEnglish: 'Banana', category: 'fruits', price: 40, stock: 300, farmer: 'Murugan', description: 'Fresh yellow bananas', imageUrl: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=400&q=80' },
  { id: 'seed_f3', nameTamil: 'ஆப்பிள்', nameEnglish: 'Apple', category: 'fruits', price: 180, stock: 100, farmer: 'Kannan', description: 'Kashmiri apples', imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fb6c?w=400&q=80' },
  { id: 'seed_f4', nameTamil: 'திராட்சை', nameEnglish: 'Grapes', category: 'fruits', price: 120, stock: 80, farmer: 'Lakshmi', description: 'Seedless green grapes', imageUrl: 'https://images.unsplash.com/photo-1596365548698-38bfbb5cd54a?w=400&q=80' },
  { id: 'seed_f5', nameTamil: 'கொய்யா', nameEnglish: 'Guava', category: 'fruits', price: 60, stock: 120, farmer: 'Velu', description: 'Fresh local guava', imageUrl: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?w=400&q=80' },
  { id: 'seed_f6', nameTamil: 'பப்பாளி', nameEnglish: 'Papaya', category: 'fruits', price: 50, stock: 90, farmer: 'Ramasamy', description: 'Ripe organic papaya', imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&q=80' },
  { id: 'seed_f7', nameTamil: 'தர்பூசணி', nameEnglish: 'Watermelon', category: 'fruits', price: 30, stock: 150, farmer: 'Murugan', description: 'Sweet and juicy', imageUrl: 'https://images.unsplash.com/photo-1587049352847-4d4b1ed7fa35?w=400&q=80' },
  { id: 'seed_f8', nameTamil: 'மாதுளை', nameEnglish: 'Pomegranate', category: 'fruits', price: 160, stock: 60, farmer: 'Kannan', description: 'Red pomegranate', imageUrl: 'https://images.unsplash.com/photo-1615486171448-4ffd59846b08?w=400&q=80' },
  { id: 'seed_f9', nameTamil: 'அன்னாசி', nameEnglish: 'Pineapple', category: 'fruits', price: 70, stock: 70, farmer: 'Lakshmi', description: 'Fresh pineapple', imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80' },
  { id: 'seed_f10', nameTamil: 'சாத்துக்குடி', nameEnglish: 'Sweet Lime', category: 'fruits', price: 80, stock: 110, farmer: 'Velu', description: 'Juicy sweet lime', imageUrl: 'https://images.unsplash.com/photo-1581007421112-9c16922d1066?w=400&q=80' },
  { id: 'seed_f11', nameTamil: 'பேரீச்சம்பழம்', nameEnglish: 'Dates', category: 'fruits', price: 200, stock: 50, farmer: 'Ramasamy', description: 'Sweet dates', imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80' },
  { id: 'seed_f12', nameTamil: 'அத்திப்பழம்', nameEnglish: 'Fig', category: 'fruits', price: 250, stock: 30, farmer: 'Murugan', description: 'Fresh figs', imageUrl: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=400&q=80' },
  { id: 'seed_f13', nameTamil: 'பலாப்பழம்', nameEnglish: 'Jackfruit', category: 'fruits', price: 100, stock: 40, farmer: 'Kannan', description: 'Ripe jackfruit', imageUrl: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=400&q=80' },
  { id: 'seed_f14', nameTamil: 'ஆரஞ்சு', nameEnglish: 'Orange', category: 'fruits', price: 90, stock: 80, farmer: 'Lakshmi', description: 'Nagpur orange', imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&q=80' },
  { id: 'seed_f15', nameTamil: 'எலுமிச்சை', nameEnglish: 'Lemon', category: 'fruits', price: 40, stock: 100, farmer: 'Velu', description: 'Fresh lemons', imageUrl: 'https://images.unsplash.com/photo-1590502593747-422987994828?w=400&q=80' },

  // ── LEAFY GREENS ──
  { id: 'seed_l1', nameTamil: 'பாலக் கீரை', nameEnglish: 'Palak (Spinach)', category: 'leafygreens', price: 20, stock: 50, farmer: 'Ramasamy', description: 'Fresh Palak', imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80' },
  { id: 'seed_l2', nameTamil: 'முருங்கை கீரை', nameEnglish: 'Drumstick Leaves', category: 'leafygreens', price: 15, stock: 40, farmer: 'Murugan', description: 'Iron rich drumstick leaves', imageUrl: 'https://images.unsplash.com/photo-1560601334-a02b3c20050e?w=400&q=80' },
  { id: 'seed_l3', nameTamil: 'அரைக்கீரை', nameEnglish: 'Amaranth Greens', category: 'leafygreens', price: 20, stock: 60, farmer: 'Kannan', description: 'Fresh amaranth greens', imageUrl: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=400&q=80' },
  { id: 'seed_l4', nameTamil: 'சிறுகீரை', nameEnglish: 'Tropical Amaranth', category: 'leafygreens', price: 20, stock: 55, farmer: 'Lakshmi', description: 'Healthy sirukeerai', imageUrl: 'https://images.unsplash.com/photo-1593685517234-fc56c80521ca?w=400&q=80' },
  { id: 'seed_l5', nameTamil: 'புதினா', nameEnglish: 'Mint Leaves', category: 'leafygreens', price: 10, stock: 100, farmer: 'Velu', description: 'Fresh mint', imageUrl: 'https://images.unsplash.com/photo-1628156328325-1e351f0abf10?w=400&q=80' },
  { id: 'seed_l6', nameTamil: 'கொத்தமல்லி', nameEnglish: 'Coriander Leaves', category: 'leafygreens', price: 10, stock: 120, farmer: 'Ramasamy', description: 'Fresh coriander', imageUrl: 'https://images.unsplash.com/photo-1592520846506-613d9a19c522?w=400&q=80' },
  { id: 'seed_l7', nameTamil: 'கறிவேப்பிலை', nameEnglish: 'Curry Leaves', category: 'leafygreens', price: 10, stock: 90, farmer: 'Murugan', description: 'Fresh curry leaves', imageUrl: 'https://images.unsplash.com/photo-1601648057209-64491de1c49b?w=400&q=80' },
  { id: 'seed_l8', nameTamil: 'பொன்னாங்கண்ணி', nameEnglish: 'Sessile Joyweed', category: 'leafygreens', price: 25, stock: 40, farmer: 'Kannan', description: 'Good for eyes', imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80' },
  { id: 'seed_l9', nameTamil: 'வெந்தயக் கீரை', nameEnglish: 'Fenugreek Greens', category: 'leafygreens', price: 25, stock: 45, farmer: 'Lakshmi', description: 'Fresh methi leaves', imageUrl: 'https://images.unsplash.com/photo-1628156328325-1e351f0abf10?w=400&q=80' },
  { id: 'seed_l10', nameTamil: 'முளைக்கீரை', nameEnglish: 'Amaranth', category: 'leafygreens', price: 20, stock: 65, farmer: 'Velu', description: 'Fresh mulaikeerai', imageUrl: 'https://images.unsplash.com/photo-1593685517234-fc56c80521ca?w=400&q=80' }
];

document.addEventListener('DOMContentLoaded', () => {
  let products = JSON.parse(localStorage.getItem('farmer_products')) || [];
  
  // Deduplicate products
  const uniqueProducts = [];
  const seenIds = new Set();
  const seenNames = new Set();
  
  for (const p of products) {
    if (!p.id || !p.nameEnglish) continue;
    if (seenIds.has(p.id) || seenNames.has(p.nameEnglish.toLowerCase())) continue;
    
    seenIds.add(p.id);
    seenNames.add(p.nameEnglish.toLowerCase());
    uniqueProducts.push(p);
  }
  
  products = uniqueProducts;

  // Add missing SEED_PRODUCTS
  let changed = false;
  for (const seed of SEED_PRODUCTS) {
    if (!seenIds.has(seed.id) && !seenNames.has(seed.nameEnglish.toLowerCase())) {
      products.push(seed);
      changed = true;
    }
  }

  if (changed || products.length !== uniqueProducts.length) {
    localStorage.setItem('farmer_products', JSON.stringify(products));
  }
});
