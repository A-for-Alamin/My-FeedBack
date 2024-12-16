import { GoStarFill } from "react-icons/go";

function Card({ img, label, des, reting, review }) {
  return (
    <>
      <div className="w-[285px] h-[363px] rounded-xl bg-white overflow-hidden">
        <img src={`./img/${img}`} alt="Card Image" />
        <div className="p-2 text-[#8F8F8F] text-sm">
          <h2 className="font-semibold text-[19px] text-black mb-1">{label}</h2>
          <p>{des}</p>
          <div className="flex items-center gap-2 mt-5">
            <div className="flex gap-1 text-xl">
              <GoStarFill className="bg-[#E8A641] text-white p-0.5 rounded-sm" />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
            <p>
              <span className="font-semibold text-black me-1">
                {reting < 10 ? reting + ".0" : reting}
              </span>
              ({review} reviews)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
