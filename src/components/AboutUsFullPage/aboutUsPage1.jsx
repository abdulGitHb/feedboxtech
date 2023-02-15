import React from 'react'

import Footer from '../Footer/Footer';

import img1 from "../../image/a1.jpg"
// import img1 from "../../image/a1.jpg";
import img2 from "../../image/a2.jpg";
import img3 from "../../image/a3.jpg";
import img4 from "../../image/a4.jpg";
import img5 from "../../image/a5.jpg";
import img6 from "../../image/a6.jpg";
import img7 from "../../image/a7.jpg";
import img8 from "../../image/a8.jpg";
import img9 from "../../image/a9.jpg";
import img10 from "../../image/a10.jpg";
import img11 from "../../image/a11.jpg";
import img12 from "../../image/a12.jpg";
import img13 from "../../image/a13.jpg";
import img14 from "../../image/a14.jpg";
import img15 from "../../image/a15.jpg";
import img16 from "../../image/a16.png";
import img17 from "../../image/a17.png";
import img18 from "../../image/a18.png";

// css
import "./aboutUsPage1.css";
// importing parallax
import {Parallax} from "react-parallax";

function AboutUsPage1() {
    return (
      <>
      {/* <NavBarResp/> */}
      <Parallax bgImage={img18} strength={200} className="aditya-parall">
        <div className="aditya-about">
          
          <Parallax  strength={500} className="aditya-parallax1">
          <div className="aditya-text-content0">About US</div>
          </Parallax>

          <Parallax bgImage={img15} strength={500} className="aditya-parallax">
          <div className="aditya-text-content">
          <p className='aditya-p-text'>
             <b className="aditya-b">W</b>e strongly believe that design unlocks opportunities for
              understanding, collaboration, and buy-in from customers and
              stakeholders. Since 2015, we've been on a mission to increase the
              impact of design on people's lives.
              </p>
          </div>
         
          
          </Parallax>
          <Parallax bgImage={img14} strength={500} className="aditya-parallax">
          <div className="aditya-text-content aditya-text-content1">
          <p className='aditya-p-text'>
          <b className="aditya-b">W</b>e strongly believe that design unlocks opportunities for
              understanding, collaboration, and buy-in from customers and
              stakeholders. Since 2015, we've been on a mission to increase the
              impact of design on people's lives.
              </p>
          </div>
          </Parallax>
          <Parallax bgImage={img13} strength={500} className="aditya-parallax">
          <div className="aditya-text-content">
          <p className='aditya-p-text'>
          <b className="aditya-b">W</b>e strongly believe that design unlocks opportunities for
              understanding, collaboration, and buy-in from customers and
              stakeholders. Since 2015, we've been on a mission to increase the
              impact of design on people's lives.
              </p>
          </div>
          </Parallax>
          <Parallax bgImage={img12} strength={500} className="aditya-parallax">
          
          <div className="aditya-text-content aditya-text-content1">
          <p className='aditya-p-text'>
          <b className="aditya-b">W</b>e strongly believe that design unlocks opportunities for
              understanding, collaboration, and buy-in from customers and
              stakeholders. Since 2015, we've been on a mission to increase the
              impact of design on people's lives.
              </p>
          </div>
          </Parallax>
          
     
        </div>
        </Parallax>
        <Footer/>
        </>
      );
}

export default AboutUsPage1