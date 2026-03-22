"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "8+", label: "Années d'expérience", suffix: "" },
  { value: "1000+", label: "Patients accompagnés", suffix: "" },
  { value: "500+", label: "Professionnels formés", suffix: "" },
  { value: "100%", label: "Evidence-based", suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} animation="reveal-up" delay={i * 100}>
              <div className="relative text-center group">
                <p className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-navy-400 mt-2 font-medium">{stat.label}</p>
                {/* Divider on desktop between items */}
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-navy-100" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
