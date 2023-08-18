import Image from 'next/image'
import styles from '../../styles/home/simplification.module.css'
import MonedasFlechas from '@/images/monedas_flechas.png'
import Alcancia from '@/images/alcancia.png'
import Phone from '@/images/phone-bk.png'
import Bitcoin from '@/images/bitcoin-bk.png'
import Billetera from '@/images/billetera.png'
import TC from '@/images/tc.png'
import CajaFuerte from '@/images/caja-fuerte.png'

export const SimplificationSection = () => {
  return (
    <div className={ styles.main }>
      <p className={ styles.text }>
        CryptoMex para ti
      </p>
      <p className={ styles.title }>
        Cómo simplificamos
      </p>
      <p className={ styles.title2 }>
        Bitcoin
      </p>
      <div className={ styles.grid }>
        <div className={ styles.grid__div }>
          <p className={ styles.grid__div__title }>
            Envía en Bitcoin y recibe en Pesos Mexicanos{"   "}
            <span>mxn</span>
          </p>
          <div>
            <div className={ styles.grid__div__grid }>
              <Image 
                src={Bitcoin}
                alt='Bitcoin blanco y negro'
              />
              <div>
                <p className={ styles.grid__div__grid__title }>Bitcoin, Bitcoin Cash y Pesos <span>mxn</span></p>
                <p>Bitcoin a pesos mexicanos</p>
              </div>
            </div>
            <div className={ styles.grid__div__grid }>
              <Image 
                src={Phone}
                alt='Teléfono blanco y negro'
              />
              <div>
                <p className={ styles.grid__div__grid__title }>App web simple y fácil</p>
                <p>Usa nuestra web app simple y fácil de usar</p>
              </div>
            </div>
          </div>
        </div>
        <Image 
          src={MonedasFlechas}
          alt='Monedas Flechas'
        />
      </div>
      <div className={ styles.grid }>
        <Image 
          src={Alcancia}
          alt='Alcancia'
        />
        <div className={ styles.grid__div }>
          <p className={ styles.grid__div__title2 }>
            PRÓXIMAMENTE<br />
            <span>Bitcoin a credito Cryptomex</span>
          </p>
          <div>
            <div className={ styles.grid__div__grid }>
              <Image 
                src={Billetera}
                alt='Bitcoin blanco y negro'
              />
              <div>
                <p className={ styles.grid__div__grid__title }>Bitcoin a crédito <span>PRÓXIMAMENTE</span></p>
                <p>Con PrestaBit es posible</p>
              </div>
            </div>
            <div className={ styles.grid__div__grid }>
              <Image 
                src={TC}
                alt='Teléfono blanco y negro'
              />
              <div>
                <p className={ styles.grid__div__grid__title }>Compra Bitcoin</p>
                <p>En nuestras sucursales, ATM's o tarjetas de crédito</p>
              </div>
            </div>
            <div className={ styles.grid__div__grid }>
              <Image 
                src={CajaFuerte}
                alt='Teléfono blanco y negro'
              />
              <div>
                <p className={ styles.grid__div__grid__title }>Cuida tus Bitcoins</p>
                <p>Usa una wallet descentralizada para guardar tus activos digitales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
