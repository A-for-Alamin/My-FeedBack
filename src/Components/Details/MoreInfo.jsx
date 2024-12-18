import { BiSolidPhoneCall } from "react-icons/bi";
import { FaClock, FaFacebook, FaTiktok } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineRestaurant } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { TbBrowserMaximize } from "react-icons/tb";

function MoreInfo() {
  return (
    <>
      <section>
        <div className="container py-6 md:py-20 px-0 lg:px-28 mt-8 text-[18px] md:text-[20px] text-[#1E1E1E] flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center">
          <div>
            <h2 className="mb-8 md:mb-14 text-[27px] md:text-[34px] font-semibold">
              More informations
            </h2>
            <div className="space-y-[20px] md:space-y-[37px]">
              <div className="flex gap-4 items-center">
                <MdOutlineRestaurant className="text-2xl" />
                <p>
                  <a href="#">See the menu</a>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidPhoneCall className="text-2xl" />
                <p>+847 87 37 29 01</p>
              </div>
              <div className="flex gap-4 items-center">
                <HiLocationMarker className="text-2xl" />
                <p>Singapour, Bishan</p>
              </div>
              <div className="flex gap-4 items-center">
                <FaClock className="text-xl" />
                <p>7j/7, 08:00 - 22:00</p>
              </div>
              <div className="flex gap-4 items-center">
                <TbBrowserMaximize className="text-2xl" />
                <p>
                  <a href="#">www.bellaitalia.com</a>
                </p>
              </div>
              <div className="flex gap-10 text-3xl">
                <FaFacebook />
                <RiInstagramFill />
                <FaTiktok />
                <RiWhatsappFill />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src="../img/moreinfomap.png" alt="Map" />
          </div>
        </div>
      </section>
    </>
  );
}

export default MoreInfo;
