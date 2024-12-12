import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Iridescent | Poems by Ujjwal Paudel",
  description:
    "A collection of Poems by Ujjwal Paudel. This is my hobby website",
};

import localFont from "next/font/local";

const Lora = localFont({
  src: [
    {
      path: "./fonts/lora-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/lora-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/lora-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/lora-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Lora.variable} min-h-screen flex flex-col justify-between`}
      >
        <Navbar></Navbar>
        <div className="flex-1">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
