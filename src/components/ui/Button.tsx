import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer btn-magnetic";

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-500 to-amber-400 text-navy-950 shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] hover:from-amber-400 hover:to-amber-300",
    secondary:
      "bg-navy-800 text-white hover:bg-navy-700 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
  };

  const isExternal = href.startsWith("http");
  const classes = `${base} ${variants[variant]} ${className}`;

  const arrow = variant === "primary" && (
    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
