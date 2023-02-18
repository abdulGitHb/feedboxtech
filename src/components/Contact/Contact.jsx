import React, { useEffect, useState, useRef } from "react";
import './Contact.css'
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser'
import './contactHome.css'


export default function Contact() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [message,setMessage] = useState('');
  const [thank,setThank] = useState(false);
  
  const submitForm=()=>{
    const formData1={
      name:name,
      email:email,
      phone:phone,
      message:message
    }
    // emailjs.send('service_9rw0836','template_rsny29o',formData1,'yJ4YylTCoECK4zBUn').then((result)=>{
    //     console.log(result.text);
    // },(error)=>{
    //     console.log(error.text);
    // })
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setThank(true);

    setTimeout(() => {
      setThank(false);
    }, 2000);
  }

  return (
    <div id="contact" className="contact_home_container">
    <div className="adarsh-container">
      <div className="adarsh-form">
        <div className="adarsh-left">
          <div className="adarsh-top">
            <h1 className="adarsh-heading">Let's Work Together </h1>
          </div>


          <div className="adarsh-bottom-main">
            <div className="adarsh-bottom1">
              <iframe className="adarsh-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.013616003008!2d75.8903461146817!3d22.727735285103147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd301f220449%3A0xb2c1e3746c297023!2sFeedBox!5e0!3m2!1sen!2sin!4v1676278750894!5m2!1sen!2sin"

                allowtransparency="true"


              ></iframe>
            </div>
            <a href="https://www.google.com/maps/place/FeedBox/@22.727735,75.892535,15z/data=!4m6!3m5!1s0x3962fd301f220449:0xb2c1e3746c297023!8m2!3d22.7277353!4d75.8925348!16s%2Fg%2F11dxb45jt2?hl=en"
            target="_blank">
            <div className="adarsh-bottom2">

            </div>
            </a>

          </div>

        </div>
        <div className="adarsh-right">
          <input className="adarsh-text" type="text" placeholder="Your Name" value={name} name="name" autoComplete="new-password" onChange={(e)=>setName(e.target.value)} />
          <input className="adarsh-text" type="email" placeholder="Your e-Mail" value={email} name="email" autoComplete="new-password" onChange={(e)=>setEmail(e.target.value)}/>
          <input type='tel' placeholder="Phone" className="adarsh-text" value={phone} autoComplete="new-password" name="phone"  onChange={(e)=>setPhone(e.target.value)}/>
          <input
            className="adarsh-text"
            type="text"
            placeholder="Your message to us"
            autoComplete="new-password"
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <br />

          <span className="adarsh-checkSpan">

            {/* <input type="checkbox" className="adarsh-text adarsh-check" />Message */}

          </span>
          <div className="adarsh-imageDiv">
            <button type="submit" className="adarsh-btnn" onClick={submitForm}>
              Send <spam></spam>
            </button>
            {
              thank && <span className="thank">Thank you!</span>
            }
            {/* <span className="thank">Thank you!</span> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}