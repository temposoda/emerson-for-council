import { DonateButton, VolunteerButton } from "@/app/components";
import Content from "./content.mdx";
import AlbertaPark from "../public/alberta-park-casual-hires.jpg";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="hero min-h-[80vh] bg-black">
        <div className="hero-content text-center backdrop-blur-xs">
          <div className="max-w-md flex flex-col gap-10">
            <div className="flex flex-col justify-start items-center">
              <h1 className="border-solid border-t-4 border-b-4 pt-2 pb-4 border-current text-accent mb-2 w-full text-7xl md:text-8xl uppercase font-bold flex flex-col justify-stretch items-center">
                <span className="text-white">Joseph</span>
                <span className="text-white tracking-tighter text-center">
                  Emerson
                </span>
              </h1>
            </div>
            <div>
              <h2 className="prose text-white">
                Portland City Council, District 2
              </h2>
              <h2 className="prose text-white">
                (North and Northeast Portland)
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <DonateButton />
              <VolunteerButton />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-black ">
        <div className="bg-opacity-70 flex flex-col justify-center items-center bg-auto"></div>
        <div className="min-h-[80vh] md:min-h-screen flex justify-strech items-stretch relative">
          <Image
            fill={true}
            priority={true}
            className="grow"
            src={AlbertaPark.src}
            alt="Joseh Emerson with a content smile wearing a white shirt and blue trousers stands leaning against a concrete column. He has a brown belt and a watch on his left wrist. The background is an outdoor setting with blurred greenery, indicating a sunny day in a park or garden."
            style={{ objectFit: "cover" }}
          />
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
