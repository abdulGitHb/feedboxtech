import React from 'react'
import Footer from '../Footer/Footer'
import NavBarResp from '../Navbar2/NavBarResp'
import ServiceAppDev from './ServiceAppDev'

const ServicesFullPage = () => {
  return (
    <>
    <NavBarResp/>
      <div className='service-container-main'>
        <ServiceAppDev/>
      </div>
    <Footer/>
    </>
  )
}

export default ServicesFullPage
