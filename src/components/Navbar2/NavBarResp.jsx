import React, { useState } from "react";
import f_logo from '../../image/f_logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import $ from 'jquery';
// import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';

export default function NavBarResp() {
  const [navToggle, setnavToggle] = useState(true)
  const [toggle, setToggle] = useState(false);
  const[subMenu, setSubMenu] = useState(false);
  const [toggleUpDown, settoggleUpDown] = useState(true)
  const [subNavDisplay, setSubNavDisplay] = useState('none');

  $(document).ready(function () {

    //Mobile hamburger open and close
    $(".hamburger").click(function () {
      // console.log("hamburger clcked")
      // $("#header").addClass("mobile-open");
      $("#contacto").toggleClass("link-contact", navToggle);
      $("#header").toggleClass("mobile-open", navToggle);
      $("#nav-items-holder").toggleClass("nav-options-active");
     
     
      setnavToggle(!navToggle);
    });


  });

  const toggleUp=()=>{
    settoggleUpDown(false);
    setSubNavDisplay('flex');
  }
  const toggleDown=()=>{
    settoggleUpDown(true);
    setSubNavDisplay('none');
  }



  return (

    // <nav id="header" className="glass header-close ">
    //   <div id="nav-container">
    //     <div id="logo-holder">
    //     <Link to="/" spy={true} smooth={true} className="link">
    //     <img id="logo" src={f_logo} alt="" />
    //         </Link>

    //       <input id="toggle" type="checkbox"></input>

    //       <label htmlFor="toggle" className="hamburger">
    //         <div className="top-bun"></div>
    //         <div className="meat"></div>
    //         <div className="bottom-bun"></div>
    //       </label>

    //     </div>

    //     <div id="nav-items-holder" className="nav-options-active" 
    //     style={{display:'flex',justifyContent:'center', textAlign:'center', alignContent:'center'}}
    //     >
    //       {/* <!-- about --> */}
    //       <div id="n-home">
    //         <Link to="/"  className="n_link">
    //           Class
    //         </Link>
    //       </div>

    //       {/* <!-- about --> */}
    //       <div id="n-about" 
    //       // style={{textAlign:'center'}}
    //       >
    //         <Link to="/about"  className="n_link" style={{textAlign:'center'}}>
    //           About
    //           <div className="about_dropsown">
                
    //           </div>
    //         </Link>

    //       </div>

    //       <div className="dropdown" id="n-services">
    //           {/* Services  */}

    //         <Link to="/services/appdev"  className="n_link">
    //           Services
    //         </Link>
    //       </div>

    //       <div id="n-portfolio" style={{textAlign:'center'}}>

    //         <Link to="/portfolio"  className="n_link" style={{textAlign:'center'}}>
    //           Portfolio
    //         </Link>

    //       </div>
    //       <div id="n-ourstory" style={{textAlign:'center'}}>

    //         <Link to="/ourstory"  className="n_link" style={{textAlign:'center'}}>
    //           Our Story
    //         </Link>

    //       </div>
    //     </div>

    //     <div id="contacto">
    //       <Link to="/contact" 
    //         duration={500}
    //         className="link link-contact">
    //           <p style={{ width: "160px" ,color:'#0090ee', textAlign:'center'}}>Contact &nbsp;Us</p>
    //       </Link>
    //     </div>

    //   </div>
    // </nav>

    <div className='container'>
    <div class={toggle ? 'button_container active' : 'button_container'} onClick={() => setToggle(!toggle)}>
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
    </div>
    <div class={toggle ? 'overlay open' : 'overlay'} id="overlay">
        <nav class="overlay-menu">
            <ul>
                <li>
                    <a href="#" className= 'overlay-menu-a'>
                        <div className='real'>Home</div>
                        <div className='cloned'>Home</div>
                    </a>
                </li>

                <li>
                    <a href="#" className='overlay-menu-a'>
                        <span className='real'>About Us</span>
                        <span className='cloned'>About Us</span>
                    </a>
                </li>

                <li onClick={() => setSubMenu(!subMenu)}>
                    <a href="#" className='overlay-menu-a'>
                        <div> <span className='real'>Services</span> </div>
                        <div><span className='cloned'>Services</span></div>
                    </a>
                </li>

                <li>
                    <a href="#" className='overlay-menu-a'>
                        <span className='real'>Portfolio</span>
                        <span className='cloned'>Portfolio</span>
                    </a>
                </li>

                <li>
                    <a href="#" className='overlay-menu-a'>
                        <span className='real'>Our Story</span>
                        <span className='cloned'>Our Story</span>
                    </a>
                </li>



                {/* <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Our Story</a></li> */}
                </ul>
            </nav>
          </div>
        </div>

  )
}