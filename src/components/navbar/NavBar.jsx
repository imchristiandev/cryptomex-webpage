import Image from 'next/image';
import styles from '../../styles/navbar/navbar.module.css';
import logo from '../../images/cryptomex.png';
import Link from 'next/link';

export const Navbar = () => {

  return (
    <div className={styles.main}>
      <div className={styles.navBar}>
        <a
          href="/cryptomex-webpage"
          rel="noopener noreferrer"
          className={ styles["logo-a"] }
        >
          <Image
            src={ logo }
            alt="Cryptospace Logo"
            className= {styles.logo}
            priority
          />
        </a>
        <div className={styles.menu}>
          <a href="/prestabit">
              Prestabit
          </a>
          <a href="/sistema-qr">
              Sistema QR
          </a>
        </div>
      </div>
    </div>
  )
}
