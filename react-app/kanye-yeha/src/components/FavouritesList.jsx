import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./css/accordionStyle.css";
import KanyeComponent from "./KanyeComponent";

function FavouritesList() {
  const [favorites, setFavorites] = useState([]);
  //Useeffect to get from local storage and se the array of favorites
  useEffect(() => {
    const kanyeFavs = JSON.parse(localStorage.getItem("kanyeFavs") || "[]");
    setFavorites(kanyeFavs);
  }, []);
  //Method to remove a favorite from the localStorage
  const removeFavorite = (fav) => {
    const favoritesList = favorites.filter(item => item !== fav)
    setFavorites(favoritesList);
    localStorage.setItem("kanyeFavs", JSON.stringify(favoritesList));
  
  };
  
  return (
    <div>
      {favorites.length ? (
        <Accordion>
          {favorites.map((fav, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{fav.quote}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {console.log(fav.audioPath)}
                <div className="delete-container">
                  <button type="button" className="btn btn-danger" id="delete-button"
                    onClick={() => removeFavorite(fav)}
                  >x</button>
                </div>
                <KanyeComponent
                  quote={fav.quote}
                  audioPath={fav.audioPath}
                  showControls={false}
                  autoPlayAudio={false}
                />
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <p className="title">You haven't added any favourites yet.</p>
      )}
    </div>
  );
}

export default FavouritesList;
