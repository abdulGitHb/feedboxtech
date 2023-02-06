import React, { useEffect } from "react";
import './Footer.css';
import f_logo from '../../image/f_logo.png'
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi"
import { IoLogoInstagram } from "react-icons/io"
import { RxTwitterLogo } from "react-icons/rx"
import { RxTriangleRight } from "react-icons/rx"
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {

    useEffect(() => {
        AOS.init({
            // duration: 100,
            offset: 0
        })
    },[])

    return (
        
        <div className="Footer">
            <div className="footerUp">

                <div className="footer_logo_hld">
                    <div data-aos="fade-right" className="feedbox_logo">
                        <img src={f_logo} alt="" />
                    </div>
                    <p data-aos="fade-right">Passion, Hardwork, Commitment</p>
                </div>
                <div className="footer_indexes_hld" data-aos="fade-out">
                    <h3>Index</h3>
                    <div className="footer_indexes">
                        <div className="index_col">
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><Link to="hero-home" spy={true} smooth={true}>Home</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><Link to="about" spy={true} smooth={true}
                                duration={500}
                                >About Us</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><Link to="services" spy={true} smooth={true}>Services</Link>
                            </div>
                        </div>
                        <div className="index_col">
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><Link to="contact" spy={true} smooth={true}>Contact Us</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} />Career
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_social_media" data-aos="fade-left">
                    <h3>Social Media</h3>
                    <div className="social_icons">
                        <FiLinkedin size={25}/>
                        <RxTwitterLogo size={25}/>
                        <IoLogoInstagram size={25}/>
                        <FiFacebook size={25}/>
                    </div>
                </div>
            </div>
                <hr />
            <div className='footerDown'>
            <p data-aos="fade-up">Copyright &copy; 2022 Feedbox. All Rights Reserved</p>
            </div>
        </div>
     
    )
}