import React, { useEffect } from "react";
import { useState } from "react";
import "./css/App.css";
import axios from "axios";
import KanyeComponent from "./KanyeComponent";
import FavoritesList from "./FavouritesList";

/* The App acts as the head-component, handling the program flow and the API-calls using axios. */

const App = () => {
  /* A state that handles our fetched API-data */
  const [data, setData] = useState();
  const [gif, setGif] = useState();
  /* The following states handles the program flow and what is shown. */
  const [showQuote, setShowQuote] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);

  /* The useEffect makes a get-request to fetch a GIF when the application first starts. */

  useEffect(() => {
    axios.get("http://localhost:3000/gif", {}).then(function (response) {
      console.log(response);
      setGif(response.data.gif.downsized.url);
    });
    console.log(data);
  }, [data]);

  /* The function fetches a quote from our API, and then shows the sets the showQuote-state to true. */

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

  /* Returns the jsx for the App-component */
  return (
    <div className="container">
      <div className="container" id="centeredDiv">
        <h1 className="title">Kanye Rest</h1>
        <div className="buttonContainer">
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
          <button
            className="styledButton"
            style={{ backgroundColor: "#17a2b8" }}
            type="button"
            onClick={() => setShowFavourites(!showFavourites)}
          >
            {showFavourites ? "Hide" : "Show"} favourites
          </button>
        </div>
      </div>
      {/* Ternary expressions that conditionally renders our components based on the states. */}
      {showQuote && !showFavourites ? (
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
      {showFavourites ? <FavoritesList /> : null}
    </div>
  );
};

export default App;
