"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, Phone } from "lucide-react";
import { Link } from "@/navigation";
import clsx from "clsx";

export default function HeroSection() {
  const t = useTranslations("hero");

  const btnBase =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 h-12 px-6 text-base w-full sm:w-auto";

  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-dark px-4 py-20 text-center md:min-h-screen md:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact#quote"
            className={clsx(
              btnBase,
              "bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary/40"
            )}
          >
            {t("ctaPrimary")}
          </Link>
          <Link
            href="/about"
            className={clsx(
              btnBase,
              "border border-white text-white hover:bg-white/10 focus-visible:ring-white/30"
            )}
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-8">
          <a
            href="https://wa.me/31622665522"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            <MessageCircle className="h-5 w-5 text-secondary" />
            <span>WhatsApp</span>
          </a>
          <a
            href="tel:+31622665522"
            className="flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            <Phone className="h-5 w-5 text-secondary" />
            <span>+31 622 665 522</span>
          </a>
        </div>
      </div>
    </section>
  );
}
