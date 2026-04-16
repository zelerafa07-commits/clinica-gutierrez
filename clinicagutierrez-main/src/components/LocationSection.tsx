import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-clinic-green-light/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-clinic-green font-semibold text-sm uppercase tracking-wider">Ubicación</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Encuéntranos en Masaya
          </h2>
          <p className="mt-4 text-muted-foreground text-lg flex items-center justify-center gap-2">
            <MapPin size={20} className="text-clinic-green" />
            Cruz Blanca 2C ½ al Oeste, Masaya, Nicaragua
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-sm"
        >
          <iframe
            title="Ubicación Clínica Médica Gutiérrez"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.0!2d-86.0914!3d11.9744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU4JzI3LjgiTiA4NsKwMDUnMjkuMCJX!5e0!3m2!1ses!2sni!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mt-6 text-center">
          <a
            href="https://maps.app.goo.gl/u5AdfSRw1PmFyQtS6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-clinic-green text-primary-foreground px-6 py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-clinic-green/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <Navigation size={20} />
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
}
