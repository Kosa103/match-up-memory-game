import React from "react";

import StatusBar from "./StatusBar";
import Card from "./Card";


// includes main game logic
export default function Board({ deck }) {
    const cardStates = {
        facedown: "facedown",
        revealed: "revealed",
        found: "found"
    };
    const initRecordData = {
        6: "none",
        8: "none",
        10: "none",
        12: "none",
        14: "none",
        16: "none",
        18: "none",
        20: "none"
    };

    const [liveDeck, setLiveDeck] = React.useState(deck);
    const [revealedCards, setRevealedCards] = React.useState([]);
    const [victory, setVictory] = React.useState(false);
    const [currentTries, setCurrentTries] = React.useState(0);
    const [bestGame, setBestGame] = React.useState(() => {
        const record = localStorage.getItem("matchUpGameRecords");
        if (record !== null) {
            const parsedRecord = JSON.parse(record);
            return parsedRecord[liveDeck.length.toString()];
        } else {
            localStorage.setItem("matchUpGameRecords", JSON.stringify(initRecordData));
            return "none";
        }
    });


    // main game logic. Progresses by a click on a card
    function clickedCard(selectedCard) {
        const newDeck = [...liveDeck]
        const newRevealedCards = [...revealedCards];

        if (newRevealedCards.length === 2) {
            for (const card of newDeck) {
                if (card.state === cardStates.revealed) {
                    card.state = cardStates.facedown;
                    setLiveDeck(newDeck);
                    setRevealedCards([]);
                }
            }
        } else {
            for (const card of newDeck) {
                if (card.id === selectedCard.id && card.state === cardStates.facedown) {
                    card.state = cardStates.revealed;
                    newRevealedCards.push(card);

                    if (newRevealedCards.length === 2) {
                        if (newRevealedCards[0].type === newRevealedCards[1].type) {
                            let gameOver = true;
                            for (const card of newDeck) {
                                if (card.id === newRevealedCards[0].id || card.id === newRevealedCards[1].id) {
                                    card.state = cardStates.found;
                                }
                            }
                            for (const card of newDeck) {
                                if (card.state !== cardStates.found) {
                                    gameOver = false;
                                }
                            }

                            if (gameOver) {
                                setVictory(true);
                            }
                            setLiveDeck(newDeck);
                            setRevealedCards([]);
                            setCurrentTries(currentTries + 1);
                        } else {
                            setLiveDeck(newDeck);
                            setRevealedCards(newRevealedCards);
                            setCurrentTries(currentTries + 1);
                        }
                    } else {
                        setLiveDeck(newDeck);
                        setRevealedCards(newRevealedCards);
                    }
                }
            }
        }
    }

    function renderBoard() {
        const board = liveDeck.map(card =>
            <Card
                key={`key-${card.id}`}
                card={card}
                cardStates={cardStates}
                clickedCard={card => clickedCard(card)}
            />);
        return board;
    }

    React.useEffect(() => {
        const record = localStorage.getItem("matchUpGameRecords");
        if (record !== null) {
            const parsedRecord = JSON.parse(localStorage.getItem("matchUpGameRecords"));
            setBestGame(parsedRecord[deck.length.toString()]);
        } else {
            localStorage.setItem("matchUpGameRecords", JSON.stringify(initRecordData));
            setBestGame("none");
        }
        
        setLiveDeck(deck);
        setRevealedCards([]);
        setVictory(false);
        setCurrentTries(0);
    }, [deck]);

    React.useEffect(() => {
        if (victory) {
            const record = localStorage.getItem("matchUpGameRecords");
            if (record !== null) {
                const parsedRecord = JSON.parse(localStorage.getItem("matchUpGameRecords"));
                if (parsedRecord[liveDeck.length.toString()] === "none") {
                    parsedRecord[liveDeck.length.toString()] = currentTries;
                    localStorage.setItem("matchUpGameRecords", JSON.stringify(parsedRecord));
                    setBestGame(currentTries);
                } else if (parsedRecord[liveDeck.length.toString()] > currentTries) {
                    parsedRecord[liveDeck.length.toString()] = currentTries;
                    localStorage.setItem("matchUpGameRecords", JSON.stringify(parsedRecord));
                    setBestGame(currentTries);
                }
            } else {
                localStorage.setItem("matchUpGameRecords", JSON.stringify(initRecordData));
            }
        }
    }, [victory]);

    return (
        <div className="board-extended-div">
            <StatusBar currentTries={currentTries} bestGame={bestGame} />
            <div className="board-div">
                {renderBoard()}
            </div>
        </div>
    );
}