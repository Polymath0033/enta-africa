import map from "../assets/map.svg";
export const AfricanExpansion = () => {
  return (
    <section className="mt-16 px-8 sm:px-28 py-24  border-b border-[#E8E9ED] bg-[rgba(127,_85,_218,_0.04)]">
      <div className="custom-container">
        <h2 className="text-2xl sm:text-[32px] capitalize text-[#333] !leading-[149.738%] font-semibold text-center ">
          Let us activate your{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(96deg,_#7F55DA_68.84%,_#1F0656_106.65%)]">
            African expansion
          </span>{" "}
          with ease.
        </h2>
        <p className="text-sm sm:text-lg !leading-[177.778%] text-center w-full md:w-4/5 mx-auto ">
          Lorem ipsum dolor sit amet consectetur. Ac sem magna habitant
          elementum justo. Mauris fusce lobortis ipsum est aliquet vestibulum
          lore convallis.
        </p>
        <div className="overflow-x-scroll no-scrollbar">
          <img src={map} alt="EntaAfrica Map " className="" />
        </div>
      </div>
    </section>
  );
};
