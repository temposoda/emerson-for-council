import React from "react";
import { Footer, Navbar } from "@/app/components";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });
import "./globals.css";

export const metadata = {
  title: "Emerson for Council",
  description: "Joseph Emerson for Portland City Council, District 2",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="cyberpunk">
      <body
        className={`${openSans.className} min-h-screen flex flex-col justify-between`}
      >
        <div className="grow">
          <Navbar />
        </div>
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
