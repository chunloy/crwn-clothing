import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";
import CartItem from "./CartItem";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/checkout");
  };

  const cartItemList = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">{cartItemList}</div>
      <Button onClick={onClickHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
