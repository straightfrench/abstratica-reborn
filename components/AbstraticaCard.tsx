import Image from "next/image";
import Link from "next/link";
import styles from "../styles/AbstraticaCard.module.css"
import { AbstractionPreview } from "../models/AbstractionPreview";

//this is the old version. needs to be replaced by the commented out code bellow.
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


// export default AbstraticaCard;
// const AbstraticaCard = (previewObject: AbstractionPreview) => {
//   return (
//     <Link href={"collection/596"}>
//       <div className={styles.card}>
//         <div>
//           <Image src={previewObject.imageUri} alt={previewObject.name} height={240} width={240}></Image>
//         </div>
//         <div>{previewObject.name}<br />Rank: 4101</div>
//       </div>
//     </Link>
//   );
// }

export default AbstraticaCard;