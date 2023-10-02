import React from 'react'
import styles from '../page.module.scss'
import Image from "next/image"

export default function Partners() {
  return (
    <div className={styles.partners}>

        

        <div className={styles.partners_gradient1}>
          <div className="lens_center"></div>
        </div>

        <div className={styles.partners_gradient2}>
          <div className="lens_center"></div>
        </div>

        <h2>Partners and Sponsors</h2>

        <p>Getlinked Hackathon 1.0 is honored to have the following major 
        companies as its partners and sponsors
        </p>

        <div className={styles.sponsors}>
          <Image className={`${styles.purple1} star`} src='../landingpage/stars/purple.svg' width={100} height={100}/> 
          <Image className={`${styles.purple2} star`} src='../landingpage/stars/purple.svg' width={100} height={100}/> 
          <Image className={`${styles.white} star`} src='../landingpage/stars/white.svg' width={100} height={100}/> 

          <Image className={styles.top_sponsor} src="../landingPage/partners/libertyA.svg" width={80} height={80}/>

          <div style={{alignSelf: 'flex-end'}} className={styles.straight_line}></div>

          <Image className={styles.middle_sponsor} src="../landingPage/partners/libertyP.svg" width={80} height={40}/>

          <div style={{alignSelf: 'flex-end'}}className={styles.straight_line}></div>

          <Image className={styles.top_sponsor} src="../landingPage/partners/winwise.svg" width={80} height={80}/>


          <div className={styles.horizontal_line}></div>
          <div className={styles.invisible_circle}></div>
          <div className={styles.horizontal_line}></div>
          <div className={styles.invisible_circle}></div>
          <div className={styles.horizontal_line}></div>


          <Image className={''} src="../landingPage/partners/whispersms.svg" width={80} height={80}/>
          <div style={{alignSelf: 'flex-start'}} className={styles.straight_line}></div>

          <Image className={styles.middle_sponsor} src="../landingPage/partners/paybox.svg" width={80} height={40}/>
          <div style={{alignSelf: 'flex-start'}} className={styles.straight_line}></div>
          
          <Image className={''} src="../landingPage/partners/vuzualplus.svg" width={80} height={80}/>
        </div>
    </div>
  )
}
