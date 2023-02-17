import React, { useEffect } from "react";
import './PortfolioCard.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Atropos from 'atropos/react';

export default function Card({image, url, title, aos }) {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 100,
    //         // offset: -250
    //     })
    // },[])

    return (
        <>
        <Atropos>
        <div data-aos={aos} className="boxes" >
            <a href={url} target="_blank">
                <div className="b-shadow"></div>
                <img src={image} alt="" />
                <div className="img-desc">
                    <p>{title}</p>
                </div>
            </a>
        </div>
        </Atropos>
        </>
    )
}