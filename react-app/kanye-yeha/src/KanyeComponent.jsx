import React, { useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player'

function KanyeComponent({ quote, audioPath, getRequest, showControls = true, autoPlayAudio = true }) {
    const kanyeImgs = [require('./images/kanye1.jpg'), require('./images/kanye2.jpg'), require('./images/kanye3.jpg'), require('./images/kanye4.jpg'), require('./images/kanye5.jpg')]
    const audioPlayer = useRef();
    const [isStarFilled, setIsStarFilled] = useState(false);
    const [kanyeImg, setKanyeImg] = useState(kanyeImgs[Math.floor(Math.random() * kanyeImgs.length)]);

    const handlePlay = () => {
        audioPlayer.current.audioEl.current.play();
    };

    const handleNewQuote = () => {
        getRequest();
    };

    const handleStarClick = () => {
      setIsStarFilled(!isStarFilled);
      let kanyeFavs = JSON.parse(localStorage.getItem('kanyeFavs')) || [];
  
      if (isStarFilled) {
          // Remove quote from favorites if the star is already filled
          kanyeFavs = kanyeFavs.filter(fav => quote !== quote);
      } else {
          // Add quote to favorites if the star is not filled
          kanyeFavs.push({quote: quote, audioPath: audioPath});
      }
  
      localStorage.setItem('kanyeFavs', JSON.stringify(kanyeFavs));
      console.log(JSON.parse(localStorage.getItem('kanyeFavs')));
    };
    
    return (
      <div className="container" id='innerKanye'>
          {showControls && (
            <div className='star-container'>
              <button onClick={handleStarClick} style={{background: 'none', border: 'none', outline: 'none'}}>
                  <svg width="20" height="20">
                      <polygon points="10,0.8 13,7.2 20,7.2 14,11.6 16,18.4 10,14.4 4,18.4 6,11.6 0,7.2 7,7.2" stroke="yellow" strokeWidth="1" fill={isStarFilled ? "yellow" : "none"} />
                  </svg>
              </button>
            </div>
          )}
          <img className='kanyeImg' src={kanyeImg} alt="kanye"></img>
          <div className="blockquote-wrapper">
              <div className="blockquote">
                  <h1>
                  {quote}
                  </h1>
                  <h4>&mdash; Kanye West - <em>Twitter user</em></h4>
              </div>
          </div>
          <div>
              <button className="btn btn-warning mt-4 mb-3 ml-3" onClick={handlePlay}>Let me talk!</button>
              {showControls && (
                <button className="btn btn-warning mt-4 mb-3 ml-3" onClick={handleNewQuote}>Give me another!</button>
              )}     
          </div>
          <ReactAudioPlayer
              ref={audioPlayer}
              className="audio-player"
              src={audioPath}
              autoPlay={autoPlayAudio}
              controls
          />
      </div>
    );
}

export default KanyeComponent;

