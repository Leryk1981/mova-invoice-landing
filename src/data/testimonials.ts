import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Pilotkunde',
        role: 'Praxisinhaber',
        message: `${siteDetails.siteName} macht unseren Rechnungsablauf nachvollziehbar, ohne dass wir am Buchhaltungs-Setup r&uuml;tteln mussten.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Operations',
        role: 'Agentur',
        message: `Der Dry-Run vor dem Live-Start spart uns Fehler &ndash; und das Evidence-Log ist Gold wert.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Freelancer',
        role: 'Beratung',
        message: `Keine Bank-Anbindung, kein Risiko &ndash; trotzdem ein klarer Workflow mit sauberen Exporten.`,
        avatar: '/images/testimonial-3.webp',
    },
];
