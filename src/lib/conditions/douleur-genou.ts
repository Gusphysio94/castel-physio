import type { Condition } from "./types";

export const douleurGenou: Condition = {
  slug: "douleur-genou",
  label: "Douleur de genou (non opéré)",
  title: "Douleur de genou : kinésithérapie à Bruxelles",
  description:
    "Rotule, ménisque, arthrose, tendon, ligament : retrouvez le terme de votre prescription et voyez comment l'exercice aide, à Woluwe-Saint-Lambert.",
  h1: "Douleur de genou : comprendre le diagnostic et reprendre confiance",
  lead:
    "Le genou fait mal à l'escalier, en courant, en vous accroupissant, ou il gonfle après un faux mouvement ? Sur l'ordonnance, le mot peut varier (rotule, ménisque, arthrose, ligament…), mais la démarche reste proche : comprendre ce qui est sollicité, redonner de la capacité au genou, puis reprendre vos activités par paliers. Voici comment je procède, sur la base de ce que dit la recherche.",
  takeaway:
    "Un genou douloureux n'est pas un genou « usé » : c'est le plus souvent un genou surchargé. Il ne s'agit ni de le ménager à l'excès, ni de passer outre la douleur, mais de doser vos activités et de le renforcer pour qu'il en tolère davantage.",
  subtypeGroups: [
    {
      heading: "Douleur à l'avant du genou (rotule)",
      items: [
        {
          name: "Syndrome fémoro-patellaire (douleur antérieure du genou)",
          note: "Douleur autour ou derrière la rotule, escaliers, accroupi",
        },
        {
          name: "Chondropathie / chondromalacie rotulienne",
          note: "Ancien terme, souvent utilisé pour un syndrome fémoro-patellaire",
        },
        { name: "Syndrome de Hoffa (conflit du corps adipeux)", note: "Douleur sous la rotule, genou tendu" },
        { name: "Syndrome de la plica (plica synoviale)", note: "Pli de la membrane du genou irrité" },
        { name: "Bursite pré-rotulienne", note: "Gonflement en avant de la rotule, souvent après appui à genoux" },
      ],
    },
    {
      heading: "Côté du genou et douleurs du sportif",
      items: [
        { name: "Syndrome de la bandelette ilio-tibiale (ITBS)", note: "Douleur sur le côté externe, souvent en course" },
        { name: "Bursite de la patte d'oie", note: "Douleur à l'intérieur, sous le genou" },
        { name: "Douleur de genou du coureur, du cycliste ou des sports de saut" },
      ],
    },
    {
      heading: "Tendinopathies du genou",
      items: [
        {
          name: "Tendinopathie rotulienne (genou du sauteur)",
          note: "Douleur sous la rotule à l'effort",
          href: "/kinesitherapie/tendinopathie",
        },
        { name: "Tendinopathie quadricipitale", note: "Douleur au-dessus de la rotule", href: "/kinesitherapie/tendinopathie" },
        { name: "Tendinopathie de la patte d'oie", href: "/kinesitherapie/tendinopathie" },
        { name: "Tendinopathie des ischio-jambiers distaux", note: "Douleur à l'arrière du genou", href: "/kinesitherapie/tendinopathie" },
        { name: "Tendinopathie du poplité", note: "Douleur arrière-externe, en descente", href: "/kinesitherapie/tendinopathie" },
      ],
    },
    {
      heading: "Arthrose, ménisques et autres douleurs articulaires",
      items: [
        { name: "Gonarthrose (arthrose du genou)", note: "Raideur au démarrage, douleur à la marche" },
        {
          name: "Lésion méniscale (dégénérative ou traumatique)",
          note: "Traitement non opératoire",
        },
        { name: "Kyste de Baker (kyste poplité)", note: "Boule ou tension derrière le genou" },
        {
          name: "Genou après méniscectomie ou autre chirurgie",
          note: "Voir la page rééducation post-opératoire",
          href: "/kinesitherapie/reeducation-post-operatoire",
        },
        {
          name: "Genou après prothèse (PTG, prothèse unicompartimentale)",
          href: "/kinesitherapie/reeducation-post-operatoire",
        },
      ],
    },
    {
      heading: "Ligaments, instabilité et traumatismes",
      items: [
        { name: "Entorse du genou (ligament collatéral médial ou latéral)", note: "Après un valgus ou un varus forcé" },
        {
          name: "Lésion du ligament croisé antérieur (LCA)",
          note: "Prise en charge non opératoire ou après chirurgie",
          href: "/kinesitherapie/reeducation-lca",
        },
        { name: "Lésion du ligament croisé postérieur (LCP)", note: "Souvent après un choc sur le tibia" },
        { name: "Instabilité rotulienne / luxation de la rotule" },
        { name: "Contusion du genou" },
      ],
    },
    {
      heading: "Douleurs de croissance chez l'adolescent",
      items: [
        { name: "Maladie d'Osgood-Schlatter", note: "Bosse douloureuse sous le genou, pendant la croissance" },
        { name: "Maladie de Sinding-Larsen-Johansson", note: "Douleur à la pointe de la rotule" },
      ],
    },
  ],
  sections: [
    {
      heading: "Un genou, plusieurs causes possibles",
      paragraphs: [
        "Le genou encaisse beaucoup : plusieurs fois votre poids à chaque marche, davantage en course ou en saut. Pensez à un plafond de tolérance : chaque genou supporte une certaine quantité d'effort. Quand la charge dépasse ce plafond (une reprise trop rapide, une côte, un déménagement, un changement de sport), la douleur apparaît, sans forcément qu'une structure soit abîmée. En attendant, on réduit la dose pour que la douleur se calme ; ensuite, ce plafond peut se relever grâce à un renforcement bien dosé.",
        "Les noms changent selon l'endroit qui réagit : la rotule, la bandelette sur le côté, un tendon, un ménisque, un ligament, ou l'articulation elle-même. D'où l'intérêt d'un bilan précis : les gestes qui font mal, la localisation, l'histoire, ce qui est survenu juste avant.",
      ],
    },
    {
      heading: "Ce que l'imagerie montre, et ne montre pas",
      paragraphs: [
        "Une IRM décrit l'aspect du genou, pas la douleur. Dans une grande revue de genoux sans douleur ni blessure, des anomalies du cartilage s'observaient en moyenne chez environ un quart des personnes, et des fissures de ménisque chez environ une sur dix. Après 40 ans, c'était environ deux personnes sur cinq pour le cartilage, et près d'une sur cinq pour le ménisque.",
        "Ces constats ne signifient pas qu'une IRM ne sert jamais : elle est utile si l'on suspecte une lésion qui change la décision (blocage vrai, instabilité après traumatisme). Mais une anomalie trouvée à l'image n'explique pas toujours votre douleur, et c'est la combinaison de l'examen clinique et de votre histoire qui guide le traitement.",
      ],
    },
    {
      heading: "La douleur ne mesure pas les dégâts",
      paragraphs: [
        "La douleur est une décision protectrice du cerveau, qui tient compte de la charge récente, du sommeil, du stress et de ce que vous craignez pour votre genou. Elle est réelle, jamais « dans la tête », mais elle ne se confond pas avec l'état des tissus.",
        "C'est une bonne nouvelle : la plupart des douleurs de genou répondent à un travail progressif, même quand l'IRM annonce de l'arthrose ou une fissure du ménisque.",
      ],
    },
  ],
  myths: [
    {
      myth: "« Mon cartilage est usé : je dois ménager mon genou et arrêter de courir. »",
      reality: [
        "On vous a peut-être dit que courir « use » les genoux. Dans une revue regroupant plus de 100 000 personnes, les coureurs de loisir n'avaient pas plus d'arthrose de hanche ou de genou que les personnes sédentaires, alors que les coureurs de haut niveau en avaient davantage. Les auteurs rappellent que ces données ne prouvent pas une cause directe (les blessures antérieures comptent beaucoup).",
        "Un genou douloureux n'est pas un genou « usé » : c'est plutôt un genou qui reçoit, à ce moment-là, plus de charge qu'il n'en tolère. Le cartilage se renouvelle peu, mais les muscles autour du genou, eux, s'adaptent à la charge : s'arrêter complètement par peur finit donc souvent par les affaiblir, et par laisser le genou moins bien soutenu. Mais continuer comme si de rien n'était n'est pas la solution non plus. On dose : on réduit ce qui irrite le temps que la douleur se calme, on renforce, puis on remonte les activités par paliers. Les recommandations de prise en charge de l'arthrose placent l'exercice en traitement de base, et non le repos prolongé.",
      ],
    },
    {
      myth: "« L'IRM montre mon problème, donc c'est là que se trouve la cause de ma douleur. »",
      reality: [
        "L'IRM est un outil précieux, mais elle trouve des anomalies sur des genoux qui ne font pas mal : fissures de ménisque, zones de cartilage irrégulières, petits becs osseux. Dans une revue de plus de 5000 genoux sans douleur, elles étaient fréquentes, et d'autant plus que l'on avance en âge.",
        "Un compte rendu qui dit « dégénératif » décrit un changement comme celui d'un visage qui vieillit : il est fréquent et n'est pas forcément la source de la douleur. Il se lit toujours avec l'examen du genou et votre histoire.",
      ],
    },
    {
      myth: "« Descendre les escaliers ou faire des squats abîme les genoux. »",
      reality: [
        "Ces gestes font mal à beaucoup de genoux douloureux, ce qui donne l'impression qu'ils sont dangereux. Pourtant, dans la douleur à l'avant du genou et dans l'arthrose, les programmes d'exercices que l'on recommande s'appuient justement sur des mouvements proches (squat, montée de marche, fente), dosés pour rester tolérables.",
        "Le problème n'est pas le mouvement mais la dose et la progression : trop, trop vite, sans préparation. Tant que le genou est douloureux, on adapte la dose (moins de profondeur, moins de répétitions, plus de pauses) plutôt que de forcer, et sans pour autant supprimer le geste. Si la douleur s'installe ou si le genou gonfle, c'est le signe que la dose était trop haute : on la redescend.",
      ],
    },
    {
      myth: "« Une infiltration va régler le problème. »",
      reality: [
        "Une infiltration peut soulager, parfois vite, et cela compte quand la douleur est vive. Mais dans l'arthrose du genou, la revue Cochrane sur les corticoïdes retrouve un soulagement qui s'estompe avec le temps, sans effet démontré à six mois, avec des études de qualité limitée.",
        "Elle ne reconstruit pas la force du genou ni ne change vos habitudes de charge. Utilisée comme une fenêtre pour reprendre le renforcement, elle peut avoir une place : cela se discute avec votre médecin.",
      ],
    },
    {
      myth: "« Avec de l'arthrose, seule une prothèse pourra m'aider. »",
      reality: [
        "L'arthrose du genou ne signifie pas une chirurgie à brève échéance. Les recommandations internationales placent en premier l'éducation, l'exercice et, en cas de surpoids, la perte de poids. L'exercice y apporte un soulagement de la douleur et une meilleure fonction, d'un ordre de grandeur comparable à celui des anti-inflammatoires.",
        "La prothèse reste une option pour certaines personnes dont les symptômes restent invalidants malgré une prise en charge bien conduite. C'est une décision à prendre avec un chirurgien, après avoir tout essayé en amont.",
      ],
    },
  ],
  careIntro:
    "Le but n'est ni de vous mettre au repos ni de forcer : trouver la dose d'effort que votre genou tolère aujourd'hui, puis la faire monter pas à pas, avec des repères clairs.",
  care: [
    {
      title: "Un bilan complet",
      text: "Nous reprenons votre histoire, votre sport ou votre travail, ce qui est survenu juste avant, et vos antécédents. Je teste vos mouvements, votre force, la stabilité et ce qui reproduit la douleur. Je vérifie aussi qu'elle ne vient pas de la hanche ou du dos, et si des signes d'alerte justifient un avis médical.",
    },
    {
      title: "Éducation et gestion de la charge",
      text: "Je vous explique ce que votre genou supporte, ce qui l'irrite et ce qui le fait progresser. Tant que le genou est douloureux, nous réduisons ce qui l'irrite (volume, dénivelé, chaussures, fréquence) sans forcément tout arrêter, puis nous remontons la dose par paliers pendant que vous renforcez. Une gêne légère et brève, qui retombe vite, est un repère acceptable ; une douleur qui augmente ou qui reste le lendemain signifie que la dose était trop élevée.",
    },
    {
      title: "Renforcement progressif",
      text: "C'est le cœur du travail : cuisses, fessiers, mollets, puis contrôle du genou dans les gestes utiles (marche, escalier, accroupi, course, saut). Les recommandations pour la douleur antérieure du genou et pour l'arthrose placent l'exercice en tout premier. On commence simple, on augmente la charge et la complexité à mesure que le genou répond.",
    },
    {
      title: "Contrôle du mouvement et mobilité",
      text: "Selon le diagnostic, je travaille la mobilité du genou et de la hanche, l'équilibre, la qualité de réception des sauts ou de la course. Après une entorse ou en cas d'instabilité, ces éléments sont essentiels pour reprendre confiance.",
    },
    {
      title: "Reprise du sport par paliers",
      text: "Course, vélo, sauts, sports de pivot : on les réintroduit selon vos réactions le lendemain, avec un coaching sportif si vous le souhaitez. Vous gardez des repères pour savoir quand avancer et quand lever le pied.",
    },
    {
      title: "Compléments et suivi avec votre médecin",
      text: "La thérapie manuelle peut soulager en complément, jamais en solution seule. Si l'amélioration tarde, ou si l'on suspecte une lésion à traiter autrement, je travaille avec votre médecin ou votre chirurgien : imagerie, infiltration, avis orthopédique. Je peux aussi vous suivre à distance en téléconsultation entre deux séances.",
    },
  ],
  redFlags: [
    "Genou chaud, rouge et gonflé, surtout avec de la fièvre ou un état fiévreux : consultez rapidement",
    "Blocage vrai : impossibilité d'étendre complètement le genou, avec sensation d'obstacle",
    "Genou qui lâche après un traumatisme, avec un gros gonflement apparu dans les heures qui suivent",
    "Impossibilité de mettre du poids sur la jambe, ou déformation visible après une chute ou un choc",
    "Douleur nocturne inexpliquée, qui ne se calme pas en changeant de position, ou perte de poids sans cause",
    "Mollet gonflé, chaud et douloureux, surtout après une immobilisation, un voyage ou une opération : suspicion de phlébite, consultez en urgence",
  ],
  faq: [
    {
      q: "Pourquoi mon genou fait-il mal à l'escalier ou quand je m'accroupis ?",
      a: [
        "Quand on plie le genou sous charge, la rotule est fortement sollicitée. Chez beaucoup de personnes avec une douleur antérieure du genou, c'est ce qui réveille la douleur : le genou y est tout simplement moins préparé que ce que l'activité lui demande.",
        "Cela ne veut pas dire qu'il est abîmé, ni qu'il faut passer outre la douleur. Le plus souvent, il faut doser ces gestes le temps que le genou se calme (moins de profondeur, moins de répétitions), puis le renforcer progressivement pour relever ce seuil. Nous commençons par des amplitudes et des charges tolérables, puis nous les augmentons.",
      ],
    },
    {
      q: "Puis-je continuer à courir avec une douleur de genou ?",
      a: [
        "L'idée n'est pas de courir malgré la douleur. Cela dépend de votre diagnostic, mais le plus souvent on commence par réduire la dose (distance, vitesse, pente, fréquence) pour que le genou se calme, puis on la remonte par paliers pendant que vous renforcez. Un repère courant en pratique : une gêne légère, qui ne s'aggrave pas pendant l'effort et qui est revenue à son niveau habituel le lendemain. Une douleur qui augmente, qui fait boiter ou qui fait gonfler le genou signifie que la dose est trop haute : on lève le pied.",
        "Réduire la dose, ce n'est pas arrêter pour toujours : c'est se donner les moyens de reprendre mieux. Le bilan permet de déterminer ce qui est raisonnable pour votre diagnostic.",
      ],
    },
    {
      q: "Faut-il faire une IRM ?",
      a: [
        "Pas toujours, et rarement en première intention. La plupart des douleurs de genou se traitent sans image, car des anomalies de cartilage ou de ménisque s'observent aussi sur des genoux sans douleur : environ un quart pour le cartilage et un dixième pour le ménisque dans une grande revue, davantage après 40 ans.",
        "L'IRM devient utile en cas de blocage vrai, d'instabilité après traumatisme, de gonflement important ou si le tableau est atypique. C'est votre médecin qui décide, avec mon bilan comme appui.",
      ],
    },
    {
      q: "J'ai de l'arthrose du genou : dois-je arrêter de courir ou de marcher, et le poids joue-t-il ?",
      a: [
        "En général, il n'est pas nécessaire d'arrêter toute activité. L'exercice est un traitement de première ligne de l'arthrose du genou selon les recommandations internationales : il diminue la douleur et améliore la fonction, avec un effet modéré. Marcher, pédaler, nager et renforcer sont recommandés, mais dosés selon votre douleur : pendant une poussée, on réduit la charge, puis on la remonte par paliers. Pour la course, tout dépend de votre genou et de votre expérience : on en discute au cas par cas.",
        "En cas de surpoids, perdre du poids aide : dans un essai de 18 mois chez des personnes âgées de 55 ans et plus, l'association régime et exercice a donné moins de douleur et une meilleure fonction que chacun seul. Nous restons dans une approche douce, sans culpabilisation.",
      ],
    },
    {
      q: "Mes genoux craquent : est-ce grave ?",
      a: [
        "Les craquements sont très fréquents et, la plupart du temps, sans conséquence quand ils ne s'accompagnent ni de douleur, ni de gonflement, ni de blocage. Ce n'est pas un signe d'arthrose à lui seul.",
        "S'ils sont associés à une douleur, un gonflement ou un genou qui se bloque, un bilan est utile.",
      ],
    },
    {
      q: "Infiltrations (acide hyaluronique, corticoïdes, PRP) : que penser de ces options ?",
      a: [
        "Le niveau de preuve est honnête mais nuancé. Pour les corticoïdes dans l'arthrose, un soulagement existe à court terme, qui s'efface en quelques semaines, sans effet démontré à six mois. Les recommandations (ACR, OARSI) les évoquent comme option ponctuelle pour une poussée douloureuse.",
        "L'acide hyaluronique et le PRP ont des résultats variables d'une revue à l'autre, avec des méthodes de préparation et de qualité d'étude très différentes. Ces options se discutent avec votre médecin, toujours en complément de l'exercice, jamais à sa place.",
      ],
    },
    {
      q: "Ménisque abîmé : opération ou kinésithérapie ?",
      a: [
        "Pour une lésion dégénérative du ménisque chez une personne d'âge moyen, sans arthrose avancée, un essai randomisé de 140 patients n'a pas trouvé de différence entre 12 semaines d'exercices supervisés et la chirurgie à deux ans. Un guide de pratique international déconseille d'ailleurs l'arthroscopie pour les lésions dégénératives, car son bénéfice est très faible, voire nul, à long terme.",
        "La situation est différente après un traumatisme chez une personne jeune, ou en cas de blocage vrai du genou : l'avis d'un orthopédiste est alors nécessaire. Dans tous les cas, la décision se prend avec votre médecin.",
      ],
    },
    {
      q: "Attelle, rotulienne, strapping, semelles : cela sert-il ?",
      a: [
        "Ces aides peuvent soulager sur le moment, mais elles ne remplacent pas le renforcement. Pour la douleur antérieure du genou, les recommandations néerlandaises indiquent de commencer par l'exercice et de n'ajouter d'autres mesures que si l'amélioration manque après environ six semaines.",
        "Le strapping, une semelle ou une attelle peuvent être essayés si vous en ressentez un bénéfice, comme appoint temporaire. L'effet varie d'une personne à l'autre : nous le testons, sans en faire une solution durable. Pour l'arthrose, une orthèse ou une canne peuvent aider selon les cas.",
      ],
    },
    {
      q: "Combien de temps faut-il pour aller mieux ?",
      a: [
        "Cela dépend du diagnostic, de l'ancienneté de la douleur et de votre charge. Pour la douleur antérieure du genou, les recommandations conseillent de réévaluer après environ six semaines d'exercices réguliers ; pour les tendinopathies, il faut souvent plus longtemps.",
        "Je ne peux pas vous promettre un délai : une entorse, une arthrose ou une lésion du ménisque n'évoluent pas pareil. Le bilan permet une estimation plus personnelle, que nous ajustons au fil des séances.",
      ],
    },
    {
      q: "Mon ado a mal au genou en faisant du sport : faut-il l'arrêter ?",
      a: [
        "Pendant la croissance, le genou fait souvent mal à cause des tractions répétées sur la zone de croissance (Osgood-Schlatter, Sinding-Larsen). C'est fréquent chez les ados sportifs et, le plus souvent, cela s'apaise une fois la croissance terminée.",
        "Il n'est généralement pas nécessaire d'arrêter totalement : on adapte la charge (nombre de séances, sauts, courses), on renforce et on garde un lien avec le médecin du sport. Un avis médical est nécessaire si la douleur est nocturne, s'il y a un gonflement, une boiterie ou si elle survient après un choc.",
      ],
    },
  ],
  related: [
    { href: "/kinesitherapie/tendinopathie", label: "Tendinopathie : tendon rotulien, patte d'oie, ischio-jambiers" },
    { href: "/kinesitherapie/reeducation-lca", label: "Rééducation du ligament croisé antérieur (LCA)" },
    { href: "/kinesitherapie/reeducation-post-operatoire", label: "Rééducation post-opératoire" },
    { href: "/blog/approche-biopsychosociale-kinesitherapie", label: "Article : l'approche biopsychosociale en kinésithérapie" },
  ],
  references: [
    {
      citation:
        "Ophey M, Koëter S, van Ooijen L, et al. Dutch multidisciplinary guideline on anterior knee pain: patellofemoral pain and patellar tendinopathy. Knee Surg Sports Traumatol Arthrosc. 2025;33(2):457-469.",
      pmid: "39045713",
    },
    {
      citation:
        "Crossley KM, van Middelkoop M, Callaghan MJ, et al. 2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 2: recommended physical interventions (exercise, taping, bracing, foot orthoses and combined interventions). Br J Sports Med. 2016;50(14):844-852.",
      pmid: "27247098",
    },
    {
      citation:
        "Culvenor AG, Øiestad BE, Hart HF, et al. Prevalence of knee osteoarthritis features on magnetic resonance imaging in asymptomatic uninjured adults: a systematic review and meta-analysis. Br J Sports Med. 2019;53(20):1268-1278.",
      pmid: "29886437",
    },
    {
      citation:
        "Kise NJ, Risberg MA, Stensrud S, et al. Exercise therapy versus arthroscopic partial meniscectomy for degenerative meniscal tear in middle aged patients: randomised controlled trial with two year follow-up. BMJ. 2016;354:i3740.",
      pmid: "27440192",
    },
    {
      citation:
        "Siemieniuk RAC, Harris IA, Agoritsas T, et al. Arthroscopic surgery for degenerative knee arthritis and meniscal tears: a clinical practice guideline. BMJ. 2017;357:j1982.",
      pmid: "28490431",
    },
    {
      citation:
        "Kolasinski SL, Neogi T, Hochberg MC, et al. 2019 American College of Rheumatology/Arthritis Foundation guideline for the management of osteoarthritis of the hand, hip, and knee. Arthritis Rheumatol. 2020;72(2):220-233.",
      pmid: "31908163",
    },
    {
      citation:
        "Fransen M, McConnell S, Harmer AR, et al. Exercise for osteoarthritis of the knee. Cochrane Database Syst Rev. 2015;(1):CD004376.",
      pmid: "25569281",
    },
    {
      citation:
        "Messier SP, Mihalko SL, Legault C, et al. Effects of intensive diet and exercise on knee joint loads, inflammation, and clinical outcomes among overweight and obese adults with knee osteoarthritis: the IDEA randomized clinical trial. JAMA. 2013;310(12):1263-1273.",
      pmid: "24065013",
    },
    {
      citation:
        "Alentorn-Geli E, Samuelsson K, Musahl V, et al. The association of recreational and competitive running with hip and knee osteoarthritis: a systematic review and meta-analysis. J Orthop Sports Phys Ther. 2017;47(6):373-390.",
      pmid: "28504066",
    },
    {
      citation:
        "Jüni P, Hari R, Rutjes AWS, et al. Intra-articular corticosteroid for knee osteoarthritis. Cochrane Database Syst Rev. 2015;(10):CD005328.",
      pmid: "26490760",
    },
  ],
};
