import RoadmapCard from "../components/RoadmapCard";
import styles from "../styles/Roadmap.module.css";
import HeaderSmall from "../components/HeaderSmall";


const Roadmap = () => {
  return (
    <div>
      <HeaderSmall />
      <div className={styles.container}>
        <h1 className="section-title first-page-element text-shadow">A new roadmap</h1>
        <div className={styles["steps-container"]}>
          <RoadmapCard text={[<><strong className={styles.bold}>0. Bring the project under new management. </strong>The project is now in the hands of people that want to turn it into more than just &#39;The first GAN art on Solana&#39;.</>]}/>
          <RoadmapCard text={[<><strong className={styles.bold}>1. Printing as a servcie. </strong>We have partnered with a bespoke printing company based in London. If you own an Abstraction, you can print any NFT, pay in crypto, and benefit from world wide shipping!</>]} />
          <RoadmapCard text={[<><strong className={styles.bold}>2. Make a new website to reflect the rebirth of Abstratica. </strong>This will be the starting point of our relaunch as a brand, and proof of our willingness to build. The old webiste is slow and outdated, this needs to be fixed.</>]}/>
          <RoadmapCard text={[<><strong className={styles.bold}>3. Release staking on the website. </strong>Stake your Abstractions to earn $ABS. These tokens will be used to bid on and purchase raffle tickets for 1:1 art bought using royalties.</>]}/>
          <RoadmapCard text={[<><strong className={styles.bold}>4. Start bringing Abstratica closer to the 1:1 art scene. It's where we belong. </strong>By step four, we will have built up our name again and started earning more royalties! We will use these royalties to buy 1:1 art from reputable artists in the space and auction it off (for Abstratica hodlers only) or run raffles which can be entered using $ABS. All on our own website!</>]}/>
          <RoadmapCard text={
            [<><strong className={styles.bold}>5. Collaborate with top tier 1:1 artists to celebrate 1 year of art on Solana with an exclusive NFT release, launched on abstratica.art. </strong>This is our big ambitious target and the thing we are most excited about!</>, 
            <>Get ready for auctions of amazing art held in $ABS. We have already recieved willingness to participate from a few very tallented artists!</>,
            <>If you are an OG 1:1 artist and want to take part in this celebration of 1 year of art on Solana, reach out to us!</>
            ]} />
            <RoadmapCard text={[<><strong className={styles.bold}>More to come...</strong></>]} />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;