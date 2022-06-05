import styles from "../styles/RoadmapCard.module.css"

const RoadmapCard = ( props ) => {
  return (
    <div className={styles.card}>
      <p>
        <h3>
          {props.header}
        </h3>
        {props.text}
      </p>
    </div>
  );
}

export default RoadmapCard;