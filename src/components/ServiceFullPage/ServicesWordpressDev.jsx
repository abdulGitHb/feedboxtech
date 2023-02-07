import React from 'react'
import './ServiceAppDev.css'
import ServicesContactComp from './ServicesContactComp';
import img1 from '../../image/mobileImg1.svg';
import img2 from '../../image/webImg1.svg';
import img3 from '../../image/service2.jpg';
import wpDev1 from '../../image/wordPressDev1.png';
import wpDev2 from '../../image/wordPressDev2.png';

// import './ServicesFullPage.css'
import { Link } from 'react-router-dom';
import NavBarResp from '../Navbar2/NavBarResp';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion';

function ServicesWordpressDev(props) {

  const leftSwipe = {swipe:"Swipeleft"};
  const rightSwipe = {swipe:"SwipeRight"};

  return (
    <>
    <NavBarResp/>
    <motion.div style={{"backgroundColor":'black'}}
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
            <img src={img2} alt="" className="img-non-selected" />
            <img src={wpDev2} alt="" className="img-selected" />
            <img src={img1} alt="" className="img-non-selected" />
          </div>
      </div>
      <div className="lower-nav">
      
        <div className='sub-service'><Link className='link' to='/services/webdev' state={leftSwipe}><h4>Web</h4><h4> Development</h4></Link></div>
        <div className='sub-service div-selected'><Link className='link-select' to='/services/wordpressdev' ><h4>Wordpress</h4><h4> Development</h4></Link></div> 
        <div className='sub-service '><Link className='link' to='/services/appdev' state={rightSwipe}><h4>App</h4><h4> Development</h4></Link></div>
      </div>

      {/* <div className='service-container-main'>
        <ServiceAppDev/>
      </div> */}
      
    <div className='main-container'>
{/* --------------1st--------------------------------------------------------------------------------- */}
        <div className="page-content">
            <div className="image-div">
                <img src={wpDev2} alt="" className="app-dev-img" />
            </div>
            <div className="text-div">
                <p className="app-dev-text">
                   <span>W</span>ordPress development is a critical component of the web development landscape, and offers a flexible, scalable, and user-friendly solution for businesses and individuals looking to build and maintain websites. Whether you are a small business owner, a freelancer, or a large corporation, investing in WordPress development can help you reach new audiences and grow your online presence. Grow your business and meet all its needs like never before with the assistance from our team.
                </p>
            </div>
        </div>
{/*--- ------------2nd---------------------------------------------------------------- */}
        <div className="page-content">
            <div className="image-div-mobile">
                <img src={wpDev1} alt="" className="app-dev-img" />
            </div>
            <div className="text-div">
                <p className="app-dev-text">
                The WordPress development process typically begins with the selection of a theme, which serves as the foundation for the design and layout of the website. From there, our WordPress developer customizes the theme to meet the specific needs of the client, including adding custom functionality and integrating third-party plugins and services.
                </p>
            </div>
            <div className="image-div-web">
                <img src={wpDev1} alt="" className="app-dev-img" />
            </div>
        </div>
{/* ----------------3rd--------------------------------------------------------------- */}
        <div className="page-content">
            <div className="image-div-mobile">
                  <img src={wpDev2} alt="" className="app-dev-img" />
            </div>
            <div className="text-div-full">
                <p className="app-dev-text">
                In addition to customizing and maintaining existing WordPress websites, our team of WordPress developers also build custom plugins and themes to extend the functionality of the platform. This can involve writing code using PHP, HTML, CSS, and JavaScript, as well as integrating APIs and third-party services to provide additional functionality.
                <br />
                Our team of developers have a solid foundation in web development and a deep understanding of the WordPress platform. 
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

export default ServicesWordpressDev;