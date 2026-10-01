import type { Condition } from "./types";

export const reeducationPostOperatoire: Condition = {
  slug: "reeducation-post-operatoire",
  label: "Rééducation post-opératoire",
  title: "Rééducation post-opératoire : genou, hanche, épaule",
  description:
    "Prothèse de genou ou de hanche, coiffe, LCA, ménisque, fracture : une rééducation progressive, coordonnée avec votre chirurgien, à Woluwe-Saint-Lambert.",
  h1: "Rééducation post-opératoire : retrouver votre mouvement, étape par étape",
  lead: "Après une opération, on se demande souvent ce qu'on a le droit de faire, ce qui est normal, et quand on sera « comme avant ». La rééducation vous aide à reprendre votre mouvement et votre confiance, par paliers, dans le cadre fixé par votre chirurgien. Chaque opération a ses propres règles : c'est pour cela que nous partons toujours de votre protocole.",
  takeaway:
    "Après une opération, ni l'immobilité ni l'excès ne sont la solution : bouger, dans le cadre fixé par votre chirurgien et par paliers bien dosés, fait partie du traitement.",
  subtypeGroups: [
    {
      heading: "Genou",
      items: [
        { name: "Prothèse totale de genou (PTG)", note: "Aussi appelée arthroplastie totale du genou" },
        { name: "Prothèse unicompartimentale du genou (PUC)", note: "Remplacement d'une seule partie du genou" },
        {
          name: "Reconstruction du ligament croisé antérieur (LCA)",
          note: "Ligamentoplastie, page dédiée",
          href: "/kinesitherapie/reeducation-lca",
        },
        { name: "Méniscectomie ou suture méniscale", note: "Ablation partielle ou réparation du ménisque" },
        { name: "Ostéotomie du genou (tibiale ou fémorale)", note: "Correction de l'axe de la jambe" },
        { name: "Chondroplastie, microfractures, greffe de cartilage", note: "Traitement d'une lésion du cartilage" },
      ],
    },
    {
      heading: "Hanche",
      items: [
        { name: "Prothèse totale de hanche (PTH)", note: "Arthroplastie totale de la hanche" },
        { name: "Arthroscopie de hanche (conflit fémoro-acétabulaire, CFA)", note: "Chirurgie du conflit de hanche, labrum" },
        { name: "Fracture du col du fémur (ostéosynthèse ou prothèse)", note: "Fracture de hanche, souvent chez la personne âgée" },
      ],
    },
    {
      heading: "Épaule",
      items: [
        { name: "Prothèse d'épaule (anatomique ou inversée)", note: "Arthroplastie de l'épaule" },
        { name: "Réparation de la coiffe des rotateurs", note: "Suture d'un tendon de la coiffe, le plus souvent sous arthroscopie" },
        { name: "Stabilisation d'épaule (Bankart, Latarjet)", note: "Après luxation ou instabilité de l'épaule" },
        { name: "Acromioplastie, décompression sous-acromiale, ténodèse du biceps", note: "Chirurgie de l'espace sous l'acromion ou du biceps" },
      ],
    },
    {
      heading: "Cheville et pied",
      items: [
        { name: "Suture du tendon d'Achille", note: "Après rupture du tendon" },
        { name: "Ligamentoplastie de cheville (Broström)", note: "Instabilité chronique de cheville" },
        { name: "Hallux valgus opéré", note: "Chirurgie de l'oignon du gros orteil" },
        { name: "Arthrodèse de cheville ou du pied", note: "Fusion d'une articulation" },
      ],
    },
    {
      heading: "Rachis",
      items: [
        { name: "Hernie discale opérée (discectomie)", note: "Aussi appelée cure de hernie discale" },
        { name: "Canal lombaire étroit opéré (laminectomie, libération)", note: "Chirurgie de décompression" },
        { name: "Arthrodèse lombaire", note: "Fusion vertébrale" },
        {
          name: "Chirurgie cervicale (hernie discale cervicale, arthrodèse)",
          note: "Voir aussi la page cervicalgie",
          href: "/kinesitherapie/cervicalgie",
        },
      ],
    },
    {
      heading: "Main, poignet et coude",
      items: [
        { name: "Fracture du poignet (radius distal) opérée", note: "Plaque ou broches" },
        { name: "Syndrome du canal carpien opéré", note: "Libération du nerf médian" },
        { name: "Réparation tendineuse de la main (fléchisseurs, extenseurs)" },
        { name: "Épicondylite opérée (coude)", note: "Après échec du traitement non chirurgical" },
      ],
    },
    {
      heading: "Fractures en général",
      items: [
        { name: "Fracture opérée : ostéosynthèse (malléole, tibia, humérus, clavicule...)", note: "Plaque, vis, clou ou broches" },
      ],
    },
  ],
  sections: [
    {
      heading: "Une opération, puis une remise en service",
      paragraphs: [
        "Imaginez un chantier de rénovation. Le chirurgien fait le gros œuvre : il remplace, répare ou stabilise la structure. Mais un bâtiment rénové ne se remet pas en service d'un coup : il faut tester, charger progressivement, ajuster. La rééducation, c'est cette remise en service, pour votre articulation et pour tout ce qui l'entoure (muscles, équilibre, confiance).",
        "Ce qu'on peut faire, et quand, dépend de l'opération, de la qualité des tissus, de la technique utilisée et de votre situation. C'est pourquoi votre protocole vient du chirurgien, et pas d'un calendrier générique.",
      ],
    },
    {
      heading: "Ce que dit la recherche, honnêtement",
      paragraphs: [
        "Pour la plupart de ces chirurgies, les études montrent que la rééducation aide, mais la meilleure façon de la dérouler reste souvent débattue. Après une réparation de la coiffe des rotateurs, par exemple, démarrer le mouvement tôt donne en général un peu plus de mobilité, sans plus de nouvelles déchirures ; les différences restent petites et le protocole du chirurgien reste la référence.",
        "Après une suture du ménisque, les protocoles « prudents » et les protocoles « accélérés » donnent de bons résultats dans les deux cas, mais les études sont trop différentes pour trancher. Après une prothèse de genou, le niveau de preuve est meilleur : un programme structuré fait une vraie différence, et il n'est pas toujours nécessaire de le faire à l'hôpital.",
      ],
    },
  ],
  myths: [
    {
      myth: "« Après une opération, il faut se reposer pour ne pas abîmer la réparation. »",
      reality: [
        "Il existe des périodes de protection, et votre chirurgien les fixe : respectez-les. Mais au-delà, ne plus bouger n'est pas plus sûr. Après une réparation de la coiffe des rotateurs, les revues de la littérature trouvent que reprendre le mouvement plus tôt donne un peu plus de mobilité, sans augmenter le risque de nouvelle déchirure.",
        "Les écarts entre les groupes restent petits : la règle est donc de suivre le protocole, pas de se presser ni de s'immobiliser par précaution.",
      ],
    },
    {
      myth: "« Avec une prothèse, il faut la ménager : pas de sport, pas trop de marche. »",
      reality: [
        "Les preuves solides sur les restrictions à long terme après une prothèse de genou sont limitées, et les conseils donnés par les professionnels varient beaucoup d'un endroit à l'autre. Cela montre surtout que le sujet est mal tranché.",
        "Ce qui est acceptable pour vous dépend de la prothèse, de votre chirurgien et de votre condition physique : parlez-en avec lui plutôt que de vous interdire d'emblée tout effort, ou au contraire de reprendre sans repère malgré la douleur : on dose, et on remonte par paliers.",
      ],
    },
    {
      myth: "« Si le chirurgien a bien opéré, la kiné ne sert à rien. »",
      reality: [
        "L'opération répare la structure, mais elle ne rend pas la force, l'équilibre et la souplesse. Après une fracture du poignet, par exemple, la kiné supervisée apporte des bénéfices à court terme sur la fonction et la force par rapport à un simple programme à domicile.",
        "Avant une prothèse de genou ou de hanche, se préparer aide aussi, surtout dans les premiers mois. La rééducation fait partie du traitement, pas d'un « supplément ».",
      ],
    },
  ],
  careIntro:
    "Concrètement, voici comment je procède avec vous, toujours dans le cadre de votre chirurgien et de votre protocole.",
  care: [
    {
      title: "Bilan et lecture du protocole",
      text: "Nous lisons ensemble le protocole du chirurgien et faisons un bilan complet : mobilité, force, douleur, gonflement, cicatrice, marche, vos objectifs et vos inquiétudes. C'est le point de départ de toute la suite.",
    },
    {
      title: "Éducation : ce qui est normal, ce qui ne l'est pas",
      text: "Je vous explique à quoi vous attendre (douleur, gonflement, fatigue), ce que vous pouvez faire sans crainte et quels signes doivent vous faire appeler votre médecin. Savoir à quoi s'attendre réduit nettement l'appréhension.",
    },
    {
      title: "Mobilité et gestion du gonflement",
      text: "Dans les amplitudes autorisées, nous travaillons le mouvement, la cicatrice et la décongestion. La thérapie manuelle peut aider en complément, mais le mouvement actif reste l'élément central.",
    },
    {
      title: "Renforcement progressif et reprise de la fonction",
      text: "Force, équilibre et contrôle moteur sont travaillés par paliers : marche, escaliers, transferts, gestes du quotidien, puis gestes du travail ou du sport. Nous augmentons la charge selon des critères, pas selon le seul calendrier.",
    },
    {
      title: "Programme à la maison et suivi à distance",
      text: "Vous recevez un programme court et réaliste à faire entre les séances. Selon les cas, certaines séances peuvent se faire en téléconsultation, pour gagner du temps et rester régulier.",
    },
    {
      title: "Retour au travail et au sport, avec votre chirurgien",
      text: "Quand la fonction le permet, je vous accompagne vers la reprise du travail ou du sport (coaching sportif si besoin), avec des tests de force et de contrôle. La validation finale se fait avec votre chirurgien.",
    },
  ],
  redFlags: [
    "Fièvre, frissons, ou cicatrice qui rougit, chauffe, suinte ou s'ouvre.",
    "Mollet ou cuisse douloureux, gonflé, chaud ou rouge d'un seul côté (risque de phlébite).",
    "Essoufflement brutal, douleur dans la poitrine ou crachats de sang : appelez les urgences.",
    "Douleur forte qui augmente malgré le repos et les antidouleurs prescrits, ou douleur brutale après un faux mouvement ou une chute.",
    "Perte de sensibilité, engourdissement, membre pâle ou froid, ou perte de force soudaine.",
    "Après une chirurgie du dos : difficultés à uriner ou à aller à la selle, ou engourdissement entre les jambes (urgence).",
    "Sensation de prothèse qui « lâche », déformation soudaine ou impossibilité de bouger ou de s'appuyer.",
  ],
  faq: [
    {
      q: "Quand commencer la kiné après l'opération ?",
      a: [
        "Cela dépend de l'opération et de votre chirurgien. Après une prothèse de genou ou de hanche, la mobilisation commence souvent dès les premiers jours, parfois à l'hôpital. Après une réparation de tendon ou de coiffe, il peut y avoir une période de protection avant d'être plus actif.",
        "Dans tous les cas, demandez le protocole écrit à votre chirurgien et apportez-le à la première séance.",
      ],
    },
    {
      q: "La douleur et le gonflement sont-ils normaux ?",
      a: [
        "Une douleur modérée et un gonflement qui varient au fil de la journée sont fréquents pendant plusieurs semaines, et parfois plus longtemps. Ils augmentent souvent avec la fatigue ou après une grosse journée, puis se calment.",
        "Ce qui doit alerter : une douleur qui s'aggrave malgré le repos, un côté beaucoup plus gonflé, chaud et rouge, ou de la fièvre. Voyez la liste des signes d'alerte plus haut.",
      ],
    },
    {
      q: "Combien de temps dure la rééducation ?",
      a: [
        "Cela varie beaucoup : de quelques semaines pour certaines chirurgies de la main ou du pied à plusieurs mois pour une prothèse, une coiffe ou un ligament. La fonction continue souvent à progresser bien après la fin des séances.",
        "Je ne peux pas vous donner un délai garanti : il dépend de l'opération, de votre état de départ, de votre âge, de votre travail ou de vos objectifs sportifs, et de la régularité de vos exercices.",
      ],
    },
    {
      q: "Peut-on se préparer avant l'opération (préhabilitation) ?",
      a: [
        "Pour une prothèse de genou ou de hanche, un programme d'exercices avant l'opération semble améliorer la force et la fonction avant l'intervention, et un peu après, surtout dans les premiers mois. Les effets s'estompent avec le temps. Il semble aussi aider avant une chirurgie lombaire.",
        "Pour d'autres chirurgies (épaule, ménisque, hanche arthroscopique...), les preuves sont plus rares. Cela ne coûte rien d'être plus fort et mobile avant, mais n'en attendez pas des miracles : c'est une aide, pas une garantie.",
      ],
    },
    {
      q: "Le protocole du chirurgien et celui du kiné : qui décide ?",
      a: [
        "Le chirurgien connaît ce qu'il a fait et la qualité de la réparation : il fixe le cadre (appui, amplitudes, délais). Le kiné adapte la progression à ce que vous ressentez et à votre fonction, à l'intérieur de ce cadre.",
        "Si quelque chose me semble ne pas coller (progrès trop lents, douleur inhabituelle), j'en parle directement avec votre chirurgien. Nous travaillons en équipe, pas chacun de notre côté.",
      ],
    },
    {
      q: "Quels exercices faire à la maison ?",
      a: [
        "Ceux qui sont adaptés à votre stade et que vous pouvez faire régulièrement. Un petit programme fait chaque jour vaut mieux qu'un gros programme fait de temps en temps. Je vous le donne par écrit ou en vidéo, avec les repères pour savoir si vous en faites trop ou pas assez.",
        "Évitez de copier des exercices trouvés en ligne : ils ne tiennent pas compte de votre opération ni de votre protocole.",
      ],
    },
    {
      q: "Comment éviter la raideur et soigner la cicatrice ?",
      a: [
        "Le meilleur moyen d'éviter la raideur est de bouger régulièrement dans les amplitudes autorisées, sans forcer sur la douleur, en plus des séances. La raideur vient souvent d'un mouvement trop peu pratiqué, parfois par peur, plus rarement d'un vrai problème mécanique.",
        "Quand la cicatrice est fermée et que votre chirurgien est d'accord, des mobilisations douces peuvent aider à la rendre moins gênante. Une cicatrice qui chauffe, rougit ou suinte doit être montrée au médecin.",
      ],
    },
    {
      q: "Quand puis-je reprendre la conduite, le travail, le sport ?",
      a: [
        "Il n'y a pas de date universelle. La reprise se décide selon des critères (douleur, force, mobilité, contrôle du mouvement, sécurité pour freiner ou manœuvrer) et selon l'avis de votre chirurgien. Les recommandations des professionnels varient d'ailleurs beaucoup d'un endroit à l'autre.",
        "Pour le travail, cela dépend aussi de ce que vous faites : bureau, port de charges, position prolongée. Pour le sport, nous passons par des étapes et des tests, comme pour le retour après LCA.",
      ],
    },
    {
      q: "Rééducation à domicile ou en téléconsultation : est-ce aussi efficace ?",
      a: [
        "Après une prothèse de genou, les revues de la littérature trouvent des résultats globalement comparables entre rééducation à distance ou à domicile et rééducation en présentiel pour la douleur et la fonction. La qualité des études est cependant souvent faible à modérée, et les résultats varient selon les programmes.",
        "Pour la prothèse de hanche, les données sont moins nettes. Dans les faits, l'idéal est souvent un mélange : des séances en cabinet quand une évaluation ou des techniques manuelles sont utiles, et un suivi par visio entre les deux.",
      ],
    },
    {
      q: "J'ai peur de bouger et d'abîmer la réparation. Est-ce normal ?",
      a: [
        "Oui, c'est très courant, et c'est humain : on vous a opéré, on veut protéger le résultat. Mais trop de prudence peut ralentir la récupération. Les chirurgiens et les kinés donnent d'ailleurs parfois des consignes très différentes, ce qui n'aide pas à se sentir sûr.",
        "Mon rôle est de vous expliquer ce qui est sans danger et de reprendre le mouvement par petites étapes, pour que la confiance revienne en même temps que la fonction.",
      ],
    },
  ],
  related: [
    { href: "/kinesitherapie/reeducation-lca", label: "Rééducation après reconstruction du LCA" },
    { href: "/blog/retour-sport-apres-lca", label: "Retour au sport après un LCA" },
    { href: "/kinesitherapie/douleur-epaule", label: "Douleur d'épaule" },
    { href: "/kinesitherapie/douleur-genou", label: "Douleur du genou" },
  ],
  references: [
    {
      citation:
        "Zhai S, Wu R, Du G, et al. Smart device-assisted telerehabilitation versus conventional rehabilitation after total knee arthroplasty: a systematic review and meta-analysis. J Orthop Surg Res. 2025;20(1):954.",
      pmid: "41188876",
    },
    {
      citation:
        "Zhang H, Wang J, Jiang Z, et al. Home-based tele-rehabilitation versus hospital-based outpatient rehabilitation for pain and function after initial total knee arthroplasty: a systematic review and meta-analysis. Medicine (Baltimore). 2023;102(51):e36764.",
      pmid: "38134064",
    },
    {
      citation:
        "Keogh JAJ, Keng I, Dhillon DS, et al. The effects of structured prehabilitation on postoperative outcomes following total hip and total knee arthroplasty: an overview of systematic reviews and meta-analyses of randomized controlled trials. J Orthop Sports Phys Ther. 2025;55(5):344-365.",
      pmid: "40298246",
    },
    {
      citation:
        "Punnoose A, Claydon-Mueller LS, Weiss O, et al. Prehabilitation for patients undergoing orthopedic surgery: a systematic review and meta-analysis. JAMA Netw Open. 2023;6(4):e238050.",
      pmid: "37052919",
    },
    {
      citation:
        "Mazuquin B, Moffatt M, Gill P, et al. Effectiveness of early versus delayed rehabilitation following rotator cuff repair: systematic review and meta-analyses. PLoS One. 2021;16(5):e0252137.",
      pmid: "34048450",
    },
    {
      citation:
        "Silveira A, Luk J, Tan M, et al. Move it or lose it? The effect of early active movement on clinical outcomes following rotator cuff repair: a systematic review with meta-analysis. J Orthop Sports Phys Ther. 2021;51(7):331-344.",
      pmid: "33998264",
    },
    {
      citation:
        "VanderHave KL, Perkins C, Le M. Weightbearing versus nonweightbearing after meniscus repair. Sports Health. 2015;7(5):399-402.",
      pmid: "26502413",
    },
    {
      citation:
        "Gutiérrez-Espinoza H, Araya-Quintanilla F, Cuyúl-Vásquez I, et al. Comparing supervised physical therapy to home exercise programs in patients with distal radius fractures: a systematic review with meta-analysis of randomized clinical trials. J Orthop Sports Phys Ther. 2026;56(3):158-175.",
      pmid: "41764173",
    },
    {
      citation:
        "Gustafsson K, Jönsson T, Ljung M, et al. Major discrepancies in recommendations regarding long-term activity restrictions following knee replacement: a survey among Swedish physiotherapists. BMC Musculoskelet Disord. 2026;27(1).",
      pmid: "42399861",
    },
  ],
};
