import "../styles/scoreboard.css";

export default function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <p>SCORE: {props.score}</p>
      <p>HIGH SCORE: {props.highscore}</p>
    </div>
  );
}
