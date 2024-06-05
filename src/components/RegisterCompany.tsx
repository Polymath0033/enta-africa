import image from "../assets/man-with-phone.png";
import { EntaButton } from "./EntaButton";
import { EntaUI } from "./EntaUI";
export const RegisterCompany = () => {
  return (
    <article className="px-8 sm:px-28 custom-container py-24 flex flex-col sm:flex-row gap-24">
      <div className="flex flex-col order-2 sm:order-1 p-4 bg-[rgba(227,_62,_51,_0.08)] rounded-2xl w-full ">
        <img src={image} className="h-full w-full" alt="A man pressing phone" />
      </div>
      <div className="flex flex-col gap-6 w-full order-1 sm:order-2 justify-center items-start grow">
        <EntaUI text="Easy and fast"></EntaUI>
        <h2 className="text-[28px] !leading-[168.75%] text-[#333] font-semibold">
          Register a Company in{" "}
          <span className="bg-[linear-gradient(91deg,_#E33E33_-0.95%,_#8C0900_100.32%)] bg-clip-text text-transparent">
            Nigeria and Kenya in 48 hours!
          </span>
        </h2>
        <p className="text-[#434343] text-base mb-6 !leading-[175%] font-normal ">
          You provide the required documentation. We accelerate your
          registration.
        </p>
        <EntaButton value="Ready to Enta?" />
      </div>
    </article>
  );
};
