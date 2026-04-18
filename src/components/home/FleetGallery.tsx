"use client";

import { useTranslations } from "next-intl";
import { Truck } from "lucide-react";
import MyButton from "@/components/ui/Button"; 
import { Link } from "@/navigation";
import Image from "next/image";

export default function FleetGallery() {
  const t = useTranslations("fleet");
  
  const fleetImages = [
    {
      id: 1,
      src: '/images/fleet/sprinter-side.jpg',
      alt: 'Mercedes-Benz Sprinter - Zijaanzicht',
      title: 'Mercedes-Benz Sprinter v4',
      category: 'sprinter'
    },
    {
      id: 2,
      src: '/images/fleet/sprinter-front.jpg',
      alt: 'Mercedes-Benz Sprinter - Vooraanzicht',
      title: 'Mercedes-Benz Sprinter v4',
      category: 'sprinter'
    },
    {
      id: 3,
      src: '/images/fleet/sprinter-action.jpg',
      alt: 'Mercedes-Benz Sprinter - In Actie',
      title: 'Mercedes-Benz Sprinter tijdens bezorging',
      category: 'sprinter'
    },
    {
      id: 4,
      src: '/images/fleet/sprinter-interior.jpg',
      alt: 'Mercedes-Benz Sprinter - Interieur laadruimte',
      title: 'Mercedes-Benz Sprinter v4 - Laadruimte',
      category: 'sprinter'
    },
    {
      id: 5,
      src: '/images/fleet/vito-side.jpg',
      alt: 'Mercedes-Benz Vito - Zijaanzicht',
      title: 'Mercedes-Benz Vito',
      category: 'vito'
    },
    {
      id: 6,
      src: '/images/fleet/vito-urban.jpg',
      alt: 'Mercedes-Benz Vito - Stadsbezorging',
      title: 'Mercedes-Benz Vito in de stad',
      category: 'vito'
    }
  ];

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
          {fleetImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-video overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                title={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={85}
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
              />
              
              {/* Overlay مع العنوان */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                  <span className="inline-block mt-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {image.category === 'sprinter' ? 'Sprinter v4' : 'Vito'}
                  </span>
                </div>
              </div>
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
