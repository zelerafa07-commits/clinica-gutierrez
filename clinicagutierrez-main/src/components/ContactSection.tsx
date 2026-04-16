import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/50558548571?text=Hola%2C%20quisiera%20agendar%20una%20cita";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contacto rápido</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Estamos para ayudarte
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Contáctanos de la forma que prefieras. Te atendemos con gusto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          <motion.a
            href="tel:58548571"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Phone size={32} className="text-primary" />
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground text-lg">Llamar</p>
              <p className="text-muted-foreground text-sm mt-1">+505 5854 8571</p>
            </div>
          </motion.a>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-4 bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-clinic-green/20 hover:-translate-y-1 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-clinic-green/10 flex items-center justify-center">
              <MessageCircle size={32} className="text-clinic-green" />
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground text-lg">WhatsApp</p>
              <p className="text-muted-foreground text-sm mt-1">Escríbenos</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/profile.php?id=100064153498407"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4 bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary fill-current">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground text-lg">Facebook</p>
              <p className="text-muted-foreground text-sm mt-1">Clínica Médica Gutierrez</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@carlosmgutierrezg6"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4 bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-foreground/20 hover:-translate-y-1 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-foreground/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-foreground fill-current">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.83 4.83 0 0 1-1-.15z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground text-lg">TikTok</p>
              <p className="text-muted-foreground text-sm mt-1">@carlosmgutierrezg6</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
