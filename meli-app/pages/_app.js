import '../styles/globals.css'//global styles
import '../i18n'//internationalization library
import { ThemeProvider } from 'styled-components';
import theme from '../themes/default';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
