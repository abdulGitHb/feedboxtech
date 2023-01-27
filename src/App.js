import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar2/Navbar';
import Landing from './components/Landing-page/landing';
import ClientShowCase from './components/ClientShowCase/ClientShowCase';
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'


function App() {


  return (
    <div>
     <Navbar/>
     <Landing/>
     <ClientShowCase/>
     <About/>
     <Services/>
     <Portfolio/>
     <Contact />
    </div>
  );
}

export default App;