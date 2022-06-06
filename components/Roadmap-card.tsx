import styles from "../styles/RoadmapCard.module.css"

const RoadmapCard = ( props: { header: string ; text: Array<string> ; } ) => {
  return (
    <div className={styles.card}>
      <text>
        <h3>
          {props.header}
        </h3>
        <p>
          {props.text.map((text, index: number) => <p key={index}> {text} </p>)}
        </p>
      </text>
    </div>
  );
}

export default RoadmapCard;