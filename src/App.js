import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import loader from '../src/image/loader.mp4'
import { IoIosArrowUp } from 'react-icons/io'
import $ from 'jquery';
import { Link } from 'react-scroll'
import ScrollToTop from './ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  const [offset, setOffset] = useState(0);
  const [isLoaded, setisLoaded] = useState(true)


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
      // console.log(offset)
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
  
      },)
      setTimeout(()=>{
        // fadeInPage();
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

  // const fadeInPage = () =>{
  //   if(!window.AnimationEvent){return;}
  //   $(document).ready(function () {
  //     // console.log('hello')
  //     $("fader").addClass("fade-out")
  //   }).then(()=>{
  //     // alert("hello")
  //   })
  // }
  

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

      <Router basename='/'>
        <ScrollToTop />
        <AnimatedRoutes/>
      </Router>
    </div>

)}
</>
);
  
}


export default App;