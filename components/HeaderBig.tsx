import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import Link from "next/link";
import WalletContextProvider from "./WalletContextProvider";

const HeaderBig = () => {
  return (
    <header className="header__big">
      <Image src={"/abslogo.jpg"} alt="Abstratica logo" width={112} height={112}/>
      <div>
        <h1>Abstratica</h1>
        <nav className="main-nav">
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/collection"}>Collection</Link></li>
            <li><Link href={"/roadmap"}>Roadmap</Link></li>
            <li><Link href={"/staking"}>Staking</Link></li>
            <li className="drop-down-nav-item"><Link href={"/art-zone/raffles"}>1:1 Art Zone</Link></li>
          </ul>
        </nav>
      </div>
        <WalletMultiButton />
    </header>    
  );
}

export default HeaderBig;