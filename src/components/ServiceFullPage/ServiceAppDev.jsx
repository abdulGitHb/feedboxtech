import React from 'react'
import './ServiceAppDev.css'
import ServicesContactComp from './ServicesContactComp';
import img1 from '../../image/service1.jpg';
import img2 from '../../image/service2.jpg';
// import './ServicesFullPage.css'
import { Link } from 'react-router-dom';
import NavBarResp from '../Navbar2/NavBarResp';
import Footer from '../Footer/Footer';


function ServiceAppDev() {
  return (
    <>
    <NavBarResp/>
    <div style={{"backgroundColor":'black'}}>
     
      <div className="about-top-main">
          <div className="heading-about-us">
            <h1>Services</h1>
          </div>

          <div className="img-div">
            <img src={img1} alt="" className="img-non-selected" />
            <img src={img1} alt="" className="img-selected" />
            <img src={img2} alt="" className="img-non-selected" />
          </div>
      </div>
      <div className="lower-nav">
      
        <div className='sub-service'><Link className='link' to='/services/wordpressdev' ><h4>Wordpress Development</h4></Link></div> 
        <div className='sub-service div-selected'><Link className='link-select' to='/services/appdev' ><h4>App Development</h4></Link></div>
        <div className='sub-service'><Link className='link' to='/services/webdev' ><h4>Web Development</h4></Link></div>
      </div>

      {/* <div className='service-container-main'>
        <ServiceAppDev/>
      </div> */}
      
    <div className='main-container'>
{/* ----------------------------------------------------------------------------------------------- */}
        <div className="page-content">
            <div className="image-div">
                <img src="https://www.claritusconsulting.com/wp-content/uploads/2022/04/mobile-app-development.png" alt="" className="app-dev-img" />
            </div>
            <div className="text-div">
                <p className="app-dev-text">
                   <span>A</span>pp development is a critical component of the mobile technology landscape, and has the potential to create new opportunities and improve lives in countless ways. Whether you are a small startup or a large corporation, investing in app development can help you reach new audiences and grow your business in today's digital world. Get in touch with us and open the doors to new opportunities for your businesses’ growth today!
                    <br />
                </p>
            </div>
        </div>
{/*--- ---------------------------------------------------------------------------- */}
        <div className="page-content">
            <div className="text-div">
                <p className="app-dev-text">
                The app development process typically begins with the identification of a problem or need that can be addressed by a software application by our team. From there, the app developer works with stakeholders to define the features and functionalities of the app, and creates a design that addresses the user's needs and goals.
                    <br />
                </p>
            </div>
            <div className="image-div">
                <img src="https://www.claritusconsulting.com/wp-content/uploads/2022/04/mobile-app-development.png" alt="" className="app-dev-img" />
            </div>
        </div>
{/* ------------------------------------------------------------------------------- */}
        <div className="page-content">
                <p className="app-dev-text">
                Our team possesses technical skills and creativity required to meet the needs of this ever evolving domain as well as a strong focus on quality and attention to detail necessary in delivering high-quality apps that meet the needs of users.
                    <br />
                </p>
        </div>

        <div 
        style={{"marginTop":'20px',
        "marginBottom":'20px'}}>
            <ServicesContactComp/>
        </div>
        
    </div>
      <Footer/>
    </div>
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