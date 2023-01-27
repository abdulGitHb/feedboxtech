import React, { useEffect, useState } from 'react'
import './landing.css'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'
import { ImFacebook } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im"
import { FaInstagramSquare } from "react-icons/fa"
import { FaPinterestP } from "react-icons/fa";

// import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Landing() {


    return (
        <section className='hero_container' id="hero-home">
            <div className='bubble'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="hero_home_video_hld">
                <div className="hero_home_contact_btn">Contact Us</div>
                <video src="https://gravityteam.co/wp-content/uploads/2022/07/hero-animation.mp4" className='hero_home_video' muted={true} loop={true} autoPlay={true}></video>
            </div>
            <div className="hero_home_content">
                <span className='typewriter' style={{ color: '#fff' }}>Handling</span>
                <span className='typewriter' style={{ color: '#0090ee', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['Web Development', 'App Development']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
                <div className="hero_home_content_desc">
                    <span>We help you turn ideas into reality. Let’s build
                        something amazing together</span >
                </div>
            </div>
            <div className="hero_home_social">
                <span className='hero_home_social_icon'><ImFacebook size={30} /></span>
                <span className='hero_home_social_icon'><ImLinkedin2 size={30} /></span>
                <span className='hero_home_social_icon'><FaInstagramSquare size={30} /></span>
                <span className='hero_home_social_icon'><FaPinterestP size={30} /></span>
            </div>
        </section>
    )
}