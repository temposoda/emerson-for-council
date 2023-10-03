export const Footer = () => (
  <footer
    className="z-10 
                w-full 
                border-t 
                px-8
                py-4
                border-gray-300 
                bg-gradient-to-t
                from-zinc-200 
                dark:border-neutral-800 
                dark:bg-zinc-800/30 
                dark:from-inherit"
  >
    <ul className="flex flex-col justify-around items-center">
      <li>
        <a className="block p-2" href="mailto:contact@emersonforcouncil.com">
          contact@emersonforcouncil.com
        </a>
      </li>
      <li>
        <a className="block p-2" href="tel:+15036108072">
          (503) 610-8072
        </a>
      </li>
    </ul>
  </footer>
);
