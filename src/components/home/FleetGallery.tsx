"use client";

import { useTranslations } from "next-intl";
import { Truck } from "lucide-react";
import MyButton from "@/components/ui/Button"; 
import { Link } from "@/navigation";

export default function FleetGallery() {
  const t = useTranslations("fleet");
  const placeholders = Array(6).fill(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="group relative aspect-video flex items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-200 transition-all duration-300 hover:border-primary"
            >
              <Truck className="h-16 w-16 text-gray-400 transition-colors duration-300 group-hover:text-primary" />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/fleet">
            <MyButton variant="primary" size="lg">
              {t("viewAll")}
            </MyButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
