import React, { useState } from 'react'
import data from '../../JsonData/aboutUsData';
import AboutUsCompo from '../AboutUsCompo';
import './AboutUs.css';
import img from '../../image/aboutbanner.jpg'
import NavBarResp from '../NewNavResp/NavBarResp';

function AboutUs() {

  const [dataSection, setDataSection] = useState([]);
  let sectArr = [];

  data.sections.map(sect=>{
    sectArr=[...sectArr, sect];
   });

   console.log(sectArr)


  return (
    <>
    <NavBarResp/>
    <div className='heading-container'>
      <div className='about-banner'>
        {/* <img className='banner-img' src={img} alt=""/> */}
        <h1 className='about-us-heading'>About Us</h1>
      </div>
{/* ------------------------------------------------------------------ */}
      <div className='content-container'>
        <div className='text-div'>
          <p className='text-para'>
          Feedbox tech is a team of passionate tech professionals that are dedicated to providing unparalleled services in areas of website creation and optimisation. We help you get the exposure you need through our expertise in SEO, website building, internet marketing, and web design. We aim to make you the front runners in your domain while helping you reap the benefits of the internet to its fullest with our cut throat technological innovations. We leverage our expertise in creating websites using Wordpress, React, and other trending technologies. 
          </p>
        </div>
        <div className='img-div'>
          <img src={img} alt="" />
        </div>
      </div>
{/* --------------------------------------------------------------- */}
      <div className='content-container'>
        <div className='img-div'>
          <img src={img} alt="" />
        </div>
        <div className='text-div'>
          <p className='text-para'>
          Feedbox tech is a team of passionate tech professionals that are dedicated to providing unparalleled services in areas of website creation and optimisation. We help you get the exposure you need through our expertise in SEO, website building, internet marketing, and web design. We aim to make you the front runners in your domain while helping you reap the benefits of the internet to its fullest with our cut throat technological innovations. We leverage our expertise in creating websites using Wordpress, React, and other trending technologies. 
          </p>
        </div>
      </div>
{/* --------------------------------------------------------------- */}

    </div>
    </>
  )
}

export default AboutUs;