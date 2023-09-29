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
    <main className="flex min-h-screen flex-col items-center px-8 pt-24">
      <div className="prose dark:prose-invert">
        <Content />
      </div>
    </main>
  );
}
