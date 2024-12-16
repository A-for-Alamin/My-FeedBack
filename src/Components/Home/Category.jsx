// Category Import from Json File
import categories from "../lib/category";

import { IoGridOutline } from "react-icons/io5";

function Category() {
  return (
    <>
      <div className="container flex justify-between gap-5 pt-5 md:pt-10 pb-3 px-2 overflow-x-scroll lg:overflow-x-visible categScrollBar">
        <div className="flex flex-col items-center gap-3 text-xl md:text-3xl">
          <IoGridOutline />
          <p className="text-[15.5px]">All</p>
        </div>
        {categories.map((category, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 text-xl md:text-3xl"
          >
            {category.icon}
            <p className="text-sm md:text-[15.5px] text-nowrap">
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
