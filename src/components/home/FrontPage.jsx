import Image from 'next/image';
import styles from '../../styles/home/fronpage.module.css';
import Bitcoin from '@/images/bitcoin.png';
import MonedasBitcoin from '@/images/monedasBitcoin.png';
import FlechaRoja from '@/images/flecha_roja.png';
import BilletesMexico from '@/images/billetes_mexico.png';

export const FrontPage = () => {
  return (
    <div className={ styles.main} >
        <p className={ styles.title }>
          De{" "}
          <span>Bitcoin</span>
          {" "}
          <Image
            src={Bitcoin}
            alt="bitcoin"
            className={ styles.bitcoin }
          />
        </p>
        <p className={ styles.title }>
          A
          {" "}
          <span>Pesos</span>
          {" "}
          Mexicanos
        </p>
        <p className={ styles.text }>El Dinero Fluye Con CryptoMex</p>
        <div className={ styles.content }>
          <div className={ styles.content__grid }>
            <Image
              src={MonedasBitcoin}
              alt="bitcoin"
              className={ styles.content__grid__Image }
            />
            <Image
              src={FlechaRoja}
              alt="bitcoin"
              className={ styles.content__grid__Image }
            />
            <Image
              src={BilletesMexico}
              alt="bitcoin"
              className={ styles.content__grid__Image }
            />
          </div>
        </div>
    </div>
  )
}
