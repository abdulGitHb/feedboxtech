import React from "react";
import f_logo from '../../image/f_logo.png'
import './Navbar.css'
import $ from 'jquery';
import { Link } from 'react-scroll'

export default function Navbar() {

  $(document).ready(function () {

    //Mobile hamburger open and close
    $(".hamburger").click(function () {
      $("#nav-items-holder").toggleClass("nav-options-active");
      $("#header").toggleClass("mobile-open");
    });


  });



  return (

    <nav id="header" className="glass header-close">
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

        <div id="nav-items-holder" className="">
          {/* <!-- about --> */}
          <div id="n-home">

            <Link to="active" spy={true} smooth={true} className="link">
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

          <Link to="contact" spy={true} smooth={true} className="link link-contact">
            <p style={{ width: "160px" }}>Contact &nbsp;Us</p>
          </Link>

        </div>
      </div>
    </nav>
  )
}