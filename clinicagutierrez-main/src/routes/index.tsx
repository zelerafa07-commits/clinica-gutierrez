import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ReviewsSection from "../components/ReviewsSection";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppFAB from "../components/WhatsAppFAB";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clínica Médica Gutiérrez & Farmacia Cristina | Masaya, Nicaragua" },
      { name: "description", content: "Atención médica de calidad en Masaya, Nicaragua. Consulta clínica, farmacia y asesoramiento en salud. Abiertos de 6am a 8pm. ¡Llámanos al 5854 8571!" },
      { property: "og:title", content: "Clínica Médica Gutiérrez & Farmacia Cristina" },
      { property: "og:description", content: "Atención médica de calidad para ti y tu familia en Masaya, Nicaragua." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "keywords", content: "clínica médica Masaya, farmacia Masaya, doctor Masaya Nicaragua, consulta médica, farmacia Cristina, clínica Gutiérrez" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
