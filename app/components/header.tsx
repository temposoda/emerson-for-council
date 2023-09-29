import { LocaleSwitcher } from "../components";

export const Header = () => (
  <div className="fixed z-10 w-full">
    <h1
      className="text-center 
                    w-full 
                    border-b 
                    border-gray-300 
                    bg-gradient-to-b
                    from-zinc-200 
                    pb-6 
                    pt-8
                    backdrop-blur-2xl 
                    dark:border-neutral-800 
                    dark:bg-zinc-800/30 
                    dark:from-inherit"
    >
      Joseph Emerson for Portland City Council
    </h1>
    <LocaleSwitcher />
  </div>
);
