import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../contexts/CategoriesContext";
import ProductCard from "../components/ProductCard";
import { CategoryContainer, CategoryTitle } from "./CategoryStyles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const productList =
    products &&
    products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>{productList}</CategoryContainer>
    </>
  );
};

export default Category;
