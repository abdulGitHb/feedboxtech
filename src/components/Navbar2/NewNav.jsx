import React, { useState } from "react";
import f_logo from '../../image/f_logo.png'
import { Link } from 'react-router-dom'
import "./NewNav.css";
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function NewNav() {
  const [toggle, setToggle] = useState(false);

  const selectedPage = window.location.pathname;

  const clickHandle = (e) => {
    // e.preventDefault();
  }

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
                // onClick={clickHandle}
                onClick={() => setToggle(!toggle)}
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
                onClick={() => setToggle(!toggle)}
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
                onClick={() => setToggle(!toggle)}
                className={
                  selectedPage === "/services/webdev" ||
                  selectedPage === "/services/appdev" ||
                  selectedPage === "/services/wordpressdev"
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
                onClick={() => setToggle(!toggle)}
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
                onClick={() => setToggle(!toggle)}
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
                onClick={() => setToggle(!toggle)}
                className={
                  selectedPage === "/contactus"
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
          <a href="https://www.linkedin.com/company/feedbox-smm/mycompany/" ><FaLinkedin size={25}/></a>
          <a href="https://www.facebook.com/feedbox.online"><FaFacebookF size={25}/></a>
          <a href="https://www.instagram.com/teamfeedbox/"> <FaInstagram size={25}/> </a>
          <a href="https://twitter.com/teamfeedBox" > <FaTwitter size={25}/> </a>

          
        </div>

      </div>
    </div>
  );
}

export default NewNav;