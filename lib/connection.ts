import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

/** Mainnet connection object. */
export const networkConnection : Connection = 
  new Connection(clusterApiUrl("mainnet-beta"));


/** NOT sure what these keys are for. */
export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID : PublicKey = 
  new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");

/** Public key of the SPL Token Program which owns all
    token and mint accounts. */
export let TOKEN_PROGRAM_ID : PublicKey = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);