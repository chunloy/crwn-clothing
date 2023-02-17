import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button, { BUTTON_CLASSES } from "./Button";
import { ProductCardContainer, Footer, Name, Price } from "./ProductCardStyles";

const ProductCard = ({ product }) => {
  const { name, price, imageURL } = product;
  const { addToCart } = useContext(CartContext);

  const onClickHandler = () => {
    addToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageURL} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_CLASSES.inverted} onClick={onClickHandler}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
