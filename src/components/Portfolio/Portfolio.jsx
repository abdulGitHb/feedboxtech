import React, { useEffect } from 'react'
import './Portfolio.css'
// import Img from '../../image/holiday.jpg'
import kinnect from '../../image/kinect.png'
import Centaurus from '../../image/centaurus.png'
import FuteServices from '../../image/futeServices.png'
import SketchMyPlot from '../../image/sketchMyPlot.png'
import TintedTales from '../../image/tintedTales.png'
import IndependenceRock from '../../image/independenceRock.png'
import Qodeleaf from '../../image/qodeleaf.png'
import Tenet from '../../image/tenet.png'
import Runo from '../../image/runo.png'
import Nh7 from '../../image/nh7.png'
import MakeBelieve from '../../image/makeBelieve.png'
import Aryan from '../../image/aryan.png'
import Card from '../PortfolioCard/PortfolioCard'
import { Outlet, Link } from "react-router-dom";
import PortfolioAll from './PortfolioAll'
// import AOS from 'aos';
// import 'aos/dist/aos.css';


export default function services() {

    // useEffect(()=>{
    //     AOS.init({
    //         duration:2000,
    //         offset:350
    //     })
    // },[])

    return (
        <div className='p-container' id='portfolio'>

            <h1 className="portfolio_heading" data-aos="fade-up"
            >Portfolio</h1>

            <div className="portfolio_cards">
                <Card
                    aos="fade-up-right"
                    image={SketchMyPlot}
                    url="https://sketchmyplot.com/"
                    title="Sketch MY Plot"
                />
    
                <Card
                    aos="fade-up"
                    image={TintedTales}
                    url="https://tintedtales.in/"
                    title="Tintes Tales"
                />
                     <Card
                    aos="fade-up-left"
                    image={IndependenceRock}
                    url="https://independencerock.in/"
                    title="Independence Rock"
                />
                <Card
                    aos="fade-up-right"
                    image={Tenet}
                    url="https://tenetapp.in/"
                    title="Tenet"
                />
                <Card
                    aos="fade-up"
                    image={Runo}
                    url="https://runo.in/"
                    title="Runo"
                />
                <Card
                    aos="fade-up-left"
                    image={Nh7}
                    url="https://nh7.in/"
                    title="Bacardi"
                />
                <Card
                    aos="fade-up-right"
                    image={Aryan}
                    url="https://www.aryantiles.com/"
                    title="Aryan"
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
            </div>
                     <Link to='/Portfolio' className='portfolio_btn'>
                     View More
                    </Link>
            
        </div>

    )
}