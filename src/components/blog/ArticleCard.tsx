import Link from "next/link";
import type { Article } from "@/lib/articles/types";
import { formatDate, readingMinutes } from "@/lib/articles/format";
import { VerdictPill } from "@/components/blog/MythBlocks";

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block h-full">
      <article
        className={`h-full rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg hover:border-amber-200 ${
          featured ? "border-amber-200 p-8 md:p-10" : "border-navy-100 p-6"
        }`}
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          {article.myth && <VerdictPill verdict={article.myth.verdict} />}
          <span className="px-3 py-1 text-xs font-semibold bg-amber-50 text-amber-700 rounded-full">{article.category}</span>
          <span className="text-sm text-navy-400">{formatDate(article.isoDate)}</span>
          <span className="text-sm text-navy-400">·</span>
          <span className="text-sm text-navy-400">{readingMinutes(article.content + (article.myth ? ` ${article.myth.oneLiner} ${article.myth.whyBelieved}` : ""))} min de lecture</span>
        </div>
        <h3
          className={`font-display font-bold text-navy-900 group-hover:text-amber-600 transition-colors leading-snug ${
            featured ? "text-2xl md:text-3xl mb-3" : "text-lg mb-2"
          }`}
        >
          {article.title}
        </h3>
        {article.myth && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-navy-400">Mythe ou réalité ?</p>
        )}
        <p className="text-navy-600 leading-relaxed">{article.excerpt}</p>
        <span className="mt-4 inline-block text-sm font-medium text-amber-600 transition-transform group-hover:translate-x-1">
          Lire l&apos;article →
        </span>
      </article>
    </Link>
  );
}
