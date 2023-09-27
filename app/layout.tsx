import "./globals.css";
import { Inter, Gabriela } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Emerson for Council",
  description: "Joseph Emerson for Portland City Council",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
