import React, { useEffect } from 'react'
import './Portfolio.css'
// import Img from '../../image/holiday.jpg'
import kinnect from '../../image/kinect.png'
import Centaurus from '../../image/centaurus.png'
import FuteServices from '../../image/futeServices.png'
import Qodeleaf from '../../image/qodeleaf.png'
import Card from '../Card/Card'
// import AOS from 'aos';
import 'aos/dist/aos.css';


export default function services() {

    // useEffect(()=>{
    //     AOS.init({
    //         duration:2000,
    //         offset:350
    //     })
    // },[])

    return (
        <div className='p-container' id='portfolio'>

            <h1 className="portfolio_heading" data-aos="flip-left"
            >Portfolio</h1>

            <div className="portfolio_cards">
                <Card
                    // aos="fade-up-right"
                    image={kinnect}
                    url="https://www.kinnectonline.com/"
                    title="Kinnect"
                />
                {/* <Card
                    aos="fade-up"
                    image={Centaurus}
                    url="https://webcode.codezesk.com/centaurus/"
                    title="Centaurus"
                />
                <Card
                    aos="fade-up-left"
                    image={FuteServices}
                    url="https://www.futeservices.com/"
                    title="FuteServices"
                />
                <Card
                    aos="fade-up-right"
                    image={Qodeleaf}
                    url="https://qodeleaf.com/"
                    title="Qodeleaf"
                />
                <Card
                    aos="fade-up"
                    image={Qodeleaf}
                    url="https://qodeleaf.com/"
                    title="Qodeleaf"
                />
                <Card
                    aos="fade-up-left"
                    image={FuteServices}
                    url="https://www.futeservices.com/"
                    title="FuteServices"
                />
                <Card
                    aos="fade-up-right"
                    image={Qodeleaf}
                    url="https://toka.peerduck.com/crypto-startup/"
                    title="Centaurus"
                />
                <Card
                    aos="fade-up"
                    image={Qodeleaf}
                    url="https://qodeleaf.com/"
                    title="Qodeleaf"
                />
                <Card
                    aos="fade-up-left"
                    image={FuteServices}
                    url="https://www.futeservices.com/"
                    title="FuteServices"
                /> */}

            </div>

        </div>

    )
}