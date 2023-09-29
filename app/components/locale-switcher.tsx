"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "../../i18n-config";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  const getLocale = (path: typeof pathName) => {
    const segments = path.split("/");
    return segments[1];
  };
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="fixed top-2 right-2">
      <label className="invisible" htmlFor="lang-select">
        Choose a language:
      </label>
      <select
        className="p-1 bg-transparent"
        id="lang-select"
        defaultValue={getLocale(pathName)}
        onChange={(event) => {
          router.replace(redirectedPathName(event.target.value));
        }}
      >
        {i18n.locales.map((locale) => {
          return (
            <option key={locale} value={locale}>
              {locale}
            </option>
          );
        })}
      </select>
    </div>
  );
}
