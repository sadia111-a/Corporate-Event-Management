import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import LatestPost from "./LatestPost";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Header></Header>
      <Services services={services}></Services>
      <Reviews></Reviews>
      <LatestPost></LatestPost>
    </div>
  );
};

export default Home;
