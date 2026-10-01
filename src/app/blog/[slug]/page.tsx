import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleCard from "@/components/blog/ArticleCard";
import { DoDont, MythHero } from "@/components/blog/MythBlocks";
import BookingButton from "@/components/ui/BookingButton";
import Button from "@/components/ui/Button";
import { articles, getArticle } from "@/lib/articles";
import { extractHeadings, formatDate, readingMinutes } from "@/lib/articles/format";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { SITE_URL, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.metaTitle ?? article.title,
    description: article.description,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: article.isoDate,
  });
}

const linkClass = "font-medium text-amber-600 underline underline-offset-4 hover:text-amber-500";

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const isPatient = article.audience === "patients";
  const headings = extractHeadings(article.content);
  const myth = article.myth;
  const minutes = readingMinutes(
    [article.content, myth?.claim, myth?.oneLiner, myth?.whyBelieved, ...(myth?.doList ?? []), ...(myth?.dontList ?? [])]
      .filter(Boolean)
      .join(" ")
  );
  const pathologyLink = article.related.find((r) => r.href.startsWith("/kinesitherapie/"));
  const more = articles
    .filter((a) => a.slug !== article.slug && a.audience === article.audience)
    .slice(0, 3);
  const url = `${SITE_URL}/blog/${article.slug}`;

  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.isoDate,
      dateModified: article.isoDate,
      inLanguage: "fr",
      mainEntityOfPage: url,
      url,
      author: { "@type": "Person", name: "Augustin Castel", url: `${SITE_URL}/a-propos` },
      publisher: { "@type": "Organization", name: "Castel Physio", url: SITE_URL },
      image: `${SITE_URL}/opengraph-image`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];
  if (article.faq && article.faq.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors mb-6 inline-block">
            &larr; Retour au blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold bg-amber-400/20 text-amber-300 rounded-full">{article.category}</span>
            <span className="text-sm text-navy-400">{formatDate(article.isoDate)}</span>
            <span className="text-sm text-navy-400">·</span>
            <span className="text-sm text-navy-400">{minutes} min de lecture</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">{article.title}</h1>
          <p className="mt-5 text-navy-300">Par Augustin Castel, kinésithérapeute du sport</p>
        </div>
      </section>

      {/* Mythe : en-tête visuelle  |  Guide : l'essentiel + sommaire */}
      {myth ? (
        <MythHero myth={myth} />
      ) : (
        <section className="pt-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50/70 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 mb-3">L&apos;essentiel</p>
              <ul className="space-y-2 text-navy-800 leading-relaxed list-disc pl-5">
                {article.takeaways.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>

            {headings.length >= 3 && (
              <nav aria-label="Sommaire" className="rounded-2xl border border-navy-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400 mb-3">Dans cet article</p>
                <ol className="space-y-1.5 text-sm">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-navy-600 hover:text-amber-600 transition-colors">{h.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>
        </section>
      )}

      {/* Contenu */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleBody content={article.content} />

          {myth && <DoDont myth={myth} />}

          {myth && article.takeaways.length > 0 && (
            <div className="mt-12 rounded-2xl border-l-4 border-amber-400 bg-amber-50/70 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 mb-3">À retenir</p>
              <ul className="space-y-2 text-navy-800 leading-relaxed list-disc pl-5">
                {article.takeaways.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          )}

          {article.faq && article.faq.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-6">Questions fréquentes</h2>
              <div className="space-y-3">
                {article.faq.map((f) => (
                  <details key={f.q} className="group bg-white rounded-2xl border border-navy-100 open:border-amber-300">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 font-semibold text-navy-900">
                      <span>{f.q}</span>
                      <span aria-hidden className="text-amber-500 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="px-5 pb-5 text-navy-600 leading-relaxed text-justify hyphens-auto">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <p className="mt-10 text-sm text-navy-400 border-t border-navy-100 pt-6">
            Ces informations sont générales et ne remplacent pas un avis médical personnalisé.
          </p>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-950 p-8 md:p-10 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
            {isPatient ? (
              <>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">Un premier bilan pour y voir clair</h2>
                  <p className="text-navy-300 leading-relaxed">
                    Si cet article parle de votre situation, nous pouvons faire le point ensemble.{" "}
                    {pathologyLink && (
                      <>
                        <Link href={pathologyLink.href} className="text-navy-100 underline underline-offset-4 hover:text-amber-300">
                          {pathologyLink.label}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 flex flex-col items-center gap-3 shrink-0">
                  <BookingButton source={`blog-${article.slug}`} />
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-umami-event="tel-click"
                    data-umami-event-source={`blog-${article.slug}`}
                    className="text-sm font-medium text-navy-300 hover:text-amber-300 transition-colors"
                  >
                    ou appelez le {PHONE_DISPLAY}
                  </a>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">Aller plus loin</h2>
                  <p className="text-navy-300 leading-relaxed">
                    Mes formations en ligne approfondissent ces sujets, avec des cas cliniques et des outils applicables au cabinet.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 shrink-0">
                  <Button href="/formations" variant="primary">Découvrir les formations</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Auteur */}
      <section className="pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 rounded-2xl border border-navy-100 bg-white p-6">
            <Image
              src="/images/augustin-castel.jpg"
              alt="Augustin Castel, kinésithérapeute du sport"
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full object-cover shrink-0"
            />
            <div>
              <p className="font-semibold text-navy-900">Augustin Castel</p>
              <p className="text-sm text-navy-500 leading-relaxed">
                Kinésithérapeute du sport à Woluwe-Saint-Lambert (Bruxelles). Je m&apos;appuie sur les preuves scientifiques pour
                vous aider à comprendre et à reprendre vos activités.{" "}
                <Link href="/a-propos" className={linkClass}>En savoir plus</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Références + liens */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {article.references.length > 0 && (
            <details className="group rounded-2xl border border-navy-100 bg-white">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Sources</span>
                  <span className="block mt-1 text-lg font-semibold text-navy-900">Références scientifiques ({article.references.length})</span>
                </span>
                <span aria-hidden className="text-amber-500 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <ol className="px-5 md:px-6 pb-6 space-y-3 list-decimal pl-10 md:pl-12 text-sm text-navy-600 leading-relaxed">
                {article.references.map((r) => (
                  <li key={r.pmid}>
                    {r.citation}{" "}
                    <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      PubMed
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          )}

          {article.related.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">Pour aller plus loin</h2>
              <ul className="space-y-2">
                {article.related.map((r) => (
                  <li key={r.href}><Link href={r.href} className={linkClass}>{r.label}</Link></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Autres articles */}
      {more.length > 0 && (
        <section className="py-16 bg-navy-50/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-8">À lire aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {more.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
