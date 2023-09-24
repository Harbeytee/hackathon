import React from 'react'
import Image from 'next/image'
import Head from "next/head"
import Link from "next/link"
export default function Header({className, button}) {
  return (
    <>
    {/* {/* <Head> */}
        <link href="https://api.fontshare.com/v2/css?f[]=montserrat@500,700,701,400,100,300,600&f[]=clash-display@400,700,500,600,300&display=swap" rel="stylesheet"></link>
      {/* </Head> */} 
    <header className={className}>
          <h4 className="logo">get<span className="purple">linked</span></h4>
          <div className="desktop-view">
            <ul>
                <li><Link href='/'>Timeline</Link></li>
                <li><a href='/#intro'>Overview</a></li>
                <li><a href='/#faq'>FAQs</a></li>
                <li><Link href='/contact'>Contact</Link></li>

            </ul>
            <Link href='/register' className={button}>Register</Link>

          </div>

          <Image className="mobile-view" src="/hamburger.svg" alt='image' width={19} height={14}/>
          

    </header>
    </>
  )
}
