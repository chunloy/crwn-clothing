import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";
import CartItem from "./CartItem";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdownStyles";

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
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItemList
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={onClickHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
