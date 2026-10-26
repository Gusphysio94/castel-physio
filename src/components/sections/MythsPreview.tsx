import Link from "next/link";
import ArticleCard from "@/components/blog/ArticleCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { getArticle } from "@/lib/articles";

// Trois idées reçues parmi les plus répandues, mises en avant sur l'accueil
const FEATURED = ["mal-de-dos-hernie-discale", "cartilage-use-arthrose-course", "mal-de-dos-repos-au-lit"];

export default function MythsPreview() {
  const items = FEATURED.map((slug) => getArticle(slug)).filter((a) => a !== undefined);
  if (items.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Vrai ou faux ?"
            title="Ce qu'on croit sur la douleur"
            description="Trois idées reçues qui retardent la récupération, avec ce que dit réellement la science. Moins de cinq minutes de lecture chacune."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((a, i) => (
            <ScrollReveal key={a.slug} animation="reveal-up" delay={i * 100}>
              <ArticleCard article={a} />
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link href="/blog" className="text-sm font-medium text-amber-600 underline underline-offset-4 hover:text-amber-500">
            Voir toutes les idées reçues →
          </Link>
        </p>
      </div>
    </section>
  );
}
