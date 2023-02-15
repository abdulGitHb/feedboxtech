import React, { useEffect, useState } from "react";
import './contactHome.css'





export default function Contact() {
    



    return (
        <div className="adarsh-container">
        <div className="adarsh-form">
          <div className="adarsh-left">
            <div className="adarsh-top">
              <h1 className="adarsh-heading">Let's Work Together </h1>
            </div>
       
                
            <div className="adarsh-bottom-main">
              <div className="adarsh-bottom1">
              <iframe className="adarsh-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.013616003008!2d75.8903461146817!3d22.727735285103147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd301f220449%3A0xb2c1e3746c297023!2sFeedBox!5e0!3m2!1sen!2sin!4v1676278750894!5m2!1sen!2sin"
             
                allowtransparency="true"
               
                
              ></iframe>
              </div>
              <div className="adarsh-bottom2">

              </div>
          
            </div>
            
          </div>
          <div className="adarsh-right">
              <input className="adarsh-text" type="text" placeholder="Your Name" />
              <input className="adarsh-text" type="email" placeholder="Your e-Mail" />
              <input type='tel' placeholder="Phone" className="adarsh-text" />
            <input
              className="adarsh-text"
              type="text"
              placeholder="Your message to us"
            />
            <br/>

            <span className="adarsh-checkSpan">
           
              <input type="checkbox" className="adarsh-text adarsh-check" />Message
              
            </span>
            <div className="adarsh-imageDiv">
              <button type="submit" className="adarsh-btnn">
                Send Message <spam></spam>
              </button>

           
            </div>
          </div>
        </div>
      </div>
    )
}