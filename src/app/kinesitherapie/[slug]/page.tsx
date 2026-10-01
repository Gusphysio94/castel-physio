import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingButton from "@/components/ui/BookingButton";
import CTABanner from "@/components/sections/CTABanner";
import { allPages, getCondition } from "@/lib/conditions";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { SITE_URL, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return allPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) return {};
  return pageMetadata({
    title: condition.title,
    description: condition.description,
    path: `/kinesitherapie/${slug}`,
  });
}

const linkClass =
  "text-amber-600 hover:text-amber-500 font-medium underline underline-offset-4";

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-8 bg-amber-400" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">{eyebrow}</p>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 leading-tight">{title}</h2>
      {intro && <p className="mt-4 text-lg text-navy-500 leading-relaxed max-w-2xl">{intro}</p>}
    </div>
  );
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();

  const url = `${SITE_URL}/kinesitherapie/${condition.slug}`;
  const hasTypes = condition.subtypeGroups.length > 0;
  const hasUnderstand = condition.sections.length > 0;
  const hasMyths = (condition.myths?.length ?? 0) > 0;
  const hasCare = condition.care.length > 0;
  const hasRefs = condition.references.length > 0;

  const nav = [
    hasTypes && { id: "pathologies", label: "Pathologies prises en charge" },
    hasUnderstand && { id: "comprendre", label: "Comprendre" },
    hasMyths && { id: "idees-recues", label: "Idées reçues" },
    hasCare && { id: "kine", label: "À quoi sert la kiné" },
    { id: "questions", label: "Questions fréquentes" },
    hasRefs && { id: "sources", label: "Sources" },
  ].filter(Boolean) as { id: string; label: string }[];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Kinésithérapie", item: `${SITE_URL}/kinesitherapie` },
        { "@type": "ListItem", position: 3, name: condition.label, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: condition.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 pt-20 md:pt-28 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-navy-300 mb-6">
            <Link href="/" className="hover:text-amber-300 transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/kinesitherapie" className="hover:text-amber-300 transition-colors">Kinésithérapie</Link>
            <span className="mx-2">/</span>
            <span className="text-amber-400">{condition.label}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{condition.h1}</h1>
          <p className="text-lg text-navy-200 max-w-2xl leading-relaxed">{condition.lead}</p>
          <div className="mt-8">
            <BookingButton source={`pathologie-${condition.slug}-hero`} />
          </div>

          <div className="mt-12 -mb-1 flex gap-2 overflow-x-auto pb-1" aria-label="Sur cette page">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="shrink-0 rounded-full border border-navy-600 px-4 py-2 text-sm text-navy-200 hover:border-amber-400 hover:text-amber-300 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* À retenir */}
      {condition.takeaway && (
        <section className="pt-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50/70 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 mb-2">À retenir</p>
              <p className="font-display text-xl md:text-2xl font-semibold text-navy-900 leading-snug">
                {condition.takeaway}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Pathologies prises en charge */}
      {hasTypes && (
        <section id="pathologies" className="scroll-mt-24 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Prise en charge"
              title="Pathologies prises en charge"
              intro="Retrouvez ici le terme qui figure sur votre prescription. Si votre diagnostic n'apparaît pas tel quel, n'hésitez pas à me contacter."
            />
            <div className="space-y-12">
              {condition.subtypeGroups.map((group) => (
                <div key={group.heading}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-500 mb-4">
                    {group.heading}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.items.map((item) => {
                      const body = (
                        <>
                          <span className="block font-semibold text-navy-900 leading-snug">{item.name}</span>
                          {item.note && (
                            <span className="mt-1 block text-sm text-navy-500 leading-snug">{item.note}</span>
                          )}
                        </>
                      );
                      return (
                        <li key={item.name}>
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="block h-full rounded-xl border border-amber-300 bg-white p-4 hover:border-amber-500 hover:shadow-md transition"
                            >
                              {body}
                              <span className="mt-2 block text-sm font-medium text-amber-600">Voir la page →</span>
                            </Link>
                          ) : (
                            <div className="h-full rounded-xl border border-navy-100 bg-white p-4">{body}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comprendre */}
      {hasUnderstand && (
        <section id="comprendre" className="scroll-mt-24 py-16 md:py-24 bg-navy-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Comprendre" title="Ce qui se passe vraiment" />
            <div className="space-y-12">
              {condition.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-4">{section.heading}</h3>
                  <div className="space-y-4 text-navy-600 leading-relaxed">
                    {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                    {section.list && (
                      <ul className="list-disc pl-6 space-y-2 text-navy-700">
                        {section.list.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Idées reçues */}
      {hasMyths && (
        <section id="idees-recues" className="scroll-mt-24 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Idées reçues"
              title="Ce qu'on vous a peut-être dit"
              intro="Certaines croyances très répandues retardent la récupération. Voici ce que dit réellement la recherche."
            />
            <ul className="space-y-6">
              {condition.myths?.map((m) => (
                <li key={m.myth} className="rounded-2xl border border-navy-100 bg-white overflow-hidden">
                  <div className="bg-navy-50 px-6 py-4 border-b border-navy-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400 mb-1">On entend souvent</p>
                    <p className="font-display text-lg font-semibold text-navy-900 leading-snug">{m.myth}</p>
                  </div>
                  <div className="px-6 py-5 space-y-3 text-navy-600 leading-relaxed">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">En réalité</p>
                    {m.reality.map((r) => <p key={r}>{r}</p>)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* À quoi sert la kiné */}
      {hasCare && (
        <section id="kine" className="scroll-mt-24 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Ma prise en charge" title="À quoi sert la kiné ?" intro={condition.careIntro} />
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {condition.care.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-navy-100 bg-white p-6">
                  <span className="font-display text-4xl font-bold text-amber-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 mb-2 text-lg font-semibold text-navy-900">{step.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>

            {condition.redFlags && condition.redFlags.length > 0 && (
              <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  Quand consulter rapidement un médecin
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-navy-800">
                  {condition.redFlags.map((flag) => <li key={flag}>{flag}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Appel à l'action contextuel */}
      {hasCare && (
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-navy-950 p-8 md:p-12 md:flex md:items-center md:justify-between gap-10">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3">Un premier bilan</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                  Vous vous reconnaissez dans cette situation ?
                </h2>
                <p className="text-navy-300 leading-relaxed">
                  Un premier bilan permet de comprendre ce qui se passe et de repartir avec un plan clair, adapté à vous.{" "}
                  <Link href="/premiere-seance" className="text-navy-100 underline underline-offset-4 hover:text-amber-300">
                    Voir comment se déroule une première séance
                  </Link>
                  .
                </p>
                {condition.testimonial && (
                  <figure className="mt-6 border-l-2 border-amber-400/60 pl-4">
                    <blockquote className="text-navy-200 leading-relaxed">
                      &laquo;&nbsp;{condition.testimonial.quote}&nbsp;&raquo;
                    </blockquote>
                    <figcaption className="mt-2 text-sm text-navy-400">{condition.testimonial.author}</figcaption>
                  </figure>
                )}
              </div>
              <div className="mt-8 md:mt-0 flex flex-col items-center gap-3 shrink-0">
                <BookingButton source={`pathologie-${condition.slug}-bas`} />
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-umami-event="tel-click"
                  data-umami-event-source={`pathologie-${condition.slug}`}
                  className="text-sm font-medium text-navy-300 hover:text-amber-300 transition-colors"
                >
                  ou appelez le {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Questions fréquentes */}
      <section id="questions" className="scroll-mt-24 py-16 md:py-24 bg-navy-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Ce que les patients me demandent"
          />
          <div className="space-y-3">
            {condition.faq.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-navy-100 open:border-amber-300 open:shadow-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6 font-semibold text-navy-900">
                  <span>{f.q}</span>
                  <span aria-hidden className="text-amber-500 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 md:px-6 pb-6 space-y-3 text-navy-600 leading-relaxed">
                  {f.a.map((p) => <p key={p}>{p}</p>)}
                </div>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-navy-400">
            Ces informations sont générales et ne remplacent pas un avis médical personnalisé.
          </p>
        </div>
      </section>

      {/* Sources */}
      {hasRefs && (
        <section id="sources" className="scroll-mt-24 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <details className="group rounded-2xl border border-navy-100 bg-white">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Sources</span>
                  <span className="block mt-1 text-lg font-semibold text-navy-900">
                    Références scientifiques ({condition.references.length})
                  </span>
                </span>
                <span aria-hidden className="text-amber-500 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <ol className="px-5 md:px-6 pb-6 space-y-3 list-decimal pl-10 md:pl-12 text-sm text-navy-600 leading-relaxed">
                {condition.references.map((r) => (
                  <li key={r.pmid}>
                    {r.citation}{" "}
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      PubMed
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </section>
      )}

      {/* Pour aller plus loin */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 mb-4">Pour aller plus loin</h2>
          <ul className="space-y-2">
            {condition.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className={linkClass}>{r.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/kinesitherapie" className={linkClass}>
                Tous mes services de kinésithérapie
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
