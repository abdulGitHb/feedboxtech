import React, { useEffect, useRef } from 'react'
import './Portfolio.css'
import Centaurus from '../../image/centaurus.png'
import FuteServices from '../../image/futeServices.png'
import SketchMyPlot from '../../image/sketchMyPlot.png'
import TintedTales from '../../image/tintedTales.png'
import IndependenceRock from '../../image/independenceRock.png'
import Gallant_jwellery from '../../image/gallent_jwellery.png'
import Tenet from '../../image/tenet.png'
import Aryan from '../../image/aryan.png'

import Runo from '../../image/runo.png'
import Card from '../PortfolioCard/PortfolioCard'
import { Outlet, Link } from "react-router-dom";
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
// import Cursor from '../Cursor/Cursor'
// import AOS from 'aos';
// import 'aos/dist/aos.css';


export default function Portfolio(props) {
    const cursorDotOutline = React.useRef();
  const cursorDot = React.useRef();
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  let [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  let cursorVisible = React.useState(false);
  let cursorEnlarged = React.useState(false);

  // console.log(window.innerHeight);

  /**
   * Mouse Moves
   */
  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };
  const onMouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };
  const onMouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };
  const onMouseDown = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };
  const onMouseUp = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  const onResize = event => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  /**
   * Hooks
   */
  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);
    requestRef.current = requestAnimationFrame(animateDotOutline);
    
    // Handle Link Hovers
    handleLinkHovers();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  /**
   * Position Dot (cursor)
   * @param {event}
   */
  function positionDot(e) {
    cursorVisible.current = true;
    toggleCursorVisibility();
    // Position the dot
    endX = e.pageX;
    endY = e.pageY;
    cursorDot.current.style.top = endY + "px";
    cursorDot.current.style.left = endX + "px";
  }

  /**
   * Toggle Cursor Visiblity
   */
  function toggleCursorVisibility() {
    if (cursorVisible.current) {
      cursorDot.current.style.opacity = 1;
      cursorDotOutline.current.style.opacity = 1;
    } else {
      cursorDot.current.style.opacity = 0;
      cursorDotOutline.current.style.opacity = 0;
    }
  }

  /**
   * Toggle Cursor Size
   */
  function toggleCursorSize() {
    if (cursorEnlarged.current) {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      cursorDotOutline.current.style.transform =
        "translate(-50%, -50%) scale(5)";
    } else {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
      cursorDotOutline.current.style.transform =
        "translate(-50%, -50%) scale(1)";
    }
  }

  /**
   * Handle LInks
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
   */
  function handleLinkHovers() {
    document.querySelectorAll('a').forEach(el => {
      el.addEventListener("mouseover", () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
      });
    });
  }

  /**
   * Animate Dot Outline
   * Aniamtes cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = time => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      cursorDotOutline.current.style.top = y + "px";
      cursorDotOutline.current.style.left = x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };
    


    return (
        <div id='cursorDiv' className='cursorDiv'>

            <div ref={cursorDotOutline} id="cursor-dot-outline" > 
            {/* <div  id="cursor-dot-outline" >  */}
                    <FaLessThan size={3.2}  /> 
                    <FaGreaterThan size={3}  /> 
            </div>

            <div ref={cursorDot} id="cursor-dot" />
            {/* <div  id="cursor-dot" /> */}

                  
              <div className='p-container' id='portfolio'>

                  <h1 className="section_heading" data-aos="fade-up"
                  >Portfolio</h1>

                  <span data-aos="fade-up"
                      className='portfolio_subHeading'>Projects that speak of our success ...</span>

                  <div className="portfolio_cards">
                          <Card
                        aos="fade-up-right"
                        image={Centaurus}
                        url="https://webcode.codezesk.com/centaurus/"
                        title="Centaurus"
                        id='portfolioCard'
                   />

                    <Card
                        aos="fade-up-right"
                        image={Aryan}
                        url="https://www.aryantiles.com/"
                        title="Aryan"
                    />
                    <Card
                        aos="fade-up-left"
                        image={IndependenceRock}
                        url="https://independencerock.in/"
                        title="Independence Rock"
                    />
                    <Card
                        aos="fade-up-right"
                        image={TintedTales}
                        url="https://tintedtales.in/"
                        title="Tintes Tales"
                    />
                    <Card
                        aos="fade-up"
                        image={FuteServices}
                        url="https://www.futeservices.com/"
                        title="FuteServices"
                    />
                    <Card
                        aos="fade-up-left"
                        image={SketchMyPlot}
                        url="https://sketchmyplot.com/"
                        title="Sketch MY Plot"
                    />
                    <Card
                        aos="fade-up-right"
                        image={Tenet}
                        url="https://tenetapp.in/"
                        title="Tenet"
                    />
                    <Card
                        aos="fade-up"
                        image={Runo}
                        url="https://runo.in/"
                        title="Runo"
                    />
                    <Card
                        aos="fade-up-left"
                        image={Gallant_jwellery}
                        url="https://www.gallantjewelry.com/"
                        title="Gallant Jewelry"
                    />


            </div>
            <Link to='/Portfolio' className='portfolio_btn' data-aos="fade-up">
                View More
            </Link>

          </div>
        </div>
    )
}