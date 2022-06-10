import { ReactNode } from "react";
import styles from "../styles/RoadmapCard.module.css"
import Image from "next/image";

const RoadmapCard = ( props: { text: Array<ReactNode>, completed: boolean; } ) => {

  if (props.completed) {
    return (
      <div className={styles.card}>
        {props.text.map((text, index: number) => <p key={index}>{text}</p>)}
        <Image src={"/tick-mark.png"} width={60} height={60} alt="tick-mark"></Image>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      {props.text.map((text, index: number) => <p key={index}>{text}</p>)}
    </div>
  );

}

export default RoadmapCard;