import type { Article } from "./types";

export const etirementsEviterBlessures: Article = {
  kind: "mythe",
  audience: "patients",
  slug: "etirements-eviter-blessures",
  title: "S'étirer avant le sport évite-t-il les blessures ? Pas vraiment",
  metaTitle: "Étirements et blessures : ce que disent les études",
  description:
    "S'étirer avant ou après le sport ne réduit ni les blessures ni vraiment les courbatures. Ce que montrent les études, et ce qui protège mieux.",
  excerpt: "Les étirements ont leur place, mais pas celle qu'on leur donne. Ce qui protège vraiment, c'est ailleurs.",
  isoDate: "2026-10-01",
  category: "Sport",
  takeaways: [
    "S'étirer seul, avant ou après l'effort, ne réduit pas le nombre de blessures.",
    "Renforcer, travailler l'équilibre et s'échauffer progressivement protègent mieux.",
    "On peut garder les étirements pour le confort ou la souplesse, sans les croire protecteurs.",
  ],
  myth: {
    claim: "Il faut s'étirer avant et après le sport pour éviter les blessures.",
    verdict: "plutot-faux",
    oneLiner:
      "Les études ne montrent pas de baisse des blessures grâce aux étirements seuls ; le renforcement et les échauffements variés font mieux.",
    whyBelieved:
      "C'est logique de le penser : un muscle raide semble plus fragile, et on vous l'a répété depuis l'école. Même beaucoup de coachs et de soignants l'ont longtemps enseigné.",
    stats: [
      { value: "Aucun", label: "effet des étirements seuls sur les blessures (25 essais, 26 610 participants)" },
      { value: "< 1/3", label: "du risque de blessure restant avec un programme de renforcement, en moyenne des essais" },
      { value: "34 %", label: "de blessures en moins avec les programmes d'échauffement FIFA chez les footballeurs" },
    ],
    doList: [
      "Vous échauffer progressivement, en commençant doucement l'activité elle-même",
      "Renforcer vos muscles régulièrement, avec un programme adapté à votre sport",
      "Travailler l'équilibre et les sauts-réceptions si votre sport en demande",
      "Augmenter la quantité d'entraînement par paliers, en vous fiant à la douleur du lendemain",
    ],
    dontList: [
      "Compter sur les étirements comme seule protection",
      "Étirer fort un muscle déjà douloureux, jusqu'à la douleur",
      "Augmenter brutalement la distance, la vitesse ou le nombre de séances",
      "Renoncer au sport par peur de vous blesser sans étirement",
    ],
  },
  content: `## Ce que montrent les études

Plusieurs revues d'études ont cherché si s'étirer avant ou après l'effort protège des blessures. La réponse est décevante pour les étirements : la méta-analyse la plus large ne trouve **aucun bénéfice** des étirements seuls sur le nombre de blessures.

Pour les courbatures, la grande revue Cochrane conclut que s'étirer avant ou après l'effort n'apporte pas de baisse importante en pratique, chez l'adulte en bonne santé. Les études sont parfois petites et de qualité moyenne : on ne peut pas dire que les étirements soient dangereux, seulement qu'ils ne protègent pas.

Étirer un muscle, c'est comme allonger un élastique : il devient plus souple à l'étirement, mais pas plus résistant. Pour qu'il encaisse mieux les efforts, il faut le renforcer.

## Ce qui protège mieux

Ce sont les programmes qui travaillent la force, l'équilibre et le geste. Chez les footballeurs, l'échauffement de type FIFA 11+ (course, renforcement, équilibre, sauts) est associé à environ un tiers de blessures en moins. Ce résultat vient du football : les données sont plus larges pour les programmes mêlant plusieurs types d'exercices, qui réduisent aussi les blessures.

## Alors, que faire ?

Les étirements ne sont pas interdits. Si cela vous fait du bien, ou si vous voulez gagner en souplesse, gardez-les, sans forcer jusqu'à la douleur.

Mais pour protéger vos tendons, vos muscles et vos articulations, misez sur trois choses : un échauffement progressif, du renforcement régulier et une montée en charge par paliers. C'est la même logique que pour une [tendinopathie](/kinesitherapie/tendinopathie) ou une [entorse de cheville](/kinesitherapie/entorse-cheville) : on dose, on renforce, puis on remonte. Lors d'une [première séance](/premiere-seance), nous construisons ensemble un programme adapté à votre sport.`,
  related: [
    { href: "/kinesitherapie/tendinopathie", label: "Tendinopathie" },
    { href: "/kinesitherapie/entorse-cheville", label: "Entorse de cheville" },
    { href: "/premiere-seance", label: "Première séance" },
  ],
  references: [
    {
      citation:
        "Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med. 2014;48(11):871-7.",
      pmid: "24100287",
    },
    {
      citation:
        "Herbert RD, de Noronha M, Kamper SJ. Stretching to prevent or reduce muscle soreness after exercise. Cochrane Database Syst Rev. 2011;(7):CD004577.",
      pmid: "21735398",
    },
    {
      citation:
        "Herbert RD, Gabriel M. Effects of stretching before and after exercising on muscle soreness and risk of injury: systematic review. BMJ. 2002;325(7362):468.",
      pmid: "12202327",
    },
    {
      citation:
        "Thacker SB, Gilchrist J, Stroup DF, et al. The impact of stretching on sports injury risk: a systematic review of the literature. Med Sci Sports Exerc. 2004;36(3):371-8.",
      pmid: "15076777",
    },
    {
      citation:
        "Al Attar WSA, Alshehri MA. A meta-analysis of meta-analyses of the effectiveness of FIFA injury prevention programs in soccer. Scand J Med Sci Sports. 2019;29(12):1846-1855.",
      pmid: "31394009",
    },
  ],
};
