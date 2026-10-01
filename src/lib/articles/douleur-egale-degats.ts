import type { Article } from "./types";

export const douleurEgaleDegats: Article = {
  kind: "mythe",
  slug: "douleur-egale-degats",
  title: "J'ai mal, donc je me fais du mal ? Pas forcément, et voici pourquoi",
  metaTitle: "Douleur = dégât ? Ce que dit la science",
  description:
    "Avoir mal ne veut pas dire que quelque chose est abîmé. Comment le cerveau décide de la douleur, ce que montrent les études, et comment agir sans forcer.",
  excerpt:
    "Une douleur forte n'annonce pas toujours un dégât, et une image d'IRM inquiétante n'explique pas toujours une douleur.",
  isoDate: "2026-10-01",
  category: "Douleur",
  audience: "patients",
  myth: {
    claim: "J'ai mal, donc je me fais du mal : il y a forcément un dégât quelque part.",
    verdict: "plutot-faux",
    oneLiner:
      "La douleur est une mesure de protection décidée par le cerveau, pas un compteur de dégâts : on peut avoir mal sans lésion, et une lésion sans mal.",
    whyBelieved:
      "C'est logique de le penser : quand on se brûle ou qu'on se tord la cheville, la douleur et la blessure vont ensemble. Beaucoup de soignants ont aussi longtemps expliqué la douleur de cette façon.",
    stats: [
      {
        value: "37 % → 96 %",
        label: "des personnes sans mal de dos ont des disques qui « vieillissent » à l'IRM, entre 20 et 80 ans",
      },
      {
        value: "43 %",
        label: "des genoux sans douleur, à 40 ans et plus, montrent une irrégularité du cartilage à l'IRM",
      },
      {
        value: "≈ 6 sur 100",
        label: "baisse moyenne de la douleur à court terme après des séances d'explication seules : un effet modeste",
      },
    ],
    doList: [
      "Parler de vos peurs et de ce qu'on vous a dit sur votre douleur",
      "Doser : réduire ce qui l'irrite, garder ce qui reste toléré",
      "Renforcer par petits paliers pour que la zone tolère plus",
      "Soigner votre sommeil et vos temps de récupération",
    ],
    dontList: [
      "Conclure à un dégât à partir d'une douleur ou d'une image seule",
      "Forcer à travers une douleur vive ou qui monte",
      "Rester immobile des semaines par peur d'aggraver",
      "Vous dire que c'est « dans votre tête » : elle est réelle",
    ],
  },
  takeaways: [
    "La douleur est réelle, mais elle ne mesure pas les dégâts.",
    "Beaucoup d'images « inquiétantes » se voient aussi chez des gens sans douleur.",
    "On dose, on renforce, on remonte par paliers : on ne force pas.",
  ],
  content: `## Ce que montrent les études

Chez des personnes qui n'ont aucun mal de dos, l'IRM montre très souvent des disques qui « vieillissent », des bombements, de petites fissures. Au genou, c'est la même chose : chez des adultes sans douleur, on voit régulièrement des irrégularités du cartilage ou de petites fissures du ménisque. Ces images font partie de la vie normale du corps, un peu comme les cheveux gris.

Le contraire existe aussi : on peut avoir très mal sans qu'aucune image ne montre quoi que ce soit d'inquiétant.

## Alors, d'où vient la douleur ?

La douleur n'est pas un simple message de dégât envoyé par les tissus. Votre cerveau la produit pour vous protéger, en pesant tout ce qu'il sait : l'état de la zone, mais aussi votre sommeil, votre stress, votre peur de bouger, ce qu'on vous a dit et ce que vous attendez.

Imaginez un guide de montagne prudent. Il ne regarde pas seulement l'état du sentier : il tient compte de la météo, de sa fatigue, de celle du groupe. S'il juge la route risquée, il vous freine, même si le sentier est en bon état.

> La douleur est toujours réelle. Elle n'est jamais « dans la tête » : elle est produite par un système nerveux qui cherche à vous protéger.

Les revues d'études montrent qu'expliquer ainsi la douleur aide surtout à diminuer la peur de bouger. L'effet sur la douleur elle-même reste modeste : c'est un complément à l'exercice, pas un remède.

## Alors, que faire ?

Ce n'est pas un feu vert pour forcer. Une zone qui fait mal est le plus souvent surchargée, c'est-à-dire sollicitée au-delà de ce qu'elle tolère en ce moment. On réduit donc ce qui l'irrite, on garde ce qui reste confortable, puis on renforce pour qu'elle tolère davantage et on remonte par paliers.

Un repère simple : si la douleur est calmée le lendemain, la dose était bonne. Si elle monte et reste, on baisse d'un cran. Pour un [mal de dos](/kinesitherapie/lombalgie) ou une [douleur au genou](/kinesitherapie/douleur-genou), je construis ce cadre avec vous dès le bilan, lors de la [première séance](/premiere-seance).`,
  related: [
    { href: "/kinesitherapie/lombalgie", label: "Kinésithérapie du mal de dos" },
    { href: "/kinesitherapie/douleur-genou", label: "Douleur au genou" },
    { href: "/premiere-seance", label: "Votre première séance" },
  ],
  references: [
    {
      citation:
        "Brinjikji W, Luetmer PH, Comstock B, et al. Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR Am J Neuroradiol. 2015;36(4):811-816.",
      pmid: "25430861",
    },
    {
      citation:
        "Culvenor AG, Øiestad BE, Hart HF, et al. Prevalence of knee osteoarthritis features on magnetic resonance imaging in asymptomatic uninjured adults: a systematic review and meta-analysis. Br J Sports Med. 2019;53(20):1268-1278.",
      pmid: "29886437",
    },
    {
      citation:
        "Raja SN, Carr DB, Cohen M, et al. The revised International Association for the Study of Pain definition of pain: concepts, challenges, and compromises. Pain. 2020;161(9):1976-1982.",
      pmid: "32694387",
    },
    {
      citation:
        "Moseley GL, Butler DS. Fifteen years of explaining pain: the past, present, and future. J Pain. 2015;16(9):807-813.",
      pmid: "26051220",
    },
    {
      citation:
        "Watson JA, Ryan CG, Cooper L, et al. Pain neuroscience education for adults with chronic musculoskeletal pain: a mixed-methods systematic review and meta-analysis. J Pain. 2019;20(10):1140.e1-1140.e22.",
      pmid: "30831273",
    },
    {
      citation:
        "Louw A, Zimney K, Puentedura EJ, Diener I. The efficacy of pain neuroscience education on musculoskeletal pain: a systematic review of the literature. Physiother Theory Pract. 2016;32(5):332-355.",
      pmid: "27351541",
    },
  ],
};
