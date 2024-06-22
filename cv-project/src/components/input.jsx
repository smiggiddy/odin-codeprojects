import "../styles/input.css";

export default function Input(props) {
  return (
    <div className="input">
      {props.label ? (
        <label htmlFor={props.name}>{props.labelName}</label>
      ) : null}
      <input
        name={props.name}
        id={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}
