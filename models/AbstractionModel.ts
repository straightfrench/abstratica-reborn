/** Represents the essential meta-data associated with an abstraction. */
export type AbstractionPreview = {
  name: string,
  imageUri: string,
  symbol: string,
}

/** Represents the full abstraction meta-data. */
export type Abstraction = {
  name: string,
  imageUri: string,
  symbol: string,
  mint: string,
};