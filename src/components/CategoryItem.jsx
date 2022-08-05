import "./categoryItem.scss";

const CategoryItem = (props) => {
  const {title, imageURL} = props;

  return (
    <div className="category-container">
      <img className="background-img" src={imageURL} alt={title}></img>  
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;