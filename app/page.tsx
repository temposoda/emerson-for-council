import { Header } from "../components";
import { Gabriela } from "next/font/google";
import Content from "./content.mdx";

const gabriela = Gabriela({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header />
      <div className="prose dark:prose-invert">
        <Content />
      </div>
    </main>
  );
}
