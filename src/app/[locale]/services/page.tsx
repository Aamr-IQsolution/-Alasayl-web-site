"use client";

import { useTranslations } from "next-intl";
import { 
  Package, 
  Truck, 
  Newspaper, 
  Zap, 
  Clock, 
  MapPin, 
  CheckCircle 
} from "lucide-react";
import Card from "@/components/ui/Card";

export default function ServicesPage() {
  const t = useTranslations("servicesPage");

  const services = [
    {
      id: "packages",
      icon: Package,
      title: t("packages.title"),
      description: t("packages.description"),
      features: [
        "Same-day levering mogelijk",
        "Track & trace systeem",
        "Zorgvuldige behandeling",
        "Flexibele ophaal- en aflevertijden"
      ],
      vehicles: "Mercedes-Benz Vito en Sprinter"
    },
    {
      id: "freight",
      icon: Truck,
      title: t("freight.title"),
      description: t("freight.description"),
      features: [
        "Palletvervoer",
        "Laden en lossen service",
        "B2B oplossingen",
        "Volume zendingen"
      ],
      vehicles: "Mercedes-Benz Sprinter v4"
    },
    {
      id: "newspapers",
      icon: Newspaper,
      title: t("newspapers.title"),
      description: t("newspapers.description"),
      features: [
        "Nachtdistributie",
        "Vroege ochtendlevering",
        "Hoge betrouwbaarheid",
        "Dagelijkse ritten"
      ],
      vehicles: "Vloot van 15+ voertuigen"
    },
    {
      id: "urgent",
      icon: Zap,
      title: t("urgent.title"),
      description: t("urgent.description"),
      features: [
        "Directe afhaling",
        "Geen tussenstops",
        "24/7 bereikbaarheid",
        "Door heel Nederland"
      ],
      vehicles: "Snelste beschikbare voertuig"
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

      {/* Detailed Services */}
      <section className="space-y-12">
        {services.map((service) => (
          <Card key={service.id} className="p-8">
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <service.icon className="h-16 w-16 shrink-0 text-primary" />
              <div>
                <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                  {service.title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  {service.description}
                </p>
                
                <h3 className="mt-8 text-xl font-bold text-zinc-900">
                  Kenmerken:
                </h3>
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-700">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <h3 className="mt-6 text-xl font-bold text-zinc-900">
                  Voertuigen:
                </h3>
                <p className="mt-2 text-gray-700">
                  {service.vehicles}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* Additional Info */}
      <section className="mt-24 grid gap-8 md:grid-cols-3">
        <Card className="flex flex-col items-center p-8 text-center">
          <Clock className="mb-4 h-10 w-10 text-primary" />
          <h3 className="mb-4 text-xl font-bold text-zinc-900">Openingstijden</h3>
          <p className="text-gray-600">Ma-Za: 07:00 - 18:00</p>
          <p className="text-gray-600">Zondag: Gesloten</p>
        </Card>

        <Card className="flex flex-col items-center p-8 text-center">
          <MapPin className="mb-4 h-10 w-10 text-primary" />
          <h3 className="mb-4 text-xl font-bold text-zinc-900">Dekking</h3>
          <p className="text-gray-600">Heel Limburg</p>
          <p className="text-gray-600">Hele Nederland</p>
        </Card>

        <Card className="flex flex-col items-center p-8 text-center">
          <CheckCircle className="mb-4 h-10 w-10 text-primary" />
          <h3 className="mb-4 text-xl font-bold text-zinc-900">Type Goederen</h3>
          <div className="space-y-2 text-gray-600">
            <p>✅ Commerciële goederen</p>
            <p>❌ Geen verhuizingen</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
