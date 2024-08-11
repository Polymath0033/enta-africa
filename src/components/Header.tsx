import { EntaButton } from "./EntaButton";
import { Logo } from "./Logo";
import { FC, useState } from "react";
import { Side } from "./Side";
export const Header: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  return (
    <header className="fixed top-0  left-0 w-screen z-10 px-8 sm:px-28 py-[26px] bg-white  border">
      <div className="custom-container flex justify-between items-center">
        <Logo />
        <nav className="hidden sm:block">
          <ul className="flex gap-8">
            <li className="font-medium text-base text-[#828282]">About us</li>
            <li className="font-medium text-base text-[#828282]">
              Speak to us
            </li>
          </ul>
        </nav>
        <EntaButton
          onClick={closeModal}
          value="Get started"
          className="hidden sm:block"
        />
        <button
          type="button"
          onClick={toggleSidebar}
          className="flex sm:hidden flex-col gap-2 w-8"
        >
          {[1, 2, 3].map((_, index) => (
            <span key={index} className="w-full h-[3px] bg-[#828282]"></span>
          ))}
        </button>
        {sidebar && <Side sideHandler={toggleSidebar} />}
      </div>
    </header>
  );
};
