import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar({ cartItems }) {
  const sumCartItems = Object.keys(cartItems).length;

  return (
    <nav className={styles.container}>
      <h1 className={styles["nav-heading"]}>Hobby Tech</h1>
      <Nav sumCartItems={sumCartItems} />
    </nav>
  );
}

function Nav({ sumCartItems }) {
  return (
    <ul className={styles.nav}>
      <li>
        <Link to="/" className={styles.link}>
          home
        </Link>
      </li>
      <li>
        <Link to="store" className={styles.link}>
          shop
        </Link>
      </li>
      <Link to="bag" className={styles.link}>
        {sumCartItems > 0 ? (
          <div className={styles["cart-icon-container"]}>
            <div className={styles["cart-icon-circle"]}></div>
            <ShoppingCartIcon fontSize="large" />
          </div>
        ) : (
          <ShoppingCartIcon fontSize="large" />
        )}
      </Link>
    </ul>
  );
}

Navbar.propTypes = {
  cartItems: PropTypes.object,
};

Nav.propTypes = {
  sumCartItems: PropTypes.number,
};
