import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/50558548571?text=Hola%2C%20quisiera%20agendar%20una%20cita";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-clinic-blue-light via-background to-clinic-green-light">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-clinic-green/5" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-clinic-green/10 text-clinic-green px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Clock size={16} />
              Abierto hoy: 6:00 a.m. – 8:00 p.m.
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Clínica Médica Gutiérrez
              <span className="block text-primary">&amp; Farmacia Cristina</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Atención médica de calidad para ti y tu familia. Tu salud es nuestra prioridad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="tel:58548571"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              <Phone size={20} />
              Llamar ahora
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-clinic-green text-primary-foreground px-6 py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-clinic-green/25 hover:shadow-xl hover:shadow-clinic-green/30 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/u5AdfSRw1PmFyQtS6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-6 py-3.5 rounded-xl text-base font-semibold hover:bg-accent hover:-translate-y-0.5 transition-all"
            >
              <MapPin size={20} />
              Ubicación
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
