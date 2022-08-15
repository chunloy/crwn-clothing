import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const cartItemsList = cartItems.map((cartItem) => {
    const { id, name, quantity } = cartItem;

    return (
      <div key={id}>
        <h2>{name}</h2>
        <span onClick={() => removeFromCart(cartItem)}>decrement </span>
        <span>{quantity}</span>
        <span onClick={() => addToCart(cartItem)}> increment</span>
      </div>
    );
  });

  return (
    <div>
      <h1>I am the checkout page</h1>
      {cartItemsList}
    </div>
  );
};

export default Checkout;
