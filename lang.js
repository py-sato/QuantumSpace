const translations = {
    en: {
      home: "Home",
      games: "Games",
      about: "About",
      welcome: "Welcome to QuantumSpace",
      subtitle: "A galaxy of unfiltered games",
      adminTitle: "Admin Panel",
      adminText: "Admin-only features go here.",
      closeBtn: "Close"
    },
    ru: {
      home: "Главная",
      games: "Игры",
      about: "О нас",
      welcome: "Добро пожаловать в QuantumSpace",
      subtitle: "Галактика игр без фильтров",
      adminTitle: "Панель администратора",
      adminText: "Здесь находятся функции только для админа.",
      closeBtn: "Закрыть"
    },
    fr: {
      home: "Accueil",
      games: "Jeux",
      about: "À propos",
      welcome: "Bienvenue dans QuantumSpace",
      subtitle: "Une galaxie de jeux sans filtres",
      adminTitle: "Panneau d'administration",
      adminText: "Fonctionnalités réservées à l'administrateur.",
      closeBtn: "Fermer"
    }
  };
  
  const langSelect = document.getElementById('langSelect');
  langSelect.addEventListener('change', () => {
    const selectedLang = langSelect.value;
    updateLanguage(selectedLang);
  });
  
  function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
  
  // Установка языка по умолчанию
  updateLanguage('en');
  