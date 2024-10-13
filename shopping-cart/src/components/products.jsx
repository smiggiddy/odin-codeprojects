import PropTypes from "prop-types";

import styles from "./products.module.css";

export default function Product({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.img} />
      <p>{item.title}</p>
      <p>${item.price}</p>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.object,
};
