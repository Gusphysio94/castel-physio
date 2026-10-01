import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { excerpt, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article non trouvé", robots: { index: false } };
  return pageMetadata({
    title: article.title,
    description: excerpt(article.content),
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: article.isoDate,
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors mb-6 inline-block">
            &larr; Retour au blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold bg-amber-400/20 text-amber-300 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-navy-400">{article.date}</span>
            <span className="text-sm text-navy-400">·</span>
            <span className="text-sm text-navy-400">{article.readTime} de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-navy-900 mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("- ") || paragraph.startsWith("1. ")) {
                const items = paragraph.split("\n").filter(Boolean);
                const isOrdered = paragraph.startsWith("1. ");
                const ListTag = isOrdered ? "ol" : "ul";
                return (
                  <ListTag key={i} className={`${isOrdered ? "list-decimal" : "list-disc"} pl-6 space-y-2 my-4`}>
                    {items.map((item, j) => (
                      <li key={j} className="text-navy-700 leading-relaxed">
                        <span dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^[-\d]+[.)]\s*/, "")
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                        }} />
                      </li>
                    ))}
                  </ListTag>
                );
              }
              return (
                <p key={i} className="text-navy-700 leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Author */}
          <div className="mt-16 pt-8 border-t border-navy-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-navy-200 rounded-full flex items-center justify-center">
              <span className="text-navy-600 font-bold text-lg">AC</span>
            </div>
            <div>
              <p className="font-semibold text-navy-900">Augustin Castel</p>
              <p className="text-sm text-navy-500">Kinésithérapeute du sport — Bruxelles</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
