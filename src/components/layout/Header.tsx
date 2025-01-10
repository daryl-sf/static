import Link from "next/link";
import Image from "next/image";
import { Mada, Neuton } from "next/font/google";

interface IHeaderProps {
  color?: "yellow" | "blue" | "green" | "red";
  title: string;
}

const colorMap = {
  yellow: { bg: "from-zinc-900 to-yellow-950", text: "text-yellow-200" },
  blue: { bg: "from-zinc-900 to-blue-950", text: "text-blue-200" },
  green: { bg: "from-zinc-900 to-green-950", text: "text-green-200" },
  red: { bg: "from-zinc-900 to-red-950", text: "text-red-200" },
};

const neuton = Neuton({
  subsets: ["latin"],
  weight: "400",
});

const mada = Mada({
  subsets: ["latin"],
  weight: "500",
});

export default function Header({ color = "yellow", title }: IHeaderProps) {
  return (
    <div
      className={`relative bg-[url('/images/hero-stones.jpeg')] bg-cover bg-hero bg-no-repeat`}
    >
      <div className="flex justify-between items-center p-4 max-w-5xl mx-auto relative z-10">
        <Link className="" href="/">
          <Image
            className="relative"
            src="/logo.svg"
            alt="Daryl D Logo"
            width={48}
            height={28}
            priority
          />
        </Link>
        <div
          className={`${colorMap[color].text} ${mada.className} text-lg tracking-wide`}
        >
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="mailto:darylfindlay@gmail.com"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/Daryl-Findlay-CV-2025.pdf"
                >
                  CV
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/">
                  Daryl Findlay
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex place-items-center justify-center items-center flex-col min-h-32 sm:min-h-60 relative z-10">
        <h4
          className={`text-3xl sm:text-6xl text-center mt-4 sm:mt-auto m-auto ${colorMap[color].text} ${neuton.className} animate-fade-in-down tracking-normal`}
        >
          {title}
        </h4>
      </div>
      <div
        id="hero-overlay"
        className="h-full w-full absolute top-0 left-0 opacity-20 bg-black"
      ></div>
    </div>
  );
}
