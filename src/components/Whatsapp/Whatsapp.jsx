import React, { useEffect, useState } from "react";
// import { FaWhatsappSquare } from 'react-icons/fa'
import "./Whatsapp.css";
import whatsApp from "../../image/whatsapp.svg";

const Whatsapp = () => {
  const [dispaly, setDisplay] = useState();
  const selectedPage = window.location.pathname;

  console.log(`uhfioh;oi${selectedPage}`);

  useEffect(()=>{
    setDisplay(window.location.pathname)
  },[dispaly])

  console.log(selectedPage);

  return (
    <>
      <div className= { dispaly == '/ourstory' ? 'ourstorywhatsapp whats-app' : 'whats-app'}>
        <a
          href="https://api.whatsapp.com/send/?phone=917869909760&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img src={whatsApp} alt="" />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
