import React, { useEffect } from "react";
import './About.css'
import AboutImg from '../../image/about-animation.gif'
import aboutPage from '../AboutUsFullPage/AboutUs';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 0,
            easing: 'ease-in-out-back',
            delay:100,
            anchorPlacement: 'top-top'
        })
    },[])

    return (
        <div className="a-container" id="about"

        >
            <h1 className="about_heading" data-aos="fade-up"
            >About Us</h1>
            <div data-aos="fade-up" className="a_content" 
            >
                <div className="a_content_img_hld">
                    <img src={AboutImg} alt="" />
                </div>

                <div className="about_content_desc">

                    <p>Feedbox tech is meant to provide top-developing
                        services to companies that enhance their web presence,
                        provide digital solutions, and evolve their way of working
                        added with the top-notch feedbox marketing strategies
                        to give our clients a long jump in their business. Our tech
                        team can develop apps and websites with wordpress,
                        react and other trending technologies.</p>
                       <Link to='/aboutUsFull' className="about_content_desc_btn">
                        <div >
                            Know More
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}