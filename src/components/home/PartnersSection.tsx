"use client";

import { useTranslations } from "next-intl";
import Card from "@/components/ui/Card";
import Image from "next/image";
import Script from "next/script";

export default function PartnersSection() {
  const t = useTranslations("partners");

  const partners = [
    {
      name: "Amazon",
      logo: "/images/partners/amazon-logo.png",
      description: t("amazon.description"),
    },
    {
      name: "DHL",
      logo: "/images/partners/dhl-logo.png",
      description: t("dhl.description"),
    },
    {
      name: "Spoota",
      logo: "/images/partners/spoota-logo.png",
      description: t("spoota.description"),
    },
    {
      name: "AxonXcode",
      logo: "/images/partners/axonxcode-logo-large-simple.png",
      description: t("axonxcode.description"),
      isNew: true,
      link: "https://www.axonxcode.com",
    },
  ];

  // Schema.org structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": partners.map((partner, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Organization",
        "name": partner.name,
        "logo": partner.logo,
        "description": partner.description,
        "url": partner.link || undefined
      }
    }))
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-600">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => {
            const CardContent = (
              <Card 
                key={index} 
                itemScope
                itemType="https://schema.org/Organization"
                className={`p-8 relative transition-all duration-300 h-full ${
                  partner.isNew 
                    ? "border-2 border-transparent bg-gradient-to-b from-white to-white bg-clip-padding before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-br before:from-[#3B82F6] before:to-[#1E3A8A] hover:shadow-xl hover:scale-[1.02]" 
                    : "hover:shadow-lg"
                }`}
              >
                {partner.isNew && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap uppercase tracking-wider">
                      NEW 2025
                    </span>
                  </div>
                )}
                
                <div className={`flex w-full items-center justify-center rounded-xl border border-gray-100 bg-white mx-auto overflow-hidden p-6 transition-all duration-300 aspect-[3/2] ${
                  partner.isNew 
                    ? "ring-2 ring-blue-100" 
                    : "grayscale opacity-70 hover:grayscale-0 hover:opacity-100 shadow-sm hover:shadow-md hover:bg-gray-50"
                }`}>
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo - Official Partner of Alasayl Transport`}
                    title={`${partner.name} - Alasayl Transport Partner`}
                    width={250}
                    height={90}
                    quality={90}
                    itemProp="logo"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={false}
                    className="object-contain w-full h-full"
                  />
                </div>
                
                <h3 
                  itemProp="name"
                  className={`mt-6 mb-3 text-xl font-bold ${partner.isNew ? 'text-primary' : 'text-gray-900'}`}
                >
                  {partner.name}
                </h3>
                <p 
                  itemProp="description"
                  className="text-sm leading-relaxed text-gray-600"
                >
                  {partner.description}
                </p>

                {partner.isNew && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-[#1E40AF]">
                      Visit Website →
                    </span>
                  </div>
                )}
              </Card>
            );

            return partner.link ? (
              <a 
                href={partner.link} 
                key={index} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
                itemProp="url"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index} className="h-full">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* JSON-LD for Search Engines */}
      <Script
        id="partners-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
