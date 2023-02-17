import React, { useEffect } from "react";
import './Contact.css'



import { BsTelephoneOutbound } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Footer from "../Footer/Footer";
import Whatsapp from "../Whatsapp/Whatsapp";


export default function Contact() {

  
    return (
       <>
      <div className="adarsh-contactContainer">
        <h2 className="adarsh-main-head">Get in Touch</h2>
        <div className="adarsh-main">
          <div className="adarsh-leftCont">
            <h2 className="adarsh-head">Message</h2>
            <div className="adarsh-first">
              <input type="text" placeholder="Your Name" className="adarsh-name" autocomplete="off"/>
            </div>
            <div className="adarsh-first">
              <input type="email" placeholder="Your Email" className="adarsh-name" autocomplete="off" />
            </div>

            <div className="adarsh-first">
              <input type="tel" placeholder=" Your Phone no" className="adarsh-name" autocomplete="off"/>
            </div>
            <div className="adarsh-first">
              <input
                type="text"
                placeholder="Your message to us"
                className="adarsh-name"
                autocomplete="off"
              />
            </div>

            <button className="adarsh-submitBtn">Submit</button>
          </div>
          <div className="adarsh-rightCont">
            <h2 className="adarsh-info">Contact info</h2>
            <div className="adarsh-telephone">
              <div className="adarsh-icon">
                <BsTelephoneOutbound className="icon1"
                  style={{
                    color: "white",
                    width: "4vw",
                    height: "4vh",
                    marginTop: "2rem",
                  }}
                />{" "}
              </div>
              <div className="adarsh-number">
                <span>7869614790</span>
              </div>
            </div>

            <div className="adarsh-telephone">
              <div className="adarsh-icon">
                <GrMail className="adarsh-icon1"
                  style={{
                    color: "white",
                    width: "4vw",
                    height: "4vh",
                    marginTop: "2rem",
                  }}
                />{" "}
              </div>
              <div className="adarsh-number">
                <span>contact@feedbox.tech</span>
              </div>
            </div>

            <div className="adarsh-telephone">
            
              <div className="adarsh-iconn">
                <a href="https://www.instagram.com/teamfeedbox/?hl=en">
                  <FiInstagram
                    style={{
                      color: "white",
                      width: "4vw",
                      height: "4vh",
                      marginTop: "2rem",
                      paddingRight: ".6rem",
                      
                    }}
                  />{" "}
                </a>
              </div>
              <div className="adarsh-iconn">
                <a href="https://www.facebook.com/feedbox.online/">

                  <BsFacebook
                    style={{
                      color: "white",
                      width: "4vw",
                      height: "4vh",
                      marginTop: "2rem",
                      paddingRight: ".6rem",
                    }}
                  />{" "}
                </a>
              </div>
              <div className="adarsh-iconn">
                <a href="https://wa.me/7869909760">
                  {" "}
                  <FaWhatsappSquare
                    style={{
                      color: "white",
                      width: "4vw",
                      height: "4vh",
                      marginTop: "2rem",
                      paddingRight: ".6rem",
                    }}
                  />
                </a>{" "}
              </div>
              <div className="adarsh-iconn">
                <a href="https://www.linkedin.com/company/feedbox-smm/?originalSubdomain=in">
                <BsLinkedin
                  style={{
                    color: "white",
                    width: "4vw",
                    height: "4vh",
                    marginTop: "2rem",
                  }}
                />
                </a>{" "}
              </div>
            </div>

            <iframe
              className="adarsh-mapped"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.013616003008!2d75.8903461146817!3d22.727735285103147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd301f220449%3A0xb2c1e3746c297023!2sFeedBox!5e0!3m2!1sen!2sin!4v1676278750894!5m2!1sen!2sin"
              // loading="lazy"
              allowtransparency="true"
            ></iframe>
          </div>
        </div>
      </div>
      <Whatsapp />
        <Footer/>
        </>
    )
}