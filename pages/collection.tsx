import HeaderSmall from "../components/HeaderSmall";
import AbstraticaCard from "../components/AbstraticaCard";
import SearchCard from "../components/SearchCard";
import styles from "../styles/Collection.module.css"


const FullCollection = () => {
  return (
    <div>
      <HeaderSmall />
      <div className={styles.container}>
        <h1 className="section-title text-shadow" id={styles["full-collection-title"]}>The Full Collection</h1>
        <div className={styles["search-container"]}><SearchCard /></div>
        
        <div className={styles["art-container"]}>
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
          <AbstraticaCard />
        </div>
      </div>
    </div>
  );
}

export default FullCollection;