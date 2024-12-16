import { RiSearchLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import MyButton from "../Common/Button";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// Category Import from Json File
import categories from "../lib/category.jsx";
// Category Import from Json File
import countries from "../lib/country.json";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@nextui-org/react";

function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <header className="border-b border-black/20 md:pt-5 px-2">
        <div className="container flex items-center justify-between gap-28 md:gap-4 py-2 md:py-4">
          {/* Website Logo  */}
          <img
            src="./img/logo.png"
            alt="Website Logo"
            className="scale-85 lg:scale-100"
          />

          {/* Filtering & Search Items  */}
          <div className="p-1 rounded-[27px] md:rounded-full border-2 hidden md:flex items-center md:gap-1 overflow-hidden">
            {/* Autocomplete from "NextUi"  */}
            <div className="flex gap-1.5 md:gap-1">
              <Autocomplete
                size="sm"
                radius="full"
                selectorIcon={""}
                label="restaurant, hotel, service...."
              >
                {categories.map((category, i) => (
                  <AutocompleteItem key={i}>{category.label}</AutocompleteItem>
                ))}
              </Autocomplete>

              <Autocomplete
                size="sm"
                radius="full"
                selectorIcon={""}
                label="Singapour..."
                className=""
              >
                {countries.map((country, i) => (
                  <AutocompleteItem key={i}>{country}</AutocompleteItem>
                ))}
              </Autocomplete>
            </div>

            <RiSearchLine className="bg-[#1677BD] p-2 text-[2.5rem] rounded-full text-white cursor-pointer" />
          </div>

          {/* MyFeedback for business Button */}
          <div className="hidden md:flex items-center gap-[21px]">
            <TbWorld className="text-4xl lg:text-2xl cursor-pointer" />
            <MyButton className="text-sm lg:text-[15px] bg-black text-nowrap">
              MyFeedback for business
            </MyButton>
          </div>

          <RxHamburgerMenu
            className="md:hidden text-2xl cursor-pointer"
            onClick={onOpen}
          />

          <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
              {(onClose) => (
                <>
                  <DrawerHeader className="flex flex-col gap-1">
                    Choose Your Category...
                  </DrawerHeader>
                  <DrawerBody>
                    {/* Filtering & Search Items  */}
                    <div className="p-1 rounded-[27px] border-2 overflow-hidden space-y-1.5">
                      {/* Autocomplete from "NextUi"  */}
                      <Autocomplete
                        size="sm"
                        radius="full"
                        label="restaurant, hotel, service...."
                      >
                        {categories.map((category, i) => (
                          <AutocompleteItem key={i}>
                            {category.label}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>

                      <Autocomplete
                        size="sm"
                        radius="full"
                        label="Singapour..."
                        className=""
                      >
                        {countries.map((country, i) => (
                          <AutocompleteItem key={i}>{country}</AutocompleteItem>
                        ))}
                      </Autocomplete>

                      <MyButton className="w-full" onClick={onClose}>
                        Search...
                      </MyButton>
                    </div>

                    <MyButton className="text-sm lg:text-[15px] bg-black text-nowrap mt-10">
                      MyFeedback for business
                    </MyButton>
                  </DrawerBody>
                </>
              )}
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </>
  );
}

export default Header;
