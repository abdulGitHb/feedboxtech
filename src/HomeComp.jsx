import React from 'react'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing-page/landing';
import Services from './components/Services/Services';
import ClientShowCase from './components/ClientShowCase/ClientShowCase';
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar2/Navbar';


function HomeComp() {
  return (
    <div className='App'>
        <Navbar/>
        <Landing/>
        <ClientShowCase/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact />
        <Footer/>
    </div>
  )
}

export default HomeComp;