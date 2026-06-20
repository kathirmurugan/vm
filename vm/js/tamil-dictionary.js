// Tamil phonetic/romanized -> { tamilScript, english }
const DICTIONARY = {
  // ── Vegetables ──
  'vendaikai': { tamil: 'வெண்டைக்காய்', english: 'Ladies Finger' },
  'vendekai': { tamil: 'வெண்டைக்காய்', english: 'Ladies Finger' },
  'thakkali': { tamil: 'தக்காளி', english: 'Tomato' },
  'urulaikizhangu': { tamil: 'உருளைக்கிழங்கு', english: 'Potato' },
  'urulai': { tamil: 'உருளைக்கிழங்கு', english: 'Potato' },
  'vengayam': { tamil: 'வெங்காயம்', english: 'Onion' },
  'inji': { tamil: 'இஞ்சி', english: 'Ginger' },
  'poondu': { tamil: 'பூண்டு', english: 'Garlic' },
  'milagai': { tamil: 'மிளகாய்', english: 'Chilli' },
  'pachai milagai': { tamil: 'பச்சை மிளகாய்', english: 'Green Chilli' },
  'parangikai': { tamil: 'பரங்கிக்காய்', english: 'Pumpkin' },
  'sorakkai': { tamil: 'சுரைக்காய்', english: 'Bottle Gourd' },
  'peerkangai': { tamil: 'பீர்க்கங்காய்', english: 'Ridge Gourd' },
  'pudalangai': { tamil: 'புடலங்காய்', english: 'Snake Gourd' },
  'kathirikai': { tamil: 'கத்தரிக்காய்', english: 'Brinjal' },
  'vazhaikkai': { tamil: 'வாழைக்காய்', english: 'Raw Banana' },
  'murungakkai': { tamil: 'முருங்கைக்காய்', english: 'Drumstick' },
  'avarai': { tamil: 'அவரைக்காய்', english: 'Broad Beans' },
  'kovakkai': { tamil: 'கோவைக்காய்', english: 'Ivy Gourd' },
  'chow chow': { tamil: 'சௌ சௌ', english: 'Chayote' },
  'carrot': { tamil: 'கேரட்', english: 'Carrot' },
  'beetroot': { tamil: 'பீட்ரூட்', english: 'Beetroot' },
  'mullangi': { tamil: 'முள்ளங்கி', english: 'Radish' },
  'vellari': { tamil: 'வெள்ளரிக்காய்', english: 'Cucumber' },
  'muttaikose': { tamil: 'முட்டைக்கோஸ்', english: 'Cabbage' },
  'muttaikos': { tamil: 'முட்டைக்கோஸ்', english: 'Cabbage' },
  'cabbage': { tamil: 'முட்டைக்கோஸ்', english: 'Cabbage' },
  'pattani': { tamil: 'பட்டாணி', english: 'Green Peas' },

  // ── Fruits ──
  'mambalam': { tamil: 'மாம்பழம்', english: 'Mango' },
  'manga': { tamil: 'மாம்பழம்', english: 'Mango' },
  'vazhaipazham': { tamil: 'வாழைப்பழம்', english: 'Banana' },
  'apple': { tamil: 'ஆப்பிள்', english: 'Apple' },
  'thirachai': { tamil: 'திராட்சை', english: 'Grapes' },
  'tharbuzam': { tamil: 'தர்பூசணி', english: 'Watermelon' },
  'orange': { tamil: 'ஆரஞ்சு', english: 'Orange' },
  'naarthangai': { tamil: 'நார்த்தங்காய்', english: 'Citron' },
  'elumichai': { tamil: 'எலுமிச்சை', english: 'Lemon' },
  'koyya': { tamil: 'கொய்யா', english: 'Guava' },
  'sapota': { tamil: 'சப்போட்டா', english: 'Sapota' },
  'ananas': { tamil: 'அன்னாசி', english: 'Pineapple' },
  'annasi': { tamil: 'அன்னாசி', english: 'Pineapple' },
  'papali': { tamil: 'பப்பாளி', english: 'Papaya' },
  'pappali': { tamil: 'பப்பாளி', english: 'Papaya' },
  'strawberry': { tamil: 'ஸ்ட்ராபெரி', english: 'Strawberry' },
  'mathulai': { tamil: 'மாதுளை', english: 'Pomegranate' },
  'jackfruit': { tamil: 'பலாப்பழம்', english: 'Jackfruit' },
  'pala pazham': { tamil: 'பலாப்பழம்', english: 'Jackfruit' },
  'sitapalam': { tamil: 'சீதாப்பழம்', english: 'Custard Apple' },
  'thengai': { tamil: 'தேங்காய்', english: 'Coconut' },
  'perichaipalam': { tamil: 'பேரீச்சம்பழம்', english: 'Dates' },
  'pericham': { tamil: 'பேரீச்சம்பழம்', english: 'Dates' },
  'dates': { tamil: 'பேரீச்சம்பழம்', english: 'Dates' },
  'athipazham': { tamil: 'அத்திப்பழம்', english: 'Fig' },
  'athi pazham': { tamil: 'அத்திப்பழம்', english: 'Fig' },
  'athipalam': { tamil: 'அத்திப்பழம்', english: 'Fig' },
  'athipallam': { tamil: 'அத்திப்பழம்', english: 'Fig' },
  'athippalam': { tamil: 'அத்திப்பழம்', english: 'Fig' },
  'artiform': { tamil: 'அத்திப்பழம்', english: 'Fig' },
  'arty form': { tamil: 'அத்திப்பழம்', english: 'Fig' },
  'fig': { tamil: 'அத்திப்பழம்', english: 'Fig' },

  // ── Leafy Greens ──
  'palak': { tamil: 'பாலக் கீரை', english: 'Palak (Spinach)' },
  'pasalai keerai': { tamil: 'பசலைக்கீரை', english: 'Spinach' },
  'arai keerai': { tamil: 'அரைக்கீரை', english: 'Amaranth Greens' },
  'mulai keerai': { tamil: 'முளைக்கீரை', english: 'Fenugreek Greens' },
  'vendhaya keerai': { tamil: 'வெந்தயக் கீரை', english: 'Fenugreek Greens' },
  'murungai keerai': { tamil: 'முருங்கை கீரை', english: 'Drumstick Leaves' },
  'ponnanganni': { tamil: 'பொன்னாங்கண்ணி', english: 'Sessile Joyweed' },
  'thandu keerai': { tamil: 'தண்டுக்கீரை', english: 'Stem Amaranth' },
  'pulicha keerai': { tamil: 'புளிச்சக்கீரை', english: 'Sour Greens' },
  'agathi keerai': { tamil: 'அகத்திக்கீரை', english: 'Agathi Greens' },
  'manathakkali': { tamil: 'மணத்தக்காளி', english: 'Black Nightshade' },
  'kothamalli': { tamil: 'கொத்தமல்லி', english: 'Coriander Leaves' },
  'kariveppilai': { tamil: 'கறிவேப்பிலை', english: 'Curry Leaves' },
  'pudina': { tamil: 'புதினா', english: 'Mint Leaves' },
};

// Also build reverse dictionary (English -> Tamil Script)
const ENGLISH_TO_TAMIL = {};
for (const [key, data] of Object.entries(DICTIONARY)) {
  const engKey = data.english.toLowerCase();
  if (!ENGLISH_TO_TAMIL[engKey]) {
    ENGLISH_TO_TAMIL[engKey] = data.tamil;
  }
}

/**
 * Given any product name (phonetic Tamil or English), return { tamil, english }.
 * Returns proper Tamil script for the tamil property!
 */
function getBilingualName(inputName) {
  if (!inputName) return { tamil: '', english: '' };
  const trimmed = inputName.trim().toLowerCase();

  // Try direct phonetic dictionary match
  if (DICTIONARY[trimmed]) {
    return {
      tamil: DICTIONARY[trimmed].tamil,
      english: DICTIONARY[trimmed].english
    };
  }

  // Try partial dictionary match (e.g. if they say "vendaikai fresh")
  for (const [key, data] of Object.entries(DICTIONARY)) {
    if (trimmed.includes(key) && key.length > 3) {
      return {
        tamil: data.tamil,
        english: data.english
      };
    }
  }

  // Try as English input
  if (ENGLISH_TO_TAMIL[trimmed]) {
    return {
      tamil: ENGLISH_TO_TAMIL[trimmed],
      english: inputName.trim()
    };
  }

  for (const [eng, tam] of Object.entries(ENGLISH_TO_TAMIL)) {
    if (eng.includes(trimmed) || trimmed.includes(eng.split(' ')[0])) {
      return {
        tamil: tam,
        english: inputName.trim()
      };
    }
  }

  // Unknown — return as-is for both (capitalized for English)
  return { 
    tamil: inputName.trim(), 
    english: inputName.trim().charAt(0).toUpperCase() + inputName.trim().slice(1) 
  };
}
