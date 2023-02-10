import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomeComp from '../HomeComp';
import AboutUs from './AboutUsFullPage/AboutUs';
import Contact from './Contact/Contact';
import PortfolioAll from './Portfolio/PortfolioAll';
import ServiceAppDev from './ServiceFullPage/ServiceAppDev';
import ServicesWebDev from './ServiceFullPage/ServicesWebDev';
import ServicesWordpressDev from './ServiceFullPage/ServicesWordpressDev';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes>
          <Route path='/' element={<HomeComp />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services/appdev' element={<ServiceAppDev />} />
          <Route path='/services/webdev' element={<ServicesWebDev />} />
          <Route path='/services/wordpressdev' element={<ServicesWordpressDev />} />
          <Route path='/Portfolio' element={<PortfolioAll />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;