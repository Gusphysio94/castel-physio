import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Formations pour kinésithérapeutes — Tendinopathie, Kinéathlétisation",
  description:
    "Formations e-learning par Augustin Castel : Tendinopathie 2.0, Kinéathlétisation, Tendinopathie d'Achille 2.0. Contenu evidence-based pour professionnels de santé.",
};

const formations = [
  {
    tag: "E-learning",
    title: "Tendinopathie 2.0",
    description:
      "Approfondissez vos connaissances sur les tendinopathies avec une approche moderne et basée sur la science. Physiopathologie, évaluation, raisonnement clinique et programmation d'exercices.",
    image: "/images/formation-tendinopathie.png",
    link: "https://www.fullphysio.com/formation/tendinopathies-2-0",
    highlights: [
      "Physiopathologie actualisée",
      "Raisonnement clinique structuré",
      "Programmation d'exercices basée sur les preuves",
      "Études de cas interactives",
    ],
  },
  {
    tag: "E-learning",
    title: "Kinéathlétisation",
    description:
      "Apprenez à développer les qualités physiques de vos patient(e)s au cabinet pour faire passer un cap à vos prises en charge. Force, puissance, endurance : les fondamentaux de la préparation physique appliqués à la kiné.",
    image: "/images/formation-kineathlétisation.png",
    link: "https://www.fullphysio.com/formation/kineathletisation",
    highlights: [
      "Développement des qualités physiques",
      "Programmation et périodisation",
      "Application directe au cabinet",
      "Ressources et templates de programmes",
    ],
  },
  {
    tag: "E-learning",
    title: "Tendinopathie d'Achille 2.0",
    description:
      "Approfondissez vos connaissances sur le tendon d'Achille avec une approche moderne et basée sur la science. De l'évaluation à la prise en charge complète.",
    image: "/images/formation-tendinopathie-achille.png",
    link: "https://www.fullphysio.com/formation/tendinopathies-achille-2-0",
    highlights: [
      "Anatomie et biomécanique du tendon d'Achille",
      "Évaluation clinique spécifique",
      "Protocoles de rééducation evidence-based",
      "Critères de retour au sport",
    ],
  },
];

export default function FormationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Formations
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Développez vos
            <span className="text-amber-400"> compétences cliniques</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl">
            Des formations conçues par un clinicien, pour des cliniciens.
            Contenu rigoureux, basé sur les preuves, et directement applicable en pratique.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 bg-white border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy-900 mb-2">Evidence-based</h3>
              <p className="text-sm text-navy-600">Contenu basé sur les dernières publications scientifiques</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy-900 mb-2">Directement applicable</h3>
              <p className="text-sm text-navy-600">Des outils et concepts utilisables dès le lendemain en clinique</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy-900 mb-2">Par un clinicien</h3>
              <p className="text-sm text-navy-600">Créé par un praticien qui comprend vos réalités quotidiennes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formation cards */}
      <section className="py-20 md:py-28 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Catalogue"
            title="Mes formations"
          />
          <div className="space-y-16">
            {formations.map((formation) => (
              <div
                key={formation.title}
                className="relative bg-white rounded-2xl border border-navy-100 overflow-visible hover:shadow-lg transition-shadow"
              >
                <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-t-2xl" />
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="p-8 md:p-10 flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-amber-50 text-amber-700 rounded-full">
                        {formation.tag}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
                      {formation.title}
                    </h3>
                    <p className="text-navy-600 leading-relaxed mb-6 max-w-3xl">
                      {formation.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {formation.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm text-navy-700">
                          <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <a
                      href={formation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer btn-magnetic bg-gradient-to-r from-amber-500 to-amber-400 text-navy-950 shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] hover:from-amber-400 hover:to-amber-300"
                    >
                      En savoir plus
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                  {formation.image && (
                    <div className="hidden md:flex items-center pr-10 shrink-0">
                      <div className="relative -my-4 w-52 lg:w-60 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-navy-900/10">
                        <Image
                          src={formation.image}
                          alt={formation.title}
                          width={240}
                          height={420}
                          className="object-contain w-full h-auto"
                          sizes="240px"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
