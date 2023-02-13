import React, { useEffect, useState } from "react";
import "./About.css";
import $ from "jquery";

import AboutImg from "../../image/about2.png";

// import aboutPage from '../AboutUsFullPage/AboutUs';

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { LayoutGroupContext } from "framer-motion";

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

  const [classes, setClasses] = useState(0);
  //   console.log(window);

  window.onscroll = function (event) {
    var offset = window.pageYOffset;
    console.log(offset);
    $(document).ready(function () {
      if (offset < 1600) {
        $(".a-layer").removeClass("a-layer_open");
      }
      if (offset > 1600) {
        $("#layer").addClass("a-layer_open");
      }

      // setClasses(classes);
      // if (classes>100 && classes<1000) {
      //     // green
      //     body.style.backgroundColor = 'green';
      // } else{

      // }
    });
  };

  //   window.addEventListener("scroll", function(event) {

  //     var top = this.scrollY
  //     console.log(top);
  //     setClasses(top);

  // }, false);

  return (
    <>
      <div id="layer" className="a-layer"></div>
      <div className="a-container" id="about">
        <h2 className="section_heading" data-aos="fade-up">
          About Us
        </h2>
        <div data-aos="fade-up" className="a_content">
          <div className="a_content_img_hld">
            <img src={AboutImg} className="" alt="" />
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
    </>
  );
}
