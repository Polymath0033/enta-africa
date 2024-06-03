import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RegisterCompany } from "./components/RegisterCompany";
import { CompanyImages } from "./components/CompaniesImages";
import { BeautifulAfrica } from "./components/BeautifulAfrica";
import { Blog } from "./components/Blog";
import { AfricanExpansion } from "./components/AfricanExpansion";
import { Footer } from "./components/Footer";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const routes = createBrowserRouter([
//   {path: "/", element: <App />}
// ]);
function App() {
  return (
    <>
      <Header />
      <div className="relative  w-full overflow-hidden top-[109.33px]">
        <Hero />
        <section className="px-8 sm:px-28 custom-container py-16 flex justify-center">
          <ul className="py-8 px-12 rounded-[48px] sm:rounded-[102px] flex flex-col justify-center items-center sm:flex-row gap-[10px] border-[rgba(127,_85,_218,_0.12)] border border-solid bg-[rgba(127,_85,_218,_0.04)]  ">
            <li className="flex flex-col gap-3 items-center justify-center sm:justify-between pb-8 sm:border-b-0 sm:pb-0 sm:pr-12 border-b sm:border-r border-[#E0E0E0]">
              <p className="font-semibold text-[38px] text-[#163930] ">8,523</p>
              <span className="text-lg font-normal text-center text-[#828282]">
                Licensed companies
              </span>
            </li>
            <li className="flex flex-col gap-3 items-center justify-center sm:justify-between  py-8 sm:border-b-0 sm:pb-0 sm:px-12 border-b sm:border-r border-[#E0E0E0]">
              <p className="font-semibold text-[38px] text-[#163930] ">12</p>
              <span className="text-lg font-normal text-center text-[#828282]">
                African countries
              </span>
            </li>
            <li className="flex flex-col gap-3 items-center justify-center sm:justify-between pt-8 sm:border-b-0 sm:pb-0 sm:pl-12">
              <p className="font-semibold text-[38px] text-[#163930] ">7,520</p>
              <span className="text-lg font-normal text-center text-[#828282]">
                Happy clients
              </span>
            </li>
          </ul>
        </section>
        <RegisterCompany />
        <CompanyImages />
        <BeautifulAfrica />
        <Blog />
        <AfricanExpansion />
        <Footer />
      </div>
    </>
  );
}

export default App;
