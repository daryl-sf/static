import Link from "next/link";
import Image from "next/image";

interface IHeaderProps {
  color?: "yellow" | "blue" | "green" | "red";
}

const colorMap = {
  yellow: "from-zinc-900 to-yellow-950",
  blue: "from-zinc-900 to-blue-950",
  green: "from-zinc-900 to-green-950",
  red: "from-zinc-900 to-red-950",
};

export default function Header({ color = "yellow" }: IHeaderProps) {
  return (
    <div
      id="hero"
      className={`relative m-h-96 bg-gradient-to-br ${colorMap[color]}`}
    >
      <div
        id="hero-overlay"
        className="absolute bg-neutral-950 opacity-15 h-full w-full"
      />
      <div className="max-w-6xl mx-auto flex items-center justify-between pt-6">
        <Link
          className="transition-colors hover:text-sky-400 dark:hover:text-sky-600 hover:underline"
          href="/"
        >
          <Image
            className="relative"
            src="/logo.svg"
            alt="Next.js Logo"
            width={48}
            height={28}
            priority
          />
        </Link>
        <div className="flex items-center justify-center bg-gradient-to-t lg:static lg:h-auto lg:w-auto lg:bg-none text-yellow-600">
          Daryl Findlay
        </div>
      </div>
      <div className="relative flex place-items-center h-80 w-full bg-slate-900  rounded-xl items-center bg-transparent">
        <h4 className="relative z-10 text-4xl text-center mx-auto text-yellow-200 bg-clip-text text-transparent animate-fade-in-down tracking-tight	">
          Hi, I&apos;m Daryl. Let&apos;s build something amazing together.
        </h4>
      </div>
    </div>
  );
}
