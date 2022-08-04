const categories = [
  {
    id: 1,
    title: 'Hats',
  },
  {
    id: 2,
    title: 'Jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
  },
  {
    id: 4,
    title: 'Womens',
  },
  {
    id: 5,
    title: 'Mens',
  },
];

const App = () => {

  const categoryItems = categories.map(category => {
    return (
      <div className="category-container">
        <div className="background-img" />
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
  });

  return (
    <div className="categories-container">
      {categoryItems}
    </div>
  );
};

export default App;
