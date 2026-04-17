import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["nl", "ar", "en"],
  defaultLocale: "nl",
  localePrefix: "as-needed",
});
