import Link from "next/link";
import { slugifyHeading } from "@/lib/articles/format";

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  return text.split(INLINE).filter(Boolean).map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key} className="font-semibold text-navy-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const cls = "font-medium text-amber-600 underline underline-offset-4 hover:text-amber-500";
      return href.startsWith("/") ? (
        <Link key={key} href={href} className={cls}>{label}</Link>
      ) : (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>
      );
    }
    return part;
  });
}

export default function ArticleBody({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-5 text-navy-700 leading-relaxed text-[17px]">
      {blocks.map((block, i) => {
        const key = `b${i}`;
        if (block.startsWith("### ")) {
          return <h3 key={key} className="text-xl font-semibold text-navy-900 mt-8">{renderInline(block.slice(4), key)}</h3>;
        }
        if (block.startsWith("## ")) {
          const text = block.slice(3).trim();
          return (
            <h2 key={key} id={slugifyHeading(text)} className="scroll-mt-24 font-display text-2xl md:text-3xl font-bold text-navy-900 mt-12 mb-1">
              {text}
            </h2>
          );
        }
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={key} className="list-disc pl-6 space-y-2">
              {lines.map((l, j) => <li key={j}>{renderInline(l.slice(2), `${key}-${j}`)}</li>)}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ol key={key} className="list-decimal pl-6 space-y-2">
              {lines.map((l, j) => <li key={j}>{renderInline(l.replace(/^\d+\.\s/, ""), `${key}-${j}`)}</li>)}
            </ol>
          );
        }
        if (lines.every((l) => l.startsWith(">"))) {
          return (
            <blockquote key={key} className="rounded-xl border-l-4 border-amber-400 bg-amber-50/70 px-5 py-4 text-navy-800">
              {renderInline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "), key)}
            </blockquote>
          );
        }
        return <p key={key}>{renderInline(lines.join(" "), key)}</p>;
      })}
    </div>
  );
}
