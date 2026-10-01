import { GOOGLE_RATING, GOOGLE_REVIEWS } from "@/lib/site";

type TrustBadgeProps = {
  tone?: "dark" | "light";
  className?: string;
};

export default function TrustBadge({ tone = "dark", className = "" }: TrustBadgeProps) {
  const text = tone === "dark" ? "text-navy-200" : "text-navy-600";
  return (
    <p className={`inline-flex items-center gap-2.5 text-sm ${text} ${className}`}>
      <span className="flex gap-0.5" aria-hidden>
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </span>
      <span>
        <strong className="font-semibold">{GOOGLE_RATING}</strong> sur Google &middot; {GOOGLE_REVIEWS} avis de patients
      </span>
    </p>
  );
}
