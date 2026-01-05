import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MOVA Invoice | Rechnungs-Workflows mit sevDesk ohne Banking',
  description: 'Deterministische Rechnungs-Workflows mit sevDesk. Kein Banking-Zugriff erforderlich. Evidence-Log und Perioden-Export.',
  openGraph: {
    title: 'MOVA Invoice | sevDesk Workflow Layer',
    description: 'Automatisiere Rechnungen mit Evidence-Log und Perioden-Export. Kein Banking-Zugriff erforderlich.',
    images: '/images/hero-mockup.webp',
    url: 'https://mova-invoice.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOVA Invoice | sevDesk Workflow Layer',
    description: 'Deterministische Rechnungs-Workflows ohne Banking-Zugriff.',
    images: '/images/hero-mockup.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
