
import Centaurus from '../../image/centaurus.png'
import FuteServices from '../../image/futeServices.png'
import Qodeleaf from '../../image/qodeleaf.png'
import GenericSalon from '../../image/Generic Salon.png'
import RachuStore from '../../image/Rachu Store.png'
import Tedco from '../../image/Tedco.png'
import Masterbrain from '../../image/Masterbrain.png'
import Rolzone from '../../image/Rolzone.png'
import GrowingRoots from '../../image/GrowingRoots.png'
// import SketchMyPlot from '../../image/sketchMyPlot.png'
// import TintedTales from '../../image/tintedTales.png'
// import IndependenceRock from '../../image/independenceRock.png'
// import Tenet from '../../image/tenet.png'
// import Runo from '../../image/runo.png'
// import OnFinance from '../../image/onFinance.png'
// import MakeBelieve from '../../image/makeBelieve.png'
// import Gallant_jwellery from '../../image/gallent_jwellery.png'
// import Aryan from '../../image/aryan.png'

import NavBarResp from '../Navbar2/NavBarResp';
import Footer from '../Footer/Footer';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow, Parallax, EffectCreative } from 'swiper';
import './Anushka.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';



export default function Panorma() {

  return (
    
    <div>
      {/* <NavBarResp /> */}
      <div className="Appss pano_web_view">
        <h2 className="anu-head">Portfolio</h2>
          <Swiper
          style={{height:'300px',position:'relative',top:'-10px'}}
          class="swiper-wrapper"
          modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow, EffectCreative]}
          // spaceBetween={130}
          centeredSlides={true}
          slidesPerView={5}
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop={true}

            autoplay={{
              delay: 1200,
              reverseDirection: true,
              pauseOnMouseEnter:true,
              disableOnInteraction: false,
            }}
        
          className="cars-disp slide-track anu-carosel-hld1 part1"
        >
          <SwiperSlide  id="anuSlide" >
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <a href="https://webcode.codezesk.com/centaurus/" target="_blank" ><img src={Centaurus} alt="" /></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="anuSlide" >
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>FuteServices</div>
                </div>
                <div className='immage'>
                  <a href="https://www.futeservices.com/" target="_blank" ><img src={FuteServices} alt="" /></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="anuSlide"  style={{ width: '100px' }}>
            <div className='item1'>

              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Qodeleaf</div>
                </div>
                <div className='immage'>
                  <a href="https://qodeleaf.com/" target="_blank" ><img src={Qodeleaf} alt="" /></a>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide   id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Generic Salon</div>
                </div>
                <div className='immage'>
                  <a href="https://salonfurniturehub.com/" target="_blank" ><img src={GenericSalon} alt="" /></a>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>
              <div className='item1'>
                <div className='bgdiv'>
                  <div className='hidden-content'>
                    <div className='heading-hide'>Rachu Store</div>
                  </div>
                  <div className='immage'>
                    <a href="https://therachustore.com/" target="_blank" ><img src={RachuStore} alt="" /></a>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Tedco</div>
                </div>
                <div className='immage'>
                  <a href="https://tedcoedu.com/" target="_blank" ><img src={Tedco} alt="" /></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Masterbrains</div>
                </div>
                <div className='immage'>
                  <a href="https://masterbrains.co.in/" target="_blank" ><img src={Masterbrain} alt="" />
                  </a>          </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>


              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Rolzone</div>
                </div>
                <div className='immage'>
                  <a href="https://rolzone.com/" target="_blank" ><img src={Rolzone} alt="" />
                  </a>         </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide">
            <div className='item1'>

              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Growing Roots</div>
                </div>
                <div className='immage'>
                  <a href="https://thegrowingrootsenjoyparenting.com/" target="_blank" ><img src={GrowingRoots} alt="" />
                  </a>        </div>

              </div>
            </div>
          </SwiperSlide>


          {/* <SwiperSlide  id="anuSlide">
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Tenet</div>
                </div>
                <div className='immage'>
                  <a href="https://sketchmyplot.com/" target="_blank" ><img src={Tenet} alt="" />
                  </a>              </div>

              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide  id="anuSlide">
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>MakeBelieve</div>
                </div>
                <div className='immage'>
                  <a href="https://sketchmyplot.com/" target="_blank" ><img src={MakeBelieve} alt="" />
                  </a>                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide">
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Gallant_jwellery</div>
                </div>
                <div className='immage'>
                  <a href="https://sketchmyplot.com/" target="_blank" ><img src={Gallant_jwellery} alt="" /></a>
                </div>

              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
        </div>

        <div className="Appss pano_mobile_view">

     
        <h2 className="anu-head">Portfolio</h2>
          <Swiper
          style={{height:'300px',position:'relative',top:'10px'}}
          class="swiper-wrapper"
          modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow, EffectCreative]}
          // spaceBetween={130}
          centeredSlides={true}
          slidesPerView={3}
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop={true}
            autoplay={{
              delay: 1200,
              reverseDirection: true,
              pauseOnMouseEnter:true,
              disableOnInteraction: false,
            }}
    
          className="cars-disp slide-track anu-carosel-hld1 part1"
        >
          <SwiperSlide id="anuSlide" >
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <a href="https://webcode.codezesk.com/centaurus/" target="_blank" ><img src={Centaurus} alt="" /></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="anuSlide" >
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>FuteServices</div>
                </div>
                <div className='immage'>
                  <a href="https://www.futeservices.com/" target="_blank" ><img src={FuteServices} alt="" /></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="anuSlide"  style={{ width: '100px' }}>
            <div className='item1'>

              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>QodeLeaf</div>
                </div>
                <div className='immage'>
                  <a href="https://qodeleaf.com/" target="_blank" ><img src={Qodeleaf} alt="" /></a>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>GenericSalon</div>
                </div>
                <div className='immage'>
                  <a href="https://salonfurniturehub.com/" target="_blank" ><img src={GenericSalon} alt="" /></a>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>
              <div className='item1'>
                <div className='bgdiv'>
                  <div className='hidden-content'>
                    <div className='heading-hide'>RachuStore</div>
                  </div>
                  <div className='immage'>
                    <a href="https://therachustore.com/" target="_blank" ><img src={RachuStore} alt="" /></a>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Tedco</div>
                </div>
                <div className='immage'>
                  <a href="https://tedcoedu.com/" target="_blank" ><img src={Tedco} alt="" /></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Masterbrain</div>
                </div>
                <div className='immage'>
                  <a href="https://masterbrains.co.in/" target="_blank" ><img src={Masterbrain} alt="" />
                  </a>          </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide" style={{ width: '100px' }}>
            <div className='item1'>


              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Rolzone</div>
                </div>
                <div className='immage'>
                  <a href="https://rolzone.com/" target="_blank" ><img src={Rolzone} alt="" />
                  </a>         </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  id="anuSlide">
            <div className='item1'>

              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>GrowingRoots</div>
                </div>
                <div className='immage'>
                  <a href="https://thegrowingrootsenjoyparenting.com/" target="_blank" ><img src={GrowingRoots} alt="" />
                  </a>        </div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>

      <Footer />
    </div>
  )
}