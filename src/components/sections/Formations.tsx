"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const formations = [
  {
    tag: "E-learning",
    title: "Tendinopathie 2.0",
    description: "Approfondissez vos connaissances sur les tendinopathies avec une approche moderne et basée sur la science.",
    audience: "Professionnels de santé",
    image: "/images/formation-tendinopathie.png",
  },
  {
    tag: "E-learning",
    title: "Kinéathlétisation",
    description: "Apprenez à développer les qualités physiques de vos patient(e)s au cabinet pour faire passer un cap à vos prises en charge.",
    audience: "Professionnels de santé",
    image: "/images/formation-kineathlétisation.png",
  },
  {
    tag: "E-learning",
    title: "Tendinopathie d'Achille 2.0",
    description: "Approfondissez vos connaissances sur le tendon d'Achille avec une approche moderne et basée sur la science.",
    audience: "Professionnels de santé",
    image: "/images/formation-tendinopathie-achille.png",
  },
];

function FormationCard({ formation }: { formation: typeof formations[number] }) {
  const [isHovered, setIsHovered] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [frontHeight, setFrontHeight] = useState<number>(0);
  const [backHeight, setBackHeight] = useState<number>(0);

  useEffect(() => {
    if (frontRef.current) {
      setFrontHeight(frontRef.current.offsetHeight);
    }
    if (backRef.current) {
      setBackHeight(backRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="transition-[height] duration-700 ease-in-out overflow-hidden"
        style={{ height: isHovered ? (backHeight || "auto") : frontHeight || "auto" }}
      >
        {/* Front */}
        <div
          ref={frontRef}
          className={`rounded-2xl border border-navy-100/80 bg-white transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-0 scale-95 pointer-events-none absolute inset-x-0 top-0" : "opacity-100 scale-100"
          }`}
        >
          <div className="h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-t-2xl" />
          <div className="p-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 rounded-full">
                {formation.tag}
              </span>
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-3 font-display leading-snug">
              {formation.title}
            </h3>
            <p className="text-navy-500 text-[15px] leading-relaxed mb-5">
              {formation.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-navy-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {formation.audience}
            </div>
          </div>
        </div>

        {/* Back — image */}
        <div
          ref={backRef}
          className={`rounded-2xl overflow-hidden shadow-xl ring-1 ring-navy-900/10 transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none absolute inset-x-0 top-0"
          }`}
        >
          <Image
            src={formation.image}
            alt={formation.title}
            width={400}
            height={700}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent rounded-2xl" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-bold text-white font-display drop-shadow-lg">
              {formation.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Formations() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Formations"
            title="Développez vos compétences"
            description="Des formations conçues par et pour des kinésithérapeutes. Contenu basé sur les dernières preuves scientifiques."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start mb-14">
          {formations.map((formation, i) => (
            <ScrollReveal key={formation.title} animation="reveal-up" delay={i * 120}>
              <FormationCard formation={formation} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button href="/formations" variant="primary">
              Voir toutes les formations
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
