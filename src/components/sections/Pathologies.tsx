import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { conditions } from "@/lib/conditions";

const teasers: Record<string, string> = {
  tendinopathie: "Achille, rotule, épaule, coude, hanche…",
  "reeducation-lca": "Rupture ou reconstruction du ligament croisé",
  "entorse-cheville": "Entorse de cheville ou du pied, cheville instable",
  "douleur-epaule": "Coiffe des rotateurs, épaule gelée, instabilité",
  "douleur-genou": "Rotule, ménisque, arthrose, bandelette",
  "reeducation-post-operatoire": "Prothèse, ménisque, coiffe, fracture, rachis",
  lombalgie: "Lumbago, sciatique, hernie, mal de dos",
  cervicalgie: "Torticolis, nuque, coup du lapin, céphalées",
};

export default function Pathologies() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Votre situation"
            title="Qu'est-ce qui vous amène ?"
            description="Choisissez ce qui ressemble le plus à votre problème : vous y trouverez ce que c'est, ce que la kiné peut vous apporter et les réponses aux questions que l'on me pose le plus."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {conditions.map((c, i) => (
            <ScrollReveal key={c.slug} animation="reveal-up" delay={i * 60}>
              <Link
                href={`/kinesitherapie/${c.slug}`}
                className="group block h-full rounded-2xl border border-navy-100 bg-white p-6 transition hover:border-amber-400 hover:shadow-md"
              >
                <h3 className="font-display text-lg font-bold text-navy-900 leading-snug mb-2">{c.label}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{teasers[c.slug]}</p>
                <span className="mt-4 inline-block text-sm font-medium text-amber-600 transition-transform group-hover:translate-x-1">
                  En savoir plus →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-10 text-center text-navy-500">
          Votre problème n&apos;est pas dans la liste ? Beaucoup de douleurs musculo-squelettiques se prennent en charge de la même façon.{" "}
          <Link href="/contact" className="font-medium text-amber-600 underline underline-offset-4 hover:text-amber-500">
            Écrivez-moi
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
