import type { Article } from "./types";

export const vertebreDeplaceeRemettreEnPlace: Article = {
  slug: "vertebre-deplacee-remettre-en-place",
  kind: "mythe",
  audience: "patients",
  isoDate: "2026-10-01",
  category: "Dos",
  title: "Vertèbre déplacée ? Non : votre dos ne se « déboîte » pas",
  metaTitle: "Vertèbre déplacée : mythe ou réalité ?",
  description:
    "Le « crac » d'une manipulation est un bruit de gaz, pas un os qui se remet en place. Ce que disent les études sur les vertèbres « déplacées » et le mal de dos.",
  excerpt:
    "On vous a dit qu'une vertèbre était sortie ? Ce que la science dit du « crac » et de l'alignement va vous rassurer.",
  myth: {
    claim: "J'ai une vertèbre déplacée : il faut me la remettre en place.",
    verdict: "faux",
    oneLiner:
      "Vos vertèbres tiennent solidement en place : le « crac » est un bruit de gaz, et un dos douloureux est sensible, pas déboîté.",
    whyBelieved:
      "C'est logique de le penser : la douleur est localisée, le dos est raide, et un « crac » après une manipulation donne l'impression qu'un os est revenu. Cette image a longtemps été répétée, y compris par des soignants.",
    stats: [
      {
        value: "96 %",
        label: "des personnes de 80 ans sans mal de dos ont des disques « dégénérés » à l'imagerie : c'est l'âge, pas un déplacement",
      },
      {
        value: "9 211",
        label: "personnes dans la grande revue sur les manipulations : effet semblable aux autres traitements recommandés",
      },
    ],
    doList: [
      "Demander ce qu'on a réellement trouvé, et ce que cela change pour votre traitement",
      "Bouger en dosant : réduire ce qui irrite, garder ce qui est toléré, puis remonter par paliers",
      "Renforcer le dos et les jambes pour qu'ils tolèrent davantage",
      "Consulter rapidement si la douleur suit un choc violent ou s'accompagne de signes neurologiques",
    ],
    dontList: [
      "Croire que votre dos « sort » et qu'il faut le remettre en place à intervalles réguliers",
      "Vous immobiliser ou éviter tout mouvement par peur de « déplacer » quelque chose",
      "Chercher le « crac » à tout prix : il ne prouve rien",
      "Forcer à travers une douleur qui augmente",
    ],
  },
  takeaways: [
    "Vos vertèbres sont tenues par des disques, des ligaments et des muscles : elles ne se déboîtent pas lors d'un faux mouvement.",
    "Le « crac » est un bruit de gaz dans l'articulation, pas un os qui revient en place.",
    "Les manipulations peuvent soulager, avec un effet modeste comparable à d'autres traitements recommandés.",
  ],
  content: `## Ce que montrent les études

Imaginez une tour tenue par de nombreux haubans : vos vertèbres sont reliées par des disques, des ligaments très solides et des muscles puissants. Un faux mouvement ne les fait pas « sortir ». Un vrai déplacement ne survient qu'après un traumatisme violent (accident, grosse chute) et se reconnaît immédiatement : c'est une urgence médicale, tout autre chose qu'un mal de dos courant.

Et le « crac » ? Lors d'une étude par IRM en direct sur des articulations de doigts, des chercheurs ont observé qu'il correspond à la formation soudaine d'une petite cavité de gaz dans le liquide de l'articulation. Ce n'est pas un os qui revient à sa place.

Reste la question des asymétries. Une revue de 46 études conclut qu'on ne peut tirer aucune conclusion ferme : le bassin est un peu plus incliné chez les personnes douloureuses, mais la différence de longueur des jambes n'est pas plus fréquente chez elles que chez les autres. Une asymétrie n'explique donc pas, à elle seule, une douleur.

## Et les manipulations ?

Elles ne sont pas inutiles. Une méta-analyse de 47 essais (Rubinstein, BMJ 2019) montre que, dans la lombalgie chronique, elles ont des effets semblables à d'autres traitements recommandés. Une mise à jour Cochrane récente juge toutefois la certitude des preuves faible à très faible. Les effets indésirables rapportés sont surtout de courtes douleurs ou raideurs.

Elles peuvent donc soulager et faciliter le mouvement, mais elles ne « remettent » rien en place.

## Alors, que faire ?

Si on vous répète que votre dos « sort » régulièrement, vous apprenez à le croire fragile et à dépendre de quelqu'un pour le réparer. Un dos douloureux est surtout un dos sensible, souvent surchargé. On dose donc ses activités, on le renforce, puis on remonte par paliers. Pour aller plus loin : [lombalgie](/kinesitherapie/lombalgie), [cervicalgie](/kinesitherapie/cervicalgie) ou votre [première séance](/premiere-seance).`,
  related: [
    { href: "/kinesitherapie/lombalgie", label: "Lombalgie et douleurs du dos" },
    { href: "/kinesitherapie/cervicalgie", label: "Cervicalgie et douleurs du cou" },
    { href: "/premiere-seance", label: "Votre première séance" },
  ],
  references: [
    {
      citation:
        "Rubinstein SM, de Zoete A, van Middelkoop M, et al. Benefits and harms of spinal manipulative therapy for the treatment of chronic low back pain: systematic review and meta-analysis of randomised controlled trials. BMJ. 2019;364:l689.",
      pmid: "30867144",
    },
    {
      citation:
        "de Zoete A, Innocenti T, Petrozzi MJ, et al. Spinal manipulative therapy for adults with chronic low back pain. Cochrane Database Syst Rev. 2026;1(1):CD008112.",
      pmid: "41494147",
    },
    {
      citation:
        "Kawchuk GN, Fryer J, Jaremko JL, et al. Real-time visualization of joint cavitation. PLoS One. 2015;10(4):e0119470.",
      pmid: "25875374",
    },
    {
      citation:
        "Sugavanam T, Sannasi R, Anand PA, et al. Postural asymmetry in low back pain: a systematic review and meta-analysis of observational studies. Disabil Rehabil. 2024;47(7):1659-1676.",
      pmid: "39166267",
    },
    {
      citation:
        "Brinjikji W, Luetmer PH, Comstock B, et al. Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR Am J Neuroradiol. 2015;36(4):811-816.",
      pmid: "25430861",
    },
    {
      citation:
        "Foster NE, Anema JR, Cherkin D, et al. Prevention and treatment of low back pain: evidence, challenges, and promising directions. Lancet. 2018;391(10137):2368-2383.",
      pmid: "29573872",
    },
  ],
};
