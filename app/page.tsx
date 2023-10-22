import { DonateButton, VolunteerButton } from "@/app/components";
import Content from "./content.mdx";

export default async function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-black">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col gap-10">
            <div className="flex flex-col justify-start items-center ">
              <h1 className="border-solid border-t-4 border-b-4 pt-2 pb-4 border-current text-accent mb-2 w-full text-7xl md:text-8xl lg:text-9xl uppercase font-bold flex flex-col justify-stretch items-center">
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
      <main className="flex flex-col items-center p-8 grow">
        <div className="prose">
          <Content />
        </div>
      </main>
    </>
  );
}
