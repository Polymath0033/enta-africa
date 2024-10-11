import logo from "../assets/enta-afrika-logo.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-8 custom-container sm:px-28 mt-36 ">
      <div className="flex flex-col sm:flex-row pt-[41px] pb-[35px] items-start justify-between w-full">
        <div className="flex flex-col gap-6">
          <div className=" h-14">
            <img src={logo} className="h-full" alt="Enta Afrika" />
          </div>
        </div>
        <div className="flex gap-8 flex-col sm:flex-row">
          <div className="flex flex-col gap-4">
            <h6 className="text-[#383A47] font-bold text-base !leading-[150%]">
              Quick links
            </h6>
            <ul className="text-[#797B89] text-base !leading-[142.857%]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col gap-4">
            <h6 className="text-[#383A47] font-bold text-base !leading-[150%]">
              Contacts
            </h6>
            <ul className="text-[#797B89] text-base !leading-[142.857%]">
              <li>About us</li>
              <li>T&Cs</li>
              <li>Privacy</li>
            </ul>
          </div> */}
          <div className="flex flex-col gap-4  text-sm font-normal items-start sm:items-end ">
            <div className="flex gap-3 ">
              <a href="https://x.com/EntaAfrika" target="_blank" rel="noopener">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.9583 7.5C21.4583 15 15.9583 21 8.95832 21C6.54641 21 4.1345 20.6768 2.24226 19.7706C1.80888 19.5631 1.97828 18.985 2.45773 18.9532C4.78781 18.7987 6.71602 18.2423 7.95832 17C2.54192 15.1945 1.60762 8.4995 2.58061 5.00719C2.69485 4.59713 3.22798 4.59499 3.44287 4.96246C5.10435 7.80371 8.26352 9.39003 12.2229 9.02396C12.0516 8.54804 11.9583 8.03492 11.9583 7.5C11.9583 5.01472 13.973 3 16.4583 3C17.9765 3 19.3191 3.75182 20.1341 4.90346L21.8512 4.65815C22.2791 4.59703 22.5777 5.07087 22.338 5.43047L20.9583 7.5Z"
                    fill="#009244"
                  />
                </svg>
                {""}
              </a>
              <a
                href="https://www.linkedin.com/company/enta-afrika"
                target="_blank"
                rel="noopener"
              >
                {""}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 0C21.0609 0 22.0783 0.421428 22.8284 1.17157C23.5786 1.92172 24 2.93913 24 4V20C24 21.0609 23.5786 22.0783 22.8284 22.8284C22.0783 23.5786 21.0609 24 20 24H4C2.93913 24 1.92172 23.5786 1.17157 22.8284C0.421428 22.0783 0 21.0609 0 20V4C0 2.93913 0.421428 1.92172 1.17157 1.17157C1.92172 0.421428 2.93913 0 4 0H20ZM6.66667 9.33333C6.31304 9.33333 5.97391 9.47381 5.72386 9.72386C5.47381 9.97391 5.33333 10.313 5.33333 10.6667V17.3333C5.33333 17.687 5.47381 18.0261 5.72386 18.2761C5.97391 18.5262 6.31304 18.6667 6.66667 18.6667C7.02029 18.6667 7.35943 18.5262 7.60948 18.2761C7.85952 18.0261 8 17.687 8 17.3333V10.6667C8 10.313 7.85952 9.97391 7.60948 9.72386C7.35943 9.47381 7.02029 9.33333 6.66667 9.33333ZM10.6667 8C10.313 8 9.97391 8.14048 9.72386 8.39052C9.47381 8.64057 9.33333 8.97971 9.33333 9.33333V17.3333C9.33333 17.687 9.47381 18.0261 9.72386 18.2761C9.97391 18.5262 10.313 18.6667 10.6667 18.6667C11.0203 18.6667 11.3594 18.5262 11.6095 18.2761C11.8595 18.0261 12 17.687 12 17.3333V12.4533C12.4067 11.9947 13.0933 11.456 13.8573 11.1293C14.3013 10.94 14.9693 10.8627 15.4333 11.0093C15.5873 11.0484 15.7244 11.1363 15.824 11.26C15.8933 11.3533 16 11.5613 16 12V17.3333C16 17.687 16.1405 18.0261 16.3905 18.2761C16.6406 18.5262 16.9797 18.6667 17.3333 18.6667C17.687 18.6667 18.0261 18.5262 18.2761 18.2761C18.5262 18.0261 18.6667 17.687 18.6667 17.3333V12C18.6667 11.1067 18.44 10.312 17.968 9.67467C17.5337 9.09674 16.9258 8.67297 16.2333 8.46533C15.0307 8.088 13.6987 8.29733 12.8093 8.67867C12.5244 8.80062 12.247 8.93954 11.9787 9.09467C11.9228 8.78745 11.7608 8.5096 11.5211 8.30955C11.2813 8.1095 10.9789 7.99995 10.6667 8ZM6.66667 5.33333C6.31304 5.33333 5.97391 5.47381 5.72386 5.72386C5.47381 5.97391 5.33333 6.31304 5.33333 6.66667C5.33333 7.02029 5.47381 7.35943 5.72386 7.60948C5.97391 7.85952 6.31304 8 6.66667 8C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667C8 6.31304 7.85952 5.97391 7.60948 5.72386C7.35943 5.47381 7.02029 5.33333 6.66667 5.33333Z"
                    fill="#009244"
                  />
                </svg>
              </a>
            </div>
            <address className="not-italic text-left sm:text-right">
              Plot 9a, Femi Ogun Street, Magodo, Lagos
            </address>
            <span>nfo@entaafrika.com</span>
          </div>
        </div>
      </div>
      <div className="border-t-[#F8F8FA] w-full sm:w-4/5 mx-auto border-t-2 py-6">
        <p className="text-[#797B89] text-sm !leading-[166.667%] text-center">
          © {year} EntaAfrica. All rights reserved
        </p>
      </div>
    </footer>
  );
};
