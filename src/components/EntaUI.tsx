import { FC } from "react";

export const EntaUI: FC<{
  text: string;
  className?: string;
  startIcon?: boolean;
}> = ({ text, className, startIcon = true }) => {
  return (
    <div
      className={`${className} flex py-3 px-[14px] gap-[10px] items-center justify-center w-fit-content rounded-[116px] bg-[rgba(127,_85,_218,_0.06);] `}
    >
      {startIcon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M7.59618 0.352966C6.54264 5.08796 4.93263 6.85484 0 8.21901C4.76766 9.35706 6.16329 11.0865 7.33185 15.2994C8.31195 10.3721 9.93519 8.61105 14.928 7.43331C10.6969 6.91221 9.04095 5.4449 7.59618 0.352966Z"
            fill="url(#paint0_linear_5_5785)"
          />
          <path
            d="M8.94579 1.70062C7.89225 6.43561 6.28224 8.20249 1.34961 9.56667C6.11727 10.7047 7.5129 12.4342 8.68146 16.647C9.66156 11.7198 11.2848 9.95871 16.2776 8.78097C12.0465 8.25987 10.3906 6.79255 8.94579 1.70062V1.70062Z"
            stroke="url(#paint1_linear_5_5785)"
            strokeWidth="0.519231"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5_5785"
              x1="8.55418"
              y1="0.352968"
              x2="17.3791"
              y2="1.20606"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.305" stop-color="#7F55DA" />
              <stop offset="1" stop-color="#1F0656" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5_5785"
              x1="9.90378"
              y1="1.70062"
              x2="18.7287"
              y2="2.55371"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.305" stop-color="#7F55DA" />
              <stop offset="1" stop-color="#1F0656" />
            </linearGradient>
          </defs>
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
            stroke="#7F55DA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.24999 7.1V3.31666C9.24999 2.14166 8.71666 1.66666 7.39166 1.66666H4.02499C2.69999 1.66666 2.16666 2.14166 2.16666 3.31666V7.09166C2.16666 8.275 2.69999 8.74166 4.02499 8.74166H7.39166C8.71666 8.75 9.24999 8.275 9.24999 7.1Z"
            stroke="#7F55DA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.24999 16.475V13.1083C9.24999 11.7833 8.71666 11.25 7.39166 11.25H4.02499C2.69999 11.25 2.16666 11.7833 2.16666 13.1083V16.475C2.16666 17.8 2.69999 18.3333 4.02499 18.3333H7.39166C8.71666 18.3333 9.24999 17.8 9.24999 16.475Z"
            stroke="#7F55DA"
            strokeWidth="1.5"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 12.9167H18"
            stroke="#7F55DA"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M13 16.25H18"
            stroke="#7F55DA"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      <span className="text-base font-medium text-primary">{text}</span>
    </div>
  );
};
