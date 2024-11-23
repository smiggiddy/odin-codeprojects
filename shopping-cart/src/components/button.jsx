import PropTypes from "prop-types";
import styles from "./button.module.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.styles ? styles[props.styles] : styles["btn"]}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  styles: PropTypes.string,
};
