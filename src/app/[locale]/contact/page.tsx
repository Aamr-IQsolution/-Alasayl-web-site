import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* 1. معلومات الاتصال */}
      <section className="grid md:grid-cols-2 gap-12 mb-16 items-start">
        <div>
          <h1 className="text-4xl font-bold text-zinc-900 mb-8">
            {t("title")}
          </h1>
          
          <div className="space-y-8 mt-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">{t("info.address.title")}</h3>
                <p className="text-gray-600">{t("info.address.line1")}</p>
                <p className="text-gray-600">{t("info.address.line2")}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">{t("info.phone.title")}</h3>
                <p className="text-gray-600">+31 6 2266 5522</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">{t("info.email.title")}</h3>
                <p className="text-gray-600">info@alasayltransport.nl</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">{t("info.hours.title")}</h3>
                <p className="text-gray-600">{t("info.hours.weekdays")}</p>
                <p className="text-gray-600">{t("info.hours.sunday")}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-12">
            <a 
              href="https://wa.me/31622665522" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 h-12 px-6 text-base bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary/40"
            >
              {t("buttons.whatsapp")}
            </a>
            <a 
              href="tel:+31622665522" 
              className="inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 h-12 px-6 text-base border border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary/30"
            >
              {t("buttons.call")}
            </a>
          </div>
        </div>
        
        <div className="h-full min-h-[400px]">
          {/* Google Maps Placeholder */}
          <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Google Maps View</p>
              <p className="text-sm text-gray-400 mt-2">Sleedoornstraat 23, Echt</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quote Request Form */}
      <section className="mb-24 py-16 bg-zinc-50 rounded-3xl px-6 md:px-12 border border-zinc-100">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-12">
          {t("quoteTitle")}
        </h2>
        <div className="max-w-4xl mx-auto">
          <QuoteForm />
        </div>
      </section>

      {/* 3. Contact Form */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-12">
          {t("messageTitle")}
        </h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
