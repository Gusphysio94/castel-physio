export type Article = { title: string; date: string; isoDate: string; category: string; readTime: string; content: string; related?: { href: string; label: string }[] };

// Placeholder blog data — will be replaced by MDX/CMS later
export const articles: Record<string, Article> = {
  "approche-biopsychosociale-kinesitherapie": {
    title: "L'approche biopsychosociale en kinésithérapie : pourquoi c'est essentiel",
    date: "15 mars 2026",
    isoDate: "2026-03-15",
    related: [{ href: "/kinesitherapie/lombalgie", label: "Lombalgie : retrouver un dos solide et rester actif" }],
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
    isoDate: "2026-03-08",
    related: [{ href: "/kinesitherapie/reeducation-lca", label: "Rééducation du LCA au cabinet" }],
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
    isoDate: "2026-03-01",
    related: [
      { href: "/kinesitherapie/tendinopathie", label: "Tendinopathie : comprendre et traiter la douleur du tendon" },
      { href: "/formations", label: "Formations pour kinésithérapeutes" },
    ],
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

