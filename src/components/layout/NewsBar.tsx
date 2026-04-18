"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NewsBar() {
  const t = useTranslations();

  const news = useMemo(
    () => [
      { id: 1, text: t("newsBar.item1") },
      { id: 2, text: t("newsBar.item2") },
      { id: 3, text: t("newsBar.item3") },
      {
        id: 4,
        text: t("axonxcodeAnnouncement.newsBar"),
        logo: "/images/partners/axonxcode-logo-small.png",
        special: true,
      },
    ],
    [t]
  );

  return (
    <div className="relative h-10 overflow-hidden bg-secondary text-white border-y border-white/5 flex items-center">
      <div className="flex whitespace-nowrap animate-news-ticker">
        {/* المجموعة الأولى */}
        <div className="flex items-center gap-12 px-6">
          {news.map((item) => (
            <div
              key={`set1-${item.id}`}
              className={`flex items-center gap-3 text-sm font-medium ${
                item.special 
                  ? "font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] bg-white/10 px-3 py-1 rounded-full border border-white/20" 
                  : ""
              }`}
            >
              {item.logo && (
                <Image
                  src={item.logo}
                  alt="AxonXcode"
                  width={24}
                  height={24}
                  className="inline-block object-contain"
                />
              )}
              <span>{item.text}</span>
              {!item.special && <span className="text-white/30 ml-8 opacity-50">•</span>}
            </div>
          ))}
        </div>
        {/* المجموعة الثانية (مطابقة تماماً للمجموعة الأولى لضمان التكرار اللانهائي) */}
        <div className="flex items-center gap-12 px-6">
          {news.map((item) => (
            <div
              key={`set2-${item.id}`}
              className={`flex items-center gap-3 text-sm font-medium ${
                item.special 
                  ? "font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] bg-white/10 px-3 py-1 rounded-full border border-white/20" 
                  : ""
              }`}
            >
              {item.logo && (
                <Image
                  src={item.logo}
                  alt="AxonXcode"
                  width={24}
                  height={24}
                  className="inline-block object-contain"
                />
              )}
              <span>{item.text}</span>
              {!item.special && <span className="text-white/30 ml-8 opacity-50">•</span>}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-news-ticker {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* دعم اللغات التي تبدأ من اليمين (مثل العربية) */
        :global([dir="rtl"]) .animate-news-ticker {
          animation: marquee-rtl 40s linear infinite;
        }
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  );
}
