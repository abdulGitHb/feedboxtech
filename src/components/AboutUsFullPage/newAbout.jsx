import React from 'react';
import "./newAbout.css";
import Footer from '../Footer/Footer';
import a1 from  "../../image/achie1.png"
import a2 from "../../image/achie2.png";
import a3 from "../../image/achie3.png";
function NewAbout() {
  return (
    <>
    <div className='aditya-about-container'>  
    <h1 className='aditya-about-head'>About Us</h1>

    {/* achievements */}
    <div className='aditya-achievement'>
      <div className='aditya-achiebement-page'>
             <div className="aditya-image-div">
                <img src={a1} alt="" className="app-dev-img" />
            </div>
            <div className="aditya-text-div">
                <p className="app-dev-text">
                   <span>F</span>eedbox was founded by 2 engineers,Yash & Ayushi, who had a shared vision of starting a digital marketing company. The company's focus on revenue growth has helped many startups to scale their businesses and achieve their financial goals in the past 3 years.
                    <br />
                </p>
            </div>
      </div>
      <div className='aditya-achiebement-page aditya-achiebement-page1'>
            <div className="aditya-image-div">
                <img src={a2} alt="" className="app-dev-img" />
            </div>
            <div className="aditya-text-div">
                <p className="app-dev-text">
                   <span>F</span>eedbox was awarded the MP Young Achievers Award by the CM of Madhya Pradesh Shri Shivraj Singh Chouhan. We were among the top 10 businesses to receive a banner shoutout at the CM house in Bhopal.
                    <br />
                </p>
            </div>
            </div>
      <div className='aditya-achiebement-page'>
            <div className="aditya-image-div">
                <img src={a3} alt="" className="app-dev-img" />
            </div>
            <div className="aditya-text-div">
                <p className="app-dev-text">
                   <span>F</span>eedbox became the first startup in Indore to receive this accolade. 3 years in this industry, our consistency and hard work were met by the prestigious certificate which is still a dream for many budding businesses.
                    <br />
                </p>
            </div>
      </div>
    

    <div className='aditya-about-story'>
            <div className='aditya-story-text'>
                  Small or big, no matter what the size of your business is, save
                  time, save money, keep your systems secure and have a better than
                  ever eye on your analytics with our digital value creations for
                  your business. With transparency as our guiding light and innovations
                  as our driving force, we aim to satisfy all our customers, by offering
                  them a wide range of services to choose from.
                  Becoming the first start up in Indore to win the Super Startups 
                  award was the first push in this direction. The feeling of knowing 
                  that we could make such an incredible difference in a brand's 
                  performance, in such a short span of time, prompted us to set in
                  motion what would one day be known as Feedbox tech. 
            </div>
        


              {/* about us story */}
              
                <div className="aditya-story-head">Our Story</div>
                <div className='aditya-story-text'> 
                    <div>
                    Every success story has a humble beginning. Ours was driven
                    by an aim to disrupt the status quo in the future of marketing! 
                    Our founder's journey goes back to 20XX, while he was still in 
                    college, promoting and marketing events and concerts in Indore.
                    He was training his juniors and working with them all the same 
                    to attain experience. <br/>
                    </div>
                    <div>
                    In his final year, Yash had IIM calls as well as placement offers
                    in several top notch companies across the country but he'd rather 
                    hustle to make his dream work than punch clock for someone else's.
                    The paucity of funds resulted him in taking up a temporary job in 
                    Indore to provide for his startup. Our now COO joined him around 
                    that time as an intern.
                    </div>
                </div>
                {/* about us story button */}
                <a href='/ourstory'><button className='story-btn'  type="button">Read Full Story</button></a>
              </div>
      
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default NewAbout