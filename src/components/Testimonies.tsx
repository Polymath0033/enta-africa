import man from "../assets/man-with-phone.png";
const testimonies = [
  {
    id: 1,
    date: "Monday 16th of January 2024 by 01:20 AM",
    content:
      "Enta Afrika made our expansion into Nigeria seamless and hassle-free. Their team handled everything from incorporation to licensing with utmost professionalism.",
    author: "Heala",
  },
  {
    id: 2,
    date: "Monday 16th of January 2024 by 01:20 AM",
    content:
      " Thanks to Enta Afrika, we successfully acquired a major competitor in Kenya, boosting our market presence significantly.",
    author: "Rova",
  },
];
export const Testimonies: React.FC = () => {
  return (
    <div className="px-8 sm:px-28 custom-container py-24  mx-auto">
      <div
        // ref={swipeRef}
        className={` overflow-x-scroll no-scrollbar mx-auto w-full`}
      >
        <h3 className="text-4xl font-bold mb-8 text-center text-black">
          Our client success stories
        </h3>
        <div className={`flex gap-4 mx-auto  w-max`}>
          {testimonies.map((_, i) => (
            <article
              key={i}
              className="bg-[#FCFCFC] border  border-[#F2F2F2] gap-2 p-2 rounded-xl"
            >
              <div className=" w-[380px] relative flex flex-col gap-3">
                <p className="text-right text-[#828282] text-xs font-normal ">
                  {_.date}
                </p>
                <p className="text-sm text-[#4F4F4F] font-normal ">
                  {_.content}
                </p>
                <div>
                  <img
                    src={man}
                    alt="Rasha Oudeh"
                    width={32}
                    height={32}
                    className="float-left rounded-full w-8 h-8 mr-3"
                  />
                  <p className="text-xs text-[#4F4F4F] font-normal ">
                    {_.author}
                  </p>
                  <p className="text-[#828282] -mt-1 text-sm font-normal">
                    CEO Amali
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
