type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-16`}>
      {subtitle && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
          <div className={`h-px w-8 ${light ? "bg-amber-400/40" : "bg-amber-400"}`} />
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-amber-300" : "text-amber-600"}`}>
            {subtitle}
          </p>
          <div className={`h-px w-8 ${light ? "bg-amber-400/40" : "bg-amber-400"}`} />
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5 ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-navy-200" : "text-navy-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
