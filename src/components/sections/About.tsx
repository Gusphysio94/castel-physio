"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50/30 via-navy-50/60 to-navy-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <ScrollReveal animation="reveal-left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl relative overflow-hidden">
                <Image
                  src="/images/augustin-castel.jpg"
                  alt="Augustin Castel - Kinésithérapeute du sport"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-amber-400/10 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-amber-400/20 rounded-2xl -z-10" />

              {/* Floating badge */}
              <div className="absolute -right-4 top-8 bg-white rounded-2xl shadow-xl p-4 border border-navy-100/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-900">Evidence-based</p>
                    <p className="text-[10px] text-navy-400">Pratique scientifique</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal animation="reveal-right">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-amber-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                  À propos
                </p>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy-900 mb-6 leading-tight">
                Augustin Castel
              </h2>

              <div className="space-y-4 text-navy-500 leading-relaxed text-[15px]">
                <p>
                  Kinésithérapeute du sport passionné par la science et la performance humaine.
                  Mon approche est fondée sur les données probantes, avec un objectif clair :
                  vous aider à bouger mieux, sans douleur, et à atteindre vos objectifs.
                </p>
                <p>
                  Formateur pour les professionnels de la santé, je partage mes connaissances
                  à travers des formations, un podcast et des résumés scientifiques pour
                  contribuer à l&apos;évolution de notre profession.
                </p>
                <p className="font-medium text-navy-700">
                  Je crois en une kinésithérapie moderne, active, et centrée sur le patient.
                </p>
              </div>

              <div className="mt-10">
                <Button href="/a-propos" variant="outline">
                  En savoir plus sur mon parcours
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
