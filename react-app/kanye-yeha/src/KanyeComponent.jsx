import React, { useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player'

function KanyeComponent(props) {
    const kanyeImgs = [require('./images/kanye1.jpg'), require('./images/kanye2.jpg'), require('./images/kanye3.jpg'), require('./images/kanye4.jpg'), require('./images/kanye5.jpg')]
    const audioPlayer = useRef();

    const handlePlay = () => {
      audioPlayer.current.audioEl.current.play();
    };

    const handleNewQuote = () => {
      props.getRequest();
    };

    console.log(kanyeImgs[0])
    console.log((Math.random() * 5) - 1);
    return (
        <div className="container" id='innerKanye'>
            <div className='star-container'>

          <button className='btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
          </button>
            </div>
          <img className='kanyeImg' src={kanyeImgs[Math.floor((Math.random() * 5))]} alt="kanye"></img>
          <div className="blockquote-wrapper">
            <div className="blockquote">
                <h1>
                {props.quote}
                </h1>
                <h4>&mdash; Kanye West - <em>Twitter user</em></h4>
            </div>
        </div>
          <div>
             <button className="btn btn-warning mt-4 mb-3 ml-3" onClick={handlePlay}>Let me talk!</button>
             <button className="btn btn-warning mt-4 mb-3 ml-3" onClick={handleNewQuote}>Give me another!</button>
          </div>

          <ReactAudioPlayer
            ref={audioPlayer}
            className="audio-player"
            src={props.audioPath}
            autoPlay 
            controls
          />

          </div>
    );
}

export default KanyeComponent;