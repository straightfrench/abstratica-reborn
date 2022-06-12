import Image from "next/image";
import Link from "next/link";
import styles from "../styles/AbstraticaCard.module.css"

const AbstraticaCard = () => {
  return (
    <Link href={"collection/596"}>
      <div className={styles.card}>
        <div>
          <Image src={"/sampleAbstraction1.jpeg"} alt="abstraction" height={240} width={240}></Image>
        </div>
        <div>Abstraction n.569<br />Rank: 4101</div>
      </div>
    </Link>
  );
}

export default AbstraticaCard;