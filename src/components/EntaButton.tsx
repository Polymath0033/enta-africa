import { FC } from "react";

export const EntaButton: FC<{
  value: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}> = ({ value, className, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white flex justify-center items-center rounded-[36px] font-semibold !leading-[150%] text-base px-8 py-4 shadow-[0px_10px_24px_0px_rgba(127,_86,_217,_0.24)] ${className}`}
    >
      {value}
    </button>
  );
};
