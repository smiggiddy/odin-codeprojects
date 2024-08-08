import { useEffect, useState } from "react";
import Card from "./card";
import "../styles/gameboard.css";
import { GameLogic } from "../gameLogic";

export default function GameBoard(props) {
  const [cards, setCards] = useState([]);

  const gl = new GameLogic(
    cards,
    setCards,
    props.score,
    props.setScore,
    props.highScore,
    props.setHighScore,
    props.setGameStarted,
    props.setMessage,
    props.setButtonText,
  );

  useEffect(() => {
    if (props.gameStarted) {
      fetchCards({ setCards });
    }
  }, [props.gameStarted]);

  return (
    <>
      {props.gameStarted ? (
        <div className="gameboard">
          {cards.map((item) => {
            return (
              <Card
                title={item.topic}
                imgSrc={item.medium_url}
                imgAlt={item.alt}
                key={item.key}
                onClick={() => gl.handleClick(item.key)}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
}

async function fetchCards({ setCards }) {
  const cards = await fetch("/cards");
  const jsonCards = await cards.json();

  let gameCards = await jsonCards.map((c) => {
    return { ...c, clicked: false, key: crypto.randomUUID() };
  });

  setCards(gameCards);
}
