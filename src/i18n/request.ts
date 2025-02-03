import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;

  console.log("Server: Read locale from cookie:", localeCookie);

  const locales = ["en", "ru"];
  const defaultLocale = "en";

  const locale = locales.includes(localeCookie || "")
    ? localeCookie
    : defaultLocale;

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
