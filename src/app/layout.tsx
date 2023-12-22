import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daryl Findlay | Software Engineer",
  description:
    "Software Engineer based in Derry, Ireland. I build things. Sometimes I finish them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-20 p-12 lg:p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
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
            <div className="flex items-center justify-center bg-gradient-to-t lg:static lg:h-auto lg:w-auto lg:bg-none">
              Daryl Findlay
            </div>
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}
