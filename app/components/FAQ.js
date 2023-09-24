import React from 'react'
import styles from '../page.module.scss'
import Image from "next/image"

export default function FAQ() {
  return (
    <div id='faq' className={styles.faq}>
          {/* <div className={styles.faq_img} src='../landingPage/faq.svg' width={500} height={300}  /> */}
          <div className={styles.faq_img}></div>
          <div style={{maxWidth: '457px'}}>
            <h2>Frequently Ask </h2>
            <h2 className="purple">Question</h2>
            <p>We got answers to the questions that you might
            want to ask about <strong>getlinked Hackathon 1.0</strong></p>

            <div className={styles.accordion}>
              <div className={styles.text}>
                <div>Can I work on a project I started before the hackathon?</div>
                <Image src='../landingPage/cross.svg' width={8.323} height={19.42}  />
              </div>

              <div className={styles.text_line}></div>

              <div className={styles.text}>
                <div>What happens if I need help during the hackathon?</div>
                <Image src='../landingPage/cross.svg' width={8.323} height={19.42}  />
              </div>

              <div className={styles.text_line}></div>

              <div className={styles.text}>
                <div>What happens if I don't have an idea for a project?</div>
                <Image src='../landingPage/cross.svg' width={8.323} height={19.42}  />
              </div>

              <div className={styles.text_line}></div>

              <div className={styles.text}>
                <div>Can I join a team or do I have to come with one?</div>
                <Image src='../landingPage/cross.svg' width={8.323} height={19.42}  />
              </div>

              <div className={styles.text_line}></div>

              <div className={styles.text}>
                <div>What happens after the hackathon ends</div>
                <Image src='../landingPage/cross.svg' width={8.323} height={19.42}  />
              </div>

              <div className={styles.text_line}></div>

              <div className={styles.text}>
                <div>Can I work on a project I started before the hackathon?</div>
                <Image src='../landingPage/cross.svg' width={8.323} height={19.42}  />
              </div>

              <div className={styles.text_line}></div>

            </div>
          </div>
          <div></div>
        </div>
  )
}
