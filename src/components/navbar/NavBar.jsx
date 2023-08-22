"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/navbar/navbar.module.css';
import logo from '../../images/cryptomex.png';
import visaIcon from '../../../public/visa.svg';
import mastercardIcon from '../../../public/mastercard.svg';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.navBar}>
        <a
          href="/"
          rel="noopener noreferrer"
          className={styles["logo-a"]}
        >
          <Image
            src={logo}
            alt="Cryptospace Logo"
            className={styles.logo}
            priority
          />
        </a>
        <div className={styles.menu}>
          <a href="https://cryptospace.global/" 
             className={styles.visamaster}
             target="_blank" 
             rel="noopener noreferrer"
          >
              Compra Cryptos con 
              <Image src={visaIcon} alt="Visa Icon" className={styles.cardIcon} />
              <Image src={mastercardIcon} alt="Mastercard Icon" className={styles.cardIcon} />
          </a>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!isMenuOpen)}>
            ≡
          </button>
        </div>
        <div className={`${styles.dropdown} ${isMenuOpen ? styles.active : ""}`}>
            <a href="/prestabit">Prestabit</a>
            <a href="/sistema-qr">Sistema QR</a>
        </div>
      </div>
    </div>
  );
}
