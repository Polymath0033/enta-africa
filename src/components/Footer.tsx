export const Footer = () => {
  return (
    <footer className="px-8 custom-container sm:px-28 ">
      <div className="flex flex-col sm:flex-row pt-[41px] pb-[35px] items-start justify-between w-full">
        <div className="flex flex-col gap-6">
          <h5 className="bg-[linear-gradient(66deg,_#7F55DA_30.75%,_#1F0656_120.32%)] font-semibold !leading-[85.714%] bg-clip-text text-transparent text-[28px]">
            EntaAfrica
          </h5>
          <p className="text-[#4f5f4f] font-normal md:w-3/5 text-sm !leading-[185.714%]">
            ourmission is to deliver unparalleled engineering services that
            drive success andsustainability in the oil and gas sector
          </p>
        </div>
        <div className="flex gap-8 flex-col sm:flex-row">
          <div className="flex flex-col gap-4">
            <h6 className="text-[#383A47] font-bold text-base !leading-[150%]">
              Companies
            </h6>
            <ul className="text-[#797B89] text-base !leading-[142.857%]">
              <li>About us</li>
              <li>Terms and condition</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4  text-sm font-normal items-start sm:items-end ">
            <div className="flex gap-3 ">
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
                  d="M12 21.5065C12 21.7828 12.2242 22.0081 12.5002 21.9945C17.7939 21.7339 22.0059 17.3593 22.0059 12.001C22.0059 6.47489 17.526 1.99512 12 1.99512C6.47391 1.99512 1.99414 6.47489 1.99414 12.001C1.99414 16.6288 5.13587 20.5228 9.40281 21.6664C9.70832 21.7484 9.99883 21.5109 9.99883 21.1947V14.0022H8.99824C8.44563 14.0022 7.99766 13.5542 7.99766 13.0016C7.99766 12.4489 8.44564 12.001 8.99824 12.001H9.99883V9.99981C9.99883 8.34198 11.3427 6.99805 13.0006 6.99805H14.0012C14.5538 6.99805 15.0018 7.44603 15.0018 7.99863C15.0018 8.55125 14.5538 8.99922 14.0012 8.99922H13.0006C12.448 8.99922 12 9.4472 12 9.99981V12.001H14.0012C14.5538 12.001 15.0018 12.4489 15.0018 13.0016C15.0018 13.5542 14.5538 14.0022 14.0012 14.0022H12V21.5065Z"
                  fill="#7F55DA"
                />
              </svg>
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
                  fill="#7F55DA"
                />
              </svg>
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
                  d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12ZM18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  fill="#7F55DA"
                />
              </svg>
            </div>
            <address className="not-italic text-left sm:text-right">
              Company address goes here
            </address>
            <span>nfo@entaafrika.com</span>
          </div>
        </div>
      </div>
      <div className="border-t-[#F8F8FA] w-full sm:w-4/5 mx-auto border-t-2 py-6">
        <p className="text-[#797B89] text-sm !leading-[166.667%] text-center">
          © 2021 EntaAfrica. All rights reserved
        </p>
      </div>
    </footer>
  );
};
