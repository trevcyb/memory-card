import React, { useEffect, useState } from "react";
import Card from "./Card";
import blueeyes from "./images/blueeyes.jpg";
import darkmagician from "./images/darkmagician.jpg";
import kuriboh from "./images/kuriboh.png";
import obelisk from "./images/obelisk.jpg";
import ra from "./images/ra.jpg";
import redeyes from "./images/redeyes.jpg";
import relinquished from "./images/relinquished.png";
import slifer from "./images/slifer.jpg";


const Display = (props) => {
  const { gameLogic, score, highScore } = props;

  let images = [
    {
      name: "Blue Eyes White Dragon",
      imagesrc: blueeyes
    },
    {
      name: "Dark Magician",
      imagesrc: darkmagician
    },
    {
      name: "Red Eyes Black Dragon",
      imagesrc: redeyes
    },
    {
      name: "Kuriboh",
      imagesrc: kuriboh
    },
    {
      name: "Obelisk the Tormentor",
      imagesrc: obelisk
    },
    {
      name: "The Winged Dragon of Ra",
      imagesrc: ra
    },
    {
      name: "Relinquished",
      imagesrc: relinquished
    },
    {
      name: "Slifer the Sky Dragon",
      imagesrc: slifer
    }
  ];

  const [cards, setCards] = useState(images);


  const shuffle = (newCards) => {
    for (let i = 0; i < newCards.length; i++) {
      let randomNo = Math.floor(Math.random() * i);
      [newCards[randomNo], newCards[i]] = [newCards[i], newCards[randomNo]];
    }
  }

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
  }, [score, highScore]);


  return (
    <div>
    {cards.map((card) => (
      <Card card={card} key={card.name} gameLogic={gameLogic} />
    ))}
    </div>
  )
};

export default Display;


