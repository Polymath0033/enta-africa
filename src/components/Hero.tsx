import { EntaUI } from "./EntaUI";
import ghana from "../assets/ghana.svg";
import kenya from "../assets/kenya.svg";
import nigeria from "../assets/nigeria.svg";
import southAfrica from "../assets/south-africa.svg";
import tanzania from "../assets/tanzania.svg";
import uganda from "../assets/uganda.svg";
import { EntaButton } from "./EntaButton";
export const Hero = () => {
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
              <h2 className="text-center  bg-clip-text text-transparent bg-[linear-gradient(96deg,_#7F55DA_68.84%,_#1F0656_106.65%)]">
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
          <EntaButton value="Get free consultation" />
          <button
            type="button"
            className="border-primary border-2 gap-[10px] flex justify-center w-full sm:w-fit items-center rounded-[36px] font-medium text-primary !leading-[125%] text-base px-8 py-4 shadow-[0px_10px_24px_0px_rgba(127,_86,_217,_0.24)] border-solid"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M8.84167 11V9.64333C8.84167 7.89249 10.0792 7.18666 11.5917 8.05749L12.765 8.73582L13.9383 9.41416C15.4508 10.285 15.4508 11.715 13.9383 12.5858L12.765 13.2642L11.5917 13.9425C10.0792 14.8133 8.84167 14.0983 8.84167 12.3567V11Z"
                stroke="#7F55DA"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 20.1667C16.5626 20.1667 20.6666 16.0626 20.6666 11C20.6666 5.9374 16.5626 1.83334 11.5 1.83334C6.43737 1.83334 2.33331 5.9374 2.33331 11C2.33331 16.0626 6.43737 20.1667 11.5 20.1667Z"
                stroke="#7F55DA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Play demo
          </button>
        </div>
      </div>
    </main>
  );
};
