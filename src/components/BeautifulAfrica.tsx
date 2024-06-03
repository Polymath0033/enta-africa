import { EntaUI } from "./EntaUI";
import image from "../assets/earth-with-plane.png";
import { EntaButton } from "./EntaButton";
export const BeautifulAfrica = () => {
  return (
    <article className="px-8 sm:px-28 py-24 bg-[rgba(127,_85,_218,_0.02)] ">
      <div className="flex custom-container flex-col sm:flex-row gap-24">
        <div className="flex flex-col gap-6 w-full justify-center items-start grow">
          <EntaUI text="Start the story" />
          <h2 className="text-xl sm:text-[28px] !leading-[168.75%] text-[#333] font-semibold">
            Set your
            <span className="bg-[linear-gradient(96deg,_#7F55DA_68.84%,_#1F0656_106.65%)] bg-clip-text text-transparent">
              beautiful Africa expansion story{"   "}
            </span>
            in motion with a free consultation with our expert team
          </h2>
          <p className="text-[#434343] text-base mb-6 !leading-[175%] font-normal ">
            Lorem ipsum dolor sit amet consectetur. Integer imperdiet venenatis
            ornare vitae et lorem sed.
          </p>
          <EntaButton value="Speak to us" />
        </div>
        <div className="flex flex-col p-4 bg-[rgba(127,_85,_218,_0.08)] rounded-2xl w-full ">
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
