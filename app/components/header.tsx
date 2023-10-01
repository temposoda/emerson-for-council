import { LocaleSwitcher, getDictionary } from "../components";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

export const Header = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => (
  <div className="z-10 w-full">
    <h1
      className={`
        ${raleway.className}
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
    >
      {dictionary.components.Header}
    </h1>
    <LocaleSwitcher />
  </div>
);