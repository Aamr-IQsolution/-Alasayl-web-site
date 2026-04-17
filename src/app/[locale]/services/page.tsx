"use client";

import { useTranslations } from "next-intl";
import {
  Package,
  Truck,
  Newspaper,
  Zap,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";
import Card from "@/components/ui/Card";

type ServiceId = "packages" | "freight" | "newspapers" | "urgent";

export default function ServicesPage() {
  const t = useTranslations("servicesPage");

  const serviceIds: ServiceId[] = ["packages", "freight", "newspapers", "urgent"];

  const icons = {
    packages: Package,
    freight: Truck,
    newspapers: Newspaper,
    urgent: Zap,
  };

  const services = serviceIds.map((id) => ({
    id,
    icon: icons[id],
    title: t(`${id}.title`),
    description: t(`${id}.description`),
    features: t.raw(`${id}.features`) as string[],
    vehicles: t(`${id}.vehicles`),
  }));

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
                  {t("featuresHeading")}
                </h3>
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-700">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <h3 className="mt-6 text-xl font-bold text-zinc-900">
                  {t("vehiclesHeading")}
                </h3>
                <p className="mt-2 text-gray-700">{service.vehicles}</p>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* Additional Info */}
      <section className="mt-24 grid gap-8 md:grid-cols-3">
        <Card className="flex flex-col items-center p-8 text-center">
          <Clock className="mb-4 h-10 w-10 text-primary" />
          <h3 className="mb-4 text-xl font-bold text-zinc-900">
            {t("hoursCard.title")}
          </h3>
          <p className="text-gray-600">{t("hoursCard.weekdays")}</p>
          <p className="text-gray-600">{t("hoursCard.sunday")}</p>
        </Card>

        <Card className="flex flex-col items-center p-8 text-center">
          <MapPin className="mb-4 h-10 w-10 text-primary" />
          <h3 className="mb-4 text-xl font-bold text-zinc-900">
            {t("coverageCard.title")}
          </h3>
          <p className="text-gray-600">{t("coverageCard.line1")}</p>
          <p className="text-gray-600">{t("coverageCard.line2")}</p>
        </Card>

        <Card className="flex flex-col items-center p-8 text-center">
          <CheckCircle className="mb-4 h-10 w-10 text-primary" />
          <h3 className="mb-4 text-xl font-bold text-zinc-900">
            {t("goodsCard.title")}
          </h3>
          <div className="space-y-2 text-gray-600">
            <p>{t("goodsCard.commercial")}</p>
            <p>{t("goodsCard.noMoves")}</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
