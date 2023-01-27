import React from "react";
import './ServiceCard.css'
import Vector from '../../image/s-vector.png'
import g_shadow from '../../image/g-shadow.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function({aos}){
    return (
        <div data-aos={aos} className="serviceCard">
            <div className="vector">
                <img src={Vector} alt="" />
            </div>
            <div className="shadow"><img src={g_shadow} alt="" /></div>
            <div className="v-content">
                <h1>
                    App Development
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur elit. Magnam itaque cumque aliquid nisi, tempora commodi expedita doloribus quaerat alias accusantium.
                </p>
            </div>
                <div className="sc-btn">
                <a href="#"><AiOutlineArrowRight color={"white"} size={20}/></a>
                </div>
        </div>
    )
}