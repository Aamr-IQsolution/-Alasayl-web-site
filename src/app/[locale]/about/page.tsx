"use client";

import { useTranslations } from "next-intl";
import { Truck, Package, TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* القسم 1: Hero/Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold md:text-5xl text-zinc-900">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          {t("subtitle")}
        </p>
      </section>

      {/* القسم 2: معلومات الشركة */}
      <section className="mb-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-zinc-900">
            {t("company.title")}
          </h2>
          <p className="leading-relaxed text-gray-600">
            {t("company.description")}
          </p>

          <div className="mt-8 rounded-xl bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-zinc-900">
              Bedrijfsgegevens
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="font-semibold">KvK:</span> 93558422
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">SBI:</span> 4941
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">Adres:</span> Sleedoornstraat 23, 6101MS Echt
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">Specialisatie:</span> Commercieel transport
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="aspect-video w-full rounded-lg bg-gray-200 flex items-center justify-center border-2 border-gray-300">
             <Truck className="h-20 w-20 text-gray-400" />
          </div>
        </div>
      </section>

      {/* القسم 3: Mission & Vision */}
      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <Card className="p-8 border-t-4 border-primary">
          <h3 className="mb-4 text-2xl font-bold text-zinc-900">
            {t("mission.title")}
          </h3>
          <p className="leading-relaxed text-gray-600">
            {t("mission.text")}
          </p>
        </Card>

        <Card className="p-8 border-t-4 border-secondary">
          <h3 className="mb-4 text-2xl font-bold text-zinc-900">
            {t("vision.title")}
          </h3>
          <p className="leading-relaxed text-gray-600">
            {t("vision.text")}
          </p>
        </Card>
      </section>

      {/* القسم 4: الأسطول */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-zinc-900">
          {t("fleet.title")}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8">
            <Truck className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-4 text-xl font-bold text-zinc-900">
              Mercedes-Benz Sprinter v4
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Grote laadruimte</li>
              <li>• Moderne voertuigen</li>
              <li>• Geschikt voor grote leveringen</li>
            </ul>
          </Card>

          <Card className="p-8">
            <Package className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-4 text-xl font-bold text-zinc-900">
              Mercedes-Benz Vito
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Compacte bestelwagens</li>
              <li>• Ideaal voor pakketbezorging</li>
              <li>• Wendbaar en zuinig</li>
            </ul>
          </Card>
        </div>

        <p className="mt-8 text-center font-medium text-zinc-700">
          Totaal: Meer dan 15 voertuigen beschikbaar
        </p>
      </section>

      {/* القسم 5: التوسع */}
      <section className="rounded-2xl bg-primary p-8 text-center text-white md:p-16">
        <TrendingUp className="mx-auto mb-6 h-16 w-16 text-secondary" />
        <h2 className="mb-4 text-3xl font-bold">
          {t("expansion.title")}
        </h2>
        <p className="mx-auto max-w-2xl text-lg opacity-90">
          {t("expansion.description")}
        </p>
      </section>
    </div>
  );
}
