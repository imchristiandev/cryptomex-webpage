import styles from '@/styles/register/qr.module.css'
import Image from 'next/image'
import QR from '@/images/qr.png'

export default function Prestabit() {
  return (
    <div className={ styles.main }>
      <div className={ styles.content }>
        <div className={styles.colum_left}>
          <Image 
            src={ QR }
            alt= 'Grafica'
          />
          <p>Envia Bitcoin desde cualquier parte del mundo </p>
          <p>a México y recibelo en pesos MXN</p>
        </div>
        <div className={styles.colum_right}>
          <p className={styles.colum_right__title}>Unete al futuro</p>
          <p className={styles.colum_right__text}>Eres un negocio que quiere que sus clientes reciban sus envios de dinero via WhatsApp y se cobre en tu caja.</p>
          <label for="email">Dirección de correo</label>
          <input
           type="email"
           id="email" 
           className={styles.form__input} 
          />
          <label for="name">Nombre completo</label>
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
              Terminos y Condiciones y Politicas de Privacidad
            </a>
          </label>
          <button>Mandar información</button>
          <a
            href="/prestabit"
          >
            Pre-Registro sistema Prestabit
          </a>
        </div>
      </div>
    </div>
  )
}
