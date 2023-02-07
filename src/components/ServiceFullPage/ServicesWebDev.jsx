import React from 'react'
import './ServiceAppDev.css'
import ServicesContactComp from './ServicesContactComp';
import img1 from '../../image/mobileImg1.svg';
import img2 from '../../image/webImg1.svg';
import img3 from '../../image/service2.jpg';
import webDev2 from '../../image/webDev2.png';
import wpDev2 from '../../image/wordPressDev2.png';

import { Link } from 'react-router-dom';
import NavBarResp from '../Navbar2/NavBarResp';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion';

function ServicesWebDev(props) {

  const leftSwipe = {swipe:"Swipeleft"};
  const rightSwipe = {swipe:"SwipeRight"};

  return (
    <>
    <NavBarResp/>
    <motion.div style={{"backgroundColor":'black'}} className='top-main-container'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={props.swipe==="Swipeleft"?{x:window.innerWidth}:
          {y:window.innerWidth}}
    >
     
      <div className="about-top-main">
          <div className="heading-about-us">
            <h1>Services</h1>
          </div>

          <div className="img-div">
            <img src={img1} alt="" className="img-non-selected" />
            <img src={img2} alt="" className="img-selected" />
            <img src={wpDev2} alt="" className="img-non-selected" />
          </div>
      </div>
      <div className="lower-nav">
      
        <div className='sub-service '><Link className='link' to='/services/appdev' state={leftSwipe}><h4>App</h4><h4> Development</h4></Link></div>
        <div className='sub-service div-selected'><Link className='link-select' to='/services/webdev' ><h4>Web</h4><h4> Development</h4></Link></div>
        <div className='sub-service'><Link className='link' to='/services/wordpressdev' state={rightSwipe}><h4>Wordpress</h4><h4> Development</h4></Link></div> 
      </div>

      {/* <div className='service-container-main'>
        <ServiceAppDev/>
      </div> */}
      
    <div className='main-container'>
{/* ----------------------------------1st------------------------------------------------------------- */}
        <div className="page-content">
            <div className="image-div">
                <img src={img2} alt="" className="app-dev-img" />
            </div>
            <div className="text-div">
                <p className="app-dev-text">
                   <span>W</span>eb development plays a critical role in shaping the online experience and connecting people with information and services. Whether you are a small business owner, a freelancer, or a large corporation, having a strong online presence is essential for success in today's digital world.Come join hands with us to see your business transform and innovate through tech.
                    <br />
                    {/* The app development process typically begins with the identification of a problem or need that can be addressed by a software application by our team. From there, the app developer works with stakeholders to define the features and functionalities of the app, and creates a design that addresses the user's needs and goals.
                    <br /> */}
                </p>
            </div>
        </div>
{/*--- ------------------------------2nd---------------------------------------------- */}
        <div className="page-content">
          <div className="image-div-mobile">
              <img src={webDev2} alt="" className="app-dev-img" />
          </div>
            <div className="text-div">
                <p className="app-dev-text">
                The process of web development typically involves several stages, including planning, design, development, testing and deployment. During the planning stage, our team works with the client to determine their goals and requirements for the website. This may include creating user personas, identifying target audiences, and creating a content strategy.
                    <br />
                    {/* The app development process typically begins with the identification of a problem or need that can be addressed by a software application by our team. From there, the app developer works with stakeholders to define the features and functionalities of the app, and creates a design that addresses the user's needs and goals.
                    <br /> */}
                </p>
            </div>
            <div className="image-div-web">
                <img src={webDev2} alt="" className="app-dev-img" />
            </div>
        </div>
{/* ----------------------------------------3rd--------------------------------------- */}
        <div className="page-content">
          <div className="image-div-mobile">
                <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg" alt="" className="app-dev-img" />
          </div>
          <div className="text-div-full">
                  <p className="app-dev-text">
                  Apart from having a solid foundation in coding and technical skills, our team of web developers also possess an understanding of user-centered design and the principles of web accessibility. Additionally, staying up-to-date with the latest trends and technologies is our penchant.
                      <br />
                      {/* The app development process typically begins with the identification of a problem or need that can be addressed by a software application by our team. From there, the app developer works with stakeholders to define the features and functionalities of the app, and creates a design that addresses the user's needs and goals.
                      <br /> */}
                  </p>
          </div>
        </div>

        <div className='cardComp'
        style={{"marginTop":'80px',
        "marginBottom":'20px'}}>
            <ServicesContactComp/>
        </div>
        
    </div>
        <Footer/>
    </motion.div>
    
    </>
  )
}

export default ServicesWebDev
