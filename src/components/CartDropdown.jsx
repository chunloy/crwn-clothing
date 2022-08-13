import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";
import CartItem from "./CartItem";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const cartItemList = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">{cartItemList}</div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
