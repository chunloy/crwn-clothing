import { useContext } from "react";
import CategoryPreview from "../components/CategoryPreview";
import { CategoriesContext } from "../contexts/CategoriesContext";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const categoriesList = Object.keys(categoriesMap).map((title, index) => (
    <CategoryPreview
      key={index}
      title={title}
      products={categoriesMap[title]}
    />
  ));

  return <>{categoriesList}</>;
};

export default CategoriesPreview;
