import { GoStarFill } from "react-icons/go";

import searches from "./lib/search.json";
import MyButton from "./Common/Button";

function Searched() {
  return (
    <>
      <section>
        <div className="container px-2 md:px-0 flex flex-col lg:flex-row">
          <div className="">
            <div>
              <h1 className="text-[20px] md:text-[32px] text-[#1E1E1E] font-extrabold">
                best restaurants in singapore
              </h1>
            </div>

            {searches.map(({ name, rating, review }, i) => (
              <div
                className="py-5 flex flex-col md:flex-row gap-3 border-b border-black/20"
                key={i}
              >
                <img src={`../img/search${i}.png`} />
                <div>
                  <h3 className="text-[#232323] text-[22px] font-semibold">
                    {name}
                  </h3>
                  <p className="text-[#8F8F8F]">
                    The lorem ipsum is, in printing, a series of meaningless
                    words used temporarily to calibrate a layout.
                  </p>
                  <div className="flex items-center gap-2 mt-5">
                    <div className="flex gap-1 text-xl">
                      <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
                      <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
                      <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
                      <GoStarFill />
                      <GoStarFill />
                    </div>
                    <p>
                      <span className="font-semibold text-black me-1">
                        {rating}
                      </span>
                      ({review} reviews)
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <MyButton className="my-5">Show more</MyButton>
          </div>
          <img src="../img/searchedmap.png" alt="Map" />
        </div>
      </section>
    </>
  );
}

export default Searched;
