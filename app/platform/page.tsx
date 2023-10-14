import Content from "./content.mdx";
import React from "react";

export default async function About() {
  return (
    <main className="flex flex-col items-center grow">
      <div className="flex flex-col justify-center items-center flex-wrap gap-8">
        <div className="prose">
          <Content />
        </div>
      </div>
    </main>
  );
}
