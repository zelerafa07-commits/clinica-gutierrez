import { Stethoscope, ClipboardList, Pill, HeartPulse, Ambulance } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  { icon: Stethoscope, title: "Atención médica general", desc: "Diagnóstico y tratamiento integral para toda la familia, desde niños hasta adultos mayores." },
  { icon: ClipboardList, title: "Consulta clínica", desc: "Evaluación profesional de tus síntomas con un enfoque personalizado y humano." },
  { icon: Pill, title: "Farmacia completa", desc: "Medicamentos de calidad a precios accesibles. Disponemos de un amplio inventario." },
  { icon: HeartPulse, title: "Asesoramiento en salud", desc: "Orientación profesional sobre prevención, nutrición y cuidado personal." },
  { icon: Ambulance, title: "Atención 24/7 casos urgentes", desc: "Atención médica disponible las 24 horas para casos de urgencia. Tu salud no puede esperar." },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-clinic-blue-light/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestros servicios</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Clínica y farmacia juntas para brindarte atención completa y rápida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 border border-border hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
