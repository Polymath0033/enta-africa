import { EntaUI } from "./EntaUI";
import image from "../assets/blog-1.png";
import { FC } from "react";
export const ExpertTeam: FC = () => {
  return (
    <article className="px-8 sm:px-28 py-24 bg-[rgba(127,_85,_218,_0.02)] ">
      <div className="flex custom-container flex-col sm:flex-row gap-24">
        <div className="flex flex-col p-4 bg-[rgba(0,_146,_68,_0.08)] rounded-2xl w-full ">
          <img
            src={image}
            alt="A man pressing phone"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-6 w-full justify-center items-start grow">
          <EntaUI text="our experts" />
          <h2 className="text-base sm:text-xl !leading-[168.75%] text-[#333] font-normal  ">
            A diverse team of professionals with expertise in various industries
            and markets.
          </h2>
          {/* <h2 className="text-xl sm:text-[28px] !leading-[168.75%] text-[#333] font-semibold">
            Set your{" "}
            <span className="bg-[linear-gradient(91deg,_#009244_-0.95%,_#004d40_100.32%)] bg-clip-text text-transparent">
              beautiful Africa expansion story{"   "}
            </span>
            in motion with a free consultation with our expert team
          </h2> */}

          {/* <EntaButton value="Speak to us" onClick={showConsultation} /> */}
        </div>
      </div>
    </article>
  );
};
