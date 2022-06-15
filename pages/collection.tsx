import HeaderSmall from "../components/HeaderSmall";
import AbstraticaCard from "../components/AbstraticaCard";
import styles from "../styles/Collection.module.css"
import { FC, useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import SearchCard from "../components/SearchCard";
import { WalletConnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const FullCollection: FC = () => {
    
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [ collection , setCollection ] = useState(false);

  const creator = "absF5t1MP7dXFhbgUgaTi7ffJM2WhBg1cmrY5s7h3By";


  useEffect( () => {
    console.log(collection)
  }, [collection]); // [collection] is a dependancy array, useEffect will only run when collection changes.

  
  if (collection) {
    if( !connection || !publicKey) {
      return(
        <div>
          <HeaderSmall />
          <div className={styles.container}>
            <h1 className="section-title text-shadow" id={styles["collection-title"]}>My Abstractions</h1>
            <div className={styles["search-container"]}>
              <SearchCard setCollection={setCollection}/>
            </div>
            <div className="wallet-alert">
              <WalletMultiButton />
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <HeaderSmall />
        <div className={styles.container}>
          <h1 className="section-title text-shadow" id={styles["collection-title"]}>My Abstractions</h1>
          <div className={styles["search-container"]}>
          <SearchCard setCollection={setCollection}/>
          </div>
          
          <div className={styles["art-container"]}>
            <AbstraticaCard />
          </div>
        </div>
      </div>
    )
  }
  else return (
    <div>
      <HeaderSmall />
      <div className={styles.container}>
        <h1 className="section-title text-shadow" id={styles["collection-title"]}>The Full Collection</h1>
        <div className={styles["search-container"]}>
        <SearchCard setCollection={setCollection}/>
        </div>
        
        <div className={styles["art-container"]}>
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
        </div>
      </div>
    </div>
  );
}


export default FullCollection;