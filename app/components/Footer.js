import React from 'react'
import Image from "next/image"
export default function Footer() {
  return (
    <footer>
          <div className="footer-flex">

            <div>
              <h4 className="logo">get<span className="purple">linked</span></h4>
              <p>Getlinked Tech Hackathon is a technology innovation program 
              established by a group of organizations with the aim of showcasing 
              young and talented individuals in the field of technology
              </p>

              {/* <span className="t&p"> */}
                <p className="t_p">Terms of Use
                  <span className="purple">|</span>
                  Privacy Policy
                </p>
                
                {/* <p>Privacy Policy</p> */}

              {/* </span> */}
            </div>

            <div>
              <h5 className="purple">Useful Links</h5>
              <p>Overview</p>
              <p>Timeline</p>
              <p>FAQs</p>
              <p>Register</p>
              <div className="socials">
                <p className="purple">Follow us</p>
                <Image src='../landingPage/icons/instagram.svg' alt='x' className="social-icon" width={18} height={18}/>
                <Image src='../landingPage/icons/x.svg' alt='x' className="social-icon" width={18} height={18}/>
                <Image src='../landingPage/icons/facebook.svg' alt='facebook' className="social-icon" width={18} height={18}/>
                <Image src='../landingPage/icons/linkedIn.svg' alt='linkedIn' className="social-icon" width={18} height={18}/>
              </div>
            </div>

            <div>
              <h5 className="purple">Contact Us</h5>
              <div className="contact">
                <Image src='../landingPage/icons/phone.svg' alt='icon of a phone' className="contact-icon" width={18} height={18}/>
                <p>+234 6707653444</p>

              </div>
              <div className="contact">
                <Image src='../landingPage/icons/location.svg' alt='icon of a location pin' className="contact-icon" width={18} height={18}/>
                <p>27,Alara Street<br />
                  Yaba 100012<br />
                  Lagos State</p>

              </div>
            </div>

          </div>
          <p className="last-text">All rights reserved. &copy; getlinked Ltd.</p>

        </footer>
  )
}
