import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Gameheader from "./components/Gameheader";

const App = () => {
  const box = [
    "🍇",
    "🍉",
    "🍋‍🟩",
    "🍌",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
    "🍇",
    "🍉",
    "🍋‍🟩",
    "🍌",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
  ];

  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    // Shuffle cards

    const finalCards = box.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatch: false,
    }));

    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    // Don't allow clicking if card is already flipped , matched
    if(card.isFlipped || card.isMatch) return;

    // Update card flipped state
    const newCards = cards.map((c) => {
      if(c.id === card.id) {
        return {...c, isFlipped: true};
      } else {
        return c;
      }
    })
    setCards(newCards);
  }

  return (
    <div className="app">
      <div className="container">
        <Gameheader />

        <div className="board">
          {cards.map((card, idx) => {
            return <Card card={card} key={idx} onClick={handleCardClick} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
