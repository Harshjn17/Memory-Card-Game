import React from "react";

const Gameheader = ({ score }) => {
  return (
    <div className="top">
      <h2>Memory Card Game</h2>
      <div className="score">
        <div className="right">
          <p className="title">SCORE:</p>
          <span className="bold">{score}</span>
        </div>
        <div className="left">
          <p className="title">MOVES:</p>
          <span className="bold">10</span>
        </div>
      </div>
      <button>New Game</button>
    </div>
  );
};

export default Gameheader;
