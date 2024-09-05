import React, { useMemo } from "react";
import handShakeIcon from "../assets/handshake-solid.svg";
import starIcon from "../assets/star-solid.svg";
import lightBulbIcon from "../assets/lightbulb-solid.svg";
import userFriendsIcon from "../assets/user-friends-solid.svg";
//import expertTeam from "../assets/vintage-style-people-working-office-with-computers.jpg";
import { OurStory } from "../components/OurStory";
import { ExpertTeam } from "../components/ExpertTeam";
export const About: React.FC = () => {
  const message = "Important Update on Your Account";
  const emailSubject = useMemo(() => {
    return encodeURIComponent(message);
  }, [message]);

  // Example of generating a mailto link with the encoded subject
  const mailtoLink = useMemo(() => {
    const email = "oo@entaafrika.com";
    return `mailto:${email}?subject=${emailSubject}`;
  }, [emailSubject]);
  return (
    <>
      <main>
        <section className="bg-light-primary bg-cover !max-h-[400px] h-[400px] md:h-[700px]">
          <div className=" w-full h-full flex justify-center items-center flex-col custom-container px-8 sm:px-16 md:px-28 py-24">
            <h2 className="font-bold text-5xl text-primary ">About us</h2>
            <p className="text-sm sm:text-base text-center text-black !leading-[157.5%] font-medium mt-3">
              Stay informed with the latest news, insights, and updates from
              Enta Afrika. Our blog covers a wide range of topics related to
              business incorporation, licensing, acquisitions, and the African
              market.
            </p>
          </div>
        </section>
        <OurStory />
        <ExpertTeam />
        <div className="bg-light-primary text-gray-800">
          <section className="custom-container px-8 sm:px-16 md:px-28 py-24">
            <div className="">
              <h2 className="text-2xl font-semibold mb-8 text-center">
                Our Values
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Integrity",
                    icon: handShakeIcon,
                    content:
                      "We uphold the highest standards of integrity and transparency in all our dealings",
                  },
                  {
                    title: "Excellence",
                    icon: starIcon,
                    content:
                      "We strive for excellence in everything we do, delivering top-notch services to our clients.",
                  },
                  {
                    title: "Innovation",
                    icon: lightBulbIcon,
                    content:
                      "We embrace innovation to provide efficient and effective solutions.",
                  },
                  {
                    title: "Client-Centric",
                    icon: userFriendsIcon,
                    content:
                      "Our clients are at the heart of everything we do, and we are committed to their success.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#FCFCFC] border border-[#F2F2F2] grid rounded-3xl gap-2 p-6 w-full"
                  >
                    <i className="rounded-full flex justify-center items-center bg-light-primary border  border-[#e0e0e0] w-16 h-16 p-3 ">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="h-14 w-14"
                      />
                    </i>
                    <h5 className="text-lg text-black font-normal">
                      {item.title}
                    </h5>
                    <p className="text-sm font-normal  !leading-6 text-[#333333]">
                      {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="text-center pb-6">
            <div className=" p-6 ">
              <h2 className="text-2xl font-semibold mb-5">
                {" "}
                Want to learn more about Enta Afrika? Get in Touch with us!
              </h2>
              {/* <p className="mb-4">
              Want to learn more about Enta Afrika? Get in Touch with us!
            </p> */}
              <a
                href={mailtoLink}
                //href="mailto:oo@entaafrika.com"
                target="_blank"
                className="bg-[#009244] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009244] hover:bg-green-700 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </div>
        <div className="custom-container px-8 sm:px-16 md:px-28 py-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.08468733512!2d3.3561607304068524!3d6.6131916755737885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ab8f0ab3f3%3A0x98715e9598fa4c17!2s9%20Femi%20Ogun%20St%2C%20Off%2C%20Shangisha%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725510867130!5m2!1sen!2sng"
            width="600"
            height="450"
            allowFullScreen={true}
            title="Google Maps"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] md:h-[700px]"
          ></iframe>
        </div>
      </main>
    </>
  );
};
