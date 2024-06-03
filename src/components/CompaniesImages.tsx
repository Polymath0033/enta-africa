import { EntaUI } from "./EntaUI";
import boltShift from "../assets/bolt-shift.png";
import lightBox from "../assets/light-box.png";
import featherDev from "../assets/feather-dev.png";
import spherule from "../assets/spherule.png";
import globalBank from "../assets/global-bank.png";
import neitzsche from "../assets/neitzsche.png";
export const CompanyImages = () => {
  return (
    <section className="px-8 sm:px-24 py-24 ">
      <div className="flex custom-container flex-col gap-10 justify-center items-center">
        <EntaUI text="Meet our amazing clients" />
        <h2 className="text-2xl text-center mx-auto w-full sm:text-[32px] font-semibold !leading-[150%] text-[#333] ">
          A few Companies{" "}
          <span className="bg-[linear-gradient(96deg,_#7F55DA_68.84%,_#1F0656_106.65%)] bg-clip-text text-transparent">
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
                    <img src={boltShift} alt="Bolt shift" />{" "}
                  </li>
                  <li>
                    <img src={lightBox} alt="Light box" />
                  </li>
                  <li>
                    <img src={featherDev} alt="Feather dev" />
                  </li>
                  <li>
                    <img src={spherule} alt="Spherule" />
                  </li>
                  <li>
                    <img src={globalBank} alt="Global bank" />
                  </li>
                  <li>
                    <img src={neitzsche} alt="Neitzsche" />
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
