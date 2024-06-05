import map from "../assets/map.svg";
export const AfricanExpansion = () => {
  return (
    <section className="mt-16 px-8 sm:px-28 py-24  border-b border-[#E8E9ED] bg-[rgba(227,_62,_51,_0.04)]">
      <div className="custom-container">
        <h2 className="text-2xl sm:text-[32px] capitalize text-[#333] !leading-[149.738%] font-semibold text-center ">
          Let us activate your{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(91deg,_#E33E33_-0.95%,_#8C0900_100.32%)]">
            African expansion
          </span>{" "}
          with ease.
        </h2>
        <p className="text-sm sm:text-lg !leading-[177.778%] text-center w-full md:w-4/5 mx-auto ">
          No matter the stage you are, no matter the help you need, Your gateway
          to Africa is made so easy with us
        </p>
        <div className="overflow-x-scroll no-scrollbar">
          <div className="w-[800px]">
            <img src={map} alt="EntaAfrica Map " className="" />
          </div>
        </div>
      </div>
    </section>
  );
};
