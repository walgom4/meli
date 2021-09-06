/* eslint-disable react/prop-types */
import React from 'react'
import '@styles/globals.scss'// global styles
import '../i18n'// internationalization library
import { ThemeProvider } from 'styled-components'
import theme from '@themes/default'
import store from '@store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    // provider for redux
    <Provider store={store}>
      {/* theme provider to handle style constans */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
