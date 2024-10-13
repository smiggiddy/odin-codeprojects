import PropTypes from "prop-types";

const Cart = (props) => {
  return (
    <>
      <div>
        {props.cart ? (
          <div>
            <h2>Cart</h2>
            {props.cart.map((item) => (
              <CartItem item={item} key={item.id} />
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
  const { name, price, img, qty } = item;

  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Qty: {qty}</p>
      <p>{price}</p>
      <p>{price * qty}</p>
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
