import "../styles/card.css";

export default function Card(props) {
  return (
    <div
      className="card"
      onClick={(event) => onClick(event)}
      data-cardName={props.title}
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

function onClick(event) {
  // implement something to handle the things ID
  console.log(event.currentTarget.dataset.cardname);
}
