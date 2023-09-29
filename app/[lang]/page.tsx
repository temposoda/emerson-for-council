import type { Locale } from "../../i18n-config";

const getContent = async (locale: Locale) => {
  const result = await import(`./content/${locale}.mdx`);
  if (result) return result.default;
  else return await import(`./content/en.mdx`);
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const Content = await getContent(lang);
  return (
    <main className="flex flex-col items-center pt-24 px-8">
      <div className="prose dark:prose-invert">
        <Content />
      </div>
    </main>
  );
}
