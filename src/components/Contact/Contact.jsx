import React, { useEffect } from "react";
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCallOutline } from "react-icons/io5"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdOutlineMail } from "react-icons/md"


export default function Contact() {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 100,
    //         // offset: -250
    //     })
    // },[])

    return (

        <div className="co-container" id="contact">

            <h1 data-aos="fade-up" className="section_heading contact_heading"
            >Contact Us</h1>
            <div className="contact_data">
                
                <div data-aos="fade-up" className="contact_details">
                    <div className="contact_details_row">
                        <IoCallOutline size={40} style={{opacity:'0.5'}} />
                        <div className="data_row" >
                            <h3 style={{ fontWeight: '600' }}> Contact Number </h3>
                            <p>+91-1234567890</p>
                        </div>

                    </div>
                    <div className="contact_details_row">
                        <HiOutlineLocationMarker size={40} style={{opacity:'0.5'}}  />
                        <div className="data_row" >
                            <h3 style={{ fontWeight: '600' }}> Address </h3>
                            <p> Feedbox <br />Ground Floor, Saakaar Villa, 204, Shri nagar Main Rd, Near Anand bazaar, Old Palasia, Indore, madhya Pradesh 452001</p>
                        </div>
                    </div>
                    <div className="contact_details_row">
                        <MdOutlineMail size={40}  style={{opacity:'0.5'}} />
                        <div className="data_row">
                            <h3 style={{ fontWeight: '600' }}> Email </h3>
                            <p>Feedbox@xyz.com</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="co-form">
                    <h2 className="title_in_form">Got Ideas? We Got The Skills. Let's team up</h2>
                    <form>
                        <label>
                            Name
                        </label>
                        <input type="text" name="name" required={true} />
                        <label>
                            Email
                        </label>
                        <input type="email" name="email" required={true} />
                        <label>
                            Contact No
                        </label>
                        <input type="text" name="contact_no" required={true} />
                        <label id="message_label">
                            Message
                        </label>
                        <textarea name="message" id="message" rows="2"></textarea>
                        <button className="submit_btn">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}