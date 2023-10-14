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
              <div className="h-2 w-11/12 md:w-3/4 bg-accent"></div>
              <h1 className="mb-5 w-full text-7xl md:text-8xl lg:text-9xl uppercase font-bold text-white flex flex-col justify-stretch items-center">
                <span>Joseph</span>
                <span className="tracking-tighter text-center">Emerson</span>
              </h1>
              <div className="h-2 w-11/12 md:w-3/4 bg-accent"></div>
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
