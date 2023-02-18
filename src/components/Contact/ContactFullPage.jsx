import React, { useEffect } from "react";
import "./ContactFullPage.css";
// import { Link } from "react-router-dom";
import { BsTelephoneOutbound } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import Footer from "../Footer/Footer";
import Whatsapp from "../Whatsapp/Whatsapp";
import { useState } from "react";

export default function Contact() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [message,setMessage] = useState('');
  const [thank,setThank] = useState(false);

  const submitForm=()=>{
    const formData1={
      name:name,
      email:email,
      phone:phone,
      message:message
    }
    console.log(formData1);
    // emailjs.send('service_9rw0836','template_rsny29o',formData1,'yJ4YylTCoECK4zBUn').then((result)=>{
    //     console.log(result.text);
    // },(error)=>{
    //     console.log(error.text);
    // })
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setThank(true);

    setTimeout(() => {
      setThank(false);
    }, 2000);
  }

  return (
    <>
      <div className="adarsh-contactContainer">
    <NewNav/>
        <div className="adarsh-layer"></div>
        <div className="adarsh-BigCont">
          <h2 className="adarsh-main-head">Get in Touch</h2>
          <div className="adarsh-main">
            <div className="adarsh-leftCont">
              <h2 className="adarsh-head">Message</h2>
              <div className="adarsh-first">
                <input 
                  type="text"
                  placeholder="Name"
                  className="adarsh-name"
                  autocomplete="new-password"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="adarsh-first">
                <input
                  type="email"
                  placeholder="Email"
                  className="adarsh-name"
                  autocomplete="new-password"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="adarsh-first">
                <input
                  type="tel"
                  placeholder="Phone no"
                  className="adarsh-name"
                  autocomplete="new-password"
                  min="10" max="10"
                  name="phone"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>
              <div className="adarsh-first">
                <input
                  type="text"
                  placeholder="Message"
                  className="adarsh-name"
                  autocomplete="new-password"
                  name="message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                />
              </div>

              {/* <button className="adarsh-submitBtn" onClick={submitForm}>Submit</button>
              {
                thank && <span className="thank">Thank you!</span>
              } */}
              <div className="adarsh-imageDiv">
                <button type="submit" className="adarsh-submitBtn" onClick={submitForm}>
                  Send <spam></spam>
                </button>
                {
                  thank && <span className="thank">Thank you!</span>
                }
                {/* <span className="thank">Thank you!</span> */}
              </div>
            </div>
            <div className="adarsh-rightCont">
              <h2 className="adarsh-info">Contact info</h2>
              <div className="adarsh-telephone">
                <div className="adarsh-icon">
                  <BsTelephoneOutbound size={30}
                    className="icon1"
                    // style={{
                    //   color: "white",
                    //   width: "4vw",
                    //   height: "4vh",
                    //   marginTop: "2rem",
                    // }}
                  />{" "}
                </div>
                <div className="adarsh-number">
                  <span>7869909760</span>
                </div>
              </div>

              <div className="adarsh-telephone">
                <div className="adarsh-icon ">
                  <GrMail  size={30}
                    className="adarsh-icon icon1" 
                    // style={{
                    //   color: "white",
                    //   width: "4vw",
                    //   height: "4vh",
                    //   marginTop: "2rem",
                    // }}
                  />{" "}
                </div>
                <div className="adarsh-number">
                <a className="adarsh-email" href = "mailto:contact@feedbox.tech">
                  <span>contact@feedbox.tech</span></a>
                </div>
              </div>
              <div className="adarsh-icon-cont">
                <div className="adarsh-telephone adarsh-logo">

                <a 
                      href="https://www.instagram.com/teamfeedbox/?hl=en"
                      target="_blank"
                    >
                  <div className="adarsh-insta">
                  
                      <FiInstagram className="insta-icon insta" size={39} />
                    
                  </div>
                  </a>


                  <a
                      href="https://www.facebook.com/feedbox.online/"
                      target="_blank"
                    >
                  <div className="adarsh-insta">
                   
                      <BsFacebook className="insta-icon face"  size={39} />
                  </div>
                  </a>




                  <a href="https://wa.me/7869909760" target="_blank">
                  <div className="adarsh-insta">
                   
                      {" "}
                      <ImWhatsapp className="insta-icon Wapp" size={39} />
                   
                  </div>
                  </a>

                  
                  <a
                      href="https://www.linkedin.com/company/feedbox-smm/?originalSubdomain=in"
                      target="_blank"
                    >
                  <div className="adarsh-insta">
                   
                      <BsLinkedin className="insta-icon linked" size={39} />
                    {" "}
                  </div>
                  </a>
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
      </div>
      <Whatsapp />
        <Footer/>
        </>
    )
}
