import './App.css';
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar2/Navbar';
<<<<<<< HEAD
import AboutUs from './components/AboutUsFullPage/AboutUs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeComp from './components/HomeComp';
=======
import Landing from './components/Landing-page/landing';
import ClientShowCase from './components/ClientShowCase/ClientShowCase';
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PortfolioAll from '../src/components/Portfolio/PortfolioAll'
>>>>>>> origin

// import Cursor from './Cursor';
import { motion, useMotionValue } from "framer-motion"
import Rocket from '../src/image/rocket1.png'

function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16
      const y = e.clientY - 16
      setCursorXY({ x, y })
     }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])


  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/aboutUsFull' element={<AboutUs/>}/>
        </Routes>
      </div>
    </Router>
=======
    <div className='App'>
 
     {/* <motion.div className="cursor" 
     style={{
      transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
    }}
    >
      <img href={Rocket} style={{position:'relative',zIndex:'10000000'}}/>
    </motion.div> */}
     <Navbar/>
     <Landing/>
     <ClientShowCase/>
     <About/>
     <Services/>
     <Portfolio/>
     <Contact />
     <Footer/>
  
    </div>
>>>>>>> origin
  );
}

export default App;