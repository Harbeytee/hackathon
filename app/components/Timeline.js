import React from 'react'
import styles from '../page.module.scss'
import Image from "next/image"

export default function Timeline() {
  return (
    <div className={styles.timeline}>
        <Image className={`${styles.purple} star`} src='../landingpage/stars/purple.svg' width={100} height={100}/> 
        <Image className={`${styles.white} star`} src='../landingpage/stars/white.svg' width={100} height={100}/> 
        <Image className={`${styles.gray} star`} src='../landingpage/stars/gray.svg' width={100} height={100}/> 

        <h2>Timeline</h2>
        <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>

        <div className={`${styles.desktop} `}>
            <div>
                
                <h4 className="purple">Hackathon Announcement</h4>
                <p>The getlinked tech hackathon 1.0 is formally announced
                to the general public and teams begin to get ready to register
                </p>

                <h4 className="purple">November 18, 2023</h4>

                <h4 className="purple">Teams Registration ends</h4>
                <p>Interested Participants are no longer Allowed to register</p>

                <h4 className="purple">November 18, 2023</h4>

                <h4 className="purple">Getlinked Hackathon 1.0 Offically Begins</h4>
                <p>Accepted teams can now proceed to build their
                ground breaking skill driven solutions
                </p>

                <h4 className="purple">November 18, 2023</h4>


            </div>

            <div>
                <div className={styles.vertical_line}></div>
                <div className={styles.number}>1</div>

                <div className={styles.vertical_line}></div>
                <div className={styles.number}>2</div>

                <div className={styles.vertical_line}></div>
                <div className={styles.number}>3</div>

                <div className={styles.vertical_line}></div>
                <div className={styles.number}>4</div>

                <div className={styles.vertical_line}></div>
                <div className={styles.number}>5</div>

                <div className={styles.vertical_line}></div>
                <div className={styles.number}>6</div>

            </div>

            <div>
            <div>
                
                <h4 className="purple">November 18, 2023</h4>

                <h4 className="purple">Teams Registration begins</h4>
                <p>Interested teams can now show their interest in the
                getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>

                <h4 className="purple">November 18, 2023</h4>

                <h4 className="purple">Announcement of the accepted teams and ideas</h4>
                <p>All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
                </p>

                <h4 className="purple">November 18, 2023</h4>

                <h4 className="purple">Demo Day</h4>
                <p>Teams get the opportunity to pitch their projects to judges.
                The winner of the hackathon will also be announced on
                this day
                </p>


            </div>

            </div>
        </div>

        <div className={`${styles.mobile}`}>
            <div className={styles.timeline_info}>
                <div>
                    <span className={styles.vertical_line}></span>
                    <span className={styles.number}>1</span>
                </div>
                <div className={styles.todo}>
                    <p className="purple">Hackathon Announcement</p>
                    <p>The getlinked tech hackathon 1.0 is formally announced 
                        to the general public and teams begin
                         to get ready to register
                    </p>
                    <p className="purple">November 18, 2023</p>

                </div>
            </div>

            <div className={styles.timeline_info}>
                <div>
                    <span className={styles.vertical_line}></span>
                    <span className={styles.number}>2</span>
                </div>
                <div className={styles.todo}>
                    <p className="purple">Teams Registration begins</p>
                    <p>Interested teams can now show their interest 
                        in the getlinked tech hackathon 1.0 2023 by 
                        proceeding to register</p>
                    <p className="purple">November 18, 2023</p>

                </div>
            </div>

            <div className={styles.timeline_info}>
                <div>
                    <span className={styles.vertical_line}></span>
                    <span className={styles.number}>3</span>
                </div>
                <div className={styles.todo}>
                    <p className="purple">Teams Registration ends</p>
                    <p>Interested Participants are no longer Allowed
                    to register</p>
                    <p className="purple">November 18, 2023</p>

                </div>
            </div>

            <div className={styles.timeline_info}>
                <div>
                    <span className={styles.vertical_line}></span>
                    <span className={styles.number}>4</span>
                </div>
                <div className={styles.todo}>
                    <p className="purple">Announcement of the accepted teams and ideas</p>
                    <p>All teams whom idea has been accepted into 
                    getlinked tech hackathon 1.0 2023 are formally 
                    announced</p>
                    <p className="purple">November 18, 2023</p>

                </div>
            </div>

            <div className={styles.timeline_info}>
                <div>
                    <span className={styles.vertical_line}></span>
                    <span className={styles.number}>5</span>
                </div>
                <div className={styles.todo}>
                    <p className="purple">Getlinked Hackathon 1.0 Offically Begins</p>
                    <p>Accepted teams can now proceed to build 
                    their ground breaking skill driven solutions</p>
                    <p className="purple">November 18, 2023</p>

                </div>
            </div>

            <div className={styles.timeline_info}>
                <div>
                    <span className={styles.vertical_line}></span>
                    <span className={styles.number}>6</span>
                </div>
                <div className={styles.todo}>
                    <p className="purple">Demo Day</p>
                    <p>Teams get the opportunity to pitch their 
                        projects to judges. The winner of the 
                        hackathon will also be announced on this day</p>
                    <p className="purple">November 18, 2023</p>

                </div>
            </div>


        </div>
    </div>
  )
}
