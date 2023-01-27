// Navbar.js 
import React, { useEffect } from "react"
import './Navbar.css';
import { useState} from "react";
import {Link} from 'react-scroll'
import feedbox_logo from '../../image/f_logo.png'
// import { bool } from 'prop-types';
// import styled from "styled-components";
// import onClickOutside from "react-onclickoutside";


// Navbar.propTypes = {
//   open: bool.isRequired,
// }

export default function Navbar({open,setOpen}) {

  const [show, setShow] = useState(false);
  const [showMenu,setshowMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = ()=>{
    // if(window.scrollY > 500){
    //   setShow(true);
    // }
    // else{
    //   setShow(false);
    // }

    if(typeof window !== 'undefined'){
      if(window.scrollY < lastScrollY){
        setShow(false);
      }
      else if(window.onClickOutside){
        setshowMenu(false);
      }
      else{
        setShow(true);
      }
    }

    setLastScrollY(window.scrollY);
  }

  

  useEffect(() =>{
    window.addEventListener('scroll', controlNavbar)
    // window.addEventListener("click", controlNavbarMenu);
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY]);

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
     

      <nav className={`navigation ${show && 'hidden'}`}>
        <a href="/" className="brand_logo">
            <img src={feedbox_logo} alt="" />
      </a>
      <button
        className={
          isNavExpanded ? "hamburger expanded" : "hamburger"
        }
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg> */}
        <div/>
        <div/>
        <div/>
      </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
          <Link to="active" spy={true} smooth={true} className="link">
                Home
          </Link>
          </li>
          <li>
          <Link to="about" spy={true} smooth={true} className="link">
                About
              </Link>
          </li>
          <li>
          <Link to="services" spy={true} smooth={true} className="link">
                Services
              </Link>
          </li>
          <li>
          <Link to="portfolio" spy={true} smooth={true} className="link">
                Portfolio
              </Link>
          </li>
          <li>
          <Link to="contact" spy={true} smooth={true} className="link link-contact">
                <p style={{width:"100px"}}>Contact Us</p>
              </Link>
          </li>
        </ul>
      </div>
        </nav>
    
      )
  }
