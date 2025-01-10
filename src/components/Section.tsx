import { Mada } from "next/font/google";
import { FC } from "react";

const mada = Mada({
  subsets: ["latin"],
  weight: "500",
});

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="shrink grow">
      <h4 className={`text-2xl ${mada.className}`}>{title}</h4>
      <p>{children}</p>
    </div>
  );
};
