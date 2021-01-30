import React from "react";


export default function StatusBar({ currentTries, bestGame, restartCommand }) {
    return(
        <div className="status-bar-div">
            <div className="current-tries status">
                <p className="info-text">Current tries: <span id="current-tries-value">{currentTries}</span></p>
            </div>
            <div className="best-game-div status">
                <p className="info-text">Best:</p>
                <p id="best-game-number">{bestGame}</p>
            </div>
            <div className="restart-game-div status">
                <button className="restart-button button" onClick={() => restartCommand()}>RESTART</button>
            </div>
        </div>
    );
}