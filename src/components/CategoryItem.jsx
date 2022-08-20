import { useNavigate } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {
  const { title, imageURL, route } = category;
  const navigate = useNavigate();

  const onClickHandler = () => navigate(route);

  return (
    <div className="category-item-container" onClick={onClickHandler}>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageURL})` }}
      />
      <div className="category-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
