import Image from 'next/image'
import styles from '../../styles/home/callaction.module.css'
import Magia from '@/images/magic.png'
import Link from 'next/link'

export const CallAction = () => {
  return (
    <div className={ styles.main }>
      <div>
        <p className={ styles.text }>Unete a la familia</p>
        <p className={ styles.title }>¿Ves qué fácil es con <span>CryptoMex?</span></p>
        <Link href="/prestabit">
          <button>Comienza hoy</button>
        </Link>
      </div>
      <div className={ styles.div__img }>
        <Image
          src={Magia}
          alt='Sobrero de mago'
        />
      </div>
    </div>
  )
}
