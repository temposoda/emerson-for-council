import { Header } from "./components";
import { Gabriela } from "next/font/google";

const gabriela = Gabriela({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header />
      <div className="prose prose-invert">
        <p>
          <span
            className={`${gabriela.className} align-text-top text-8xl pr-2 font-black float-left`}
          >
            H
          </span>
          {`i, thanks for being here! It means that you care about what Portland is like, and that you want it to be a healthy, happy place for everyone
that lives here. Me too! In the coming weeks and months, I'll have a lot more to say about why I'm running, how I hope to earn your trust, and what my vision for that happy, healthy Portland is. For now, I hope you're safe and well wherever you are. I hope you'll join me in imagining the most amazing future possible for Portland.
`}
        </p>
        <p>{`For now I hope you'll check out some other people I support: `}</p>
        <ul>
          <li>
            <a href="https://www.portlandforward.org/" className="underline">
              The team at Portland Forward
            </a>
            , who care about making Portland the best possible place for
            everyone.
          </li>
          <li>
            <a href="https://www.starvoting.org/" className="underline">
              The team at STAR Voting
            </a>
            , who want to ensure that democracy works for everyone and can't be
            gamed or abused.
          </li>
          <li>
            <a href="https://superthank.org/" className="underline">
              The people at SuperThank
            </a>
            , who want doing good in our communities to be easier and more
            rewarding.
          </li>
        </ul>
      </div>
    </main>
  );
}
