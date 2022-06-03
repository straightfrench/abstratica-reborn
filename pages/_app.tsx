import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import HeaderBig from '../components/HeaderBig'
import HeaderSmall from '../components/HeaderSmall'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderSmall />
      <Component {...pageProps} /> 
      
      {/* I cant figure out how to rotate this image like in the design */}
      <Image src={"/background-squiggle.png"} alt="background squigle" layout='fill' className="background-squiggle" ></Image>
      
      <Footer />
    </>
  )
}

export default MyApp
 