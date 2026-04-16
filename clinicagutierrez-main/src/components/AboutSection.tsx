import { CheckCircle, Heart, Shield, Users, Baby, UserCheck, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const VALUES = [
  { icon: Heart, title: "Compromiso", desc: "Cuidamos de tu salud con dedicación y calidez humana." },
  { icon: Shield, title: "Confianza", desc: "Años de experiencia brindando atención de calidad en Masaya." },
  { icon: Users, title: "Comunidad", desc: "Somos parte de Masaya, tu bienestar es nuestro objetivo." },
];

const WHY_US = [
  { icon: Baby, text: "Clínica apta para niños" },
  { icon: UserCheck, text: "Atención personalizada" },
  { icon: Stethoscope, text: "Pediatras con experiencia" },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre nosotros</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Tu salud en las mejores manos
          </h2>
        </motion.div>

        {/* Doctor + description */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src="/images/dr-gutierrez.jpg"
                alt="Dr. Carlos Gutiérrez - Médico Pediatra"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dr. Carlos Gutiérrez
            </h3>
            <p className="text-primary font-semibold mb-4">Médico Pediatra</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Contamos con el liderazgo del Dr. Carlos Gutiérrez, médico pediatra altamente
              capacitado y con amplia experiencia en el cuidado infantil. Su formación
              especializada garantiza que sus hijos reciban una atención médica de primer
              nivel, enfocada en un desarrollo sano y seguro para cada etapa de su crecimiento.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En <strong>Clínica Médica Gutiérrez y Farmacia Cristina</strong> combinamos
              atención médica profesional con un trato cercano y humano. Trabajamos en equipo
              para ofrecer la mejor atención integral. Comprometidos con tu salud.
            </p>

            <h4 className="text-xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h4>
            <div className="flex flex-col gap-3">
              {WHY_US.map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-clinic-green/10 rounded-xl px-4 py-3">
                  <CheckCircle size={22} className="text-clinic-green flex-shrink-0" />
                  <span className="font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <v.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
