import styles from "../styles/RoadmapCard.module.css"

const RoadmapCard = ( props: { header: string ; text: Array<string> ; } ) => {
  return (
    <div className={styles.card}>
      <h3>
        {props.header}
      </h3>
      {props.text.map((text, index: number) => <p key={index}> {text} </p>)}
      
    </div>
  );
}

export default RoadmapCard;