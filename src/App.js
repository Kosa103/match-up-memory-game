import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Rules from "./Components/Rules";
import Game from "./Components/Game";

import card0 from "./images/card0.png";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import card5 from "./images/card5.png";
import card6 from "./images/card6.png";
import card7 from "./images/card7.png";
import card8 from "./images/card8.png";
import card9 from "./images/card9.png";
import card10 from "./images/card10.png";


function App() {
  const cardImages = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

  const [deckSize, setDeckSize] = React.useState(6);
  const [deck, setDeck] = React.useState(() => {
    return shuffle(Array(deckSize).fill(null).map((elem, index) => {
      const card = {
        id: index + 1,
        image: cardImages[Math.ceil((index + 1) / 2)],
        facedownImage: card0
      };
      return card;
    }));
  });


  function buildDeck() {
    const realDeck = Array(deckSize).fill(null).map((elem, index) => {
      const card = {
        id: index + 1,
        image: cardImages[Math.ceil((index + 1) / 2)],
        facedownImage: cardImages[0]
      };
      return card;
    });
    setDeck(shuffle(realDeck));
  }

  function shuffle(arr) {
    function replaceCard(array, from, to) {
      const card = array.splice(from, 1);
      array.splice(to, 0, card[0]);
      return array;
    };

    const length = arr.length;
    let tempArr = arr;
    for (let i = 0; i < length * 2; i++) {
      const random1 = Math.floor(Math.random() * length);
      const random2 = Math.floor(Math.random() * length);
      tempArr = replaceCard(tempArr, random1, random2);
    }
    return tempArr;
  };

  React.useEffect(() => {
    buildDeck();
  }, [deckSize]);

  return (
    <Router>
      <div className="main-div">
        <Switch>
          <Redirect from="/" to="/rules" exact strict />
          <Route path="/rules" exact strict render={() => <Rules startNewGame={size => setDeckSize(Number(size))}/>} />
          <Route path="/game" exact strict render={() => <Game deck={deck} startNewGame={size => setDeckSize(Number(size))}/>} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
