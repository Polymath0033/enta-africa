import { FC, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { RegisterCompany } from "../components/RegisterCompany";
import { CompanyImages } from "../components/CompaniesImages";
import { BeautifulAfrica } from "../components/BeautifulAfrica";
import { AfricanExpansion } from "../components/AfricanExpansion";
import { ServiceOverview } from "../components/ServiceOverview";
import { WhyChooseUs } from "../components/WhyUs";
import { Testimonies } from "../components/Testimonies";
import { FAQ } from "../components/FAQ";
import StoreContext from "../store";
import { ContactUs } from "../components/ContactUs";

export const Home: FC = () => {
  const storeCtx = useContext(StoreContext);
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToElement(); // Scroll to the section on mount

    // Retry scrolling after the component is fully rendered
    setTimeout(() => {
      scrollToElement();
    }, 100);
  }, [location.hash]);
  const closeModal = () => {
    storeCtx.serviceHandler("businesses");
    storeCtx.modalHandler();
  };
  const registerServicesHandler = () => {
    console.log("registerServicesHandler");
    storeCtx.serviceHandler("registration");
    storeCtx.modalHandler();
  };
  return (
    <>
      {/* {showModal && (
        <ConsultationForm closeModal={closeModal} services={services} />
      )} */}

      <Hero showConsultation={closeModal} />
      <CompanyImages />
      <ServiceOverview />
      <WhyChooseUs />
      {/* <section className="px-8 sm:px-16 md:px-28 custom-container py-16 flex justify-center">
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
      <ContactUs />
      <AfricanExpansion />
    </>
  );
};
