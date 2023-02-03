import React from 'react'
import Footer from '../Footer/Footer'
import NavBarResp from '../Navbar2/NavBarResp'
import ServiceAppDev from './ServiceAppDev'
import img1 from '../../image/service1.jpg';
import img2 from '../../image/service2.jpg';
import img3 from '../../image/service3.png';
import arrowDown from '../../image/pngwing.com.png';
import './ServicesFullPage.css'
import {GoTriangleDown} from 'react-icons/go'

const ServicesFullPage = () => {
  return (
    <>
    <div style={{"backgroundColor":'black'}}>
      <NavBarResp/>
      <div className="about-top-main">
        <div className="img-div"
        style={{'backgroundImage':img3}}>
          <h1>About Us</h1>
          <img src={img1} alt="" className="img1" />
          <img src={img2} alt="" className="img1" />
          <img src={img1} alt="" className="img1" />
        </div>
      </div>
      <div className="lower-nav">
        <div className='sub-service'><img src='' alt="" /><h4>App Development</h4></div>
        <div className='sub-service'><h4>Web Development</h4></div>
        <div className='sub-service'><h4>Wordpress Development</h4></div>
      </div>

      {/* <div className='service-container-main'>
        <ServiceAppDev/>
      </div> */}
      <Footer/>
    </div>
    </>
  )
}

export default ServicesFullPage
