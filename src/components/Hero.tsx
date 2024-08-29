import { EntaUI } from "./EntaUI";
import ghana from "../assets/ghana.svg";
import kenya from "../assets/kenya.svg";
import nigeria from "../assets/nigeria.svg";
import southAfrica from "../assets/south-africa.svg";
import rwanda from "../assets/rwanda-svg-removebg-preview 1.svg";
import uganda from "../assets/uganda.svg";
import { EntaButton } from "./EntaButton";
import { FC } from "react";
export const Hero: FC<{ showConsultation: () => void }> = ({
  showConsultation,
}) => {
  return (
    <main
      className={`overflow-hidden  hero w-full h-fit   py-20 pb-32 !bg-contain bg-no-repeat bg-center `}
    >
      <div className="custom-container flex flex-col">
        {/* <img src={net} alt="net" className="h-full w-full" /> */}
        <div className="flex w-full justify-center">
          <EntaUI text="Welcome to Enta Afrika" startIcon={false} />
        </div>
        <div>
          <div className="font-semibold text-3xl sm:text-5xl mt-4 relative w-full sm:w-3/4 mx-auto !leading-[162.5%]">
            {/* country logo */}
            <div className="absolute rounded-[49px] -left-1 sm:-left-4 top-1/4 sm:top-[30%]">
              <img
                src={kenya}
                alt="Kenya"
                className="w-full h-full !rounded-[49px]"
              />
            </div>
            <div className="absolute -right-1 sm:-right-4 top-1/4 sm:top-[30%]">
              <img
                src={nigeria}
                alt="Nigeria flag"
                className="!rounded-[49px]"
              />
            </div>
            <div className="w-full ">
              <h1 className="text-black text-center text-[38px]">
                Unlock Your Business Potential in Africa.
              </h1>
              <h2 className="text-center text-3xl  bg-clip-text text-transparent bg-[linear-gradient(91deg,_#009244_-0.95%,_#004d40_100.32%)]">
                Incorporation, Licensing, and Acquisition Services Across the
                Continent
              </h2>
            </div>
          </div>
          <div className="w-4/5 mx-auto flex relative justify-center mt-4">
            <div className="absolute rounded-[49px]  -left-10 -top-4">
              <img
                src={ghana}
                alt="Ghana"
                className="w-full h-full !rounded-[49px]"
              />
            </div>
            <div className="absolute -right-10 -top-4">
              <img src={rwanda} alt="rwanda flag" className="!rounded-[49px]" />
            </div>
            <div className="absolute rounded-[49px] left-10 sm:left-24 -bottom-10">
              <img
                src={southAfrica}
                alt="South Africa"
                className="w-full h-full !rounded-[49px]"
              />
            </div>
            <div className="absolute right-10 sm:right-24 -bottom-10">
              <img src={uganda} alt="Uganda flag" className="!rounded-[49px]" />
            </div>
            <p className="text-[#101828] text-sm sm:text-lg font-normal w-full text-center !leading-[177.778%] ">
              At Enta Afrika, we’re passionate about helping businesses like
              yours establish and grow across Africa. Whether it’s
              incorporation, licensing, or acquisitions, we’re here to make the
              process as smooth and stress-free as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-4/5 mx-auto sm:w-full gap-8 justify-center mt-16">
          <EntaButton value="Get started today" onClick={showConsultation} />
        </div>
      </div>
    </main>
  );
};
