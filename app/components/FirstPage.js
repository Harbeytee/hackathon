import React from 'react'
import styles from '../page.module.scss'
import Image from "next/image"
import { Unica_One } from 'next/font/google'
const unica = Unica_One({ subsets: ['latin'], weight: '400'})

export default function page1() {
  
  
  return (
    
    <div className={styles.page1}>
        
        <div className={styles.purpleGradient}>
          <div className="lens_center"></div>
        </div>
        {/* <Image className={styles.purpleGradient} src='../landingpage/purpleGradient.svg' width={100} height={100}/> */}


        <div className={styles.centerize}>
        
          <h2 >getlinked Te<span className={styles.lightbulb}>c</span>h</h2>
          <h2  className={styles.smallIcons}>Hackathon <span style={{color: '#D434FE', marginLeft: '0.3rem'}}>1.0</span>
           
              <Image src='../landingPage/chain.svg' alt='chain' width={32.797} height={32.797}/>
              <Image src='../landingPage/blow.svg' alt='an explosion' width={22.119} height={22.119}/>

            
          
          </h2>
          <p>Participate in getlinked tech
             Hackathon 2023 stand 
            a chance to win a Big prize</p>
          <button className={`btn ${styles.btn}`}>Register</button>
          <p className={`${styles.timer} ${unica.className}`}>00<span className={styles.time}>H</span> 00<span className={styles.time}>M</span> 00<span className={styles.time}>S</span></p>


          <div className={styles.firstpageImg1}>
            <Image src='../landingPage/firstpage-img.svg' width={419.669} height={285.669}/>
            <Image src='../landingPage/firstpage-img2.svg' width={200} height={280.889}/>

          </div> 

        {/* <Image className={styles.guy} src="/landingPage/guy.png" width={419.669} height={285.669}/>       */}
           



        </div>
        <div className={styles.heading}>
          
          <h2>Igniting a Revolution in <span className={styles.line}>HR Innovation</span></h2>
          {/* <div className={styles.line}></div> */}
          <div className={styles.firstpageImg2}>
            <Image src='../landingPage/firstpage-img.svg' width={928} height={715}/>
            <Image src='../landingPage/firstpage-img2.svg' width={667} height={641}/>

          </div> 
        </div>

      </div>
  )
}
