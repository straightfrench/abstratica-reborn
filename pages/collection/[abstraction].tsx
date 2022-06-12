// import { getAllAbstractions, getAbstractionData } from '../../lib/abstraction.js'
import Image from "next/image";
import Link from "next/link";
import HeaderSmall from "../../components/HeaderSmall";
import styles from '../../styles/Abstraction.module.css'

// const Abstraction = ({abstractionData}) => {
const Abstraction = ({}) => {
  return (
    <div>
      <HeaderSmall />
      <div className={styles.container}>
        <div className="sub-container">
          <button className={styles["back-button"]} >
            <Link href={"/collection"}>
              <a>
                <Image src={"/back-arrow.png"} alt="back arrow" width={30} height={30} >

                </Image>
              </a>
            </Link>
          </button>
          <div className={styles["text-box"]}>
            Abstraction n.569
          </div>
        </div>
        <div className="sub-container">
          <div className={styles["image-box"]}>
            <Image src="/sampleAbstraction1.jpeg" height={400} width={400} alt="abstraction"></Image>
          </div>
          <div className={styles["stats-box"]}>
            <p><strong>Frame:</strong> Plain</p>
            <p><strong>Reflection:</strong> Plain</p>
            <p><strong>Rank:</strong> 4101</p>
            <p><strong>Owner:</strong> ksdfhoaidjarfohiodhf</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Abstraction;

// export async function getStaticPaths() {
//   const paths = getAllAbstractions();
//   return {
//     paths,
//     fallback:false
//   };
// };

// export async function getStaticProps({ params }) {
//   const postData = getAbstractionData(params.id);
//   return {
//     props: {
//       abstractionData,
//     },
//   };