import { EntaUI } from "./EntaUI";
import ghana from "../assets/ghana.svg";
import kenya from "../assets/kenya.svg";
import nigeria from "../assets/nigeria.svg";
import southAfrica from "../assets/south-africa.svg";
import tanzania from "../assets/tanzania.svg";
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
          <EntaUI text="Enta Afrika from anywhere" startIcon={false} />
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
              <h1 className="text-[#333333] text-center ">
                Your Gateway to Africa.
              </h1>
              <h2 className="text-center  bg-clip-text text-transparent bg-[linear-gradient(91deg,_#E33E33_-0.95%,_#8C0900_100.32%)]">
                Incorporate your company
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
              <img
                src={tanzania}
                alt="Tanzania flag"
                className="!rounded-[49px]"
              />
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
              We understand the regulations, the regulators, and the markets in
              Africa. Our assurance to you is that you will never have a worry
              with us.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-4/5 mx-auto sm:w-full gap-8 justify-center mt-16">
          <EntaButton
            value="Get free consultation"
            onClick={showConsultation}
          />
        </div>
      </div>
    </main>
  );
};
