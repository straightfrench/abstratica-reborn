import styles from "../styles/SearchCard.module.css"

const FULL_COLLECTION = false;
const OWNED_COLLECTION = true;

const SearchCard = (props: { setCollection: (arg0: any) => void; }) => {
  return (
    <div className={styles["search-card"]}>
      <button onClick={ () => { props.setCollection(FULL_COLLECTION) } }>Full collection</button>
      <button onClick={ () => { props.setCollection(OWNED_COLLECTION) } }>My collection</button>
      <div>
        <label>Frame</label>
        <select name="frames" id="frame">
          <option value={"none"}>Plain</option>
          <option value={"bronze"}>Bronze</option>
          <option value={"silver"}>Silver</option>
          <option value={"gold"}>Gold</option>
          <option value={"solana"}>Solana</option>
        </select>
      </div>
      <div>
        <label>Reflection</label>
        <select name="reflections" id="reflection">
          <option value={"none"}>Plain</option>
          <option value={"silver"}>Silver</option>
          <option value={"gold"}>Gold</option>
          <option value={"solana"}>Solana</option>
        </select>
      </div>
      <div>
        <label>Abstraction</label>
        <input placeholder="Number (syntax: 1,2,7-13)"></input>
      </div>
    </div>
  );
}

export default SearchCard;