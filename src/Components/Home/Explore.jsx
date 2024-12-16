import MyButton from "../Common/Button";

function Explore() {
  return (
    <>
      <section className="py-7 bg-[#F2F2F2]">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-center gap-5 lg:gap-16 px-2 lg:px-16">
          <div className="max-w-[502px] pe-0 lg:pe-10 text-center sm:text-start">
            <h2 className="text-[19px] sm:text-[23px] md:text-[26px] leading-[25px] md:leading-[33px] text-[#1E1E1E] font-extrabold">
              MyFeedback for Business has resources to help you plan, start,
              grow, and advertise your small business
            </h2>
            <p className="text-[#5E5E5E] mt-4 md:mt-7 mb-10 md:mb-16">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>
            <MyButton className="bg-black text-base w-full sm:w-auto">
              Explore MyFeedback business
            </MyButton>
          </div>

          <img
            src="./img/explore.png"
            className="scale-80 lg:scale-100 md:w-1/2"
          />
        </div>
      </section>
    </>
  );
}

export default Explore;
