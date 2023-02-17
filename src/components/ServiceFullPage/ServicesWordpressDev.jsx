import React from 'react'
import './ServiceAppDev.css'
import ServicesContactComp from './ServicesContactComp';
import img1 from '../../image/mobileImg1.svg';
import img2 from '../../image/webImg1.svg';
import img3 from '../../image/service2.jpg';
import wpDev1 from '../../image/wordPressDev1.png';
import wpDev2 from '../../image/wordPressDev2.png';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

// import './ServicesFullPage.css'
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion';


function ServicesWordpressDev() {

  const location = useLocation();
  // let lrSwipe="Swipeleft";
  const lrSwipe= location.state==null?"Swipeleft":location.state.swipe;
  
  console.log(lrSwipe);

  return (
    <>
    <div className='outer-div-main-cont'>
     
     
      <div className="about-top-main">
          <div className="heading-about-us">
            <h1>Services</h1>
          </div>

          <div className="img-div">

            <div className="linked-images id-scale-up img-dev-wp">
              <Link to='/services/webdev' state={{swipe:"Swipeleft"}}>
                <img src={img2} alt=""  className='img-wpdev-new'/>
              </Link>
            </div>

            <div className="linked-images img-dev-selected">
              <Link to='/services/wordpressdev'>
                <img src={wpDev2} alt="" className="img-wp-resp" />
              </Link>
            </div>

            <div className="linked-images id-scale-up img-dev-wp">
              <Link to='/services/appdev'>
                <img src={img1} alt="" className="img-web-dev" />
              </Link>
            </div>
          </div>
      </div>
      <div className="lower-nav">
      
        <div className='sub-service mobile-hidden'><Link className='link-not' to='/services/webdev' state={{swipe:"Swipeleft"}}><h4>Web</h4><h4> Development</h4></Link></div>
        <div className='sub-service div-selected'><Link className='link-select' to='/services/wordpressdev' state={{swipe:"Swipeleft"}}><h4>Wordpress</h4><h4> Development</h4></Link></div> 
        <div className='sub-service mobile-hidden'><Link className='link-not' to='/services/appdev' state={{swipe:"Swiperight"}}><h4>App</h4><h4> Development</h4></Link></div>
      </div>

      {/* <div className='service-container-main'>
        <ServiceAppDev/>
      </div> */}
      <div className='horizontalLine'>
        <Link className='link-not btn-web' to='/services/webdev' state={{swipe:"Swipeleft"}}>
          <div className="arrow-btn">
            <BsArrowLeft size={28}/>
          </div>
        </Link>
          <div className="line-inner">
            <hr />
          </div>

        <Link className='link-not btn-web' to='/services/appdev' state={{swipe:"Swiperight"}}>
        <div className="arrow-btn">
        <BsArrowRight size={28}/>
        </div>
        </Link>
      </div>
      
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
                In addition to customizing and maintaining existing WordPress websites, our team of WordPress developers also build custom plugins and themes to extend the functionality of the platform. This can involve writing code using PHP, HTML, CSS, and JavaScript, as well as integrating APIs and third-party services to provide additional functionality.
                <br />
                Our team of developers have a solid foundation in web development and a deep understanding of the WordPress platform. 
                </p>
            </div>
            <div className="image-div-web">
                <img src={wpDev1} alt="" className="app-dev-img" />
            </div>
        </div>
{/* ----------------3rd--------------------------------------------------------------- */}
        {/* <div className="page-content">
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
        </div> */}

  
        
    </div>
      <Footer/>
    </div>
    </>
  )
}

export default ServicesWordpressDev;