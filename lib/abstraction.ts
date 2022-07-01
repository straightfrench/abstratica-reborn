/**
 * @fileoverview Responsible for loading abstractions from
 *      the Solana blockchain.
 */

import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, clusterApiUrl, Connection } from "@solana/web3.js";

import { networkConnection } from "./connection.ts";
//import { METADATA_SCHEME } from "./meta-data/meta-data-schema.ts";
import { ArUriSuffix } from "./meta-data/ardata.ts";

import axios from "axios";

/**
 * Loads all abstractions owned by pk.
 * @param pk the public key owning the abstractions.
 * @return . 
 */
export async function loadPkAbs() {

    const METADATA_PROGRAM_ID : PublicKey = new PublicKey(
        "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
    );

    const edKey : PublicKey = new PublicKey(
        "6UtdsujtfEbhsSmjak34qrBLV3LsAnVn3mynTwMXBBcP"
    );

    const filter = {
        filters: [
            {
                memcmp: {
                    offset: 32,
                    bytes: edKey.toBase58(),
                },
            },
            {
                dataSize: 165
            }
        ],
    };

    const pkAccounts = await networkConnection.getProgramAccounts(
        TOKEN_PROGRAM_ID, filter
    );
    
    pkAccounts.forEach((a, i) => {
        if(i==0) {
            console.log(
              `-- Token Account Address ${i + 1}: ${account.pubkey.toString()} --`
            );
            console.log(a.account.data);
            /*console.log(`Mint: ${account.account.data["parsed"]["info"]["mint"]}`);
            console.log(
              `Amount: ${account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}`
            );*/


        }
    });
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
export async function loadArAbs(pageNum : number) {

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
            console.log(absPrev);
            return absPrev;
        }
    );
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
