import { Slider } from "@nextui-org/react";
import { GoStarFill } from "react-icons/go";

function Overall() {
  const nums = [
    { num: 100, ratnum: 5 },
    { num: 70, ratnum: 4 },
    { num: 50, ratnum: 3 },
    { num: 20, ratnum: 2 },
    { num: 0, ratnum: 0 },
  ];

  return (
    <>
      <section>
        <div className="container px-3 flex flex-col md:flex-row gap-6 md:gap-20 py-10 my-12 border-black/20 border-y-1">
          <div className="flex items-start gap-5">
            <div className="bg-[url(../img/fram.png)] w-12 md:w-[53px] lg:w-12 h-[48px] flex justify-center items-center">
              <img src="../img/star.png" />
            </div>
            <div className="space-y-2">
              <h2 className="text-[32px] font-bold text-[#232323]">
                Overall rating
              </h2>
              <p className="text-[#838383] text-[19px]">834 Reviews</p>
              <div className="text-2xl flex gap-4">
                <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
              </div>
            </div>
          </div>
          <div className="md:w-[40rem]">
            {nums.map(({ num, ratnum }) => (
              <div className="flex gap-4 text-lg">
                <p className="text-nowrap text-[#484848]">{ratnum} stars</p>
                <Slider
                  color="primary"
                  defaultValue={num}
                  hideThumb={true}
                  isDisabled
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Overall;
