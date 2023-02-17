import CategoryItem from "./CategoryItem";
import { CategoriesContainer } from "./CategoriesStyles";

const Categories = ({ categories }) => {
  const categoryItems = categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return <CategoriesContainer>{categoryItems}</CategoriesContainer>;
};

export default Categories;
