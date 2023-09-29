import { Inter } from "next/font/google";
import { i18n } from "../../i18n-config";
import { Header, LocaleSwitcher } from "../components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emerson for Council",
  description: "Joseph Emerson for Portland City Council",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
