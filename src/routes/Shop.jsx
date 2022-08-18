import { Fragment, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CategoriesContext } from "../contexts/CategoriesContext";
import "./Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const productList = Object.keys(categoriesMap).map((title, index) => (
    <Fragment key={index}>
      <h2>{title}</h2>
      <div className="products-container">
        {categoriesMap[title].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  ));

  return <Fragment>{productList}</Fragment>;
};

export default Shop;
