export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'  
  ],
  plugins: [
    '~/plugins/google-translate.js'
  ],
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js', defer: true },
        { src: 'https://adminway.ru/files/google-translate.js', defer: true },
        { src: '//translate.google.com/translate_a/element.js?cb=TranslateInit', defer: true }
      ]
    }
  }
});
