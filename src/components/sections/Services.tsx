"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceFlipCard from "@/components/ui/ServiceFlipCard";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Consultation au cabinet",
    tagline: "Reprenez le contrôle sur votre douleur et votre corps.",
    description:
      "Un bilan complet et précis pour comprendre réellement votre problème, suivi d'une prise en charge personnalisée.\n\nApproche basée sur les dernières données scientifiques, orientée résultats concrets : moins de douleur, plus de fonction, retour à vos activités.\n\n📍 À Bruxelles, spécialisé en pathologies du sportif et rééducation fonctionnelle.",
    image: "/images/service-cabinet.jpg",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Téléconsultation",
    tagline: "Un suivi expert, où que vous soyez.",
    description:
      "Des consultations à distance pour faire le point, ajuster votre progression et rester sur la bonne trajectoire.\n\nVous savez exactement quoi faire, pourquoi vous le faites, et comment progresser sans aggraver vos symptômes.\n\nFlexible, efficace, et adapté à votre quotidien.",
    image: "/images/service-teleconsultation.png",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Coaching sportif individualisé",
    tagline: "Un programme construit pour vous, pas un template.",
    description:
      "Entraînement sur mesure basé sur votre niveau, vos objectifs et vos contraintes.\n\nQue ce soit pour prévenir les blessures, performer ou reprendre le sport en sécurité, chaque étape est pensée pour vous faire progresser durablement.\n\nUn accompagnement structuré, précis, et évolutif.",
    image: "/images/service-coaching.png",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50/30 via-navy-50/60 to-navy-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Services"
            title="Et si vous preniez soin de vous ?"
            description="Une approche complète pour votre santé et votre performance, adaptée à vos besoins spécifiques."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start mb-14">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} animation="reveal-up" delay={i * 120}>
              {service.image ? (
                <ServiceFlipCard {...service} image={service.image} />
              ) : (
                <ServiceCard {...service} />
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button href="/kinesitherapie" variant="secondary">
              En savoir plus
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
