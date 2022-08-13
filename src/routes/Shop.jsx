import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/Products";
import "./Shop.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext);

  const productsList = products.map(({id, ...productDetails}) => <ProductCard key={id} {...productDetails}/>);

  return <div className="products-container">{productsList}</div>;
 };

export default Shop;