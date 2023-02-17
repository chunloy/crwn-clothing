import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button, { BUTTON_CLASSES } from "./Button";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageURL } = product;
  const { addToCart } = useContext(CartContext);

  const onClickHandler = () => {
    addToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageURL} alt={name} />
      <div className="footer">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
      <Button buttonType={BUTTON_CLASSES.inverted} onClick={onClickHandler}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
