import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import img18 from "../../image/a18.png";
function ParallaxDemo() {
  return (
    <>
   <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
     <ParallaxBannerLayer image="../../image/a18.png" speed={-20} />
    </ParallaxBanner>
    </>
  )
}

export default ParallaxDemo