"use client";

import { useTranslations } from "next-intl";
import Card from "@/components/ui/Card";

export default function PartnersSection() {
  const t = useTranslations("partners");

  const partners = [
    {
      name: "Amazon",
      logo: "AMAZON",
      description: t("amazon.description"),
    },
    {
      name: "DHL",
      logo: "DHL",
      description: t("dhl.description"),
    },
    {
      name: "Spoota",
      logo: "SPOOTA",
      description: t("spoota.description"),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-600">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {partners.map((partner, index) => (
            <Card key={index} className="p-8">
              <div className="flex h-32 w-32 items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 mx-auto">
                <span className="text-2xl font-bold text-gray-400">
                  {partner.logo}
                </span>
              </div>
              <h3 className="mt-6 mb-3 text-xl font-bold text-gray-900">
                {partner.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {partner.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
