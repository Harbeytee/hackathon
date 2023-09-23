import React from 'react'
import Header from "../components/Header"
import styles from'./register.module.scss'
import Image from "next/image"

export default function page() {
  return (
    <div id={styles.register}>
        <Header className={`header ${styles.desktop}`} button='btn'/>
        <div className="desktop-view"></div>

        <div className="register-box">
            <h2 className="purple">Register</h2>
            <Image src='../register/register.svg' alt='a man using a laptop' className="mobile-view" width={195} height={155}/>
            <p>Be part of this movement!</p><span>...............</span>
            <h3>CREATE YOUR ACCOUNT</h3>

            <form id='register-form'>
                <label for='teamName'>Team's Name</label>
                <input type='text' name='teamName' id='teamName' placeholder="Enter the name of your group" /><br />

                <label for='phone'>Phone</label>
                <input type='number' name='phone' id='phone' placeholder="Enter your phone number" /><br />

                <label for='email'>Email</label>
                <input type='email' name='email' id='email' placeholder="Enter your email address" /><br />

                <label for='topic'>Project topic</label>
                <input type='text' name='topic' id='topic'placeholder="What is your group project topic" /><br />

                <label for='category'>Category</label>
                <select name="category" id="category" placeholder="Select your category">
                    <option value='' disabled='true' selected hidden>Select your category</option>
                </select><br />

                <label for='groupSize'>Group Size</label>
                <select name="groupSize" id="groupSize" placeholder="Select your category">
                    <option value='' disabled='true' selected hidden>Select your category</option>
                </select><br />

                <i className="purple">Please review your registration details before submitting</i><br />

                <label>
                    <input type='checkbox' name='privacyPolicy' id='privacyPolicy'/>
                    I agreed with the event terms and conditions
                    and privacy policy
                </label>

                <button type='submit' className="btn mobile-view">Submit</button>

                <button type='submit' className="btn desktop-view">Register Now</button>
            </form>
        </div>
        
    </div>
  )
}
