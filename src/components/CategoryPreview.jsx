import ProductCard from "./ProductCard";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./CategoryPreviewStyles";

const CategoryPreview = ({ title, products }) => {
  const previewItems = products
    .filter((_, index) => index < 4)
    .map((product) => <ProductCard key={product.id} product={product} />);

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title}</Title>
      </h2>
      <Preview>{previewItems}</Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
