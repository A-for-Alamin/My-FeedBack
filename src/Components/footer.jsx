import { Select, SelectItem } from "@nextui-org/react";
// Category Import from Json File
import countries from "./lib/country.json";

function Footer() {
  const languages = ["English", "Bangla", "Arabic", "Spanis", "Hindi"];

  return (
    <>
      <footer className="py-7 border-t border-black/25">
        <div className="container flex flex-wrap justify-center gap-10 md:gap-52 mb-6">
          <div className="px-5">
            <h2 className="font-extrabold text-[20px] mb-2">About</h2>
            <ul className="text-sm space-y-2">
              <li>About MyFeedback</li>
              <li>Investor relation</li>
            </ul>
          </div>
          <div className="px-5">
            <h2 className="font-extrabold text-[20px] mb-2">Myfeedback</h2>
            <ul className="text-sm space-y-2">
              <li>MyFeedback for business</li>
              <li>Collections</li>
              <li>Talk</li>
              <li>Event</li>
              <li>MyFeedback blog</li>
              <li>Support</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className="px-5">
            <div className="mb-8">
              <h2 className="font-extrabold text-[20px] mb-2">Languages</h2>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Select className="" size="sm" label="English">
                  {languages.map((language, i) => (
                    <SelectItem key={i}>{language}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <h2 className="font-extrabold text-[20px] mb-2">Countries</h2>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Select className="" size="sm" label="Country">
                  {countries.map((country, i) => (
                    <SelectItem key={i}>{country}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm font-semibold pt-4 px-2 text-center">
          Septembre 2023 myfeedback, designed by scott
        </p>
      </footer>
    </>
  );
}

export default Footer;
