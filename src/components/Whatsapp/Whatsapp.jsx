import React from 'react'
// import { FaWhatsappSquare } from 'react-icons/fa'
import './Whatsapp.css'
import whatsApp from '../../image/whatsapp.svg'

const Whatsapp = () => {
  return (
    <div className='whats-app'>
        <a 
            href="https://api.whatsapp.com/send/?phone=917869909760&text&type=phone_number&app_absent=0">
            <img src={whatsApp} alt="" />
        </a>
    </div>
  )
}

export default Whatsapp