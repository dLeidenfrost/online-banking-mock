"use server";

import { cookies } from "next/headers";
import { defaultLocale, Locale } from "../i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getLocale() {
  const cookie = await cookies();
  return cookie.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setLocale(locale: Locale) {
  const cookie = await cookies();
  cookie.set(COOKIE_NAME, locale);
}
