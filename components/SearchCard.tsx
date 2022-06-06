import styles from "../styles/SearchCard.module.css"

const SearchCard = () => {
  return (
    <div className={styles.card}>
      <form>
        <div>
          <button>Full collection</button>
          <button>My collection</button>
        </div>
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
          <label>Number (syntax: 1,2,7-13)</label>
          <input></input>
        </div>
      </form>
    </div>
  );
}

export default SearchCard;