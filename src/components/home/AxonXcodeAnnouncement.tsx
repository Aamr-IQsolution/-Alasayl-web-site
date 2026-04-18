"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AxonXcodeAnnouncement() {
  const t = useTranslations("axonxcodeAnnouncement");

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00D4FF] to-[#FF00FF] shadow-2xl">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
          {/* Left Section: Logo */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
              NEW 2025
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-white/20 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative animate-pulse-slow">
                <Image
                  src="/images/partners/axonxcode-logo-medium.png"
                  alt="AxonXcode Logo"
                  width={320}
                  height={160}
                  className="w-full max-w-xs mx-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="flex flex-col items-start text-white">
            <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold mb-4 backdrop-blur-sm">
              {t("badge")}
            </span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
              {t("title")}
            </h2>
            
            <h3 className="text-xl md:text-2xl font-bold text-cyan-100 mb-6 opacity-90">
              {t("subtitle")}
            </h3>
            
            <p className="text-lg leading-relaxed text-white/90 mb-10 max-w-xl">
              {t("description")}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center space-x-3 rtl:space-x-reverse group">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-base font-medium">
                    {t(`features.feature${i}`)}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="https://www.axonxcode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="bg-white text-[#1E90FF] hover:bg-cyan-50 border-none shadow-lg text-lg px-10 group w-full"
              >
                {t("cta")}
                <ExternalLink className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
