import type { Condition } from "./types";

export const blessuresCourseAPied: Condition = {
  slug: "blessures-course-a-pied",
  label: "Blessures en course à pied",
  title: "Blessures du coureur : charge et prise en charge",
  description:
    "Genou, tibia, Achille, talon : comprenez pourquoi on se blesse en courant (charge et capacité) et comment reprendre par paliers, à Woluwe-Saint-Lambert.",
  h1: "Blessures du coureur : comprendre la charge pour mieux reprendre",
  lead:
    "Une douleur au genou, au tibia, au talon ou à l'aine depuis que vous courez plus ? C'est très courant, et presque toujours compréhensible. Courir n'use pas votre corps : on se blesse le plus souvent quand la charge du moment dépasse ce que les tissus savent supporter. À Woluwe-Saint-Lambert, je vous aide à retrouver le terme de votre prescription, à doser votre course, à construire la capacité qui manque et à remonter par paliers.",
  takeaway:
    "Courir n'use pas : on se blesse quand la charge dépasse, ici et maintenant, ce que les tissus savent supporter. La capacité se construit, la charge se dose.",
  diagram: "charge-capacite",
  subtypeGroups: [
    {
      heading: "Genou et hanche",
      items: [
        {
          name: "Syndrome fémoro-patellaire (douleur autour de la rotule)",
          note: "Escaliers, descentes, position accroupie ; très fréquent chez le coureur",
          href: "/kinesitherapie/douleur-genou",
        },
        {
          name: "Syndrome de la bandelette ilio-tibiale (ITBS)",
          note: "Douleur sur le côté externe du genou, après un certain temps de course",
          href: "/kinesitherapie/douleur-genou",
        },
        {
          name: "Tendinopathie rotulienne",
          note: "Douleur sous la rotule, relances, côtes, sauts",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Tendinopathie du moyen fessier / syndrome douloureux du grand trochanter",
          note: "Douleur sur le côté de la hanche",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Tendinopathie proximale des ischio-jambiers",
          note: "Douleur profonde sous la fesse, en côte ou assis",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Douleur de l'aine ou du pubis du coureur",
          note: "Terme large : plusieurs causes possibles, un bilan est utile",
        },
      ],
    },
    {
      heading: "Jambe, cheville et pied",
      items: [
        {
          name: "Syndrome de stress tibial médial (« périostite », shin splints)",
          note: "Douleur le long de la face interne du tibia",
        },
        {
          name: "Fracture de fatigue (tibia, métatarsiens, col du fémur…)",
          note: "Douleur osseuse précise qui augmente : avis médical rapide",
        },
        {
          name: "Tendinopathie d'Achille",
          note: "Douleur au-dessus du talon, souvent au réveil ou en début de sortie",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Fasciopathie plantaire (« aponévrosite plantaire », fasciite)",
          note: "Douleur sous le talon, aux premiers pas du matin",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Tendinopathie du jambier postérieur",
          note: "Douleur à l'intérieur de la cheville ou de l'arche du pied",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Entorse de cheville",
          note: "Plutôt un accident qu'une surcharge, très présent chez le coureur sur terrain irrégulier",
          href: "/kinesitherapie/entorse-cheville",
        },
        {
          name: "Syndrome de loge d'effort",
          note: "Jambe tendue ou douloureuse pendant l'effort, qui cède au repos",
        },
      ],
    },
    {
      heading: "Muscles",
      items: [
        { name: "Lésion musculaire du mollet (« claquage »)", note: "Douleur vive soudaine en pleine foulée" },
        { name: "Lésion musculaire des ischio-jambiers (« claquage »)", note: "Souvent en accélérant ou en sprintant" },
        { name: "Contracture ou courbatures prolongées du coureur", note: "Raideur après une sortie inhabituelle" },
      ],
    },
  ],
  sections: [
    {
      heading: "Courir ne vous use pas : on se blesse quand la charge dépasse la capacité",
      paragraphs: [
        "Regardez le schéma ci-dessous : d'un côté, la charge que vous demandez à votre corps (vos sorties, leur durée, leur vitesse, leur fréquence) ; de l'autre, la capacité de vos tissus à la supporter. Une douleur de course apparaît le plus souvent quand le premier plateau dépasse le second, par exemple après une reprise rapide, un plan d'entraînement qui monte vite, une côte inhabituelle ou des chaussures neuves en plus. Ce n'est pas la preuve que quelque chose est « usé » : c'est un message de dosage.",
        "C'est aussi ce que montre la recherche sur l'arthrose : dans une grande revue regroupant plus de 100 000 personnes, les coureurs de loisir n'avaient pas plus d'arthrose de hanche ou de genou que les personnes sédentaires. Les auteurs précisent toutefois que ces données ne démontrent pas une cause. Le bon réflexe n'est donc ni d'arrêter par peur, ni de serrer les dents : on dose, on renforce, on remonte par paliers.",
        "Ces douleurs sont fréquentes : selon une revue systématique, environ quatre coureurs sur dix se blessent au cours d'un suivi (avec de grandes différences d'une étude à l'autre), surtout au genou, à la jambe et à la cheville ou au pied. Les plus souvent rapportées : tendinopathie d'Achille, syndrome de stress tibial médial, douleur autour de la rotule, fasciopathie plantaire, entorse de cheville. Les définitions varient beaucoup : ce sont des ordres de grandeur.",
      ],
    },
    {
      heading: "Quantifier le stress mécanique : ce qu'on peut mesurer",
      paragraphs: [
        "La charge se décrit avec des repères simples : le volume (distance, durée, nombre de sorties), l'intensité (allure, ou ressenti de l'effort sur une échelle de 0 à 10), la fréquence, le dénivelé, la surface et les chaussures. Une montre ou un carnet suffisent. Mais chaque tissu réagit à sa manière : un os encaisse des chocs répétés et a besoin de temps pour s'adapter, un tendon aime la charge progressive mais supporte mal les à-coups, un muscle récupère plus vite. Une même sortie ne « pèse » donc pas la même chose sur chacun, et un chiffre unique ne dira jamais tout.",
        "Qu'en dit la recherche ? La « règle des 10 % par semaine » n'est pas une loi : dans un essai chez 532 débutants, un programme construit sur cette règle n'a pas réduit le nombre de blessures (environ une sur cinq dans les deux groupes). Une revue systématique conclut que les preuves d'un lien entre changement de charge et blessure sont très limitées, avec une tendance à plus de blessures lors de hausses importantes de distance (plus de 30 % en une semaine, résultat non tranché). Le « ratio charge aiguë/charge chronique » séduit, mais des auteurs montrent qu'il est statistiquement fragile et qu'aucune étude ne prouve qu'agir dessus réduit les blessures. Retenez la direction, pas un seuil : monter par petits paliers, un paramètre à la fois.",
      ],
    },
    {
      heading: "Construire la capacité : force, progression, récupération",
      paragraphs: [
        "La capacité est ce qui se construit lentement. Le renforcement musculaire est le levier le mieux soutenu : dans une méta-analyse de six essais randomisés (près de 8 000 sportifs de 12 à 40 ans), les programmes de force réduisaient nettement les blessures. Attention : ces essais portaient sur des sportifs en général, pas sur des coureurs seuls ; le message est cohérent avec ce que l'on voit au cabinet, sans être une garantie individuelle. La progression (paliers, semaines plus légères, un seul paramètre à la fois) et la récupération complètent le tableau. Pour le sommeil et le stress, les liens avec les blessures sont surtout observationnels : je les prends en compte, sans promettre qu'ils évitent une blessure.",
        "Chaussures et foulée : restez sceptique face aux promesses. Une revue Cochrane de douze essais (plus de 11 000 participants) n'a pas montré qu'un type de chaussure réduisait clairement les blessures, avec des preuves de faible certitude. Quant à la cadence, augmenter le nombre de pas par minute modifie la biomécanique de course et pourrait soulager une douleur autour de la rotule, mais les preuves sur les blessures restent très limitées. Ce sont des essais à faire au cas par cas, pas des règles pour tous.",
      ],
    },
  ],
  myths: [
    {
      myth: "« Il suffit de ne pas augmenter de plus de 10 % par semaine. »",
      reality: [
        "C'est un repère de prudence, pas une garantie. Dans un essai randomisé chez des débutants, un programme bâti sur cette règle n'a pas fait mieux, pour le nombre de blessures, qu'un programme standard. Le bon rythme dépend de vous : votre histoire, la zone sensible, ce que contient le reste de votre semaine.",
        "Ce qui aide davantage : monter par petits paliers, changer un seul paramètre à la fois, et juger sur la réaction du lendemain.",
      ],
    },
    {
      myth: "« Courir use les genoux et le cartilage. »",
      reality: [
        "On vous l'a peut-être dit, mais les données ne vont pas dans ce sens : dans une grande revue, les coureurs de loisir avaient autant, voire moins, d'arthrose que les sédentaires. Les coureurs de compétition en avaient plus, sans que l'on puisse dire si la course elle-même ou des blessures antérieures expliquent la différence.",
        "Un genou douloureux n'est pas un genou « usé » : c'est plutôt un genou surchargé à ce moment-là. Si vous avez déjà de l'arthrose, la question est « quelle dose et quelle progression », à voir au cas par cas.",
      ],
    },
    {
      myth: "« Des chaussures très amortissantes préviennent les blessures. »",
      reality: [
        "La revue Cochrane sur les chaussures de course conclut qu'aucun type de chaussure ne s'est clairement montré protecteur, avec des preuves de faible certitude. Choisir sa chaussure d'après la forme de son pied n'a pas non plus réduit les blessures dans les essais, menés surtout chez des recrues militaires.",
        "Le plus raisonnable : une chaussure confortable pour vous, et un changement de modèle progressif, sans cumuler d'autres changements la même semaine.",
      ],
    },
    {
      myth: "« Il faut s'arrêter dès que ça fait mal, ou au contraire courir en serrant les dents. »",
      reality: [
        "Ni l'un ni l'autre. Si la douleur est vive, qu'elle vous fait boiter ou qu'elle augmente pendant la sortie, vous arrêtez la séance. Si la gêne est légère et stable, on réduit d'abord la dose (durée, allure, pente, fréquence), on garde ce qui est toléré, et on regarde la réaction du lendemain.",
        "Un arrêt complet prolongé baisse la capacité ; passer outre la douleur dépasse la charge tolérable. Le milieu, c'est de doser et de renforcer.",
      ],
    },
    {
      myth: "« Le renforcement, ce n'est pas pour les coureurs. »",
      reality: [
        "Les meilleures données sur la prévention viennent de sportifs en général, pas des seuls coureurs, mais elles sont nettes : les programmes de force réduisent les blessures, alors que les étirements seuls n'ont pas montré de bénéfice. Cela ne s'applique pas qu'aux coureurs de haut niveau : c'est la même logique de capacité.",
        "Il ne s'agit pas de devenir culturiste : deux séances courtes par semaine, progressives, suffisent souvent pour commencer.",
      ],
    },
  ],
  careIntro:
    "Mon rôle n'est ni de vous arrêter ni de vous laisser courir comme avant : c'est de comprendre votre charge, de bâtir la capacité qui manque, puis de vous faire remonter avec des repères clairs.",
  care: [
    {
      title: "Bilan du coureur",
      text: "Nous reprenons votre histoire d'entraînement et votre charge récente : volume, allures, terrain, chaussures, ce qui a changé juste avant la douleur, ainsi que le reste de votre semaine. Je teste ce qui reproduit la douleur, votre force et vos mouvements, et je repère les signes d'alerte.",
    },
    {
      title: "Conseils de reprise",
      text: "Je vous propose un plan de reprise par paliers : ce que vous gardez, ce que vous réduisez, comment remonter. On change un seul paramètre à la fois et on se fie à la réaction du lendemain plutôt qu'à une date.",
    },
    {
      title: "Renforcement spécifique",
      text: "Cuisses, fessiers, mollets, pied et gainage, rendus progressivement plus lourds puis plus proches du geste de course. Le programme est choisi selon la zone qui réagit et votre niveau.",
    },
    {
      title: "Analyse de la course à pied",
      text: "Nous regardons votre façon de courir, par exemple la cadence ou la réception du pas. Le but n'est pas de corriger une foulée « par principe » : on teste si un ajustement précis vous soulage, et on le dose comme le reste.",
    },
    {
      title: "Programmation et coaching sportif",
      text: "Je planifie votre charge sur plusieurs semaines : alternance de semaines plus légères, progression vers votre objectif (10 km, semi, marathon), place du renforcement et de la récupération. Le coaching sportif vous aide à tenir le cap.",
    },
    {
      title: "Accompagnement entre les séances",
      text: "Je peux vous suivre à distance en téléconsultation pour ajuster la dose après une sortie, répondre à une question ou adapter le plan, sans attendre le prochain rendez-vous. La thérapie manuelle, si elle vous soulage, reste un complément.",
    },
  ],
  redFlags: [
    "Douleur osseuse précise et localisée (tibia, pied, hanche, aine), qui augmente d'une sortie à l'autre, qui réveille la nuit ou qui persiste au repos : possible fracture de fatigue, consultez rapidement et ne courez plus",
    "Douleur à l'aine ou à la hanche avec boiterie ou impossibilité de s'appuyer normalement sur la jambe",
    "Douleur brutale avec claquement, gonflement important ou ecchymose étendue, ou perte de force nette",
    "Mollet gonflé, chaud et douloureux, surtout après un voyage, une immobilisation ou une opération : suspicion de phlébite, consultez en urgence",
    "Douleur nocturne sans lien avec l'effort, fièvre ou perte de poids inexpliquée",
    "Douleur thoracique, essoufflement inhabituel ou malaise à l'effort : arrêtez et consultez en urgence",
  ],
  faq: [
    {
      q: "De combien puis-je augmenter ma charge chaque semaine ?",
      a: [
        "Il n'existe pas de pourcentage valable pour tout le monde. La règle des 10 % n'a pas fait mieux qu'un programme standard dans un essai chez des débutants, et les preuves sur ce sujet restent limitées.",
        "Je préconise de monter par petits paliers, de changer un seul paramètre à la fois, de prévoir des semaines plus légères et de juger sur la réaction du lendemain. Après une pause ou une blessure, reprenez avec une marge.",
      ],
    },
    {
      q: "Comment mesurer ma charge d'entraînement ?",
      a: [
        "Une montre, une appli ou un simple carnet suffisent : distance ou durée, allure, dénivelé, nombre de sorties, et un ressenti de l'effort noté de 0 à 10. Ajoutez ce qui pèse aussi sur vos jambes (autre sport, travail debout, déménagement) et le sommeil si vous le souhaitez.",
        "Aucune métrique n'est parfaite : les calculs plus complexes, comme le ratio charge aiguë/chronique, n'ont pas prouvé qu'ils réduisaient les blessures. L'intérêt est surtout de repérer un changement brusque.",
      ],
    },
    {
      q: "Combien de jours de repos faut-il par semaine ?",
      a: [
        "Je ne connais pas de nombre étayé par des études, et il dépend de votre niveau, de l'intensité des sorties et de votre sommeil. En pratique, alternez des séances faciles et des séances plus exigeantes, évitez d'enchaîner plusieurs séances dures, et gardez au moins un jour plus léger.",
        "Si vous vous sentez toujours fatigué, que les jambes restent lourdes ou que la douleur s'installe, c'est le signe de ralentir cette semaine-là.",
      ],
    },
    {
      q: "Puis-je courir avec une douleur ?",
      a: [
        "Cela dépend du diagnostic. Le plus souvent, on ne cherche pas à courir malgré la douleur : on réduit la dose (durée, vitesse, pente, fréquence) pour que la zone se calme. Un repère courant : une gêne légère, qui ne monte pas pendant la sortie et qui est revenue à son niveau habituel le lendemain.",
        "Si la douleur augmente, vous fait boiter, réveille la nuit ou persiste au repos, arrêtez et faites évaluer : une douleur osseuse précise demande un avis médical.",
      ],
    },
    {
      q: "Quelles chaussures choisir ?",
      a: [
        "La recherche ne permet pas de désigner un type de chaussure qui protège mieux. Choisir selon la forme du pied n'a pas réduit les blessures dans les essais. Prenez une chaussure confortable pour vous, et changez de modèle progressivement.",
        "Un changement de chaussure est aussi un changement de charge : évitez de le cumuler avec une hausse de volume ou de dénivelé.",
      ],
    },
    {
      q: "Dois-je changer ma foulée ou ma cadence ?",
      a: [
        "Rarement par principe. Augmenter légèrement le nombre de pas par minute réduit certaines contraintes sur le genou et pourrait soulager une douleur autour de la rotule, mais les preuves sur la prévention des blessures restent insuffisantes.",
        "Je regarde ce qu'un petit ajustement change chez vous, et je le dose comme le reste. Une foulée différente est aussi une nouvelle charge pour d'autres tissus.",
      ],
    },
    {
      q: "Quel renforcement faire, et combien de fois par semaine ?",
      a: [
        "Pour commencer, deux séances courtes par semaine : cuisses (squat, montée de marche), fessiers (pont, pas latéraux), mollets (montées sur la pointe des pieds, d'abord à deux jambes, puis à une) et gainage. On démarre simple, on ajoute de la charge quand le corps répond.",
        "Les études sur la prévention portent sur des sportifs en général et ne fixent pas un nombre de séances idéal pour le coureur. Le bon programme dépend de votre zone sensible et de votre niveau.",
      ],
    },
    {
      q: "Comment reprendre après une blessure ?",
      a: [
        "Par paliers, sur des critères plutôt que sur une date : la douleur au repos et à la marche, la force, puis des sorties courtes en alternant marche et course, avec la réaction du lendemain pour guider chaque palier. Vous trouverez le détail dans l'article sur la reprise du sport après une blessure.",
        "La douleur disparaît souvent avant que la capacité soit reconstruite, d'où l'intérêt de continuer le renforcement après la reprise.",
      ],
    },
    {
      q: "Comment préparer un 10 km, un semi ou un marathon en limitant le risque ?",
      a: [
        "Partez de ce que vous faites réellement aujourd'hui, pas d'un plan trouvé en ligne. Montez par paliers avec des semaines plus légères, ne cumulez pas hausse de volume, de vitesse et de dénivelé, et gardez le renforcement toute la préparation. Aucun plan ne garantit l'absence de blessure : on l'ajuste selon vos réactions.",
        "Pour les distances longues, l'antécédent de blessure compte : les revues retrouvent la blessure précédente parmi les facteurs de risque les plus constants. C'est une raison de plus de planifier avec soin.",
      ],
    },
    {
      q: "Les surfaces et le dénivelé comptent-ils ?",
      a: [
        "Oui, comme variation de charge, mais les études ne désignent pas « la bonne » surface. Passer du plat à un parcours vallonné, ou d'un chemin à du bitume, sollicite autrement les tissus, et les descentes ou les côtes sont souvent ce qui réveille un genou ou un tendon sensible.",
        "L'essentiel : évitez de cumuler plusieurs changements dans la même semaine et variez les terrains progressivement.",
      ],
    },
    {
      q: "Quand dois-je consulter ?",
      a: [
        "Rapidement si vous avez une douleur osseuse précise qui augmente ou réveille la nuit, une boiterie, un gonflement important, un claquement ou une douleur à l'aine avec boiterie. Dans les autres cas, consultez si la gêne revient à chaque sortie ou ne se calme pas en une à deux semaines malgré une charge réduite.",
        "Un premier bilan évite souvent de laisser s'installer une douleur qui dure. Il se fait avec une prescription de votre médecin si vous souhaitez un remboursement.",
      ],
    },
  ],
  related: [
    { href: "/kinesitherapie/douleur-genou", label: "Douleur de genou : rotule, bandelette, tendon" },
    { href: "/kinesitherapie/tendinopathie", label: "Tendinopathie : Achille, rotulien, fessier" },
    { href: "/kinesitherapie/entorse-cheville", label: "Entorse de cheville" },
    { href: "/blog/courir-a-woluwe-sans-se-blesser", label: "Article : courir à Woluwe sans se blesser" },
    { href: "/blog/reprendre-le-sport-apres-une-blessure", label: "Article : reprendre le sport après une blessure" },
  ],
  references: [
    {
      citation:
        "Kakouris N, Yener N, Fong DTP. A systematic review of running-related musculoskeletal injuries in runners. J Sport Health Sci. 2021;10(5):513-522.",
      pmid: "33862272",
    },
    {
      citation:
        "Videbæk S, Bueno AM, Nielsen RO, Rasmussen S. Incidence of running-related injuries per 1000 h of running in different types of runners: a systematic review and meta-analysis. Sports Med. 2015;45(7):1017-1026.",
      pmid: "25951917",
    },
    {
      citation:
        "Buist I, Bredeweg SW, van Mechelen W, et al. No effect of a graded training program on the number of running-related injuries in novice runners: a randomized controlled trial. Am J Sports Med. 2008;36(1):33-39.",
      pmid: "17940147",
    },
    {
      citation:
        "Damsted C, Glad S, Nielsen RO, Sørensen H, Malisoux L. Is there evidence for an association between changes in training load and running-related injuries? A systematic review. Int J Sports Phys Ther. 2018;13(6):931-942.",
      pmid: "30534459",
    },
    {
      citation:
        "Impellizzeri FM, Tenan MS, Kempton T, Novak A, Coutts AJ. Acute:chronic workload ratio: conceptual issues and fundamental pitfalls. Int J Sports Physiol Perform. 2020;15(6):907-913.",
      pmid: "32502973",
    },
    {
      citation:
        "Soligard T, Schwellnus M, Alonso JM, et al. How much is too much? (Part 1) International Olympic Committee consensus statement on load in sport and risk of injury. Br J Sports Med. 2016;50(17):1030-1041.",
      pmid: "27535989",
    },
    {
      citation:
        "Lauersen JB, Andersen TE, Andersen LB. Strength training as superior, dose-dependent and safe prevention of acute and overuse sports injuries: a systematic review, qualitative analysis and meta-analysis. Br J Sports Med. 2018;52(24):1557-1563.",
      pmid: "30131332",
    },
    {
      citation:
        "Relph N, Greaves H, Armstrong R, et al. Running shoes for preventing lower limb running injuries in adults. Cochrane Database Syst Rev. 2022;8(8):CD013368.",
      pmid: "35993829",
    },
    {
      citation:
        "Anderson LM, Martin JF, Barton CJ, Bonanno DR. What is the effect of changing running step rate on injury, performance and biomechanics? A systematic review and meta-analysis. Sports Med Open. 2022;8(1):112.",
      pmid: "36057913",
    },
    {
      citation:
        "Alentorn-Geli E, Samuelsson K, Musahl V, et al. The association of recreational and competitive running with hip and knee osteoarthritis: a systematic review and meta-analysis. J Orthop Sports Phys Ther. 2017;47(6):373-390.",
      pmid: "28504066",
    },
  ],
};
