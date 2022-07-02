import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, clusterApiUrl, Connection } from "@solana/web3.js";

import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

import { networkConnection } from "./connection";
import { ArweaveUriSuffix } from "./meta-data/ardata";
import { Abstraction, AbstractionPreview } from "../models/AbstractionModel";

import axios from "axios";

/** URL used to query Arweave. */
export const ARWEAVE_URL : string = "http://arweave.net/";

/**
 * Loads all abstractions associated to the primary key pk.
 * @param pk the public key owning the abstractions.
 * @return . 
 */
export async function loadAbstractionsFromPk() : Promise<Abstraction[]> {
    
    const edKey : PublicKey = new PublicKey(
      "6UtdsujtfEbhsSmjak34qrBLV3LsAnVn3mynTwMXBBcP"
    );
  
    let accounts = await networkConnection.getParsedTokenAccountsByOwner(
        edKey, { programId: TOKEN_PROGRAM_ID }
    );

    let mints = accounts.value.map(tokenAccount => {
        return new PublicKey(
            tokenAccount.account["data"]["parsed"]["info"]["mint"]
        );
    });

    for(const mintPk of mints) {
        // for explicit deserialising of token meta-data see
        // https://gist.github.com/dvcrn/c099c9b5a095ffe4ddb6481c22cde5f4

        let tokenMetaPk = await Metadata.getPDA(mintPk);
        let tokenMeta = await Metadata.load(networkConnection, tokenMetaPk);
        
        console.log(tokenMeta);
        break;
    }
}

/** Batch size of abstractions to load for pagination. */
export const PAGE_SIZE : number = 20;

/**
 * Concurrently loads paginated meta-data for abstractions
 * directly from Arweave.
 * 
 * @params pageNum Page number to be loaded.
 * @return Array of abstraction previews.
 */
export async function loadArweaveAbstractionPage(pageNum : number) : Promise<AbstractionPreview[]> {

    let l : number = pageNum * PAGE_SIZE;
    let arweaveAbstractionErc : { arImg: string, arErc: string }[] =
        ArweaveUriSuffix.slice(l, l + PAGE_SIZE);

    try {
      let response = await axios.all(
        arweaveAbstractionErc.map(arweaveErc => axios({
            method: 'get',
            url: ARWEAVE_URL + arweaveErc,
            responseType: 'json'
        }))
      );
      
      return response.map(function(r) {
          return {
              name: r.data.name,
              imageUri: r.data.image,
              symbol: r.data.symbol,
          };
      });

    } catch(e) {
        console.log(e);
        return [];
    }
}

/**
 * Loads a single abstraction from Arweave.
 * 
 * @param absId The Arweave abstraction id.
 * @return All abstraction meta-data.
 */
export async function loadSingleArweaveAbstraction(absId: string): Promise<AbstractionPreview> {
  try {
      let response = await axios({
          method: 'get',
          url: ARWEAVE_URL + absId,
          responseType: 'json'
      });

      return {
          name: response.data.name,
          imageUri: response.data.image,
          symbol: response.data.symbol,
      };

  } catch (e) {
      console.log(e);
      return { name: "Null", imageUri: "null", symbol: "null" };
  }
}