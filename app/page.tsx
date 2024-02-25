import { VolunteerButton } from "@/app/components";
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
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Thank You!</h1>
            <p className="mb-5">
              {`I ended my campaign for Portland City Council at the end of
              January, 2024 to focus on preparing to welcome new twins to my
              family. I will continue to host this website describing my vision
              and platform for anyone to borrow. Portland can play an important
              role in shaping the realm of civic possibility around the world.
              It can be a safe, healthy, happy place for children and families
              of all kinds. If you're reading this, I hope you'll give your best
              effort to realize that possibility, for all of us.`}
            </p>
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
