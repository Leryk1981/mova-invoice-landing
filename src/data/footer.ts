import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Deterministische Rechnungs-Workflows mit sevDesk. Kein Banking-Zugriff erforderlich.",
    quickLinks: [
        {
            text: "Ablauf",
            url: "#how-it-works"
        },
        {
            text: "Pilot",
            url: "#pilot"
        },
        {
            text: "FAQ",
            url: "#faq"
        },
        {
            text: "Impressum",
            url: "#imprint"
        },
        {
            text: "Datenschutz",
            url: "#privacy"
        }
    ],
    email: 'pilot@mova-invoice.com',
    telephone: '',
    socials: {}
}
