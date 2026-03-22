import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 overflow-hidden -mt-16 md:-mt-20">
      {/* Layered background */}
      <div className="absolute inset-0">
        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/[0.04] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }} />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 grain-dark" />

      {/* Decorative line */}
      <div className="absolute top-[40%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28 md:pt-44 md:pb-40">
        <div className="flex items-center gap-8 lg:gap-16">
          <div className="max-w-3xl flex-1">
            {/* Eyebrow */}
            <div className="animate-reveal-up flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-amber-400/60" />
              <p className="text-amber-400/90 font-medium text-sm uppercase tracking-[0.2em]">
                Kinésithérapie du sport &middot; Bruxelles
              </p>
            </div>

            {/* Headline */}
            <h1 className="animate-reveal-up delay-100 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Reprenez le
              <br />
              contrôle de
              <br />
              <span className="relative inline-block">
                <span className="text-amber-400">votre corps</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8.5C50 2 100 2 150 6s100 4 148-2" stroke="#FF5757" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-reveal-up delay-200 text-lg md:text-xl text-navy-300 leading-relaxed mb-12 max-w-xl">
              Augustin Castel, kinésithérapeute du sport.
              Une prise en charge individualisée, basée sur les dernières preuves scientifiques.
            </p>

            {/* CTAs */}
            <div className="animate-reveal-up delay-300 flex flex-col sm:flex-row gap-4">
              <Button href="https://www.q-top.be/online-planner-v2/FR/?root=kq46938" variant="primary">
                Prendre rendez-vous
              </Button>
              <Button href="/formations" variant="outline" className="border-navy-500 text-white hover:bg-white/10 hover:border-navy-300">
                Découvrir les formations
              </Button>
            </div>

          </div>

          {/* Photo */}
          <div className="hidden md:block animate-reveal-up delay-300 flex-shrink-0">
            <div className="relative w-72 lg:w-96">
              <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-[60px] scale-75" />
              <Image
                src="/images/augustin-hero.jpg"
                alt="Augustin Castel"
                width={500}
                height={600}
                className="relative w-full h-auto rounded-2xl mix-blend-luminosity opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition — angled cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0 80V30C240 60 480 0 720 30C960 60 1200 10 1440 40V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
