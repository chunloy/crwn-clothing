import Categories from "../components/Categories";
import categories from "../categories.json"

const Home = () => {
  return <Categories categories={categories}/>;
};

export default Home;