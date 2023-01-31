import React, { useState } from 'react'
import data from '../../JsonData/aboutUsData';
import AboutUsCompo from '../AboutUsCompo';
import './AboutUs.css';

function AboutUs() {

  const [dataSection, setDataSection] = useState([]);
  let sectArr = [];

  data.sections.map(sect=>{
    sectArr=[...sectArr, sect];
   });

   console.log(sectArr)


  return (
    <>
    <div className='heading-container'>
      <h1 className='heading-about'>About Us</h1>
      <div className='below-heading-line'></div>
    
      <div className='about-us-container'>
        {
          sectArr.map(details=>{
            return <div key={details.title}>
              <h4 key={details.title} className='title-heading'>{details.title}</h4>
              <AboutUsCompo detail={details}/>
            </div>

          })
        }
      </div> 
    </div>
    </>
  )
}

export default AboutUs;