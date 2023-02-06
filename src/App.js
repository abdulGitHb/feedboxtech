import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './HomeComp';
import PortfolioAll from './components/Portfolio/PortfolioAll'
import loader from '../src/image/loader.mp4'
// import Cursor from './Cursor';
// import { motion, useMotionValue } from "framer-motion"
import Rocket from '../src/image/rocket.gif'
import AboutUs from './components/AboutUsFullPage/AboutUs';
import ServicesFullPage from '../src/components/ServiceFullPage/ServicesFullPage';
import Contact from './components/Contact/ContactFullPage';
import { IoIosArrowUp } from 'react-icons/io'
import $ from 'jquery';
import { Link } from 'react-scroll'

function App() {
  // const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
  // const [showDesc, setshowDesc] = useState(true)
  const [offset, setOffset] = useState(0);
  const [isLoaded, setisLoaded] = useState(true)

  // custom rocket cursor
  // useEffect(() => {
  //   var CursorChange = (
  //     function () {
  //       /* Local Variables */
  //       const INTERVAL_POSITION = 10;
  //       const INTERVAL_ROTATION = 10;
  //       let lastCursorPos = { x: -999, y: -999 };
  //       let currentCursorPos = { x: 0, y: 0 };
  //       let lastCursorAngle = 0, cursorAngle = 0;
  //       let cursorEl, cursorImageEl;

  //       function setCurrentCursorProps() {

  //         cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;

  //         while (Math.abs(lastCursorAngle - cursorAngle) > 180) {
  //           if (cursorAngle > lastCursorAngle) {
  //             cursorAngle -= 360;
  //           } else if (cursorAngle < lastCursorAngle) {
  //             cursorAngle += 360;
  //           }
  //         }

  //         cursorImageEl.style.transform = `rotate(${cursorAngle - 90}deg)`;
  //       }

  //       function updateCursor() {
  //         window.addEventListener('mousemove', event => {
  //           currentCursorPos = { x: event.clientX, y: event.clientY };
  //           // console.log(currentCursorPos)
  //         });

  //         setInterval(setCurrentCursorProps, INTERVAL_POSITION);

  //         setInterval(() => {
  //           const delt = {
  //             x: lastCursorPos.x - currentCursorPos.x,
  //             y: lastCursorPos.y - currentCursorPos.y
  //           }
  //           if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;
  //           cursorAngle = (Math.atan2(delt.y, delt.x) * 180 / Math.PI);

  //           setCurrentCursorProps();

  //           lastCursorPos = currentCursorPos;
  //           lastCursorAngle = cursorAngle;
  //         }, INTERVAL_ROTATION);
  //       }

  //       return {
  //         'initialize': () => {
  //           cursorEl = document.querySelector('#cursor');
  //           cursorImageEl = document.querySelector('#cursor > img');
  //           updateCursor();
  //         }
  //       };

  //     })();
  //   document.addEventListener('mousemove', CursorChange.initialize);
  // }, [])

  //  when hover on scroll button
  // $(document).ready(function () {
  //   $(".scrollBottomToTop").hover(function () {
  //     if (showDesc) {
  //       $("#desc").addClass("showScrolldesc");
  //     }
  //     else {
  //       $("#desc").removeClass("showScrolldesc");
  //     }
  //     setshowDesc(!showDesc);
  //   })
  // });


  //scroll to top button
  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset)
    }
      ;
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    // window.addEventListener('scroll', CursorChange, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  useEffect(() => {
    if (offset > 800) {
      console.log(offset)
      $(document).ready(function () {
        // console.log('hello')
        $(".scrollBottomToTop").addClass("showButton")
      })
    }
    else {
      $(".scrollBottomToTop").removeClass("showButton")
    }
  }, [offset]);

  // loader
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      // console.log('page loaded');
      setTimeout(()=>{
        setisLoaded(false)
  
      },2000)
      setTimeout(()=>{
        fadeInPage();
      },2001)
     
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
    
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  const fadeInPage = () =>{
    if(!window.AnimationEvent){return;}
    $(document).ready(function () {
      // console.log('hello')
      $("fader").addClass("fade-out")
    }).then(()=>{
      alert("hello")
    })
  }
  

  return (
<>
   {isLoaded ? <div className='App loading_container'>
       {/* <img src={loader} alt="" /> */}
      
       <video src={loader} autoPlay muted ></video>
   </div> : (<div className='App'>

   {/* fading effect after loading */}
   {/* <svg id="fader"></svg> */}


      {/* for scrolling top */}
      <div id="dummy"></div>

      {/* scroll top button */}
      <div className="scrollBottomToTop">
        <Link to="dummy" spy={true} smooth={true}>
          <IoIosArrowUp size={25} />
        </Link>

      </div>

      {/* custom cursor */}
      {/* <div id="cursor"  >
        <img alt="Cursor rocket" id="pointer" src={Rocket} />
      </div> */}

      <Router>
        <Routes>
          <Route path='/' element={<HomeComp />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services' element={<ServicesFullPage />} />
          <Route path='/Portfolio' element={<PortfolioAll />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>

)}
</>
);
  
}


export default App;