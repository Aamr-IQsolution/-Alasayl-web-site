"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";
import Card from "@/components/ui/Card";

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
          
          {/* Image Gallery Placeholders */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video rounded-lg bg-gray-100 flex items-center justify-center border border-zinc-200">
                <span className="text-xs text-zinc-400">Sprinter Photo {i}</span>
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
          
          {/* Image Gallery Placeholders */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video rounded-lg bg-gray-100 flex items-center justify-center border border-zinc-200">
                <span className="text-xs text-zinc-400">Vito Photo {i}</span>
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
