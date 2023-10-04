import { DonateButton } from "../components";

export const Header = () => (
  <header className="z-10 w-full">
    <h1
      className={`
        backdrop-blur-2xl 
        bg-gradient-to-b
        border-b 
        border-gray-300 
        dark:bg-zinc-800/30 
        dark:border-neutral-800 
        dark:from-inherit
        from-zinc-200 
        pb-6 
        pt-8
        px-8
        text-2xl
        text-center 
        w-full 
      `}
    ></h1>
    <LocaleSwitcher />
  </header>
);
