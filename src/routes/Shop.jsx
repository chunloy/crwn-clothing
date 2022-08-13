import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/ProductsContext";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  const productsList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return <div className="products-container">{productsList}</div>;
};

export default Shop;
