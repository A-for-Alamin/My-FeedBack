import Overall from "./Details/Overall";
import Carousel from "./Home/Carousel";
import Category from "./Home/Category";
import Explore from "./Home/Explore";
import Recent from "./Home/Recent";
import Trend from "./Home/Trends";

function Home() {
  return (
    <>
      <Category />
      <Overall />
      <Carousel />
      <Trend />
      <Explore />
      <Recent props="Recents avtivities" />
    </>
  );
}

export default Home;
