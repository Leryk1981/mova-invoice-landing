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
  title: 'Battery Pass Compliance 2027 | MOVA - Annex XIII Ready',
  description: 'EU Battery Regulation Annex XIII passports in 5 minutes. No code required. Battery Pass Content Guidance compliant.',
  openGraph: {
    title: 'Battery Pass 2027-Ready | MOVA',
    description: 'EU Annex XIII compliance for SMB battery makers',
    images: '/og-battery-dpp.jpg',
    url: 'https://mova-dpp.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Battery Pass Compliance 2027-Ready',
    description: 'Annex XIII passports in 5 minutes',
    images: '/og-battery-dpp.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
