import React, { useState } from "react";
import f_logo from '../../image/f_logo.png'
import './NavBarResp.css'
import $ from 'jquery';
import { Link } from 'react-router-dom'

export default function NavBarResp() {
  const [navToggle, setnavToggle] = useState(true)

  $(document).ready(function () {

    //Mobile hamburger open and close
    $(".hamburger").click(function () {
      // console.log("hamburger clcked")
      // $("#header").addClass("mobile-open");
      $("#contacto").toggleClass("link-contact", navToggle);
      $("#header").toggleClass("mobile-open", navToggle);
      $("#nav-items-holder").toggleClass("nav-options-active");
     
     
      setnavToggle(!navToggle);
    });


  });



  return (

    <nav id="header" className="glass header-close ">
      <div id="nav-container">
        <div id="logo-holder">
          <img id="logo" src={f_logo} alt="" />

          <input id="toggle" type="checkbox"></input>

          <label htmlFor="toggle" className="hamburger">
            <div className="top-bun"></div>
            <div className="meat"></div>
            <div className="bottom-bun"></div>
          </label>

        </div>

        <div id="nav-items-holder" className="nav-options-active">
          {/* <!-- about --> */}
          <div id="n-home">

            <Link to="/" spy={true} smooth={true} className="link">
              Home
            </Link>

          </div>
          {/* <!-- about --> */}
          <div id="n-about">

            <Link to="about" spy={true} smooth={true} className="link">
              About
            </Link>

          </div>

          <div id="n-services">

            <Link to="services" spy={true} smooth={true} className="link">
              Services
            </Link>

          </div>

          <div id="n-portfolio">

            <Link to="portfolio" spy={true} smooth={true} className="link">
              Portfolio
            </Link>

          </div>

        </div>
        <div id="contacto">

          <Link to="contact" spy={true} smooth={true} 
          duration={500}
          className="link link-contact">
            <p style={{ width: "160px" }}>Contact &nbsp;Us</p>
          </Link>

        </div>
      </div>
    </nav>
  )
}