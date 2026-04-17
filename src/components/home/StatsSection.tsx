"use client";

import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations("stats");

  const stats = [
    {
      number: "15+",
      label: t("vehicles.label"),
      description: t("vehicles.description"),
    },
    {
      number: "2+",
      label: t("amazon.label"),
      description: t("amazon.description"),
    },
    {
      number: "6",
      label: t("days.label"),
      description: t("days.description"),
    },
    {
      number: "3",
      label: t("partners.label"),
      description: t("partners.description"),
    },
  ];

  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-secondary md:text-5xl">
                {stat.number}
              </span>
              <span className="mt-2 text-base font-semibold md:text-lg">
                {stat.label}
              </span>
              <p className="mt-1 text-sm opacity-90">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
