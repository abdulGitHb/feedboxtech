import React, { useEffect, useState } from "react";
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCallOutline } from "react-icons/io5"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdOutlineMail } from "react-icons/md"

// const sgMail = require('@sendgrid/mail')
// sgMail.setSpiKey(process.env.SENDGRID_API_KEY);


export default function Contact() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [contact, setcontact] = useState('')
    const [message, setmessage] = useState('')

    // useEffect(() => {
    //     AOS.init({
    //         duration: 100,
    //         // offset: -250
    //     })
    // },[])

//     // eslint-disable-next-line turbo/no-undeclared-env-vars
// sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

// const emailHtml = render(<Email url="https://example.com" />);

// const options = {
//   from: 'you@example.com',
//   to: 'user@gmail.com',
//   subject: 'hello world',
//   html: emailHtml,
// };

const handleSubmit = () =>{
    const message = {
        to:'umesh.feedbox@gmail.com',
        from: email,
        subject:"for making an awesome appointment",
        html: `
        <p><strong>Name:</strong>${name}</p>
        <p>${contact}</p>
        <p>${message}</p>`
    }
    // sgMail.send(message)
}

const handleChange = (e) =>{
    if(e.target.name=='name'){
        e.preventDefault();
        setname(e.target.value)
        // console.log(name)
    }
    if(e.target.name=='email'){
        e.preventDefault();
        setemail(e.target.value)
        // console.log(email)
    }
    if(e.target.name=='contact_no'){
        e.preventDefault();
        setcontact(e.target.value)
        // console.log(contact)
    }
    if(e.target.name=='message'){
        e.preventDefault();
        setmessage(e.target.value)
        // console.log(message)
    }
}

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
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name
                        </label>
                        <input autoComplete="off" type="text" name="name" required={true} onChange={handleChange}/>
                        <label>
                            Email
                        </label>
                        <input  autoComplete="off" type="email" name="email" required={true} onChange={handleChange}/>
                        <label>
                            Contact No
                        </label>
                        <input autoComplete="off" type="text" name="contact_no" required={true} onChange={handleChange} />
                        <label id="message_label">
                            Message
                        </label>
                        <textarea autoComplete="off" name="message" id="message" rows="2" onChange={handleChange}/>
                        <button className="submit_btn">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}