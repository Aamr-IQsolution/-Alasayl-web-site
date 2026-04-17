import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import PartnersSection from "@/components/home/PartnersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FleetGallery from "@/components/home/FleetGallery";

export default function LocaleHomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PartnersSection />
      <TestimonialsSection />
      <FleetGallery />
    </main>
  );
}
