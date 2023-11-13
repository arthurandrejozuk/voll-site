import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import  GlobalStyles  from '../theme/GlobalStyles';
import {theme} from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}