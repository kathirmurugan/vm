document.addEventListener('DOMContentLoaded', () => {
  const currentLang = sessionStorage.getItem('gh_language');

  // Inject the language selector popup HTML if not present
  if (!document.getElementById('language-popup')) {
    const popupHtml = `
      <div id="language-popup" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 10000; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
        <div style="background: var(--card-bg, #fff); padding: 40px; border-radius: 20px; text-align: center; max-width: 400px; width: 90%;">
          <h2 style="margin-bottom: 10px; color: var(--primary-color, #2e7d32);" data-translate="lang.title">Choose Your Language</h2>
          <h2 style="margin-bottom: 30px; color: var(--primary-color, #2e7d32);">மொழியைத் தேர்ந்தெடுக்கவும்</h2>
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <button onclick="setLanguage('ta')" style="padding: 15px; font-size: 1.2rem; border-radius: 10px; border: 2px solid var(--primary-color, #2e7d32); background: transparent; cursor: pointer; font-weight: bold;">தமிழ் (Tamil)</button>
            <button onclick="setLanguage('en')" style="padding: 15px; font-size: 1.2rem; border-radius: 10px; border: 2px solid var(--primary-color, #2e7d32); background: var(--primary-color, #2e7d32); color: white; cursor: pointer; font-weight: bold;">English</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHtml);
  }

  if (!currentLang) {
    document.getElementById('language-popup').style.display = 'flex';
  } else {
    applyTranslations(currentLang);
  }
});

window.setLanguage = function(lang) {
  sessionStorage.setItem('gh_language', lang);
  document.getElementById('language-popup').style.display = 'none';
  document.body.classList.remove('lang-ta', 'lang-en');
  document.body.classList.add('lang-' + lang);
  applyTranslations(lang);
};

// Auto-translate DOM elements based on TRANSLATIONS object
function applyTranslations(lang) {
  document.body.classList.remove('lang-ta', 'lang-en');
  document.body.classList.add('lang-' + lang);
  if (lang === 'en') return;  // Default is English, so we don't need to translate if English is chosen initially, but if switching back, a reload is best.
  
  if (typeof TRANSLATIONS === 'undefined') return;

  // Simple DOM walker to replace text nodes that match English values exactly
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  
  // Build a reverse map for quick lookup: English String -> Translation Key
  const enToKey = {};
  for (const key in TRANSLATIONS) {
    enToKey[TRANSLATIONS[key].en.trim()] = key;
  }

  const nodesToUpdate = [];
  while ((node = walker.nextNode())) {
    const text = node.nodeValue.trim();
    if (text && enToKey[text] && TRANSLATIONS[enToKey[text]][lang]) {
      nodesToUpdate.push({ node, text: TRANSLATIONS[enToKey[text]][lang] });
    }
  }

  // Also check placeholders
  const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
  inputs.forEach(input => {
    const ph = input.getAttribute('placeholder').trim();
    if (ph && enToKey[ph] && TRANSLATIONS[enToKey[ph]][lang]) {
      input.setAttribute('placeholder', TRANSLATIONS[enToKey[ph]][lang]);
    }
  });

  // Apply text node updates
  nodesToUpdate.forEach(update => {
    update.node.nodeValue = update.text;
  });
}
