import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const CancelSign = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{ gridColumn: 1, gridRow: 1 }}
      className="z-10 text-primary"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  );
};

export const Footer = () => (
  <>
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/platform" className="link link-hover">
          Platform
        </Link>
        <Link href="volunteer" className="link link-hover">
          Volunteer
        </Link>
      </div>
      <div className="grid grid-flow-col gap-4">
        <SocialIcon
          href="mailto:contact@emersonforcouncil.com"
          bgColor="black"
          fgColor="currentColor"
          className="h-11 w-11 text-white"
          network="email"
        />
        <Link
          href="https://twitter.com/JoeEmerso/status/1711929631618871667"
          target="_blank"
          className="grid h-12 w-12"
        >
          <CancelSign />
          <SocialIcon
            bgColor="black"
            style={{
              gridColumn: 1,
              gridRow: 1,
              width: "100%",
              height: "100%",
            }}
            network="x"
          />
        </Link>
        <Link
          href="https://www.facebook.com/permalink.php?story_fbid=pfbid025wFmXWf8JSTb14qqbfPKMi61p9jX9pk3YRvweqqJz4ZNQ9PNqXyMztQwPC2WVZsql&id=61552543730290"
          target="_blank"
          className="grid h-12 w-12"
        >
          <CancelSign />
          <SocialIcon
            bgColor="black"
            style={{
              gridColumn: 1,
              gridRow: 1,
              width: "100%",
              height: "100%",
            }}
            network="facebook"
          />
        </Link>
      </div>

      <div>
        <Link
          className="text-center block p-2"
          href="https://secure.sos.state.or.us/orestar/sooDetail.do?sooRsn=98631"
        >
          Paid for by Joseph Emerson for Portland City Council (PAC ID: 23184)
        </Link>
      </div>
    </footer>

    {/* <footer className="w-full px-8 py-4">
      <ul className="flex flex-col justify-around items-center">
        <li>
          <Link
            className="block p-2"
            href="mailto:contact@emersonforcouncil.com"
          >
            contact@emersonforcouncil.com
          </Link>
        </li>
        <li>
          <Link className="block p-2" href="tel:+15036108072">
            (503) 610-8072
          </Link>
        </li>
        <li>
          <Link
            className="text-center block p-2"
            href="https://secure.sos.state.or.us/orestar/sooDetail.do?sooRsn=98631"
          >
            Paid for by Joseph Emerson for Portland City Council (PAC ID: 23184)
          </Link>
        </li>
        <li className="py-4">
          <div className="flex gap-2">
            
            
            <Link
              href="https://www.instagram.com/emersonforcouncil/"
              target="_blank"
              className="grid h-12 w-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                style={{ gridColumn: 1, gridRow: 1 }}
                className="z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>

              <SocialIcon
                bgColor="black"
                style={{
                  gridColumn: 1,
                  gridRow: 1,
                  width: "100%",
                  height: "100%",
                }}
                network="instagram"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@emersonforcouncil"
              target="_blank"
              className="grid h-12 w-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                style={{ gridColumn: 1, gridRow: 1 }}
                className="z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>

              <SocialIcon
                bgColor="black"
                style={{
                  gridColumn: 1,
                  gridRow: 1,
                  width: "100%",
                  height: "100%",
                }}
                network="tiktok"
              />
            </Link>
          </div>
        </li>
      </ul>
    </footer> */}
  </>
);
