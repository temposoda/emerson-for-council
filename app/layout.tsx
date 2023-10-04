import React from "react";
import img from "@/public/stjohns-bridge.jpg";
import {
  Header,
  Footer,
  DonateButton,
  VolunteerButton,
} from "@/app/components";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });
import "./globals.css";

export const metadata = {
  title: "Emerson for Council",
  description: "Joseph Emerson for Portland City Council, District #2",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${openSans.className} min-h-screen flex flex-col justify-between`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
