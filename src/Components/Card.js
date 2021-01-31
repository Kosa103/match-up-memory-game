import React from "react";


export default function Card({ card, cardStates, clickedCard }) {
    return (
        <div className="card-container">
            <div className={(card.state === cardStates.facedown) ? "card-inner" : "card-inner is-flipped"}>
                <div 
                    className={(card.state === cardStates.found) ? "card-face card-face-front card-face-front-found" : "card-face card-face-front"} 
                    onClick={() => clickedCard(card)}
                >
                </div>
                <div 
                    className={(card.state === cardStates.found) ? "card-face card-face-back card-face-found" : "card-face card-face-back"} 
                    onClick={() => clickedCard(card)}
                >
                    <img 
                        src={card.image} 
                        alt="cardImage" 
                        className={(card.state === cardStates.found) ? "card-image card-image-found" : "card-image"}
                    />
                </div>
            </div>
        </div>
    );
}