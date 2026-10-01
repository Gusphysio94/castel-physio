import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/blog/ArticleCard";
import CTABanner from "@/components/sections/CTABanner";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog : idées reçues sur la douleur et les blessures",
  description:
    "Mal de dos, genou, tendon, épaule : des mini-articles clairs qui démontent les idées reçues, appuyés sur la science, par Augustin Castel, kiné du sport à Bruxelles.",
  path: "/blog",
});

export default function Blog() {
  const myths = articles.filter((a) => a.kind === "mythe");
  const guides = articles.filter((a) => a.audience === "patients" && a.kind !== "mythe");
  const pros = articles.filter((a) => a.audience === "professionnels");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Blog</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Vrai ou faux ? Ce qu&apos;on croit sur la douleur
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl leading-relaxed">
            Votre dos est « abîmé », votre cartilage « usé », il faut « tout arrêter » ? Des mini-articles de moins de cinq minutes
            qui démontent les idées reçues, avec ce que dit réellement la science.
          </p>
        </div>
      </section>

      {/* Mythes et réalités */}
      {myths.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-2">Mythes et réalités</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-8">Les idées reçues les plus courantes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myths.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guides complets */}
      {guides.length > 0 && (
        <section className="py-16 md:py-20 bg-navy-50/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-2">Guides complets</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-8">Quand ça vous arrive : que faire ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guides.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles pour les professionnels */}
      {pros.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-2">Pour les professionnels</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">Vous êtes kinésithérapeute ?</h2>
              </div>
              <Link href="/formations" className="text-sm font-medium text-amber-600 underline underline-offset-4 hover:text-amber-500">
                Découvrir mes formations →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pros.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
