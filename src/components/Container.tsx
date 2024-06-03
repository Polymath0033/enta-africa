import { FC } from "react";

export const Container: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={`px-28 py-24 ${className}`}>{children}</div>;
};
