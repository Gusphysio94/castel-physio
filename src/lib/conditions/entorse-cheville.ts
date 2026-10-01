import type { Condition } from "./types";

export const entorseCheville: Condition = {
  slug: "entorse-cheville",
  label: "Entorses de cheville et du pied",
  title: "Entorse de cheville et du pied : kiné à Bruxelles",
  description:
    "Entorse de cheville, entorse haute, Lisfranc, instabilité chronique : récupérer force, équilibre et confiance. Kiné du sport à Woluwe-Saint-Lambert.",
  h1: "Entorse de cheville ou du pied : bien récupérer pour ne pas y revenir",
  lead:
    "Une entorse de cheville, c'est banal... jusqu'au jour où elle vous arrive, et où l'on ne sait plus trop comment poser le pied. Dans la plupart des cas, elle évolue bien, mais une cheville qui ne fait plus mal n'est pas forcément une cheville de nouveau fiable. C'est là que la rééducation fait la différence.",
  takeaway:
    "Une entorse de cheville ne se soigne ni par un repos prolongé, ni en continuant comme si de rien n'était : elle se récupère en reprenant le mouvement tôt mais de façon dosée, puis en retravaillant la force et l'équilibre, même quand la douleur a disparu.",

  subtypeGroups: [
    {
      heading: "Cheville : entorses les plus fréquentes",
      items: [
        {
          name: "Entorse latérale de cheville (entorse externe)",
          note: "La plus courante : pied qui se tord vers l'intérieur",
        },
        {
          name: "Entorse du ligament talo-fibulaire antérieur (LTFA)",
          note: "Le ligament le plus souvent touché sur le côté externe",
        },
        {
          name: "Entorse du ligament calcanéo-fibulaire (LCF)",
          note: "Souvent associée au LTFA dans les entorses plus sévères",
        },
        {
          name: "Entorse médiale de cheville (ligament deltoïde)",
          note: "Côté interne de la cheville, plus rare",
        },
        {
          name: "Entorse de cheville grade I, II ou III",
          note: "Grades de gravité : étirement, déchirure partielle, rupture",
        },
        {
          name: "Entorse sous-talienne",
          note: "Atteinte de l'articulation sous la cheville, entre talus et calcanéus",
        },
      ],
    },
    {
      heading: "Entorse haute et suites compliquées",
      items: [
        {
          name: "Entorse haute de cheville (entorse de la syndesmose)",
          note: "Atteinte des ligaments qui relient tibia et péroné",
        },
        {
          name: "Instabilité chronique de cheville",
          note: "Cheville qui « lâche » ou récidive après une entorse",
        },
        {
          name: "Entorses de cheville à répétition",
          note: "Plusieurs entorses sur la même cheville",
        },
        {
          name: "Conflit antéro-externe de cheville",
          note: "Douleur persistante à l'avant et au côté externe",
        },
        {
          name: "Lésion ostéochondrale du talus (suite d'entorse)",
          note: "Atteinte du revêtement de l'os, à rechercher si la douleur persiste",
        },
        {
          name: "Rééducation après fracture malléolaire ou immobilisation",
          note: "Reprise de la mobilité, de la force et de la marche",
        },
        {
          name: "Raideur ou gonflement persistant après entorse",
          note: "Cheville qui reste gonflée ou limitée en flexion",
        },
      ],
    },
    {
      heading: "Pied et orteils",
      items: [
        {
          name: "Entorse de Lisfranc (médio-pied)",
          note: "Atteinte des ligaments entre le milieu du pied et l'avant-pied",
        },
        {
          name: "Entorse de Chopart (médio-tarsienne)",
          note: "Atteinte des articulations entre l'arrière-pied et le médio-pied",
        },
        {
          name: "Entorse métatarsophalangienne du gros orteil (turf toe)",
          note: "Gros orteil forcé en extension, fréquente en sport",
        },
        {
          name: "Entorse du gros orteil",
          note: "Articulation à la base du gros orteil",
        },
        {
          name: "Entorse des orteils (petits orteils)",
          note: "Choc ou torsion d'un orteil, hors fracture",
        },
        {
          name: "Entorse du pied (entorse du médio-pied)",
          note: "Terme général fréquent sur les prescriptions",
        },
      ],
    },
  ],

  sections: [
    {
      heading: "Ce qui se passe dans une entorse",
      paragraphs: [
        "Les ligaments sont des bandes solides qui relient les os entre eux et aident l'articulation à rester bien guidée. Lors d'une entorse, ils sont étirés au-delà de ce qu'ils supportent, parfois partiellement déchirés. Sur la cheville, c'est le plus souvent le côté externe qui est touché, quand le pied se tord vers l'intérieur.",
        "Les entorses plus rares, comme l'entorse haute (syndesmose), l'entorse de Lisfranc ou l'entorse de Chopart, touchent d'autres ligaments. Elles sont plus souvent liées à un choc ou à une torsion importante, et leur récupération demande généralement plus de temps et de précautions.",
      ],
    },
    {
      heading: "Pourquoi la cheville « lâche » parfois ensuite",
      paragraphs: [
        "Imaginez le contrôle de votre cheville comme un pilote automatique qui corrige en permanence, des milliers de fois par jour, la position du pied. Après une entorse, ce pilote automatique est perturbé : des capteurs ont été touchés, les muscles réagissent un peu plus lentement, la confiance baisse. Les ligaments cicatrisent, mais ce réglage fin ne revient pas toujours tout seul.",
        "C'est pourquoi une entorse peut laisser une impression d'instabilité ou provoquer des récidives. Les recommandations de pratique décrivent l'instabilité chronique comme la persistance de ces plaintes d'instabilité après une première entorse. La rééducation vise à remettre ce pilote automatique en route.",
      ],
    },
  ],

  myths: [
    {
      myth: "« Une entorse, ce n'est rien, ça passe tout seul. »",
      reality: [
        "Souvent, la douleur diminue en quelques semaines. Mais les recommandations décrivent que, chez une partie des personnes, des plaintes d'instabilité persistent, ce qu'on appelle l'instabilité chronique.",
        "Une première entorse mérite donc un minimum de suivi, surtout pour la force et l'équilibre.",
      ],
    },
    {
      myth: "« Il faut immobiliser et ne pas poser le pied. »",
      reality: [
        "Une courte protection peut soulager la douleur et le gonflement. Mais une vue d'ensemble de revues systématiques retient des preuves solides pour la mobilisation précoce, c'est-à-dire reprendre l'appui et le mouvement dans la mesure de la douleur, sans forcer. Tant que la cheville est douloureuse, on dose les efforts : marche courte, pas de sport ni de terrain irrégulier, avant de remonter progressivement.",
        "Les exceptions existent : fracture, entorse haute ou atteinte de Lisfranc, où le médecin peut prescrire une protection.",
      ],
    },
    {
      myth: "« Il faut mettre de la glace pour guérir. »",
      reality: [
        "La glace peut soulager un moment, mais ce n'est pas elle qui fait cicatriser les ligaments. Les approches actuelles (PEACE & LOVE) mettent l'accent sur le mouvement progressif, les exercices et la confiance.",
      ],
    },
    {
      myth: "« Si ça ne fait plus mal, la cheville est guérie. »",
      reality: [
        "La douleur disparaît souvent avant que le contrôle de la cheville soit revenu. Les exercices de rééducation réduisent le risque de nouvelle entorse, un effet visible surtout à partir de plusieurs mois.",
      ],
    },
    {
      myth: "« Une entorse sans fracture n'a pas besoin de rééducation. »",
      reality: [
        "L'absence de fracture écarte un os cassé, mais pas un ligament touché ni un contrôle de la cheville perturbé. Les recommandations de pratique clinique incluent les exercices supervisés dans la prise en charge, plutôt que les seules méthodes passives.",
      ],
    },
  ],

  careIntro:
    "La kinésithérapie n'est pas là pour « masser la cheville ». Elle sert à vous remettre en mouvement tôt, à rebâtir force et équilibre, puis à vous ramener progressivement à vos activités, avec moins de risque de récidive.",
  care: [
    {
      title: "Bilan et orientation",
      text: "Je fais un bilan complet : mécanisme de l'accident, zones douloureuses, mobilité, stabilité, capacité d'appui. Il aide à situer la gravité et à repérer les cas où une radio ou un avis médical s'impose. Une évaluation faite quelques jours après l'accident est souvent plus fiable que celle du premier jour.",
    },
    {
      title: "Bouger tôt et gérer le gonflement",
      text: "Dès que la douleur le permet, on reprend l'appui et la marche, avec ou sans soutien selon le cas. Mobilité douce, surélévation et compression légère aident à gérer le gonflement. Dans les entorses plus sévères ou plus rares (entorse haute, Lisfranc), le médecin peut décider d'un temps de protection : nous suivons son avis.",
    },
    {
      title: "Retrouver la mobilité et la force",
      text: "Nous travaillons la flexion vers le haut, la souplesse du mollet, puis le renforcement progressif : péroniers, mollet, muscles du pied et de la hanche. La thérapie manuelle peut compléter le travail pour soulager et aider à bouger, sans le remplacer.",
    },
    {
      title: "Équilibre et contrôle de la cheville",
      text: "C'est le cœur de la rééducation : se tenir sur une jambe, changer de support, fermer les yeux, ajouter des déséquilibres puis des tâches du sport. L'objectif est de remettre le « pilote automatique » en état, pas seulement de renforcer des muscles.",
    },
    {
      title: "Reprise de la course et du sport",
      text: "Marche rapide, course, changements de direction, sauts et réceptions : chaque étape est reprise de façon graduelle, en gérant la charge. La reprise se décide sur des critères fonctionnels (force, équilibre, sauts, confiance), pas seulement sur une date.",
    },
    {
      title: "Prévenir les récidives",
      text: "Nous construisons un programme d'entretien court, faisable chez vous, et nous discutons du soutien à la reprise (strapping ou orthèse) selon votre sport et votre histoire. Si besoin, je travaille avec votre médecin ou votre chirurgien, et la téléconsultation peut aider au suivi.",
    },
  ],

  redFlags: [
    "Impossibilité de poser le pied ou de faire quatre pas juste après l'accident",
    "Douleur vive à la pression de l'os (pointe des malléoles, base du cinquième métatarsien, os naviculaire)",
    "Déformation visible, pied qui paraît déplacé, ou gonflement très important du milieu du pied",
    "Engourdissement, pied froid ou pâle, ou douleur de mollet avec chaleur et rougeur",
    "Douleur, gonflement ou instabilité qui ne s'améliorent pas au fil des semaines",
  ],

  faq: [
    {
      q: "Dois-je mettre de la glace et me reposer ?",
      a: [
        "Dans les premiers jours, on cherche surtout à protéger sans immobiliser trop longtemps. Les approches actuelles, regroupées sous le sigle PEACE & LOVE, insistent sur la protection au début, la surélévation, puis sur le mouvement progressif, les exercices et la confiance.",
        "La glace peut soulager à court terme, mais elle n'est pas une condition de la guérison. Un repos complet prolongé n'est pas recommandé. Pour les médicaments contre la douleur, parlez-en à votre médecin ou pharmacien.",
      ],
    },
    {
      q: "Puis-je marcher dessus tout de suite ? Faut-il commencer la rééducation tôt ?",
      a: [
        "Dans la plupart des entorses latérales, oui, et plutôt tôt, dans la mesure de la douleur : on marche, mais sans forcer, et on dose la distance et la vitesse tant que la cheville est sensible. La mobilisation précoce est l'une des approches les mieux soutenues par les revues systématiques pour la douleur, le gonflement et la fonction.",
        "Les exceptions : si vous ne pouvez pas faire quatre pas, si l'os est douloureux à la pression, ou si le médecin a prescrit une protection (entorse haute, Lisfranc). Dans ces cas, suivez son avis.",
      ],
    },
    {
      q: "Faut-il faire une radio ?",
      a: [
        "Pas systématiquement. Les règles d'Ottawa aident le médecin à décider : une radio est proposée si vous ne pouvez pas faire quatre pas, ou si certaines zones osseuses précises (malléoles, base du cinquième métatarsien, os naviculaire) sont douloureuses à la pression.",
        "Ces règles sont très sensibles : si elles sont négatives, une fracture est peu probable. En revanche, elles sont peu spécifiques : une radio demandée à tort est donc fréquente, et elle ne montre pas les ligaments. Elle n'a pas à être refaite sans raison.",
      ],
    },
    {
      q: "Mon entorse est-elle grave ? Que veulent dire les grades ?",
      a: [
        "On parle de grade I (ligament étiré), II (déchirure partielle) ou III (rupture). Cette classification est utile, mais elle repose sur l'examen clinique et reste imparfaite.",
        "La gravité est souvent plus fiable à évaluer quelques jours après l'accident, quand le gonflement a diminué. Surtout, le grade ne prédit pas tout : la récupération dépend aussi de votre activité, de votre sport et de votre contrôle de la cheville.",
      ],
    },
    {
      q: "Faut-il une attelle, un strapping ou une orthèse ?",
      a: [
        "Les recommandations indiquent qu'après une entorse aiguë, l'association d'un soutien (tape ou orthèse) et d'un programme d'exercices est plus bénéfique que l'immobilisation seule. Pour prévenir les récidives, les orthèses ont un bon niveau de preuve.",
        "Elles ne remplacent pas le travail de force et d'équilibre. Le choix dépend de votre sport et de votre confort. Nous en discutons ensemble.",
      ],
    },
    {
      q: "Quand pourrai-je reprendre le sport ?",
      a: [
        "Cela dépend de la gravité, du sport, et surtout de la façon dont la cheville répond. Pour une entorse latérale légère, ce sont souvent quelques semaines ; pour une entorse plus sévère, plusieurs semaines à quelques mois. Je ne peux pas vous donner une date fixe honnêtement.",
        "La reprise se décide sur des critères fonctionnels : appui sans douleur, force, équilibre sur une jambe, sauts et changements de direction sans appréhension.",
      ],
    },
    {
      q: "L'entorse haute (syndesmose) est-elle vraiment plus longue ?",
      a: [
        "Oui, généralement. Elle touche les ligaments qui maintiennent tibia et péroné ensemble, et elle demande souvent plus de précautions au début. Dans les séries de sportifs, le retour au sport prend en moyenne un peu plus d'un mois, avec de grandes variations selon la gravité.",
        "Certaines entorses hautes nécessitent une opération pour stabiliser la zone : cela se décide avec le chirurgien après imagerie.",
      ],
    },
    {
      q: "Pourquoi ma cheville est-elle encore gonflée ou raide après des semaines ?",
      a: [
        "Un gonflement léger, surtout en fin de journée, peut persister longtemps après une entorse, y compris quand la cheville fonctionne mieux. La raideur en flexion vers le haut est également fréquente.",
        "Ce n'est pas forcément inquiétant, mais si une douleur profonde, un blocage ou un gonflement important persistent sans amélioration, parlez-en à votre médecin : une autre atteinte, comme une lésion du revêtement de l'os (lésion ostéochondrale), doit parfois être recherchée.",
      ],
    },
    {
      q: "Pourquoi tourne-t-elle encore, et comment éviter les récidives ?",
      a: [
        "Après une entorse, certaines personnes gardent une cheville qui « lâche » ou se tord à répétition : on parle d'instabilité chronique. Elle est liée à des troubles de la stabilité et du contrôle moteur, pas seulement à un ligament « trop lâche ».",
        "Les exercices de force, de proprioception et d'équilibre font partie des mesures les mieux soutenues : une méta-analyse d'essais randomisés montre qu'ils réduisent le risque de nouvelle blessure, surtout après plusieurs mois. Le contenu exact du programme idéal reste à préciser.",
      ],
    },
    {
      q: "Quand envisager une opération ?",
      a: [
        "Pour les entorses latérales, les recommandations réservent la chirurgie aux cas qui ne répondent pas à un traitement complet à base d'exercices. Elle peut aussi se discuter pour certaines entorses hautes, certaines atteintes de Lisfranc ou certaines lésions ostéochondrales.",
        "Cette décision est celle de votre chirurgien, selon l'imagerie, votre sport et vos symptômes. Si une opération a lieu, la rééducation fait ensuite partie du projet.",
      ],
    },
  ],

  related: [
    { href: "/kinesitherapie/reeducation-post-operatoire", label: "Rééducation post-opératoire" },
    { href: "/kinesitherapie/tendinopathie", label: "Tendinopathies" },
    { href: "/blog/retour-sport-apres-lca", label: "Article : critères de retour au sport" },
    { href: "/kinesitherapie/woluwe-saint-lambert", label: "Kinésithérapie à Woluwe-Saint-Lambert" },
  ],

  testimonial: {
    quote:
      "Rééducation d'une entorse de la cheville. Super à l'écoute, Augustin est resté très attentif à l'évolution avec des conseils précieux. À conseiller pour toute blessure sportive.",
    author: "Florian Lemaire, patient (avis Google)",
  },
  references: [
    {
      citation:
        "Vuurberg G, Hoorntje A, Wink LM, et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med. 2018;52(15):956.",
      pmid: "29514819",
    },
    {
      citation:
        "Martin RL, Davenport TE, Fraser JJ, et al. Ankle Stability and Movement Coordination Impairments: Lateral Ankle Ligament Sprains Revision 2021. J Orthop Sports Phys Ther. 2021;51(4):CPG1-CPG80.",
      pmid: "33789434",
    },
    {
      citation:
        "Doherty C, Bleakley C, Delahunt E, et al. Treatment and prevention of acute and recurrent ankle sprain: an overview of systematic reviews with meta-analysis. Br J Sports Med. 2017;51(2):113-125.",
      pmid: "28053200",
    },
    {
      citation:
        "Bleakley CM, Taylor JB, Dischiavi SL, et al. Rehabilitation Exercises Reduce Reinjury Post Ankle Sprain, But the Content and Parameters of an Optimal Exercise Program Have Yet to Be Established: A Systematic Review and Meta-analysis. Arch Phys Med Rehabil. 2019;100(7):1367-1375.",
      pmid: "30612980",
    },
    {
      citation:
        "Delahunt E, Bleakley CM, Bossard DS, et al. Clinical assessment of acute lateral ankle sprain injuries (ROAST): 2019 consensus statement and recommendations of the International Ankle Consortium. Br J Sports Med. 2018;52(20):1304-1310.",
      pmid: "29886432",
    },
    {
      citation:
        "Beckenkamp PR, Lin CC, Macaskill P, et al. Diagnostic accuracy of the Ottawa Ankle and Midfoot Rules: a systematic review with meta-analysis. Br J Sports Med. 2017;51(6):504-510.",
      pmid: "27884861",
    },
    {
      citation:
        "Gomes YE, Chau M, Banwell HA, et al. Diagnostic accuracy of the Ottawa ankle rule to exclude fractures in acute ankle injuries in adults: a systematic review and meta-analysis. BMC Musculoskelet Disord. 2022;23(1):885.",
      pmid: "36151550",
    },
    {
      citation:
        "Vancolen SY, Nadeem I, Horner NS, et al. Return to Sport After Ankle Syndesmotic Injury: A Systematic Review. Sports Health. 2019;11(2):116-122.",
      pmid: "30550364",
    },
    {
      citation:
        "Bolia IK, Bogdanov J, Schoell K, et al. Elite Athletes Successfully Return to the Preinjury Level of Sport Following Ankle Syndesmosis Injuries: A Systematic Review and Meta-Analysis. Clin J Sport Med. 2023;33(1):90-96.",
      pmid: "36599363",
    },
    {
      citation:
        "Buck TMF, Lauf K, Dahmen J, et al. Non-operative management for osteochondral lesions of the talus: a systematic review of treatment modalities, clinical- and radiological outcomes. Knee Surg Sports Traumatol Arthrosc. 2023;31(8):3517-3527.",
      pmid: "37062042",
    },
    {
      citation:
        "Zhang BY, Zhang XH, Qian Y, et al. Research progress in treatment principles of acute closed soft tissue injuries (revue narrative). Zhongguo Yi Xue Ke Xue Yuan Xue Bao. 2024;46(6):828-835.",
      pmid: "39773503",
    },
  ],
};
