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
import { Link } from 'react-router-dom';

function AboutUsPage1() {
    return (
      <>
      {/* <NavBarResp/> */}
      <Parallax bgImage={img18} strength={200} className="aditya-parall">
        <div className="aditya-about">
          <Parallax  strength={500} className="aditya-parallax1">
          <div className="aditya-text-content0">About Us</div>
          </Parallax>

          <Parallax bgImage={img15} strength={500} className="aditya-parallax">
          <div className="aditya-text-content">
          <p className='aditya-p-text'>
             <b className="aditya-b">F</b>eedbox was awarded the MP Young Achievers Award by the CM of Madhya Pradesh Shri Shivraj Singh Chouhan. We were among the top 10 businesses to receive a banner shoutout at the CM house in Bhopal.
              </p>
          </div>
         
          
          </Parallax>
          <Parallax bgImage={img14} strength={500} className="aditya-parallax">
          <div className="aditya-text-content aditya-text-content1">
          <p className='aditya-p-text'>
          <b className="aditya-b">F</b>eedbox became the first startup in Indore to receive this accolade. 3 years in this industry, our consistency and hard work were met by the prestigious certificate which is still a dream for many budding businesses.
              </p>
          </div>
          </Parallax>
          <Parallax bgImage={img13} strength={500} className="aditya-parallax">
          <div className="aditya-text-content">
          <p className='aditya-p-text'>
          <b className="aditya-b">F</b>eedbox was founded by 2 engineers,Yash & Ayushi, who had a shared vision of starting a digital marketing company. The company's focus on revenue growth has helped many startups to scale their businesses and achieve their financial goals in the past 3 years.
              </p>
          </div>
          </Parallax>
          <div className='aditya-about-story'>
               {/* about us story */}
                 <div className="aditya-story-head">Our Story</div>
                 <div className='aditya-story-text'> 
                     <div>
                     Every success story has a humble beginning. Ours was driven
                     by an aim to disrupt the status quo in the future of marketing! 
                     Our founder's journey goes back to 20XX, while he was still in 
                     college, promoting and marketing events and concerts in Indore.
                     He was training his juniors and working with them all the same 
                     to attain experience. <br/>
                     </div>
                     <div>
                     In his final year, Yash had IIM calls as well as placement offers
                     in several top notch companies across the country but he'd rather 
                     hustle to make his dream work than punch clock for someone else's.
                     The paucity of funds resulted him in taking up a temporary job in 
                     Indore to provide for his startup. Our now COO joined him around 
                     that time as an intern.
                     </div>
                 </div>
                 {/* about us story button */}
                 <Link to='/ourstory'><button className='story-btn'  type="button">Read Full Story</button></Link>
               </div>
        </div>
        
  
     
        </Parallax>
        
        <Footer/>
        </>
      );
}

export default AboutUsPage1