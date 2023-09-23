
import styles from './page.module.scss'
import FirstPage from './components/FirstPage'
import Introduction from "./components/Introduction"
import Rules from "./components/Rules"
import Criteria from "./components/Criteria"
import FAQ from "./components/FAQ"
import Timeline from "./components/Timeline"
import Prizes from "./components/Prizes"
import Partners from "./components/Partners"
import Privacy from "./components/Privacy"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header className='header' button='btn'/>
      <FirstPage />
      <Introduction />
      <Rules />
      <Criteria />
      <FAQ />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
      

      

      
        
      
      
    </main>
  )
}
