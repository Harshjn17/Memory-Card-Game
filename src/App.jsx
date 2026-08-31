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

  const [cards, setCards] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [score, setScore] = useState(0)

  const initialCard = () => {
    const newCard = box.map((card,index) => {
      return {
        id: index,
        value: card,
        isFlipped: false,
        isMatched: false
      };
    })

    setCards(newCard);
    console.log(cards);
  }

  useEffect(() => {
    initialCard();
  }, [])

  const handleClick = (card) => {
    const newCards = cards.map((c) => {
      return c.id === card.id ? {...c, isFlipped: true} : c;
    });

    setCards(newCards);
    
    
    if(selectedCards.length < 2) {
      const newSelectedCards = [...selectedCards, card];
      setSelectedCards(newSelectedCards);
      checkMatching(newSelectedCards);
    } else return;
  }

  const checkMatching = (cards) => {
    if(cards.length === 2) {
          if(cards[0].value === cards[1].value) {
            setScore(prev => prev + 1);
          } else console.log("Un-Matched");
    } else return;
  }

  return (
    <div className="app">

      <div className="container">

        <Gameheader score={score} />

        <div className="board">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                onClick={handleClick}
              />
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default App;