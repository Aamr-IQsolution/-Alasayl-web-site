"use client";

import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

type SupportedLocale = "nl" | "ar" | "en";

export default function Footer() {

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Fleet", href: "/fleet" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ];

  const services = [
    "National Goods Transport",
    "Express Delivery",
    "Business Logistics",
    "Dedicated Transport Solutions",
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-primary">Alasayl</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Professional transport services across the Netherlands, focused on speed,
              reliability and customer care.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:fissalgghh@gmail.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-zinc-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Contact Info
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Eindhoven, Netherlands</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+31622665522" className="hover:text-primary">
                  +31 622 665 522
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:fissalgghh@gmail.com" className="hover:text-primary">
                  fissalgghh@gmail.com
                </a>
              </li>
              <li>Mon - Sat: 08:00 - 18:00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alasayl Transport. All rights reserved.</p>
          <p>KvK: 93558422</p>
        </div>
      </div>
    </footer>
  );
}
