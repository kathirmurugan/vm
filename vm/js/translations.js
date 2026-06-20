/**
 * translations.js — All UI strings in Tamil and English
 * Keys are used as data-i18n attributes in HTML elements
 */
const TRANSLATIONS = {
  // ── Navbar ──
  'nav.home': { en: 'Home', ta: 'முகப்பு' },
  'nav.vegetables': { en: 'Vegetables', ta: 'காய்கறிகள்' },
  'nav.fruits': { en: 'Fruits', ta: 'பழங்கள்' },
  'nav.leafygreens': { en: 'Leafy Greens', ta: 'கீரைகள்' },
  'nav.about': { en: 'About', ta: 'எங்களைப் பற்றி' },
  'nav.contact': { en: 'Contact', ta: 'தொடர்பு' },
  'nav.cart': { en: 'Cart', ta: 'கூடை' },
  'nav.login': { en: 'Login', ta: 'உள்நுழைய' },
  'nav.logout': { en: 'Logout', ta: 'வெளியேறு' },
  'nav.dashboard': { en: 'Dashboard', ta: 'டாஷ்போர்ட்' },
  'nav.addproduct': { en: 'Add Product', ta: 'பொருள் சேர்' },

  // ── Hero Section ──
  'hero.badge': { en: 'Farm Fresh • 100% Organic', ta: 'பண்ணை புதிது • 100% இயற்கை' },
  'hero.title1': { en: 'Fresh From', ta: 'புதிதாக' },
  'hero.title2': { en: 'Farm', ta: 'பண்ணையிலிருந்து' },
  'hero.title3': { en: 'to Your Table', ta: 'உங்கள் மேசைக்கு' },
  'hero.desc': { en: 'Skip the middlemen. Get the freshest organic fruits, vegetables and leafy greens delivered straight from verified local farmers to your doorstep.', ta: 'இடைத்தரகர்களைத் தவிர்க்கவும். சரிபார்க்கப்பட்ட உள்ளூர் விவசாயிகளிடமிருந்து நேரடியாக உங்கள் வீட்டு வாசலுக்கு புதிய இயற்கை பழங்கள், காய்கறிகள் மற்றும் கீரைகளைப் பெறுங்கள்.' },
  'hero.shopnow': { en: '🛒 Shop Now', ta: '🛒 இப்போது வாங்கு' },
  'hero.seller': { en: '👨‍🌾 Become a Seller', ta: '👨‍🌾 விற்பனையாளர் ஆகுங்கள்' },
  'hero.stat.farmers': { en: 'Local Farmers', ta: 'உள்ளூர் விவசாயிகள்' },
  'hero.stat.customers': { en: 'Happy Customers', ta: 'மகிழ்ச்சியான வாடிக்கையாளர்கள்' },
  'hero.stat.products': { en: 'Products', ta: 'பொருட்கள்' },

  // ── Section Headers ──
  'section.whychoose': { en: 'Why Choose Us', ta: 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்' },
  'section.whychoose.title': { en: 'Everything You Need in One Place', ta: 'உங்களுக்கு தேவையான அனைத்தும் ஒரே இடத்தில்' },
  'section.whychoose.desc': { en: 'We make healthy eating easy with farm-fresh produce, transparent sourcing, and lightning-fast delivery.', ta: 'பண்ணை-புதிய விளைபொருட்கள், வெளிப்படையான விநியோகம் மற்றும் மின்னல் வேக டெலிவரி மூலம் ஆரோக்கியமான உணவை எளிதாக்குகிறோம்.' },
  'section.categories': { en: 'Shop by Category', ta: 'வகை வாரியாக வாங்கு' },
  'section.categories.title': { en: 'Explore Our Fresh Collection', ta: 'எங்கள் புதிய தொகுப்பை ஆராயுங்கள்' },
  'section.categories.desc': { en: 'From leafy greens to exotic fruits — browse our handpicked categories.', ta: 'கீரைகள் முதல் அரிய பழங்கள் வரை — எங்கள் தேர்வு செய்யப்பட்ட வகைகளை உலாவுங்கள்.' },
  'section.howitworks': { en: 'How It Works', ta: 'இது எப்படி வேலை செய்கிறது' },
  'section.howitworks.title': { en: 'Three Simple Steps', ta: 'மூன்று எளிய படிகள்' },
  'section.howitworks.desc': { en: 'Getting fresh produce has never been this easy.', ta: 'புதிய விளைபொருட்களைப் பெறுவது இவ்வளவு எளிதாக இருந்ததில்லை.' },
  'section.reviews': { en: 'Testimonials', ta: 'வாடிக்கையாளர் கருத்துகள்' },
  'section.reviews.title': { en: 'Loved by Thousands', ta: 'ஆயிரக்கணக்கானோர் விரும்புகிறார்கள்' },
  'section.reviews.desc': { en: 'Hear what our customers have to say about their GreenHarvest experience.', ta: 'GreenHarvest அனுபவம் பற்றி எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள் என்று கேளுங்கள்.' },

  // ── Features ──
  'feature.organic': { en: '100% Organic', ta: '100% இயற்கை' },
  'feature.organic.desc': { en: 'Chemical-free produce grown with sustainable farming methods', ta: 'நிலையான விவசாய முறைகளில் வளர்க்கப்பட்ட ரசாயனம் இல்லாத விளைபொருட்கள்' },
  'feature.fresh': { en: 'Farm Fresh Daily', ta: 'தினமும் பண்ணை புதிது' },
  'feature.fresh.desc': { en: 'Harvested every morning and delivered within hours', ta: 'ஒவ்வொரு காலையும் அறுவடை செய்து மணி நேரத்தில் டெலிவரி' },
  'feature.delivery': { en: '24hr Delivery', ta: '24 மணி நேர டெலிவரி' },
  'feature.delivery.desc': { en: 'From the farm to your doorstep in under 24 hours', ta: 'பண்ணையிலிருந்து உங்கள் வீட்டு வாசலுக்கு 24 மணி நேரத்திற்குள்' },
  'feature.verified': { en: 'Verified Farmers', ta: 'சரிபார்க்கப்பட்ட விவசாயிகள்' },
  'feature.verified.desc': { en: 'Every seller is verified for quality and authenticity', ta: 'ஒவ்வொரு விற்பனையாளரும் தரம் மற்றும் நம்பகத்தன்மைக்காக சரிபார்க்கப்படுகிறார்' },

  // ── Categories ──
  'cat.vegetables': { en: 'Vegetables', ta: 'காய்கறிகள்' },
  'cat.vegetables.desc': { en: 'Farm-fresh tomatoes, potatoes, onions and more', ta: 'பண்ணை-புதிய தக்காளி, உருளைக்கிழங்கு, வெங்காயம் மற்றும் பல' },
  'cat.fruits': { en: 'Fruits', ta: 'பழங்கள்' },
  'cat.fruits.desc': { en: 'Seasonal fruits bursting with natural sweetness', ta: 'இயற்கை இனிப்புடன் கூடிய பருவகால பழங்கள்' },
  'cat.leafygreens': { en: 'Leafy Greens', ta: 'கீரைகள்' },
  'cat.leafygreens.desc': { en: 'Nutrient-rich spinach, lettuce, kale and herbs', ta: 'ஊட்டச்சத்து நிறைந்த பசலைக்கீரை, கோஸ், மற்றும் மூலிகைகள்' },
  'cat.explore': { en: 'Explore Now →', ta: 'இப்போது பாருங்கள் →' },

  // ── Stats ──
  'stat.farmers': { en: 'Local Farmers', ta: 'உள்ளூர் விவசாயிகள்' },
  'stat.orders': { en: 'Orders Delivered', ta: 'டெலிவரி செய்யப்பட்ட ஆர்டர்கள்' },
  'stat.rating': { en: 'Average Rating', ta: 'சராசரி மதிப்பீடு' },
  'stat.cities': { en: 'Cities Served', ta: 'சேவை செய்யப்படும் நகரங்கள்' },

  // ── Steps ──
  'step.browse': { en: 'Browse & Pick', ta: 'உலாவு & தேர்வு செய்' },
  'step.browse.desc': { en: 'Explore categories or use voice search to find what you need', ta: 'வகைகளை ஆராயுங்கள் அல்லது குரல் தேடலைப் பயன்படுத்துங்கள்' },
  'step.cart': { en: 'Add to Cart', ta: 'கூடையில் சேர்' },
  'step.cart.desc': { en: 'Select your items, choose quantities, and review your order', ta: 'பொருட்களைத் தேர்வுசெய்து, அளவைத் தேர்ந்தெடுத்து, ஆர்டரை சரிபாருங்கள்' },
  'step.deliver': { en: 'Get Delivered', ta: 'டெலிவரி பெறுங்கள்' },
  'step.deliver.desc': { en: 'Fresh produce arrives at your doorstep within 24 hours', ta: 'புதிய விளைபொருட்கள் 24 மணி நேரத்திற்குள் உங்கள் வாசலில்' },

  // ── CTA ──
  'cta.title': { en: 'Start Your Healthy Journey Today 🌿', ta: 'உங்கள் ஆரோக்கிய பயணத்தை இன்றே தொடங்குங்கள் 🌿' },
  'cta.desc': { en: 'Join thousands of families who\'ve switched to farm-fresh, chemical-free produce.', ta: 'பண்ணை-புதிய, ரசாயனம் இல்லாத விளைபொருட்களுக்கு மாறிய ஆயிரக்கணக்கான குடும்பங்களுடன் இணையுங்கள்.' },
  'cta.start': { en: 'Get Started Free', ta: 'இலவசமாக தொடங்குங்கள்' },
  'cta.learn': { en: 'Learn More', ta: 'மேலும் அறிய' },

  // ── Footer ──
  'footer.desc': { en: 'Empowering local farmers and bringing organic health to your family. Fresh, natural, and sustainable.', ta: 'உள்ளூர் விவசாயிகளை மேம்படுத்தி, உங்கள் குடும்பத்திற்கு இயற்கை ஆரோக்கியத்தை கொண்டுவருகிறோம்.' },
  'footer.quicklinks': { en: 'Quick Links', ta: 'விரைவு இணைப்புகள்' },
  'footer.aboutus': { en: 'About Us', ta: 'எங்களைப் பற்றி' },
  'footer.shopveg': { en: 'Shop Vegetables', ta: 'காய்கறிகள் வாங்கு' },
  'footer.shopfruit': { en: 'Shop Fruits', ta: 'பழங்கள் வாங்கு' },
  'footer.becomefarmer': { en: 'Become a Farmer', ta: 'விவசாயி ஆகுங்கள்' },
  'footer.customer': { en: 'Customer', ta: 'வாடிக்கையாளர்' },
  'footer.mycart': { en: 'My Cart', ta: 'என் கூடை' },
  'footer.mydashboard': { en: 'My Dashboard', ta: 'என் டாஷ்போர்ட்' },
  'footer.loginreg': { en: 'Login / Register', ta: 'உள்நுழைய / பதிவு' },
  'footer.help': { en: 'Help & Support', ta: 'உதவி & ஆதரவு' },
  'footer.contactus': { en: 'Contact Us', ta: 'எங்களை தொடர்பு கொள்ள' },
  'footer.copyright': { en: '© 2026 GreenHarvest Marketplace. All Rights Reserved. Made with 💚', ta: '© 2026 GreenHarvest சந்தை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. 💚 உடன் உருவாக்கப்பட்டது' },

  // ── Product Pages ──
  'products.fresh.veg': { en: 'Fresh Vegetables', ta: 'புதிய காய்கறிகள்' },
  'products.fresh.veg.desc': { en: 'Direct from the farm to your kitchen.', ta: 'பண்ணையிலிருந்து நேரடியாக உங்கள் சமையலறைக்கு.' },
  'products.fresh.fruit': { en: 'Fresh Fruits', ta: 'புதிய பழங்கள்' },
  'products.fresh.fruit.desc': { en: 'Naturally sweet and organic.', ta: 'இயற்கையாக இனிப்பான மற்றும் இயற்கை.' },
  'products.leafy': { en: 'Leafy Greens', ta: 'கீரைகள்' },
  'products.leafy.desc': { en: 'Packed with iron and freshness.', ta: 'இரும்புச்சத்தும் புத்துணர்வும் நிறைந்தது.' },
  'products.search.veg': { en: 'Search vegetables (e.g., Tomato / தக்காளி)', ta: 'காய்கறிகளை தேடுங்கள் (எ.கா., Tomato / தக்காளி)' },
  'products.search.fruit': { en: 'Search fruits (e.g., Mango / மாம்பழம்)', ta: 'பழங்களை தேடுங்கள் (எ.கா., Mango / மாம்பழம்)' },
  'products.search.leafy': { en: 'Search greens (e.g., Spinach / பசலைக்கீரை)', ta: 'கீரைகளை தேடுங்கள் (எ.கா., Spinach / பசலைக்கீரை)' },
  'products.addtocart': { en: 'Add to Cart', ta: 'கூடையில் சேர்' },
  'products.instock': { en: 'In Stock', ta: 'கையிருப்பு' },
  'products.nutrition': { en: 'Nutrition', ta: 'ஊட்டச்சத்து' },
  'products.benefits': { en: 'Benefits', ta: 'நன்மைகள்' },
  'products.farmer.section': { en: '👨‍🌾 Products from Local Farmers', ta: '👨‍🌾 உள்ளூர் விவசாயிகளின் பொருட்கள்' },

  // ── Login / Register ──
  'login.title': { en: 'Welcome Back', ta: 'மீண்டும் வரவேற்கிறோம்' },
  'login.email': { en: 'Email Address', ta: 'மின்னஞ்சல் முகவரி' },
  'login.password': { en: 'Password', ta: 'கடவுச்சொல்' },
  'login.submit': { en: 'Login', ta: 'உள்நுழைய' },
  'login.noaccount': { en: "Don't have an account?", ta: 'கணக்கு இல்லையா?' },
  'login.register': { en: 'Register here', ta: 'இங்கே பதிவு செய்யுங்கள்' },
  'register.title': { en: 'Create Account', ta: 'கணக்கை உருவாக்கு' },
  'register.name': { en: 'Full Name', ta: 'முழு பெயர்' },
  'register.email': { en: 'Email Address', ta: 'மின்னஞ்சல் முகவரி' },
  'register.password': { en: 'Password', ta: 'கடவுச்சொல்' },
  'register.role': { en: 'I am a...', ta: 'நான் ஒரு...' },
  'register.customer': { en: 'Customer', ta: 'வாடிக்கையாளர்' },
  'register.farmer': { en: 'Farmer', ta: 'விவசாயி' },
  'register.submit': { en: 'Create Account', ta: 'கணக்கை உருவாக்கு' },
  'register.hasaccount': { en: 'Already have an account?', ta: 'ஏற்கனவே கணக்கு உள்ளதா?' },
  'register.loginhere': { en: 'Login here', ta: 'இங்கே உள்நுழையுங்கள்' },
  'register.language': { en: 'Preferred Language', ta: 'விருப்பமான மொழி' },

  // ── Cart ──
  'cart.title': { en: 'Shopping Cart', ta: 'ஷாப்பிங் கூடை' },
  'cart.empty': { en: 'Your cart is empty', ta: 'உங்கள் கூடை காலியாக உள்ளது' },
  'cart.total': { en: 'Total', ta: 'மொத்தம்' },
  'cart.checkout': { en: 'Proceed to Checkout', ta: 'செக்அவுட் செய்ய' },
  'cart.remove': { en: 'Remove', ta: 'நீக்கு' },
  'cart.address': { en: 'Enter delivery address:', ta: 'டெலிவரி முகவரியை உள்ளிடவும்:' },

  // ── Farmer Dashboard ──
  'farmer.title': { en: 'Farm Management', ta: 'பண்ணை நிர்வாகம்' },
  'farmer.desc': { en: 'Manage your produce and track sales.', ta: 'உங்கள் விளைபொருட்களை நிர்வகித்து விற்பனையை கண்காணியுங்கள்.' },
  'farmer.addnew': { en: '➕ Add New Product', ta: '➕ புதிய பொருள் சேர்' },
  'farmer.totalproducts': { en: 'Total Products', ta: 'மொத்த பொருட்கள்' },
  'farmer.revenue': { en: 'Total Revenue', ta: 'மொத்த வருவாய்' },
  'farmer.orders': { en: 'Orders Received', ta: 'பெறப்பட்ட ஆர்டர்கள்' },
  'farmer.rating': { en: 'Customer Rating', ta: 'வாடிக்கையாளர் மதிப்பீடு' },
  'farmer.inventory': { en: 'My Inventory (Added via form/voice)', ta: 'என் சரக்கு (படிவம்/குரல் வழியாக சேர்க்கப்பட்டது)' },
  'farmer.recentorders': { en: 'Recent Orders', ta: 'சமீபத்திய ஆர்டர்கள்' },
  'farmer.alerts': { en: 'System Alerts', ta: 'அமைப்பு விழிப்பூட்டல்கள்' },

  // ── Add Product ──
  'addprod.title': { en: 'Add New Product', ta: 'புதிய பொருள் சேர்' },
  'addprod.voice': { en: 'Voice Recognition', ta: 'குரல் அறிதல்' },
  'addprod.voicedesc': { en: 'Click the microphone and say:', ta: 'மைக்ரோஃபோனை கிளிக் செய்து சொல்லுங்கள்:' },
  'addprod.tamilname': { en: 'Tamil Name (தமிழ் பெயர்)', ta: 'தமிழ் பெயர்' },
  'addprod.englishname': { en: 'Product Name (English)', ta: 'ஆங்கிலப் பெயர்' },
  'addprod.category': { en: 'Category', ta: 'வகை' },
  'addprod.farmername': { en: 'Farmer Name', ta: 'விவசாயி பெயர்' },
  'addprod.price': { en: 'Price (₹ per kg)', ta: 'விலை (₹ ஒரு கிலோ)' },
  'addprod.stock': { en: 'Stock Quantity (kg)', ta: 'கையிருப்பு அளவு (கிலோ)' },
  'addprod.desc': { en: 'Health Benefits & Description', ta: 'ஆரோக்கிய நன்மைகள் & விளக்கம்' },
  'addprod.submit': { en: 'Submit Product', ta: 'பொருளைச் சமர்ப்பி' },

  // ── Language Selector ──
  'lang.title': { en: 'Choose Your Language', ta: 'உங்கள் மொழியைத் தேர்ந்தெடுங்கள்' },
  'lang.subtitle': { en: 'Select your preferred language for the best experience', ta: 'சிறந்த அனுபவத்திற்கு உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுங்கள்' },
  'lang.english': { en: 'English', ta: 'ஆங்கிலம்' },
  'lang.tamil': { en: 'தமிழ் (Tamil)', ta: 'தமிழ்' },
  'lang.continue': { en: 'Continue', ta: 'தொடரவும்' },

  // ── Common ──
  'common.price': { en: 'Price', ta: 'விலை' },
  'common.stock': { en: 'Stock', ta: 'கையிருப்பு' },
  'common.category': { en: 'Category', ta: 'வகை' },
  'common.action': { en: 'Action', ta: 'செயல்' },
  'common.delete': { en: '🗑 Delete', ta: '🗑 நீக்கு' },
  'common.perkg': { en: '/ kg', ta: '/ கிலோ' },
};
