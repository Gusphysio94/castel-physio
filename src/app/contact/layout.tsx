import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Augustin Castel, kinésithérapeute du sport à Bruxelles. Prise de rendez-vous, téléconsultation, coaching sportif et formations.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
