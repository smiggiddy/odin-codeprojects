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
            title={item.topic}
            imgSrc={item.medium_url}
            imgAl="Placeholder"
            key={item.topic}
            setScore={props.setScore}
            score={props.score}
          />
        );
      })}
    </div>
  );
}

async function fetchCards({ setCards }) {
  const cards = await fetch("http://localhost:8000/");
  setCards(await cards.json());
}
