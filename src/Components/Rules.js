import React from "react";
import { Link } from "react-router-dom";


export default function Rules() {
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
        <div className="rules-div content">
            <div className="menu-div">

            </div>
            <div className="description-div">
                <h2>Match Up Memory Game</h2>
                <p>Deck Size</p>
                <select className="deck-size-selector">
                    {renderOptions()}
                </select>
                <Link to="/game">PLAY!</Link>
                <h2>Rules</h2>
                <p>{`This is a basic memory game with simple rules.`}</p>
                <p>
                    {`You are presented a board with an even number of cards "face down". Every card has an identical pair. Your goal is to find these pairs in succession.
                    First you must click a card to reveal it. Then you must click another card to reveal it as well. If the cards are different they both get flipped back to
                    the initial "face down" position. In case both selected cards are the same (a pair) they are removed from play. The game continues as long as there are cards
                    still in play. You can choose to play with 3-10 pairs of cards. Have fun!`}
                </p>
            </div>
        </div>
    )
}