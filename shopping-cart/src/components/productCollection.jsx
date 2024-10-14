import Product from "./products";
import PropTypes from "prop-types";

import styles from "./productCollection.module.css";

export default function ProductCollection({ loading, items, cart, setCart }) {
  return (
    <div className={styles.container}>
      {!loading
        ? items.map((item, index) => {
            return (
              <Product item={item} key={index} cart={cart} setCart={setCart} />
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
