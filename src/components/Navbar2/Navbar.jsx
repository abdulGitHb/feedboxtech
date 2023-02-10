import React, { useState } from "react";
import f_logo from '../../image/f_logo.png'
import './Navbar.css'
import $ from 'jquery';
import { Link } from 'react-scroll'

export default function Navbar() {
  const [navToggle, setnavToggle] = useState(true)

  $(document).ready(function () {

    //Mobile hamburger open and close
    $(".hamburger").click(function () {
      // console.log("hamburger clcked")
      // $("#header").addClass("mobile-open");
      // $("#contacto").toggleClass("link-contact", navToggle);
      $("#header").toggleClass("mobile-open", navToggle);
      $("#nav-items-holder").toggleClass("nav-options-active");


      setnavToggle(!navToggle);
    });


  });



  return (

    <nav id="header" className="glass header-close ">
      <div id="nav-container">
        <div id="logo-holder">
          <Link to="hero-home" spy={true} smooth={true} className="link">
            <img id="logo" src={f_logo} alt="" />
          </Link>


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

            <Link to="dummy" spy={true} smooth={true} className="n_link">
              Home
            </Link>

          </div>
          {/* <!-- about --> */}
          <div id="n-about">

            <Link to="about" spy={true} smooth={true} className="n_link">
              About
            </Link>

          </div>

          <div id="n-services">

            <Link to="services" spy={true} smooth={true} className="n_link">
              Services
            </Link>

          </div>

          <div id="n-portfolio">

            <Link to="portfolio" spy={true} smooth={true} className="n_link">
              Portfolio
            </Link>

          </div>
          <div id="n-ourstory" style={{ textAlign: 'center' }}>

            <a href="/ourstory" className="n_link" style={{ textAlign: 'center' }}>
              Our Story
            </a>

          </div>

        </div>
        <div id="contacto">

          <Link to="contact" spy={true} smooth={true}
            duration={500}
            className="link "
            style={{ color: '#0090ee' }}
          >
            <p style={{ width: "160px" }}>Contact &nbsp;Us</p>
          </Link>

        </div>
      </div>
    </nav>
  )
}