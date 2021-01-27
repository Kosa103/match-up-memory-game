import React from "react";

import StatusBar from "./StatusBar";
import Card from "./Card";


export default function Board({ deckSize }) {
    function renderBoard() {
        const deckRepresentative = [];
        for (let i = 0; i< deckSize; i++) {
            deckRepresentative.push(i);
        }

        const board = deckRepresentative.map(key => <Card key={`key-${key}`}/>);
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