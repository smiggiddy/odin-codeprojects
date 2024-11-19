import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ cartItems }) {
  const sumCartItems = Object.keys(cartItems).length;

  return (
    <nav className={styles.container}>
      <h1>Smig.Tech</h1>
      <Nav />
      {sumCartItems > 0 ? (
        <Link to="bag">
          {" "}
          <h1>{sumCartItems}</h1>
        </Link>
      ) : (
        <img src="/shopping_cart_icon.svg" />
      )}
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
  cartItems: PropTypes.object,
};
