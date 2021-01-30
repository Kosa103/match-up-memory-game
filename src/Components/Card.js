import React from "react";


export default function Card({ card, cardStates, clickedCard }) {
    return (
        <div className={(card.state === cardStates.found) ? "card-found card" : "card"} onClick={() => clickedCard(card)}>
            <img 
                src={(card.state === cardStates.facedown) ? card.facedownImage : card.image} 
                alt="cardImage" 
                className={(card.state === cardStates.found) ? "card-image-found card-image" : "card-image"}
            />
        </div>
    );
}