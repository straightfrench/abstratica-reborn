import HeaderSmall from "../../components/HeaderSmall";
import AbstraticaCard from "../../components/AbstraticaCard";
import SearchCard from "../../components/SearchCard";
import styles from "../../styles/Collection.module.css"


const FullCollection = () => {
  return (
    <div>
      <HeaderSmall />
      <div className={styles.container}>
        <SearchCard />
        <AbstraticaCard />
      </div>
    </div>
  );
}

export default FullCollection;