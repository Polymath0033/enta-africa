import React from "react";
import tachometer from "../assets/tachometer-alt-solid.svg";
import networkWired from "../assets/network-wired-solid.svg";
import checkCircle from "../assets/circle-check-solid.svg";
import lightbulb from "../assets/lightbulb-solid.svg";
export const WhyChooseUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        Why Choose Us
      </h2>
      <ul className="space-y-8">
        <li className="ml-0 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <i className="fas fa-lightbulb text-4xl text-primary mr-4">
              <img
                src={lightbulb}
                alt="Lightbulb Icon"
                className="h-16 !w-[25px]"
              />
            </i>
            <h3 className="text-2xl font-semibold">Expertise</h3>
          </div>
          <p className="text-gray-600">
            Our team knows the African business landscape inside and out.
          </p>
        </li>
        <li className="ml-4 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <i className="fas fa-tachometer-alt text-4xl text-primary mr-4">
              <img
                src={tachometer}
                alt="Tachometer Icon"
                className="h-16 !w-[25px]"
              />
            </i>
            <h3 className="text-2xl font-semibold">Efficiency</h3>
          </div>
          <p className="text-gray-600">
            We streamline processes, saving you time and money.
          </p>
        </li>
        <li className="ml-8 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <i className="fas fa-check-circle text-4xl text-primary mr-4">
              <img
                src={checkCircle}
                alt="Check Circle Icon"
                className="h-16 !w-[25px]"
              />
            </i>
            <h3 className="text-2xl font-semibold">Reliability</h3>
          </div>
          <p className="text-gray-600">
            We pride ourselves on delivering accurate and timely services.
          </p>
        </li>
        <li className="ml-12 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <i className="fas fa-network-wired text-4xl text-primary mr-4">
              <img
                src={networkWired}
                alt="Network Wired Icon"
                className="h-16 !w-[25px]"
              />
            </i>
            <h3 className="text-2xl font-semibold">Network</h3>
          </div>
          <p className="text-gray-600">
            Our extensive local contacts ensure smooth operations every time.
          </p>
        </li>
      </ul>
    </div>
  );
};
