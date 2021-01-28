import React from "react";


export default function Card({ card, revealCard }) {
    const cardStates = {
        facedown: "facedown",
        revealed: "revealed",
        found: "found"
    };

    return (
        <div className="card-visible" onClick={() => revealCard(card)}>
            <img 
                src={(card.state === cardStates.facedown) ? card.facedownImage : card.image} 
                alt="cardImage" 
                className="card-image" 
            />
        </div>
    );
}