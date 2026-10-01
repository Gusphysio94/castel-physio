import type { Article } from "./types";

export const malDeDosReposAuLit: Article = {
  kind: "mythe",
  slug: "mal-de-dos-repos-au-lit",
  title: "Mal de dos : faut-il vraiment rester au lit pour guérir ?",
  metaTitle: "Mal de dos : faut-il rester au lit ?",
  description:
    "Rester allongé quand le dos fait mal est un réflexe courant. Que disent les études sur le repos au lit, la marche et la reprise progressive ? Réponse claire.",
  excerpt:
    "Le lit semble logique quand le dos fait mal. Les études racontent autre chose : la bonne dose se trouve entre repos et effort forcé.",
  isoDate: "2026-10-01",
  category: "Dos",
  audience: "patients",
  myth: {
    claim: "J'ai mal au dos, donc je dois me reposer et rester au lit jusqu'à ce que ça passe.",
    verdict: "plutot-faux",
    oneLiner:
      "Le repos au lit n'aide pas mieux que de rester actif, et en cas de mal de dos aigu, rester actif fait un peu mieux. L'idée : doser, pas s'arrêter.",
    whyBelieved:
      "C'est logique de le penser : quand ça fait mal, le corps réclame de la pause, et le repos a longtemps été la consigne donnée aux patients.",
    stats: [
      {
        value: "10 essais",
        label: "comparant repos au lit et rester actif, réunis dans la revue Cochrane de référence",
      },
    ],
    doList: [
      "Marcher quelques minutes, plusieurs fois par jour, à une allure confortable",
      "Changer de position régulièrement plutôt que de rester des heures dans la même",
      "Réduire seulement ce qui aggrave nettement la douleur, le temps qu'elle se calme",
      "Augmenter un peu chaque jour, et regarder la réaction du lendemain",
    ],
    dontList: [
      "Rester couché des jours en attendant que la douleur disparaisse",
      "Forcer à travers une douleur qui monte pour « prouver » que ça va",
      "Éviter tous les mouvements par peur de « casser » le dos",
    ],
  },
  takeaways: [
    "Le repos au lit prolongé n'apporte pas de bénéfice : en cas de mal de dos aigu, rester actif fait un peu mieux.",
    "En cas de sciatique, la différence est faible, mais le repos ne fait pas mieux.",
    "Ni lit ni effort forcé : on réduit ce qui irrite, on garde ce qui est toléré, et on remonte par paliers.",
  ],
  content: `## Ce que montrent les études

La revue Cochrane de Dahm et collègues a réuni dix essais randomisés. Pour un mal de dos aigu, conseiller de rester actif donne de petits bénéfices sur la douleur et la fonction, comparé au conseil de rester au lit. Pour la sciatique, il y a peu ou pas de différence entre les deux : le repos ne fait pas mieux.

Soyons honnêtes : ces preuves sont de qualité modérée, et les auteurs notent que de nouvelles études pourraient modifier ce constat. Les grandes recommandations (Foster et collègues, 2018) vont dans le même sens : elles encouragent à reprendre les activités normales, et relèvent que le repos est encore beaucoup trop utilisé.

## Pourquoi trop se reposer n'aide pas

Pensez à une porte que l'on n'ouvre plus : elle finit par grincer. Un dos que l'on n'utilise plus se raidit de la même façon, et le moindre geste paraît alors plus impressionnant.

Il y a aussi la peur. Selon une revue systématique, dans les douleurs de dos de moins de six mois, les personnes qui craignent fortement le mouvement ont ensuite plus de douleur et plus de gêne au quotidien. Rester couché des jours entretient souvent cette crainte.

## Alors, que faire ?

Ni rester au lit, ni forcer. On **dose**. Un jour ou deux à réduire ce qui aggrave nettement la douleur, c'est compréhensible. Mais on garde ce qui est toléré, comme la marche, puis on en fait un peu plus chaque jour. Le repère : regardez la douleur le lendemain. Si elle est nettement plus forte, la dose était trop haute, et on redescend d'un cran.

Pour les premiers jours en détail, voyez l'article sur [le lumbago](/blog/lumbago-premiers-jours) et la page [lombalgie et douleurs du dos](/kinesitherapie/lombalgie).

## Quand consulter

Difficulté à uriner, engourdissement entre les jambes, faiblesse marquée d'une jambe, fièvre, ou douleur après une chute violente : consultez rapidement. Sinon, si la douleur ne s'améliore pas, [une première séance](/premiere-seance) permet de faire le point.`,
  related: [
    { href: "/kinesitherapie/lombalgie", label: "Lombalgie et douleurs du dos" },
    { href: "/blog/lumbago-premiers-jours", label: "Lumbago : que faire dans les premiers jours ?" },
    { href: "/premiere-seance", label: "Votre première séance" },
  ],
  references: [
    {
      citation:
        "Dahm KT, Brurberg KG, Jamtvedt G, et al. Advice to rest in bed versus advice to stay active for acute low-back pain and sciatica. Cochrane Database Syst Rev. 2010;(6):CD007612.",
      pmid: "20556780",
    },
    {
      citation:
        "Foster NE, Anema JR, Cherkin D, et al. Prevention and treatment of low back pain: evidence, challenges, and promising directions. Lancet. 2018;391(10137):2368-2383.",
      pmid: "29573872",
    },
    {
      citation:
        "Wertli MM, Rasmussen-Barr E, Held U, et al. Fear-avoidance beliefs-a moderator of treatment efficacy in patients with low back pain: a systematic review. Spine J. 2014;14(11):2658-2678.",
      pmid: "24614254",
    },
    {
      citation:
        "Qaseem A, Wilt TJ, McLean RM, et al. Noninvasive treatments for acute, subacute, and chronic low back pain: a clinical practice guideline from the American College of Physicians. Ann Intern Med. 2017;166(7):514-530.",
      pmid: "28192789",
    },
    {
      citation:
        "George SZ, Fritz JM, Silfies SP, et al. Interventions for the management of acute and chronic low back pain: revision 2021. J Orthop Sports Phys Ther. 2021;51(11):CPG1-CPG60.",
      pmid: "34719942",
    },
  ],
};
