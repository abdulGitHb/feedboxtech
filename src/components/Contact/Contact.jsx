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



    const [formData1, setFormData1] = useState({
        name:"",
        email:"",
        contact:"",
        message:""
    });

    const getFormData= (event)=>{
        // event.preventDefault();
        // // console.log(formData1);
        //  fetch("http://localhost:5000/contactdata",{
          
        //     method:'POST',
        //     headers:{
        //         "content-type":"application/json",
        //     },
        //     body: JSON.stringify(formData1)
        // })
        // .then((response)=>{response.json()})
        // .catch(error=>{
        //     console.log(`error is : ${error}`)
        //     // console.log(formData1);
        // })
    }


    const handleChange=(e)=>{
        e.preventDefault();
        setFormData1({...formData1, [e.target.name]:e.target.value});
        // console.log(e.target.value)
        // console.log(formData1);
    }



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
    // const message = {
    //     to:'umesh.feedbox@gmail.com',
    //     from: email,
    //     subject:"for making an awesome appointment",
    //     html: `
    //     <p><strong>Name:</strong>${name}</p>
    //     <p>${contact}</p>
    //     <p>${message}</p>`
    // }
    // sgMail.send(message)
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
                            <p>+91-7869909760</p>
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
                            <p>admin@feedbox.co.in</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="co-form">
                    <h2 className="title_in_form">Got Ideas? We Got The Skills. Let's team up</h2>

                    <form onSubmit={getFormData}>
                        <label>Name</label>
                        <input autoComplete="off" type="text" value={formData1.name} onChange={handleChange} name="name" required={true} />

                        <label>Email</label>
                        <input autoComplete="off" type="email" value={formData1.email}   onChange={handleChange} name="email" required={true} />
                        
                        <label>Contact No</label>
                        <input autoComplete="off" type="number" value={formData1.contact}    onChange={handleChange} name="contact" required={true} />
                        
                        <label id="message_label">Message</label>
                        <textarea autoComplete="off" name="message" value={formData1.message}    onChange={handleChange} id="message" rows="2"></textarea>
                       
                        <button className="submit_btn">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}