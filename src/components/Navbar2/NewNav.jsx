import React, { useState } from "react";
import f_logo from '../../image/f_logo.png'
import { Link } from 'react-router-dom'
import "./NewNav.css";

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
              <a
                id="nav_home"
                href="/"
                className={
                  selectedPage === "/"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <div className="real">Home</div>
                <div className="cloned">Home</div>
              </a>
            </li>

            <li>
              <a
                id="nav_about"
                href="/about"
                className={
                  selectedPage === "/about"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">About Us</span>
                <span className="cloned">About Us</span>
              </a>
            </li>

            <li>
              <a
                id="nav_services"
                href="/services/webdev"
                className={
                  selectedPage === "/services/webdev"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">Services</span>
                <span className="cloned">Services</span>
              </a>
            </li>

            <li>
              <a
                id="nav_portfolio"
                href="/Portfolio"
                className={
                  selectedPage === "/Portfolio"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">Portfolio</span>
                <span className="cloned">Portfolio</span>
              </a>
            </li>

            <li>
              <a
                id="nav_ourstory"
                href="/ourstory"
                className={
                  selectedPage === "/ourstory"
                    ? "overlay-menu-a active"
                    : "overlay-menu-a"
                }
              >
                <span className="real">Our Story</span>
                <span className="cloned">Our Story</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NewNav;