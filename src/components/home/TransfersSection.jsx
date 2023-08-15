import Image from 'next/image';
import styles from '../../styles/home/transfers.module.css';
import Planeta from '@/images/planeta.png';
import Banco from '@/images/banco.png';
import Foco from '@/images/foco.png';
import Store from '@/images/store.png';

const places = [
    {
      src: Banco,
      alt: "Banco",
      l1: "Bancos en México",
      l2: "ATM CryptoMex",
      id: 0,
    },
    {
      src: Foco,
      alt: "Foco",
      l1: "Pago de servicios",
      l2: "(Teléfono, internet, etc.)",
      id: 1,
    },
    {
      src: Store,
      alt: "Tienda",
      l1: "Tiendas y Supermecados",
      l2: "En todo México",
      id: 2,
    },
]

export const TransfersSection = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.grid }>
        <div className={ styles.columLeft }>
          <p className={ styles.columLeft__title}>La Transferencia</p>
          <p className={ styles.columLeft__title2}>Más Segura y Fácil</p>
          <p className={ styles.columLeft__text}>No importa en que parte del mundo estés, con Bitcoin y CryptoMex, siempre podrás mandar dinero y ayudar a tus seres queridos en México.</p>
          <p className={ styles.columLeft__text}>La familia siempre va primero</p>
          <button>Comienza Hoy</button>
        </div>
        <Image
          src={Planeta}
          alt="Planeta tierra"
        />
      </div>
      <div className={ styles.places }>
          <p className={ styles.places__title}>
            Transfiere{' '}
            <span>Sin Limites</span>
          </p>
          <p className={ styles.places__text}>
            A donde tu familia mas lo necesite
          </p>
          <div className={ styles.places__grid }>
            {places.map((place) => (
                <div key={place.id}>
                  <Image
                    src={place.src}
                    alt={place.alt}
                  />
                  <p>{place.l1}</p>
                  <p>{place.l2}</p>
                </div>
            ))}
          </div>
      </div>
    </div>
  )
}
