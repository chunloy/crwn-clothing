import { useContext } from "react";
import CheckoutItem from "../components/CheckoutItem";
import { CartContext } from "../contexts/CartContext";
import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const cartItemsList = cartItems.map((cartItem) => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItemsList}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
