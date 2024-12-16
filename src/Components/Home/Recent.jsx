import card2Datas from "../lib/card2.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";

function Recent() {
  return (
    <>
      <section className="mt-10 ps-3 sm:ps-5 md:ps-10">
        <div className="py-4 md:py-7 relative">
          <h4 className="text-xl md:text-[32px] font-bold md:font-extrabold text-[#1E1E1E] mb-5">
            Recents avtivities
          </h4>
          <Swiper
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mb-5"
          >
            {card2Datas.map(
              (
                { avatar, name, addr, des1, des2, img1, img2, img3, link },
                i
              ) => (
                <SwiperSlide className="flex justify-center" key={i}>
                  <div className="min-w-[330px] w-[457px]  rounded-xl bg-[#F8F8F8] overflow-hidden p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={`./img/${avatar}`}
                        alt="avatar"
                        className="w-[60px]"
                      />
                      <div>
                        <h5 className="text-[21px] text-[#232323] font-semibold">
                          {name}
                        </h5>
                        <p className="text-[17px] text-[#8A8A8A]">{addr}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-5">
                      <div className="flex gap-1 text-xl">
                        <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
                        <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
                        <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
                        <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
                        <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
                      </div>
                      <p className="text-[15px] text-[#343434]">09/11/2023</p>
                    </div>

                    <div className="my-[21px] text-[#5E5E5E] space-y-5">
                      <p>{des1}</p>
                      <p>{des2}</p>
                    </div>

                    <div className="mt-2 flex gap-2">
                      <img src={`./img/${img1}`} />
                      <img src={`./img/${img2}`} />
                      <img src={`./img/${img3}`} />
                    </div>

                    <a href={link} className="underline">
                      Discover
                    </a>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>

          {/* <div className="swiper-button-prev absolute top-1/2 left-6 text-[3rem] p-2 rounded-full bg-white z-10 cursor-pointer hidden md:block">
            <IoArrowForward className="rotate-180" />
          </div> */}
          <div className="swiper-button-next absolute top-1/2 right-6 text-[3rem] p-2 rounded-full bg-white z-10 cursor-pointer hidden md:block">
            <IoArrowBack className="rotate-180" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Recent;
