type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="relative bg-white rounded-2xl p-8 border border-navy-100/80 card-hover overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-[3rem]" />

      <div className="relative">
        {/* Star rating */}
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-navy-700 leading-relaxed mb-6 text-[15px]">&ldquo;{quote}&rdquo;</p>

        <div className="flex items-center gap-3 pt-5 border-t border-navy-100/60">
          <div className="w-10 h-10 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full flex items-center justify-center">
            <span className="text-navy-600 font-bold text-xs">{name.split(" ").map(n => n[0]).join("")}</span>
          </div>
          <div>
            <p className="font-semibold text-navy-900 text-sm">{name}</p>
            <p className="text-xs text-navy-400">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
