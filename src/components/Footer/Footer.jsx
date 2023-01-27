import React, { useEffect } from "react";
import './Footer.css';
import f_logo from '../../image/f_logo.png'
import { ImFacebook } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im"
import { ImInstagram } from "react-icons/im"
import { ImPinterest } from "react-icons/im"
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {

 useEffect(()=>{
    AOS.init({
        duration:850,
        offset:0,
        easing: 'ease-in-sine',
        delay:100
    })
 })

    return (
        <div className="Footer">

            <div className="footerUp">

                <div className="f_left">
                    <div data-aos="fade-right" className="feedbox_logo">
                        <img src={f_logo} alt="" />
                    </div>
                    <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iure cum placeat labore quae neque expedita tenetur praesentium at suscipit.</p>
                    <div data-aos="fade-right" className="social_accounts">
                        <a href="#">
                            <ImFacebook />
                        </a>
                        <a href="#"><ImLinkedin2 /></a>
                        <a href="#"><ImInstagram /> </a>
                        <a href="#"> <ImPinterest /></a>

                    </div>
                </div>
                <div  className="f_right">
                    {/* <h1>Company</h1> */}

                    <div className="f_links">
                        <ul data style={{ listStyle: "none" }}>
                            <li data-aos="fade-left">
                                <Link to="home" spy={true} smooth={true} className="link">
                                    Home
                                </Link>
                            </li>
                            <li data-aos="fade-left">
                                <Link to="about" spy={true} smooth={true} className="link">
                                    About
                                </Link>
                            </li>
                            <li data-aos="fade-left">
                                <Link to="services" spy={true} smooth={true} className="link">
                                    Services
                                </Link>
                            </li>
                            <li data-aos="fade-left">
                                <Link to="portfolio" spy={true} smooth={true} className="link">
                                    Portfolio
                                </Link>
                            </li>
                            <li data-aos="fade-left">
                                <Link to="contact" spy={true} smooth={true} className="link">
                                    Contact Us
                                </Link>
                            </li>
                            <li data-aos="fade-left">
                                <a href="#" className="link">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  className='l_hr footerDown'></div>
            <p data-aos="fade-up">Copyright &copy; 2022 Feedbox. All Rights Reserved</p>
        </div>
      
    )
}