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
  title: {
    default: "Castel Physio — Kinésithérapeute du sport | Bruxelles",
    template: "%s | Castel Physio",
  },
  description:
    "Augustin Castel, kinésithérapeute du sport à Bruxelles. Consultations, téléconsultation, coaching sportif et formations pour professionnels. Approche basée sur les preuves scientifiques.",
  keywords: [
    "kinésithérapeute",
    "sport",
    "Bruxelles",
    "physiothérapie",
    "formation kiné",
    "coaching sportif",
    "téléconsultation",
    "evidence-based",
  ],
  authors: [{ name: "Augustin Castel" }],
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "Castel Physio",
    title: "Castel Physio — Kinésithérapeute du sport | Bruxelles",
    description:
      "Kinésithérapie du sport, coaching et formations pour professionnels. Approche moderne et evidence-based.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
