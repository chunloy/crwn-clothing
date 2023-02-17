import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  CheckoutItemContainer,
  ImgContainer,
  Span,
  Price,
  Quantity,
  Value,
  Arrow,
  RemoveButton,
} from "./CheckoutItemStyles";

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
    <CheckoutItemContainer>
      <ImgContainer>
        <img src={imageURL} alt={name} />
      </ImgContainer>

      <Span>{name}</Span>
      <Quantity>
        <Arrow onClick={onRemoveHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={onAddHandler}>&#10095;</Arrow>
      </Quantity>

      <Price>{price}</Price>
      <RemoveButton onClick={onClearHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
