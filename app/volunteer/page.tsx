import Content from "./content.mdx";
import img from "@/public/together.jpg";
import React from "react";
import { DonateButton } from "@/app/components";

export default async function Volunteer() {
  return (
    <main className="flex flex-col items-center grow">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content">
          <div className="flex flex-col justify-center items-center flex-wrap gap-8">
            <div
              className="prose 
                            text-white 
                            prose-h1:text-white
                            prose-li:text-white
                            prose-a:text-white
                            prose-a:font-bold"
            >
              <Content />
            </div>
            <DonateButton />
          </div>
        </div>
      </div>
    </main>
  );
}
