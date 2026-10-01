import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BookingButton from "@/components/ui/BookingButton";

const steps = [
  {
    title: "Vous réservez",
    text: "En ligne, quand cela vous arrange, ou par téléphone si vous préférez en parler.",
  },
  {
    title: "On fait le point",
    text: "Je prends le temps de comprendre votre histoire, vos objectifs et ce qui compte pour vous, puis j'examine.",
  },
  {
    title: "Vous comprenez",
    text: "Je vous explique, simplement, ce qui se passe et ce qui peut vous aider, sans jargon.",
  },
  {
    title: "Vous repartez avec un plan",
    text: "Des exercices et des repères clairs : ce que vous pouvez faire dès demain, et la suite.",
  },
];

export default function FirstVisit() {
  return (
    <section className="py-20 md:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Votre première séance"
            title="À quoi s'attendre ?"
            description="Pas de surprise : voici comment se déroule un premier rendez-vous."
          />
        </ScrollReveal>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} animation="reveal-up" delay={i * 100}>
              <li className="relative h-full rounded-2xl bg-white border border-navy-100 p-6">
                <span className="font-display text-4xl font-bold text-amber-200">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 mb-2 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{s.text}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <BookingButton source="home-first-visit" />
          <Link
            href="/premiere-seance"
            className="text-sm font-medium text-navy-700 underline underline-offset-4 hover:text-amber-600"
          >
            Tout savoir sur la première séance
          </Link>
        </div>
      </div>
    </section>
  );
}
