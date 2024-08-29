import React from "react";
import buildingIcon from "../assets/building-solid.svg";
import fileAltIcon from "../assets/file-lines-solid.svg";
import handshakeIcon from "../assets/handshake-solid.svg";
export const ServiceOverview: React.FC = () => {
  return (
    <div className="px-8 sm:px-28 custom-container py-24  mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Service Overview
      </h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        Streamline Your Expansion: Expert Incorporation, Licensing, and
        Acquisition Services Across Africa
        {/* Welcome to our services page! We offer a wide range of services to help
        you with your needs. Whether you need assistance with a project or are
        looking for ongoing support, we are here to help. */}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-16 gap-y">
        <div className="flex items-start mb-4">
          <div className="bg-light-primary rounded-md  text-primary mr-4 max-w-[4.5rem] max-h-[4.5rem] h-[4.5rem] w-full flex justify-center items-center grow">
            <img
              src={buildingIcon}
              alt="Building Icon"
              className=" h-16 !w-[25px]"
            />
          </div>
          <div>
            <h2 className="text-xl !tracking-[-.12px] !leading-7 font-medium">
              Incorporation Services
            </h2>
            <p className="mb-4 !tracking-[-.12px] !leading-7  !text-[15px] text-gray-600">
              Setting up a business in Nigeria, Ghana, Kenya, or Rwanda? We’ve
              got you covered. We’ll handle all the paperwork and legalities, so
              you can focus on your vision.
            </p>
            <a
              href="/incorporation-services"
              className="text-primary hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="bg-light-primary  text-primary mr-4 rounded-md  max-w-[4.5rem] max-h-[4.5rem] h-[4.5rem] w-full flex justify-center items-center grow">
            <img
              src={fileAltIcon}
              alt="file-alt Icon"
              className=" h-16 !w-[25px]"
            />
          </div>
          <div>
            <h2 className="text-xl !tracking-[-.12px] !leading-7 font-medium">
              Licenses to Operate
            </h2>
            <p className="mb-4 !tracking-[-.12px] !leading-7  !text-[15px] text-gray-600">
              Navigating the regulatory maze can be daunting, especially in the
              fintech world. Our team ensures you get all the necessary licenses
              without the hassle.
            </p>
            <a
              href="/incorporation-services"
              className="text-primary hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="bg-light-primary grow text-primary mr-4 max-w-[4.5rem] max-h-[4.5rem] h-[4.5rem] w-full flex justify-center items-center rounded-md ">
            <img
              src={handshakeIcon}
              alt="handshake Icon"
              className=" h-16 !w-[25px]"
            />
          </div>
          <div>
            <h2 className="text-xl !tracking-[-.12px] !leading-7 font-medium">
              Acquisitions
            </h2>
            <p className="mb-4 !tracking-[-.12px] !leading-7  !text-[15px] text-gray-600">
              Looking to expand through mergers and acquisitions? We provide
              comprehensive support from start to finish, making sure every step
              is smooth and compliant.
            </p>
            <a
              href="/incorporation-services"
              className="text-primary hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
