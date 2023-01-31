import './App.css';
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar2/Navbar';
import AboutUs from './components/AboutUsFullPage/AboutUs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeComp from './components/HomeComp';

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
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/aboutUsFull' element={<AboutUs/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;