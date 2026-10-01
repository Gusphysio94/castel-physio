import type { Condition } from "./types";

export const lombalgie: Condition = {
  slug: "lombalgie",
  label: "Lombalgie et douleurs du dos",
  title: "Lombalgie, sciatique et mal de dos : kiné à Bruxelles",
  description:
    "Lumbago, lombalgie, sciatique, hernie discale, dorsalgie : comprendre votre mal de dos et ce que la kinésithérapie peut vraiment vous apporter, à Bruxelles.",
  h1: "Lombalgie et douleurs du dos : comprendre, bouger, reprendre confiance",
  lead:
    "Le mal de dos est très fréquent, souvent impressionnant, et dans la grande majorité des cas il ne révèle pas de lésion grave. Je vous aide à comprendre ce qui se passe, à doser vos activités pour rester actif sans aggraver la douleur, et à retrouver confiance dans votre dos, que la douleur soit récente ou installée depuis longtemps.",
  takeaway:
    "Un dos douloureux n'est presque jamais un dos « cassé » ni « usé » : c'est un dos sensible, souvent surchargé à un moment donné. Il ne s'agit ni de l'immobiliser, ni de forcer malgré la douleur, mais de doser vos activités et de le renforcer pour qu'il en tolère davantage.",
  subtypeGroups: [
    {
      heading: "Douleur du bas du dos",
      items: [
        { name: "Lumbago", note: "Douleur lombaire aiguë, souvent brutale" },
        { name: "Lombalgie aiguë", note: "Moins de 6 semaines environ" },
        { name: "Lombalgie commune (non spécifique)", note: "Sans cause précise identifiée : la plus fréquente" },
        { name: "Lombalgie chronique", note: "Douleur présente depuis plus de 3 mois" },
        { name: "Lombalgie récidivante", note: "Épisodes qui reviennent" },
        { name: "Arthrose lombaire", note: "Discarthrose, arthrose interapophysaire postérieure" },
        { name: "Syndrome facettaire", note: "Douleur attribuée aux petites articulations vertébrales" },
        { name: "Discopathie lombaire", note: "Terme d'imagerie fréquent, souvent banal" },
        { name: "Spondylolyse / spondylolisthésis", note: "Fréquent chez le sportif jeune (gymnastique, football)" },
        { name: "Douleur sacro-iliaque", note: "Douleur basse, près du bassin" },
      ],
    },
    {
      heading: "Douleur qui descend dans la jambe",
      items: [
        { name: "Sciatique (radiculopathie L5 ou S1)", note: "Douleur dans la jambe, parfois jusqu'au pied" },
        { name: "Névralgie sciatique" },
        { name: "Cruralgie (radiculopathie L3 ou L4)", note: "Douleur à l'avant de la cuisse" },
        { name: "Hernie discale lombaire", note: "Avec ou sans sciatique" },
        { name: "Canal lombaire étroit", note: "Douleur à la marche, soulagée assis" },
        { name: "Post-opératoire du dos", note: "Après hernie discale, arthrodèse ou canal étroit", href: "/kinesitherapie/reeducation-post-operatoire" },
      ],
    },
    {
      heading: "Autres douleurs du dos et situations particulières",
      items: [
        { name: "Dorsalgie", note: "Douleur du haut ou du milieu du dos" },
        { name: "Douleur lombaire du sportif", note: "Golf, course, aviron, cyclisme, tennis" },
        { name: "Lombalgie de la femme enceinte ou du post-partum", note: "Douleur lombaire ou du bassin" },
        { name: "Douleur lombaire liée au travail", note: "Station assise prolongée, port de charges" },
      ],
    },
  ],
  sections: [
    {
      heading: "Le dos est solide, et la douleur est trompeuse",
      paragraphs: [
        "On dit « lombalgie » pour toute douleur du bas du dos. Dans la très grande majorité des cas, on ne peut pas pointer une structure précise responsable : on parle de lombalgie « non spécifique » ou « commune ». Ce n'est pas un échec du diagnostic. Cela signifie que le dos, une région conçue pour supporter beaucoup de charges, est devenu sensible, parfois à la suite d'un effort inhabituel, parfois sans raison évidente.",
        "La douleur est une décision protectrice du cerveau, qui tient compte de nombreux éléments : les tissus, mais aussi le sommeil, le stress, les inquiétudes, les expériences passées. Voilà pourquoi la douleur peut être très forte sans qu'aucun dégât ne soit en cause.",
      ],
    },
    {
      heading: "L'imagerie montre l'âge du dos, pas forcément sa douleur",
      paragraphs: [
        "Pensez aux rides ou aux cheveux gris : ils renseignent sur l'âge, pas sur la santé. Il en va de même pour les images du dos. Une revue de la littérature de 2015 (Brinjikji et al.) a regroupé des personnes sans aucun mal de dos : une dégénérescence de disque apparaissait chez 37 % des personnes de 20 ans et 96 % de celles de 80 ans, et un bombement de disque chez 30 % à 20 ans et 84 % à 80 ans.",
        "Cela ne veut pas dire que ces images n'ont jamais d'importance : certaines sont un peu plus fréquentes chez les personnes douloureuses. Mais elles ne suffisent presque jamais à expliquer la douleur, ni à prédire son évolution. C'est pourquoi le bilan clinique, c'est-à-dire l'examen et votre histoire, compte davantage que l'image.",
      ],
    },
  ],
  myths: [
    {
      myth: "« Il faut que je me repose et que j'évite de me pencher ou de porter. »",
      reality: [
        "En cas de lombalgie aiguë, les essais randomisés montrent que conseiller de rester actif donne de légers meilleurs résultats que conseiller le repos au lit. En cas de sciatique, la différence est faible, mais le repos ne fait pas mieux.",
        "Ménager son dos quelques jours est compréhensible. Mais l'objectif n'est ni le repos prolongé, ni de reprendre comme si de rien n'était : on dose. On réduit ce qui aggrave la douleur le temps qu'elle se calme, puis on reprend progressivement, y compris se pencher et porter en douceur, pendant que le dos se renforce.",
      ],
    },
    {
      myth: "« L'IRM montre pourquoi j'ai mal : ma hernie ou mon disque explique tout. »",
      reality: [
        "Les images du dos montrent surtout l'âge : une dégénérescence de disque est présente chez 37 % des personnes de 20 ans sans douleur et chez 96 % de celles de 80 ans (Brinjikji et al., 2015). Les lire comme des « dégâts » est trompeur.",
        "Chez la grande majorité des personnes, on ne peut pas identifier de cause précise à la douleur. L'image prend son sens avec l'examen clinique et votre histoire.",
      ],
    },
    {
      myth: "« Mon dos est fragile : il faut le protéger avec une ceinture. »",
      reality: [
        "Les ceintures lombaires n'ont pas montré de bénéfice pour prévenir la lombalgie. Ce qui semble réduire le risque d'un nouvel épisode, c'est l'exercice, seul ou associé à de l'éducation.",
        "Un dos douloureux reste un dos capable de bouger et de se renforcer. Une ceinture peut rassurer brièvement, mais ne doit pas remplacer le mouvement.",
      ],
    },
    {
      myth: "« Plus j'ai mal, plus c'est grave. »",
      reality: [
        "L'intensité de la douleur ne mesure pas l'importance d'un dégât. Les causes graves (fracture, infection, tumeur) ne concernent qu'une petite proportion des personnes, et elles s'accompagnent le plus souvent de signes d'alerte précis.",
        "Une douleur initiale intense, de la détresse ou de l'inquiétude augmentent le risque que la douleur persiste. C'est une raison d'être bien accompagné, pas d'avoir peur.",
      ],
    },
  ],
  careIntro:
    "Les recommandations internationales sont cohérentes : éducation, activité, exercice, et prise en compte de toute la personne. Voici comment je procède au cabinet.",
  care: [
    {
      title: "Un bilan complet",
      text: "Nous commençons par votre histoire, votre quotidien, votre travail, vos activités sportives et vos inquiétudes. Je vérifie que rien ne nécessite un avis médical rapide, puis je cherche ce qui aggrave ou soulage votre douleur.",
    },
    {
      title: "Comprendre pour moins craindre",
      text: "J'explique ce que l'on sait de votre douleur, ce que l'imagerie dit et ne dit pas, et pourquoi un dos douloureux n'est pas un dos fragile, mais un dos qui se remet à l'effort par paliers, bien dosés. L'éducation est une vraie intervention : elle réduit la peur, qui entretient souvent la douleur.",
    },
    {
      title: "Reprendre le mouvement et l'activité",
      text: "Dès que possible, nous réintroduisons la marche et les mouvements que vous évitez. La progression est graduelle, adaptée à votre douleur du moment : on ne vise pas une douleur à zéro avant de reprendre, mais on ne force pas non plus à travers une douleur qui s'aggrave. Quand une activité irrite, on la dose (durée, intensité, fréquence) plutôt que de la supprimer ou de s'obstiner, pendant que le renforcement augmente ce que le dos tolère.",
    },
    {
      title: "Un programme d'exercices qui vous ressemble",
      text: "Renforcement, endurance, mobilité, travail de contrôle moteur : on choisit ce qui a du sens pour vous et que vous aurez envie de poursuivre. Il n'existe pas d'exercice miracle, et le meilleur programme est souvent celui que l'on tient dans le temps.",
    },
    {
      title: "Thérapie manuelle, en complément",
      text: "Elle peut apaiser la douleur à court terme et faciliter le mouvement, mais ne remplace pas l'exercice. Je l'utilise comme un appui pour pouvoir bouger plus librement, jamais comme seule solution.",
    },
    {
      title: "Charge, sport, travail et prévention",
      text: "Nous planifions la reprise du travail, du sport ou des loisirs avec une montée en charge réaliste, et nous construisons un plan pour limiter les rechutes. Je peux aussi vous accompagner en téléconsultation entre deux séances, et travailler avec votre médecin si nécessaire.",
    },
  ],
  redFlags: [
    "Douleur apparue après un traumatisme important (chute, accident), surtout après 50 ans ou en cas d'ostéoporose connue",
    "Difficulté à uriner ou perte de contrôle de la vessie ou de l'intestin, ou engourdissement entre les jambes (région du siège)",
    "Faiblesse marquée ou qui s'aggrave dans une ou les deux jambes, pied qui « traîne »",
    "Fièvre, frissons, ou perte de poids inexpliquée, surtout avec un antécédent de cancer ou d'infection",
    "Douleur intense, constante, qui ne change pas avec la position et vous réveille la nuit",
    "Douleur qui s'aggrave rapidement malgré le repos et un traitement adapté",
  ],
  faq: [
    {
      q: "Dois-je me reposer quand j'ai mal au dos ?",
      a: [
        "Non, pas longtemps. Quelques heures ou une journée à ménager votre dos si la douleur est vive, c'est compréhensible. Mais les essais randomisés montrent qu'en cas de lombalgie aiguë, conseiller de rester actif donne de légers meilleurs résultats que conseiller le repos au lit.",
        "En cas de sciatique, la différence est plus faible, mais le repos ne fait pas mieux. Bougez, marchez, mais en dosant : on évite ce qui aggrave nettement la douleur, on garde ce qui est toléré, et on augmente peu à peu. Cela ne veut pas dire passer outre une douleur vive : si elle monte ou persiste, c'est le signe de réduire la dose.",
      ],
    },
    {
      q: "Faut-il faire une IRM ou une radio ?",
      a: [
        "Pas dans la plupart des cas, surtout au début. Une revue de 2015 (Brinjikji et al.) a montré que des anomalies comme la dégénérescence ou le bombement de disque sont très fréquentes chez des personnes sans douleur : dégénérescence de disque chez 37 % des personnes de 20 ans et 96 % de celles de 80 ans.",
        "Une image peut donc inquiéter pour rien. Elle est utile en présence de signes d'alerte, d'une douleur qui ne s'améliore pas ou quand une chirurgie ou une infiltration est envisagée. C'est votre médecin qui en décide.",
      ],
    },
    {
      q: "Combien de temps dure une lombalgie aiguë, et va-t-elle revenir ?",
      a: [
        "Beaucoup d'épisodes s'améliorent nettement en quelques semaines, mais cela dépend de chacun. Les études de suivi montrent aussi qu'une part non négligeable de personnes ont encore une douleur à un an, et que les récidives sont fréquentes. Il serait malhonnête de promettre une guérison définitive.",
        "Ce qui aide à limiter les récidives : un dos entraîné (exercice, seul ou avec éducation), une activité régulière et des habitudes de vie équilibrées.",
      ],
    },
    {
      q: "J'ai une sciatique : combien de temps ça dure, et faut-il opérer ?",
      a: [
        "Les sciatiques liées à une hernie discale s'améliorent souvent avec le temps, et les hernies elles-mêmes peuvent diminuer de volume. Le rythme varie beaucoup : certaines personnes vont mieux en quelques semaines, d'autres plus lentement, et la douleur peut parfois persister.",
        "La chirurgie est discutée avec un médecin ou un chirurgien lorsque la douleur reste très importante malgré un traitement bien conduit, ou en cas de déficit neurologique important ou qui s'aggrave. Dans les essais, elle soulage plus vite que le traitement non chirurgical, mais sans que l'on sache si le résultat final diffère nettement.",
      ],
    },
    {
      q: "Une ceinture lombaire peut-elle m'aider ?",
      a: [
        "Pour la prévention, les ceintures n'apportent pas de bénéfice démontré. Pour traiter une lombalgie, les données restent peu concluantes. Pendant la grossesse, les preuves sont aussi insuffisantes.",
        "Une ceinture peut rassurer quelques jours pendant une crise, mais le port prolongé n'est pas recommandé : le dos a surtout besoin de bouger et de se renforcer.",
      ],
    },
    {
      q: "Les manipulations et la thérapie manuelle fonctionnent-elles ?",
      a: [
        "Les preuves sont modestes. Pour la lombalgie chronique, une grande méta-analyse (Rubinstein et al., BMJ 2019) conclut que les manipulations donnent des effets comparables à d'autres traitements recommandés, avec un petit avantage par rapport aux traitements non recommandés. Pour la lombalgie aiguë, la preuve est faible.",
        "La thérapie manuelle peut soulager à court terme et faciliter le mouvement. Je l'utilise donc en complément, mais jamais seule : l'exercice et l'éducation restent la base.",
      ],
    },
    {
      q: "Quels exercices dois-je faire ?",
      a: [
        "Il n'y a pas d'exercice miracle. Les revues systématiques montrent que l'exercice aide la lombalgie chronique, avec peu de différences entre les types : renforcement, aérobie, yoga, contrôle moteur, etc. Le meilleur est celui qui vous convient et que vous poursuivrez.",
        "La marche est un excellent point de départ. Pour le reste, nous construisons ensemble un programme qui progresse à votre rythme.",
      ],
    },
    {
      q: "Pourquoi ma douleur dure-t-elle depuis des mois, alors qu'on ne voit rien ?",
      a: [
        "Quand une douleur persiste, le système nerveux devient plus sensible et la douleur dépend de plus en plus de facteurs comme le sommeil, le stress, l'humeur, la peur de bouger. Ce n'est pas « dans la tête » : c'est une douleur réelle, influencée par tout ce qui vous entoure.",
        "L'approche recommandée combine donc exercice, éducation et, si besoin, accompagnement psychologique. Dormir mieux, bouger régulièrement et reprendre peu à peu ce que vous évitez comptent autant que le traitement lui-même.",
      ],
    },
    {
      q: "Le travail assis ou la mauvaise posture abîment-ils mon dos ?",
      a: [
        "Il n'y a pas de posture parfaite, et rester assis ne « casse » pas le dos. En revanche, rester immobile longtemps rend souvent le dos plus raide et plus sensible. Changer de position, se lever régulièrement, marcher et aménager un peu son poste aident davantage que chercher à « se tenir droit ».",
        "Si votre travail est physique, nous pouvons aussi planifier une reprise progressive, en lien avec votre médecin ou votre employeur si nécessaire.",
      ],
    },
    {
      q: "Quand reprendre le sport, et qu'en est-il des infiltrations et des médicaments ?",
      a: [
        "La reprise du sport se fait par paliers, sans forcément attendre que la douleur ait totalement disparu. On commence avec une dose réduite, puis on la remonte pendant que vous renforcez le dos : une gêne légère qui redescend rapidement peut se tolérer, mais une douleur qui s'aggrave ou qui dure signifie que la dose était trop haute. Nous adaptons la charge selon votre sport (golf, course, aviron…).",
        "Les anti-inflammatoires, les infiltrations ou d'autres traitements peuvent avoir leur place dans certains cas, mais ils se discutent avec votre médecin, qui connaît vos antécédents et les risques.",
      ],
    },
  ],
  related: [
    { href: "/blog/approche-biopsychosociale-kinesitherapie", label: "Article : l'approche biopsychosociale en kinésithérapie" },
    { href: "/kinesitherapie/cervicalgie", label: "Cervicalgie et douleurs du cou" },
    { href: "/kinesitherapie/reeducation-post-operatoire", label: "Rééducation post-opératoire" },
    { href: "/kinesitherapie/woluwe-saint-lambert", label: "Kiné du sport à Woluwe-Saint-Lambert" },
  ],
  references: [
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
    {
      citation:
        "George SZ, Fritz JM, Silfies SP, et al. Interventions for the management of acute and chronic low back pain: revision 2021. J Orthop Sports Phys Ther. 2021;51(11):CPG1-CPG60.",
      pmid: "34719942",
    },
    {
      citation:
        "Qaseem A, Wilt TJ, McLean RM, et al. Noninvasive treatments for acute, subacute, and chronic low back pain: a clinical practice guideline from the American College of Physicians. Ann Intern Med. 2017;166(7):514-530.",
      pmid: "28192789",
    },
    {
      citation:
        "Hayden JA, Ellis J, Ogilvie R, et al. Exercise therapy for chronic low back pain. Cochrane Database Syst Rev. 2021;9(9):CD009790.",
      pmid: "34580864",
    },
    {
      citation:
        "Rubinstein SM, de Zoete A, van Middelkoop M, et al. Benefits and harms of spinal manipulative therapy for the treatment of chronic low back pain: systematic review and meta-analysis of randomised controlled trials. BMJ. 2019;364:l689.",
      pmid: "30867144",
    },
    {
      citation:
        "Dahm KT, Brurberg KG, Jamtvedt G, et al. Advice to rest in bed versus advice to stay active for acute low-back pain and sciatica. Cochrane Database Syst Rev. 2010;(6):CD007612.",
      pmid: "20556780",
    },
    {
      citation:
        "Itz CJ, Geurts JW, van Kleef M, et al. Clinical course of non-specific low back pain: a systematic review of prospective cohort studies set in primary care. Eur J Pain. 2013;17(1):5-15.",
      pmid: "22641374",
    },
    {
      citation:
        "Steffens D, Maher CG, Pereira LSM, et al. Prevention of low back pain: a systematic review and meta-analysis. JAMA Intern Med. 2016;176(2):199-208.",
      pmid: "26752509",
    },
    {
      citation:
        "Gibson JNA, Waddell G. Surgical interventions for lumbar disc prolapse. Cochrane Database Syst Rev. 2007;(2):CD001350.",
      pmid: "17443505",
    },
  ],
};
