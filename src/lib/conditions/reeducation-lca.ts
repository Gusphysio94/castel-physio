import type { Condition } from "./types";

export const reeducationLca: Condition = {
  slug: "reeducation-lca",
  label: "Rééducation du LCA",
  title: "Rééducation du LCA et retour au sport à Bruxelles",
  description:
    "Rupture ou reconstruction du LCA : rééducation progressive et retour au sport guidé par des critères, pas par la date. Kinésithérapeute du sport à Bruxelles.",
  h1: "Rééducation après rupture ou reconstruction du LCA",
  lead:
    "Une rupture du ligament croisé antérieur (LCA) bouleverse la saison, parfois bien davantage. La bonne nouvelle : que vous soyez opéré ou non, une rééducation structurée change vraiment la suite. Et le retour au sport se décide sur des critères, pas seulement sur un calendrier.",
  takeaway:
    "Neuf mois après l'opération n'est pas une ligne d'arrivée : c'est un minimum, à confirmer par la force, les sauts et la confiance.",
  subtypeGroups: [
    {
      heading: "Rupture du LCA",
      items: [
        { name: "Rupture du ligament croisé antérieur (LCA)", note: "Rupture complète, avec ou sans opération" },
        { name: "Rupture partielle du LCA", note: "Lésion incomplète, parfois appelée « distension »" },
        { name: "Entorse grave du genou", note: "Souvent le terme utilisé avant le diagnostic précis" },
        { name: "Laxité antérieure du genou", note: "Genou qui « part en avant » ou se dérobe" },
        { name: "Instabilité du genou après entorse", note: "Sensation de lâchage lors des pivots" },
        { name: "Traitement conservateur (non opéré) du LCA", note: "Rééducation seule, opération discutée ensuite si besoin" },
      ],
    },
    {
      heading: "Reconstruction du LCA (ligamentoplastie)",
      items: [
        { name: "Ligamentoplastie du LCA", note: "Terme chirurgical courant sur les prescriptions" },
        { name: "Reconstruction du LCA par greffe aux ischio-jambiers (DIDT)", note: "Prélèvement de tendons à l'arrière de la cuisse" },
        { name: "Reconstruction du LCA par tendon rotulien (BTB)", note: "Prélèvement au tendon rotulien, avec un fragment d'os" },
        { name: "Reconstruction du LCA par tendon quadricipital", note: "Prélèvement au tendon du quadriceps" },
        { name: "Ténodèse latérale extra-articulaire (LET)", note: "Renfort sur le côté externe du genou, associé à la greffe" },
        { name: "Révision du LCA / ré-rupture de greffe", note: "Seconde reconstruction après échec de la première" },
        { name: "Rupture du LCA controlatéral", note: "Rupture du LCA du genou opposé" },
        { name: "Préhabilitation avant ligamentoplastie", note: "Préparation du genou et du quadriceps avant l'opération" },
      ],
    },
    {
      heading: "Lésions associées et situations particulières",
      items: [
        { name: "Lésion méniscale associée au LCA", note: "Ménisque suturé ou régularisé lors de l'opération" },
        { name: "Entorse du ligament collatéral médial (LLI) associée", note: "Souvent traitée par rééducation, selon la gravité" },
        { name: "Triade de O'Donoghue", note: "LCA, ménisque interne et ligament collatéral médial" },
        { name: "LCA de l'adolescent et de l'enfant", note: "Décision spécifique, liée à la croissance" },
        { name: "Prévention des ruptures du LCA", note: "Programmes neuromusculaires pour sportifs à risque" },
      ],
    },
  ],
  sections: [
    {
      heading: "Ce qui se passe dans le genou",
      paragraphs: [
        "Le LCA est un ligament situé au centre du genou. Il empêche le tibia de glisser vers l'avant et il aide le genou à rester stable quand vous pivotez, freinez ou réceptionnez un saut. Imaginez le câble de maintien d'une tente : il ne porte pas tout le poids, mais sans lui, la structure vacille dès que le vent forcit. Quand il est rompu, ce sont les muscles autour du genou, surtout le quadriceps, les ischio-jambiers et ceux de la hanche, qui doivent reprendre ce rôle de haubans.",
        "La rupture survient le plus souvent sans contact, lors d'un pivot, d'une réception ou d'un freinage. Elle s'accompagne souvent d'un craquement, d'un gonflement rapide et d'une sensation de genou qui lâche. Un ménisque ou un autre ligament peuvent être touchés en même temps, ce qui influence la suite.",
      ],
    },
    {
      heading: "Opérer ou non : une vraie question, sans réponse unique",
      paragraphs: [
        "On vous a peut-être dit qu'une rupture du LCA exigeait forcément une opération. Les études sont plus nuancées. Dans l'essai de Frobell (2010) chez 121 jeunes adultes actifs, une rééducation structurée avec reconstruction retardée « si besoin » n'a pas donné de moins bons résultats à 2 ans qu'une reconstruction précoce, et une partie des participants n'a finalement jamais été opérée. Le suivi à 11 ans va dans le même sens pour les scores rapportés par les patients.",
        "À l'inverse, chez des patients dont le genou se dérobe encore malgré le temps (essai ACL SNNAP), la chirurgie a donné de meilleurs résultats à 18 mois que la rééducation seule. La décision se prend donc avec votre chirurgien, selon votre âge, votre sport, la stabilité de votre genou et les lésions associées. Dans tous les cas, la rééducation est une étape indispensable, avant comme après.",
      ],
    },
    {
      heading: "Revenir tôt ou revenir prêt ?",
      paragraphs: [
        "Le genou opéré n'est pas « guéri » le jour où la douleur disparaît. Chez les jeunes sportifs qui reprennent un sport à pivots, le risque d'une seconde blessure du LCA (même genou ou genou opposé) est élevé, surtout dans les premiers temps de la reprise. C'est pourquoi la rééducation ne s'arrête pas quand le genou ne fait plus mal : elle se termine quand le genou et vous êtes prêts, ce qui se mesure.",
      ],
    },
  ],
  myths: [
    {
      myth: "« Une rupture du LCA, ça s'opère forcément. »",
      reality: [
        "Pas toujours. Chez de jeunes adultes actifs après une rupture récente, une rééducation structurée avec opération seulement si nécessaire a donné des résultats comparables, ressentis par les patients, à une opération précoce (Frobell 2010, suivi à 11 ans). Environ la moitié du groupe concerné n'a finalement pas été opérée.",
        "À l'inverse, si le genou continue de se dérober malgré la rééducation, l'opération a donné de meilleurs résultats à 18 mois (ACL SNNAP). La décision se prend avec votre chirurgien.",
      ],
    },
    {
      myth: "« Au bout de six mois, je suis prêt à reprendre mon sport. »",
      reality: [
        "La marche et la vie quotidienne reviennent bien avant que le genou soit prêt pour les pivots. Chez des sportifs opérés (Grindem 2016), reprendre un sport à pivots avant neuf mois et sans avoir atteint les critères de force et de sauts s'accompagnait d'un risque nettement plus élevé de nouvelle blessure.",
        "C'est une étude observationnelle, mais elle va dans le sens d'une reprise décidée sur des tests plutôt que sur une impression.",
      ],
    },
    {
      myth: "« Une fois opéré, mon genou sera comme avant. »",
      reality: [
        "Beaucoup de personnes reprennent leur sport, mais pas toutes, et pas toujours au même niveau. Dans une revue de 28 études, environ deux tiers des sportifs avaient repris leur sport et plus d'un tiers de ceux qui avaient repris n'atteignaient pas leur niveau d'avant, la peur de se blesser à nouveau étant la raison la plus citée.",
        "Cela dépend de beaucoup de choses : la force retrouvée, la confiance, le sport pratiqué. Cela se travaille.",
      ],
    },
  ],
  careIntro:
    "Le parcours est progressif et se décide par étapes validées, pas par dates. Voici comment je l'organise, en lien avec votre chirurgien ou votre médecin.",
  care: [
    {
      title: "Bilan et préparation du genou",
      text: "Avant l'opération (ou si vous n'êtes pas opéré), je cherche à calmer le gonflement, à retrouver l'extension complète du genou et à réactiver le quadriceps. Les études sur la préparation préopératoire sont encore de faible niveau de preuve, mais elle semble améliorer la fonction après l'opération et vous permet d'arriver à la chirurgie en meilleure forme.",
    },
    {
      title: "Les premières semaines : extension, marche, quadriceps",
      text: "L'objectif est de retrouver un genou qui s'étend et se plie bien, une marche normale et un quadriceps qui « répond » (le muscle est souvent inhibé après une blessure ou une opération). On avance selon la réaction du genou, pas selon une grille fixe. Certains outils d'aide, comme la stimulation électrique du quadriceps, ont un effet démontré sur la force.",
    },
    {
      title: "Renforcement progressif",
      text: "Quadriceps, ischio-jambiers, fessiers, mollets, tronc : la force remonte par paliers. Les exercices en chaîne fermée (pied au sol, comme une presse ou un squat) et en chaîne ouverte (extension de jambe assis) se sont montrés similaires pour la force du quadriceps et la fonction. Je choisis selon l'état de votre genou et de votre greffe.",
    },
    {
      title: "Course, sauts, changements de direction",
      text: "La reprise de la course, puis des sauts, des réceptions et des pivots, est introduite quand le genou est calme, qu'il s'étend et se plie bien, et que la force est suffisante. Je dose le volume et l'intensité, et je surveille la réaction du genou dans les jours qui suivent.",
    },
    {
      title: "Tests de retour au sport",
      text: "Avant de vous donner le feu vert, je mesure la force des deux jambes, je teste des sauts (simple, triple, latéral) et je recueille votre confiance avec un questionnaire. Si un résultat n'est pas au niveau, nous le retravaillons, puis nous retestons. Ces critères comptent davantage que la date.",
    },
    {
      title: "Retour progressif et prévention",
      text: "La reprise passe par l'entraînement, puis la compétition, avec des exercices de prévention intégrés à votre routine. C'est aussi le moment de coordonner avec votre entraîneur, et de prévoir un suivi. La téléconsultation permet de rester accompagné entre deux séances.",
    },
  ],
  redFlags: [
    "Mollet douloureux, chaud et gonflé après l'opération, ou essoufflement : consultez en urgence (risque de phlébite)",
    "Fièvre, rougeur, écoulement ou chaleur autour de la cicatrice après une opération",
    "Genou bloqué (impossible à étendre complètement), avec sensation de verrouillage",
    "Gonflement important et brutal du genou après un nouveau traumatisme, ou impossibilité d'appuyer sur la jambe",
    "Engourdissement du pied ou changement de couleur de la jambe",
  ],
  faq: [
    {
      q: "Dois-je me faire opérer ?",
      a: [
        "La réponse dépend de votre âge, de votre sport, de la stabilité de votre genou et des lésions associées (ménisque notamment). C'est une décision à prendre avec votre chirurgien orthopédiste.",
        "Ce que disent les études : chez de jeunes adultes actifs après une rupture récente, une rééducation structurée avec chirurgie seulement si nécessaire (essai de Frobell, suivi à 2 puis 11 ans) a donné des résultats comparables, en patients-rapportés, à une opération précoce, et environ la moitié du groupe n'a pas été opérée à 11 ans. Pour un genou qui lâche encore malgré le temps (ACL SNNAP), la chirurgie a donné de meilleurs résultats à 18 mois.",
      ],
    },
    {
      q: "Quand pourrai-je reprendre mon sport ?",
      a: [
        "Il n'existe pas de date magique. Dans l'étude de Grindem (2016), chez 106 sportifs opérés, chaque mois de report de la reprise jusqu'au 9e mois diminuait le risque de nouvelle blessure du genou (de 51 % par mois), sans bénéfice supplémentaire au-delà. Ce délai de neuf mois est donc un minimum raisonnable pour les sports à pivots, pas une garantie.",
        "Selon votre sport, votre niveau et votre évolution, cela peut prendre davantage. Je décide avec vous sur des critères mesurés.",
      ],
    },
    {
      q: "Pourquoi la date seule ne suffit-elle pas ?",
      a: [
        "Parce que deux personnes opérées le même jour n'ont pas la même force, le même contrôle ni la même confiance neuf mois plus tard. Dans la même étude, 38 % des sportifs qui n'avaient pas satisfait aux critères (force du quadriceps, sauts, questionnaires, avec des scores supérieurs à 90 % de l'autre jambe) ont eu une nouvelle blessure du genou, contre environ 6 % de ceux qui les avaient satisfaits.",
        "Attention : c'est une étude observationnelle sur un petit groupe, il faut lire ces chiffres comme une tendance, pas comme une promesse.",
      ],
    },
    {
      q: "Quels sont les tests pour valider le retour au sport ?",
      a: [
        "Je combine trois familles de tests : la force (le quadriceps de la jambe opérée comparé à l'autre, avec un objectif d'au moins 90 %), des tests de sauts (simple saut, triple saut, saut latéral, réception) pour vérifier la symétrie et la qualité du geste, et un volet psychologique.",
        "Pour ce dernier, j'utilise l'échelle ACL-RSI, un questionnaire qui mesure vos émotions, votre confiance et l'idée que vous vous faites du risque de reprendre. Elle a été conçue pour repérer les sportifs qui auront du mal à reprendre.",
      ],
    },
    {
      q: "Combien de temps dure la rééducation ?",
      a: [
        "Longtemps, il faut être honnête. Quelle que soit la route choisie, on compte plusieurs mois de travail régulier, et souvent presque un an avant un retour complet aux sports à pivots. Les premières semaines servent à retrouver l'extension, la marche et le quadriceps ; les mois suivants à reconstruire la force, la course puis les sauts.",
        "Le rythme dépend de votre genou, de votre greffe, des lésions associées et de la régularité du travail. Une durée précise serait trompeuse avant le bilan.",
      ],
    },
    {
      q: "J'ai peur de me blesser à nouveau : est-ce normal ?",
      a: [
        "Oui, c'est très courant. Dans une revue de 28 études, parmi les sportifs qui n'avaient pas repris leur sport, la peur de se blesser à nouveau était la raison psychologique la plus fréquente. Ce n'est pas un manque de courage : c'est une réaction logique d'un cerveau qui cherche à vous protéger.",
        "Cela se travaille, au même titre que la force : exposition progressive aux gestes redoutés, tests de confiance, objectifs clairs. Le questionnaire ACL-RSI aide à suivre cette évolution.",
      ],
    },
    {
      q: "Quel est le risque de se rompre à nouveau le LCA ?",
      a: [
        "Une méta-analyse de 19 études (Wiggins 2016) estime le taux global de seconde rupture du LCA à 15 % (7 % du même côté, 8 % du côté opposé). Chez les moins de 25 ans, il monte à 21 %, et à 23 % chez ceux qui reprennent un sport à risque.",
        "Ces chiffres sont des moyennes, et le risque dépend de nombreux facteurs. Ils expliquent pourquoi on prend le temps de la préparation, des critères de retour et de la prévention chez les jeunes sportifs.",
      ],
    },
    {
      q: "Chaîne fermée ou chaîne ouverte : quel exercice pour le quadriceps ?",
      a: [
        "Les exercices en chaîne fermée (le pied reste au sol : presse, squat) et en chaîne ouverte (extension de jambe assis) sont deux outils. Une synthèse de revues (OPTIKNEE, 2022) conclut, avec un niveau de preuve modéré, qu'ils sont similaires pour la force du quadriceps et la fonction.",
        "Le choix dépend donc de l'état de votre greffe, de la période et de votre tolérance, plus que d'une règle absolue.",
      ],
    },
    {
      q: "Comment éviter une rupture du LCA, ou une deuxième ?",
      a: [
        "Les programmes neuromusculaires (échauffements structurés comme le FIFA 11+, qui combinent force, équilibre, sauts et réceptions) ont montré leur efficacité dans des essais. Mais le bénéfice dépend surtout de la régularité : sans pratique assidue, il est faible.",
        "Je peux adapter ces exercices à votre sport et vous aider à les intégrer à votre routine ou à celle de votre équipe.",
      ],
    },
    {
      q: "La téléconsultation est-elle utile pour le LCA ?",
      a: [
        "Oui, en complément. Une synthèse de revues (OPTIKNEE) indique qu'une rééducation structurée à domicile donne des résultats de force et de fonction similaires à une rééducation en présentiel. La téléconsultation sert à ajuster votre programme, suivre vos progrès et garder le fil entre deux séances au cabinet.",
        "Les tests de retour au sport, eux, se font au cabinet.",
      ],
    },
  ],
  related: [
    { href: "/blog/retour-sport-apres-lca", label: "Article : le retour au sport après une rupture du LCA" },
    { href: "/kinesitherapie/reeducation-post-operatoire", label: "Rééducation post-opératoire" },
    { href: "/kinesitherapie/douleur-genou", label: "Douleur au genou" },
    { href: "/blog/approche-biopsychosociale-kinesitherapie", label: "Article : l'approche biopsychosociale en kinésithérapie" },
  ],
  testimonial: {
    quote:
      "Quelle chance d'avoir pu réaliser ma rééducation à ses côtés, il a tout simplement sauvé mon genou. Il s'est montré disponible et à l'écoute à toute heure.",
    author: "Clément, patient (avis Google)",
  },
  references: [
    {
      citation:
        "Grindem H, Snyder-Mackler L, Moksnes H, et al. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study. Br J Sports Med. 2016;50(13):804-8.",
      pmid: "27162233",
    },
    {
      citation:
        "Frobell RB, Roos EM, Roos HP, et al. A randomized trial of treatment for acute anterior cruciate ligament tears. N Engl J Med. 2010;363(4):331-42.",
      pmid: "20660401",
    },
    {
      citation:
        "Lohmander LS, Roemer FW, Frobell RB, et al. Treatment for acute anterior cruciate ligament tear in young active adults. NEJM Evid. 2023;2(8):EVIDoa2200287.",
      pmid: "38320141",
    },
    {
      citation:
        "Beard DJ, Davies L, Cook JA, et al. Rehabilitation versus surgical reconstruction for non-acute anterior cruciate ligament injury (ACL SNNAP): a pragmatic randomised controlled trial. Lancet. 2022;400(10352):605-15.",
      pmid: "35988569",
    },
    {
      citation:
        "Wiggins AJ, Grandhi RK, Schneider DK, et al. Risk of secondary injury in younger athletes after anterior cruciate ligament reconstruction: a systematic review and meta-analysis. Am J Sports Med. 2016;44(7):1861-76.",
      pmid: "26772611",
    },
    {
      citation:
        "Culvenor AG, Girdwood MA, Juhl CB, et al. Rehabilitation after anterior cruciate ligament and meniscal injuries: a best-evidence synthesis of systematic reviews for the OPTIKNEE consensus. Br J Sports Med. 2022;56(24):1445-53.",
      pmid: "35768181",
    },
    {
      citation:
        "Webster KE, Feller JA, Lambros C. Development and preliminary validation of a scale to measure the psychological impact of returning to sport following anterior cruciate ligament reconstruction surgery. Phys Ther Sport. 2008;9(1):9-15.",
      pmid: "19083699",
    },
    {
      citation:
        "Nwachukwu BU, Adjei J, Rauck RC, et al. How much do psychological factors affect lack of return to play after anterior cruciate ligament reconstruction? A systematic review. Orthop J Sports Med. 2019;7(5):2325967119845313.",
      pmid: "31205965",
    },
    {
      citation:
        "Getgood AMJ. Avoiding graft failure: lessons learned from the STABILITY trial. Clin Sports Med. 2024;43(3):367-81.",
      pmid: "38811116",
    },
    {
      citation:
        "Kayaalp ME, Celik H, Ostojic M, et al. Adherence as the key to anterior cruciate ligament injury prevention programme success: from efficacy to effectiveness. Knee Surg Sports Traumatol Arthrosc. 2026;34(6):1935-9.",
      pmid: "41451616",
    },
  ],
};
