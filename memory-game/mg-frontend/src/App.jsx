import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import GameBoard from "./components/gameboard";
import Scoreboard from "./components/scoreboard";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      {!gameStarted ? (
        <Button
          onClick={() => setGameStarted(!gameStarted)}
          text="Start Game"
        />
      ) : null}
      <Scoreboard
        score={score}
        highscore={highScore}
        gameStarted={gameStarted}
      />
      <GameBoard
        score={score}
        setScore={setScore}
        gameStarted={gameStarted}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
