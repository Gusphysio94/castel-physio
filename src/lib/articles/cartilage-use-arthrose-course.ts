import type { Article } from "./types";

export const cartilageUseArthroseCourse: Article = {
  kind: "mythe",
  audience: "patients",
  slug: "cartilage-use-arthrose-course",
  title: "Cartilage usé : faut-il vraiment arrêter de courir ?",
  metaTitle: "Cartilage usé et course à pied : faut-il arrêter ?",
  description:
    "Arthrose, cartilage « usé », genou douloureux : courir est-il dangereux ? Ce que disent les études, et comment doser sa reprise sans forcer.",
  excerpt: "Genou douloureux ou arthrose : arrêter de courir n'est pas la réponse par défaut. Voici ce que disent les études.",
  isoDate: "2026-10-01",
  category: "Genou",
  myth: {
    claim: "Mon cartilage est usé : je dois ménager mes genoux et arrêter de courir.",
    verdict: "plutot-faux",
    oneLiner:
      "Un genou douloureux n'est pas « usé » : il est le plus souvent surchargé. Le remède est de le doser et de le renforcer, pas de l'arrêter.",
    whyBelieved:
      "C'est logique de le penser : on compare le genou à un pneu qui s'use à chaque kilomètre, et un compte rendu d'imagerie parle volontiers d'« usure ». Même certains soignants l'ont longtemps répété.",
    stats: [
      { value: "3,5 %", label: "des coureurs de loisir ont une arthrose de hanche ou de genou" },
      { value: "10,2 %", label: "chez les personnes qui ne courent pas" },
      { value: "−12 pts", label: "de douleur sur 100 en moyenne avec l'exercice, dans l'arthrose du genou" },
    ],
    doList: [
      "Réduire la dose (distance, vitesse, côtes) le temps que la douleur se calme",
      "Renforcer les cuisses, les fessiers et les mollets, pas à pas",
      "Remonter par paliers, en vérifiant votre genou le lendemain",
      "Garder les activités que le genou tolère (marche, vélo, natation)",
    ],
    dontList: [
      "Courir en serrant les dents quand la douleur monte ou que le genou gonfle",
      "Tout arrêter pendant des mois par peur de l'« usure »",
      "Reprendre d'un coup au niveau d'avant",
    ],
  },
  takeaways: [
    "Courir pour le loisir n'est pas associé à plus d'arthrose, et un genou douloureux est plus souvent surchargé qu'usé.",
    "L'image médicale ne mesure pas la douleur : beaucoup de genoux sans douleur ont les mêmes changements.",
    "L'exercice est le traitement de première ligne de l'arthrose : on dose, on renforce, on remonte par paliers.",
  ],
  content: `## Ce que montrent les études

Une grande revue a regroupé 25 études, soit plus de 125 000 personnes. D'après les études regroupées, l'arthrose de la hanche ou du genou touchait **3,5 %** des coureurs de loisir, contre **10,2 %** des personnes qui ne courent pas. Chez les coureurs de compétition, avec beaucoup d'années et de volume, c'était **13,3 %**.

Les auteurs restent prudents : on ne peut pas dire si la course en est la cause, car les anciennes blessures du genou pèsent lourd dans ces chiffres.

## L'arthrose n'est pas une simple usure

Imaginez que votre genou a un **plafond de tolérance** : tant que la charge reste en dessous, tout va bien. Quand elle le dépasse (reprise trop rapide, côtes, changement de sport), la douleur apparaît, sans qu'une pièce soit « cassée ».

L'arthrose concerne toute l'articulation, os, cartilage, membrane et muscles, pas seulement une surface qui s'effacerait. Le cartilage se renouvelle peu, mais les muscles autour du genou répondent très bien à l'entraînement. Et l'image ne dit pas tout : des changements de l'arthrose s'observent aussi sur des genoux **sans aucune douleur** (voir [douleur de genou](/kinesitherapie/douleur-genou)).

## Alors, que faire ?

Les recommandations (ACR, OARSI) placent l'**exercice** et l'éducation en tête du traitement de l'arthrose du genou. Dans la revue Cochrane, l'exercice faisait baisser la douleur d'environ 12 points sur 100, un effet comparable à celui des anti-inflammatoires.

Cela ne veut pas dire courir malgré la douleur. On **dose** : on réduit ce qui irrite, on garde ce qui est toléré, on **renforce**, puis on **remonte par paliers**. Un bon repère : une gêne légère qui est revenue à son niveau habituel le lendemain. Si la douleur augmente ou si le genou gonfle, la dose était trop haute : on redescend.

Pour savoir où se situe votre plafond, un bilan aide beaucoup : voir [la première séance](/premiere-seance).`,
  related: [
    { href: "/kinesitherapie/douleur-genou", label: "Douleur de genou : comprendre et reprendre confiance" },
    { href: "/premiere-seance", label: "Ma première séance" },
  ],
  references: [
    {
      citation:
        "Alentorn-Geli E, Samuelsson K, Musahl V, et al. The association of recreational and competitive running with hip and knee osteoarthritis: a systematic review and meta-analysis. J Orthop Sports Phys Ther. 2017;47(6):373-390.",
      pmid: "28504066",
    },
    {
      citation:
        "Fransen M, McConnell S, Harmer AR, et al. Exercise for osteoarthritis of the knee. Cochrane Database Syst Rev. 2015;(1):CD004376.",
      pmid: "25569281",
    },
    {
      citation:
        "Kolasinski SL, Neogi T, Hochberg MC, et al. 2019 American College of Rheumatology/Arthritis Foundation guideline for the management of osteoarthritis of the hand, hip, and knee. Arthritis Rheumatol. 2020;72(2):220-233.",
      pmid: "31908163",
    },
    {
      citation:
        "Bannuru RR, Osani MC, Vaysbrot EE, et al. OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis. Osteoarthritis Cartilage. 2019;27(11):1578-1589.",
      pmid: "31278997",
    },
    {
      citation:
        "Culvenor AG, Øiestad BE, Hart HF, et al. Prevalence of knee osteoarthritis features on magnetic resonance imaging in asymptomatic uninjured adults: a systematic review and meta-analysis. Br J Sports Med. 2019;53(20):1268-1278.",
      pmid: "29886437",
    },
  ],
};
