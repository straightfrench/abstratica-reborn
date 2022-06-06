import RoadmapCard from "../components/Roadmap-card";
import styles from "../styles/Roadmap.module.css";
import HeaderSmall from "../components/HeaderSmall";


const Roadmap = () => {
  return (
    <div>
      <HeaderSmall />
      <h1 className={styles.title}>A new roadmap</h1>
      <div className={styles.maincontainer}>
        <RoadmapCard header="0. Bring the project under new management." 
        text={["The project is now in the hands of people that want to turn it into more than just 'The first GAN art on Solana'."]}/>
        <RoadmapCard header="1. Printing as a servcie." 
        text={["We have partnered with a bespoke printing company based in London. If you own an Abstraction, you can print any NFT, pay in crypto, and benefit from world wide shipping!"]} />
        <RoadmapCard header="2. Make a new website to reflect the rebirth of Abstratica." 
        text={["This will be the starting point of our relaunch as a brand, and proof of our willingness to build. The old webiste is slow and outdated, this needs to be fixed."]}/>
        <RoadmapCard header="3. Release staking on the website." 
        text={["Stake your Abstractions to earn $ABS. These tokens will be used to bid on and purchase raffle tickets for 1:1 art bought using royalties."]}/>
        <RoadmapCard header="4. Start bringing Abstratica closer to the 1:1 art scene. It's where we belong." 
        text={["By step four, we will have built up our name again and started earning more royalties! We will use these royalties to buy 1:1 art from reputable artists in the space and auction it off (for Abstratica hodlers only) or run raffles which can be entered using $ABS. All on our own website!"]}/>
        <RoadmapCard header="5. Collaborate with top tier 1:1 artists to celebrate 1 year of art on Solana with an exclusive NFT release, launched on abstratica.art." 
        text={
          [
            "This is our big ambitious target and the thing we are most excited about!", 
            "Get ready for auctions of amazing art held in $ABS. We have already recieved willingness to participate from a few very tallented artists!",
            "If you are an OG 1:1 artist and want to take part in this celebration of 1 year of art on Solana, reach out to us!"
          ]} />
      </div>
    </div>
  );
}

export default Roadmap;