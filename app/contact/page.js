import React from 'react'
import Header from "../components/Header"
import './contact.scss'
import '../globals.scss'
import Image from "next/image"
import Link from "next/link"
import Modal from '../components/Modal/Modal'

export default function page() {
  return (
    <div id="contact">
        <Modal />
        <div className='purple_lens1'>
                <div className="lens_center"></div>

            </div>

        <div className='purple_lens2 desktop-view'>
            <div className="lens_center"></div>

        </div>
        <Header className='header desktop' button='btn' contact='contact-gradient'/>

        <Link href='/' style={{marginRight: 'auto'}}>
            <Image src='../contact/arrow.svg' alt='x' className="arrow mobile-view" width={33} height={33}/>
        </Link>
        <div className="contact-flex">

            <div className="first-half desktop-view">
                <h2 className="purple">Get in touch</h2>

                <p>Contact<br />
                Information</p>

                <p>27,Alara Street<br />
                    Yaba 100012<br />
                    Lagos State</p>

                <p>Call Us : 07067981819</p>

                <p>we are open from Monday-Friday<br />
                08:00am - 05:00pm</p>

                <div className="desktop-view">
                    <p className="purple" > Share on</p>
                    <div className="socials">
                        
                        <Image src='../landingPage/icons/instagram.svg' alt='x' className="social-icon" width={18} height={18}/>
                        <Image src='../landingPage/icons/x.svg' alt='x' className="social-icon" width={18} height={18}/>
                        <Image src='../landingPage/icons/facebook.svg' alt='facebook' className="social-icon" width={18} height={18}/>
                        <Image src='../landingPage/icons/linkedIn.svg' alt='linkedIn' className="social-icon" width={18} height={18}/>
                    </div>

                </div>

            </div>



            <div className="contact-form">
                <h2 className="purple">Questions or need 
                assistance?<br />
                Let us know about it!
                </h2>
                <p className="mobile-view">Email us below to any question related to our event</p>

                <form className='desktop-view'>
                    <input type='text' name='firstName' placeholder="First Name" /><br />

                    <input type='email' name='mail' placeholder="Mail" /><br />

                    <textarea  name='message' placeholder="Message" /><br />

                    <button type='submit' className="btn">Submit</button>

                </form>

                <form className='mobile-view'>
                    <input type='text' name='teamName' placeholder="Team's Name" /><br />

                    <input type='text' name='topic' placeholder="Topic" /><br />

                    <input type='email' name='email' placeholder="Email" /><br />

                    <textarea  name='message' placeholder="Message" />

                    <button type='submit' className="btn">Submit</button>
                </form>
            </div>

            <div className="mobile-view">
                <p className="purple" style={{textAlign: 'center'}}> Share on</p>
                <div className="socials">
                    
                    <Image src='../landingPage/icons/instagram.svg' alt='x' className="social-icon" width={18} height={18}/>
                    <Image src='../landingPage/icons/x.svg' alt='x' className="social-icon" width={18} height={18}/>
                    <Image src='../landingPage/icons/facebook.svg' alt='facebook' className="social-icon" width={18} height={18}/>
                    <Image src='../landingPage/icons/linkedIn.svg' alt='linkedIn' className="social-icon" width={18} height={18}/>
                </div>

            </div>

        </div>
        
        
        
    </div>
  )
}
