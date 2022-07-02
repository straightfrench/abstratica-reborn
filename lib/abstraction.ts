/**
 * @fileoverview Responsible for loading abstractions from
 *      the Solana blockchain.
 */

import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, clusterApiUrl, Connection } from "@solana/web3.js";

import { networkConnection } from "./connection";
//import { METADATA_SCHEME } from "./meta-data/meta-data-schema.ts";
import { ArUriSuffix } from "./meta-data/ardata";

import axios from "axios";
import { AbstractionPreview } from "../models/AbstractionPreview";

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
              `-- Token Account Address ${i + 1}: ${a.pubkey.toString()} --`
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
export function loadArAbs(pageNum : number) {

    // let l : number = pageNum * PAGE_SIZE;
    // let abs = ArUriSuffix.slice(l, l + PAGE_SIZE);
    
    // axios.all(abs.map(a => 
    //     axios({
    //         method: 'get',
    //         url: ARWEAVE_URL + a.arErc,
    //         responseType: 'json'
    //     }))).then(response => {
    //         let absPrev = response.map(function(r) {
    //             return {
    //                 name: r.data.name,
    //                 imageUri: r.data.image,
    //                 symbol: r.data.symbol,
    //             };
    //         });
    //         console.log(absPrev);
    //         return absPrev;
    //     });
    const mock = [
        {
            name: 'Abstraction No.2233',
            imageUri: 'https://arweave.net/wpoXNK3RVgvwjKiV-n28O4VPHWkZiSDpscEjQGTKI1o',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2168',
            imageUri: 'https://arweave.net/moBeDTYtFM2EQVPNJNqXtrkNBFfVNs9_QQSSNritwJs',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2209',
            imageUri: 'https://arweave.net/pcs5BMXaFcRIknk3VTbAjhldxIFBFoLOhVze-3VFiD8',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2184',
            imageUri: 'https://arweave.net/OJ3ub7vrXPgrv_YazD0mhwBQI2J35kczqGNct6RSxpU',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2026',
            imageUri: 'https://arweave.net/U1F3A2clAVycPgQrlye9Std2ECF0O9iJV8eZ1PH_7IA',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2023',
            imageUri: 'https://arweave.net/WbswAYA00Q4Y_52raNXFy9E70B9IH7Wqq_fu6Pz0p0g',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2151',
            imageUri: 'https://arweave.net/wKvvQSd-Fj0LRbwSon4nXoXm5S1IH0A2a0IOhVtRV_w',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2095',
            imageUri: 'https://arweave.net/m5F2cZcfo8bKirDA2YgzLPYojOBPLt7gKRpFmjOrSxQ',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2147',
            imageUri: 'https://arweave.net/gMzNjuHlOsgk377qeeQO7tfuBVNLyrChJwqY7lvR2hc',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2317',
            imageUri: 'https://arweave.net/QuQFikwIVGg0NZXc1jQQZylCwrWyMDuzzhpS-owvGC4',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2273',
            imageUri: 'https://arweave.net/8N4CrJOKu2-q0rgXI0M9akOnwiAv_gdnCKlxa_3rS0g',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2213',
            imageUri: 'https://arweave.net/MRdOol5BYamJ576_kj9OXHohCLaJufqqkiJt1xTHXFk',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2056',
            imageUri: 'https://arweave.net/Db_BFB0146-h5mtWFRSlW0PX4rlRD4vcIQHdjC_mGrI',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2123',
            imageUri: 'https://arweave.net/UUoiFJg6q0eKwM0_qPwChu_kRsjtXiSivs6XXYlEpV8',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2314',
            imageUri: 'https://arweave.net/MGT9B2yWpgZJnBtpPSj4GeKEDNr6rNTowhRYewsPls4',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2266',
            imageUri: 'https://arweave.net/1855I4tyTWwxqjvVnUllEO5avlc8MtbUm3IhibF9F6c',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2243',
            imageUri: 'https://arweave.net/XuDLGiXlLjNz5AIDnNkKyAcKxzPPIg3iSw-xDXHKWm8',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2249',
            imageUri: 'https://arweave.net/miHO_2UzSLrXZaZnZ_IBgzoEdSKX3Z-RVsHY3FaMFxQ',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2225',
            imageUri: 'https://arweave.net/j1wuhlTJZ4ayHsBzwfHBI_qWS7lt9wig1YcJHXxui3k',
            symbol: 'BC'
        },
        {
            name: 'Abstraction No.2310',
            imageUri: 'https://arweave.net/yPvalaiPaY5G0G6OplG5RTpU2ewrJlymsKH82AQzB5s',
            symbol: 'BC'
        }
    ]

    return mock;
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
