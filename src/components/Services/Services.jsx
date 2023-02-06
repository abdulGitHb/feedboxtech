import React, { useEffect } from "react";
import './Services.css'
// import mernGif from '../../image/mernGif.gif'
import ServiceCard from "../ServiceCard/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import app_dev from '../../image/app_dev.png'
import web_dev from '../../image/web_dev.png'
import wordpress_dev from '../../image/wordpress_dev.png'


export default function Services(){

// useEffect(()=>{
//     AOS.init(
//       {
//         duration:800,
//         // offset:250
//       }
//     );
// },[])

    return (
        <div className="services-container" id="services">
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
            desc="Our team uses this popular open-source platform for building websites and blogs, for its ease of use and flexibility."
            />
            <ServiceCard
              aos="fade-up"
              icon={web_dev}
              title="WEB DEVELOPMENT"
              linkTo='/services/webdev'
              desc="Our team uses this popular open-source platform for building websites and blogs, for its ease of use and flexibility."
             />
            <ServiceCard
              aos="fade-left"
              icon={wordpress_dev}
              title="WORDPRESS DEVELOPMENT"
              linkTo='/services/wordpressdev'
              desc="Our team uses this popular open-source platform for building websites and blogs, for its ease of use and flexibility."
             />
       </div>
        </div>
    )
}