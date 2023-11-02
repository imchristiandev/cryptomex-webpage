import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home/home.banner.module.css";
import cardsBears from "../../images/cards-bears.png";
import coinsLogos from "../../images/coins-logos.svg";

export default function Banner() {
  return (
    <div className={styles.grid}>
      <div className={styles.backgroundContainer}>
        <div className={styles.sectionLeft}>
          <h3 className={styles.title}>
          Transfiere tus USDT y USDC a <br /> tu tarjeta y gasta globalmente
          </h3>
          <div className={styles.rowItems}>
            <Link className={styles.btn} href="https://prestabit.space/?nickname=Mexico%20Puglord/" target="blank">
              Registrarse
            </Link>
            <ul className={styles.list}>
              <li className={styles.itemList}>Gasta tus USD <br/> globalmente</li>
            </ul>
            <Image
              className={styles.coinsLogos}
              src={coinsLogos}
              alt="coins-logos"
            />
          </div>
        </div>
        <div className={styles.sectionRight}>
          <Image
            className={styles.cardsBearsImage}
            src={cardsBears}
            alt="cards-bears"
          />
        </div>
      </div>
    </div>
  );
}
