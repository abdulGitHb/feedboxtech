import React, { useEffect, useState } from 'react'
// import data from '../../JsonData/aboutUsData';

import './AboutUs.css';
// import img from '../../image/aboutbanner.jpg'
import NavBarResp from '../Navbar2/NavBarResp';
import Footer from '../Footer/Footer';
import a1 from  "../../image/achie1.png"
import a2 from "../../image/achie2.png";
import a3 from "../../image/achie3.png";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function AboutUs() {

  // const [dataSection, setDataSection] = useState([]);
  // let sectArr = [];

  // data.sections.map(sect=>{
  //   sectArr=[...sectArr, sect];
  //  });

  //  console.log(sectArr)

  useEffect(()=>{
    
  },[])
  return (
    <>
    <NavBarResp/>


    <div className='aditya-main-conatiner-outer'>
    <div class="aditya-about-container">
      {/* The headding of the about us */}
      <div className='aditya-about-heading'>About Us</div>
      

      <div className='aditya-about-achievement'>
            {/* Achievements and Recoginition Title*/}
          <div className='aditya-about-achievement-left'>
              <div className='aditya-about-achievement-title'>
                <span className='aditya-about-achievement-span aditya-about-achievement-span1'>Achievements</span>
                <span className='aditya-about-achievement-span aditya-about-achievement-span2 '>&</span> 
                <span className='aditya-about-achievement-span aditya-about-achievement-span3'>Recognition</span>
              </div>
          </div>
          <div className='aditya-about-achievement-right'>
              
              {/* Achievements and Recognition */}
              
              <div class="aditya-about-p-space">
                    Our business ethics were acclaimed and our work was celebrated
                    on a state level with a banner shoutout at the CM house in Bhopal.
                    We will keep moving forward until Feedbox resonates with success 
                    on a global level. Feedbox tech is a team of passionate tech 
                    professionals that are dedicated to providing unparalleled services
                    in areas of website creation and optimisation. We help you get the
                    exposure you need through our expertise in SEO, website building, 
                    internet marketing, and web design.
              </div>
              <div className='aditya-about-p-space aditya-about-p-space2'>
                What started as a marketing and branding agency has now expanded 
                its horizons and tapped into the tech market to help people build 
                websites that look good, work with ease, and provide value to their 
                users. With Feedbox tech, we look to fulfill our aim of assisting 
                businesses, end to end, in every step of their growth journey. Small
                or big, no matter what the size of your business is, save time, save 
                money, keep your systems secure and have a better than ever eye on 
                your analytics with our digital value creations for your business. 
                The feeling of knowing that we could make such an incredible difference 
                in a brand's performance, in such a short span of time, prompted us 'to set in motion what would one day be known as Feedbox tech.   
              </div>
            </div>
           </div>

         
              {/* Images and data related to it  */}
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-touch="false">
    <div class="carousel-inner">

    <div class="carousel-item carousel-item-data-container active" data-bs-interval="2000">
      <div className='carousel-item-data-cont-top '>
      <img src={a1} class="d-block w-50 h-50 carousel-item-data-cont-img" alt="1"/>
      </div>
      <div className='carousel-item-data'> Feedbox was founded by 2 engineers,Yash & Ayushi, who had a shared vision of starting a digital marketing company. The company's focus on revenue growth has helped many startups to scale their businesses and achieve their financial goals in the past 3 years.</div>
    </div>
    <div class="carousel-item carousel-item-data-container" data-bs-interval="2000">
      <div className='carousel-item-data-cont-top '>
      <img src={a2} class="d-block w-50 h-50 carousel-item-data-cont-img" alt="2"/>
      </div>
      <div className='carousel-item-data '>Feedbox was awarded the MP Young Achievers Award by the CM of Madhya Pradesh Shri Shivraj Singh Chouhan. We were among the top 10 businesses to receive a banner shoutout at the CM house in Bhopal.</div>
    </div>
    <div class="carousel-item carousel-item-data-container" data-bs-interval="2000">
      <div className='carousel-item-data-cont-top '>
      <img src={a3} class="d-block w-50 h-50 carousel-item-data-cont-img" alt="3"/>
      </div>
      <div className='carousel-item-data'>Feedbox became the first startup in Indore to receive this accolade. 3 years in this industry, our consistency and hard work were met by the prestigious certificate which is still a dream for many budding businesses.</div> 
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" ></span>
  </button>
  </div>





  
        {/*Small paragram bellow achievement]  */}
        <div className='aditya-about-story'>
            <p className='aditya-about-p-text1'>
                  Small or big, no matter what the size of your business is, save
                  time, save money, keep your systems secure and have a better than
                  ever eye on your analytics with our digital value creations for
                  your business. With transparency as our guiding light and innovations
                  as our driving force, we aim to satisfy all our customers, by offering
                  them a wide range of services to choose from.
                  Becoming the first start up in Indore to win the Super Startups 
                  award was the first push in this direction. The feeling of knowing 
                  that we could make such an incredible difference in a brand's 
                  performance, in such a short span of time, prompted us to set in
                  motion what would one day be known as Feedbox tech. 
            </p>
        </div>


              {/* about us story */}
              <div className='aditya-about-story'>
                <div className="aditya-about-story-head">Our Story</div>
                <div className='aditya-about-p-text'> 
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
                <a href='/ourstory'><button className='story-btn'  type="button">Read Full Story</button></a>
              </div>

                 </div>
                 </div>


    <Footer/>
    </>
  )
}

export default AboutUs;