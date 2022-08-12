import { useContext } from "react";
import { ProductsContext } from "../contexts/Products";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  const productsList = products.map(({id, name}) => {
    return (
      <div key={id}>
        <h1>{name}</h1>
      </div>
    );
  });

  return (
    <div>
      {productsList}
    </div>
    
  );
};

export default Shop;