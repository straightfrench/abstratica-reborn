import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        Powered by
        <Image src="/footer/tensorflow.svg" alt="tensorflow" height={40} width={40} />
        <Image src="/footer/solana.svg" alt="solana logo" height={40} width={40} />
      </div>
      <div>
        the OG art project<br/>Since 14.8.2021
      </div>
      <div className="clickable">
        <Link href={"https://dsc.gg/abstratica"}  rel="noopener noreferrer">
          <a target={"_blank"}>
            <Image src="/footer/discord.svg" alt="discord" height={40} width={40} />
          </a>
        </Link>
        <Link href={"https://magiceden.io/marketplace/abstratica"}  rel="noopener noreferrer">
          <a target={"_blank"}>
            <Image src="/footer/magiceden.svg" alt="magiceden" height={40} width={160} />
          </a>          
        </Link>
        <Link href={"https://twitter.com/AbstraticaNFT"}  rel="noopener noreferrer"> 
          <a target={"_blank"}>
            <Image src="/footer/twitter.svg" alt="twitter" height={40} width={40} />
          </a>         
        </Link>
      </div>

    </footer>
  );
}

export default Footer;