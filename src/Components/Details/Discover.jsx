import { TbGridDots } from "react-icons/tb";

function Discover() {
  return (
    <>
      <section>
        <div className="container mt-12 md:mt-16 py-5 md:py-10 px-3 md:px-0 relative">
          <div className="ms-0 md:ms-28 lg:ms-32">
            <h1 className="text-[25px] md:text-[34px] font-semibold text-[#1E1E1E]">
              Discover our magnificent place in photos
            </h1>
            <p className="text-[#5E5E5E] mb-10">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-5">
            <div>
              <img src="./img/discover1.png" />
            </div>
            <div className="space-y-5">
              <div className="flex flex-col md:flex-row gap-2 md:gap-10 lg:gap-5">
                <img src="./img/discover2.png" />
                <img src="./img/discover3.png" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-10 lg:gap-5">
                <img src="./img/discover4.png" />
                <img src="./img/discover5.png" />
              </div>
            </div>
          </div>

          <div className="absolute top-full -translate-y-24 md:-translate-y-28 left-12 md:left-16 p-3 px-5 rounded-full bg-white flex items-center border-2 scale-80 md:scale-90 lg:scale-100 cursor-pointer">
            <TbGridDots className="text-xl" />
            <p className="text-[17px] text-[#232323] ms-2">
              View all photos (7)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
