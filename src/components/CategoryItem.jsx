import { useNavigate } from "react-router-dom";
import {
  CategoryItemContainer,
  CategoryItemBodyContainer,
  BackgroundImage,
} from "./CategoryItemStyles";

const CategoryItem = ({ category }) => {
  const { title, imageURL, route } = category;
  const navigate = useNavigate();

  const onClickHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onClickHandler}>
      <BackgroundImage imageURL={imageURL} />
      <CategoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
