import Footer from "./footer";
import Carousel from "./Home/Carousel";
import Category from "./Home/Category";
import Explore from "./Home/Explore";
import Header from "./Header";
import Recent from "./Home/Recent";
import Trend from "./Home/Trends";

function Home() {
  return (
    <>
      <Header />
      <Category />
      <Carousel />
      <Trend />
      <Explore />
      <Recent />
      <Footer />
    </>
  );
}

export default Home;
