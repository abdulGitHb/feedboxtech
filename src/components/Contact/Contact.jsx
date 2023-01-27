import React, { useEffect } from "react";
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {

    useEffect(() => {
        AOS.init(
            {
                duration: 850,
                offset: 250
            }
        )
    }, [])

    return (

        <div className="co-container" id="contact">

            <h1 className="contact_heading"
            >Contact Us</h1>
            <div className="contact_data">
                <div className="co-form">
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
                        <input type="number" name="contact_no" required={true} />
                        <label className="message_label">
                            Message
                        </label>
                        <textarea name="message" id="message" cols="75" rows="4"></textarea>
                        <button className="submit_btn">Submit</button>
                    </form>
                </div>
            
            <div className="vertical_line"></div>

        
            </div>
        </div>
    )
}