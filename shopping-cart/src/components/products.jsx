import PropTypes from "prop-types";

import styles from "./products.module.css";

export default function Products({ item, cart, setCart }) {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.img} />
      <p>{item.title}</p>
      <p>${item.price}</p>
    </div>
  );
}

Products.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.object,
  setCart: PropTypes.func,
};
