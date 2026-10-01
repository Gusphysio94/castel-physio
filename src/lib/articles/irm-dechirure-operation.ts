import type { Article } from "./types";

export const irmDechirureOperation: Article = {
  slug: "irm-dechirure-operation",
  kind: "mythe",
  title: "Déchirure à l'IRM = opération ? Pas si vite",
  metaTitle: "IRM : déchirure du ménisque ou de la coiffe, opérer ?",
  description:
    "Ménisque ou coiffe « déchirés » à l'IRM : faut-il opérer ? Ce que disent les études sur l'imagerie, l'exercice et la chirurgie, et quand voir un chirurgien.",
  excerpt:
    "Une déchirure à l'IRM n'est pas toujours un ordre d'opérer : voici ce que la recherche dit pour le genou et l'épaule.",
  isoDate: "2026-10-01",
  category: "Articulations",
  audience: "patients",
  myth: {
    claim: "L'IRM montre une déchirure du ménisque ou de la coiffe, donc il faut m'opérer.",
    verdict: "nuance",
    oneLiner:
      "Souvent non : la déchirure se voit aussi sans douleur, et l'exercice rivalise avec l'opération, sauf dans quelques situations précises.",
    whyBelieved:
      "C'est logique de le penser : une « déchirure » évoque une pièce à recoudre, et l'image paraît parler d'elle-même. Dans le passé, opérer était d'ailleurs très courant.",
    stats: [
      { value: "19 %", label: "des genoux de 40 ans et plus, sans douleur ni blessure, ont une fissure du ménisque à l'IRM" },
      { value: "11 à 17 %", label: "des épaules sans douleur ont une rupture complète de la coiffe à l'échographie (deux grands échantillons)" },
      { value: "23 % / 20 %", label: "d'arthrose à 10 ans après opération ou exercice du ménisque : pas de différence" },
    ],
    doList: [
      "Demander à votre médecin ou chirurgien ce que l'image change vraiment à la décision",
      "Commencer par un programme de renforcement encadré, dosé selon votre douleur du lendemain",
      "Réduire d'abord les gestes qui irritent, puis remonter par paliers",
      "Signaler tout blocage vrai, toute perte de force brutale ou tout traumatisme récent",
    ],
    dontList: [
      "Considérer l'image seule comme la cause de votre douleur",
      "Tout arrêter par peur de « aggraver la déchirure »",
      "Passer outre une douleur qui monte ou qui dure le lendemain",
      "Décider d'une opération sans avoir essayé un programme bien mené, sauf urgence",
    ],
  },
  takeaways: [
    "Une déchirure à l'IRM est fréquente, même sans douleur : l'image ne dit pas à elle seule ce qui fait mal.",
    "Pour un ménisque dégénératif, l'exercice donne un résultat comparable à l'opération.",
    "Pour la coiffe, les données sont plus partagées : la décision se prend avec le chirurgien.",
  ],
  content: `## Ce que montrent les études

Une IRM décrit l'aspect d'une articulation, pas la douleur. Pensez à une photo de visage : on y voit des rides, mais elles ne disent pas si la personne souffre. De la même façon, des déchirures se voient sur des genoux et des épaules qui ne font pas mal.

**Le genou.** Dans une grande revue, une fissure du ménisque apparaissait chez 19 % des adultes de 40 ans et plus, sans douleur ni blessure. Dans un essai norvégien auprès de 140 adultes d'environ 50 ans avec une fissure dégénérative, 12 semaines d'exercice encadré ont donné, à 2 ans, un résultat comparable à l'opération. À 10 ans, l'arthrose n'était pas plus fréquente avec l'exercice. Les recommandations internationales de 2017 vont dans le même sens pour le genou dégénératif.

**L'épaule.** Pour les petites ruptures dégénératives de la coiffe, une revue Cochrane indique que la chirurgie n'apporte peut-être que peu de bénéfice par rapport aux exercices, avec une certitude faible. Un essai auprès de personnes de plus de 55 ans a confirmé ce constat sur plus de 6 ans. Mais un autre essai, suivi pendant 15 ans, a trouvé de meilleurs résultats après réparation chez des personnes ayant une rupture petite à moyenne. La littérature est donc partagée.

## Quand une opération se discute

Il existe des situations où l'avis du chirurgien est important :

- un **vrai blocage** : le genou reste coincé et ne se déplie plus ;
- un **traumatisme** chez une personne jeune ou active ;
- une **rupture étendue** ou une perte de force brutale de l'épaule ;
- un programme bien mené qui n'apporte pas d'amélioration.

## Alors, que faire ?

Dans la plupart des cas, on commence par doser : on réduit ce qui irrite, on garde ce qui est toléré, puis on renforce pour que l'articulation supporte davantage, et on remonte par paliers. Si le lendemain est plus douloureux, la dose était trop haute : on redescend. Cela n'empêche pas un avis chirurgical, qui peut se prendre en parallèle.

Pour aller plus loin : [douleur de genou](/kinesitherapie/douleur-genou) et [douleur d'épaule](/kinesitherapie/douleur-epaule). Vous hésitez ? Parlons-en lors d'une [première séance](/premiere-seance).`,
  related: [
    { href: "/kinesitherapie/douleur-genou", label: "Douleur de genou" },
    { href: "/kinesitherapie/douleur-epaule", label: "Douleur d'épaule" },
    { href: "/kinesitherapie/reeducation-post-operatoire", label: "Rééducation post-opératoire" },
  ],
  references: [
    {
      citation:
        "Culvenor AG, Øiestad BE, Hart HF, et al. Prevalence of knee osteoarthritis features on magnetic resonance imaging in asymptomatic uninjured adults: a systematic review and meta-analysis. Br J Sports Med. 2019;53(20):1268-1278.",
      pmid: "29886437",
    },
    {
      citation:
        "Sanders S, Ibounig T, Haas R, et al. Rotator cuff imaging abnormalities in asymptomatic shoulders: a systematic review. J Orthop Sports Phys Ther. 2025;55(12):1-16.",
      pmid: "41308021",
    },
    {
      citation:
        "Kise NJ, Risberg MA, Stensrud S, et al. Exercise therapy versus arthroscopic partial meniscectomy for degenerative meniscal tear in middle aged patients: randomised controlled trial with two year follow-up. BMJ. 2016;354:i3740.",
      pmid: "27440192",
    },
    {
      citation:
        "Berg B, Roos EM, Kise NJ, et al. Arthroscopic partial meniscectomy versus exercise therapy for degenerative meniscal tears: 10-year follow-up of the OMEX randomised controlled trial. Br J Sports Med. 2025;59(2):91-98.",
      pmid: "39326908",
    },
    {
      citation:
        "Siemieniuk RAC, Harris IA, Agoritsas T, et al. Arthroscopic surgery for degenerative knee arthritis and meniscal tears: a clinical practice guideline. BMJ. 2017;357:j1982.",
      pmid: "28490431",
    },
    {
      citation:
        "Karjalainen TV, Jain NB, Heikkinen J, et al. Surgery for rotator cuff tears. Cochrane Database Syst Rev. 2019;12(12):CD013502.",
      pmid: "31813166",
    },
    {
      citation:
        "Moosmayer S, Lund G, Seljom US, et al. Fifteen-year results of a comparative analysis of tendon repair versus physiotherapy for small-to-medium-sized rotator cuff tears: a concise follow-up of previous reports. J Bone Joint Surg Am. 2024;106(19):1785-1796.",
      pmid: "39197154",
    },
  ],
};
