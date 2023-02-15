// import React from 'react'
// import Carousel from "react-elastic-carousel";
// import Item from "./swiper";
// import "./swiper.css";
// import Centaurus from '../../image/centaurus.png'
// import FuteServices from '../../image/futeServices.png'
// import SketchMyPlot from '../../image/sketchMyPlot.png'
// import TintedTales from '../../image/tintedTales.png'
// import IndependenceRock from '../../image/independenceRock.png'
// import Qodeleaf from '../../image/qodeleaf.png'
// import Tenet from '../../image/tenet.png'
// import Runo from '../../image/runo.png'
// import Nh7 from '../../image/nh7.png'
// import OnFinance from '../../image/onFinance.png'
// import MakeBelieve from '../../image/makeBelieve.png'
// import Gallant_jwellery from '../../image/gallent_jwellery.png'
// import Aryan from '../../image/aryan.png'


//   const breakPoints=[
//     {
//       // "width":"1400", 
//       "slidesToShow":"3"
//     },
//     {
//       // "width":"1200", 
//       "slidesToShow":"3"
//     },
//     {
//       // "width":"1200", 
//       "slidesToShow":"3"
//     },
//     {
//       // "width":"1200", 
//       "slidesToShow":"4"
//     }
//   ];


// export default function Swiper() {
    

//   return (
//     <div>
//         <div className="Appss">
//         <Carousel 
//             breakPoints={breakPoints}
//             className="cars-disp slide-track"
//             enableAutoPlay={true}
//             autoPlaySpeed={2000}
//             showArrows={true}
//             enableSwipe={true}
//         >
//             <div className='part1'>
//             <Item className='item1'>
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={Centaurus} alt="" /> 
//                 </div>
               
//               </div>
//             </Item>
//             <Item className='item1'>
              
    
//               <div className='bgdiv'>
//               <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={FuteServices} alt="" /> 
//                 </div>
//                 {/* <div >
//                   <span className='s1'>Avatars Shop</span> <br />
//                   <div className='s2'>The Avatars Shop will give our community the opportunity to grab merch and coffeeware</div>
//                 </div> */}
//               </div>
//             </Item>
//             <Item className='item1'>
            
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={SketchMyPlot} alt="" /> 
//                 </div>
//                 {/* <div >
//                   <span className='s1'>Avatars Studio Opening</span> <br />
//                   <div className='s2'>To keep the good energy, we created a Avatars Studio for our friends to meditate and get stretchy together</div>
//                 </div> */}
//               </div>
//             </Item>
//             </div>

//             <div className='part1'>
//             <Item className='item1'>
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={Centaurus} alt="" /> 
//                 </div>
               
//               </div>
//             </Item>

//             <Item className='item1'>
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={Centaurus} alt="" /> 
//                 </div>
               
//               </div>
//             </Item>

//             <Item className='item1'>
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={Centaurus} alt="" /> 
//                 </div>
               
//               </div>
//             </Item>
//             </div>
//         </Carousel>

//         <Carousel 
//             className="bottom-layer slide-reverse"
//             breakPoints={breakPoints}
//             enableAutoPlay={true}
//             autoPlaySpeed={4000}
//             showArrows={true}
//             enableSwipe={true}
//         >
//             <div className='part1'>
//             <Item className='item1'>
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={Centaurus} alt="" /> 
//                 </div>
               
//               </div>
//             </Item>
//             <Item className='item1'>
              
    
//               <div className='bgdiv'>
//               <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={FuteServices} alt="" /> 
//                 </div>
//                 {/* <div >
//                   <span className='s1'>Avatars Shop</span> <br />
//                   <div className='s2'>The Avatars Shop will give our community the opportunity to grab merch and coffeeware</div>
//                 </div> */}
//               </div>
//             </Item>
//             <Item className='item1'>
            
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={SketchMyPlot} alt="" /> 
//                 </div>
//                 {/* <div >
//                   <span className='s1'>Avatars Studio Opening</span> <br />
//                   <div className='s2'>To keep the good energy, we created a Avatars Studio for our friends to meditate and get stretchy together</div>
//                 </div> */}
//               </div>
//             </Item>
//             </div>

//             <div className='part1'>
//             <Item className='item1'>
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={Centaurus} alt="" /> 
//                 </div>
               
//               </div>
//             </Item>

//             <Item className='item1'>
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={Centaurus} alt="" /> 
//                 </div>
               
//               </div>
//             </Item>

//             <Item className='item1'>
//               <div className='bgdiv'>
//                 <div className='hidden-content'>
//                   <div className='s2'>Centauraus</div>
//                 </div>
//                 <div className='immage'>
//                   <img src={Centaurus} alt="" /> 
//                 </div>
               
//               </div>
//             </Item>
//             </div>
//         </Carousel>
        
//     </div>
//     </div>
//   )
// }



