"use client";

import Button from "@/components/ui/Button";
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
              Passez à l&apos;action
            </p>
            <div className="h-px w-8 bg-amber-400/40" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à prendre soin
            <br />
            <span className="text-amber-400">de vous ?</span>
          </h2>

          <p className="text-lg text-navy-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Que vous soyez un patient cherchant une prise en charge de qualité ou un professionnel souhaitant développer ses compétences, je suis là pour vous accompagner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://www.q-top.be/online-planner-v2/FR/?root=kq46938" variant="primary">
              Prendre rendez-vous
            </Button>
            <Button href="/formations" variant="outline" className="border-navy-500 text-white hover:bg-white/10 hover:border-navy-300">
              Découvrir les formations
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
