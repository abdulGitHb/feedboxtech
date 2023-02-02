import React, { useEffect } from "react";
import './ClientShowCase.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import Octus from '../../image/octus_logo2.png'
import Mobigood from '../../image/mobigood_logo.png'
import Phoenix from '../../image/phoenix_logo2.png'
import FuteServices from '../../image/futeServices_logo.png'
import MasterBrains from '../../image/masterbrain_logo2.png'
import Jmax from '../../image/jmax_logo.png'
import Growing_roots from '../../image/growing_roots_logo.png'
import Qodeleaf from '../../image/qodeleaf_logo.png'

// import fabstieve from '../../image/fabstieve.png'
// import devfest from '../../image/devfest.png'
// import dot from '../../image/dot.png'
// import fourseven from '../../image/fourseven.png'
// import halp from '../../image/halp.png'
// import IIM_SIM from '../../image/IIM_SIM-01.png'
// import tech from '../../image/tech.png'
// import prepleafLogo from '../../image/prepleafLogoMobile.svg'
// import tedx from '../../image/tedx.png'
import { Autoplay } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Slider() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 0,
            easing: 'ease-in-out-back',
            delay: 50,
            anchorPlacement: 'top-top'
        })
    }, [])


    return (
        <div className="slider-container-hld" style={{ paddingTop: '800px' }}>
            <div className="client_back">



                <div className="slider-container">

                    <span data-aos="fade-up">Trusted By 500+ Customers And Still Counting...</span>

                    <Swiper

                        data-aos="fade-up"
                        data-aos-duration="100s"
                        spaceBetween={0}
                        slidesPerView={5}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="logo_contain_hld"
                    >

                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Growing_roots} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Qodeleaf} alt="" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Mobigood} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Phoenix} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={FuteServices} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Jmax} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">
                                <img src={Octus} alt="" />
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="logo_contain">

                                <img src={MasterBrains} alt="" />
                            </div>

                        </SwiperSlide>

                        {/* <SwiperSlide >
                    <div className="logo_contain">

                    <img src={tedx} width={200} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={prepleafLogo} alt="" />
                    </div>
                </SwiperSlide> */}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}