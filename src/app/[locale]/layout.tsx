import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NewsBar from "@/components/layout/NewsBar";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "font-arabic" : "font-sans"}>
        <NewsBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
