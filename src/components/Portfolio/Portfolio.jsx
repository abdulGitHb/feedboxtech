import React, { useEffect, useRef } from "react";
import "./Portfolio.css";


import Centaurus from '../../image/centaurus.png'
import FuteServices from '../../image/futeServices.png'
import Qodeleaf from '../../image/qodeleaf.png'
import GenericSalon from '../../image/Generic Salon.png'
import RachuStore from '../../image/Rachu Store.png'
import Tedco from '../../image/Tedco.png'
import Masterbrain from '../../image/Masterbrain.png'
import Rolzone from '../../image/Rolzone.png'
import GrowingRoots from '../../image/GrowingRoots.png'
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
            image={FuteServices}
            url="https://www.futeservices.com/"
            title="FuteServices"
          />
          <Card
            aos="fade-up-left"
            image={Qodeleaf}
            url="https://qodeleaf.com/"
            title="QodeLeaf"
          />
          <Card
            aos="fade-up-right"
            image={RachuStore}
            url="https://therachustore.com/"
            title="Rachu Store"
          />
          <Card
            aos="fade-up"
            image={Masterbrain}
            url="https://masterbrains.co.in/"
            title="Masterbrains"
          />
          <Card
            aos="fade-up-left"
            image={Tedco}
            url="https://tedcoedu.com/"
            title="Tedco"
          />
          <Card
            aos="fade-up-right"
            image={Rolzone}
            url="https://rolzone.com/"
            title="Rolzone"
          />
          <Card
            aos="fade-up"
            image={GenericSalon}
            url="https://salonfurniturehub.com/"
            title="Generic Salon"
          />
          {/* <Card
            aos="fade-up-left"
            image={Gallant_jwellery}
            url="https://www.gallantjewelry.com/"
            title="Gallant Jewelry"
          /> */}

          {/* <Link to="/Portfolio" className="portfolio_btn" data-aos="fade-up">
            View More
          </Link> */}
        </div>

        <div className="portfolio_mobile_view">
          <Swiper
          modules={[Navigation]}
          navigation={true}
          style={{height:"510px"}}
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
                  <a href="https://www.futeservices.com/" target="_blank">
                    <img src={FuteServices} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="one-slide-img">
                <div className="slide-gap">
                  <a href="https://qodeleaf.com/" target="_blank">
                    <img src={Qodeleaf} alt="" />
                  </a>
                </div>

                <div className="slide-gap">
                  <a href=" https://salonfurniturehub.com/" target="_blank">
                    <img src={GenericSalon} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="one-slide-img">
                <div className="slide-gap">
                  <a href="https://tedcoedu.com/" target="_blank">
                    <img src={Tedco} alt="" />
                  </a>
                </div>

                <div className="slide-gap">
                  <a href="https://rolzone.com/ " target="_blank">
                    <img src={Rolzone} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="one-slide-img">
                <div className="slide-gap">
                  <a href="https://masterbrains.co.in/" target="_blank">
                    <img src={Masterbrain} alt="" />
                  </a>
                </div>

                <div className="slide-gap">
                  <a href="https://therachustore.com/" target="_blank">
                    <img src={RachuStore} alt="" />
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
