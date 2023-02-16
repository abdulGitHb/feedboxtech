import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./swiper";
import "./swiper.css";
import Centaurus from '../../image/centaurus.png'
import FuteServices from '../../image/futeServices.png'
import SketchMyPlot from '../../image/sketchMyPlot.png'
import TintedTales from '../../image/tintedTales.png'
import IndependenceRock from '../../image/independenceRock.png'
import Qodeleaf from '../../image/qodeleaf.png'
import Tenet from '../../image/tenet.png'
import Runo from '../../image/runo.png'
import Nh7 from '../../image/nh7.png'
import OnFinance from '../../image/onFinance.png'
import MakeBelieve from '../../image/makeBelieve.png'
import Gallant_jwellery from '../../image/gallent_jwellery.png'
import Aryan from '../../image/aryan.png'
import Slider from "infinite-react-carousel";
 

const breakPoints = [
  // {
  //   "slidesToShow": "6"
  // },
  // {
  //   "slidesToShow": "3"
  // },
  // {
  //   "slidesToShow": "3"
  // },
  // {
  //   "slidesToShow": "6"
  // }

  // { width: 1400, itemsToShow: 3 },
        // { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        // { width: 850, itemsToShow: 3 },
        // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 6 },
];


export default function Swiper() {

  const settings= {
    slidesToShow: 3,
    autoplay:true,
    autoplaySpeed:1500,
    autoplayScroll:1
  }


  return (
    <div>
      <div className="Appss">
        {/* <Carousel
          itemsToShow={3}
          breakPoints={breakPoints}
          className="cars-disp slide-track anu-carosel-hld1 part1"
          enableAutoPlay={true}
          infiniteLoop={true}
          autoPlaySpeed={1000}
          showArrows={true}
          enableSwipe={true}
        > */}
          <Slider {...settings}>
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={Centaurus} alt="" />
                </div>

              </div>
            </div>
            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={FuteServices} alt="" />
                </div>
              
              </div>
            </div>
            <div className='item1'>

              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={SketchMyPlot} alt="" />
                </div>
                
              </div>
            </div>

            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={TintedTales} alt="" />
                </div>

              </div>
            </div>

            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={IndependenceRock} alt="" />
                </div>

              </div>
            </div>

            <div className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={Qodeleaf} alt="" />
                </div>

              </div>
            </div>
        </Slider>

                
          {/* <Slider {...settings}>
            <div className='item1'>
                <div className='bgdiv'>
                    <div className='hidden-content'>
                    <div className='heading-hide'>Centauraus</div>
                    </div>
                    <div className='immage'>
                    <img src={Centaurus} alt="" />
                    </div>
                </div>
            </div>
            <div className='item1'>
                <div className='bgdiv'>
                    <div className='hidden-content'>
                    <div className='heading-hide'>Centauraus</div>
                    </div>
                    <div className='immage'>
                    <img src={Centaurus} alt="" />
                    </div>
                </div>
            </div>
            <div className='item1'>
                <div className='bgdiv'>
                    <div className='hidden-content'>
                    <div className='heading-hide'>Centauraus</div>
                    </div>
                    <div className='immage'>
                    <img src={Centaurus} alt="" />
                    </div>
                </div>
            </div>
            <div className='item1'>
                <div className='bgdiv'>
                    <div className='hidden-content'>
                    <div className='heading-hide'>Centauraus</div>
                    </div>
                    <div className='immage'>
                    <img src={Centaurus} alt="" />
                    </div>
                </div>
            </div>
        </Slider> */}

       {/* <div>          */}
        <Carousel
          className="bottom-layer slide-reverse anu-carousel-hld2 part1"
          breakPoints={breakPoints}
          enableAutoPlay={true}
          itemsToShow={3}
          autoPlaySpeed={1000}
          showArrows={true}
          enableSwipe={true}
        >
            <Item className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={Tenet} alt="" />
                </div>

              </div>
            </Item>
            <Item className='item1'>


              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={Runo} alt="" />
                </div>
                
              </div>
            </Item>
            <Item className='item1'>

              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={Nh7} alt="" />
                </div>
                
              </div>
            </Item>

            <Item className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={OnFinance} alt="" />
                </div>

              </div>
            </Item>

            <Item className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={MakeBelieve} alt="" />
                </div>

              </div>
            </Item>

            <Item className='item1'>
              <div className='bgdiv'>
                <div className='hidden-content'>
                  <div className='heading-hide'>Centauraus</div>
                </div>
                <div className='immage'>
                  <img src={Gallant_jwellery} alt="" />
                </div>

              </div>
            </Item>
          {/* </div> */}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  )
}



