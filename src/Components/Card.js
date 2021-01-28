import React from "react";


export default function Card({ card, cardStates, clickedCard }) {
    return (
        <div className="card-visible" onClick={() => clickedCard(card)}>
            <img 
                src={(card.state === cardStates.facedown) ? card.facedownImage : card.image} 
                alt="cardImage" 
                className="card-image" 
            />
        </div>
    );
}