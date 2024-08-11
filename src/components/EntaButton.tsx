import { FC } from "react";

export const EntaButton: FC<{
  value: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
}> = ({ value, className, type = "button", onClick, loading = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white flex justify-center items-center gap-2 rounded-[36px] font-semibold !leading-[150%] text-base px-8 py-4 shadow-[0px_10px_24px_0px_rgba(127,_86,_217,_0.24)] ${className}`}
    >
      {loading && (
        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
      )}
      {value}
    </button>
  );
};
