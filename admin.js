function openAdmin() {
    document.getElementById('adminPanel').style.display = 'block';
    const blurDiv = document.createElement('div');
    blurDiv.classList.add('blur');
    document.body.appendChild(blurDiv); // Добавляем элемент для блюра на фон
  }
  
  function closeAdmin() {
    document.getElementById('adminPanel').style.display = 'none';
    const blurDiv = document.querySelector('.blur');
    if (blurDiv) {
      blurDiv.remove(); // Убираем блюр
    }
  }
  
  // Скрытый вход — 3 раза по кнопке "}"
  let keyCount = 0;
  let lastKeyTime = 0;
  
  document.addEventListener('keydown', (e) => {
    const now = Date.now();
  
    if (e.key === '}') {
      if (now - lastKeyTime < 1000) {
        keyCount++;
      } else {
        keyCount = 1;
      }
  
      lastKeyTime = now;
  
      if (keyCount === 3) {
        openAdmin();
        keyCount = 0;
      }
    }
  });
  