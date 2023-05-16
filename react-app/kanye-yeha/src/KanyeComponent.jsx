import React from 'react';
import Quotes from "./Quotes";
import ReactAudioPlayer from 'react-audio-player'



function KanyeComponent(props) {
    return (
        <div className="container">
          <img src="https://assets.vogue.com/photos/633a6fbd4956fb0b77008c17/4:3/w_1920,c_limit/Kanye-West-Paris-Couture-FW21-Shows-Photographed-by-Acielle---Styledumonde.jpg" alt="kanye"></img>
          <Quotes />
          <button className="btn btn-warning mt-3 mb-3">Let me talk!</button>
          <button className="btn btn-warning mt-3 mb-3">Give me another!</button>
          <ReactAudioPlayer
            className="audio-player"
            src="https://storage.googleapis.com/vocodes-public/tts_inference_output/b/7/4/vocodes_b74403d8-35b3-421d-ae85-9cf9837c5a62.wav"
            /* autoPlay */ 
            controls
          />

          </div>
    );
}

export default KanyeComponent;