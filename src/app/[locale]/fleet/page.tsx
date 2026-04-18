"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import Image from "next/image";

export default function FleetPage() {
  const t = useTranslations("fleetPage");

  const maintenanceFeatures = [
    { title: t("maintenance.feature1"), desc: t("maintenance.desc1") },
    { title: t("maintenance.feature2"), desc: t("maintenance.desc2") },
    { title: t("maintenance.feature3"), desc: t("maintenance.desc3") },
    { title: t("maintenance.feature4"), desc: t("maintenance.desc4") },
    { title: t("maintenance.feature5"), desc: t("maintenance.desc5") },
    { title: t("maintenance.feature6"), desc: t("maintenance.desc6") },
  ];

  const sprinterImages = [
    {
      src: '/images/fleet/sprinter-side.jpg',
      alt: 'Mercedes-Benz Sprinter - Zijaanzicht',
      caption: 'Zijaanzicht'
    },
    {
      src: '/images/fleet/sprinter-front.jpg',
      alt: 'Mercedes-Benz Sprinter - Vooraanzicht',
      caption: 'Vooraanzicht'
    },
    {
      src: '/images/fleet/sprinter-action.jpg',
      alt: 'Mercedes-Benz Sprinter in actie',
      caption: 'In Actie'
    },
    {
      src: '/images/fleet/sprinter-interior.jpg',
      alt: 'Mercedes-Benz Sprinter laadruimte',
      caption: 'Laadruimte'
    }
  ];

  const vitoImages = [
    {
      src: '/images/fleet/vito-side.jpg',
      alt: 'Mercedes-Benz Vito - Zijaanzicht',
      caption: 'Zijaanzicht'
    },
    {
      src: '/images/fleet/vito-urban.jpg',
      alt: 'Mercedes-Benz Vito in stad',
      caption: 'Stadsbezorging'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-zinc-900 md:text-5xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          {t("subtitle")}
        </p>
      </section>

      {/* Overview */}
      <section className="mb-16 text-center border-b border-zinc-100 pb-16">
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
          {t("overview")}
        </p>
      </section>

      {/* Mercedes-Benz Sprinter */}
      <section className="mb-20">
        <Card className="p-8">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900">
            Mercedes-Benz Sprinter v4
          </h2>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900">
                Specificaties:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Laadvermogen: Tot 1400 kg
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Laadruimte: 4.3m x 1.8m x 1.9m
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Motortype: Diesel Euro 6
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Emissieklasse: Euro 6
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900">
                Toepassingen:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Grote commerciële leveringen
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Bulktransport
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Lange afstandsritten
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Meerdere afleverpunten
                </li>
              </ul>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sprinterImages.map((image, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  quality={85}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-sm font-semibold text-white">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center font-bold text-primary">
            Aantal beschikbaar: 10+ voertuigen
          </p>
        </Card>
      </section>

      {/* Mercedes-Benz Vito */}
      <section className="mb-20">
        <Card className="p-8">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900">
            Mercedes-Benz Vito
          </h2>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900">
                Specificaties:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Laadvermogen: Tot 900 kg
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Laadruimte: 2.8m x 1.6m x 1.4m
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Wendbaarheid: Zeer hoog
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Emissieklasse: Euro 6
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900">
                Toepassingen:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Pakketbezorging (Last mile)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Stadsdistributie
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Snelle koeriersdiensten
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Dringende kleine zendingen
                </li>
              </ul>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {vitoImages.map((image, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-sm font-semibold text-white">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center font-bold text-primary">
            Aantal beschikbaar: 5+ voertuigen
          </p>
        </Card>
      </section>

      {/* Maintenance & Quality */}
      <section className="rounded-2xl bg-zinc-50 p-8 md:p-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
          {t("maintenance.title")}
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {maintenanceFeatures.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-bold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
