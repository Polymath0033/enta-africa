import { FC } from "react";

export const EntaUI: FC<{
  text: string;
  className?: string;
  startIcon?: boolean;
}> = ({ text, className, startIcon = true }) => {
  return (
    <div
      className={`${className} flex py-3 px-[14px] gap-[10px] items-center justify-center w-fit-content rounded-[116px] bg-[#E33E330A] `}
    >
      {startIcon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
        >
          <path
            d="M8.45739 0.353027C7.40385 5.08802 5.79384 6.8549 0.861206 8.21907C5.62887 9.35712 7.0245 11.0866 8.19306 15.2994C9.17316 10.3722 10.7964 8.61111 15.7892 7.43337C11.5581 6.91227 9.90216 5.44496 8.45739 0.353027Z"
            fill="#E33E33"
          />
          <path
            d="M9.80895 1.70068C8.75541 6.43567 7.1454 8.20255 2.21277 9.56673C6.98043 10.7048 8.37606 12.4343 9.54462 16.6471C10.5247 11.7198 12.148 9.95877 17.1408 8.78103C12.9096 8.25993 11.2537 6.79261 9.80895 1.70068V1.70068Z"
            stroke="#E33E33"
            strokeWidth="0.519231"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8333 6.89166V3.525C18.8333 2.2 18.3 1.66666 16.975 1.66666H13.6083C12.2833 1.66666 11.75 2.2 11.75 3.525V6.89166C11.75 8.21666 12.2833 8.75 13.6083 8.75H16.975C18.3 8.75 18.8333 8.21666 18.8333 6.89166Z"
            stroke="#E33E33"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.24999 7.1V3.31666C9.24999 2.14166 8.71666 1.66666 7.39166 1.66666H4.02499C2.69999 1.66666 2.16666 2.14166 2.16666 3.31666V7.09166C2.16666 8.275 2.69999 8.74166 4.02499 8.74166H7.39166C8.71666 8.75 9.24999 8.275 9.24999 7.1Z"
            stroke="#E33E33"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.24999 16.475V13.1083C9.24999 11.7833 8.71666 11.25 7.39166 11.25H4.02499C2.69999 11.25 2.16666 11.7833 2.16666 13.1083V16.475C2.16666 17.8 2.69999 18.3333 4.02499 18.3333H7.39166C8.71666 18.3333 9.24999 17.8 9.24999 16.475Z"
            stroke="#E33E33"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 12.9167H18"
            stroke="#E33E33"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M13 16.25H18"
            stroke="#E33E33"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      <span className="text-base font-medium text-primary">{text}</span>
    </div>
  );
};
