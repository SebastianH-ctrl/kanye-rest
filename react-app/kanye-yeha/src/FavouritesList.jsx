import React, { useEffect, useState } from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import KanyeComponent from './KanyeComponent';

function FavouritesList() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const kanyeFavs = JSON.parse(localStorage.getItem("kanyeFavs") || "[]");
        setFavorites(kanyeFavs);
    }, []);

    return (
        <div>
            {favorites.length ? (
                <Accordion>
                    {favorites.map((fav, index) => (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {`FAVOURITE ${index + 1}`}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <KanyeComponent quote={fav.quote} audiopath={fav.audiopath} />
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            ) : (
                <p>You haven't added any favourites yet.</p>
            )}
        </div>
    );
}

export default FavouritesList;
