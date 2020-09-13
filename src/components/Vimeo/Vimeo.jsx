import React, {useState} from 'react'

import ReactPlayer from "react-player";
import "./Vimeo.scss";

const Vimeo = () => {
const [play, setPlay] = useState(false);

  return (
    <div className="Vimeo">
      <div className="Vimeo__OuterWrapper">
        <div className="wrapper"> 
          <ReactPlayer url="https://player.vimeo.com/video/202660709?portrait=0" className="player" playing={play} muted loop="true" pip="false" width='177%'
          height='100%'
    />
        </div>
      </div>
      <div className="Vimeo__ButtonWrapper">
        <a href="#modal" className="Vimeo__Button Vimeo__Button--Modal">
          Modal
        </a>
        <a className="Vimeo__Button Vimeo__Button--Play" onClick={() => setPlay(!play)}>
          {play ? "Pause" : "Play"}
        </a>
      </div>

      <div id="modal" className="Vimeo__Modal">
        <a href="#" className="Vimeo__Close">&times;</a>
      </div>
      <a href="#" className="Vimeo__Backdrop"></a>
{/* <iframe src="https://player.vimeo.com/video/202660709?portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/202660709">Paradise Waterfall</a> from <a href="https://vimeo.com/kreolyab">Christian CUVELIER</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
      
    </div>
  )
}

export default Vimeo
