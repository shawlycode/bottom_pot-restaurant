import React, { useState, useRef } from 'react';

import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {


  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='app__video video__wrapper'>
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        controls={false}
        src={meal}
        bigPlayButtonCentered={true}
      >


      </video>
      <div className="video__overlay">
        <button onClick={togglePlay} >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  )
};
export default Intro;
