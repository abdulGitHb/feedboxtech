import React, { useEffect } from "react";
import './Services.css'
// import mernGif from '../../image/mernGif.gif'
import ServiceCard from "../ServiceCard/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services(){

useEffect(()=>{
    AOS.init(
      {
        duration:850,
        // offset:250
      }
    );
},[])

    return (
        <div className="services-container" id="services">
           <h1 className="services_heading" 
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
             aos="fade-up"
             />
            <ServiceCard aos="fade-up"/>
            <ServiceCard aos="fade-up"/>
       </div>
        </div>
    )
}