import React from 'react'
import About from './About/About';
import Contact from './Contact/Contact';
import Landing from './Landing-page/landing';
import Services from './Services/Services';
import ClientShowCase from '../components/ClientShowCase/ClientShowCase';
import Portfolio from './Portfolio/Portfolio'
import Footer from './Footer/Footer'
import Navbar from './Navbar2/Navbar';


function HomeComp() {
  return (
    <>
        <Navbar/>
        <Landing/>
        <ClientShowCase/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact />
        <Footer/>
    </>
  )
}

export default HomeComp;