import { GoStarFill } from "react-icons/go";
import { twMerge } from "tailwind-merge";

function Card({ name, rating, description, img, reviews, className }) {
  return (
    <>
      <div
        className={twMerge(
          "h-[363px] rounded-xl bg-[#F8F8F8] overflow-hidden",
          className
        )}
      >
        <img src={`./img/${img}`} alt="Card Image" />
        <div className="p-3 text-[#8F8F8F] text-sm">
          <h2 className="font-semibold text-[19px] text-black mb-1">{name}</h2>
          <p>{description}</p>
          <div className="flex items-center gap-2 mt-5">
            <div className="flex gap-1 text-xl">
              <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
            <p>
              <span className="font-semibold text-black me-1">{rating}</span>(
              {reviews.length} reviews)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
