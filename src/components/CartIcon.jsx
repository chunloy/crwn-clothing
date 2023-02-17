import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  CartIconContainer,
  ShoppingCartIcon,
  ItemCount,
} from "./CartIconStyles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const onClickHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={onClickHandler}>
      <ShoppingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
