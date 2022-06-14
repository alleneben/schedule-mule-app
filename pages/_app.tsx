import '/styles/globals.css'
import "/styles/util.scss";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}



export default MyApp
