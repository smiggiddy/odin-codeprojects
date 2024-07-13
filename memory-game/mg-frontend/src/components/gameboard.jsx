import { useEffect, useState } from "react";
import Card from "./card";
import "../styles/gameboard.css";

export default function GameBoard(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards({ setCards });
  }, []);

  return (
    <div className="gameboard">
      {cards.map((item) => {
        return (
          <Card
            title={item}
            imgSrc="placeholder"
            imgAl="Placeholder"
            key={item}
          />
        );
      })}
    </div>
  );
}

async function fetchCards({ setCards }) {
  // some async thing that loads the cards
  setTimeout(() => setCards([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 2000);
}
