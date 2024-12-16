import cardDatas from "../lib/Card.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Card from "../Common/Card";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export default function Carousel() {
  return (
    <>
      <section className="container mt-10 p-2 md:p-0">
        <div className="bg-[#1677Bd] py-4 md:py-7 px-5 md:px-10 rounded-[9px] relative">
          <h4 className="text-[15px] sm:text-lg md:text-[32px] text-white mb-5">
            Find the best restaurant ratings below
          </h4>
          <Swiper
            spaceBetween={33}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mb-5"
          >
            {cardDatas.map((cardData, i) => (
              <SwiperSlide className="flex justify-center" key={i}>
                <Card {...cardData} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full swiper-pagination left-1/5 -translate-x-1/5 absolute z-10" />

          <div className="swiper-button-prev absolute top-1/2 left-6 text-[3rem] p-2 rounded-full bg-white z-10 cursor-pointer hidden md:block">
            <IoArrowForward className="rotate-180" />
          </div>
          <div className="swiper-button-next absolute top-1/2 right-6 text-[3rem] p-2 rounded-full bg-white z-10 cursor-pointer hidden md:block">
            <IoArrowBack className="rotate-180" />
          </div>
        </div>
      </section>
    </>
  );
}
