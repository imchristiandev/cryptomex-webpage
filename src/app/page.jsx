import styles from './page.module.css'
import { FrontPage } from '@/components/home/FrontPage'
import { WalletsSection } from '@/components/home/WalletsSection'
import { TransfersSection } from '@/components/home/TransfersSection'
import { SimplificationSection } from '@/components/home/SimplificationSection'
import { AppSection } from '@/components/home/AppSection'
import { CallAction } from '@/components/home/CallAction'
import Banner from '@/components/home/Banner'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <FrontPage />
      <WalletsSection />
      <TransfersSection />
      <SimplificationSection />
      <AppSection />
      <CallAction />
    </main>
  )
}
