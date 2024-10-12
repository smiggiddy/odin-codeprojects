const Cart = (props) => {
    return (
        <section>
           {props.cart ? (
            <div>
                <h2>Cart</h2>
                {props.cart.map((item) => 
                     <CartItem item={item} qty={item.qty} />
                )}
            </div>
           ) : (<h2>Your cart is empty</h2>)} 
        
        </section>
    )
}


function CartItem({item, qty}) {
    const {name, price, img} = item;

    return (
        <div>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>Qty: {qty}</p>
            <p>{price}</p>
            <p>{price * qty}</p>
        </div>
    )
}