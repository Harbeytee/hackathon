import React from 'react'
import styles from '../page.module.scss'
import Image from "next/image"

export default function Privacy() {
  return (
    <div className={styles.privacy}>
        <Image className={`${styles.purple1} star`} src='../landingpage/stars/purple.svg' width={100} height={100}/> 
        <Image className={`${styles.purple2} star`} src='../landingpage/stars/purple.svg' width={100} height={100}/> 
        <Image className={`${styles.gray} star`} src='../landingpage/stars/gray.svg' width={100} height={100}/> 

        <div className={styles.privacy_gradient}>
          <div className="lens_center"></div>
        </div>

        <div>
            <h2>Privacy Policy and</h2>
            <h2 className="purple">Terms</h2>

            <p className={styles.gray_text}>Last updated on September 12, 2023</p>

            <p>Below are our privacy & policy, which outline a lot of goodies. 
            it's our aim to always take of our participant
            </p>
            <div className={styles.privacy_box}>
                <p>
                At getlinked tech Hackathon 1.0, we value your privacy
                and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, disclose, 
                and safeguard your data when you participate in our tech 
                hackathon event. By participating in our event, you consent 
                to the practices described in this policy.
                </p>

                <h4 className="purple">Licensing Policy</h4>
                <h5>Here are terms of our Standard License:</h5>

                <div className={styles.checks}>
                    <Image className={styles.checkmark} src="../landingPage/checkmark.svg" width={17} height={17}/>
                    <p>The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                    </p>
                </div>

                <div className={styles.checks}>
                    <Image className={styles.checkmark} src="../landingPage/checkmark.svg" width={17} height={17}/>
                    <p>You are licensed to use the item available at any free source
                    sites, for your project developement</p>
                </div>

                <button className="btn">Read More</button>
            </div>
        </div>
        
        {/* <div className="privacy-img"> */}
            <Image className={styles.privacy_img} src="../landingPage/privacy.svg" width={283} height={447}/>

        {/* </div> */}
    </div>
  )
}
