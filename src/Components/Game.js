import React from "react";
import { Link } from "react-router-dom";

import Board from "./Board";


export default function Game() {
    return (
        <div className="game-div content">
            <div className="menu-div">
                <div className="left-menu-div">
                    <option className="deck-option"></option>
                </div>
                <div className="right-menu-div">
                    <button className="menu-button button">New Game</button>
                    <Link to="/rules">Read rules</Link>
                </div>
            </div>
            <Board />
        </div>
    );
}