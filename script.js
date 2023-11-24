const toggleButton = document.getElementById('toggle-language');
  const currentLanguage = document.documentElement.lang;

  toggleButton.addEventListener('click', function () {
    if (currentLanguage === 'en') {
      window.location.href = 'Forty_Solutions_Workshop-ru.html'; // Переключаемся на русскую версию
    } else {
      window.location.href = 'Forty_Solutions_Workshop-en.html'; // Переключаемся на английскую версию
    }
  });
