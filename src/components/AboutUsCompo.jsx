import React from 'react'
import '../components/AboutUsFullPage/AboutUs.css';

function AboutUsCompo(props) {

    // console.log(props.detail.secData)
  return (
    <div>
        <h1>{props.detail.title}</h1>
        <div className='about-detail'>
            {
                props.detail.secData.map(dataa=>{
                    return <div>
                            <h5>{dataa.desc}</h5>
                        </div> 
                })
            }
        </div>
    </div>
  )
}

export default AboutUsCompo;