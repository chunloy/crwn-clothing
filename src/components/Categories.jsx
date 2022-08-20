import CategoryItem from "./CategoryItem";
import "./Categories.scss";

const Categories = ({ categories }) => {
  const categoryItems = categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return <div className="categories-container">{categoryItems}</div>;
};

export default Categories;
