import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://castel-physio.com"),
  title: {
    default: "Augustin Castel — Kinésithérapeute du sport à Bruxelles | Castel Physio",
    template: "%s | Castel Physio — Augustin Castel",
  },
  description:
    "Augustin Castel, kinésithérapeute du sport à Bruxelles. Consultations au cabinet, téléconsultation, coaching sportif individualisé et formations pour professionnels de santé. Approche evidence-based, personnalisée et orientée résultats.",
  keywords: [
    "Augustin Castel",
    "Castel Physio",
    "kinésithérapeute Bruxelles",
    "kinésithérapeute du sport",
    "kiné sport Bruxelles",
    "kinésithérapie Bruxelles",
    "rééducation sportive",
    "physiothérapie Bruxelles",
    "formation kinésithérapie",
    "coaching sportif Bruxelles",
    "téléconsultation kiné",
    "tendinopathie",
    "retour au sport",
    "evidence-based practice",
    "Centre Aspis Bruxelles",
  ],
  authors: [{ name: "Augustin Castel" }],
  creator: "Augustin Castel",
  publisher: "Castel Physio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://castel-physio.com",
    siteName: "Castel Physio",
    title: "Augustin Castel — Kinésithérapeute du sport à Bruxelles",
    description:
      "Kinésithérapie du sport, coaching sportif et formations pour professionnels. Approche moderne, personnalisée et evidence-based à Bruxelles.",
  },
  alternates: {
    canonical: "https://castel-physio.com",
  },
  verification: {
    // À compléter après inscription à Google Search Console
    // google: "votre-code-de-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthBusiness",
              "@id": "https://castel-physio.com",
              name: "Castel Physio",
              alternateName: "Augustin Castel Kinésithérapeute",
              description: "Cabinet de kinésithérapie du sport à Bruxelles. Consultations, téléconsultation, coaching sportif et formations pour professionnels de santé.",
              url: "https://castel-physio.com",
              telephone: "+32497233858",
              email: "castelphysio94@hotmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Avenue Jacques Brel 34",
                addressLocality: "Bruxelles",
                postalCode: "1200",
                addressCountry: "BE",
                name: "Centre Aspis",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.85,
                longitude: 4.4,
              },
              founder: {
                "@type": "Person",
                name: "Augustin Castel",
                jobTitle: "Kinésithérapeute du sport",
                url: "https://castel-physio.com/a-propos",
                sameAs: [
                  "https://www.instagram.com/castel_physio/",
                  "https://linkedin.com/in/castelphysio/",
                  "https://www.youtube.com/@CastelPhysio",
                ],
              },
              medicalSpecialty: "PhysicalTherapy",
              availableService: [
                {
                  "@type": "MedicalTherapy",
                  name: "Consultation en kinésithérapie du sport",
                  description: "Bilan complet et prise en charge personnalisée en pathologies du sportif et rééducation fonctionnelle.",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Téléconsultation",
                  description: "Consultations à distance pour le suivi et l'ajustement de votre programme de rééducation.",
                },
                {
                  "@type": "Service",
                  name: "Coaching sportif individualisé",
                  description: "Programmes d'entraînement sur mesure pour la prévention, la performance et le retour au sport.",
                },
              ],
              sameAs: [
                "https://www.instagram.com/castel_physio/",
                "https://linkedin.com/in/castelphysio/",
                "https://www.youtube.com/@CastelPhysio",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "19:00",
              },
              priceRange: "€€",
              areaServed: {
                "@type": "City",
                name: "Bruxelles",
              },
              inLanguage: "fr",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
