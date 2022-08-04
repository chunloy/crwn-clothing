import "./categoryItem.scss";

const CategoryItem = (props) => {
  const {title, imageURL} = props;

  return (
    <div className="category-container">
      <div className="background-img" style={{backgroundImage: `url(${imageURL})`}} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;