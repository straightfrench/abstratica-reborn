import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Image from 'next/image'

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
 