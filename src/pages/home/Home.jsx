import HomeCard from "./HomeCard";
import HomeCarousel from "./HomeCarousel";
import HomeMenu from "./HomeMenu";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HomeCarousel />
      <HomeCard />
      <HomeMenu />
    </div>
  );
};

export default Home;
