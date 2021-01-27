import React from "react";


export default function Card({ card }) {
    return (
        <div className="card-visible" onClick={() => {console.log(card)}}>
            <img src={card.image} alt="face-down card" className="card-image" />
        </div>
    );
}