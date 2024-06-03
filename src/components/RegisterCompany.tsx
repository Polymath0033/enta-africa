import image from "../assets/man-with-phone.png";
import { EntaButton } from "./EntaButton";
import { EntaUI } from "./EntaUI";
export const RegisterCompany = () => {
  return (
    <article className="px-8 sm:px-28 custom-container py-24 flex flex-col sm:flex-row gap-24">
      <div className="flex flex-col order-2 p-4 bg-[rgba(127,_85,_218,_0.08)] rounded-2xl w-full ">
        <img src={image} className="h-full w-full" alt="A man pressing phone" />
      </div>
      <div className="flex flex-col gap-6 w-full justify-center items-start grow">
        <EntaUI text="Easy and fast"></EntaUI>
        <h2 className="text-[28px] !leading-[168.75%] text-[#333] font-semibold">
          Register a Company in{" "}
          <span className="bg-[linear-gradient(96deg,_#7F55DA_68.84%,_#1F0656_106.65%)] bg-clip-text text-transparent">
            Nigeria and Kenya in 48 hours!
            {/* </span> */}
            {/* <br />{" "} */}
            {/* <span className="bg-[linear-gradient(96deg,_#7F55DA_68.84%,_#1F0656_106.65%)] bg-clip-text text-transparent"> */}
            {/* and Kenya in 48 hours! */}
          </span>
        </h2>
        <p className="text-[#434343] text-base mb-6 !leading-[175%] font-normal ">
          Lorem ipsum dolor sit amet consectetur. Integer imperdiet venenatis
          ornare vitae et lorem sed. Parturient libero ac felis donec id.
          Habitant eu cursus pellentesque nulla.{" "}
        </p>
        <EntaButton value="Register now" />
      </div>
    </article>
  );
};
