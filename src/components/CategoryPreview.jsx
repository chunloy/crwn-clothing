import ProductCard from "./ProductCard";
import "./CategoryPreview.scss";

const CategoryPreview = ({ title, products }) => {
  const previewItems = products
    .filter((_, index) => index < 4)
    .map((product) => <ProductCard key={product.id} product={product} />);

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">{previewItems}</div>
    </div>
  );
};

export default CategoryPreview;
