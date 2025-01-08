import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer" className="relative min-h-24 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between pt-6">
        <Link
          className="transition-colors hover:text-sky-400 dark:hover:text-sky-600 hover:underline"
          href="/"
        >
          <Image
            className="relative grayscale"
            src="/logo.svg"
            alt="Next.js Logo"
            width={48}
            height={28}
            priority
          />
        </Link>
        <div className="flex items-center justify-center">Daryl Findlay</div>
      </div>
      <p className="text-center text-zinc-600">
        Copyright © 2025 Daryl Findlay
      </p>
    </div>
  );
}
