const blogs = [
  {
    image: "blog-1",
    headline: "Understanding the Business Landscape in Africa",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed et in massa sit vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at. Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc tempor.",
  },
  {
    image: "blog-2",
    headline: "Navigating Fintech Regulations in Nigeria",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed et in massa sit vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at. Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc tempor.",
  },
  {
    image: "blog-3",
    headline: "Top Strategies for Successful Mergers and Acquisitions",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed et in massa sit vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at. Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc tempor.",
  },
  {
    image: "blog-4",
    headline: "Business expansion in Africa",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed et in massa sit vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at. Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc tempor.",
  },
];
export const Blog = () => {
  const imageHelper = (src: string) =>
    new URL(`../assets/${src}.png`, import.meta.url).href;
  return (
    <section className="px-8 custom-container sm:px-28 py-24 flex flex-col gap-6">
      <h2 className="text-[#333] text-center text-2xl sm:text-[32px] font-semibold !leading-[162.5%] ">
        Featured articles from{" "}
        <span className="bg-[linear-gradient(91deg,_#009244_-0.95%,_#004d40_100.32%)] text-transparent bg-clip-text ">
          {" "}
          EntaAfrica
        </span>
      </h2>
      {/* <p className="text-sm sm:text-base text-center text-[#434343] w-full md:w-3/5 mx-auto !leading-[157.5%]">
        Authentic gists about doing business in Africa from African
        entrepreneurs
      </p> */}
      <div className="overflow-x-scroll w-full no-scrollbar">
        <ul className="mt-10 w-max  flex gap-6">
          {blogs.map((blog, index) => (
            <li
              key={index}
              className="w-[390px] rounded-2xl border flex flex-col items-start p-4 gap-[10px] shadow-[0px_0px_64.8px_0px_rgba(127,_85,_218,_0.06)] border-[#f2f2f2]"
            >
              <img
                src={imageHelper(blog.image)}
                className=" h-[200px] w-full object-cover rounded-lg "
                alt={blog.image}
              />
              <h6 className="text-xl font-semibold text-[#333]">
                {blog.headline}
              </h6>
              <p className="text-sm !leading-[171.429%] font-normal text-[#333]">
                Lorem ipsum dolor sit amet consectetur. Sed et in massa sit
                vestibulum sit dignissim suspendisse nam. Mi ut donec tellus at.
                Laoreet faucibus ac sed sit sem. Amet nibh dignissim nunc
                tempor.
              </p>
              <a
                href="#"
                className="text-sm flex gap-2 font-normal text-primary"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
                    stroke="#009244"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.91699 10.5H16.942"
                    stroke="#009244"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
