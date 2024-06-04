import { FC } from "react";
import image from "../assets/consultation-image.png";
import { Modal } from "./Modal";
import { EntaButton } from "./EntaButton";
export const ConsultationForm: FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  return (
    <Modal closeModal={closeModal}>
      <form className="flex w-full flex-col gap-[10px] overflow-y-auto overflow-x-hidden no-scrollbar">
        <div>
          <h1 className="font-semibold text-[28px] text-[#333] text-center">
            Get a{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(96deg,_#7F55DA_68.84%,_#1F0656_106.65%)]">
              Free
            </span>{" "}
            Consultation
          </h1>
          <p className="text-sm !leading-6 font-normal text-center">
            Lorem ipsum dolor sit amet consectetur. Turpis erat tellus egestas a
            magna diam mi facilisis mauris quam nulla.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-5">
            <label
              htmlFor="name"
              className="flex flex-col w-full text-sm font-medium"
            >
              <span className=" mb-2 text-[#4f4f4f]">Name</span>
              <input
                type="text"
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
                name="name"
                id="name"
                placeholder="Input name"
              />
            </label>
            <label
              htmlFor="company-name"
              className="flex text-sm font-medium flex-col w-full"
            >
              <span className=" mb-2 text-[#4f4f4f]">Company name</span>
              <input
                type="text"
                name="company-name"
                id="company-name"
                placeholder="Input company name"
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label
              htmlFor="countries"
              className="flex flex-col w-full text-sm font-medium"
            >
              <span className=" mb-2 text-[#4f4f4f]">Select countries</span>
              <select
                name="countries"
                id="countries"
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option>
              </select>
            </label>
          </div>
          {/* <select name="countries" id="countries"></select> */}
          <div className="flex flex-col sm:flex-row gap-5">
            <label
              htmlFor="services"
              className="flex flex-col w-full text-sm font-medium"
            >
              <span className=" mb-2 text-[#4f4f4f]">Type of services</span>
              <select
                name="services"
                id="services"
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              >
                <option value="Businesses">Businesses</option>
                <option value="Registration">Registration</option>
                {/* <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option> */}
              </select>
            </label>
            <label
              htmlFor="email"
              className="flex text-sm font-medium flex-col w-full"
            >
              <span className=" mb-2 text-[#4f4f4f]">Email</span>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Input email"
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              />
            </label>
          </div>
          <label
            htmlFor="description"
            className="flex text-sm font-medium flex-col w-full"
          >
            <span className=" mb-2 text-[#4f4f4f]">Description</span>
            <textarea
              placeholder="Input description"
              rows={4}
              name="description"
              className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              id="description"
            ></textarea>
          </label>
        </div>
        <EntaButton type="submit" value="Register now" />
      </form>
      <div className="w-full relative h-[calc(100%_-_14px)] rounded-[15.132px] my-auto hidden sm:block ">
        <img
          src={image}
          alt="Three office workers"
          className=" rounded-[15.132px] !h-full object-cover"
        />
        <div className="absolute left-0 bottom-0 text-lg font-normal  w-full p-2  z-10 bg-[#FFFFFF4D] flex backdrop-blur-[9.078948020935059px] rounded-br-[15.132px] rounded-bl-[15.132px] text-white border-t border-t-[#FFFFFF4D]">
          Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper facilisis
          nisl quisque ante id. Neque vulputate .
        </div>
      </div>
      <button
        type="button"
        onClick={closeModal}
        className="absolute top-4 right-4 sm:top-12 sm:right-12 z-40 backdrop-blur-[5.599999904632568px] rounded-[100px] h-5 w-5 sm:h-7 sm:w-7 flex justify-center items-center bg-[rgba(0,_0,_0,_0.36)]"
      >
        {""}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M9.69922 20.2969L20.3058 9.69027"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3058 20.3097L9.69922 9.70312"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Modal>
  );
};
