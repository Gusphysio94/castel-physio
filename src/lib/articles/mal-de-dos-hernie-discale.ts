import type { Article } from "./types";

export const malDeDosHernieDiscale: Article = {
  kind: "mythe",
  audience: "patients",
  slug: "mal-de-dos-hernie-discale",
  title: "Mal de dos = hernie discale ? Non, et voici pourquoi",
  metaTitle: "Mal de dos et hernie discale : le mythe",
  description:
    "Avoir mal au dos ne veut pas dire avoir une hernie discale. Des disques qui bombent se voient aussi chez des personnes sans douleur : ce que disent les études.",
  excerpt: "Un disque qui bombe sur l'IRM est très courant chez des gens sans douleur. Alors, que vaut cette image ?",
  isoDate: "2026-10-01",
  category: "Dos",
  takeaways: [
    "Une image du dos ressemble souvent à l'âge de la personne, pas à sa douleur.",
    "Un dos douloureux est le plus souvent un dos sensible et surchargé, pas un dos cassé.",
    "On dose ses activités, on renforce, puis on remonte par paliers : l'image ne dicte pas la marche à suivre.",
  ],
  myth: {
    claim: "J'ai mal au dos, donc j'ai une hernie discale (ou un dos abîmé).",
    verdict: "plutot-faux",
    oneLiner:
      "Les disques qui bombent sont très fréquents chez des personnes sans aucune douleur : l'image seule n'explique pas un mal de dos.",
    whyBelieved:
      "C'est logique de le penser : quand on a mal, on cherche une cause visible, et un compte rendu d'IRM avec des mots comme « hernie » ou « dégénérescence » semble donner raison. Même certains soignants ont longtemps lu les images de cette façon.",
    stats: [
      { value: "37 %", label: "des personnes de 20 ans sans douleur ont un disque qui « dégénère » à l'imagerie" },
      { value: "29 %", label: "des personnes de 20 ans sans douleur ont une protrusion de disque (proche de la hernie)" },
      { value: "84 %", label: "des personnes de 80 ans sans douleur ont un disque qui bombe" },
    ],
    doList: [
      "Demander à votre soignant ce que l'image dit et ne dit pas de votre douleur",
      "Marcher et bouger chaque jour, en réduisant seulement ce qui aggrave nettement la douleur",
      "Renforcer votre dos progressivement, avec un programme adapté à vous",
      "Remonter vos activités par paliers, en vous fiant à la douleur du lendemain",
    ],
    dontList: [
      "Se déclarer « dos abîmé » à cause d'un mot sur un compte rendu",
      "Rester au repos de longues journées par peur d'aggraver",
      "Forcer à travers une douleur qui monte ou qui dure",
      "Réclamer une IRM de principe sans signe d'alerte",
    ],
  },
  content: `## Ce que montrent les études

Une grande revue de 2015 a regroupé 33 études portant sur 3 110 personnes **sans aucun mal de dos**, toutes passées au scanner ou à l'IRM. Les « anomalies » y sont très courantes. Dès 20 ans, 37 % ont un disque qui « dégénère » et 29 % une protrusion de disque. À 80 ans, 84 % ont un disque qui bombe.

Pensez aux cheveux gris ou aux rides : ils racontent l'âge, pas une maladie. Les images du dos fonctionnent un peu de la même façon, et elles sont souvent là sans que rien ne fasse mal.

Pour être honnête, certaines images (disque qui bombe, protrusion, extrusion) se retrouvent un peu plus souvent chez les personnes qui ont mal. Mais elles ne suffisent presque jamais à expliquer la douleur. Dans la plupart des cas, on parle de lombalgie « non spécifique » : on ne peut pas pointer une structure précise. Cela ne veut pas dire que votre douleur est imaginaire, ni que votre dos est fragile.

## Alors, que faire ?

Un dos douloureux est le plus souvent un dos **sensible et surchargé**, pas un dos cassé. Comme on réduit un peu la charge d'un muscle trop sollicité, on dose ce qui irrite, on garde ce qui est toléré, puis on renforce pour que le dos en supporte davantage. On remonte ensuite par paliers. Vous trouverez le détail sur la page [lombalgie et douleurs du dos](/kinesitherapie/lombalgie).

## Quand une image est-elle utile ?

Chez les personnes dont le mal de dos n'a aucun signe d'alerte, faire une imagerie tout de suite n'améliore pas l'évolution. Elle devient utile en présence de signes d'alerte (faiblesse de la jambe, troubles urinaires, fièvre, douleur nocturne constante), quand la douleur ne s'améliore pas comme prévu, ou quand une chirurgie ou une infiltration est envisagée. C'est votre médecin qui en décide.

Une sciatique, avec une douleur qui descend dans la jambe, peut bien venir d'une hernie qui irrite un nerf. Elle s'améliore souvent avec le temps. Pour comprendre où vous en êtes, le plus simple est de [commencer par un bilan](/premiere-seance).`,
  faq: [],
  related: [
    { href: "/kinesitherapie/lombalgie", label: "Lombalgie et douleurs du dos" },
    { href: "/premiere-seance", label: "Votre première séance" },
    { href: "/kinesitherapie/reeducation-post-operatoire", label: "Rééducation post-opératoire" },
  ],
  references: [
    {
      citation:
        "Brinjikji W, Luetmer PH, Comstock B, et al. Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR Am J Neuroradiol. 2015;36(4):811-816.",
      pmid: "25430861",
    },
    {
      citation:
        "Brinjikji W, Diehn FE, Jarvik JG, et al. MRI findings of disc degeneration are more prevalent in adults with low back pain than in asymptomatic controls: a systematic review and meta-analysis. AJNR Am J Neuroradiol. 2015;36(12):2394-2399.",
      pmid: "26359154",
    },
    {
      citation:
        "Chou R, Fu R, Carrino JA, et al. Imaging strategies for low-back pain: systematic review and meta-analysis. Lancet. 2009;373(9662):463-472.",
      pmid: "19200918",
    },
    {
      citation:
        "Foster NE, Anema JR, Cherkin D, et al. Prevention and treatment of low back pain: evidence, challenges, and promising directions. Lancet. 2018;391(10137):2368-2383.",
      pmid: "29573872",
    },
    {
      citation:
        "George SZ, Fritz JM, Silfies SP, et al. Interventions for the management of acute and chronic low back pain: revision 2021. J Orthop Sports Phys Ther. 2021;51(11):CPG1-CPG60.",
      pmid: "34719942",
    },
  ],
};
