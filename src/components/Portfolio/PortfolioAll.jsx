import React, { useEffect } from 'react'
import './Portfolio.css'
// import Img from '../../image/holiday.jpg'
import Centaurus from '../../image/centaurus.png'
import FuteServices from '../../image/futeServices.png'
import SketchMyPlot from '../../image/sketchMyPlot.png'
import TintedTales from '../../image/tintedTales.png'
import IndependenceRock from '../../image/independenceRock.png'
import Qodeleaf from '../../image/qodeleaf.png'
import Tenet from '../../image/tenet.png'
import Runo from '../../image/runo.png'
import Nh7 from '../../image/nh7.png'
import OnFinance from '../../image/onFinance.png'
import MakeBelieve from '../../image/makeBelieve.png'
import Gallant_jwellery from '../../image/gallent_jwellery.png'
import Aryan from '../../image/aryan.png'
import Card from '../PortfolioCard/PortfolioCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer'


export default function PortfolioAll() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 10,
            delay: 0
        })
    }, [])

    return (
        <>
            <div className='p-container' id='portfolio' style={{ paddingTop: '150px' }}>

                <h1 className="portfolio_heading" data-aos="fade-out"
                >Portfolio</h1>

                <div className="portfolio_cards">
                    <Card
                        aos="fade-up-right"
                        image={Centaurus}
                        url="https://webcode.codezesk.com/centaurus/"
                        title="Centaurus"
                    />

                    <Card
                        aos="fade-up"
                        image={Nh7}
                        url="https://nh7.in/"
                        title="Bacardi"
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
                    <Card
                        aos="fade-up-right"
                        image={Aryan}
                        url="https://www.aryantiles.com/"
                        title="Aryan"
                    />

                    <Card
                        aos="fade-up"
                        image={OnFinance}
                        url="https://www.onfinance.in/"
                        title="OnFinance"
                    />
                    <Card
                        aos="fade-up-left"
                        image={MakeBelieve}
                        url="https://www.makebelieve.in/"
                        title="MakeBelieve"
                    />
                    <Card
                        aos="fade-up"
                        image={Qodeleaf}
                        url="https://qodeleaf.com/"
                        title="Qodeleaf"
                    />
                </div>

            </div>
            <Footer />
        </>

    )
}