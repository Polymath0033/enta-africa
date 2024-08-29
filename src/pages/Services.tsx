import buildingIcon from "../assets/building-solid.svg";
import fileAltIcon from "../assets/file-lines-solid.svg";
import checkCircleIcon from "../assets/circle-check-solid.svg";
import sitemapIcon from "../assets/sitemap-solid.svg";
import usersIcon from "../assets/users-solid.svg";
import streamIcon from "../assets/stream-solid.svg";
import mapMarkedIcon from "../assets/map-marked-alt-solid.svg";
import searchIcon from "../assets/magnifying-glass-solid.svg";
import balancedScaleIcon from "../assets/scale-balanced-solid.svg";
import handShakeIcon from "../assets/handshake-solid.svg";
import gavelIcon from "../assets/gavel-solid.svg";
import globeAfricaIcon from "../assets/earth-africa-solid.svg";
import handsHelpingIcon from "../assets/handshake-angle-solid.svg";
import clipboardCheckIcon from "../assets/clipboard-check-solid.svg";
import fileSignatureIcon from "../assets/file-signature-solid.svg";
import thumbsUpIcon from "../assets/thumbs-up-solid.svg";
import syncAltIcon from "../assets/rotate-solid.svg";
import industryIcon from "../assets/industry-solid.svg";
import clockIcon from "../assets/clock-solid.svg";
// import shieldAltIcon from '../assets/shield-halved-solid.svg';

export const Services: React.FC = () => {
  return (
    <main>
      <section className="bg-services bg-light-primary !max-h-[400px] h-[400px] md:h-[700px] bg-cover ">
        <div className="flex flex-col justify-center items-center custom-container px-8 sm:px-28 py-24">
          <h1 className=" font-bold text-6xl text-primary ">Our services</h1>
          <p className="">What we offer at Enta Afrika</p>
        </div>
      </section>

      <section className="custom-container px-8 sm:px-28 py-24">
        <h3 className="text-primary text-center text-4xl leading-2 font-semibold uppercase">
          Seamless Business Incorporation Across Africa
        </h3>
        <p className="text-center font-medium mb-3">
          Setting up a business in Africa has never been easier. Enta Afrika
          specializes in incorporating businesses in Nigeria, Ghana, Kenya, and
          Rwanda. We handle all the legal and administrative tasks, so you can
          focus on what matters most – growing your business.
        </p>
        {/* className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10" */}
        <h4 className="text-center pt-12 font-medium text-3xl">
          Our Incorporation Services:
        </h4>
        <ul className="grid mt-8 gap-5 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
          {[
            {
              icon: buildingIcon,
              title: "Company Registration",
              content:
                "We handle the entire registration process, ensuring compliance with local regulations.",
            },
            {
              icon: fileAltIcon,
              title: "Legal Documentation",
              content:
                "Preparation and filing of all necessary legal documents.",
            },
            {
              icon: sitemapIcon,
              title: "Business Structures",
              content:
                "Guidance on choosing the best legal structure for your business.",
            },
            {
              icon: checkCircleIcon,
              title: "Local Compliance",
              content:
                "Ensuring your business meets all local compliance requirements.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="bg-[#FCFCFC] border border-[#F2F2F2] grid rounded-3xl gap-2 p-6 grow"
            >
              <div className="rounded-full flex justify-center items-center bg-light-primary border  border-[#e0e0e0] w-16 h-16 p-3 ">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h5 className="text-lg text-black font-normal">{item.title}</h5>
              <p className="text-sm font-normal  !leading-6 text-[#333333]">
                {item.content}
              </p>
            </li>
          ))}
        </ul>
        <h4 className="text-center pt-12 font-medium text-3xl">
          Why Incorporate with Us:
        </h4>
        <div className="flex justify-center">
          <ul className="grid mt-8 gap-5 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            {[
              {
                icon: usersIcon,
                title: "Expert Knowledge",
                content:
                  "Our team has extensive experience in business incorporation across multiple African countries.",
              },
              {
                icon: streamIcon,
                title: "Streamlined Process",
                content:
                  "We simplify the incorporation process, reducing time and effort on your part.",
              },
              {
                icon: mapMarkedIcon,
                title: "Local Insights",
                content:
                  "Leverage our local expertise to navigate the regulatory landscape effectively.",
              },
              // {
              //   icon: checkCircleIcon,
              //   title: "Local Compliance",
              //   content:
              //     "Ensuring your business meets all local compliance requirements.",
              // },
            ].map((item, index) => (
              <li
                key={index}
                className="bg-[#FCFCFC] border border-[#F2F2F2] grid rounded-3xl gap-2 p-6 w-full"
              >
                <div className="rounded-full flex justify-center items-center bg-light-primary border  border-[#e0e0e0] w-16 h-16 p-3 ">
                  <img src={item.icon} alt={item.title} className="h-10 w-10" />
                </div>
                <h5 className="text-lg text-black font-normal">{item.title}</h5>
                <p className="text-sm font-normal  !leading-6 text-[#333333]">
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className=" custom-container px-8 sm:px-28 py-24">
        <h3 className="text-primary text-center text-4xl leading-2 font-semibold uppercase">
          Obtain Essential Licenses to Operate in Africa
        </h3>
        <p className="text-center font-medium mb-3">
          Obtaining the necessary licenses to operate in Africa can be
          challenging. Enta Afrika specializes in securing licenses for various
          industries, with a focus on fintech companies. We ensure you meet all
          regulatory requirements swiftly and efficiently.
        </p>
        <h4 className="text-center pt-12 font-medium text-3xl">
          Our Licensing Services:
        </h4>

        <ul className="grid mt-8 gap-5 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
          {[
            {
              icon: clipboardCheckIcon,
              title: "Regulatory Compliance",
              content:
                "Guidance on all regulatory requirements specific to your industry.",
            },
            {
              icon: fileSignatureIcon,
              title: "Documentation",
              content: "Preparation and submission of all necessary documents.",
            },
            {
              icon: thumbsUpIcon,
              title: "Approval Process",
              content:
                "Liaising with relevant authorities to expedite the approval process.",
            },
            {
              icon: syncAltIcon,
              title: "Renewals and Updates",
              content:
                "Assistance with license renewals and updates to maintain compliance.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="bg-[#FCFCFC] border border-[#F2F2F2] grid rounded-3xl gap-2 p-6 grow"
            >
              <div className="rounded-full flex justify-center items-center bg-light-primary border  border-[#e0e0e0] w-16 h-16 p-3 ">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h5 className="text-lg text-black font-normal">{item.title}</h5>
              <p className="text-sm font-normal  !leading-6 text-[#333333]">
                {item.content}
              </p>
            </li>
          ))}
        </ul>
        <h4 className="text-center pt-12 font-medium text-3xl">
          Why Choose Our Licensing Services:
        </h4>
        <div className="flex justify-center items-center mx-auto">
          <ul className="grid mt-8 gap-5 justify-center mx-auto grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            {[
              {
                icon: industryIcon,
                title: "Industry Expertise",
                content:
                  "Specialized knowledge in fintech and other regulated sectors.",
              },
              {
                icon: clockIcon,
                title: "Efficient Process",
                content:
                  "Streamlined approach to obtaining licenses, minimizing delays.",
              },
              {
                icon: handShakeIcon,
                title: "Regulatory Relationships",
                content:
                  "Strong relationships with regulatory bodies to facilitate approvals. ",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="bg-[#FCFCFC] border border-[#F2F2F2] grid rounded-3xl gap-2 p-6 w-full"
              >
                <div className="rounded-full flex justify-center items-center bg-light-primary border  border-[#e0e0e0] w-16 h-16 p-3 ">
                  <img src={item.icon} alt={item.title} className="h-10 w-10" />
                </div>
                <h5 className="text-lg text-black font-normal">{item.title}</h5>
                <p className="text-sm font-normal  !leading-6 text-[#333333]">
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className=" custom-container px-8 sm:px-28 py-24">
        <h3 className="text-primary text-center text-4xl leading-2 font-semibold uppercase">
          Navigate Mergers and Acquisitions with Confidence
        </h3>
        <p className="text-center font-medium mb-3">
          Expanding your business through mergers and acquisitions in Africa
          requires expert guidance. Enta Afrika provides comprehensive advisory
          services, ensuring successful and compliant transactions.
        </p>
        <h4 className="text-center pt-12 font-medium text-3xl">
          Our Acquisition Services:
        </h4>

        <ul className="grid mt-8 gap-5 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
          {[
            {
              icon: searchIcon,
              title: "Due Diligence",
              content: "Thorough analysis and evaluation of target companies.",
            },
            {
              icon: balancedScaleIcon,
              title: "Valuation Services",
              content:
                "Accurate valuation of businesses to ensure fair transactions.",
            },
            {
              icon: handsHelpingIcon,
              title: "Negotiation Support",
              content:
                "Expert support during negotiations to secure favorable terms.",
            },
            {
              icon: gavelIcon,
              title: "Legal Assistance",
              content:
                "Handling all legal documentation and regulatory compliance.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="bg-[#FCFCFC] border border-[#F2F2F2] grid rounded-3xl gap-2 p-6 grow"
            >
              <div className="rounded-full flex justify-center items-center bg-light-primary border  border-[#e0e0e0] w-16 h-16 p-3 ">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h5 className="text-lg text-black font-normal">{item.title}</h5>
              <p className="text-sm font-normal  !leading-6 text-[#333333]">
                {item.content}
              </p>
            </li>
          ))}
        </ul>
        <h4 className="text-center pt-12 font-medium text-3xl">
          Why Work with Us:
        </h4>
        <div className="flex justify-center items-center mx-auto">
          {/* 
: 
: 
: 
: 

: 
: 
: 
 */}
          <ul className="grid mt-8 gap-5 justify-center mx-auto grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            {[
              {
                icon: searchIcon,
                title: "Expert Advisors",
                content:
                  "Experienced team of advisors with a track record of successful M&A transactions.",
              },
              {
                icon: balancedScaleIcon,
                title: "Comprehensive Support",
                content:
                  "End-to-end support throughout the acquisition process.",
              },
              {
                icon: globeAfricaIcon,
                title: "Local Expertise",
                content:
                  "In-depth understanding of the African market and regulatory environment.",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="bg-[#FCFCFC] border border-[#F2F2F2] grid rounded-3xl gap-2 p-6 w-full"
              >
                <div className="rounded-full flex justify-center items-center bg-light-primary border  border-[#e0e0e0] w-16 h-16 p-3 ">
                  <img src={item.icon} alt={item.title} className="h-10 w-10" />
                </div>
                <h5 className="text-lg text-black font-normal">{item.title}</h5>
                <p className="text-sm font-normal  !leading-6 text-[#333333]">
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* <section className="custom-container px-8 sm:px-28 py-24">
        <h2 className="text-primary text-5xl font-semibold uppercase">
          Incorporation services
        </h2>
        <p className="">Seamless Business Incorporation Across Africa</p>
      </section> */}
    </main>
  );
};
