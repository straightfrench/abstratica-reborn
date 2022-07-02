/**
 * @fileoverview Responsible for loading abstractions from the Solana blockchain.
 */

import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, clusterApiUrl, Connection } from "@solana/web3.js";

import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

import { networkConnection } from "./connection.ts";
import { METADATA_SCHEME } from "./meta-data/meta-data-schema.ts";
import { ArUriSuffix } from "./meta-data/ardata.ts";

import axios from "axios";

/**
 * Loads all abstractions associated to the primary key pk.
 * @param pk the public key owning the abstractions.
 * @return . 
 */
export async function loadAbstractionsFromPk() {

    const METADATA_PROGRAM_ID : PublicKey = new PublicKey(
        "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
    );

    const edKey : PublicKey = new PublicKey(
        "6UtdsujtfEbhsSmjak34qrBLV3LsAnVn3mynTwMXBBcP"
    );

    let accounts = await networkConnection.getParsedTokenAccountsByOwner(
        edKey, { programId: TOKEN_PROGRAM_ID }
    )

    let mints = accounts.value.map(tokenAccount => {
        let pk = new PublicKey(
            tokenAccount.account["data"]["parsed"]["info"]["mint"]
        );
        return pk;
    });

    // Get all token meta-data
    for(const mintPk of mints) {
        // for explicit deserialising of token meta-data see
        // https://gist.github.com/dvcrn/c099c9b5a095ffe4ddb6481c22cde5f4

        let tokenMetaPk = await Metadata.getPDA(mintPk);
        let tokenMeta = await Metadata.load(networkConnection, tokenMetaPk);
        
        console.log(tokenMeta.data.data["uri"]);

        break;
    }
}


/** Batch size of abstractions to load for pagination. */
export const PAGE_SIZE : number = 20;

/** Total number of abstractions. */
export const NUM_ABS : number = 4200;

/** URL used to query Arweave. */
export const ARWEAVE_URL : string = "http://arweave.net/";

/**
 * Concurrently loads paginated meta-data for abstractions
 * directly from Arweave.
 * 
 * @params pageNum Page number to be loaded.
 * @return absPrev Array of abstraction previews.
 */
export async function loadArweaveAbstractionPage(pageNum : number) {

    let l : number = pageNum * PAGE_SIZE;
    let abs = ArUriSuffix.slice(l, l + PAGE_SIZE);

    axios.all(abs.map(a => 
        axios({
            method: 'get',
            url: ARWEAVE_URL + a.arErc,
            responseType: 'json'

        }))).then(function(response) {
            let absPrev = response.map(function(r) {
                return {
                    name: r.data.name,
                    imageUri: r.data.image,
                    symbol: r.data.symbol,
                };
            });

            return absPrev;
        }
    );
}

/**
 * Loads a single abstraction from Arweave.
 * 
 * @param absId The Arweave abstraction id.
 * @return  
 */
export async function loadSingleArweaveAbstraction(absId : string) {
    axios({
        method: 'get',
        url: ARWEAVE_URL + absId,
        responseType: 'json'
    }).then(function(response) {
        let abs = response.map(function(r) {
            return {
                name: r.data.name,
                imageUri: r.data.image,
                symbol: r.data.symbol,
            };
        });

        return abs;
    });
}















// export function getAllAbstractions() {
//   const fileNames = fs.readdirSync(abstractionsDirectory);

//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         abstraction: fileName.replace(/\.md$/, ''),
//       },
//     };
//   })
// }

// export function getAbstractionData(abstraction) {
//   const fullPath = path.join(abstractionDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   const matterResult = matter(fileContents);

//   return{
//     abstraction,
//     ...matterResult.data
//   };
// }
