document.addEventListener('DOMContentLoaded', () => {
  const micBtns = document.querySelectorAll('.mic-btn');
  const searchInputs = document.querySelectorAll('.search-input');
  
  if (!('webkitSpeechRecognition' in window)) {
    console.log('Speech recognition not supported');
    micBtns.forEach(btn => btn.style.display = 'none');
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  let currentInput = null;

  micBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentInput = searchInputs[index];
      
      const popup = document.getElementById('voicePopup');
      if (popup) popup.classList.add('active');
      
      btn.classList.add('mic-active');
      recognition.start();
    });
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    if (currentInput) {
      currentInput.value = transcript;
      // Trigger search automatically
      currentInput.dispatchEvent(new Event('input'));
    }
  };

  recognition.onend = () => {
    micBtns.forEach(btn => btn.classList.remove('mic-active'));
    const popup = document.getElementById('voicePopup');
    if (popup) popup.classList.remove('active');
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error', event.error);
    micBtns.forEach(btn => btn.classList.remove('mic-active'));
    const popup = document.getElementById('voicePopup');
    if (popup) popup.classList.remove('active');
  };

  // Search Filtering logic
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const products = document.querySelectorAll('.product-card');
      
      products.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
