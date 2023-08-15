import Image from 'next/image';
import styles from '../../styles/navbar/navbar.module.css';
import logo from '../../images/cryptomex.png';

export const Navbar = () => {

  return (
    <div className={styles.main}>
      <div className={styles.navBar}>
        <a
          href="/"
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
        <button className={styles.button}>
          Registrarse
        </button>
      </div>
    </div>
  )
}
