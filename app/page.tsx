import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { PopularCarsSection } from "@/components/home/popular-cars-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PopularCarsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}