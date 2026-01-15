import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Lenis } from "lenis/react";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap", // optional - defaults to 'swap' if not specified
  subsets: ["latin"], // optional - defaults to ['latin'] if not specified
});

export const metadata: Metadata = {
  title: "ORBITA | Intelligent Orchestration",
  description:
    "The cognitive operating system for the enterprise. Unify data, logic, and AI agents into a single workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Lenis root={true}>{children}</Lenis>
      </body>
    </html>
  );
}
