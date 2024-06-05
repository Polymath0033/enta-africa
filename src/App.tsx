import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RegisterCompany } from "./components/RegisterCompany";
import { CompanyImages } from "./components/CompaniesImages";
import { BeautifulAfrica } from "./components/BeautifulAfrica";
import { Blog } from "./components/Blog";
import { AfricanExpansion } from "./components/AfricanExpansion";
import { Footer } from "./components/Footer";
import { ConsultationForm } from "./components/ConsultationForm";
import { useState } from "react";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const routes = createBrowserRouter([
//   {path: "/", element: <App />}
// ]);

function App() {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(!showModal);
  return (
    <>
      {showModal && <ConsultationForm closeModal={closeModal} />}
      <Header />
      <div className="relative  w-full overflow-hidden top-[109.33px]">
        <Hero showConsultation={closeModal} />
        <section className="px-8 sm:px-28 custom-container py-16 flex justify-center">
          <ul className="py-8 px-12 rounded-[48px] sm:rounded-[102px] flex flex-col justify-center items-center sm:flex-row gap-[10px] border-[#E33E331F] border border-solid bg-[rgba(227,_62,_51,_0.04)]  ">
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
        </section>
        <RegisterCompany />
        <CompanyImages />
        <BeautifulAfrica showConsultation={closeModal} />
        <Blog />
        <AfricanExpansion />
        <Footer />
      </div>
    </>
  );
}

export default App;
