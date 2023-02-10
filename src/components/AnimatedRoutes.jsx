import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomeComp from '../HomeComp';


import NewAbout from './AboutUsFullPage/newAbout';
// import Contact from './Contact/Contact';
import Contact from './Contact/ContactFullPage';

import PortfolioAll from './Portfolio/PortfolioAll';
import ServiceAppDev from './ServiceFullPage/ServiceAppDev';
import ServicesWebDev from './ServiceFullPage/ServicesWebDev';
import ServicesWordpressDev from './ServiceFullPage/ServicesWordpressDev';
import {AnimatePresence} from 'framer-motion';
import OurStory from '../../src/components/OurStory/OurStory2';

function AnimatedRoutes() {

    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes>
          <Route path='/' element={<HomeComp />} />
          {/* <Route path='/about' element={<AboutUs />} /> */}
          <Route path='/about' element={<NewAbout />} />
          <Route path='/services/appdev' element={<ServiceAppDev />} />
          <Route path='/services/webdev' element={<ServicesWebDev />} />
          <Route path='/services/wordpressdev' element={<ServicesWordpressDev />} />
          <Route path='/Portfolio' element={<PortfolioAll />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ourstory' element={<OurStory />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;