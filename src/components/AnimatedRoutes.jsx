import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomeComp from '../HomeComp';


// import NewAbout from './AboutUsFullPage/newAbout';
import AboutUsPage1 from './AboutUsFullPage/aboutUsPage1';
import Contact from './Contact/Contact';
import ContactFullPage from './Contact/ContactFullPage';


import PortfolioAll from './Portfolio/PortfolioAll';
import ServiceAppDev from './ServiceFullPage/ServiceAppDev';
import ServicesWebDev from './ServiceFullPage/ServicesWebDev';
import ServicesWordpressDev from './ServiceFullPage/ServicesWordpressDev';
import {AnimatePresence} from 'framer-motion';
import OurStory from '../../src/components/OurStory/OurStory2';
import NewNav from './Navbar2/NewNav';

function AnimatedRoutes() {

    const location = useLocation();
  return (
    <AnimatePresence>
      <NewNav/>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomeComp />} />
          {/* <Route path='/about' element={<NewAbout />} /> */}
          <Route path='/about' element={<AboutUsPage1/>} />
          <Route path='/services/appdev' element={<ServiceAppDev />} />
          <Route path='/services/webdev' element={<ServicesWebDev />} />
          <Route path='/services/wordpressdev' element={<ServicesWordpressDev />} />
          <Route path='/Portfolio' element={<PortfolioAll />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ourstory' element={<OurStory />} />
          <Route path='/contactus' element={<ContactFullPage/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;