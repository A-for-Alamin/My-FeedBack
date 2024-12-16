import { IoRestaurantOutline, IoCarOutline } from "react-icons/io5";
import { RiHotelLine, RiBrushAiLine, RiCarWashingLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { PiCoatHangerLight, PiPopcornLight } from "react-icons/pi";
import { FaCat, FaTheaterMasks } from "react-icons/fa";
import { CiDumbbell } from "react-icons/ci";

const categories = [
  {
    label: "Restaurants",
    icon: <IoRestaurantOutline />,
  },
  {
    label: "Hotels",
    icon: <RiHotelLine />,
  },
  {
    label: "Home services",
    icon: <GoHome />,
  },
  {
    label: "Shopping",
    icon: <PiCoatHangerLight />,
  },
  {
    label: "Car Location",
    icon: <IoCarOutline />,
  },
  {
    label: "Beauty & Spa",
    icon: <RiBrushAiLine />,
  },
  {
    label: "Park",
    icon: <FaCat />,
  },
  {
    label: "Museum",
    icon: <FaTheaterMasks />,
  },
  {
    label: "Car Wash",
    icon: <RiCarWashingLine />,
  },
  {
    label: "Bars",
    icon: <PiPopcornLight />,
  },
  {
    label: "Gyms",
    icon: <CiDumbbell />,
  },
];

export default categories;
