import { CartItemContainer, ItemDetails } from "./CartItemStyles";

const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageURL} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
