import { GoStarFill } from "react-icons/go";
import { FaClock, FaLocationDot } from "react-icons/fa6";

function Hero({ heroimg, logo, name, rating, reviews, description, address }) {
  console.log(logo);

  return (
    <>
      <section
        className={`h-[30vh] md:h-[75vh] bg-[url(./img/${heroimg})] bg-cover bg-center bg-no-repeat relative`}
      >
        <div className="container py-10 md:py-28 text-white text-[17] md:text-[19px]">
          <div className="md:w-1/2 px-2 md:px-0">
            <h2 className="text-[30px] sm:text-[40px] md:text-[52px] font-semibold leading-[40px] md:leading-[65px]">
              {name}
            </h2>
            <div className="flex items-center gap-2 my-3 md:my-5">
              <div className="flex gap-1 text-xl md:text-3xl">
                <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
              <p>
                <span className="font-semibold me-1">{rating}</span>
                {reviews.length}
                {""} (reviews)
              </p>
            </div>

            <p className="mb-[30px] lg:w-4/5 md:pe-5 lg:pe-10 leading-5">
              {description}
            </p>
            <p className="my-[38px] flex items-center">
              <span className="me-2">
                <FaLocationDot />
              </span>
              {address}
            </p>
            <p className="flex items-center">
              <span className="me-2">
                <FaClock />
              </span>
              {"7j/7, 08:00 - 22:00"}
            </p>
          </div>
        </div>
        <img
          src={`./img/${logo}`}
          className="z-10 left-1/2 -translate-x-1/2 absolute top-full -translate-y-1/2"
        />
      </section>
    </>
  );
}

export default Hero;
