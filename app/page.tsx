import img from "@/public/stjohns-bridge.jpg";
import { Footer, DonateButton, VolunteerButton } from "@/app/components";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Content from "./content.mdx";

export default async function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          // Photo by <a href="https://unsplash.com/@digitech?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ruvim Miksanskiy</a> on <a href="https://unsplash.com/photos/P-2B19yvulw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          backgroundImage: `url(${img.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold leading-relaxed text-primary-content">
              Joseph Emerson for Portland City Council
            </h1>
            <div className="flex flex-column flex-wrap gap-3 justify-center items-center">
              <DonateButton />
              <VolunteerButton />
            </div>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-center p-8 grow">
        <div className="prose">
          <Content />
        </div>
      </main>
    </>
  );
}
