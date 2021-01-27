import React from "react";


export default function StatusBar() {
    return(
        <div className="status-bar-div">
            <div className="current-tries status">
                <p>Current tries: <strong>0</strong></p>
            </div>
            <div className="best-try status">
                <p>Best:</p>
                <p>10</p>
            </div>
            <div className="restart-game status">
                <button className="restart-button">RESTART</button>
            </div>
        </div>
    );
}