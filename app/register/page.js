import React from 'react'
import Header from "../components/Header"
import styles from'./register.module.scss'
import Image from "next/image"
import '../globals.scss'

export default function page() {
  return (
    <>
        <Header className={`header ${styles.desktop}`} button='btn' contact='contact-gradient'/>

       

        <div id={styles.register}>
            <div className={styles.purple_lens1}>
                <div className="lens_center"></div>

            </div>

            <div className={`${styles.purple_lens2} desktop-view`}>
                <div className="lens_center"></div>

            </div>
            
            <div className="desktop-view">
                <Image src='../register/register.svg' alt='a man using a laptop' className={`${styles.register_img} destop-view`} width={295} height={295}/>
            </div>

            <div className={styles.register_box}>
                <h2 className="purple">Register</h2>
                <Image src='../register/register.svg' alt='a man using a laptop' className={`${styles.register_img} mobile-view`} width={295} height={295}/>
                <p>Be part of this movement!<span className={styles.purple_line}></span></p>
                <h3>CREATE YOUR ACCOUNT</h3>

                <form id='register-form'>
                    <div className={styles.form_grid}>

                        <div className={styles.row}>
                            <label htmlFor='teamName'>Team's Name</label>
                            <input type='text' name='teamName' id='teamName' placeholder="Enter the name of your group" /><br />

                        </div>

                        <div>
                            <label htmlFor='phone'>Phone</label>
                            <input type='number' name='phone' id='phone' placeholder="Enter your phone number" /><br />

                        </div>

                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' placeholder="Enter your email address" /><br />
                        </div>

                        <div>
                            <label htmlFor='topic'>Project topic</label>
                            <input type='text' name='topic' id='topic'placeholder="What is your group project topic" /><br />
                        </div>

                       

                        

                        

                        

                    </div>
                    <div className={styles.last_grid}>
                            

                            <div>
                                <label htmlFor='category'>Category</label>
                                <select name="category" id="category" defaultValue={'default'} placeholder="Select your category">
                                    <option value='default' disabled >Select your category</option>
                                </select><br />
                            </div>

                            <div>
                                <label htmlFor='groupSize'>Group Size</label>
                                <select name="groupSize" id="groupSize" defaultValue={'default'} placeholder="Select">
                                    <option value='default' disabled>Select</option>
                                </select><br />
                            </div>

                        </div>
                    


                    <p className={styles.pink}>Please review your registration details before submitting</p><br />

                    <div className={styles.checkbox}>
                        <input type='checkbox' name='privacyPolicy' id='privacyPolicy'/>
                        <label>
                            
                            I agreed with the event terms and conditions
                            and privacy policy
                        </label>

                    </div>
                    

                    <button type='submit' className="btn mobile-view">Submit</button>

                    <button type='submit' className="btn desktop-view">Register Now</button>
                </form>
            </div>
            
        </div>
    </>
  )
}
