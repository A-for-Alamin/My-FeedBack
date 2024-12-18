import { BiSolidPhoneCall } from "react-icons/bi";
import { FaClock, FaFacebook, FaTiktok } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineRestaurant } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { TbBrowserMaximize } from "react-icons/tb";
import MyButton from "../Common/Button";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { FiDownload } from "react-icons/fi";

function MoreInfo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                <p className="underline" onClick={onOpen}>
                  See the menu
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
                <p className="underline">
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

          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="md:scale-150"
          >
            <ModalContent className="p-2">
              {(onClose) => (
                <>
                  <ModalBody>
                    <div>
                      <img src="../img/menu.png" alt="menu" />
                    </div>
                  </ModalBody>
                  <ModalFooter className="flex-col items-center">
                    <h3 className="text-[#232323] text-[32px] font-semibold">
                      Menu Bella italia
                    </h3>
                    <MyButton className="bg-white border border-[#1677BD] text-base sm:text-19px font-medium text-[#1677BD]">
                      <a
                        href="../img/menu.png"
                        className="flex items-center gap-3"
                        download="Bella italia"
                      >
                        <FiDownload />
                        Dowload this menu
                      </a>
                    </MyButton>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default MoreInfo;
