import type { Condition } from "./types";

export const ondesDeChoc: Condition = {
  slug: "ondes-de-choc",
  label: "Ondes de choc",
  title: "Ondes de choc : indications, preuves, kiné à Bruxelles",
  description:
    "Ondes de choc chez le kiné à Woluwe-Saint-Lambert : pour quelles douleurs (talon, épaule calcifiée…) elles aident ou non, et leur place à côté de l'exercice.",
  h1: "Ondes de choc : ce que dit la recherche, et leur place dans une prise en charge",
  lead:
    "Vous cherchez un kiné qui pratique les ondes de choc, pour le talon, l'épaule, le coude ou un tendon ? Je propose cette technique au cabinet, à Woluwe-Saint-Lambert. Mais, selon la zone, les preuves vont de « plutôt solides » à « faibles ». Voici, sans promesse, pour quoi elles peuvent aider, pour quoi elles aident peu, et comment je les intègre à un programme d'exercices.",
  takeaway:
    "Les ondes de choc peuvent être un complément utile pour certaines douleurs, mais elles ne remplacent pas l'exercice : ce qui rend un tendon ou un pied durablement plus tolérant, c'est une charge bien dosée, puis progressive.",
  typesHeading: "Pour quelles douleurs ?",
  typesIntro:
    "Les indications les plus étudiées, avec le niveau de preuve pour chacune. Une douleur absente de la liste peut se discuter lors du bilan.",
  subtypeGroups: [
    {
      heading: "Indications étudiées",
      items: [
        {
          name: "Tendinopathie calcifiante de l'épaule (coiffe des rotateurs)",
          note: "Preuves les plus solides, mais de certitude très faible",
          href: "/kinesitherapie/douleur-epaule",
        },
        {
          name: "Fasciopathie plantaire (douleur sous le talon)",
          note: "Preuves partagées : plutôt favorables, mais hétérogènes",
          href: "/kinesitherapie/blessures-course-a-pied",
        },
        {
          name: "Épicondylite latérale (tennis elbow)",
          note: "Preuves partagées, bénéfice petit et inconstant",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Tendinopathie du moyen fessier / douleur du grand trochanter",
          note: "Preuves partagées : résultats prometteurs, essais peu nombreux",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Tendinopathie d'Achille (corps du tendon ou insertion)",
          note: "Preuves faibles : pas de bénéfice clair face à un placebo",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Tendinopathie rotulienne (genou du sauteur)",
          note: "Preuves faibles : pas de bénéfice à court terme",
          href: "/kinesitherapie/tendinopathie",
        },
        {
          name: "Syndrome de stress tibial médial (périostite tibiale)",
          note: "Preuves faibles : peu d'essais de qualité",
          href: "/kinesitherapie/blessures-course-a-pied",
        },
      ],
    },
    {
      heading: "Quand ce n'est pas la bonne option",
      items: [
        {
          name: "Douleur dont l'origine n'est pas dans le tendon",
          note: "Dos, cou, nerf, articulation : le bilan vient d'abord",
        },
        {
          name: "Douleur nocturne intense, fièvre, perte de poids inexpliquée",
          note: "Avis médical avant tout traitement",
        },
        {
          name: "Suspicion de rupture tendineuse",
          note: "Claquement, perte de force brutale : médecin d'abord",
        },
        {
          name: "Douleur très récente et en forte diminution",
          note: "La plupart des douleurs s'améliorent seules ou avec exercice",
        },
        {
          name: "Contre-indications habituelles (voir plus bas)",
          note: "Grossesse, anticoagulants, enfant en croissance, etc.",
        },
      ],
    },
  ],
  sections: [
    {
      heading: "Ce que sont les ondes de choc",
      paragraphs: [
        "Les ondes de choc extracorporelles sont des impulsions acoustiques brèves, transmises à travers la peau, via un gel, sur la zone douloureuse. Imaginez des petites vagues répétées qui viennent « secouer » le tissu : c'est l'image, pas une explication prouvée.",
        "Comment elles agiraient reste en effet incertain : effet sur la douleur, sur la circulation locale, sur la réaction des tissus... aucun mécanisme n'est démontré de façon définitive chez l'humain. C'est pourquoi on juge cette technique sur ses résultats cliniques dans les essais, et non sur des promesses de « régénération ». Il existe aussi plusieurs types d'appareils et de réglages : les études ne sont donc pas toutes comparables entre elles.",
      ],
    },
    {
      heading: "Ce que dit la recherche, zone par zone",
      paragraphs: [
        "Les preuves les plus solides, et encore de certitude faible à très faible : l'épaule calcifiée. Une revue de 21 essais trouve un effet sur la douleur et la fonction par rapport à un faux traitement (sham) à 24 semaines, et une énergie plus élevée a donné plus de résorption des calcifications à 12 semaines que l'énergie faible. Mais l'aiguilletage guidé par échographie faisait mieux sur la douleur, et aucun essai n'était à faible risque de biais.",
        "Preuves partagées : au talon, les revues sont plutôt favorables à un bénéfice, parfois à court et moyen terme, mais d'autres ne trouvent pas de supériorité sur les autres options physiques (laser, ultrasons...), avec un risque de biais élevé. Au coude, le bénéfice sur la douleur est petit et inconstant selon les méta-analyses. À la hanche (tendinopathie fessière), les premiers résultats sont encourageants, mais les essais sont peu nombreux et l'exercice reste le socle.",
        "Preuves faibles : pour l'Achille, une méta-analyse de 2026 conclut à l'absence de bénéfice cliniquement significatif face au sham et recommande de ne pas en faire un traitement de routine. Pour le tendon rotulien, pas de bénéfice à court terme face au sham. Pour le syndrome de stress tibial médial, il y a trop peu d'essais de qualité pour conclure.",
      ],
    },
    {
      heading: "Leur place dans une prise en charge",
      paragraphs: [
        "Les ondes de choc ne sont pas la solution : au mieux, un complément à un programme d'exercices. Un tendon ou un pied douloureux a besoin d'être dosé, puis renforcé et remonté par paliers ; aucune technique passive ne fait ce travail à votre place. Dans l'épicondylite, les revues rappellent d'ailleurs qu'une grande partie des patients s'améliore même sous placebo.",
        "Au cabinet, je commence par un bilan pour confirmer d'où vient la douleur et écarter une autre cause. Nous décidons ensuite ensemble : exercices et gestion de la charge d'abord, ondes de choc en complément si votre situation s'y prête et si vous le souhaitez, en vous disant honnêtement ce que les études permettent d'en attendre. Si la séance est utile, elle s'intègre au programme ; sinon, on l'arrête et on poursuit l'exercice.",
      ],
    },
    {
      heading: "Précautions et contre-indications habituelles",
      paragraphs: [
        "Les ondes de choc sont en général bien tolérées. Les effets indésirables rapportés dans les études sont surtout une douleur transitoire, une irritation de la peau ou une ecchymose ; dans une revue sur les tendinopathies de la hanche, ils concernaient environ 12 % des patients. Dans la méta-analyse sur l'Achille, deux ruptures du tendon ont été rapportées après des ondes focalisées : un événement rare, mais qui rappelle d'être prudent sur un tendon fragilisé.",
        "Sont habituellement considérés comme des contre-indications ou des précautions : la grossesse, les troubles de la coagulation ou les anticoagulants, une infection ou une tumeur sur la zone, les plaques de croissance chez l'enfant et l'adolescent, un stimulateur cardiaque selon la zone traitée, ou une infiltration récente de corticoïde. Cette liste est usuelle en pratique clinique ; elle n'est pas exhaustive et chaque cas se discute lors du bilan, éventuellement avec votre médecin.",
      ],
    },
  ],
  myths: [
    {
      myth: "« Les ondes de choc règlent le problème en une séance. »",
      reality: [
        "Les protocoles étudiés comportent le plus souvent plusieurs séances : dans une revue sur les tendinopathies de la hanche, la majorité prévoyait 3 à 4 séances hebdomadaires. Il n'existe pas de protocole universel : les appareils et les réglages varient d'une étude à l'autre.",
        "Une amélioration après une séance ne prouve pas que la technique agit : beaucoup de douleurs de tendon évoluent favorablement avec le temps. Dans l'épicondylite, une revue de 36 essais contrôlés par placebo relève que la plupart des patients du groupe placebo avaient peu ou plus de douleur à 4 semaines.",
      ],
    },
    {
      myth: "« Ça marche pour toutes les douleurs de tendon. »",
      reality: [
        "Non : tout dépend de la zone. Les preuves sont les plus solides pour l'épaule calcifiée, partagées pour le talon, le coude et la hanche, et faibles pour l'Achille et le tendon rotulien. Pour l'Achille, la dernière méta-analyse de référence ne trouve pas de bénéfice cliniquement significatif face au sham.",
        "C'est cohérent avec ce que disent les revues sur les tendinopathies du membre inférieur : l'exercice progressif reste le traitement de première intention.",
      ],
    },
    {
      myth: "« Si les ondes de choc marchent, je n'ai plus besoin de faire d'exercices. »",
      reality: [
        "Pour la tendinopathie fessière, la revue la plus récente recommande avec prudence l'exercice et l'éducation comme approche centrale, éventuellement complétés par des ondes de choc ou une infiltration. Une douleur calmée n'a pas rendu au tendon sa capacité à encaisser la charge.",
        "L'exercice sert à rendre votre tendon plus tolérant à ce que vous lui demandez ; sans cela, la douleur peut revenir à la reprise. Les ondes de choc sont, au mieux, un complément.",
      ],
    },
    {
      myth: "« C'est un traitement sans aucun risque ni inconfort. »",
      reality: [
        "C'est un traitement non invasif et généralement bien toléré, mais pas totalement anodin : douleur transitoire, irritation de la peau, ecchymose (environ 12 % des patients dans une revue sur la hanche), et deux ruptures d'Achille rapportées après des ondes focalisées dans une méta-analyse.",
        "D'où l'intérêt d'un bilan préalable, de respecter les précautions habituelles et de ne pas forcer l'intensité : elle se règle selon votre tolérance, pas selon un « plus c'est fort, mieux c'est ».",
      ],
    },
  ],
  careIntro:
    "Les ondes de choc, si elles sont indiquées, s'insèrent dans une prise en charge active : le bilan décide, vous participez à la décision, et l'exercice reste le fil conducteur.",
  care: [
    {
      title: "Bilan et indication",
      text: "Nous reprenons votre histoire, votre sport ou votre travail, et vos charges récentes. Je teste ce qui provoque la douleur, j'écarte une autre origine (dos, cou, nerf, articulation) et je vérifie qu'il n'y a pas de contre-indication.",
    },
    {
      title: "Décision partagée",
      text: "Je vous explique ce que les études disent pour votre zone précise : ce qu'on peut raisonnablement en attendre, et ce qu'on ne peut pas. Vous choisissez avec moi : exercices seuls, ou exercices plus ondes de choc. Aucune obligation.",
    },
    {
      title: "Séances d'ondes de choc, si elles sont pertinentes",
      text: "Si nous décidons de les utiliser, c'est en complément du programme et jamais à sa place. L'intensité se règle selon votre tolérance, et nous suivons votre réaction d'une séance à l'autre.",
    },
    {
      title: "Programme d'exercices et gestion de la charge",
      text: "C'est le cœur du travail : nous dosons vos activités plutôt que de tout arrêter ou de forcer, puis nous renforçons et remontons la charge par paliers. Vous gardez des repères clairs pour savoir quand avancer et quand lever le pied.",
    },
    {
      title: "Réévaluation, et arrêt si pas d'amélioration",
      text: "Nous refaisons le point régulièrement. Si les ondes de choc n'apportent rien, nous les arrêtons sans insister et nous poursuivons l'exercice. Si l'évolution tarde, je travaille avec votre médecin pour discuter d'autres options ou d'un avis spécialisé.",
    },
  ],
  redFlags: [
    "Douleur intense la nuit, sans rapport avec l'effort ou le mouvement, ou qui s'aggrave malgré le repos",
    "Fièvre, frissons, perte de poids inexpliquée ou grande fatigue associée à la douleur",
    "Zone rouge, chaude et gonflée, ou gonflement net apparu sans raison",
    "Douleur brutale avec claquement ou sensation de coup, puis perte de force : possible rupture, consultez rapidement",
    "Engourdissement, fourmillements ou faiblesse qui s'étendent dans un membre",
  ],
  faq: [
    {
      q: "Les ondes de choc font-elles mal ?",
      a: [
        "Les études décrivent surtout, comme effets indésirables, une douleur transitoire ou une irritation de la peau, qui concernaient environ 12 % des patients dans une revue sur les tendinopathies de la hanche. Les études ne donnent pas de chiffre fiable sur le ressenti pendant la séance elle-même, qui varie selon la zone, l'appareil et la personne.",
        "Ce qui compte : l'intensité se règle selon votre tolérance. Dites-moi si c'est trop ; il n'est pas nécessaire d'« aller au bout de la douleur » pour que ce soit efficace.",
      ],
    },
    {
      q: "Combien de séances faut-il ?",
      a: [
        "Il n'y a pas de nombre universel. Dans les essais sur les tendinopathies de la hanche, la majorité des protocoles prévoyait 3 à 4 séances, une fois par semaine, avec quelques milliers d'impulsions par séance. Les autres zones et les autres appareils utilisent des schémas variables.",
        "Chez moi, le nombre de séances dépend de votre réaction et de votre situation, et je le décide avec vous. Si rien ne bouge, nous n'insistons pas.",
      ],
    },
    {
      q: "Quand voit-on un effet ?",
      a: [
        "Quand il y a un bénéfice dans les études, il est rarement immédiat : il s'observe plutôt sur quelques semaines à quelques mois. Dans l'épaule calcifiée, par exemple, la comparaison avec un faux traitement est favorable à 24 semaines.",
        "Je ne peux pas vous promettre un délai ni un résultat : chaque situation est différente, et beaucoup de douleurs de tendon s'améliorent aussi avec le temps et l'exercice.",
      ],
    },
    {
      q: "Les ondes de choc sont-elles efficaces pour le talon (fasciopathie plantaire) ?",
      a: [
        "Les preuves sont partagées. Des méta-analyses sont plutôt favorables à un effet, y compris sur l'épaisseur de l'aponévrose plantaire, mais une analyse de 14 essais ne montre pas de soulagement significativement meilleur que d'autres traitements non chirurgicaux. Une revue de 2026 n'a pas non plus trouvé de supériorité face à d'autres modalités physiques, avec un risque de biais élevé.",
        "Pour le talon, le programme d'exercices, la gestion des charges et la chaussure restent l'essentiel ; les ondes de choc sont un complément possible, à discuter.",
      ],
    },
    {
      q: "Détruisent-elles les calcifications de l'épaule ?",
      a: [
        "Je ne dirais pas « détruire ». Dans une revue de 21 essais, une énergie élevée a donné plus de résorption complète des calcifications à 12 semaines qu'une énergie faible, et les ondes de choc ont fait mieux que le sham pour la douleur et la fonction à 24 semaines. La certitude de ces résultats est très faible.",
        "Une calcification peut aussi se résorber spontanément. Dans cette revue, l'aiguilletage guidé par échographie faisait mieux sur la douleur que les ondes de choc. Les options se discutent avec votre médecin.",
      ],
    },
    {
      q: "Et pour le tendon d'Achille ?",
      a: [
        "Les preuves sont faibles. Une méta-analyse publiée en 2026 (JOSPT) conclut à l'absence de bénéfice cliniquement significatif face au sham, pour l'Achille d'insertion comme du corps du tendon, avec une certitude allant de très faible à modérée. Elle recommande de ne pas en faire un traitement de routine.",
        "Pour l'Achille, c'est l'exercice progressif qui est soutenu par les guidelines ; je ne proposerais pas les ondes de choc comme première option.",
      ],
    },
    {
      q: "Et pour le coude (tennis elbow) ?",
      a: [
        "Les preuves sont partagées. Une méta-analyse ne trouve pas de réduction significative de la douleur moyenne par rapport au placebo, mais davantage de patients avec au moins 50 % de douleur en moins ; une revue de 36 essais note un soulagement à long terme, petit.",
        "Elle note aussi que la plupart des patients du groupe placebo allaient mieux à 4 semaines : l'évolution naturelle est souvent favorable. Là encore, les ondes de choc seraient un complément, pas le cœur du traitement.",
      ],
    },
    {
      q: "Puis-je courir ou faire du sport pendant le traitement ?",
      a: [
        "Souvent oui, mais en dosant. Pas de « tout arrêter », pas de « forcer malgré la douleur » : on réduit ce qui irrite le plus, on garde ce qui est toléré, on remonte par paliers. Un repère courant : une gêne légère à modérée qui redescend à son niveau habituel d'ici le lendemain.",
        "Si votre douleur augmente après une séance ou une sortie, nous réduisons la dose. Cela se précise à l'occasion du bilan.",
      ],
    },
    {
      q: "Y a-t-il des contre-indications ?",
      a: [
        "Habituellement : grossesse, troubles de la coagulation ou anticoagulants, infection ou tumeur sur la zone, plaques de croissance chez l'enfant et l'adolescent, stimulateur cardiaque selon la zone, infiltration récente de corticoïde. Cette liste est usuelle en pratique, non exhaustive.",
        "Elle se discute lors du bilan, avec votre médecin si besoin. Prévenez-moi de tout traitement en cours.",
      ],
    },
    {
      q: "Faut-il une prescription ?",
      a: [
        "Une prescription médicale est nécessaire pour que les séances de kinésithérapie soient remboursées par la mutuelle. Je ne peux pas vous garantir à l'avance ce qui sera remboursé pour les ondes de choc : n'hésitez pas à poser la question à votre mutuelle.",
        "Un premier avis auprès de votre médecin permet aussi de confirmer le diagnostic avant de choisir un traitement.",
      ],
    },
    {
      q: "Ondes de choc ou infiltration de corticoïde ?",
      a: [
        "Ce sont deux approches différentes, à discuter avec votre médecin. Pour l'épicondylite, une revue note que l'infiltration de corticoïde soulage à court terme mais fait moins bien que le placebo à long terme. Pour la tendinopathie fessière, un essai a trouvé les ondes de choc focalisées supérieures à l'infiltration sur la douleur à long terme, mais ces données restent peu nombreuses.",
        "Dans les deux cas, l'exercice et l'éducation restent la base : à la hanche, ils ont fait mieux qu'une infiltration à un an dans un essai randomisé.",
      ],
    },
  ],
  related: [
    { href: "/kinesitherapie/tendinopathie", label: "Tendinopathie : comprendre et traiter" },
    { href: "/kinesitherapie/blessures-course-a-pied", label: "Blessures en course à pied" },
    { href: "/kinesitherapie/douleur-epaule", label: "Douleur à l'épaule" },
    { href: "/blog/tendinite-inflammation-repos", label: "Article : tendinite, inflammation et repos" },
    { href: "/premiere-seance", label: "Votre première séance au cabinet" },
  ],
  references: [
    {
      citation:
        "Korakakis V, Kotsifaki R, Sotiralis Y, Malliaras P. Shockwave therapy for midportion and insertional Achilles tendinopathy: a nail in the coffin? A systematic review with meta-analysis. J Orthop Sports Phys Ther. 2026;56(5):282-299.",
      pmid: "42063301",
    },
    {
      citation:
        "Challoumas D, Pedret C, Biddle M, et al. Management of patellar tendinopathy: a systematic review and network meta-analysis of randomised studies. BMJ Open Sport Exerc Med. 2021;7(4):e001110.",
      pmid: "34900334",
    },
    {
      citation:
        "Simental-Mendía M, Simental-Mendía LE, Sánchez-García A, et al. Effect of extracorporeal shockwave therapy on plantar fascia thickness in plantar fasciitis: a systematic review and meta-analysis of randomized controlled trials. Arch Orthop Trauma Surg. 2024;144(8):3503-3516.",
      pmid: "39023569",
    },
    {
      citation:
        "Guede-Rojas F, Rodriguez-Lagos L, Carvajal-Parodi C. Effectiveness of radial extracorporeal shockwave therapy versus other electrophysical modalities on pain and functionality in patients with plantar fasciitis: a systematic review and meta-analysis. Foot Ankle Spec. 2026.",
      pmid: "42267560",
    },
    {
      citation:
        "Brindisino F, Marruganti S, Lorusso D, et al. The effectiveness of extracorporeal shock wave therapy for rotator cuff calcific tendinopathy: a systematic review with meta-analysis. Physiother Res Int. 2024;29(3):e2106.",
      pmid: "38878302",
    },
    {
      citation:
        "Lian J, Mohamadi A, Chan JJ, et al. Comparative efficacy and safety of nonsurgical treatment options for enthesopathy of the extensor carpi radialis brevis: a systematic review and meta-analysis of randomized placebo-controlled trials. Am J Sports Med. 2019;47(12):3019-3029.",
      pmid: "30380334",
    },
    {
      citation:
        "Zheng C, Zeng D, Chen J, et al. Effectiveness of extracorporeal shock wave therapy in patients with tennis elbow: a meta-analysis of randomized controlled trials. Medicine (Baltimore). 2020;99(30):e21189.",
      pmid: "32791694",
    },
    {
      citation:
        "Rau OR, Cheng J, Jivanelli B, Tenforde AS, Wyss JF. Extracorporeal shockwave therapy for tendinopathies around the hip and pelvis: a systematic review. HSS J. 2025;22(2):197-207.",
      pmid: "40292269",
    },
    {
      citation:
        "Bremer T, Nicklen P, Fearon A, Morrissey D. The efficacy of gluteal tendinopathy treatments: a systematic review. Clin Rehabil. 2025;39(5):600-617.",
      pmid: "40223303",
    },
    {
      citation:
        "Prisco LC, Zhao E, Lynch O, et al. Use of extracorporeal shockwave therapy for the management of bone pathologies: a systematic review. Clin J Sport Med. 2026;36(4):e86-e114.",
      pmid: "41495929",
    },
  ],
};
