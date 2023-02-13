import React, { useState, useEffect } from 'react'
import NavBarResp from '../Navbar2/NavBarResp'
import client_video from '../../image/client_video.mp4'
import begining_image from '../../image/begining_image.jpeg'
import new_office from '../../image/new_office.jpeg'
import pandemic_phase from '../../image/pandemic_phase.jpeg'
import awards from '../../image/awards.jpeg'
import './OurStory2.css'
import $ from 'jquery'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { HiArrowLongRight } from 'react-icons/hi2'

const OurStory = () => {
    // const ref = useRef()
    const [page_no, setpage_no] = useState(1)
    const [winheight, setwinheight] = useState(0)
    const lastScroll = 0;

    //for parallax effect
    const onScroll = () => {

            const winheight = window.pageYOffset
            console.log(winheight)
    
            $(document).ready(function () {
    
                //web view
                if (winheight >= 200 && winheight<1000) {
                    $("#pandemic").addClass("showPandemic")
                    setpage_no(2)
                    console.log(page_no)
                }
                if (winheight < 200) {
                    $("#pandemic").removeClass("showPandemic");
                    setpage_no(1)
                }
                if (winheight >= 1000 && winheight<1800) {
                    $("#first_client").addClass("showClient");
                    setpage_no(3)
                }
                if (winheight < 1000 && winheight>200) {
                    $("#first_client").removeClass("showClient");
                    setpage_no(2)
                }
                if (winheight >= 1800 && winheight<2400) {
                    $("#newOffice").addClass("showOffices");
                    setpage_no(4)
                }
                if (winheight < 1800 && winheight>1000) {
                    $("#newOffice").removeClass("showOffices");
                    setpage_no(3)
                }
                if (winheight >= 2400) {
                    $("#awards").addClass("showAwards");
                    setpage_no(5)
                }
                if (winheight < 2400) {
                    $("#awards").removeClass("showAwards");
                    // setpage_no(4)
                }

    })
}

    useEffect(() => {
        // clean up code

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        // window.addEventListener('scroll', CursorChange, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    //handle page buttons
    const handlePrevPage = () => {
        if (page_no > 1) {
            setpage_no(page_no - 1)
            // setwinheight(winheight - 601);

            if (page_no === 2) {
                $("#pandemic").removeClass("showPandemic");
                // setpage_no(1)
            }
            else if (page_no === 3) {
                $("#first_client").removeClass("showClient");
                // setpage_no(2)
            }
            else if (page_no === 4) {
                $("#newOffice").removeClass("showOffices");
                // setpage_no(3)
            }
            else if (page_no === 5) {
                $("#awards").removeClass("showAwards");
                // setpage_no(4)
            }

        }
    }
    const handleNextpage = () => {
        if (page_no < 5) {
            setpage_no(page_no + 1);
            // setwinheight(winheight + 600);

            console.log(page_no)

            if (page_no === 1) {
                $("#pandemic").addClass("showPandemic");
                // setpage_no(2)
            }
            if (page_no === 2) {
                $("#first_client").addClass("showClient");
                // setpage_no(3)
            }
            if (page_no == 3) {
                $("#newOffice").addClass("showOffices");
                // setpage_no(4)
            }
            if (page_no == 4) {
                $("#awards").addClass("showAwards");
                // setpage_no(5)
            }
        }
    }
    useEffect(() => {
        // handlepage()
    }, [page_no,winheight])



    // video play button
    $(document).ready(function () {
        $('.play').click(function () {
            if ($(this).parent().prev().get(0).paused) {
                $(this).parent().prev().get(0).play();
                // $(this).parent().prev().removeClass('blurEffect');
                $('.content').hide();
            }
        });

        // $('.video').on('ended', function () {
        //     $(this).addClass('blurEffect');
        //     $('.content').show();
        // });
    })

    return (
        <>
            <NavBarResp />

            <div id="main" className="scroll-wrapper">
                <div id="main-content" className="main-content">
                    <div id='begining' className='story-container-hld story_begining' >
                        <div className="storyCard-container " >
                            <div className="title_and_content_hld" >
                                <h1>The Beginning  of  it  All</h1>
                                <p>
                                    Every success story has a humble beginning. Ours was driven by an aim to disrupt the status quo in the future of marketing!
                                    <br /><br />
                                    Our founder's journey goes back to 2019, while he was still in college, promoting and marketing events and concerts in Indore. He was training his juniors and working with them all the same to attain experience. In his final year, Yash had IIM calls as well as placement offers in several top notch companies across the country but he'd rather hustle to make his dream work than punch clock for someone else's. The paucity of funds resulted him in taking up a temporary job in Indore to provide for his startup. Our now COO joined him around that time as an intern. While still in college, Aayushi decided to look after the affairs of the company during the day while Yash sir ran the operations at dawn.  This is the arrangement they worked out from April to October 2019.

                                </p>
                            </div>
                            <div className="story_image_hld" >
                                <img className="imgPan" src={begining_image} alt="img" />
                            </div>
                        </div>
                        {/* <div className="white_layer"></div> */}
                    </div>
                    <div id="pandemic" className='story-container-hld story_pandemic_phase'>
                        <div className="storyCard-container" >
                            <div className="story_image_hld" >
                                <img className="imgPan" src={pandemic_phase} alt="img" />
                            </div>
                            <div className="title_and_content_hld" >
                                <h1>Pandemic Phase</h1>
                                <p>Then on the 23rd of October 2019, they together opened their first office at Sapna Sangeeta, Indore. This opening was followed by them working out events in Indore as marketing partners. One of these was the Google Tech Fest, the biggest Tech Fest to be held in Indore. This stint brought them momentum and widespread appreciation. By this point Feedbox already had some prominent local businesses of indore as their clients. The happiness was not for long as COVID-19 started and just like all other businesses, theirs too suffered a heavy blow due to the pandemic. Their business operations were shut down completely and the revenue dropped to 0 but they still decided to not layoff any of their employees and continued to pay them for their work.</p>
                            </div>

                        </div>
                        {/* <div className="white_layer odd_layer"></div> */}
                    </div>


                    {/* <div id="main-content" className="main-content" > */}
                    <div id='first_client' className='story-container-hld story_first_client' >
                        <div className="storyCard-container" >
                            <div className="title_and_content_hld" >
                                <h1>Our First International Client</h1>
                                <p>They started reaching out to international and verified businesses shortly after and gave them tremendous results in growth marketing and sales.
                                    In a couple of months they'd increased their team size considerably. One and a half years in Corona, they were well set, working with Series A, Series B firms, as well as international clients from Dubai and Canada.
                                </p>
                            </div>
                            <div className=" story_image_hld" >
                                {/* <img className="imgPan" src={story} alt="img" /> */}
                                <video className="video ">
                                    <source src={client_video} type="video/webm" />
                                </video>
                                <div className="content">
                                    <div class="play">►</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="white_layer"></div> */}
                    </div>
                    <div id='newOffice' className='story-container-hld story_newOffice'>
                        <div className="storyCard-container" >
                            <div className="story_image_hld" >
                                <img className="imgPan" src={new_office} alt="img" />
                            </div>
                            <div className="title_and_content_hld" >
                                <h1>New Offices</h1>
                                <p>Following this, they opened their new office in Bhawarkuwan, Indore. Pandemic brought Feedbox to square one, but without losing heart, they started working to build a local team, calling employees from nearby towns to join them in working in office. They opened an SEO office in Jodhpur in the July of 22. Their existing office was small so they decided to move to their 3rd office which has a capacity to host 50 people. This was in October, exactly 3 years after they opened their first office.</p>
                            </div>

                        </div>
                        {/* <div className="white_layer odd_layer"></div> */}
                    </div>

                    {/* </div> */}
                    {/* <div id="main-content" className="main-content" > */}
                    <div id='awards' className='story-container-hld story_award'>

                        <div className="storyCard-container" >
                            <div className="title_and_content_hld" >
                                <h1>Awards and Achievements</h1>
                                <p>In the Feb of 2022, they received the acclaimed Indore Super Startups Award from the Central Minister and Indore Sansad for their outstanding work with multiple international, series A, series B firms, and media personalities. But they didn't rest on this laurel.
                                    Their innovative solutions, excellent customer service, and the spirit of pushing boundaries was met by the overwhelming MP Young Achievers Award presented to them by the CM of Madhya Pradesh Shri Shivraj Singh Chauhan himself. Feedbox was among the top 10 start-ups to receive a banner shoutout in the CM house.
                                </p>
                            </div>
                            <div className="story_image_hld" >
                                <img className="imgPan" src={awards} alt="img" />
                            </div>
                        </div>
                        {/* <div className="white_layer"></div> */}
                    </div>
                </div>


                {/* next and previous buttons */}
                <div className="story_next_pre_buttons_hld">
                    <div className="story_next_pre_buttons">
                       <div  className="story_prev_button" onClick={handlePrevPage}>
                            {page_no>1 && <HiArrowLongLeft size={35} className="prev_arrow" />}
                        </div>
                        <div className="story_page_no">
                            {page_no}/5
                        </div>
                        <div  className="story_prev_button" onClick={handleNextpage}>
                            {page_no<5 && <HiArrowLongRight size={35} className="next_arrow" />}
                        </div>
                    </div>
                </div>
            </div>

            




            {/* mobile view layout */}

            {/* <div className="story_mobile_view">

                    <div id='mobile_begining' className="storyCard-container_mobile ">
                        <div className="story_image_hld_mobile" >
                            <img className="imgPan" src={story} alt="img" />
                        </div>
                        <div className="title_and_content_hld_mobile" >
                        <h1>The Beginning Of It All</h1>
                                <p>
                                    Every success story has a humble beginning. Ours was driven by an aim to disrupt the status quo in the future of marketing!
                                    <br /><br />
                                    Our founder's journey goes back to 20XX, while he was still in college, promoting and marketing events and concerts in Indore. He was training his juniors and working with them all the same to attain experience. In his final year, Yash had IIM calls as well as placement offers in several top notch companies across the country but he'd rather hustle to make his dream work than punch clock for someone else's. The paucity of funds resulted him in taking up a temporary job in Indore to provide for his startup. Our now COO joined him around that time as an intern. While still in college, Aayushi decided to look after the affairs of the company during the day while Yash sir ran the operations at dawn.  This is the arrangement they worked out from April to October 2019.

                                </p>
                        </div>
                    </div>
               
                    <div id='pandemic_mobile' className="storyCard-container_mobile story_pandemic_phase_mobile">
                        <div className="story_image_hld_mobile" >
                            <img className="imgPan" src={story} alt="img" />
                        </div>
                        <div className="title_and_content_hld_mobile" >
                        <h1>Pandemic Phase</h1>
                                <p>Then on the 23rd of October 2019, they together opened their first office at Sapna Sangeeta, Indore. This opening was followed by them working out events in Indore as marketing partners. One of these was the Google Tech Fest, the biggest Tech Fest to be held in Indore. This stint brought them momentum and widespread appreciation. By this point Feedbox already had some prominent local businesses of indore as their clients. The happiness was not for long as COVID-19 started and just like all other businesses, theirs too suffered a heavy blow due to the pandemic. Their business operations were shut down completely and the revenue dropped to 0 but they still decided to not layoff any of their employees and continued to pay them for their work.</p>
                        </div>
                    </div>
               
                    <div id='first_client_mobile' className="storyCard-container_mobile story_first_client_mobile">
                        <div className="story_image_hld_mobile" >
                            <img className="imgPan" src={story} alt="img" />
                        </div>
                        <div className="title_and_content_hld_mobile" >
                        <h1>Our First International Client</h1>
                            <p>They started reaching out to international and verified businesses shortly after and gave them tremendous results in growth marketing and sales.
                                In a couple of months they'd increased their team size considerably. One and a half years in Corona, they were well set, working with Series A, Series B firms, as well as international clients from Dubai and Canada.
                            </p>
                        </div>
                    </div>
            
                    <div id='offices_mobile' className="storyCard-container_mobile story_newOffice_mobile">
                        <div className="story_image_hld_mobile" >
                            <img className="imgPan" src={story} alt="img" />
                        </div>
                        <div className="title_and_content_hld_mobile" >
                        <h1>New Offices</h1>
                            <p>Following this, they opened their new office in Bhawarkuwan, Indore. Pandemic brought Feedbox to square one, but without losing heart, they started working to build a local team, calling employees from nearby towns to join them in working in office. They opened an SEO office in Jodhpur in the July of 22. Their existing office was small so they decided to move to their 3rd office which has a capacity to host 50 people. This was in October, exactly 3 years after they opened their first office.</p>
                        </div>
                    </div>
               
                    <div id='awards_mobile' className="storyCard-container_mobile story_award_mobile">
                        <div className="story_image_hld_mobile" >
                            <img className="imgPan" src={story} alt="img" />
                        </div>
                        <div className="title_and_content_hld_mobile" >
                        <h1>Awards And Achievements</h1>
                            <p>In the Feb of 2022, they received the acclaimed Indore Super Startups Award from the Central Minister and Indore Sansad for their outstanding work with multiple international, series A, series B firms, and media personalities. But they didn't rest on this laurel.
                                Their innovative solutions, excellent customer service, and the spirit of pushing boundaries was met by the overwhelming MP Young Achievers Award presented to them by the CM of Madhya Pradesh Shri Shivraj Singh Chauhan himself. Feedbox was among the top 10 start-ups to receive a banner shoutout in the CM house.
                            </p>
                        </div>
                    </div>
                
                    </div> */}


            {/* <Footer /> */}
        </>
    )
}

export default OurStory;
