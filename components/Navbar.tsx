import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import WalletContextProvider from "./WalletContextProvider";


const Navbar = () => {
  return (
    <div>
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/solana-history"><a>Solana History</a></Link>
          <Link href="/roadmap"><a>Roadmap</a></Link>
          <Link href="/collection/full-collection"><a>Collection</a></Link>
        </nav>
        <nav className="walletButton">
          <WalletContextProvider>
            <WalletMultiButton />
          </WalletContextProvider>
        </nav>
    </div>
  );
}

export default Navbar;