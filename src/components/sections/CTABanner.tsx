"use client";

import Link from "next/link";
import BookingButton from "@/components/ui/BookingButton";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-navy-600/20 rounded-full blur-[80px]" />
      </div>
      <div className="absolute inset-0 grain-dark" />

      {/* Decorative lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/10 to-transparent" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-600/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px w-8 bg-amber-400/40" />
            <p className="text-amber-400/80 text-xs font-semibold uppercase tracking-[0.2em]">
              Votre première séance
            </p>
            <div className="h-px w-8 bg-amber-400/40" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à prendre soin
            <br />
            <span className="text-amber-400">de vous ?</span>
          </h2>

          <p className="text-lg text-navy-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Un premier bilan pour comprendre ce qui se passe, savoir ce qui vous aide vraiment et repartir avec un plan clair. Vous pouvez réserver en ligne, ou m&apos;appeler si vous préférez en parler d&apos;abord.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingButton source="cta-banner" />
            <a
              href={`tel:${PHONE_TEL}`}
              data-umami-event="tel-click"
              data-umami-event-source="cta-banner"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide border-2 border-navy-500 text-white hover:bg-white/10 hover:border-navy-300 transition-colors"
            >
              Appeler le {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-8 text-sm text-navy-400">
            Première fois ? <Link href="/premiere-seance" className="text-navy-200 underline underline-offset-4 hover:text-amber-300">Voir le déroulement d&apos;une séance</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
