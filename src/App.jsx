import CategoryItem from "./components/CategoryItem";
import categories from "./categories.json";
import "./categories.scss";

const App = () => {

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
};

export default App;
