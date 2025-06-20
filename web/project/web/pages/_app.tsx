import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import  GlobalStyles  from '../theme/GlobalStyles';
import {theme} from "../theme/theme";
import { useEffect, useState } from 'react';
import { Provider } from "mobx-react";



export default function App({ Component, pageProps }: AppProps) {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])
   
    return (

    <Provider>
    {isClient ?
     <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Component {...pageProps} />
        </ThemeProvider>
     : ""}
    </Provider> 
    
       
)
      

      
}