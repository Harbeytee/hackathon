import React from 'react'
import styles from '../page.module.scss'
import Image from "next/image"

export default function Rules() {
  return (
    <div className={styles.rules}>
        {/* <Image className={styles.rules_gradient1} src='../landingpage/purpleGradient.svg' width={100} height={100}/>
        <Image className={styles.rules_gradient2} src='../landingpage/purpleGradient.svg' width={100} height={100}/> */}
        <div className={styles.rules_gradient}>
          <div className={styles.lens_center}></div>
        </div>
        <div className={styles.rules_gradient2}>
          <div className={styles.lens_center}></div>
        </div>
        <div className={styles.rules_img}>
          <Image src='../landingPage/rules.svg' width={500} height={300}  />
          {/* <div className={styles.img}></div> */}
          <div className={`${styles.ellipse} desktop-view`}></div>
          

        </div>
        
        <div className={styles.rules_text}>
          <h2>Rules and <br />
            <span className="purple">Guidelines</span>
          </h2>
          <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!
          </p>
        </div>
        <img src='' alt=''/>
      </div>
  )
}
