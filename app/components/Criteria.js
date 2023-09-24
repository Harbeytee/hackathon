import React from 'react'
import styles from '../page.module.scss'
import Image from "next/image"

export default function Criteria() {
  return (
    <div className={styles.criteria}>
        <div className={styles.criteria_lens1}>
          <div className='lens_center'>
          
          </div>
        </div>

        <div className={styles.criteria_lens2}>
          <div className={`lens_center ${styles.criteria_lens2}`}></div>

        </div>
        
        <div>
        <Image src='../landingPage/criteria.svg' width={332} height={275} className={styles.criteria_img} />
        </div>
        <div>
          <h2>Judging Criteria</h2> 
          <h2 className='purple'>Key attributes</h2>
          <p><span className={styles.pink}>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
            solution. Consider whether it addresses a real-world problem in a novel 
            way or introduces innovative features.
          </p>
          <p>
          <span className={styles.pink}>Functionality:</span> Assess how well the solution works. Does it perform its 
          intended functions effectively and without major issues? Judges would
          consider the completeness and robustness of the solution.
          </p>
          <p>
          <span className={styles.pink}>Impact and Relevance:</span> Determine the potential impact of the solution 
          in the real world. Does it address a significant problem, and is it relevant 
          to the target audience? Judges would assess the potential social, 
          economic, or environmental benefits.
          </p>
          <p>
          <span className={styles.pink}>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
          Judges would consider the complexity of the code, the use of advanced 
          technologies or algorithms, and the scalability of the solution.
          </p>
          <p>
          <span className={styles.pink}>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
          to the rules and guidelines of the hackathon, including deadlines, use of 
          specific technologies or APIs, and any other competition-specific requirements.
          </p>
          <button className={`${styles.btn} btn`}>Read more</button>
        </div>
      </div>
  )
}
