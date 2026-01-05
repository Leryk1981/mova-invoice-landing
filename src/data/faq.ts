import { IFAQ } from "@/types";

export const faqs: IFAQ[] = [
  {
    question: "Braucht ihr Zugriff auf mein Bankkonto?",
    answer: "Nein. Im MVP gibt es keinen Banking-Zugriff und keine PSD2-Anbindung.",
  },
  {
    question: "Ersetzt ihr sevDesk?",
    answer: "Nein. MOVA Invoice ist ein Workflow-Layer und erg&auml;nzt sevDesk.",
  },
  {
    question: "Wo laufen die Daten?",
    answer: "Im MOVA Gateway, nur so viel wie n&ouml;tig. Kurzlebig, keine Weitergabe.",
  },
  {
    question: "Kann ich erst testen?",
    answer: "Ja. Wir starten mit Dry-Run und schalten erst nach Freigabe live.",
  },
  {
    question: "Do you need access to my bank account?",
    answer: "No. There is no banking connection in the MVP.",
  },
  {
    question: "Do you replace sevDesk?",
    answer: "No. We add a deterministic workflow layer on top of sevDesk.",
  },
];
