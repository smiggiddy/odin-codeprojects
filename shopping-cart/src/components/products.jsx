import PropTypes from "prop-types";

import styles from "./products.module.css";

import { currencyFormat } from "../utils/currency";

export default function Products({ item, cart, setCart }) {
  return (
    <>
      <img src={item.image} alt={item.title} className={styles.img} />
      <p>{item.title}</p>
      <p>${currencyFormat(item.price)}</p>
    </>
  );
}

Products.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.object,
  setCart: PropTypes.func,
};
