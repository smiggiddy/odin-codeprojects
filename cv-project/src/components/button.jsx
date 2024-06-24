import "../styles/button.css";

export default function Button(props) {
  return (
    <button className={`${props.className} + btn`} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
