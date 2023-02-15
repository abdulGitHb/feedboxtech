import React, { useEffect } from 'react'
import './Portfolio.css'
import Centaurus from '../../image/centaurus.png'
import FuteServices from '../../image/futeServices.png'
import SketchMyPlot from '../../image/sketchMyPlot.png'
import TintedTales from '../../image/tintedTales.png'
import IndependenceRock from '../../image/independenceRock.png'
import Gallant_jwellery from '../../image/gallent_jwellery.png'
import Tenet from '../../image/tenet.png'
import Aryan from '../../image/aryan.png'

import Runo from '../../image/runo.png'
import Card from '../PortfolioCard/PortfolioCard'
import { Outlet, Link } from "react-router-dom";
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

            <h1  className="section_heading" data-aos="fade-up"
            >Portfolio</h1>

            <span data-aos="fade-up"
                className='portfolio_subHeading'>Projects that speak of our success ...</span>

            <div className="portfolio_cards">
                    <Card
                        aos="fade-up-right"
                        image={Centaurus}
                        url="https://webcode.codezesk.com/centaurus/"
                        title="Centaurus"
                    />

                    <Card
                        aos="fade-up-right"
                        image={Aryan}
                        url="https://www.aryantiles.com/"
                        title="Aryan"
                    />
                    <Card
                        aos="fade-up-left"
                        image={IndependenceRock}
                        url="https://independencerock.in/"
                        title="Independence Rock"
                    />
                    <Card
                        aos="fade-up-right"
                        image={TintedTales}
                        url="https://tintedtales.in/"
                        title="Tintes Tales"
                    />
                    <Card
                        aos="fade-up"
                        image={FuteServices}
                        url="https://www.futeservices.com/"
                        title="FuteServices"
                    />
                    <Card
                        aos="fade-up-left"
                        image={SketchMyPlot}
                        url="https://sketchmyplot.com/"
                        title="Sketch MY Plot"
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
                        image={Gallant_jwellery}
                        url="https://www.gallantjewelry.com/"
                        title="Gallant Jewelry"
                    />


            </div>
            <Link to='/Portfolio' className='portfolio_btn' data-aos="fade-up">
                View More
            </Link>

        </div>

    )
}