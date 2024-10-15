import PropTypes from "prop-types";
import styles from "./css/cart.module.css";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [cart, setCart, items, SetItems] = useOutletContext();

  const cartItems = Object.keys(cart);

  return (
    <>
      <div>
        {cart ? (
          <div>
            <h2>Cart</h2>
            {cartItems.map((item, index) => (
              <CartItem item={cart[item]} key={index} />
            ))}
          </div>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </>
  );
};

function CartItem({ item }) {
  const { title, price, image, qty } = item;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Qty: {qty}</p>
      <p>Price: {price}</p>
      <p>Total: {price * qty}</p>
      <p>{item.id}</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
