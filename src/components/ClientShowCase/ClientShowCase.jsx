import React,{useEffect} from "react";
import './ClientShowCase.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import fabstieve from '../../image/fabstieve.png'
import devfest from '../../image/devfest.png'
import dot from '../../image/dot.png'
import fourseven from '../../image/fourseven.png'
import halp from '../../image/halp.png'
import IIM_SIM from '../../image/IIM_SIM-01.png'
import Jmax from '../../image/jmax.png'
import tech from '../../image/tech.png'
import prepleafLogo from '../../image/prepleafLogoMobile.svg'
import tedx from '../../image/tedx.png'
import { Autoplay } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Slider() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 0,
            easing: 'ease-in-out-back',
            delay:50,
            anchorPlacement: 'top-top'
        })
    },[])


    return (
      <div style={{paddingTop:'800px'}}>
        <div className="slider-container">

            <span data-aos="fade-up">Trusted By 500+ Customers And Still Counting...</span>

            <Swiper

            data-aos="fade-up"
                spaceBetween={60}
                slidesPerView={4}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="logo_contain_hld"
            >
                <SwiperSlide >
                    <div  className="logo_contain">
                    <img src={fabstieve} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={devfest} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={dot} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={fourseven} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={halp} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={IIM_SIM} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="logo_contain">

                    <img src={Jmax} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={tech} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={tedx} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="logo_contain">

                    <img src={prepleafLogo} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    )
}