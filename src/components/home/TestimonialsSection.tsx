"use client";

import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import Card from "@/components/ui/Card";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      id: 1,
      name: "Jan de Vries",
      company: "ABC Logistics",
      rating: 5,
      text: t("testimonial1.text"),
      initials: "JV",
    },
    {
      id: 2,
      name: "Maria Johnson",
      company: "Transport Solutions BV",
      rating: 5,
      text: t("testimonial2.text"),
      initials: "MJ",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      company: "Global Trade Corp",
      rating: 5,
      text: t("testimonial3.text"),
      initials: "AH",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col p-6">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              
              <p className="mt-4 mb-6 italic leading-relaxed text-zinc-700">
                {testimonial.text}
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-zinc-100 pt-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
