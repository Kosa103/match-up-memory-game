import React from "react";
import { Link } from "react-router-dom";


export default function Rules() {
    return (
        <div className="rules-div content">
            <div className="menu-div">

            </div>
            <div className="description-div">
                <h2>Welcome to Match Up!</h2>
                <p>{`This is a basic memory game with simple rules.`}</p>
                <p>
                    {`You are presented a board with an even number of cards "face down". Every card has an identical pair. Your goal is to find these pairs in succession.
                    First you must click a card to reveal it. Then you must click another card to reveal it as well. If the cards are different they both get flipped back to
                    the initial "face down" position. In case both selected cards are the same (a pair) they are removed from play. The game continues as long as there are cards
                    still in play. You can choose to play with 3-10 pairs of cards. Have fun!`}
                </p>
                <option className="deck-option"></option>
                <Link to="/game">PLAY!</Link>
            </div>
        </div>
    )
}