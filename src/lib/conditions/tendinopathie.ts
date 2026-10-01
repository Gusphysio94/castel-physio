import type { Condition } from "./types";

export const tendinopathie: Condition = {
  slug: "tendinopathie",
  label: "Tendinopathie",
  title: "Tendinopathie : traitement et rééducation à Bruxelles",
  description:
    "Achille, rotulien, coiffe, épicondylite, fessier : comprendre votre tendinopathie et la rééduquer par l'exercice, à Woluwe-Saint-Lambert (Bruxelles).",
  h1: "Tendinopathie : comprendre et traiter la douleur du tendon",
  lead:
    "Une douleur précise sur un tendon (talon, genou, épaule, coude, hanche…) qui revient à l'effort ? Votre tendon n'est pas « usé » : il est le plus souvent surchargé, et il a surtout besoin d'une charge bien dosée, puis progressive. Voici comment je procède au cabinet, sur la base de ce que dit la recherche.",
  takeaway:
    "Un tendon douloureux n'est pas un tendon « usé » : c'est le plus souvent un tendon surchargé. Il ne s'agit ni de tout arrêter, ni de passer outre la douleur, mais de doser vos activités et de le renforcer pour qu'il en tolère davantage.",
  subtypeGroups: [
    {
      heading: "Membre inférieur : hanche et cuisse",
      items: [
        {
          name: "Tendinopathie du moyen fessier / syndrome douloureux du grand trochanter",
          note: "Douleur sur le côté de la hanche, souvent la nuit",
        },
        { name: "Bursite trochantérienne", note: "Ancien terme, très souvent une tendinopathie fessière" },
        { name: "Tendinopathie proximale des ischio-jambiers", note: "Douleur profonde sous la fesse, assis" },
        { name: "Tendinopathie des adducteurs", note: "Douleur de l'aine, face interne de la cuisse" },
        { name: "Tendinopathie du psoas / fléchisseurs de hanche" },
        { name: "Tendinopathie du quadriceps (tendon quadricipital)" },
      ],
    },
    {
      heading: "Membre inférieur : genou, jambe, cheville et pied",
      items: [
        { name: "Tendinopathie rotulienne (genou du sauteur)", note: "Douleur sous la rotule à l'effort" },
        { name: "Tendinopathie de la patte d'oie" },
        { name: "Tendinopathie d'Achille corporéale (portion moyenne)", note: "Douleur 2 à 6 cm au-dessus du talon" },
        { name: "Tendinopathie d'Achille d'insertion", note: "Douleur au bas du talon, derrière" },
        { name: "Tendinopathie du jambier postérieur" },
        { name: "Tendinopathie des péroniers (fibulaires)" },
        { name: "Tendinopathie du jambier antérieur" },
        { name: "Fasciopathie plantaire (« aponévrosite plantaire »)", note: "Douleur sous le talon, aux premiers pas" },
      ],
    },
    {
      heading: "Membre supérieur : épaule, coude, poignet et main",
      items: [
        { name: "Tendinopathie de la coiffe des rotateurs / du sus-épineux", note: "Souvent appelée « conflit sous-acromial »" },
        { name: "Tendinopathie du long biceps" },
        { name: "Épicondylite latérale (tennis elbow)", note: "Douleur à l'extérieur du coude" },
        { name: "Épitrochléite (golfer's elbow)", note: "Douleur à l'intérieur du coude" },
        { name: "Tendinopathie du triceps (olécrânienne)" },
        { name: "Ténosynovite de De Quervain", note: "Douleur côté pouce du poignet" },
        { name: "Tendinopathie du poignet et de la main (fléchisseurs, extenseurs)" },
        { name: "Doigt à ressort (ténosynovite des fléchisseurs)" },
      ],
    },
  ],
  sections: [
    {
      heading: "Ce qu'est une tendinopathie",
      paragraphs: [
        "Un tendon relie le muscle à l'os et transmet la force. Imaginez un câble de pont : il s'adapte au trafic qu'il subit. Si le trafic augmente trop vite, ou après une longue pause, ou si le tendon est peu entraîné, il réagit : il devient douloureux et supporte moins bien l'effort. C'est cela, une tendinopathie.",
        "Le tableau typique : une douleur précise, localisée sur le tendon, à l'effort ou à la mise en route (lever du lit, premiers pas), qui diminue à l'échauffement puis revient parfois après. Le mot « tendinite » désigne la même chose sur une ordonnance, mais l'inflammation n'est pas le problème principal : ce sont la charge et la capacité du tendon.",
      ],
    },
    {
      heading: "Un continuum, pas un verdict",
      paragraphs: [
        "Les chercheurs Cook et Purdam décrivent un continuum : un tendon peut être simplement réactif à une surcharge, puis moins bien organisé après des surcharges répétées, puis plus durablement modifié. Ces étapes aident à choisir la dose d'exercice, mais elles ne sont pas des marches à sens unique : un tendon peut s'adapter et reprendre de la capacité. Les auteurs eux-mêmes ont depuis rappelé que la douleur et la fonction comptent autant que l'aspect de l'image.",
        "La douleur dépend aussi d'autres éléments : sommeil, stress, peur de bouger, niveau d'activité, âge, certaines maladies générales. C'est pourquoi on regarde la personne, pas seulement le tendon.",
      ],
    },
  ],
  myths: [
    {
      myth: "« Il faut tout arrêter et se reposer complètement. »",
      reality: [
        "Quelques jours de répit sur ce qui irrite le plus peuvent aider quand c'est très douloureux. Mais un tendon a besoin de charge pour retrouver sa capacité : un repos long soulage parfois, puis la douleur revient à la reprise. Continuer comme si de rien n'était n'est pas la solution non plus : on réduit ce qui irrite le plus, on garde ce qui est toléré, et on renforce progressivement.",
        "Les guidelines et revues sur les tendinopathies d'Achille, rotulienne et de la hanche placent l'exercice progressif en première intention.",
      ],
    },
    {
      myth: "« Mon tendon est abîmé, il faut l'opérer. »",
      reality: [
        "Dans la grande majorité des cas, non. La guideline néerlandaise sur le tendon rotulien réserve la chirurgie à des cas précis, après l'échec d'un programme d'exercices bien conduit.",
        "Un tendon peut s'adapter et reprendre de la capacité : dans une étude suivie sur cinq ans pour l'Achille, la grande majorité des patients traités par l'exercice avait bien récupéré.",
      ],
    },
    {
      myth: "« Les étirements et le massage vont le guérir. »",
      reality: [
        "Ils peuvent soulager sur le moment, mais ils ne remplacent pas le renforcement, qui est ce que les études soutiennent le mieux. Sur un tendon d'insertion (talon, hanche), certains étirements appuient sur le tendon et peuvent aggraver la gêne.",
        "La thérapie manuelle peut se proposer en complément si elle vous soulage ; les preuves de son effet durable restent faibles.",
      ],
    },
    {
      myth: "« Si ça fait mal pendant l'exercice, je me fais du mal. »",
      reality: [
        "Dans un programme d'exercices dosé avec votre kiné, une douleur légère à modérée peut être tolérée : elle reflète une sensibilité du tendon, pas un dégât. Cela ne veut pas dire que vous pouvez continuer toutes vos activités à fond malgré la douleur : ce qui irrite doit être réduit, et le tendon doit avoir le temps de s'adapter.",
        "Le repère est la réaction : si elle redescend à son niveau habituel dans les 24 heures, la dose est bonne ; sinon, on réduit.",
      ],
    },
    {
      myth: "« L'échographie montrera ce qui me fait mal, et une infiltration réglera tout. »",
      reality: [
        "Des anomalies à l'imagerie s'observent aussi sur des tendons sans douleur, et leur fréquence varie énormément selon les études (revue sur l'épaule, 2025). Une image ne suffit donc pas à expliquer la douleur.",
        "Une infiltration de corticoïde soulage souvent vite, mais le bénéfice s'inverse parfois à moyen terme au coude et disparaît à long terme à l'épaule. À la hanche, l'éducation plus l'exercice a fait mieux qu'une infiltration à un an. À discuter avec votre médecin.",
      ],
    },
  ],
  careIntro:
    "Le but n'est pas de vous mettre au repos ni de forcer, mais de trouver la dose de charge que votre tendon tolère aujourd'hui, puis de la faire monter pas à pas.",
  care: [
    {
      title: "Un bilan complet",
      text: "Nous reprenons votre histoire, votre sport ou votre travail, vos charges récentes et vos changements (chaussures, matériel, volume). Je teste ce qui provoque la douleur et j'écarte une autre cause, par exemple une douleur venue du dos pour une douleur de fesse, ou du cou pour une douleur de coude.",
    },
    {
      title: "Éducation et gestion de la charge",
      text: "Je vous explique comment votre tendon réagit, ce qui l'irrite et ce qui le fait progresser. Nous dosons vos activités plutôt que de tout arrêter ou de forcer : on réduit le facteur le plus irritant (certains sauts, la côte, la position prolongée) tant que le tendon est sensible, on garde ce qui est toléré, puis on remonte la charge par paliers pendant que vous renforcez.",
    },
    {
      title: "Calmer la douleur avec des contractions tenues",
      text: "Quand la douleur est vive, des contractions musculaires tenues (isométriques) peuvent la soulager sur le moment pour certaines personnes. C'est un outil d'appoint pour reprendre confiance, non une solution à elle seule.",
    },
    {
      title: "Renforcement progressif, lent et lourd",
      text: "C'est le cœur du travail : des exercices de renforcement adaptés à votre tendon, que l'on rend petit à petit plus lourds et plus lents, puis plus dynamiques (sauts, courses, lancers). Les revues montrent que plusieurs formes de renforcement se valent, tant qu'elles sont régulières et progressives. Comptez souvent au moins trois mois avant de juger si le programme a fonctionné.",
    },
    {
      title: "Reprendre le sport par paliers",
      text: "Course, saut, raquette, geste de lancer : on les réintroduit selon vos réactions à 24 heures, avec un coaching sportif si vous le souhaitez. Vous gardez des repères clairs pour savoir quand avancer et quand lever le pied.",
    },
    {
      title: "Compléments et suivi avec votre médecin",
      text: "La thérapie manuelle peut avoir une place en complément, pas en solution principale. Si l'amélioration tarde, je travaille avec votre médecin pour discuter d'autres options ou d'un avis spécialisé.",
    },
  ],
  redFlags: [
    "Douleur brutale avec claquement ou sensation de coup, puis perte de force ou impossibilité de lever le talon, d'étendre le genou ou de lever le bras : possible rupture, consultez rapidement",
    "Creux ou gonflement soudain le long du tendon, ou ecchymose importante apparue d'un coup",
    "Douleur la nuit sans rapport avec l'effort, fièvre, perte de poids inexpliquée ou douleur qui s'aggrave malgré le repos",
    "Rougeur chaude, gonflement net et fièvre au niveau d'un tendon ou d'une articulation",
    "Douleur qui s'installe après la prise d'un antibiotique de la famille des fluoroquinolones : prévenez votre médecin",
  ],
  faq: [
    {
      q: "Dois-je me reposer ou arrêter le sport ?",
      a: [
        "Pas complètement. Quelques jours de répit sur ce qui irrite le plus peuvent aider quand c'est très douloureux, mais un tendon a besoin de charge pour retrouver sa capacité. Un repos long soulage parfois, puis la douleur revient à la reprise.",
        "Il est souvent possible de garder une partie de votre sport, mais pas de continuer comme avant malgré la douleur. On commence par réduire la dose (volume, intensité, côte, vitesse, sauts) selon la réaction de votre tendon, puis on la remonte par paliers pendant que vous renforcez. Un repère courant : une gêne légère à modérée, qui redescend à son niveau habituel d'ici le lendemain. Si la douleur dure ou augmente, la dose était trop haute et on la redescend.",
      ],
    },
    {
      q: "Combien de temps cela va-t-il durer ?",
      a: [
        "Cela dépend du tendon, de l'ancienneté des symptômes et de votre charge. En général, il faut compter plusieurs semaines à quelques mois d'exercices réguliers, et une revue de référence conseille d'attendre au moins trois mois d'exercice avant de juger d'autres options.",
        "Je ne peux pas vous promettre un délai : le bilan permet une estimation plus personnelle.",
      ],
    },
    {
      q: "Faut-il faire une échographie ou une IRM ?",
      a: [
        "Pas toujours. Le diagnostic repose d'abord sur l'examen clinique. Des anomalies s'observent aussi sur des tendons qui ne font pas mal, par exemple à l'épaule, où la fréquence varie énormément selon les études, ce qui rend l'image difficile à interpréter seule.",
        "L'imagerie devient utile si le tableau est atypique, si l'on suspecte une rupture ou si une décision invasive est envisagée. C'est votre médecin qui en juge.",
      ],
    },
    {
      q: "Ondes de choc, infiltrations, PRP : que penser de ces traitements ?",
      a: [
        "Les preuves sont partagées et souvent de faible certitude. Dans les revues sur les tendinopathies du membre inférieur, aucun complément n'a clairement fait mieux que l'exercice seul, et les ondes de choc n'ont pas apporté de bénéfice à court terme dans le tendon rotulien.",
        "Les infiltrations de corticoïde soulagent souvent vite, mais les essais montrent un bénéfice qui s'inverse parfois à moyen terme (coude) ou qui disparaît (épaule). Pour la hanche, un programme d'éducation et d'exercice a fait mieux qu'une infiltration à un an. Pour le PRP, les résultats sont mitigés. Ces options se discutent avec votre médecin.",
      ],
    },
    {
      q: "Étirements, massage, thérapie manuelle : cela sert-il ?",
      a: [
        "Pas comme traitement principal. Les étirements ou massages peuvent procurer un soulagement passager, mais ils ne remplacent pas le renforcement. Sur un tendon d'insertion (talon, hanche), certains étirements appuient sur le tendon et peuvent aggraver la gêne.",
        "La thérapie manuelle peut se proposer en complément si elle vous soulage, avec peu de preuves solides sur son effet durable. Je la garde en appoint.",
      ],
    },
    {
      q: "Quels exercices faire, et est-il normal d'avoir mal pendant ?",
      a: [
        "Les contractions tenues (isométriques) peuvent soulager la douleur à court terme chez certains patients, comme dans une petite étude sur le tendon rotulien. Pour reconstruire la capacité, le renforcement lourd et lent est très étudié au tendon d'Achille, avec des résultats comparables à l'exercice excentrique et une meilleure adhésion. Nous choisissons selon votre tendon, son irritabilité et votre sport.",
        "Dans un programme dosé avec votre kiné, une douleur légère à modérée pendant l'exercice peut être tolérée (modèle de suivi de la douleur) : elle reflète une sensibilité du tendon, pas un dégât. Si elle redescend à son niveau habituel dans les 24 heures, la dose est bonne ; sinon, on réduit. Cela ne concerne pas les autres activités qui irritent votre tendon : celles-là, on les dose aussi.",
      ],
    },
    {
      q: "Comment savoir si mon tendon est rompu ?",
      a: [
        "Une rupture survient souvent à l'occasion d'un effort brutal, avec un claquement ou un coup ressenti, une douleur vive, une perte de force nette, parfois un creux ou un hématome. À la cheville, on ne peut plus se hisser sur la pointe du pied ; à l'épaule, le bras se lève mal ; à la hanche ou au genou, la force chute.",
        "Dans ce cas, consultez rapidement un médecin : le délai de prise en charge compte. Une rupture est possible, mais reste moins fréquente qu'une simple tendinopathie.",
      ],
    },
    {
      q: "Est-ce que cela peut revenir ?",
      a: [
        "Oui, c'est possible, notamment si l'on reprend trop vite ou si la cause (charge, matériel, geste) n'est pas ajustée. Dans une étude suivie sur cinq ans pour l'Achille, la grande majorité des patients traités par l'exercice avait bien récupéré, mais une minorité avait eu une nouvelle poussée.",
        "D'où l'intérêt de garder un entretien de force simple après la rééducation et de savoir réagir tôt à un petit signal.",
      ],
    },
    {
      q: "L'âge, la ménopause ou d'autres facteurs jouent-ils un rôle ?",
      a: [
        "Oui, la charge n'est pas seule en cause. L'âge, le surpoids, certaines maladies générales (comme le diabète ou des rhumatismes), certains médicaments (notamment des antibiotiques de la famille des fluoroquinolones) et, chez la femme, les changements hormonaux de la ménopause peuvent rendre un tendon plus fragile ou plus lent à s'adapter. Les preuves sont variables selon les facteurs.",
        "Cela ne signifie pas qu'il n'y a rien à faire : le renforcement reste utile à tout âge. Parlez-en à votre médecin, qui pourra vérifier ces aspects généraux.",
      ],
    },
    {
      q: "Qui consulter : médecin, kiné, spécialiste ?",
      a: [
        "Un premier avis auprès de votre médecin traitant ou d'un médecin du sport est utile pour confirmer le diagnostic et poser la prescription de kinésithérapie, remboursée par la mutuelle avec ordonnance. Je peux ensuite faire le bilan et le programme, et rester en contact avec votre médecin.",
        "Un avis spécialisé (médecin du sport, orthopédiste, rhumatologue) est justifié si l'évolution est atypique, si une rupture est suspectée ou si un programme bien conduit n'améliore pas vos symptômes.",
      ],
    },
  ],
  related: [
    { href: "/blog/exercice-therapeutique-tendinopathie", label: "Article : exercice thérapeutique et tendinopathie" },
    { href: "/kinesitherapie/douleur-genou", label: "Douleur au genou" },
    { href: "/kinesitherapie/douleur-epaule", label: "Douleur à l'épaule" },
    { href: "/kinesitherapie/woluwe-saint-lambert", label: "Kinésithérapie à Woluwe-Saint-Lambert" },
    { href: "/formations", label: "Formations pour kinésithérapeutes : Tendinopathie 2.0" },
  ],
  references: [
    {
      citation:
        "de Vos RJ, van der Vlist AC, Zwerver J, et al. Dutch multidisciplinary guideline on Achilles tendinopathy. Br J Sports Med. 2021;55(20):1125-1134.",
      pmid: "34187784",
    },
    {
      citation:
        "Ophey M, Koëter S, van Ooijen L, et al. Dutch multidisciplinary guideline on anterior knee pain: patellofemoral pain and patellar tendinopathy. Knee Surg Sports Traumatol Arthrosc. 2025;33(2):457-469.",
      pmid: "39045713",
    },
    {
      citation:
        "Challoumas D, Crosbie G, O'Neill S, et al. Effectiveness of exercise treatments with or without adjuncts for common lower limb tendinopathies: a living systematic review and network meta-analysis. Sports Med Open. 2023;9(1):71.",
      pmid: "37553459",
    },
    {
      citation:
        "Cook JL, Rio E, Purdam CR, et al. Revisiting the continuum model of tendon pathology: what is its merit in clinical practice and research? Br J Sports Med. 2016;50(19):1187-1191.",
      pmid: "27127294",
    },
    {
      citation:
        "Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. 2009;43(6):409-416.",
      pmid: "18812414",
    },
    {
      citation:
        "Coombes BK, Bisset L, Vicenzino B. Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review of randomised controlled trials. Lancet. 2010;376(9754):1751-1767.",
      pmid: "20970844",
    },
    {
      citation:
        "Mellor R, Bennell K, Grimaldi A, et al. Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy. Br J Sports Med. 2018;52(22):1464-1472.",
      pmid: "30385462",
    },
    {
      citation:
        "Beyer R, Kongsgaard M, Hougs Kjær B, et al. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. Am J Sports Med. 2015;43(7):1704-1711.",
      pmid: "26018970",
    },
    {
      citation:
        "Silbernagel KG, Brorsson A, Lundberg M. The majority of patients with Achilles tendinopathy recover fully when treated with exercise alone: a 5-year follow-up. Am J Sports Med. 2011;39(3):607-613.",
      pmid: "21084657",
    },
    {
      citation:
        "Hopewell S, Keene DJ, Marian IR, et al. Progressive exercise compared with best practice advice, with or without corticosteroid injection, for the treatment of patients with rotator cuff disorders (GRASP). Lancet. 2021;398(10298):416-428.",
      pmid: "34265255",
    },
  ],
};
