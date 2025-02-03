import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const localeCookie = req.cookies.get("NEXT_LOCALE")?.value;

  const locales = ["en", "ru"];
  const pathnameLocale = url.pathname.split("/")[1];

  if (!locales.includes(pathnameLocale)) {
    const locale = locales.includes(localeCookie || "")
      ? localeCookie
      : "en";
    return NextResponse.redirect(
      new URL(`/${locale}${url.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
