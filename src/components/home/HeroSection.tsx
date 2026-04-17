"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const t = useTranslations("hero");

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
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => (window.location.href = "#quote")}
          >
            {t("ctaPrimary")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
            onClick={() => (window.location.href = "#services")}
          >
            {t("ctaSecondary")}
          </Button>
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
