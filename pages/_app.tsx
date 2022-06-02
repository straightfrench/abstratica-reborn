import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import HeaderBig from '../components/HeaderBig'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderBig />
      <Component {...pageProps} /> 
      <Footer />
    </>
  )
}

export default MyApp
 