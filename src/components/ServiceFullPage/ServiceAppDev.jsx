import React from 'react'
import './ServiceAppDev.css'
import ServicesContactComp from './ServicesContactComp';
import img1 from '../../image/mobileImg1png.png';
import imgMainApp2 from '../../image/mobileImg2.svg';
import img2 from '../../image/webImg1.svg';
import img3 from '../../image/service2.jpg';
import wpDev2 from '../../image/wordPressDev2.png';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'


// import './ServicesFullPage.css'
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion';


function ServiceAppDev() {
  const location = useLocation();
  const lrSwipe= location.state==null?"Swipeleft":location.state.swipe;
  console.log(lrSwipe);

  return (
    <>
    <div className='main-container-outer' style={{"backgroundColor":'black'}}
    
    >
     
      <div className="about-top-main">
          <div className="heading-about-us">
            <h1>Services</h1>
          </div>

          <div className="img-div">
          
          {/* <a href='/services/wordpressdev' state={{swipe:"Swipeleft"}}>
          
          </a> */}
            <img src={wpDev2} alt="" className="img-top-1 side-img" />
            <img src={img1} alt="" className="img-app-selected" />
            <img src={img2} alt="" className="img-top-3 side-img" />
          </div>
      </div>

      <div className="lower-nav">
        {/* <div className='sub-service'><Link className='link-not' to='/services/wordpressdev' state={{swipe:"Swipeleft"}}>WordPress Development</Link></div>  */}
        <div className='sub-service div-selected'><Link className='link-select' to='/services/appdev' state={{swipe:"Swipeleft"}}><h4>App</h4><h4> Development</h4></Link></div>
        {/* <div className='sub-service'><Link className='link-not' to='/services/webdev' state={{swipe:"Swiperight"}}><h4>Web</h4><h4> Development</h4></Link></div> */}
      </div>

      {/* <div className='service-container-main'>
        <ServiceAppDev/>
      </div> */}
      <div className='horizontalLine'>
        <Link className='link-not' to='/services/wordpressdev' state={{swipe:"Swipeleft"}}>
          <div className="arrow-btn">
            <BsArrowLeft size={28}/>
          </div>
        </Link>
          <div className="line-inner">
            <hr />
          </div>

        <Link className='link-not' to='/services/webdev' state={{swipe:"Swiperight"}}>
        <div className="arrow-btn">
        <BsArrowRight size={28}/>
        </div>
        </Link>
      </div>
      
    <div className='main-container'>
{/* -----------------------------1st---------------------------------------------------------------- */}
        <div className="page-content">
            <div className="image-div">
                <img src={img1} alt="" className="app-dev-img" />
            </div>
            <div className="text-div">
                <p className="app-dev-text">
                   <span>A</span>pp development is a critical component of the mobile technology landscape, and has the potential to create new opportunities and improve lives in countless ways. Whether you are a small startup or a large corporation, investing in app development can help you reach new audiences and grow your business in today's digital world. Get in touch with us and open the doors to new opportunities for your businesses’ growth today!
                    <br />
                </p>
            </div>
        </div>
{/*--- -------------------2nd--------------------------------------------------------- */}
        <div className="page-content">
            <div className="image-div-mobile">
                <img src={imgMainApp2} alt="" className="app-dev-img" />
            </div>
            <div className="text-div">
                <p className="app-dev-text">
                Our team possesses technical skills and creativity required to meet the needs of this ever evolving domain as well as a strong focus on quality and attention to detail necessary in delivering high-quality apps that meet the needs of users.
                    <br />
                </p>
            </div>
            <div className="image-div-web">
                <img src={imgMainApp2} alt="" className="app-dev-img" />
            </div>
        </div>
{/* -------------------3rd------------------------------------------------------------ */}
        {/* <div className="page-content">
        <div className="image-div-mobile">
                <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg" alt="" className="app-dev-img" />
          </div>
          <div className="text-div-full">
                <p className="app-dev-text">
                    <br />
                </p>
          </div>
        </div> */}

        {/* <div className='cardComp'
        style={{"marginTop":'80px',
        "marginBottom":'20px'}}>
            <ServicesContactComp/>
        </div> */}
        
    </div>
    </div>
      <Footer/>
    </>
  )
}

export default ServiceAppDev;

{/*                 <br />
                    The next step in the process is to build the app. This typically involves writing code using programming languages such as Swift or Java, and using software development tools and frameworks to facilitate the creation of the app. The development process can also involve integrating third-party services and APIs to provide additional functionality and data.
                    <br /><br />
                    Once the app is built, it must be tested to ensure that it works as intended. This includes testing for compatibility with different devices and operating systems, as well as checking for bugs and performance issues. If any issues are found, they are addressed during this phase.
                    <br /><br />
                    Finally, the app is published to app stores or other platforms for distribution. This may involve submitting the app for review and approval, and providing marketing and support services to promote the app and respond to user feedback.
                    <br /><br />
                    Our team possesses technical skills and creativity required to meet the needs of this ever evolving domain as well as a strong focus on quality and attention to detail necessary in delivering high-quality apps that meet the needs of users.
                    <br /><br />
                    In conclusion, app development is a critical component of the mobile technology landscape, and has the potential to create new opportunities and improve lives in countless ways. Whether you are a small startup or a large corporation, investing in app development can help you reach new audiences and grow your business in today's digital world. Get in touch with us and open the doors to new opportunities for your businesses’ growth today!
                    <br /> */}