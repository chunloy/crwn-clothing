import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageURL, quantity, price } = cartItem;

  const { addToCart, removeFromCart, clearFromCart } = useContext(CartContext);

  const onAddHandler = () => {
    addToCart(cartItem);
  };

  const onRemoveHandler = () => {
    removeFromCart(cartItem);
  };

  const onClearHandler = () => {
    clearFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="img-container">
        <img src={imageURL} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={onRemoveHandler}>
          &#10094;
        </div>

        <span className="value">{quantity}</span>

        <div className="arrow" onClick={onAddHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={onClearHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
