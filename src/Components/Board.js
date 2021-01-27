import React from "react";

import StatusBar from "./StatusBar";
import Card from "./Card";


export default function Board({ deck }) {
    function renderBoard() {
        const board = deck.map(card => <Card key={`key-${card.id}`} card={card}/>);
        return board;
    }

    return (
        <div className="board-extended-div">
            <StatusBar />
            <div className="board-div">
                {renderBoard()}
            </div>
        </div>
    );
}