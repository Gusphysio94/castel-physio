import type { Condition } from "./types";

export const douleurEpaule: Condition = {
  slug: "douleur-epaule",
  label: "Douleur d'épaule",
  title: "Douleur d'épaule : traitement et rééducation à Bruxelles",
  description:
    "Coiffe des rotateurs, conflit sous-acromial, épaule gelée, luxation, acromio-claviculaire : comprendre votre épaule et la rééduquer à Woluwe-Saint-Lambert.",
  h1: "Douleur d'épaule : comprendre et retrouver une épaule qui fait confiance",
  lead:
    "Une épaule qui fait mal en levant le bras, en s'habillant ou la nuit, c'est très inconfortable, et le mot de l'imagerie peut inquiéter. Dans la plupart des cas, il n'y a pas d'épaule « cassée » : il y a une épaule sensible, qui supporte moins bien la charge du moment et qui peut se réadapter. Voici comment j'aborde cela au cabinet, sur la base de ce que dit la recherche.",
  takeaway:
    "Même avec un « conflit » ou une « rupture » sur l'imagerie, une épaule douloureuse s'améliore souvent sans opération, grâce à une charge progressive et bien dosée.",
  subtypeGroups: [
    {
      heading: "Douleur de la coiffe et du dessus de l'épaule",
      items: [
        {
          name: "Syndrome douloureux sous-acromial / conflit sous-acromial",
          note: "Douleur en levant le bras, surtout entre l'horizontale et le haut",
        },
        { name: "Bursite sous-acromiale / sous-deltoïdienne", note: "Ancien terme, souvent une douleur de la coiffe" },
        { name: "Douleur d'épaule liée à la coiffe (RCRSP)", note: "Terme actuel regroupant ces tableaux" },
        {
          name: "Tendinopathie de la coiffe des rotateurs (sus-épineux, sous-épineux, sous-scapulaire)",
          href: "/kinesitherapie/tendinopathie",
        },
        { name: "Tendinopathie du long biceps", note: "Douleur à l'avant de l'épaule", href: "/kinesitherapie/tendinopathie" },
        { name: "Tendinopathie calcifiante (calcification de la coiffe)", note: "Dépôt de calcium visible à la radio" },
        {
          name: "Rupture partielle ou complète de la coiffe",
          note: "Traitement non opératoire ou après réparation",
        },
      ],
    },
    {
      heading: "Raideur et usure de l'articulation",
      items: [
        { name: "Capsulite rétractile (épaule gelée)", note: "Épaule douloureuse puis raide dans tous les sens" },
        { name: "Arthrose gléno-humérale (omarthrose)" },
        { name: "Arthrose acromio-claviculaire", note: "Douleur au sommet de l'épaule, en haut" },
      ],
    },
    {
      heading: "Instabilité et traumatismes",
      items: [
        { name: "Luxation de l'épaule (gléno-humérale), traumatique ou non", note: "Premier épisode ou récidives" },
        { name: "Instabilité gléno-humérale (épaule qui « sort » ou « lâche »)" },
        { name: "Lésion du labrum / lésion de Bankart / lésion SLAP" },
        { name: "Entorse ou luxation acromio-claviculaire", note: "Chute sur l'épaule, bosse au sommet" },
        {
          name: "Fracture de la clavicule ou de l'humérus : rééducation après immobilisation",
        },
      ],
    },
    {
      heading: "Sport, chirurgie et douleur venue d'ailleurs",
      items: [
        {
          name: "Douleur d'épaule du nageur, du lanceur ou du sportif « overhead »",
          note: "Y compris dyskinésie scapulaire",
        },
        {
          name: "Épaule douloureuse après chirurgie (coiffe, stabilisation, prothèse)",
          href: "/kinesitherapie/reeducation-post-operatoire",
        },
        {
          name: "Douleur d'épaule d'origine cervicale (cervico-brachialgie)",
          note: "À différencier d'une vraie douleur de l'épaule",
          href: "/kinesitherapie/cervicalgie",
        },
      ],
    },
  ],
  sections: [
    {
      heading: "Une épaule mobile avant tout",
      paragraphs: [
        "L'épaule est l'articulation la plus mobile du corps. Imaginez une balle de golf posée sur un tee : elle bouge dans toutes les directions, mais elle tient grâce aux muscles autour, en particulier ceux de la coiffe des rotateurs. Ce sont eux qui la guident et la maintiennent, bien plus que les os.",
        "Cette liberté a un prix : l'épaule demande de la capacité musculaire pour les charges d'aujourd'hui, au travail, au sport ou à la maison. Quand la charge dépasse un temps ce que l'épaule tolère, elle devient sensible. On parle aujourd'hui de douleur d'épaule liée à la coiffe (RCRSP) pour regrouper ce que l'on appelait « conflit » ou « bursite ».",
      ],
    },
    {
      heading: "Ce que l'imagerie montre, et ce qu'elle ne dit pas",
      paragraphs: [
        "Les anomalies de la coiffe sont fréquentes, y compris chez des personnes sans douleur. Dans une revue de 2025, des ruptures complètes étaient vues à l'échographie chez 11 à 17 % des épaules sans douleur de deux échantillons de population, avec un niveau de preuve faible. L'image seule ne dit donc pas ce qui fait mal.",
        "Votre histoire, vos gestes douloureux, votre force et votre mobilité dans le bilan sont souvent plus parlants. Et la douleur dépend aussi du sommeil, du stress, de ce que vous craignez pour votre épaule et de votre niveau d'activité.",
      ],
    },
  ],
  myths: [
    {
      myth: "« Mon épaule est coincée, un os frotte sur le tendon. »",
      reality: [
        "On vous a peut-être dit qu'un os pinçait le tendon quand vous levez le bras. Cette image est tenace, mais elle ne tient pas bien face aux essais cliniques : dans les essais où l'on a « fait de la place » par chirurgie (décompression sous-acromiale), les résultats n'ont pas dépassé ceux d'une fausse opération, où l'on regarde l'épaule sans enlever d'os, ni ceux d'un programme d'exercice.",
        "Une revue Cochrane conclut même, avec un haut niveau de preuve, que cette opération n'apporte pas de bénéfice cliniquement important par rapport au placebo. Ce qui compte semble être la capacité de l'épaule, pas l'espace qu'on lui a creusé.",
      ],
    },
    {
      myth: "« Je dois laisser mon épaule au repos complet. »",
      reality: [
        "Calmer un geste très irritant quelques jours aide, mais une épaule immobilisée trop longtemps perd en force et en mobilité, et la douleur revient souvent à la reprise. Toutes les recommandations de pratique clinique sur les atteintes de la coiffe retiennent un programme d'exercices actif comme base du traitement.",
        "On ne cherche donc ni à la laisser au repos, ni à forcer malgré la douleur : on trouve la charge que l'épaule tolère aujourd'hui, on réduit les gestes qui l'irritent le temps qu'elle se calme, puis on fait monter la charge pas à pas pendant que vous la renforcez.",
      ],
    },
    {
      myth: "« Une rupture de la coiffe veut dire opération obligatoire. »",
      reality: [
        "Pas forcément, mais les études ne vont pas toutes dans le même sens. Dans un essai randomisé auprès de personnes de plus de 55 ans avec une petite rupture du sus-épineux, non liée à un accident, le résultat de la kinésithérapie seule n'était pas différent de celui de la chirurgie, avec un suivi de plus de cinq ans. Une revue Cochrane est dans le même sens : la réparation chirurgicale n'apporte peut-être que peu de bénéfice par rapport au traitement sans opération, pour des déchirures surtout petites et dégénératives. À l'inverse, un autre essai suivi pendant 15 ans chez des personnes ayant une rupture petite à moyenne a trouvé de meilleurs résultats après réparation, même si une partie du groupe traité par kinésithérapie avait fini par être opérée.",
        "Ce n'est pas le cas de toutes les ruptures : une rupture brutale après un traumatisme, chez une personne jeune ou une rupture étendue, se discute différemment avec le chirurgien.",
      ],
    },
    {
      myth: "« L'IRM va me montrer ce qui me fait mal. »",
      reality: [
        "L'IRM ou l'échographie montrent des structures, pas la douleur. Une anomalie peut exister sans que l'épaule soit douloureuse, et inversement. Les chiffres varient fortement d'une étude à l'autre, avec une certitude faible, ce qui montre à quel point l'image est difficile à interpréter seule.",
        "L'imagerie garde sa place quand on suspecte une fracture, une rupture importante après un traumatisme, ou quand une décision chirurgicale est envisagée. C'est votre médecin qui en juge.",
      ],
    },
    {
      myth: "« Il faut absolument éviter de lever le bras. »",
      reality: [
        "Lever le bras ne « use » pas l'épaule. Éviter totalement certains mouvements entretient souvent la peur et la raideur. On réduit plutôt, au début, ce qui irrite le plus, puis on réintroduit le mouvement progressivement pendant que l'épaule se renforce. Cela ne veut pas dire lever le bras à fond malgré la douleur : on dose, avec des repères clairs. Au cours d'un exercice dosé, une gêne légère qui se calme dans les 24 heures peut être tolérée ; si la douleur dure ou augmente, la dose était trop haute et on la redescend.",
      ],
    },
  ],
  careIntro:
    "Le but n'est pas de vous mettre à l'arrêt ni de forcer, mais de trouver ce que votre épaule tolère aujourd'hui, de la remettre en confiance et de la rendre plus capable que la veille, pas à pas.",
  care: [
    {
      title: "Un bilan complet",
      text: "Nous reprenons votre histoire (chute, effort inhabituel, début progressif), vos gestes douloureux, votre sommeil et votre travail. Je teste la mobilité, la force et la stabilité de l'épaule, et j'examine aussi le cou et le haut du dos, car une douleur d'épaule peut venir de là. J'écarte les signes qui demandent un avis médical.",
    },
    {
      title: "Éducation et gestion de la charge",
      text: "Je vous explique ce qui se passe dans votre épaule et ce qu'il est possible de faire, en vous rassurant sur ce que l'imagerie montre. Nous adaptons vos gestes au travail, au sport et à la maison plutôt que de tout arrêter, et nous trouvons des positions de sommeil plus confortables.",
    },
    {
      title: "Exercices progressifs pour la coiffe et l'omoplate",
      text: "C'est le cœur du travail : des exercices de force et de contrôle du mouvement, d'abord simples et peu chargés, puis plus lourds et plus fonctionnels. Les revues placent l'exercice parmi les traitements ayant le plus de preuves pour la douleur de coiffe, même si l'essai GRASP n'a pas trouvé de supériorité d'un programme complet sur un conseil bien donné. Le meilleur programme est donc celui que vous ferez vraiment, adapté à vous.",
    },
    {
      title: "Retrouver la mobilité quand l'épaule est raide",
      text: "Pour une épaule gelée, j'adapte les mouvements à votre niveau d'irritabilité du moment, avec des exercices à faire seul entre les séances. Pour l'instabilité, le travail porte sur le contrôle et la force plutôt que sur la souplesse.",
    },
    {
      title: "Reprise du travail et du sport par paliers",
      text: "Gestes au-dessus de la tête, port de charges, natation, lancer, raquette : nous les réintroduisons selon vos réactions, avec un coaching sportif si vous le souhaitez, jusqu'à votre niveau d'avant ou à celui que vous visez.",
    },
    {
      title: "Compléments et lien avec votre médecin ou chirurgien",
      text: "La thérapie manuelle peut soulager à court terme et se propose en complément, pas en solution principale. Si l'évolution tarde, ou en cas de rupture, d'instabilité ou de chirurgie, je travaille avec votre médecin ou votre chirurgien. Après une opération, la rééducation suit le protocole de votre chirurgien.",
    },
  ],
  redFlags: [
    "Douleur soudaine après une chute ou un choc, avec déformation visible de l'épaule ou de la clavicule : urgence",
    "Impossibilité de lever le bras après une chute, ou perte de force brutale : consultez rapidement",
    "Épaule chaude, rouge, gonflée avec fièvre ou grande fatigue : possible infection de l'articulation (arthrite septique), urgence médicale",
    "Douleur intense la nuit sans lien avec le mouvement, ou perte de poids inexpliquée, surtout si vous avez un antécédent de cancer",
    "Douleur dans la poitrine, l'épaule ou le bras gauche avec essoufflement, sueurs ou malaise : appelez les secours (112)",
    "Fourmillements, engourdissement ou faiblesse du bras ou de la main qui s'installent ou s'aggravent",
  ],
  faq: [
    {
      q: "Faut-il faire une échographie ou une IRM ?",
      a: [
        "Pas toujours, et souvent pas en premier. Les anomalies de la coiffe sont courantes, y compris sur des épaules qui ne font pas mal : dans une revue de 2025, des ruptures complètes étaient décrites à l'échographie chez 11 à 17 % des épaules sans douleur de deux échantillons de population, avec un niveau de preuve faible.",
        "L'imagerie est utile après un traumatisme, si l'on suspecte une fracture ou une rupture importante, ou si une chirurgie est envisagée. C'est à votre médecin d'en décider.",
      ],
    },
    {
      q: "Quand faut-il opérer : rupture de la coiffe, « conflit » ?",
      a: [
        "Pour les petites ruptures dégénératives, souvent du sus-épineux, une revue Cochrane indique que la chirurgie n'apporte peut-être que peu de bénéfice par rapport aux exercices (certitude faible). Un essai auprès de personnes de plus de 55 ans l'a confirmé sur plus de cinq ans, mais un autre essai suivi pendant 15 ans a trouvé de meilleurs résultats après réparation d'une rupture petite à moyenne : la littérature est partagée. Une rupture traumatique, étendue ou chez une personne jeune se discute avec le chirurgien, et on peut d'abord essayer plusieurs semaines de rééducation.",
        "Pour l'opération qui « fait de la place » (décompression sous-acromiale), les meilleures données disent non : dans l'essai CSAW elle n'a pas fait mieux qu'une arthroscopie sans le geste chirurgical, et dans FIMPACT, après 10 ans, elle n'a pas fait mieux que la fausse opération ni que l'exercice.",
      ],
    },
    {
      q: "Que penser des infiltrations de corticoïdes ?",
      a: [
        "Elles peuvent soulager à court terme, et les recommandations les mentionnent comme option possible pour calmer la douleur. Mais dans l'essai GRASP, une infiltration sous-acromiale n'a pas apporté de bénéfice sur 12 mois par rapport à l'absence d'infiltration, chez des personnes avec une douleur de coiffe.",
        "À l'inverse, pour l'épaule gelée, une revue a trouvé qu'une infiltration dans l'articulation était associée à de meilleurs résultats à court terme, surtout débutée tôt et associée à des exercices. Cela se décide avec votre médecin.",
      ],
    },
    {
      q: "Mon épaule est gelée : combien de temps cela dure-t-il ?",
      a: [
        "Souvent plusieurs mois, parfois plus d'un an, et la durée varie beaucoup. On a longtemps dit que l'épaule traversait trois phases puis guérissait seule et complètement. Une revue systématique a trouvé que cette idée n'est pas bien soutenue : sans traitement, l'amélioration est souvent partielle, et c'est surtout au début qu'elle survient.",
        "Dans un grand essai britannique, la kinésithérapie structurée associée à une infiltration, la manipulation sous anesthésie et la libération chirurgicale donnaient des résultats cliniquement comparables à un an. On commence donc généralement par les options les moins invasives.",
      ],
    },
    {
      q: "Comment dormir avec une épaule douloureuse ?",
      a: [
        "Évitez de dormir sur l'épaule douloureuse si c'est ce qui la réveille. Sur le dos, un petit coussin sous le coude ou l'avant-bras soulage souvent. Sur le côté sain, vous pouvez poser l'épaule douloureuse sur un oreiller devant vous.",
        "Il n'existe pas de position qui convienne à tout le monde, et les études sur ce point restent limitées. Le sommeil joue aussi sur la douleur, donc cela vaut la peine d'y travailler dès le début.",
      ],
    },
    {
      q: "Quels exercices faire, et peut-on avoir mal pendant ?",
      a: [
        "Les exercices dépendent de votre diagnostic. Pour la coiffe, il s'agit souvent d'un renforcement progressif de la coiffe et des muscles de l'omoplate, avec un travail de contrôle du mouvement. Les revues ne désignent pas un exercice unique qui l'emporterait sur les autres.",
        "Dans un programme dosé avec votre kiné, une douleur légère à modérée pendant l'exercice peut être tolérée, si elle redescend à son niveau habituel dans les 24 heures. Sinon, on réduit. Cela ne veut pas dire qu'il faut serrer les dents : si une douleur vive ou qui s'installe apparaît, on s'arrête et on adapte. Je vous guide au cabinet et vous donne un programme simple à faire seul.",
      ],
    },
    {
      q: "Puis-je continuer à travailler les bras au-dessus de la tête ?",
      a: [
        "Souvent oui, mais pas à n'importe quelle dose : l'idée n'est pas de travailler à fond malgré la douleur. Les recommandations pour les atteintes de la coiffe conseillent d'intervenir tôt et d'adapter l'organisation du travail pour faciliter le maintien en activité.",
        "Concrètement : faire varier les gestes, fractionner les tâches, rapprocher la charge du corps, prévoir des pauses. Nous cherchons ensemble des aménagements adaptés à votre métier.",
      ],
    },
    {
      q: "Mon épaule s'est luxée : faut-il opérer, et cela va-t-il revenir ?",
      a: [
        "Après une première luxation, le risque de récidive est surtout élevé chez les sujets jeunes et actifs. Dans une méta-analyse d'essais randomisés, 6,3 % des patients opérés avaient eu une récidive contre 46,6 % de ceux immobilisés seulement, avec un suivi moyen d'environ cinq ans. Ces chiffres concernent surtout des hommes de 20 à 30 ans.",
        "Chez une personne plus âgée ou moins sportive, on commence souvent par la rééducation. La décision se prend avec le chirurgien selon votre âge, votre sport et les lésions vues à l'imagerie.",
      ],
    },
    {
      q: "Quand reprendre le sport ou la natation ?",
      a: [
        "Cela dépend du diagnostic, de la douleur et de la force récupérée plutôt que d'une date. En général, on reprend d'abord les gestes simples et peu chargés, puis on augmente progressivement l'intensité et la fréquence. Après une luxation ou une opération, la reprise suit les consignes de votre chirurgien.",
        "Je vous donne des repères clairs : ce qui est acceptable pendant et après l'effort, et quand avancer ou reculer. Pour la natation ou le lancer, nous travaillons aussi la technique et le volume d'entraînement.",
      ],
    },
    {
      q: "Mon épaule et ma nuque sont-elles liées ?",
      a: [
        "Parfois. Une douleur ressentie à l'épaule peut venir du cou, surtout si elle descend dans le bras, s'accompagne de fourmillements ou varie avec les mouvements du cou. Les deux régions peuvent aussi être douloureuses ensemble, sans que l'une soit la cause de l'autre.",
        "C'est une raison de plus pour un bilan qui examine le cou et l'épaule. Si le cou est en cause, la prise en charge change.",
      ],
    },
  ],
  related: [
    { href: "/kinesitherapie/tendinopathie", label: "Tendinopathie : comprendre et traiter la douleur du tendon" },
    { href: "/kinesitherapie/reeducation-post-operatoire", label: "Rééducation après une opération" },
    { href: "/kinesitherapie/cervicalgie", label: "Douleur de nuque (cervicalgie)" },
    { href: "/blog/approche-biopsychosociale-kinesitherapie", label: "Article : l'approche biopsychosociale en kinésithérapie" },
  ],
  references: [
    {
      citation:
        "Doiron-Cadrin P, Lafrance S, Saulnier M, et al. Shoulder rotator cuff disorders: a systematic review of clinical practice guidelines and semantic analyses of recommendations. Arch Phys Med Rehabil. 2020;101(7):1233-1242.",
      pmid: "32007452",
    },
    {
      citation:
        "Lowry V, Lavigne P, Zidarov D, et al. A systematic review of clinical practice guidelines on the diagnosis and management of various shoulder disorders. Arch Phys Med Rehabil. 2023;105(2):411-426.",
      pmid: "37832814",
    },
    {
      citation:
        "Hopewell S, Keene DJ, Marian IR, et al. Progressive exercise compared with best practice advice, with or without corticosteroid injection, for the treatment of patients with rotator cuff disorders (GRASP). Lancet. 2021;398(10298):416-428.",
      pmid: "34265255",
    },
    {
      citation:
        "Karjalainen TV, Jain NB, Page CM, et al. Subacromial decompression surgery for rotator cuff disease. Cochrane Database Syst Rev. 2019;1(1):CD005619.",
      pmid: "30707445",
    },
    {
      citation:
        "Beard DJ, Rees JL, Cook JA, et al. Arthroscopic subacromial decompression for subacromial shoulder pain (CSAW): a multicentre, pragmatic, parallel group, placebo-controlled, three-group, randomised surgical trial. Lancet. 2018;391(10118):329-338.",
      pmid: "29169668",
    },
    {
      citation:
        "Kanto K, Bäck M, Ibounig T, et al. Arthroscopic subacromial decompression versus placebo surgery for subacromial pain syndrome: 10 year follow-up of the FIMPACT randomised, placebo surgery controlled trial. BMJ. 2025;391:e086201.",
      pmid: "41330610",
    },
    {
      citation:
        "Sanders S, Ibounig T, Haas R, et al. Rotator cuff imaging abnormalities in asymptomatic shoulders: a systematic review. J Orthop Sports Phys Ther. 2025;55(12):1-16.",
      pmid: "41308021",
    },
    {
      citation:
        "Karjalainen TV, Jain NB, Heikkinen J, et al. Surgery for rotator cuff tears. Cochrane Database Syst Rev. 2019;12(12):CD013502.",
      pmid: "31813166",
    },
    {
      citation:
        "Kukkonen J, Ryösä A, Joukainen A, et al. Operative versus conservative treatment of small, nontraumatic supraspinatus tears in patients older than 55 years: over 5-year follow-up of a randomized controlled trial. J Shoulder Elbow Surg. 2021;30(11):2455-2464.",
      pmid: "33774172",
    },
    {
      citation:
        "Rangan A, Brealey SD, Keding A, et al. Management of adults with primary frozen shoulder in secondary care (UK FROST): a multicentre, pragmatic, three-arm, superiority randomised clinical trial. Lancet. 2020;396(10256):977-989.",
      pmid: "33010843",
    },
    {
      citation:
        "Belk JW, Wharton BR, Houck DA, et al. Shoulder stabilization versus immobilization for first-time anterior shoulder dislocation: a systematic review and meta-analysis of level 1 randomized controlled trials. Am J Sports Med. 2023;51(6):1634-1643.",
      pmid: "35148222",
    },
    {
      citation:
        "Challoumas D, Biddle M, McLean M, Millar NL. Comparison of treatments for frozen shoulder: a systematic review and meta-analysis. JAMA Netw Open. 2020;3(12):e2029581.",
      pmid: "33326025",
    },
    {
      citation:
        "Moosmayer S, Lund G, Seljom US, et al. Fifteen-year results of a comparative analysis of tendon repair versus physiotherapy for small-to-medium-sized rotator cuff tears: a concise follow-up of previous reports. J Bone Joint Surg Am. 2024;106(19):1785-1796.",
      pmid: "39197154",
    },
  ],
};
