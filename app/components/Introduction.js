import React from 'react'
import Image from "next/image"
import styles from '../page.module.scss'
export default function Introduction() {
  return (
    <div id="intro" className={styles.introduction}>
        <div>
            <Image src='../landingPage/bigIdea.svg' className={styles.big_idea} width={264.004} height={257}/>
        </div>
        <div className={styles.introText}>
          <h2>Introduction to getlinked</h2>
          <h2 className="purple">tech Hackathon 1.0</h2>
          <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!
          </p>
        </div>

      </div>
  )
}
