import { useState } from "react";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={14} />
              <a href="tel:58548571" className="hover:underline">+505 5854 8571</a>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              Lun–Dom: 6:00 a.m. – 8:00 p.m.
            </span>
          </div>
          <a
            href="https://maps.app.goo.gl/u5AdfSRw1PmFyQtS6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <MapPin size={14} />
            Cruz Blanca 2C ½ al Oeste, Masaya
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-card/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img src="/images/logo-clinica.jpg" alt="Logo Clínica Médica Gutiérrez" className="w-10 h-10 rounded-xl object-cover" />
            <div className="leading-tight">
              <span className="font-bold text-foreground text-sm md:text-base block">Clínica Gutiérrez</span>
              <span className="text-muted-foreground text-xs">& Farmacia Cristina</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:58548571"
              className="ml-3 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone size={16} />
              Llamar
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden border-t border-border bg-card px-4 pb-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:58548571"
              className="mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold"
            >
              <Phone size={16} />
              Llamar ahora
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
