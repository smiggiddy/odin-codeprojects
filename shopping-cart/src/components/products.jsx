import PropTypes from "prop-types";

import styles from "./products.module.css";

export default function Product({ item, cart, setCart }) {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.img} />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button
        onClick={() => {
          let obj = { ...cart };
          if (obj[item.id]) {
            obj[item.id].qty += 1;
          } else {
            obj[item.id] = item;
            obj[item.id].qty = 1;
          }

          setCart(obj);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.object,
  setCart: PropTypes.func,
};
