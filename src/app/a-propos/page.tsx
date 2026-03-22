import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours d'Augustin Castel, kinésithérapeute du sport à Bruxelles. Approche evidence-based, formations et passion pour la performance.",
};

const values = [
  {
    title: "Evidence-based",
    description: "Chaque décision clinique est guidée par les meilleures preuves scientifiques disponibles, combinées à l'expérience clinique et aux préférences du patient.",
  },
  {
    title: "Patient au centre",
    description: "Votre objectif est mon objectif. La prise en charge est individualisée et construite autour de vos besoins, vos attentes et votre contexte de vie.",
  },
  {
    title: "Approche active",
    description: "Je crois en une kinésithérapie qui rend autonome. L'exercice et l'éducation sont au cœur de ma pratique pour des résultats durables.",
  },
  {
    title: "Transmission",
    description: "Partager les connaissances est essentiel pour faire évoluer notre profession. C'est pourquoi je forme et accompagne d'autres professionnels.",
  },
];

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            À propos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Augustin Castel
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl">
            Kinésithérapeute du sport, formateur et créateur de contenu.
            Passionné par la science, la performance et la transmission.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/augustin-detoure.png"
                  alt="Augustin Castel - Kinésithérapeute du sport"
                  width={500}
                  height={700}
                  className="w-full h-auto drop-shadow-[0_0_40px_rgba(255,87,87,0.3)]"
                  style={{ background: "transparent" }}
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Mon parcours</h2>
              <div className="space-y-4 text-navy-600 leading-relaxed text-justify">
                <p>
                  Je suis kinésithérapeute du sport, passionné par le mouvement, la compréhension du corps et l&apos;accompagnement des personnes vers un retour durable à leurs activités.
                </p>
                <p>
                  Mon objectif est simple : vous aider à aller mieux, mais surtout à comprendre pourquoi vous avez mal et comment ne plus retomber dans les mêmes schémas.
                </p>
                <p>
                  Chaque prise en charge commence par une écoute attentive de votre histoire, de vos attentes et de vos contraintes. Parce qu&apos;au-delà d&apos;un diagnostic, il y a surtout une personne avec un quotidien, des objectifs, parfois des frustrations ou des inquiétudes.
                </p>
                <p>
                  Je m&apos;appuie sur les données scientifiques les plus récentes pour guider mes choix, tout en les adaptant à votre situation. Ici, pas de protocole standardisé appliqué à tout le monde, mais une approche personnalisée, réfléchie et évolutive.
                </p>
                <p>
                  Mon rôle est de vous donner les bons outils, au bon moment, pour :
                </p>
                <ul className="list-disc list-inside space-y-1 text-navy-700 font-medium">
                  <li>diminuer vos douleurs</li>
                  <li>retrouver confiance dans votre corps</li>
                  <li>et progresser de manière durable</li>
                </ul>
                <p>
                  Je crois profondément qu&apos;une rééducation efficace ne repose pas uniquement sur des techniques, mais sur une collaboration claire, honnête et active entre vous et moi.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Me contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              Philosophie
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Mes valeurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 border border-navy-100">
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-navy-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
