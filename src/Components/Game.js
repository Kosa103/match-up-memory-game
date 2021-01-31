import React from "react";
import { useHistory } from "react-router-dom";

import Board from "./Board";

import evistaLogo from "../images/evistaLogo.png";


export default function Game({ deck, startNewGame, restartGame }) {
    const history = useHistory();
    const deckSizeInput = React.useRef(null);

    function renderOptions() {
        const deckSizes = [6, 8, 10, 12, 14, 16, 18, 20];
        const option = deckSizes.map(size => {
            return <option key={`deck-${size}`} value={size}>{size}</option>;
        });
        return option;
    }

    React.useEffect(() => {
        deckSizeInput.current.value = deck.length;
    }, [deck]);

    return (
        <div className="game-div content">
            <div className="menu-div">
                <div className="menu-left-div">
                    <img
                        src={evistaLogo}
                        alt="evistaLogo"
                        className="evista-logo"
                    />
                </div>
                <div className="menu-center-div">
                    <div className="menu-element-div">
                        <p className="info-text">Deck Size:</p>
                    </div>
                    <div className="menu-element-div">
                        <select defaultValue={12} className="deck-size-selector" ref={deckSizeInput}>
                            {renderOptions()}
                        </select>
                    </div>
                    <div className="menu-element-div">
                        <button 
                            className="menu-button button" 
                            onClick={() => startNewGame(deckSizeInput.current.value)}
                        >
                            START NEW GAME
                        </button>
                    </div>
                    <div className="menu-element-div">
                        <button 
                            onClick={() => history.push("/rules")} 
                            className="link-button button"
                        >
                            READ RULES
                        </button>
                    </div>
                </div>
                <div className="menu-right-div">
                    <img 
                        src={evistaLogo}
                        alt="evistaLogo"
                        className="evista-logo-hidden"
                    />
                </div>
            </div>
            <Board deck={deck} restartGame={restartGame}/>
        </div>
    );
}