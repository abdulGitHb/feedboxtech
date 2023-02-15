import React, { useEffect, useState } from "react";
import "./About.css";
import $ from "jquery";

import AboutImg from "../../image/about2.png";

// import aboutPage from '../AboutUsFullPage/AboutUs';

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 0,
      easing: "ease-in-out-back",
      delay: 50,
      anchorPlacement: "top-top",
    });
  }, []);

    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 0,
            easing: 'ease-in-out-back',
            // delay: 50,
            anchorPlacement: 'top-top'
        })
    }, [])

    return (
        <div className="about-container-hld" style={{ paddingTop: '850px' }}>
        <div className="a-container" id="about" >
            <ParallaxProvider>
             <Parallax 
             scale={[0.5,1.3]}
             >
            <h2 className="section_heading"
               >About Us</h2>
             </Parallax>
            </ParallaxProvider>
            <div data-aos="fade-up" className="a_content"
            >
                <div className="a_content_img_hld">
                    <img src={AboutImg} alt="" />
                </div>


  

          <div
            className="about_content_desc"
          >
            <p>
              Feedbox tech is a team of passionate tech professionals that are
              dedicated to providing unparalleled services in areas of website
              creation and optimisation. We help you get the exposure you need
              through our expertise in SEO, website building, internet
              marketing, and web design. We aim to make you the front runners in
              your domain while helping you reap the benefits of the internet to
              its fullest with our cut throat technological innovations.
            </p>
            <Link to="/about" className="about_content_desc_btn">
              <div>Know More</div>
            </Link>
          </div>
        </div>
        </div>
        </div>
    )
}
