import { DonateButton, VolunteerButton } from "@/app/components";
import Content from "./content.mdx";
import AlbertaPark from "../public/alberta-park-casual-hires.jpg";

export default async function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${AlbertaPark.src})`,
        }}
      >
        <div className="hero-content text-center text-white">
          <div className="max-w-lg">
            <div className="mt-64 flex flex-row gap-2 justify-center">
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
