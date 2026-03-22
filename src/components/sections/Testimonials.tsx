"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "Tout simplement MERCI Augustin ! PRO, compétent, sérieux, soucieux, sympathique... je recommande !",
    name: "Caroline Nicolette",
    role: "Avis Google",
  },
  {
    quote:
      "J'ai été pris en charge par Augustin pour une rupture de mon ligament croisé antérieur il y a maintenant 1 an. Quelle chance d'avoir pu réaliser ma rééducation à ses côtés, il a tout simplement sauvé mon genou. Il s'est montré disponible et à l'écoute à toute heure. Il a assuré mon suivi en cabinet tout comme à distance avec des programmes et des séances personnalisés, le tout illustré par des vidéos et des commentaires audio. Un tout grand merci pour ces 60 séances qui furent un immense plaisir, je n'aurais pas pu espérer meilleure rééducation.",
    name: "Clément",
    role: "Avis Google",
  },
  {
    quote:
      "Rééducation d'une entorse de la cheville. Super à l'écoute, Augustin est resté très attentif à l'évolution avec des conseils précieux. À conseiller pour toute blessure sportive.",
    name: "Florian Lemaire",
    role: "Avis Google",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-50/40 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            subtitle="Témoignages"
            title="Ce que les patient(e)s en disent"
            description="Ils m'ont fait confiance, pourquoi pas vous ?"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} animation="reveal-up" delay={i * 120}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
