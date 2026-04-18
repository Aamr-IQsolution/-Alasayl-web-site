"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const supportedLocales = ["nl", "ar", "en"] as const;
type SupportedLocale = (typeof supportedLocales)[number];

export default function Header() {
  const t = useTranslations("navigation");
  const locale = useLocale() as SupportedLocale;
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { key: "home", href: "/", label: t("home") },
    { key: "about", href: "/about", label: t("about") },
    { key: "services", href: "/services", label: t("services") },
    { key: "fleet", href: "/fleet", label: t("fleet") },
    { key: "contact", href: "/contact", label: t("contact") },
    { key: "careers", href: "/careers", label: t("careers") },
  ];

  const handleLocaleChange = (nextLocale: SupportedLocale) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-zinc-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-transparent"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex h-16 max-w-7xl items-center gap-4 px-4",
          locale === "ar" && "flex-row-reverse"
        )}
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo/logo-full.png"
            alt="Alasayl Transport Logo"
            width={140}
            height={45}
            priority
            quality={90}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={clsx(
                  "rounded-md px-3 py-2 text-sm transition-colors duration-200",
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

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1">
            {supportedLocales.map((itemLocale) => (
              <button
                key={itemLocale}
                type="button"
                onClick={() => handleLocaleChange(itemLocale)}
                className={clsx(
                  "rounded-md px-2.5 py-1 text-xs font-medium uppercase transition-colors duration-200",
                  itemLocale === locale
                    ? "bg-primary text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                )}
              >
                {itemLocale}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/31622665522"
            className="inline-flex items-center justify-center rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-secondary-dark"
            suppressHydrationWarning
          >
            WhatsApp
          </a>
          <a
            href="tel:+31622665522"
            className="inline-flex items-center justify-center rounded-lg border border-primary px-3 py-2 text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary/10"
            suppressHydrationWarning
          >
            <span dir="ltr">+31 622 665 522</span>
          </a>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
