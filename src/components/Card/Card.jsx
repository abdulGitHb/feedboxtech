import React,{useEffect} from "react";
import './Card.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card({image,url,title,aos}){

    useEffect(()=>{
        AOS.init({
            duration:850,
            offset:250
        })
    })

    return(
        <div data-aos={aos} className="boxes">
                <a href={url} target="_blank">
                <div className="b-shadow"></div>
                    <img src={image} alt="" />
                    <div className="img-desc">
                      <p>{title}</p>
                    </div>
                    </a> 
                </div>
    )
}