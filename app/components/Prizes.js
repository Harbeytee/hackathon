import React from 'react'
import styles from '../page.module.scss'
import Image from "next/image"

export default function Prizes() {
  return (
    <div className={styles.prizes}>

        <Image className={`${styles.purple1} star`} src='../landingpage/stars/purple.svg' width={100} height={100}/> 
        <Image className={`${styles.purple2} star`} src='../landingpage/stars/purple.svg' width={100} height={100}/> 
        <Image className={`${styles.white1} star`} src='../landingpage/stars/white.svg' width={100} height={100}/> 
        <Image className={`${styles.white2} star`} src='../landingpage/stars/white.svg' width={100} height={100}/> 
        <Image className={`${styles.gray} star`} src='../landingpage/stars/gray.svg' width={100} height={100}/> 

        <div className={styles.prize_gradient1}>
          <div className="lens_center"></div>
        </div>

        <div className={styles.prize_gradient2}>
          <div className="lens_center"></div>
        </div>

        <Image src='../landingPage/trophy.svg' className={`${styles.trophy} desktop-view`} width={321} height={282}/>
        <div>
            <h2>Prizes and</h2>
            <h2 className="purple">Rewards</h2>
            <p>Highlight of the prizes or rewards for winners and for participants.</p>

            <Image src='../landingPage/trophy.svg' className={`${styles.trophy} mobile-view`} width={321} height={282}/>

            <div>
                <div className={styles.prizes_header}></div>

                <div className={styles.medals}>
                    <div className={styles.medal}>
                        <Image src='../landingPage/silver.svg'  width={75.997} height={76.421}/> 
                        <h5>2nd</h5>
                        <h6>Runner</h6>
                        <p>N300,000</p>

                    </div>

                    <div className={styles.medal}>
                        <Image src='../landingPage/gold.svg' width={75.997} height={76.421}/>
                        <h5>1st</h5>
                        <h6>Runner</h6>
                        <p style={{color: '#903AFF'}}>N400,000</p>

                    </div>

                    <div className={styles.medal}>
                        <Image src='../landingPage/bronze.svg'  width={75.997} height={76.421}/>
                        <h5>3rd</h5>
                        <h6>Runner</h6>
                        <p>N150,000</p>

                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}
