import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import Centaurus from "../../image/centaurus.png";
import FuteServices from "../../image/futeServices.png";
import SketchMyPlot from "../../image/sketchMyPlot.png";
import TintedTales from "../../image/tintedTales.png";
import IndependenceRock from "../../image/independenceRock.png";
import Gallant_jwellery from "../../image/gallent_jwellery.png";
import Tenet from "../../image/tenet.png";
import Aryan from "../../image/aryan.png";
import Runo from "../../image/runo.png";
import Card from "../PortfolioCard/PortfolioCard";
import { Outlet, Link } from "react-router-dom";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";

// import Cursor from '../Cursor/Cursor'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Portfolio(props) {
  return (
    <div id="cursorDiv" className="cursorDiv">
      <div id="cursor-dot" />

      <div className="p-container" id="portfolio">
        <h1 className="section_heading" data-aos="fade-up">
          Portfolio
        </h1>

        <span data-aos="fade-up" className="portfolio_subHeading">
          Projects that speak of our success ...
        </span>

        <div className="portfolio_cards portfolio_web_view">
          <Card
            aos="fade-up-right"
            image={Centaurus}
            url="https://webcode.codezesk.com/centaurus/"
            title="Centaurus"
            id="portfolioCard"
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

          {/* <Link to="/Portfolio" className="portfolio_btn" data-aos="fade-up">
            View More
          </Link> */}
        </div>

        <div className="portfolio_mobile_view">
          <Swiper navigation
          
          className="mySwiper">
            <SwiperSlide>
              <div className="one-slide-img">
                <div className="slide-gap">
                  <a
                    href="https://webcode.codezesk.com/centaurus/"
                    target="_blank"
                  >
                    <img src={Centaurus} alt="" />
                  </a>
                </div>

                <div className="slide-gap">
                  <a href="https://www.aryantiles.com/" target="_blank">
                    <img src={Aryan} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="one-slide-img">
                <div className="slide-gap">
                  <a href="https://independencerock.in/" target="_blank">
                    <img src={IndependenceRock} alt="" />
                  </a>
                </div>

                <div className="slide-gap">
                  <a href="https://tintedtales.in/" target="_blank">
                    <img src={TintedTales} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="one-slide-img">
                <div className="slide-gap">
                  <a href="https://www.futeservices.com/" target="_blank">
                    <img src={FuteServices} alt="" />
                  </a>
                </div>

                <div className="slide-gap">
                  <a href="https://sketchmyplot.com/" target="_blank">
                    <img src={SketchMyPlot} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="one-slide-img">
                <div className="slide-gap">
                  <a href="https://tenetapp.in/" target="_blank">
                    <img src={Tenet} alt="" />
                  </a>
                </div>

                <div className="slide-gap">
                  <a href="https://runo.in/" target="_blank">
                    <img src={Runo} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Link to="/Portfolio" className="portfolio_btn" data-aos="fade-up">
            View More
          </Link>
      </div>
    </div>
  );
}
