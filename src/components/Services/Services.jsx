import React, { useEffect, useState } from "react";
import './Services.css'
// import mernGif from '../../image/mernGif.gif'
import ServiceCard from "../ServiceCard/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import app_dev from '../../image/appdev.png'
import web_dev from '../../image/webdev.png'
import wordpress_dev from '../../image/wordpressdev.png'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { HiArrowDown } from "react-icons/hi"

export default function Services(){
    const [offset, setoffset] = useState()
    const [s, sets] = useState([0,100])
    // const s = [0,100]

// useEffect(()=>{
//     AOS.init(
//       {
//         duration:800,
//         // offset:250
//       }
//     );
// },[])

// for disabling parallax
useEffect(()=>{

},[s])
const onScroll = () => {
    const winheight = window.pageYOffset
    setoffset(winheight); 
}
useEffect(() => {
        // clean up code

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        // window.addEventListener('scroll', CursorChange, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <div className="services-container" id="services">

           <ParallaxProvider>
            <Parallax
            speed={-10} 
             scale={[1,100]}
             easing="easeInQuad"
            >
                <div className="parallax_dot">
                    {/* <HiArrowDown size={25}/> */}
                </div>
            </Parallax>
           
          

           <h1 className="section_heading"
           data-aos="fade-up" 
            >Services</h1>

            {/* <div className="technologies">
                <div className="ts_left">
                    <span>Web Development</span>
                    <p>Dolore, dolores dignissimos optio minima velit officiis eos cumque alias! Unde illum consectetur alias laboriosam?</p>
                    <div class="text-box">
                        <a href="#" class="btn btn-orange btn-animate">know more</a>
                    </div>
                </div>
            <div className="ts_right">

                <img src={mernGif} alt="" />
            </div>
            </div> */}
       <div  className="s-cards">

            <ServiceCard 
            aos="fade-right"
            icon={app_dev}
            title="APP DEVELOPMENT"
            linkTo='/services/appdev'
            desc="Our team of developers, designers, and project managers develop software applications for mobile devices, such as smartphones and tablets."
            />
            <ServiceCard
              aos="fade-up"
              icon={web_dev}
              title="WEB DEVELOPMENT"
              linkTo='/services/webdev'
              desc="Our team of tech geeks create and maintain both front-end development and back-end development."
             />
            <ServiceCard
              aos="fade-left"
              icon={wordpress_dev}
              title="WORDPRESS DEVELOPMENT"
              linkTo='/services/wordpressdev'
              desc="Our team uses this popular open-source platform for building websites and blogs, for its ease of use and flexibility."
             />
       </div>
            </ParallaxProvider>
        </div>
    )
}