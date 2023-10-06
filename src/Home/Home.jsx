import Header from "../Header/Header";
import LatestPost from "./LatestPost";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2 className="text-2xl">This is Home</h2>
      <Services></Services>
      <Reviews></Reviews>
      <LatestPost></LatestPost>
    </div>
  );
};

export default Home;
