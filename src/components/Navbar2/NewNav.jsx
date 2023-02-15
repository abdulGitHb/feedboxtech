import React, { useState } from "react";
import f_logo from '../../image/f_logo.png'
import { Link } from 'react-router-dom'
import "./NewNav.css";
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function NewNav() {
  const [toggle, setToggle] = useState(false);

  const selectedPage = window.location.pathname;

  return (
    <div className="container">
        <div className="nav-container">
            <Link to="/" spy={true} smooth={true} className="link">
                <img className="navbar-logo" id="logo" src={f_logo} alt="" />
             </Link>
            <div
                className={toggle ? "button_container active" : "button_container"}
                onClick={() => setToggle(!toggle)}>
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>
        </div>

      {/* </div> */}
      <div className={toggle ? "overlay open" : "overlay"} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <Link id="nav_home"
                to ="/"
                className={
                  selectedPage === "/"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }>
              
              
                <div className="real">Home</div>
                <div className="cloned">Home</div>
              </Link>
            </li>

            <li>
              <Link
                id="nav_about"
                to="/about"
                className={
                  selectedPage === "/about"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">About Us</span>
                <span className="cloned">About Us</span>
              </Link>
            </li>

            <li>
              <Link
                id="nav_services"
                to="/services/webdev"
                className={
                  selectedPage === ("/services/webdev"
                  || "/services/appdev"
                  || "/services/wordpressdev")
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">Services</span>
                <span className="cloned">Services</span>
              </Link>
            </li>

            <li>
              <Link
                id="nav_portfolio"
                to="/Portfolio"
                className={
                  selectedPage === "/Portfolio"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">Portfolio</span>
                <span className="cloned">Portfolio</span>
              </Link>
            </li>

            <li>
              <Link
                id="nav_ourstory"
                to="/ourstory"
                className={
                  selectedPage === "/ourstory"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">Our Story</span>
                <span className="cloned">Our Story</span>
              </Link>
            </li>

            <li>
              <Link
                id="nav_contact"
                to="/contactus"
                className={
                  selectedPage === "/contact"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">Contact Us</span>
                <span className="cloned">Contact Us</span>
              </Link>
            </li>

          </ul>
        </nav>

        <div className="navbar-icons">
          <a><FaLinkedin size={25}/></a>
          <a><FaFacebookF size={25}/></a>
          <a> <FaInstagram size={25}/> </a>
          <a> <FaTwitter size={25}/> </a>

          
        </div>

      </div>
    </div>
  );
}

export default NewNav;