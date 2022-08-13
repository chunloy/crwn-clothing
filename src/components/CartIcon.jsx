import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const onClickHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={onClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
