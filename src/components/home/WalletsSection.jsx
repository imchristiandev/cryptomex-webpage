import styles from "../../styles/home/wallets.module.css";
import BitcoinCom from '@/images/bitcoincom.png';
import Edge from '@/images/edge.png';
import TrustWallet from '@/images/trustwallet.png';
import Coinomi from '@/images/coinomi.png';
import CointPayments from '@/images/coinpayments.png';
import Image from "next/image";

const wallets = [
  {
    id: 0,
    src: BitcoinCom,
    alt:"bitcoin.com",
  },
  {
    id: 1,
    src: Edge,
    alt:"edge",
  },
  {
    id: 2,
    src: TrustWallet,
    alt:"Trust Wallet",
  },
  {
    id: 3,
    src: Coinomi,
    alt:"coinomi",
  },
  {
    id: 4,
    src: CointPayments,
    alt:"cointpayments",
  },
]

export const WalletsSection = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.content }>
        <p>Wallets Compatibles</p>
        <div className={ styles.content__grid }>
          {wallets.map(
            (wallet) => (
              <div key={wallet.id}>
                <Image 
                  className={ styles.content__Image }
                  src={wallet.src}
                  alt={wallet.alt}
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
