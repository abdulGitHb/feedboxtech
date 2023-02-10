import React, { useEffect } from "react";
import './Footer.css';
import f_logo from '../../image/f_logo.png'
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi"
import { IoLogoInstagram } from "react-icons/io"
import { RxTwitterLogo } from "react-icons/rx"
import { RxTriangleRight } from "react-icons/rx"
// import { Link } from 'react-scroll';
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
                                <RxTriangleRight className="mobile_view" size={40} /><a href="/">Home</a>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><a href="/about"> About Us</a>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><a href="/services/appdev" >Services</a>
                            </div>
                        </div>
                        <div className="index_col">
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><a href="/Portfolio">Portfolio</a>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><a href="/contact">Contact Us</a>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={40} /><a href="/ourstory"> Our Story </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_social_media" data-aos="fade-left">
                    <h3>Social Media</h3>
                    <div className="social_icons">
                    <a href="https://www.linkedin.com/company/feedbox-smm/mycompany/" target="_blank"><FiLinkedin size={25}/></a>
                    <a href="https://twitter.com/teamfeedBox" target="_blank"> <RxTwitterLogo size={25}/></a>
                    <a href="https://www.instagram.com/teamfeedbox/" target="_blank">   <IoLogoInstagram size={25}/></a>
                    <a href="https://www.facebook.com/feedbox.online" target="_blank"><FiFacebook size={25}/></a>
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