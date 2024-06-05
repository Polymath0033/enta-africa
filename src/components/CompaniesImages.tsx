import { EntaUI } from "./EntaUI";
import rova from "../assets/image-1.png";
import evolveCredit from "../assets/image-2.svg";
import finnaProtocol from "../assets/image-3.svg";
import heala from "../assets/image-4.svg";
export const CompanyImages = () => {
  return (
    <section className="px-8 sm:px-24 py-24 ">
      <div className="flex custom-container flex-col gap-10 justify-center items-center">
        <EntaUI text="Meet our amazing clients" />
        <h2 className="text-2xl text-center mx-auto w-full sm:text-[32px] font-semibold !leading-[150%] text-[#333] ">
          A few Companies{" "}
          <span className="bg-[linear-gradient(91deg,_#E33E33_-0.95%,_#8C0900_100.32%)] bg-clip-text text-transparent">
            think we are Great
          </span>
        </h2>
        <div className="group flex gap-[1rem] overflow-hidden">
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex gap-[1rem] justify-around [--gap:1rem] animate-marquee py-8 shrink-0 group-hover:[animation-play-state:paused]"
              >
                <ul className="w-full flex gap-12">
                  <li>
                    {" "}
                    <img src={rova} alt="Rova" />{" "}
                  </li>
                  <li>
                    <img src={evolveCredit} alt="Evolve Credit" />
                  </li>
                  <li>
                    <img src={finnaProtocol} alt="Finna Protocol" />
                  </li>
                  <li>
                    <img src={heala} alt="Heala" />
                  </li>
                  {/* <li>
                    <img src={globalBank} alt="Global bank" />
                  </li>
                  <li>
                    <img src={neitzsche} alt="Neitzsche" />
                  </li> */}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
