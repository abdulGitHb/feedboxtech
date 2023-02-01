import './App.css';
import { useEffect, useRef, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeComp from './HomeComp';
import PortfolioAll from './components/Portfolio/PortfolioAll'

// import Cursor from './Cursor';
import { motion, useMotionValue } from "framer-motion"
import Rocket from '../src/image/rocket1.png'
import NavBarResp from './components/Navbar2/NavBarResp';
import AboutUs from './components/AboutUsFullPage/AboutUs';
import ServicesFullPage from '../src/components/ServiceFullPage/ServicesFullPage';
import Contact from './components/Contact/ContactFullPage';

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
    <>
    {/* <NavBarResp/> */}
    <Router>
        <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/services' element={<ServicesFullPage/>}/>
          <Route path='/Portfolio' element={<PortfolioAll/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;