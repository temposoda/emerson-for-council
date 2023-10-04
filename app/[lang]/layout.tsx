import { i18n } from "@/i18n-config";
import img from "@/public/stjohns-bridge.jpg";
import {
  Header,
  Footer,
  getDictionary,
  DonateButton,
  LocaleSwitcher,
  VolunteerButton,
} from "@/app/components";
import { Open_Sans } from "next/font/google";
import type { Locale } from "@/i18n-config";
import { Analytics } from "@vercel/analytics/react";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });
import "./globals.css";

export const metadata = {
  title: "Emerson for Council",
  description: "Joseph Emerson for Portland City Council, District #2",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body
        className={`${openSans.className} min-h-screen flex flex-col justify-between`}
      >
        <div
          className="hero min-h-screen"
          style={{
            // Photo by <a href="https://unsplash.com/@digitech?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ruvim Miksanskiy</a> on <a href="https://unsplash.com/photos/P-2B19yvulw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            backgroundImage: `url(${img.src})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold">
                {dictionary.components.Header}
              </h1>
              <div className="flex flex-column flex-wrap gap-3 justify-center items-center">
                <DonateButton dictionary={dictionary} />
                <VolunteerButton dictionary={dictionary} />
              </div>
            </div>
          </div>
          <LocaleSwitcher />
        </div>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
