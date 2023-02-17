import React from 'react'
import './ServiceAppDev.css'
import ServicesContactComp from './ServicesContactComp';
import img1 from '../../image/mobileImg1.svg';
import img2 from '../../image/webImg1.svg';
import img3 from '../../image/service2.jpg';
import webDev2 from '../../image/webDev2.png';
import wpDev2 from '../../image/wordPressDev2.png';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion';
import Whatsapp from '../Whatsapp/Whatsapp';

function ServicesWebDev() {
  
  const location = useLocation();
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
              <Link to='/services/appdev' state={{swipe:"Swipeleft"}}>
                <img src={img1} alt=""  className='img-wpdev-new'/>
              </Link>
            </div>

            <div className="linked-images img-dev-selected">
              <Link to='/services/webdev'>
                <img src={img2} alt="" className="img-web-selected" />
              </Link>
            </div>

            <div className="linked-images id-scale-up img-dev-wp">
              <Link to='/services/wordpressdev'>
                <img src={wpDev2} alt="" className="img-web-dev" />
              </Link>
            </div>
          </div>
      </div>
      <div className="lower-nav">
      
        <div className='sub-service mobile-hidden'><Link className='link-not' to='/services/appdev' state={{swipe:"Swipeleft"}}><h4>App</h4><h4> Development</h4></Link></div>
        <div className='sub-service div-selected'><Link className='link-select' to='/services/webdev' state={{swipe:"Swipeleft"}}><h4>Web</h4><h4> Development</h4></Link></div>
        <div className='sub-service mobile-hidden'><Link className='link-not' to='/services/wordpressdev' state={{swipe:"Swiperight"}}><h4>Wordpress</h4><h4> Development</h4></Link></div> 
      </div>

      {/* <div className='service-container-main'>
        <ServiceAppDev/>
      </div> */}
      <div className='horizontalLine'>
        <Link className='link-not btn-web' to='/services/appdev' state={{swipe:"Swipeleft"}}>
          <div className="arrow-btn">
            <BsArrowLeft size={28}/>
          </div>
        </Link>
          <div className="line-inner">
            <hr />
          </div>

        <Link className='link-not btn-web' to='/services/wordpressdev' state={{swipe:"Swiperight"}}>
        <div className="arrow-btn">
        <BsArrowRight size={28}/>
        </div>
        </Link>
      </div>
      
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
                Apart from having a solid foundation in coding and technical skills, our team of web developers also possess an understanding of user-centered design and the principles of web accessibility. Additionally, staying up-to-date with the latest trends and technologies is our penchant.
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
        {/* <div className="page-content">
          <div className="image-div-mobile">
                <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg" alt="" className="app-dev-img" />
          </div>
          <div className="text-div-full">
                  <p className="app-dev-text">
                  Apart from having a solid foundation in coding and technical skills, our team of web developers also possess an understanding of user-centered design and the principles of web accessibility. Additionally, staying up-to-date with the latest trends and technologies is our penchant.
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
    <Whatsapp />
        <Footer/>
    </div>
    
    </>
  )
}

export default ServicesWebDev
