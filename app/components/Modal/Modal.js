import React from 'react'
import './modal.scss'
import Image from "next/image"

export default function modal({text}) {
  return (
    <div id='modal'>
        <div>
          <Image className="modal-img" src="../register/celebrating.svg" alt="a man celibrating" width={259} height={195}/>
          <h4>Congratulations</h4>
          <h4>you have successfully Registered!</h4>

          <p>Yes, it was easy and you did it!</p>
          <p>check your mail box for next step <span></span></p>

          <button className="btn">Back</button>

        </div>
        
    </div>
  )
}
