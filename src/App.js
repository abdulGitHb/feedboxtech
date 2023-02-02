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
import { IoIosArrowUp } from 'react-icons/io'
import $ from 'jquery';
import { Link } from 'react-scroll'

function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
  const [showDesc, setshowDesc] = useState(true)
  const [offset, setOffset] = useState(0);
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

//  when hover on scroll button
$(document).ready(function () {
  $(".scrollBottomToTop").hover(function () {
   if(showDesc){
     $("#desc").addClass("showScrolldesc");
   }
   else{
     $("#desc").removeClass("showScrolldesc");
   }
    setshowDesc(!showDesc);
  })
  });

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(()=>{
    if(offset>800){
      console.log(offset)
      $(document).ready(function () {
        // console.log('hello')
      $(".scrollBottomToTop").addClass("showButton")
      })
    }
    else{
      $(".scrollBottomToTop").removeClass("showButton")
    }
  },[offset]);

  return (
    <div className='App'>
      {/* for scrolling top */}
      <div id="dummy"></div>

      {/* scroll top button */}
      <div className="scrollBottomToTop">
           <Link to="dummy" spy={true} smooth={true}>
                <IoIosArrowUp size={25}/>
            </Link>
      
            </div>
            <div id='desc' className="scrollToTopHover">
              Scroll to Top
            </div>
    <Router>
        <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/services' element={<ServicesFullPage/>}/>
          <Route path='/Portfolio' element={<PortfolioAll/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;