import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import GameBoard from "./components/gameboard";
import GameMessages from "./components/gameMessages";
import Scoreboard from "./components/scoreboard";
import SoundEffects from "./components/soundEffects";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [buttonText, setButtonText] = useState("Start Game!");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Remember the important things!");

  return (
    <>
      {!gameStarted ? (
        <>
          <GameMessages title={message} />
          <Button
            onClick={() => setGameStarted(!gameStarted)}
            text={buttonText}
          />
        </>
      ) : null}
      <Scoreboard
        score={score}
        highscore={highScore}
        gameStarted={gameStarted}
      />
      <GameBoard
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        setMessage={setMessage}
        setButtonText={setButtonText}
      />
      <SoundEffects soundOn={soundOn} />
    </>
  );
}

export default App;
