import React from "react";

const Card = ({ card,onClick }) => {
  return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={(e) => onClick(card)}>

      <div className="card-back">
        ?
      </div>
      <div className="card-front">
        {card.value}
      </div>
    </div>
  );
};

export default Card;