import { Link } from "react-router-dom";
import Products from "./products";
import PropTypes from "prop-types";
import styles from "./productCollection.module.css";

export default function ProductCollection({ loading, items, cart, setCart }) {
  return (
    <div className={styles.container}>
      {!loading
        ? items.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <Products item={item} cart={cart} setCart={setCart} />
                <Link to={item.id} className={styles.link}>
                  {" "}
                  More Info
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}

ProductCollection.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.array,
  cart: PropTypes.object,
  setCart: PropTypes.func,
};
