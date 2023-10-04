import { i18n } from "@/i18n-config";
import Image from "next/image";
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

export const metadata = {
  title: "Emerson for Council",
  description: "Joseph Emerson for Portland City Council, District #2",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Layout({
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
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src="/together.jpg"
              width={500}
              height={500}
              alt="Baby on daddy's shoulder"
            />
            <div>
              <div>
                {children}
                <DonateButton dictionary={dictionary} />
              </div>
            </div>
          </div>
        </div>

        <LocaleSwitcher />
        <Analytics />
      </body>
    </html>
  );
}
