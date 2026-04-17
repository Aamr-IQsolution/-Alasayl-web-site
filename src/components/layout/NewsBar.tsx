"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

export default function NewsBar() {
  const t = useTranslations("newsBar");

  const items = useMemo(
    () => [t("item1"), t("item2"), t("item3")],
    [t]
  );

  const marqueeContent = [...items, ...items].join("   •   ");

  return (
    <div className="relative h-10 overflow-hidden bg-secondary text-white">
      <div className="absolute inset-y-0 flex items-center whitespace-nowrap">
        <p
          className="px-4 text-sm font-medium"
          style={{ animation: "newsbar-marquee 60s linear infinite" }}
        >
          {marqueeContent}
        </p>
      </div>

      <style jsx>{`
        @keyframes newsbar-marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
