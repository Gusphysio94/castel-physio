import type { Article } from "./types";

export const tendiniteInflammationRepos: Article = {
  kind: "mythe",
  slug: "tendinite-inflammation-repos",
  title: "Tendinite = inflammation ? Pas vraiment, et le repos ne suffit pas",
  metaTitle: "Tendinite : inflammation, repos, anti-inflammatoires ?",
  description:
    "Tendinite et inflammation : le plus souvent, c'est un tendon surchargé. Pourquoi repos et anti-inflammatoires ne suffisent pas, et ce qui aide vraiment.",
  excerpt:
    "Votre tendon n'est pas enflammé, il est surchargé. Voici pourquoi le repos complet et les anti-inflammatoires ne règlent pas le problème.",
  isoDate: "2026-10-01",
  category: "Tendon",
  audience: "patients",
  myth: {
    claim: "J'ai une tendinite, donc c'est de l'inflammation : il me faut du repos et des anti-inflammatoires.",
    verdict: "plutot-faux",
    oneLiner:
      "Un tendon douloureux est le plus souvent un tendon surchargé, pas enflammé : il a besoin d'une charge dosée et d'exercices, pas d'un simple repos.",
    whyBelieved:
      "C'est logique de le penser : le mot « tendinite » finit par « -ite », qui évoque l'inflammation, et un répit soulage souvent sur le moment. Beaucoup de soignants l'ont longtemps répété.",
    stats: [
      {
        value: "51 sur 65",
        label: "personnes nettement mieux à 1 an avec éducation + exercice (hanche), contre 36 sur 63 après une infiltration",
      },
      {
        value: "3 mois",
        label: "d'exercice conseillés avant d'envisager un complément (Achille, rotulien, hanche)",
      },
    ],
    doList: [
      "Réduire ce qui irrite le plus, le temps que le tendon se calme",
      "Garder les activités que votre tendon tolère",
      "Renforcer le tendon et son muscle, de façon régulière",
      "Remonter la charge par paliers, en surveillant la réaction du lendemain",
    ],
    dontList: [
      "Rester au repos complet pendant des semaines",
      "Passer outre une douleur vive ou qui s'aggrave de jour en jour",
      "Compter sur les anti-inflammatoires comme traitement de fond",
      "Tout reprendre à pleine charge dès que la douleur se calme",
    ],
  },
  takeaways: [
    "Le terme actuel est tendinopathie : un tendon qui supporte moins bien la charge, plus qu'un tendon enflammé.",
    "Anti-inflammatoires et infiltrations soulagent parfois vite, mais leur bénéfice durable n'est pas démontré.",
    "Ni repos prolongé, ni passer outre la douleur : on dose, on renforce, on remonte par paliers.",
  ],
  content: `## Ce que montrent les études

Le mot « tendinite » fait penser à un tendon enflammé. Pourtant, une revue de la littérature indique que ces douleurs s'accompagnent peu, voire pas, d'inflammation. On parle aujourd'hui de **tendinopathie** : un tendon qui supporte moins bien la charge qu'on lui demande.

Imaginez un câble de pont : il s'adapte au trafic qu'il subit. Si le trafic augmente trop vite, ou après une longue pause, il réagit. Il n'est pas « en feu » : il est surchargé.

Cela change la façon de soigner. Les anti-inflammatoires et les infiltrations de corticoïde soulagent parfois à court terme, mais leur efficacité à long terme n'a pas été démontrée. Pour le coude, les essais regroupés montrent même que l'effet de l'infiltration s'inverse au bout de quelques mois. Pour la hanche, un programme d'éducation et d'exercices a fait mieux qu'une infiltration à un an. Si vous prenez un médicament, parlez-en à votre médecin ou à votre pharmacien.

## Et le repos ?

Quelques jours de répit sur ce qui irrite le plus peuvent aider quand c'est très douloureux. Mais un tendon a besoin de charge pour retrouver sa capacité. Un repos long soulage souvent, puis la douleur revient dès que vous reprenez.

À l'inverse, continuer comme si de rien n'était n'est pas la solution non plus.

## Alors, que faire ?

Les revues placent l'exercice en première intention : aucun complément n'a clairement fait mieux que l'exercice seul, qu'on conseille de tenir au moins trois mois avant d'envisager autre chose.

- On **réduit** ce qui irrite le plus, on **garde** ce qui est toléré.
- On **renforce** progressivement le tendon.
- On **remonte** par paliers : une gêne légère qui redescend d'ici le lendemain, la dose est bonne ; sinon, on réduit.

Pour aller plus loin, voyez la page sur la [tendinopathie](/kinesitherapie/tendinopathie), l'article sur la [durée de la tendinopathie d'Achille](/blog/tendinopathie-achille-duree) ou ce qui se passe lors d'une [première séance](/premiere-seance).`,
  related: [
    { href: "/kinesitherapie/tendinopathie", label: "Tendinopathie : comprendre et traiter la douleur du tendon" },
    { href: "/blog/tendinopathie-achille-duree", label: "Tendinopathie d'Achille : combien de temps pour guérir ?" },
    { href: "/premiere-seance", label: "Votre première séance" },
  ],
  references: [
    {
      citation:
        "Andres BM, Murrell GA. Treatment of tendinopathy: what works, what does not, and what is on the horizon. Clin Orthop Relat Res. 2008;466(7):1539-1554.",
      pmid: "18446422",
    },
    {
      citation:
        "Cook JL, Rio E, Purdam CR, et al. Revisiting the continuum model of tendon pathology: what is its merit in clinical practice and research? Br J Sports Med. 2016;50(19):1187-1191.",
      pmid: "27127294",
    },
    {
      citation:
        "Coombes BK, Bisset L, Vicenzino B. Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review of randomised controlled trials. Lancet. 2010;376(9754):1751-1767.",
      pmid: "20970844",
    },
    {
      citation:
        "Mellor R, Bennell K, Grimaldi A, et al. Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy. Br J Sports Med. 2018;52(22):1464-1472.",
      pmid: "30385462",
    },
    {
      citation:
        "Challoumas D, Crosbie G, O'Neill S, et al. Effectiveness of exercise treatments with or without adjuncts for common lower limb tendinopathies: a living systematic review and network meta-analysis. Sports Med Open. 2023;9(1):71.",
      pmid: "37553459",
    },
    {
      citation:
        "Pattanittum P, Turner T, Green S, et al. Non-steroidal anti-inflammatory drugs (NSAIDs) for treating lateral elbow pain in adults. Cochrane Database Syst Rev. 2013;(5):CD003686.",
      pmid: "23728646",
    },
  ],
};
