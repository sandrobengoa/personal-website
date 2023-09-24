import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import BgDecorator from "@/components/BgDecorator";
import ThemeSwitch from "@/components/ThemeSwitch";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandro Bengoa Website",
  description: "By Sandro Bengoa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="!scroll-smooth">
      {/* Google tag manager */}
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        <Providers>
          <Header />
          <BgDecorator />
          {children}
          <Footer />
          <ThemeSwitch />
        </Providers>

        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
