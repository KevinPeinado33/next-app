import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'

import { lightTheme } from '~/modules/common/themes'
import { store } from '~/modules/common/data'

import '~/styles/globals.css'

export default function App({ 
  Component, 
  pageProps,
}: AppProps) {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ lightTheme} >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
