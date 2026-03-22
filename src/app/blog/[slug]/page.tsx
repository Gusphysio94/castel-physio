import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

// Placeholder blog data — will be replaced by MDX/CMS later
const articles: Record<string, { title: string; date: string; category: string; readTime: string; content: string }> = {
  "approche-biopsychosociale-kinesitherapie": {
    title: "L'approche biopsychosociale en kinésithérapie : pourquoi c'est essentiel",
    date: "15 mars 2026",
    category: "Pratique clinique",
    readTime: "6 min",
    content: `Le modèle biopsychosocial reconnaît que la douleur et le handicap sont influencés par des facteurs biologiques, psychologiques et sociaux. En kinésithérapie, adopter cette approche signifie aller au-delà de la simple évaluation biomécanique pour comprendre le patient dans sa globalité.

## Pourquoi c'est important ?

La recherche montre de manière consistante que les facteurs psychosociaux comme la kinésiophobie, les croyances sur la douleur et le catastrophisme sont des prédicteurs importants de chronicisation. Ignorer ces facteurs, c'est passer à côté d'une partie essentielle du puzzle.

## Comment l'appliquer en pratique ?

1. **Écoute active** : Prenez le temps de comprendre les croyances et les attentes du patient.
2. **Éducation** : Expliquez les mécanismes de la douleur de manière accessible.
3. **Approche active** : Encouragez le mouvement et l'autonomie plutôt que la dépendance aux soins passifs.
4. **Collaboration** : Travaillez avec le patient pour définir des objectifs réalistes et significatifs.

## Conclusion

L'approche biopsychosociale n'est pas une option, c'est une nécessité pour une prise en charge efficace et éthique en kinésithérapie.`,
  },
  "retour-sport-apres-lca": {
    title: "Retour au sport après reconstruction du LCA : les critères essentiels",
    date: "8 mars 2026",
    category: "Sport",
    readTime: "8 min",
    content: `Le retour au sport après une reconstruction du ligament croisé antérieur (LCA) est un processus complexe qui nécessite une évaluation rigoureuse. Voici les critères essentiels à considérer.

## Les critères objectifs

- **Force musculaire** : Indice de symétrie du quadriceps (LSI) > 90%
- **Tests fonctionnels** : Batterie de hop tests avec LSI > 90%
- **Temps** : Minimum 9 mois post-opératoire (idéalement 12+)

## Les critères subjectifs

- Confiance dans le genou
- Absence d'appréhension lors des changements de direction
- Motivation et préparation psychologique

## L'importance du continuum

Le retour au sport n'est pas un moment unique, mais un continuum. Il est essentiel de planifier une progression graduelle et individualisée.`,
  },
  "exercice-therapeutique-tendinopathie": {
    title: "Exercice thérapeutique et tendinopathie : que dit la science ?",
    date: "1 mars 2026",
    category: "Science",
    readTime: "7 min",
    content: `L'exercice thérapeutique est considéré comme le traitement de première intention pour les tendinopathies. Mais quel type d'exercice, à quelle dose, et avec quelle progression ?

## Ce que la science nous dit

Les revues systématiques récentes montrent que l'exercice progressif avec mise en charge est efficace pour réduire la douleur et améliorer la fonction. Cependant, il n'existe pas de protocole unique supérieur à tous les autres.

## Principes clés

1. **Progression graduelle** : Augmenter progressivement la charge
2. **Individualisation** : Adapter au stade de la pathologie et au patient
3. **Patience** : Les résultats prennent du temps (12+ semaines)
4. **Éducation** : Expliquer le processus au patient

## En pratique

L'essentiel est de trouver un exercice tolérable, de le doser correctement et de progresser de manière systématique.`,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article non trouvé" };
  return {
    title: article.title,
    description: article.content.slice(0, 160),
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-2xl font-bold text-navy-900 mb-4">Article non trouvé</h1>
        <Button href="/blog" variant="outline">Retour au blog</Button>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors mb-6 inline-block">
            &larr; Retour au blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold bg-amber-400/20 text-amber-300 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-navy-400">{article.date}</span>
            <span className="text-sm text-navy-400">·</span>
            <span className="text-sm text-navy-400">{article.readTime} de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-navy-900 mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("- ") || paragraph.startsWith("1. ")) {
                const items = paragraph.split("\n").filter(Boolean);
                const isOrdered = paragraph.startsWith("1. ");
                const ListTag = isOrdered ? "ol" : "ul";
                return (
                  <ListTag key={i} className={`${isOrdered ? "list-decimal" : "list-disc"} pl-6 space-y-2 my-4`}>
                    {items.map((item, j) => (
                      <li key={j} className="text-navy-700 leading-relaxed">
                        <span dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^[-\d]+[.)]\s*/, "")
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                        }} />
                      </li>
                    ))}
                  </ListTag>
                );
              }
              return (
                <p key={i} className="text-navy-700 leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Author */}
          <div className="mt-16 pt-8 border-t border-navy-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-navy-200 rounded-full flex items-center justify-center">
              <span className="text-navy-600 font-bold text-lg">AC</span>
            </div>
            <div>
              <p className="font-semibold text-navy-900">Augustin Castel</p>
              <p className="text-sm text-navy-500">Kinésithérapeute du sport — Bruxelles</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
