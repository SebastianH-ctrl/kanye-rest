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

  useEffect(() => {
    axios.get("http://localhost:3000/gif", {}).then(function (response) {
      console.log(response);
      setGif(response.data.gif.downsized.url);
    });
    console.log(data);
  }, []);

  const getRequest = () => {
    setShowQuote(!showQuote);
    axios.get("http://localhost:3000/tts", {}).then(function (response) {
      console.log(response);
      setData(response.data);
      setShowQuote(!showQuote);
    });
  };

  return (
    <div className="container">
      <div className="container" id="centeredDiv">
        <h1 className="title">Kanye Rest</h1>
        {showQuote ? null : (
          <button
          className="btn btn-warning mt-3 mb-3"
          type="button"
          onClick={() => getRequest()}
          >
            Show quote
          </button>
        )}
      </div>
      {showQuote ? (
        <div>
          {data ? (
            <KanyeComponent quote={data.quote} audioPath={data.audioPath} />
          ) : (
            <div>
              <h1>Loading</h1>
              <img alt="loading" src={gif} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default App;
