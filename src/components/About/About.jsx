import React, { useEffect } from "react";
import './About.css'
import AboutImg from '../../image/aboutUs.png'
// import aboutPage from '../AboutUsFullPage/AboutUs';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 0,
            easing: 'ease-in-out-back',
            delay: 50,
            anchorPlacement: 'top-top'
        })
    }, [])

    return (
        <div className="a-container" id="about"

        >
            <h2 className="section_heading" data-aos="fade-up"
            >About Us</h2>
            <div data-aos="fade-up" className="a_content"
            >
                <div className="a_content_img_hld">
                    <img src={AboutImg} alt="" />
                </div>

                <div className="about_content_desc">

                    <p>Feedbox tech is a team of passionate tech professionals that are dedicated to providing unparalleled services in areas of website creation and optimisation. We help you get the exposure you need through our expertise in SEO, website building, internet marketing, and web design. We aim to make you the front runners in your domain while helping you reap the benefits of the internet to its fullest with our cut throat technological innovations. We leverage our expertise in creating websites using Wordpress, React, and other trending technologies. </p>
                    <Link to='/about' className="about_content_desc_btn">
                        <div>
                            Know More
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}