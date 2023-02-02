import React from 'react'
import Footer from '../Footer/Footer'
import NavBarResp from '../Navbar2/NavBarResp'
import ServiceAppDev from './ServiceAppDev'

const ServicesFullPage = () => {
  return (
    <>
    <div style={{"backgroundColor":'black'}}>
      <NavBarResp/>
      <div className='service-container-main'>
        <ServiceAppDev/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default ServicesFullPage
