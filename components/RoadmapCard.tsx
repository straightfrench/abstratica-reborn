import { ReactNode } from "react";
import styles from "../styles/RoadmapCard.module.css"

const RoadmapCard = ( props: { text: Array<ReactNode> ; } ) => {
  return (
    <div className={styles.card}>
      {props.text.map((text, index: number) => <p key={index}>{text}</p>)}
    </div>
  );
}

export default RoadmapCard;