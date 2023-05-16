import React from 'react';
import ReactAudioPlayer from 'react-audio-player'
import star from './files/star.svg'
import starFilled from './files/star-fill.svg'

function KanyeComponent(props) {
    return (
        <div className="container" id='innerKanye'>
            <div className='star-container'>

          <button className='btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
          </button>
            </div>
          <img className='kanyeImg' src="https://assets.vogue.com/photos/633a6fbd4956fb0b77008c17/4:3/w_1920,c_limit/Kanye-West-Paris-Couture-FW21-Shows-Photographed-by-Acielle---Styledumonde.jpg" alt="kanye"></img>
          <div class="blockquote-wrapper">
            <div class="blockquote">
                <h1>
                Intuitive design happens when current knowledge is the same as the target knowledge.
                </h1>
                <h4>&mdash; Kanye West - <em>Twitter user</em></h4>
            </div>
        </div>
          <div>
             <button className="btn btn-warning mt-4 mb-3 ml-3">Let me talk!</button>
             <button className="btn btn-warning mt-4 mb-3 ml-3">Give me another!</button>
          </div>

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