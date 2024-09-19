// plugins/google-translate.js
export default ({ app }, inject) => {
    inject('googleTranslateInit', () => {
      // Добавление скрипта Google Translate
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
  
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      };
    });
  };
  