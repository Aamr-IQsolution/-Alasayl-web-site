"use client";

import { useTranslations } from "next-intl";
import CareerForm from "@/components/forms/CareerForm";
import Card from "@/components/ui/Card";

export default function CareersPage() {
  const t = useTranslations("careersPage");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold md:text-5xl text-zinc-900 mb-4">
          {t("title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          {t("subtitle")}
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          {t("intro.title")}
        </h2>
        <p className="leading-relaxed text-gray-600 text-lg">
          {t("intro.description")}
        </p>
      </section>

      {/* Current Job Position */}
      <section className="mb-16 max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 border-t-4 border-primary">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center md:text-left">
            Chauffeur / Bezorger
          </h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">
                Functieomschrijving:
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t("driver.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">
                  {t("driver.requirementsTitle")}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {(t.raw("driver.requirements") as string[]).map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">
                  {t("driver.benefitsTitle")}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {(t.raw("driver.benefits") as string[]).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Application Form */}
      <section className="bg-zinc-50 rounded-3xl py-16 px-6 md:px-12 border border-zinc-100">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-12">
          {t("form.title")}
        </h2>
        <div className="max-w-2xl mx-auto">
          <CareerForm />
        </div>
      </section>
    </div>
  );
}
