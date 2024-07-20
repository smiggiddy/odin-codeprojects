import { useEffect, useState } from "react";
import Card from "./card";
import "../styles/gameboard.css";

export default function GameBoard(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards({ setCards });
  }, []);

  return (
    <>
      {props.gameStarted ? (
        <div className="gameboard">
          {cards.map((item) => {
            console.log(item.topic, item.clicked);
            return (
              <Card
                title={item.topic}
                imgSrc={item.medium_url}
                imgAl="Placeholder"
                key={item.key}
                setScore={props.setScore}
                score={props.score}
                clicked={item.clicked}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
}

async function fetchCards({ setCards }) {
  const cards = await fetch("http://localhost:8000/cards");
  const jsonCards = await cards.json();

  let gameCards = await jsonCards.map((c) => {
    return { ...c, clicked: false, key: crypto.randomUUID() };
  });

  setCards(gameCards);
}

function shuffleCards(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
  }
}
