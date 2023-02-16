import React, { useEffect } from "react";
import './Footer.css';
import f_logo from '../../image/f_logo.png'
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi"
import { IoLogoInstagram } from "react-icons/io"
import { RxTwitterLogo } from "react-icons/rx"
import { RxTriangleRight } from "react-icons/rx"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {

    useEffect(() => {
        AOS.init({
            // duration: 100,
            offset: 0
        })
    }, [])

    return (

        <div className="Footer">
            <div className="footerUp">

                <div className="footer_logo_hld">
                    <div data-aos="fade-right" className="feedbox_logo">
                        <img src={f_logo} alt="" />
                    </div>
                    <p data-aos="fade-right">Offering comprehensive
                        digital marketing solutions
                        to help businesses succeed
                        online.</p>
                </div>
                <div className="footer_indexes_hld" data-aos="fade-out">
                    <h3>SiteMap</h3>
                    <div className="footer_indexes footer_indexes_mobile" >
                        <div className="index_col">
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/">Home</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/about"><span>About Us</span></Link> 
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/services/appdev" >Services</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/services/appdev" >Portfolio</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/services/appdev" >Our Story</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/services/appdev" >Contact Us</Link>
                            </div>
                        </div>
                        {/* <div className="index_col footer_services">
                        <h3>Our Services</h3>
                             <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><a href="/Portfolio">App Development</a>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><a href="/Portfolio">Web Development</a>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><a href="/contact">Wordpress Development</a>
                            </div>
                        </div> */}
                   </div>
                </div>
                <div className="footer_indexes_hld" data-aos="fade-out">
                <h3>Our Services</h3>
                    <div className="footer_indexes footer_indexes_services_mobile">
                        <div className="index_col">
                       
                             <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/Portfolio">App Development</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/Portfolio">Web Development</Link>
                            </div>
                            <div className="index">
                                <RxTriangleRight className="mobile_view" size={30} /><Link to="/contact">Wordpress Development</Link>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="footer_social_media" data-aos="fade-left">
                    <h3>Social Media</h3>
                    <div className="social_icons">
                        <Link to="https://www.linkedin.com/company/feedbox-smm/mycompany/" target="_blank"><FiLinkedin size={25} /></Link>
                        <Link to="https://twitter.com/teamfeedBox" target="_blank"> <RxTwitterLogo size={25} /></Link>
                        <Link to="https://www.instagram.com/teamfeedbox/" target="_blank">   <IoLogoInstagram size={25} /></Link>
                        <Link to="https://www.facebook.com/feedbox.online" target="_blank"><FiFacebook size={25} /></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footerDown'>
            <p data-aos="fade-up">Copyright &copy; 2023 Feedbox. All Rights Reserved</p>

            </div>
        </div>

    )

}