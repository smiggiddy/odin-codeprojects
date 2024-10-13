import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ cartItems }) {
  return (
    <nav className={styles.nav}>
      <h1>Smig.Tech</h1>
      <Nav />
      {cartItems ? <h1>{cartItems}</h1> : <button>I&apos;m Ready</button>}
    </nav>
  );
}

function Nav() {
  return (
    <ul className={styles.nav}>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="store">shop</Link>
      </li>
    </ul>
  );
}

Navbar.propTypes = {
  cartItems: PropTypes.number,
};
