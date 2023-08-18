import styles from '@/styles/register/prestabit.module.css'
import Image from 'next/image'
import Grafica from '@/images/grafica.png'

export default function Prestabit() {
  return (
    <div className={ styles.main }>
      <div className={ styles.content }>
        <div className={styles.colum_left}>
          <Image 
            src={ Grafica }
            alt= 'Grafica'
          />
          <p>Compra Bitcoin con crédito</p>
          <p>$0.00 de enganche</p>
        </div>
        <div className={styles.colum_right}>
          <p className={styles.colum_right__title}>Pre-Registro</p>
          <p className={styles.colum_right__text}>Prestabit - Bitcoin a $0.00 de enganche.</p>
          <label>Dirección de correo</label>
          <input
           type="email"
           id="email" 
           className={styles.form__input} 
          />
          <label>Nombre completo</label>
          <input
           type="text" 
           id="name" 
           className={styles.form__input}
          />
          <label>
            <input
              type="checkbox"
            />
            {" "}Acepto los
            <a
              href= ""
            >
              Términos - Políticas
            </a>
          </label>
          <button>Registrarme</button>
          <a
            href="/sistema-qr"
          >
            Sistema QR de envios
          </a>
        </div>
      </div>
    </div>
  )
}
