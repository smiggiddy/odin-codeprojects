import PropTypes from "prop-types";
import styles from "./css/cart.module.css";
import { useOutletContext } from "react-router-dom";
import { currencyFormat } from "./utils/currency";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  const cartKeys = Object.keys(cart);

  return (
    <div>
      <h2>Cart</h2>
      <Bag cartKeys={cartKeys} cart={cart} setCart={setCart} />
    </div>
  );
};

function Bag({ cartKeys, cart, setCart }) {
  return (
    <>
      {cartKeys.length > 0 ? (
        <div>
          {cartKeys.map((key, index) => (
            <CartItem
              item={cart[key]}
              cart={cart}
              setCart={setCart}
              key={index}
            />
          ))}
        </div>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </>
  );
}

function CartItem({ item, cart, setCart }) {
  const { title, price, image, qty } = item;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>Price: ${currencyFormat(price)}</p>
        <p>Qty: {qty}</p>
      </div>
      <div>
        <button onClick={() => decreaseQty(item, cart, setCart)}>
          Decrease
        </button>
        <p>{qty}</p>
        <button onClick={() => increaseQty(item, cart, setCart)}>
          Increase
        </button>
      </div>
      <div>
        <p>Total: {currencyFormat(qty * price)}</p>
        <button onClick={() => removeFromCart(item, cart, setCart)}>
          Delete
        </button>
      </div>
    </div>
  );
}

function increaseQty(item, cart, setCart) {
  if (cart[item.id]) {
    let obj = { ...cart };
    obj[item.id].qty += 1;
    setCart(obj);
  }
}

function decreaseQty(item, cart, setCart) {
  if (cart[item.id]) {
    let obj = { ...cart };
    if (obj[item.id].qty > 1) obj[item.id].qty -= 1;
    setCart(obj);
  }
}

function removeFromCart(item, cart, setCart) {
  if (cart[item.id]) {
    let obj = { ...cart };
    delete obj[item.id];
    setCart(obj);
  }
}

CartItem.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.object,
  setCart: PropTypes.func,
};

Bag.propTypes = {
  cartKeys: PropTypes.array,
  cart: PropTypes.object,
  setCart: PropTypes.func,
};

export default Cart;
