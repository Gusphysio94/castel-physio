import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, résumés scientifiques et réflexions sur la kinésithérapie moderne par Augustin Castel.",
};

const articles = [
  {
    slug: "approche-biopsychosociale-kinesitherapie",
    title: "L'approche biopsychosociale en kinésithérapie : pourquoi c'est essentiel",
    excerpt:
      "Comprendre la douleur au-delà du modèle biomécanique pour une prise en charge plus complète et efficace.",
    date: "15 mars 2026",
    category: "Pratique clinique",
    readTime: "6 min",
  },
  {
    slug: "retour-sport-apres-lca",
    title: "Retour au sport après reconstruction du LCA : les critères essentiels",
    excerpt:
      "Les critères objectifs et subjectifs à évaluer avant d'autoriser un retour au sport en toute sécurité.",
    date: "8 mars 2026",
    category: "Sport",
    readTime: "8 min",
  },
  {
    slug: "exercice-therapeutique-tendinopathie",
    title: "Exercice thérapeutique et tendinopathie : que dit la science ?",
    excerpt:
      "Revue des dernières preuves scientifiques sur la prise en charge par l'exercice des tendinopathies.",
    date: "1 mars 2026",
    category: "Science",
    readTime: "7 min",
  },
  {
    slug: "education-patient-douleur-chronique",
    title: "Éducation du patient et douleur chronique : guide pratique",
    excerpt:
      "Comment communiquer efficacement avec vos patients souffrant de douleur chronique pour améliorer les résultats.",
    date: "22 février 2026",
    category: "Pratique clinique",
    readTime: "5 min",
  },
  {
    slug: "charge-management-sport",
    title: "Gestion de la charge en sport : principes et application",
    excerpt:
      "Les principes fondamentaux de la gestion de la charge d'entraînement pour la prévention des blessures.",
    date: "15 février 2026",
    category: "Sport",
    readTime: "9 min",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Articles &amp; réflexions
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl">
            Résumés scientifiques, analyses cliniques et réflexions sur
            la kinésithérapie moderne et evidence-based.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block group"
              >
                <article className="bg-white rounded-2xl border border-navy-100 p-8 hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-amber-50 text-amber-700 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-navy-400">{article.date}</span>
                    <span className="text-sm text-navy-400">·</span>
                    <span className="text-sm text-navy-400">{article.readTime} de lecture</span>
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {article.title}
                  </h2>
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-navy-100 text-navy-500 rounded-full mb-3">
                    À venir
                  </span>
                  <p className="text-navy-600 leading-relaxed">{article.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
