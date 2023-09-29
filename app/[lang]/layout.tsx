import { i18n } from "../../i18n-config";
import { Header, Footer, getDictionary } from "../components";
import { Open_Sans } from "next/font/google";
import type { Locale } from "../../i18n-config";

const openSans = Open_Sans({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "Emerson for Council",
  description: "Joseph Emerson for Portland City Council",
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
        <Header dictionary={dictionary} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
