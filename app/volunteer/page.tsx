import Content from "./content.mdx";
import img from "@/public/together.jpg";
import React from "react";
import {
  Header,
  Footer,
  DonateButton,
  VolunteerButton,
} from "@/app/components";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export default async function Volunteer() {
  return (
    <main className="flex flex-col items-center grow">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content">
          <div className="flex flex-col justify-center items-center flex-wrap gap-4">
            <div className="prose">
              <Content />
            </div>
            <DonateButton />
          </div>
        </div>
      </div>
    </main>
  );
}
