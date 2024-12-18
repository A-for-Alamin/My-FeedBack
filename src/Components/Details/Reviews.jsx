import { GoSortDesc, GoStarFill } from "react-icons/go";
import datas from "../lib/large_business_data.json";
import MyButton from "../Common/Button";
import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";

function Reviews() {
  const [more, setMore] = useState(8);

  const ReviewsDatas = datas
    .filter((item) => item.businessType === "Restaurant")
    .flatMap((item) => item.company.reviews)
    .slice(0, more);

  return (
    <>
      <section>
        <div className="container px-2 md:px-0 my-10">
          <div className="mb-6 flex gap-4">
            <MyButton className="flex items-center gap-2 bg-white border text-black">
              <IoFilterOutline />
              Filter
            </MyButton>
            <MyButton className="flex items-center gap-2 bg-white border text-black">
              <GoSortDesc />
              Sort
            </MyButton>
          </div>

          {ReviewsDatas.map(({ name, comment, date }, index) => (
            <div
              className="flex items-start gap-3 p-7 rounded-2xl bg-[#F8F8F8] mb-5"
              key={index}
            >
              <img src="../img/avatar.png" className="w-[60px]" />
              <div>
                <h2 className="text-[21px] font-semibold text-[#232323]">
                  {name}
                </h2>
                <p className="text-[17px] text-[#8A8A8A]">
                  Singapore, Orchad boulevard
                </p>
                <div className="flex flex-wrap items-center gap-2 my-2">
                  <div className="flex gap-1 text-xl">
                    <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                    <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                    <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                    <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                    <GoStarFill className="bg-[#E8A641] text-white p-0.5 md:p-1 rounded-sm" />
                  </div>
                  <p> {date}</p>
                </div>
                <p>{comment}</p>
              </div>
            </div>
          ))}

          <div className="text-center">
            <MyButton
              className="w-full md:w-auto mt-4 md:mt-10"
              onClick={() => setMore(more + 2)}
            >
              Show more reviews
            </MyButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
