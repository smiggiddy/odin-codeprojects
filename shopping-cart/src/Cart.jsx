import PropTypes from "prop-types";
import styles from "./css/cart.module.css";
import { useOutletContext } from "react-router-dom";
import { currencyFormat } from "./utils/currency";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  const cartKeys = Object.keys(cart);

  return (
    <div>
      <div className={styles.container}>
        <Bag cartKeys={cartKeys} cart={cart} setCart={setCart} />
        <OrderSummary cart={cart} />
      </div>
    </div>
  );
};

function Bag({ cartKeys, cart, setCart }) {
  return (
    <>
      {cartKeys.length > 0 ? (
        <div>
          <h2>Cart</h2>
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

function OrderSummary({ cart }) {
  const cartItems = Object.keys(cart);
  let numItems = 0;
  let subTotal = 0;

  cartItems.forEach((item) => {
    subTotal += cart[item].price * cart[item].qty;
    numItems += cart[item].qty;
  });
  const shippingFee = subTotal * 0.1;
  const total = subTotal + shippingFee;

  return (
    <div className={styles.summary}>
      <h2>Order Summary</h2>
      <p>
        Subtotal ({numItems} items): ${currencyFormat(subTotal)}
      </p>
      <p>Shipping (10%): ${currencyFormat(shippingFee)}</p>
      <p>Total: ${currencyFormat(total)}</p>
    </div>
  );
}

function CartItem({ item, cart, setCart }) {
  const { title, price, image, qty } = item;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>Price: ${currencyFormat(price)} x </p>
        <p>Qty: {qty} </p>
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
        <p>total: ${currencyFormat(qty * price)} </p>
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

OrderSummary.propTypes = {
  cart: PropTypes.object,
};

export default Cart;
