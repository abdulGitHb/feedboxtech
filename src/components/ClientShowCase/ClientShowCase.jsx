import React,{useEffect} from "react";
import './ClientShowCase.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Airbrb from '../../image/airbrb.png'
import Drible from '../../image/dribble.png'
import Gougle from '../../image/gougle.png'
import Kohels from '../../image/kohels.png'
import Skype from '../../image/skype.png'
import Spotify from '../../image/spotify.png'
import { Autoplay } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Slider() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 0,
            easing: 'ease-in-out-back',
            delay:10,
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
                className="brand-slider"
            >
                <SwiperSlide>
                    <img src={Airbrb} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Drible} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Gougle} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Kohels} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Skype} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Spotify} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    )
}