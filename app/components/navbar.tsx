import Link from "next/link";

export const Navbar = () => (
  <div className="rounded-lg shadow drawer drawer-end">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="flex flex-row drawer-content">
      <div className="w-full navbar justify-end">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
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
        <div className="flex-none hidden lg:block">
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
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="p-4 overflow-y-auto menu w-full bg-base-100">
        <li>
          <Link href="/" className="rounded-btn self-end">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="rounded-btn self-end">
            About
          </Link>
        </li>
        <li>
          <Link href="/platform" className="rounded-btn self-end">
            Platform
          </Link>
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
