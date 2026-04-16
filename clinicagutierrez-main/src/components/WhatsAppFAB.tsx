import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/50558548571?text=Hola%2C%20quisiera%20agendar%20una%20cita";

export default function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-clinic-green text-primary-foreground rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform whatsapp-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}
