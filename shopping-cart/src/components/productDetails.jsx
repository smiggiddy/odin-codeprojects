import { useParams, useOutletContext, Link } from "react-router-dom";
import Products from "./products";

import styles from "./productDetails.module.css";

export default function ProductDetails() {
  const [cart, setCart, items] = useOutletContext();

  const { id } = useParams();

  if (!items) return <HandleInvalidItem />;
  const item = items.find((item) => item.id === id);

  return (
    <div className={styles.container}>
      {item ? (
        <div className={styles.card}>
          <Link to="/store">Back</Link>
          <Products item={item} cart={cart} setCart={setCart} />
          <button
            onClick={() => {
              cart[item.id]
                ? removeFromCart(item, cart, setCart)
                : addToCart(item, cart, setCart);
            }}
          >
            {cart[item.id] ? "Remove from Cart" : "Add to Cart"}
          </button>
          <Link to="/bag">View Cart</Link>
        </div>
      ) : (
        <HandleInvalidItem />
      )}
    </div>
  );
}

function HandleInvalidItem() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Product Does Not Exist!</h1>
        <Link to="/store">Return to Store</Link>
      </div>
    </div>
  );
}

function addToCart(item, cart, setCart) {
  let obj = { ...cart };
  obj[item.id] = item;
  obj[item.id].qty = 1;
  setCart(obj);
}

function removeFromCart(item, cart, setCart) {
  if (cart[item.id]) {
    let obj = { ...cart };
    delete obj[item.id];
    setCart(obj);
  }
}
