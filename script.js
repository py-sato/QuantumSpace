 // Переключение языка
 const languageSelector = document.getElementById('language');
 const elements = document.querySelectorAll('[data-lang]');
 
 languageSelector.addEventListener('change', (event) => {
   const language = event.target.value;
   elements.forEach(element => {
     if (element.getAttribute('data-lang') === language) {
       element.style.display = 'block';
     } else {
       element.style.display = 'none';
     }
   });
 });