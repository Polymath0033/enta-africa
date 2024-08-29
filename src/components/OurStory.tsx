import { EntaUI } from "./EntaUI";
import image from "../assets/earth-with-plane.png";

import { FC } from "react";
export const OurStory: FC = () => {
  return (
    <article className="px-8 sm:px-28 py-24 bg-[rgba(127,_85,_218,_0.02)] ">
      <div className="flex custom-container flex-col sm:flex-row gap-24">
        <div className="flex flex-col gap-6 w-full justify-center items-start grow">
          <EntaUI text="our story" />
          <h2 className=" text-base sm:text-xl !leading-[168.75%] text-[#333] font-normal">
            Enta Afrika was founded with the mission to empower businesses to
            thrive in Africa. With a team of seasoned professionals and a deep
            understanding of the African market, we provide essential services
            that facilitate business establishment, expansion, and growth.
          </h2>
          {/* <h2 className="text-xl sm:text-[28px] !leading-[168.75%] text-[#333] font-semibold">
            Set your{" "}
            <span className="bg-[linear-gradient(91deg,_#009244_-0.95%,_#004d40_100.32%)] bg-clip-text text-transparent">
              beautiful Africa expansion story{"   "}
            </span>
            in motion with a free consultation with our expert team
          </h2> */}
          {/* <p className="text-[#434343] text-base mb-6 !leading-[175%] font-normal ">
            Ready to speak, when you are.
          </p>
          <EntaButton value="Speak to us" onClick={showConsultation} /> */}
        </div>
        <div className="flex flex-col p-4 bg-[rgba(0,_146,_68,_0.08)] rounded-2xl w-full ">
          <img
            src={image}
            alt="A man pressing phone"
            className="h-full w-full"
          />
        </div>
      </div>
    </article>
  );
};
