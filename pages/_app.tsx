import '/styles/globals.css'
import "/styles/util.scss";
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

// Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  primary: 'rgb(12 74 110)',
  secondary: '#1d82c5',
  pink: 'rgb(217,35,95)',
  danger: '#9b2c2c',
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}



export default MyApp
