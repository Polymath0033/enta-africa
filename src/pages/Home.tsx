import { FC, useState } from "react";
import { ConsultationForm } from "../components/ConsultationForm";

import { Hero } from "../components/Hero";
import { RegisterCompany } from "../components/RegisterCompany";
import { CompanyImages } from "../components/CompaniesImages";
import { BeautifulAfrica } from "../components/BeautifulAfrica";
import { AfricanExpansion } from "../components/AfricanExpansion";
import { ServiceOverview } from "../components/ServiceOverview";
import { WhyChooseUs } from "../components/WhyUs";
import { Testimonies } from "../components/Testimonies";
import { FAQ } from "../components/FAQ";

export const Home: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [services, setServices] = useState<"businesses" | "registration">(
    "businesses"
  );
  const closeModal = () => {
    setServices("businesses");
    setShowModal(!showModal);
  };
  const registerServicesHandler = () => {
    setServices("registration");
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <ConsultationForm closeModal={closeModal} services={services} />
      )}

      <Hero showConsultation={closeModal} />
      <CompanyImages />
      <ServiceOverview />
      <WhyChooseUs />
      {/* <section className="px-8 sm:px-28 custom-container py-16 flex justify-center">
        <ul className="py-8 px-12 rounded-[48px] sm:rounded-[102px] flex flex-col justify-center items-center sm:flex-row gap-[10px] border-[##0092441F] border border-solid bg-[rgba(0,_146,_68,_0.04)]  ">
          <li className="flex flex-col gap-3 items-center justify-center sm:justify-between pb-8 sm:border-b-0 sm:pb-0 sm:pr-12 border-b sm:border-r border-[#E0E0E0]">
            <p className="font-semibold text-[38px] text-[#163930] ">8,523</p>
            <span className="text-lg font-normal text-center text-[#828282]">
              Licensed companies
            </span>
          </li>
          <li className="flex flex-col gap-3 items-center justify-center sm:justify-between  py-8 sm:border-b-0 sm:pb-0 sm:px-12 border-b sm:border-r border-[#E0E0E0]">
            <p className="font-semibold text-[38px] text-[#163930] ">10</p>
            <span className="text-lg font-normal text-center text-[#828282]">
              African countries
            </span>
          </li>
          <li className="flex flex-col gap-3 items-center justify-center sm:justify-between pt-8 sm:border-b-0 sm:pb-0 sm:pl-12">
            <p className="font-semibold text-[38px] text-[#163930] ">100+</p>
            <span className="text-lg font-normal text-center text-[#828282]">
              Happy clients
            </span>
          </li>
        </ul>
      </section> */}
      <RegisterCompany registerHandler={registerServicesHandler} />

      <BeautifulAfrica showConsultation={closeModal} />
      <FAQ />
      <Testimonies />
      <AfricanExpansion />
    </>
  );
};
