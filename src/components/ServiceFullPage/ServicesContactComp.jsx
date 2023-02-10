import React from 'react'
import { Link } from 'react-router-dom';
import './ServicesContactComp.css'

function ServicesContactComp() {
  return (
    <div className='main-container-talk-us'>
        <div className="contact-img-cotainer">
            <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg" alt="" className="talk-us-img1" />
        </div>
        <div className="text-container">
          <div className="content-container">
            <h2>Have Idea in mind? We got the skills!!</h2>
            <h4>Our developers design and create applications that simplify tasks,</h4>
            <Link to='/contact'>
              <button className='talk-us-btn'>Talk to Us</button>
            </Link> 
          </div>
        </div>
    </div>
  )
}

export default ServicesContactComp;