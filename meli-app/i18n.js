import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'Never stop searching': 'Never stop searching',
      'Made by Walter Gomez': 'Made by Walter Gomez',
      'Welcome to React': 'Welcome to React and react-i18next',
      'Product description': 'Product description',
      used: 'used',
      new: 'new',
      sold: 'sold',
      loading: 'Loading...',
      buy: 'Buy',
      error: 'Error',
      'Hello, I wish to get this product': 'Hello, I wish to get this product:'
    }
  },
  es: {
    translation: {
      'Never stop searching': 'Nunca dejes de buscar',
      'Made by Walter Gomez': 'Hecho por Walter Gómez',
      'Welcome to React': 'Bienvenido a i 18n',
      'Product description': 'Descripción del producto',
      used: 'usado',
      new: 'nuevo',
      sold: 'vendidos',
      loading: 'Cargando...',
      buy: 'Comprar',
      error: 'Error',
      'Hello, I wish to get this product': 'Hola, deseo adquirir  este producto:'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
