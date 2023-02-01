import React, { useState } from 'react'
import data from '../../JsonData/aboutUsData';

import './AboutUs.css';
import img from '../../image/aboutbanner.jpg'
import NavBarResp from '../Navbar2/NavBarResp';
import Footer from '../Footer/Footer';

function AboutUs() {

  const [dataSection, setDataSection] = useState([]);
  let sectArr = [];

  data.sections.map(sect=>{
    sectArr=[...sectArr, sect];
   });

   console.log(sectArr)


  return (
    <>
    {/* <NavBarResp/> */}
    <div className='heading-container'>
      <div className='about-banner'>
        {/* <img className='banner-img' src={img} alt=""/> */}
        <h1 className='about-us-heading'>About Us</h1>
      </div>

      <div className='content-container-main'>
  {/* ------------------------------------------------------------------ */}
        <div className='content-container'>
          <div className='text-div'>
            <p className='text-para'>
            Feedbox tech is a team of passionate tech professionals that are dedicated to providing unparalleled services in areas of website creation and optimisation. We help you get the exposure you need through our expertise in SEO, website building, internet marketing, and web design. We aim to make you the front runners in your domain while helping you reap the benefits of the internet to its fullest with our cut throat technological innovations. We leverage our expertise in creating websites using Wordpress, React, and other trending technologies. 
            </p>
          </div>
          <div className='img-div'>
            <img className='detail-img' src={img} alt="" />
          </div>
        </div>
  {/* --------------------------------------------------------------- */}
        <div className='content-container'>
          <div className='img-div'>
            <img className='detail-img' src={img} alt="" />
          </div>
          <div className='text-div'>
            <p className='text-para'>
            Feedbox tech is a team of passionate tech professionals that are dedicated to providing unparalleled services in areas of website creation and optimisation. We help you get the exposure you need through our expertise in SEO, website building, internet marketing, and web design. We aim to make you the front runners in your domain while helping you reap the benefits of the internet to its fullest with our cut throat technological innovations. We leverage our expertise in creating websites using Wordpress, React, and other trending technologies. 
            </p>
          </div>
        </div>
  {/* --------------------------------------------------------------- */}
        <div className='content-container'>
          <div className='text-div'>
            <p className='text-para'>
            Becoming the first start up in Indore to win the Super Startups award was the first push in this direction. The feeling of knowing that we could make such an incredible difference in a brand's performance, in such a short span of time, prompted us to set in motion what would one day be known as Feedbox tech. The drive from square 1 to the top wasn't a breeze. The ever changing landscape of digital marketing, and flip flops in content consumption pattern were made even worse by the wracking issues at hand such as the pandemic. We lost personnel, we lost resources, but what we didn't lose is consistency and faith in ourselves. We held on to our dream and kept moving forward. Our dedication was met by blue tick decks, clients' respect, a motivated team, and a Young Achievers Award presented to us by the CM of MP, Mr. Shivraj Singh Chauhan himself. Our business ethics were acclaimed and our work was celebrated on a state level with a banner shoutout at the CM house in Bhopal. But we didn't stop here and we won't. We will keep moving forward until Feedbox resonates with success on a global level.             </p>
          </div>
          <div className='img-div'>
            <img className='detail-img' src={img} alt="" />
          </div>
        </div>
  {/* --------------------------------------------------------------- */}
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default AboutUs;