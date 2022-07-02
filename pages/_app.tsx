import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import WalletContextProvider from '../components/WalletContextProvider'
import { PublicKey } from "@solana/web3.js";

function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <WalletContextProvider>
      <section className='background-image' />
      <Component {...pageProps} />
      <Footer />
    </WalletContextProvider>
  )
}

export default MyApp
 