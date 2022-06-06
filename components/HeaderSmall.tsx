import { WalletConnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import Link from "next/link";
import WalletContextProvider from "./WalletContextProvider";

const HeaderSmall = () => {
  return (
    <header className="small">
      <Image src={"/abslogo.jpg"} alt="Abstratica logo" width={90} height={90}/>
      <div>
        <nav className="main-nav">
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/collection/full-collection"}>Collection</Link></li>
            <li><Link href={"/roadmap"}>Roadmap</Link></li>
            <li><Link href={"/staking"}>Staking</Link></li>
            <li><Link href={"/art-zone/raffles"}>1:1 Art Zone</Link></li>
          </ul>
        </nav>
      </div>
      <WalletContextProvider> 
        <WalletMultiButton />
      </WalletContextProvider>
    </header>
  );
}

export default HeaderSmall;