import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/svg-logo.svg";

export const Navbar = () => (
  <div className="shadow drawer drawer-end bg-black text-white">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="flex flex-row drawer-content">
      <div className="w-full navbar px-8">
        <div className="lg:max-w-[25%] md:max-w-[35%] max-w-[50%]">
          <Image
            style={{ position: "relative" }}
            src={Logo.src}
            alt="logo"
            height={Logo.height}
            width={Logo.width}
          />
        </div>
        <div className="flex grow flex-row-reverse lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-16 h-16 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-none hidden lg:flex lg:flex-row-reverse lg:grow">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/" className="rounded-btn">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="rounded-btn">
                About
              </Link>
            </li>
            <li>
              <Link href="/platform" className="rounded-btn">
                Platform
              </Link>
            </li>
            <li>
              <Link href="/events" className="rounded-btn">
                Events
              </Link>
            </li>
            <li>
              <Link href="/news" className="rounded-btn">
                News
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="rounded-btn">
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                className="rounded-btn btn-primary"
                href="https://secure.actblue.com/donate/emersonforcouncil"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="drawer-side z-10">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="p-4 overflow-y-auto menu w-full bg-black">
        <li>
          <a href="/" className="rounded-btn self-end">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="rounded-btn self-end">
            About
          </a>
        </li>
        <li>
          <a href="/platform" className="rounded-btn self-end">
            Platform
          </a>
        </li>
        <li>
          <a href="/events" className="rounded-btn self-end">
            Events
          </a>
        </li>
        <li>
          <a href="/news" className="rounded-btn self-end">
            News
          </a>
        </li>
        <li>
          <Link href="/volunteer" className="rounded-btn self-end">
            Volunteer
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
