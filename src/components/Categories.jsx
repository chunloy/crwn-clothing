import CategoryItem from "./CategoryItem";
import "./categories.scss";

const Categories = (props) => {
  const { categories } = props;
  const categoryItems = categories.map(category => {
    return (
      <CategoryItem 
        key={category.id}
        title={category.title}
        imageURL={category.imageURL}
      />
    );
  });

  return (
    <div className="categories-container">
      {categoryItems}
    </div>
  );
}

export default Categories;