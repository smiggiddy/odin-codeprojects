import { useState } from "react";
import "./App.css";
import GameBoard from "./components/gameboard";
import Scoreboard from "./components/scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Scoreboard score={score} highscore={highScore} />
      <GameBoard score={score} setScore={setScore} />
    </>
  );
}

export default App;
