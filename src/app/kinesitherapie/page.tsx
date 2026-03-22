import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Kinésithérapie du sport à Bruxelles",
  description:
    "Consultations de kinésithérapie du sport à Bruxelles par Augustin Castel. Bilan complet, téléconsultation et coaching sportif individualisé. Centre Aspis, Woluwe-Saint-Lambert.",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Consultation au cabinet",
    description:
      "Bilan complet et traitement personnalisé dans un environnement professionnel. Spécialisé dans les pathologies musculo-squelettiques et sportives : tendinopathies, entorses, lombalgies, douleurs articulaires, rééducation post-opératoire.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Téléconsultation",
    description:
      "Suivi à distance pour les bilans de progression, l'ajustement de programme et l'accompagnement continu. Idéal pour les patients qui ne peuvent pas se déplacer ou qui souhaitent un suivi régulier entre les consultations en présentiel.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Coaching sportif individualisé",
    description:
      "Programmes d'entraînement sur mesure pour la prévention des blessures, l'amélioration des performances ou le retour au sport après blessure. Suivi régulier et ajustements basés sur votre progression.",
  },
];

const approach = [
  {
    step: "01",
    title: "Évaluation complète",
    description: "Un bilan approfondi pour comprendre votre problème, votre histoire et vos objectifs.",
  },
  {
    step: "02",
    title: "Plan personnalisé",
    description: "Un programme de traitement adapté, basé sur les preuves scientifiques et vos besoins.",
  },
  {
    step: "03",
    title: "Traitement actif",
    description: "Exercices, éducation et thérapie manuelle pour des résultats durables et une autonomie retrouvée.",
  },
  {
    step: "04",
    title: "Suivi & prévention",
    description: "Accompagnement continu et stratégies de prévention pour maintenir vos résultats sur le long terme.",
  },
];

export default function Kinesitherapie() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Kinésithérapie
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Une prise en charge
            <span className="text-amber-400"> moderne et efficace</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl">
            Des soins individualisés, basés sur les dernières preuves scientifiques,
            pour vous aider à retrouver votre plein potentiel.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Mes services"
            title="Comment puis-je vous aider ?"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Approche"
            title="Comment se déroule la prise en charge ?"
            description="Un parcours structuré pour des résultats optimaux."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {approach.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-bold text-amber-200">{item.step}</span>
                <h3 className="text-lg font-bold text-navy-900 mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Informations pratiques"
            title="Tarifs & remboursement"
          />
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-navy-100 p-8 md:p-12">
            <div className="space-y-6 text-navy-600 leading-relaxed">
              <p>
                Les consultations de kinésithérapie sont remboursées par la mutuelle selon
                les conditions habituelles (prescription médicale requise).
              </p>
              <p>
                Pour connaître les tarifs exacts et les modalités de prise de rendez-vous,
                n&apos;hésitez pas à me contacter directement.
              </p>
            </div>
            <div className="mt-8">
              <Button href="https://www.q-top.be/online-planner-v2/FR/?root=kq46938" variant="primary">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
