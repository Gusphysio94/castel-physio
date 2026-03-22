type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  tagline?: string;
  description: string;
};

export default function ServiceCard({ icon, title, tagline, description }: ServiceCardProps) {
  return (
    <div className="relative bg-white rounded-2xl p-8 border border-navy-100/80 card-hover group overflow-hidden">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/0 group-hover:from-amber-50/50 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-3 font-display">{title}</h3>
        {tagline && (
          <p className="text-navy-700 font-semibold text-[15px] mb-3">{tagline}</p>
        )}
        <p className="text-navy-500 leading-relaxed text-[15px] text-justify whitespace-pre-line">{description}</p>

        {/* Bottom accent line */}
        <div className="mt-6 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-500 rounded-full" />
      </div>
    </div>
  );
}
