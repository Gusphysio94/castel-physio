import type { Metadata } from "next";
import Link from "next/link";
import BookingButton from "@/components/ui/BookingButton";
import CTABanner from "@/components/sections/CTABanner";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { SITE_URL, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Votre première séance de kiné : à quoi s'attendre",
  description:
    "Comment se passe un premier rendez-vous chez Augustin Castel, kinésithérapeute du sport à Woluwe-Saint-Lambert : déroulement, documents à apporter, remboursement, annulation.",
  path: "/premiere-seance",
});

const steps = [
  {
    title: "Vous réservez",
    text: "En ligne, au moment qui vous arrange, ou par téléphone si vous préférez d'abord en parler. Vous pouvez venir avec ou sans diagnostic précis : c'est justement le but du bilan.",
  },
  {
    title: "Vous préparez votre venue",
    text: "Apportez votre prescription médicale si vous en avez une, vos éventuels examens (radio, IRM, compte rendu d'opération) et une tenue dans laquelle vous pouvez bouger. Si vous pratiquez un sport, notez ce que vous faisiez avant l'apparition de la douleur : c'est très utile.",
  },
  {
    title: "Le bilan",
    text: "Nous reprenons votre histoire : quand ça a commencé, ce qui aggrave ou soulage, votre quotidien, votre sport, ce qui vous inquiète. Puis j'examine vos mouvements, votre force et ce qui reproduit la douleur. Vous restez maître de l'examen : si un geste ne passe pas, vous le dites et on adapte.",
  },
  {
    title: "Vous comprenez ce qui se passe",
    text: "Je vous explique, avec des mots simples, ce que je pense de votre situation, ce que cela signifie et ce que cela ne signifie pas. Beaucoup de patients repartent déjà soulagés d'avoir compris.",
  },
  {
    title: "Vous repartez avec un plan",
    text: "Des exercices adaptés et des repères pour doser vos activités : ce que vous pouvez faire dès demain, et ce qu'il vaut mieux alléger pour l'instant. Nous décidons ensemble du rythme des séances suivantes.",
  },
];

const faq = [
  {
    q: "Faut-il une prescription médicale ?",
    a: "Pour que les séances soient remboursées par votre mutuelle, oui, une prescription est requise. Vous pouvez la prendre auprès de votre médecin traitant ou de votre médecin du sport. Une attestation de soins vous est remise à chaque séance.",
  },
  {
    q: "Dois-je avoir un diagnostic avant de venir ?",
    a: "Non. Vous pouvez venir avec un diagnostic posé par un médecin, ou sans. Le bilan permet de faire le point, et si quelque chose nécessite un avis médical, je vous le dis.",
  },
  {
    q: "Combien de séances faudra-t-il ?",
    a: "Cela dépend de votre problème, de son ancienneté et de vos objectifs. Je ne peux pas l'annoncer honnêtement avant le bilan. Nous décidons ensemble, au fil des séances, et le programme est conçu pour que vous deveniez autonome.",
  },
  {
    q: "Je ne peux pas me déplacer : est-ce possible à distance ?",
    a: "Oui, la téléconsultation permet de faire le point, d'ajuster votre programme et de rester accompagné entre deux séances au cabinet. Le premier bilan est en général plus complet en présentiel.",
  },
  {
    q: "Comment se passent le paiement et les annulations ?",
    a: "Les honoraires suivent la nomenclature INAMI et se règlent à la fin de la séance (espèces, virement ou paiement mobile). Si vous devez annuler ou déplacer un rendez-vous, merci de prévenir au moins 24 heures à l'avance.",
  },
];

export default function PremiereSeance() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Première séance", item: `${SITE_URL}/premiere-seance` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-navy-300 mb-6">
            <Link href="/" className="hover:text-amber-300 transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-amber-400">Première séance</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Votre première séance : à quoi s&apos;attendre
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl leading-relaxed">
            Consulter, c&apos;est parfois appréhender : que va-t-on me faire, vais-je avoir mal, est-ce que
            je vais être compris ? Voici, sans surprise, comment se déroule un premier rendez-vous.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <BookingButton source="premiere-seance-hero" />
            <a
              href={`tel:${PHONE_TEL}`}
              data-umami-event="tel-click"
              data-umami-event-source="premiere-seance"
              className="text-sm font-medium text-navy-200 hover:text-amber-300 transition-colors"
            >
              ou appelez le {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-10">Le déroulement, étape par étape</h2>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5 rounded-2xl border border-navy-100 bg-white p-6">
                <span className="font-display text-4xl font-bold text-amber-200 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{s.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">Questions fréquentes</h2>
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-navy-100 open:border-amber-300">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6 font-semibold text-navy-900">
                  <span>{f.q}</span>
                  <span aria-hidden className="text-amber-500 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 md:px-6 pb-6 text-navy-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-navy-500">
            Une question qui n&apos;est pas ici ?{" "}
            <Link href="/contact" className="font-medium text-amber-600 underline underline-offset-4 hover:text-amber-500">
              Écrivez-moi
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
