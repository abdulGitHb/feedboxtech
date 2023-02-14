import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import './NewNav.css'

function NewNav() {
    const [toggle, setToggle] = useState(false);
    const selectedPage= window.location.pathname;
    // console.log(selectedPage);
    const navLinks= document.querySelectorAll('nav a');
    navLinks.forEach(element => {
        if(element.href.includes(`${selectedPage}`)){
            console.log(`selected : ${selectedPage}`);
            element.classList.add('active');
        }
    });

  return (
    <div className='container'>
        <div className={toggle ? 'button_container active' : 'button_container'} onClick={() => setToggle(!toggle)}>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </div>
    <div className={toggle ? 'overlay open' : 'overlay'} id="overlay">
        <nav className="overlay-menu">
            <ul>
                <li>
                    <a id='nav_home'  href="/" className= 'overlay-menu-a'>
                        <div className='real'>Home</div>
                        <div className='cloned'>Home</div>
                    </a>
                </li>

                <li>
                    <a id='nav_about' href="/about" className='overlay-menu-a'>
                        <span className='real'>About Us</span>
                        <span className='cloned'>About Us</span>
                    </a>
                </li>

                <li>
                    <a id='nav_services' href="/services/webdev" className='overlay-menu-a'>
                        <div> <span className='real'>Services</span> </div>
                        <div><span className='cloned'>Services</span></div>
                    </a>
                </li>

                <li>
                    <a id='nav_portfolio' href="/Portfolio" className='overlay-menu-a'>
                        <span className='real'>Portfolio</span>
                        <span className='cloned'>Portfolio</span>
                    </a>
                </li>

                <li>
                    <a id='nav_ourstory' href="/ourstory" className='overlay-menu-a'>
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

export default NewNav;