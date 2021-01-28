import React from "react";

import StatusBar from "./StatusBar";
import Card from "./Card";


export default function Board({ deck }) {
    const [liveDeck, setLiveDeck] = React.useState(deck);

    const cardStates = {
        facedown: "facedown",
        revealed: "revealed",
        found: "found"
    };


    function revealCard(clickedCard) {
        const newDeck = [...liveDeck];

        for (const card of newDeck) {
            if (card.id === clickedCard.id) {
                card.state = cardStates.revealed;
            }
        }
        setLiveDeck(newDeck);
    }

    function renderBoard() {
        const board = liveDeck.map(card => 
            <Card 
                key={`key-${card.id}`} 
                card={card}
                revealCard={card => revealCard(card)}
            />);
        return board;
    }

    React.useEffect(() => {
        setLiveDeck(deck);
    }, [deck]);

    return (
        <div className="board-extended-div">
            <StatusBar />
            <div className="board-div">
                {renderBoard()}
            </div>
        </div>
    );
}