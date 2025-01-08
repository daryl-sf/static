import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer" className="relative min-h-24 bg-zinc-900 text-white px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between pt-6">
        <Link className="" href="/">
          <Image
            className="grayscale hover:grayscale-0"
            src="/logo.svg"
            alt="Daryl D Logo"
            width={48}
            height={28}
            priority
          />
        </Link>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/" className="hover:underline">
            Daryl Findlay
          </Link>
        </div>
      </div>
      <p className="text-center text-zinc-600">
        Copyright © 2025 Daryl Findlay
      </p>
    </div>
  );
}
