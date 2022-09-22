import Trending from "../components/trending.js";
import Vegi from "../components/vegi.js";
import Cat from "../components/categorie";
import Search from "../components/search";
import Header from "../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Cat />
      <Trending />
      <Vegi />
    </>
  );
};

export default Home;
