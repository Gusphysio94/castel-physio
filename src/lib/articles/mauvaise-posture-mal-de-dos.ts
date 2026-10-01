import type { Article } from "./types";

export const mauvaisePostureMalDeDos: Article = {
  kind: "mythe",
  audience: "patients",
  slug: "mauvaise-posture-mal-de-dos",
  title: "Mal de dos : la faute à votre posture ? Pas si simple",
  metaTitle: "Mal de dos et posture : faut-il se tenir droit ?",
  description:
    "Se tenir bien droit protège-t-il du mal de dos ou de nuque ? Ce que disent les études sur la posture, et ce qui aide vraiment : bouger, alterner, se renforcer.",
  excerpt:
    "On vous répète de vous tenir droit, mais les études ne confirment pas que la posture explique votre douleur.",
  isoDate: "2026-10-01",
  category: "Dos",
  myth: {
    claim:
      "Mon mal de dos (ou de nuque) vient de ma mauvaise posture : il faut que je me tienne bien droit.",
    verdict: "plutot-faux",
    oneLiner:
      "Il n'existe pas de posture idéale : ce qui fatigue le dos, c'est surtout de rester longtemps dans la même, pas de se tenir « mal ».",
    whyBelieved:
      "C'est logique de le penser : la douleur apparaît souvent après une longue journée assis, et on nous répète depuis l'enfance de nous tenir droit. Même certains soignants l'ont longtemps affirmé.",
    stats: [
      {
        value: "54 études",
        label: "passées en revue : aucun lien solide entre courbures du dos et douleur",
      },
      {
        value: "1 108 jeunes",
        label: "suivis : assis voûtés ou droits, autant de douleurs de nuque",
      },
      {
        value: "249 essais",
        label: "montrent que l'exercice soulage probablement le mal de dos durable",
      },
    ],
    doList: [
      "Changer de position souvent : alterner assis, debout, marche courte",
      "Vous lever quelques instants dès que la position commence à gêner",
      "Renforcer votre dos et votre nuque progressivement, par paliers",
      "Soigner votre sommeil et vos temps de récupération",
    ],
    dontList: [
      "Vous forcer à rester raide et « bien droit » pendant des heures",
      "Vous culpabiliser d'avoir le dos rond ou la tête en avant",
      "Rester immobile des heures en espérant que la douleur passe",
      "Passer outre une douleur qui augmente au lieu de doser",
    ],
  },
  takeaways: [
    "Aucune posture n'est « la bonne » : la meilleure est la prochaine.",
    "Dos rond ou tête en avant ne prédisent pas, à eux seuls, une douleur.",
    "Bougez souvent, alternez, puis renforcez : on dose, on remonte par paliers.",
  ],
  content: `On vous a peut-être dit cent fois « tiens-toi droit ! ». Et quand le dos tire en fin de journée, la posture semble la coupable idéale.

## Ce que montrent les études

Des chercheurs ont cherché un lien entre la forme du dos (creux lombaire, dos rond, tête en avant) et la douleur. Une grande revue de 54 études n'a trouvé **aucun lien solide** entre les courbures de la colonne et la douleur, même si ces études étaient de qualité modeste. Une méta-analyse plus récente observe un creux lombaire un peu plus plat chez les personnes douloureuses, mais cela ne dit pas si c'est une cause ou une conséquence : un dos qui fait mal a tendance à se raidir.

Chez 1 108 jeunes de 17 ans, ceux assis voûtés, tête en avant, n'avaient pas plus mal à la nuque que les autres. Cinq ans plus tard, chez les jeunes femmes, les postures plus relâchées n'étaient pas associées à plus de douleur persistante que la posture « bien droite ».

Une nuance : au travail, les postures très éloignées de la position neutre (très penché, tordu), tenues longtemps, sont associées à plus de mal de dos durable, avec un niveau de preuve modéré.

## Alors, que faire ?

Pensez à un canapé : même le plus confortable devient pénible au bout de trois heures. Ce n'est pas le canapé, c'est l'immobilité. Votre dos fonctionne de la même façon. La meilleure posture est donc **la prochaine**.

- Changez de position régulièrement, sans chercher la position parfaite.
- Si une position irrite, raccourcissez-la, puis reprenez-la par paliers.
- Renforcez : l'exercice soulage probablement le mal de dos durable.

Le stress et un mauvais sommeil rendent le dos plus sensible, sans que la posture y soit pour quelque chose. Si la douleur s'installe, je vous aide à la doser et à vous renforcer : voyez la page [lombalgie](/kinesitherapie/lombalgie) ou [cervicalgie](/kinesitherapie/cervicalgie), ou comment se passe [la première séance](/premiere-seance).`,
  related: [
    { href: "/kinesitherapie/lombalgie", label: "Lombalgie et douleurs du dos" },
    { href: "/kinesitherapie/cervicalgie", label: "Cervicalgie et douleurs de la nuque" },
    { href: "/premiere-seance", label: "Comment se passe la première séance" },
  ],
  references: [
    {
      citation:
        "Christensen ST, Hartvigsen J. Spinal curves and health: a systematic critical review of the epidemiological literature dealing with associations between sagittal spinal curves and health. J Manipulative Physiol Ther. 2008;31(9):690-714.",
      pmid: "19028253",
    },
    {
      citation:
        "Richards KV, Beales DJ, Smith AJ, et al. Neck posture clusters and their association with biopsychosocial factors and neck pain in Australian adolescents. Phys Ther. 2016;96(10):1576-1587.",
      pmid: "27174256",
    },
    {
      citation:
        "Richards KV, Beales DJ, Smith AL, et al. Is neck posture subgroup in late adolescence a risk factor for persistent neck pain in young adults? A prospective study. Phys Ther. 2021;101(3).",
      pmid: "33444448",
    },
    {
      citation:
        "Chun SW, Lim CY, Kim K, et al. The relationships between low back pain and lumbar lordosis: a systematic review and meta-analysis. Spine J. 2017;17(8):1180-1191.",
      pmid: "28476690",
    },
    {
      citation:
        "Jahn A, Andersen JH, Christiansen DH, et al. Occupational mechanical exposures as risk factor for chronic low-back pain: a systematic review and meta-analysis. Scand J Work Environ Health. 2023;49(7):453-465.",
      pmid: "37581384",
    },
    {
      citation:
        "Hayden JA, Ellis J, Ogilvie R, et al. Exercise therapy for chronic low back pain. Cochrane Database Syst Rev. 2021;9(9):CD009790.",
      pmid: "34580864",
    },
  ],
};
