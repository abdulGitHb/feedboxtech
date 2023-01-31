import React from 'react'
import Rocket from '../../image/rocket1.png'
// import ScriptTag from 'react-script-tag';
import '../Cursor/cursor2.css'
import {Helmet} from "react-helmet";
// import c_script from '../Cursor/some_script.js'

const cursor2 = () => {

  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                {/* <title>My Title</title> */}
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                <script src="../Cursor/some_script.js" type="text/javascript" />
            </Helmet>
       <div id="cursor" class="image"><img alt="Cursor Hand" src={Rocket} style="height: 50px; width: 50px;"/></div>
    </div>
  )
}

export default cursor2
