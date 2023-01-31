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
            offset: 250
        })
    })

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

<<<<<<< HEAD
                    <p>Feedbox tech is meant to provide top-developing
                        services to companies that enhance their web presence,
                        provide digital solutions, and evolve their way of working
                        added with the top-notch feedbox marketing strategies
                        to give our clients a long jump in their business. Our tech
                        team can develop apps and websites with wordpress,
                        react and other trending technologies.</p>
                    <Link to='/aboutUsFull'>
                        <div class="about_content_desc_btn">
                            <h4>know more</h4>
                        </div>
                    </Link>
=======
                    <p>Feedbox tech is a team of passionate tech professionals that are dedicated to providing unparalleled services in areas of website creation and optimisation. We help you get the exposure you need through our expertise in SEO, website building, internet marketing, and web design. We aim to make you the front runners in your domain while helping you reap the benefits of the internet to its fullest with our cut throat technological innovations. We leverage our expertise in creating websites using Wordpress, React, and other trending technologies. 
</p>
                    <div className="about_content_desc_btn">
                        <a href="#" className="">Know More</a>
                    </div>
>>>>>>> origin
                </div>
            </div>
        </div>
    )
}