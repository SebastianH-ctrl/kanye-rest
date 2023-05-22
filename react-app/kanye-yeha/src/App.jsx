import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import KanyeComponent from "./KanyeComponent";
import MaKanyeFavorites from "./MaKanyeFavorites";

const App = () => {
  const [data, setData] = useState();
  const [gif, setGif] = useState();
  const [showQuote, setShowQuote] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/gif", {}).then(function (response) {
      console.log(response);
      setGif(response.data.gif.downsized.url);
    });
    console.log(data);
  }, [data]);

  const getRequest = () => {
    setShowButton(false);
    setData(null);
    setShowQuote(!showQuote);
    setIsLoading(true);
    axios.get("http://localhost:3000/tts", {}).then(function (response) {
      console.log(response);
      setData(response.data);
      setShowQuote(true);
      setIsLoading(false);
    });
  };

  return (
    <div className="container">
      <div className="container" id="centeredDiv">
        <h1 className="title">Kanye Rest</h1>
        <button
          className="styledButton"
          type="button"
          style={{
            display: showButton ? "block" : "none",
          }}
          onClick={() => getRequest()}
        >
          Show quote
        </button>
      </div>
      {showQuote ? (
        <div className="container">
          {data ? (
            <KanyeComponent
              quote={data.quote}
              audioPath={data.audioPath}
              getRequest={getRequest}
            />
          ) : null}
        </div>
      ) : null}
      {isLoading ? (
        <div className="container">
          <h2 className="title">You have to wait, Kanye is late...</h2>
          <img className="kanyeGif" alt="loading" src={gif} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
