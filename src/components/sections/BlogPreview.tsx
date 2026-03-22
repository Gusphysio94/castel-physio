"use client";

import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const articles = [
  {
    slug: "approche-biopsychosociale-kinesitherapie",
    title: "L'approche biopsychosociale en kinésithérapie : pourquoi c'est essentiel",
    excerpt: "Comprendre la douleur au-delà du modèle biomécanique pour une prise en charge plus complète.",
    date: "15 mars 2026",
    category: "Pratique clinique",
    readTime: "6 min",
  },
  {
    slug: "retour-sport-apres-lca",
    title: "Retour au sport après reconstruction du LCA : les critères essentiels",
    excerpt: "Les critères objectifs et subjectifs à évaluer avant d'autoriser un retour au sport.",
    date: "8 mars 2026",
    category: "Sport",
    readTime: "8 min",
  },
  {
    slug: "exercice-therapeutique-tendinopathie",
    title: "Exercice thérapeutique et tendinopathie : que dit la science ?",
    excerpt: "Revue des dernières preuves scientifiques sur la prise en charge par l'exercice.",
    date: "1 mars 2026",
    category: "Science",
    readTime: "7 min",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50/30 via-navy-50/60 to-navy-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Blog"
            title="Derniers articles"
            description="Articles, résumés scientifiques et réflexions sur la kinésithérapie moderne."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {articles.map((article, i) => (
            <ScrollReveal key={article.slug} animation="reveal-up" delay={i * 120}>
              <Link
                href={`/blog/${article.slug}`}
                className="group block h-full"
              >
                <article className="bg-white rounded-2xl overflow-hidden border border-navy-100/80 card-hover h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="h-48 img-placeholder relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-10 h-10 text-navy-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-amber-700 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-xs text-navy-400">
                      <span>{article.date}</span>
                      <span>&middot;</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors duration-300 leading-snug font-display flex-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Read more indicator */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Lire l&apos;article</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button href="/blog" variant="outline">
              Voir tous les articles
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
