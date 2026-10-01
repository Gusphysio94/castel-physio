import type { MythMeta, MythVerdict } from "@/lib/articles/types";

// Palette du site uniquement : bleu nuit (navy) et corail (amber).
export const verdictStyle: Record<MythVerdict, { label: string; pill: string; ring: string }> = {
  faux: { label: "Faux", pill: "bg-navy-900 text-white", ring: "border-navy-900" },
  "plutot-faux": { label: "Plutôt faux", pill: "bg-amber-500 text-white", ring: "border-amber-300" },
  nuance: { label: "C'est plus nuancé", pill: "bg-navy-100 text-navy-800", ring: "border-navy-200" },
};

export function VerdictPill({ verdict, className = "" }: { verdict: MythVerdict; className?: string }) {
  const v = verdictStyle[verdict];
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${v.pill} ${className}`}>
      {v.label}
    </span>
  );
}

const CrossIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <circle cx="12" cy="12" r="10" strokeWidth={1.75} />
    <path strokeLinecap="round" strokeWidth={1.75} d="M15 9l-6 6M9 9l6 6" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <circle cx="12" cy="12" r="10" strokeWidth={1.75} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12.5l2.7 2.7L16 9.5" />
  </svg>
);

const eyebrow = "text-xs font-semibold uppercase tracking-[0.2em]";

/** Tête de page : la croyance, le verdict, la réponse en une phrase, les chiffres clés, pourquoi on y croit */
export function MythHero({ myth }: { myth: MythMeta }) {
  const v = verdictStyle[myth.verdict];
  return (
    <section className="pt-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className={`rounded-3xl border-2 bg-white p-6 md:p-8 ${v.ring}`}>
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className={`${eyebrow} text-navy-400`}>On entend souvent</span>
            <VerdictPill verdict={myth.verdict} />
          </div>
          <p className="font-display text-2xl md:text-3xl font-bold text-navy-900 leading-snug">
            &laquo;&nbsp;{myth.claim}&nbsp;&raquo;
          </p>
        </div>

        <div className="rounded-3xl bg-navy-50 border border-navy-100 p-6 md:p-8 flex gap-4">
          <span className="text-amber-500 mt-0.5"><CheckIcon /></span>
          <div>
            <p className={`${eyebrow} text-navy-500 mb-2`}>En réalité</p>
            <p className="text-lg md:text-xl font-semibold text-navy-900 leading-snug">{myth.oneLiner}</p>
          </div>
        </div>

        {myth.stats && myth.stats.length > 0 && (
          <div className={`grid gap-4 ${myth.stats.length === 1 ? "grid-cols-1" : myth.stats.length === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
            {myth.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-navy-950 p-5 text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-amber-400">{s.value}</p>
                <p className="mt-2 text-sm text-navy-200 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="rounded-2xl border border-navy-100 bg-white p-5 md:p-6">
          <p className={`${eyebrow} text-amber-600 mb-2`}>Pourquoi on y croit</p>
          <p className="text-navy-700 leading-relaxed">{myth.whyBelieved}</p>
        </div>
      </div>
    </section>
  );
}

/** Deux colonnes « À faire / À éviter » */
export function DoDont({ myth }: { myth: MythMeta }) {
  if (!myth.doList?.length && !myth.dontList?.length) return null;
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
      {myth.doList && myth.doList.length > 0 && (
        <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
          <p className="text-lg font-semibold text-navy-900 mb-4">À faire</p>
          <ul className="space-y-3">
            {myth.doList.map((t) => (
              <li key={t} className="flex gap-3 text-navy-800 leading-snug">
                <span className="text-navy-700 mt-0.5"><CheckIcon /></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {myth.dontList && myth.dontList.length > 0 && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-lg font-semibold text-navy-900 mb-4">À éviter</p>
          <ul className="space-y-3">
            {myth.dontList.map((t) => (
              <li key={t} className="flex gap-3 text-navy-800 leading-snug">
                <span className="text-amber-500 mt-0.5"><CrossIcon /></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
