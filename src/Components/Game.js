import React from "react";
import { Link } from "react-router-dom";

import Board from "./Board";


export default function Game({ deckSize }) {
    function renderOptions() {
        const deckSizes = [6, 8, 10, 12, 14, 16, 18, 20];
        const option = deckSizes.map(size => {
            return (size === 20) ?
            <option key={`deck-${size}`} value={size} defaultValue>{size}</option> :
            <option key={`deck-${size}`} value={size}>{size}</option>
        });
        return option;
    }

    return (
        <div className="game-div content">
            <div className="menu-div">
                <p>Deck Size</p>
                <select className="deck-size-selector">
                    {renderOptions()}
                </select>
                <button className="menu-button button">Start New Game</button>
                <Link to="/rules">Read rules</Link>
            </div>
            <Board deckSize={deckSize}/>
        </div>
    );
}