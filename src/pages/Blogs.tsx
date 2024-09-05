import React from "react";
import { Blog } from "../components/Blog";

export const Blogs: React.FC = () => {
  return (
    <main>
      <section className="bg-light-primary bg-cover !max-h-[400px] h-[400px] md:h-[700px]">
        <div className="w-full h-full flex justify-center items-center flex-col custom-container px-8 sm:px-16 md:px-28 py-24">
          <h2 className="font-bold text-3xl sm:text-5xl text-primary text-center ">
            Insights and Updates from Enta Afrika
          </h2>
          <p className="text-sm sm:text-base text-center text-black !leading-[157.5%] font-medium mt-3">
            Stay informed with the latest news, insights, and updates from Enta
            Afrika. Our blog covers a wide range of topics related to business
            incorporation, licensing, acquisitions, and the African market.
          </p>
        </div>
      </section>
      <Blog />
      <div className="flex items-center justify-center p-4 bg-white text-center">
        {/* <input
          type="text"
          name="blog-contact"
          id="blog-contact"
          placeholder="Enter your email"
          className=""
        /> */}
        {/* <p id="contact-description" className="text-lg  mr-8">
          Have a topic you’d like us to cover?
        </p>
        <button
          type="button"
          className="bg-[#009244] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009244] hover:bg-green-700 transition duration-300"
          aria-labelledby="contact-description"
        >
          Contact Us
        </button> */}
      </div>
    </main>
  );
};
