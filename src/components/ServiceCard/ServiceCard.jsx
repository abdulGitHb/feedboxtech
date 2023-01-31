import React from "react";
import './ServiceCard.css'
import Vector from '../../image/s-vector.png'
import g_shadow from '../../image/g-shadow.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function({aos, desc,title}){
    return (
        <div data-aos={aos} className="serviceCard">
            <div className="card_vector">
                <img src={Vector} alt="" />
            </div>
            {/* <div className="shadow"><img src={g_shadow} alt="" /></div> */}
    
            <div className="card_content">
           
                <h1>
                    {title}
                </h1>
                <p>
                    {desc}
                </p>
                <button className="sc_btn">View More</button>
            </div>
                {/* <div className="sc-btn">
                <a href="#"><AiOutlineArrowRight color={"white"} size={20}/></a>
                </div> */}
            
        </div>
    )
}