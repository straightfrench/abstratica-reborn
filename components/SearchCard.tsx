import styles from "../styles/SearchCard.module.css"

const SearchCard = () => {
  return (
    <div className={styles["search-card"]}>
      <form>
        <button className={styles["collection-button"]} >Full collection</button>
        <button className={styles["collection-button"]} >My collection</button>
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
      </form>
    </div>
  );
}

export default SearchCard;