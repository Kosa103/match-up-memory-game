import React from "react";


export default function StatusBar({ currentTries, bestGame }) {
    return(
        <div className="status-bar-div">
            <div className="current-tries status">
                <p>Current tries: <strong>{currentTries}</strong></p>
            </div>
            <div className="best-try status">
                <p>Best:</p>
                <p>{bestGame}</p>
            </div>
            <div className="restart-game status">
                <button className="restart-button">RESTART</button>
            </div>
        </div>
    );
}