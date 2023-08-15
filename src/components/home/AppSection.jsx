import styles from '../../styles/home/app.module.css'
import WhatsApp from '@/images/whatsapp.png'
import BitcoinEmail from '@/images/bitcoin-email.png'
import iPhone from '@/images/iphone.png'
import Image from 'next/image'

const steps = [
    {
        step: "Paso 1",
        src: WhatsApp,
        alt: "WhatsApp",
        title: "Registrate",
        text: "Directamente solo con tu numero de WhatsApp."
    },
    {
        step: "Paso 2",
        src: BitcoinEmail,
        alt: "Bitcoin - Email",
        title: '"Su Nombre" @ "Tienda"',
        text: "Recibe Bitcoins convertidos a pesos Mexicanos al instante, en cualquiera de nuestros aliados y servicios."
    },
    {
        step: "Paso 3",
        src: iPhone,
        alt: "iPhone",
        title: "Escanea y recibe",
        text: "Escanea QR en sucursales, recibe directamente a tu banco, paga la luz y retira en cajeros Cryptomex"
    },
]

export const AppSection = () => {
  return (
    <div className={ styles.main }>
      <p className={ styles.title }>Cómo <span>empezar</span></p>
      <p className={ styles.text }>
        Realiza tu primer tranferencia en 3 simples pasos
      </p>
      <div className={ styles.grid }>
        {steps.map((step) => (
          <div className={styles.grid__div} key={step.step}>
            <div>
              <p className={ styles.step }>{step.step}</p>
              <p className={ styles.step__title }>{step.title}</p>
              <p className={ styles.step__text }>{step.text}</p>
            </div>
            <Image 
              src={step.src}
              alt={step.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
