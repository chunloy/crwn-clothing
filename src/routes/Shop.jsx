import { Routes, Route } from "react-router-dom";
import Category from "./Category";
import CategoriesPreview from "./CategoriesPreview";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
