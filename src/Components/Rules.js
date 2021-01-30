import React from "react";
import { useHistory } from "react-router-dom";


export default function Rules({ startNewGame }) {
    const deckSizeInput = React.useRef(null);
    const history = useHistory();

    function renderOptions() {
        const deckSizes = [6, 8, 10, 12, 14, 16, 18, 20];
        const option = deckSizes.map(size => {
            return <option key={`deck-${size}`} value={size}>{size}</option>;
        });
        return option;
    }


    return (
        <div className="rules-div content">
            <div className="menu-div">

            </div>
            <div className="description-div">
                <div>
                    <h2 className="title" id="rules-main-title">Match Up Memory Game</h2>
                </div>
                <div>
                    <p id="deck-size-text">Deck Size</p>
                </div>
                <div>
                    <select className="deck-size-selector" ref={deckSizeInput}>
                        {renderOptions()}
                    </select>
                </div>
                <div>
                    <button
                        onClick={() => startNewGame(deckSizeInput.current.value, "/game")}
                        className="link-button button"
                    >
                        START NEW GAME
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => history.push("/game")}
                        className="link-button button"
                    >
                        RETURN TO GAME
                    </button>
                </div>
                <div>
                    <h2 className="title">Rules</h2>
                </div>
                <div>
                    <p>{`This is a basic memory game with simple rules.`}</p>
                </div>
                <div>
                    <p>
                        {`You are presented a board with an even number of cards "face down". Every card has an identical pair. Your goal is to find these pairs in succession.
                        First click a card to reveal it. Then click another card to reveal it as well. If the cards are different they both get flipped back to
                        the initial "face down" position. In case both selected cards are the same (a pair) they are removed from play. The game continues as long as there are cards
                        still in play. You may choose to play with 3-10 pairs of cards. Have fun!`}
                    </p>
                </div>
            </div>
        </div>
    )
}