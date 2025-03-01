import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

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
        <div className="flex flex-col w-full bg-offwhite">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
