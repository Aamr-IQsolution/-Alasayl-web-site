"use client";

import { useTranslations } from "next-intl";
import { Package, Truck, Newspaper, Zap } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Link } from "@/navigation";

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      icon: Package,
      title: t("packages.title"),
      description: t("packages.description"),
    },
    {
      icon: Truck,
      title: t("freight.title"),
      description: t("freight.description"),
    },
    {
      icon: Newspaper,
      title: t("newspapers.title"),
      description: t("newspapers.description"),
    },
    {
      icon: Zap,
      title: t("urgent.title"),
      description: t("urgent.description"),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex transform flex-col items-center text-center transition-transform hover:-translate-y-1"
            >
              <service.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services">
            <Button variant="primary" size="lg">
              {t("viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
