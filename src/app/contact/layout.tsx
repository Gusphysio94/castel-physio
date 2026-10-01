import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contactez Augustin Castel, kinésithérapeute du sport à Bruxelles. Prise de rendez-vous, téléconsultation, coaching sportif et formations.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
