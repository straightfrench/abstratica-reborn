import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <section className='background-image' />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
 