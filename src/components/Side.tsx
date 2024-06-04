import { FC } from "react";
import { EntaButton } from "./EntaButton";
import { Logo } from "./Logo";

export const Side: FC<{ sideHandler: () => void }> = ({ sideHandler }) => {
  return (
    <aside className="fixed top-0 left-0 bg-white w-full h-screen z-[3000] flex flex-col py-12 px-6 justify-between">
      <div className="flex justify-between">
        <Logo />
        <button type="button" onClick={sideHandler}>
          {""}
          <svg
            data-v-dc12aa52=""
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-dc12aa52=""
              d="M11 1L1 11M1 1L11 11"
              stroke="#333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>

      <nav>
        <ul className="flex flex-col items-center gap-4">
          <li className="font-medium text-base text-[#828282]">About us</li>
          <li className="font-medium text-base text-[#828282]">Speak to us</li>
        </ul>
      </nav>
      <EntaButton value="Get started" />
    </aside>
  );
};
