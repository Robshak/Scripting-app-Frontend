export const locales = ["en", "ru"];
export const defaultLocale = "en";

export async function getMessages(locale: string | undefined) {
  const validLocale = locales.includes(locale || "")
    ? locale
    : defaultLocale;
  const messages = await import(`./locales/${validLocale}.json`);
  return messages.default;
}
