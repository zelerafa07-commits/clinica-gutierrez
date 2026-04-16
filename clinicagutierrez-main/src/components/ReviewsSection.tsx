import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS = [
  { name: "Jonathan Valle", initials: "JV", text: "Atención médica de primera calidad! Recomendado", rating: 5 },
  { name: "María López", initials: "ML", text: "Excelente trato y muy profesionales. Siempre voy con mi familia.", rating: 5 },
  { name: "Carlos Hernández", initials: "CH", text: "La farmacia tiene de todo y los precios son muy accesibles. Muy recomendado.", rating: 5 },
  { name: "Ana García", initials: "AG", text: "Me atendieron rápido y con mucha amabilidad. Sin duda volveré.", rating: 5 },
  { name: "Roberto Morales", initials: "RM", text: "Llevo años visitando esta clínica. Confianza total en el doctor Gutiérrez.", rating: 5 },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length);

  const review = REVIEWS[current];

  return (
    <section id="opiniones" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Opiniones</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>

        <div className="max-w-lg mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm relative"
            >
              <Quote size={40} className="text-primary/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">Paciente verificado</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border"}`}
                  aria-label={`Opinión ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
