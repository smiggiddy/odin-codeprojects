import "../styles/card.css";

export default function Card(props) {
  return (
    <div
      className="card"
      onClick={(event) =>
        onClick(event, props.clicked, props.setScore, props.score)
      }
      data-cardname={props.title}
    >
      <div className="card-img">
        <Image src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <h2 className="card-title">{props.title}</h2>
    </div>
  );
}

function Image(props) {
  return <img src={props.src} alt={props.alt} />;
}

function onClick(event, clicked, setScore, score) {
  // implement something to handle the things ID
  setScore(score + 1);
  clicked = true;
  console.log(event.currentTarget.dataset.cardname);
}
