"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import Image from "next/image";

const supportedLocales = ["nl", "ar", "en"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("navigation");
  const locale = useLocale() as SupportedLocale;
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { key: "home", href: "/", label: t("home") },
    { key: "about", href: "/about", label: t("about") },
    { key: "services", href: "/services", label: t("services") },
    { key: "fleet", href: "/fleet", label: t("fleet") },
    { key: "contact", href: "/contact", label: t("contact") },
    { key: "careers", href: "/careers", label: t("careers") },
  ];

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleLocaleChange = (nextLocale: SupportedLocale) => {
    router.replace(pathname, { locale: nextLocale });
    onClose();
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[60] md:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className={clsx(
          "absolute inset-0 bg-black/35 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />

      <aside
        className={clsx(
          "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-5 shadow-xl",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <Image
            src="/images/logo/logo-full.png"
            alt="Alasayl Transport"
            width={120}
            height={38}
            quality={90}
            className="h-8 w-auto"
          />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-300 text-zinc-700 hover:bg-zinc-100"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={onClose}
                className={clsx(
                  "block rounded-lg px-3 py-2 text-sm transition-colors duration-200",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-5 flex items-center gap-2">
          {supportedLocales.map((itemLocale) => (
            <button
              key={itemLocale}
              type="button"
              onClick={() => handleLocaleChange(itemLocale)}
              className={clsx(
                "rounded-md px-3 py-1.5 text-xs font-medium uppercase transition-colors duration-200",
                itemLocale === locale
                  ? "bg-primary text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              )}
            >
              {itemLocale}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
          <a
            href="https://wa.me/31622665522"
            className="inline-flex items-center justify-center rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-secondary-dark"
          >
            WhatsApp
          </a>
          <a
            href="tel:+31622665522"
            className="inline-flex items-center justify-center rounded-lg border border-primary px-3 py-2 text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary/10"
          >
            <span dir="ltr">+31 622 665 522</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
