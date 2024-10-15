import { useParams, useOutletContext } from "react-router-dom";
import Products from "./products";
import PropTypes from "prop-types";

import styles from "./productCollection.module.css";

export default function ProductDetails() {
  const [cart, setCart, items, setItems] = useOutletContext();

  const { id } = useParams();
  const item = items.filter((item) => item.id === id)[0];

  return (
    <div className={styles.container}>
      {item ? (
        <div className={styles.card}>
          <Products item={item} cart={cart} setCart={setCart} />
          <button
            onClick={() => {
              addToCart(item, cart, setCart);
            }}
          >
            Add to Cart
          </button>
        </div>
      ) : null}
    </div>
  );
}

function addToCart(item, cart, setCart) {
  let obj = { ...cart };
  if (obj[item.id]) {
    obj[item.id].qty += 1;
  } else {
    obj[item.id] = item;
    obj[item.id].qty = 1;
  }

  setCart(obj);
}

ProductDetails.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.object,
  setCart: PropTypes.func,
};
