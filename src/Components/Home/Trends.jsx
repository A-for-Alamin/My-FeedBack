import MyButton from "../Common/Button";
import Card from "../Common/Card";
import Trends from "../lib/trend.json";
function Trend() {
  return (
    <>
      <section className="container px-3 lg:px-14 py-6 md:py-14 mt-5 md:mt-8">
        <h2 className="text-xl md:text-[32px] font-bold mb-3 md:mb-6">
          The latest trends
        </h2>
        <div className="flex justify-center md:justify-between flex-wrap gapx-[23px] gap-7 md:gap-y-14">
          {Trends.map((Trend, i) => (
            <Card {...Trend} key={i} className="w-[319px]"></Card>
          ))}
        </div>
        <div className="text-center mt-7 md:mt-14 space-y-2 md:space-y-5">
          <p className="text-lg sm:text-[22px] text-[#1E1E1E]">
            Discover more cool restaurants
          </p>
          <MyButton>Show more</MyButton>
        </div>
      </section>
    </>
  );
}

export default Trend;