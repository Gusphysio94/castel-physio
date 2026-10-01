import type { Condition } from "./types";

export const cervicalgie: Condition = {
  slug: "cervicalgie",
  label: "Cervicalgie et douleurs de la nuque",
  title: "Cervicalgie, torticolis et douleur de nuque : kiné",
  description:
    "Torticolis, cervicalgie, coup du lapin, névralgie cervico-brachiale, céphalées : comprendre votre nuque et la prise en charge en kiné à Bruxelles.",
  h1: "Cervicalgie et douleurs de la nuque : comprendre, bouger, relâcher la garde",
  lead:
    "Une nuque douloureuse ou « bloquée » est très fréquente, souvent impressionnante, et dans la grande majorité des cas elle ne signale pas de lésion grave. Je vous aide à comprendre ce qui se passe, à doser vos activités pour garder votre nuque en mouvement sans l'irriter, et à retrouver confiance, que la douleur soit toute récente ou installée depuis longtemps.",
  takeaway:
    "Une nuque qui se bloque n'a presque jamais une vertèbre « déplacée » ni n'est « usée » : elle se protège, souvent après une surcharge. La solution n'est ni de l'immobiliser, ni de forcer malgré la douleur, mais de la remettre en mouvement avec des doses progressives, puis de la renforcer.",
  subtypeGroups: [
    {
      heading: "Douleur de la nuque et du haut du dos",
      items: [
        { name: "Torticolis aigu", note: "Nuque bloquée, souvent au réveil ou après un faux mouvement" },
        { name: "Cervicalgie aiguë", note: "Douleur de nuque récente, de quelques jours à quelques semaines" },
        { name: "Cervicalgie commune (non spécifique)", note: "Sans cause précise identifiée : la plus fréquente" },
        { name: "Cervicalgie chronique", note: "Douleur présente depuis plus de 3 mois" },
        { name: "Cervico-dorsalgie", note: "Douleur à la jonction nuque / haut du dos" },
        { name: "Trapézalgie", note: "Douleur et tension du muscle trapèze, entre nuque et épaule" },
        { name: "Cervicarthrose (arthrose cervicale)", note: "Terme d'imagerie très fréquent avec l'âge, souvent banal" },
        { name: "Douleur cervicale liée au travail sur écran", note: "Poste de bureau, ordinateur, smartphone (« text neck »)" },
        { name: "Douleur cervicale du sportif", note: "Rugby, judo, cyclisme, natation, sports de contact" },
      ],
    },
    {
      heading: "Douleur qui irradie : bras, tête, étourdissements",
      items: [
        { name: "Névralgie cervico-brachiale (NCB)", note: "Douleur de nuque qui descend dans le bras" },
        { name: "Radiculopathie cervicale (C5 à C8)", note: "Irritation d'une racine nerveuse, avec ou sans fourmillements" },
        { name: "Hernie discale cervicale", note: "Avec ou sans douleur dans le bras" },
        { name: "Céphalées cervicogéniques", note: "Maux de tête qui partent de la nuque" },
        { name: "Névralgie d'Arnold (névralgie occipitale)", note: "Douleur à l'arrière du crâne, parfois fulgurante" },
        { name: "Vertiges cervicogéniques", note: "Diagnostic d'exclusion, preuves encore limitées" },
      ],
    },
    {
      heading: "Après un traumatisme ou une opération",
      items: [
        { name: "Coup du lapin (whiplash)", note: "Aussi appelé WAD, « whiplash-associated disorders »" },
        { name: "Traumatisme cervical bénin (entorse cervicale)", note: "Après un accident de la route ou une chute" },
        {
          name: "Rééducation après chirurgie cervicale",
          note: "Après hernie discale, arthrodèse ou prothèse discale cervicale",
          href: "/kinesitherapie/reeducation-post-operatoire",
        },
      ],
    },
  ],
  sections: [
    {
      heading: "Une nuque qui se protège, pas une nuque qui se casse",
      paragraphs: [
        "On dit « cervicalgie » pour toute douleur de la nuque. Dans la grande majorité des cas, on ne peut pas pointer une structure précise responsable : on parle de cervicalgie « non spécifique » ou « commune ». Ce n'est pas un échec du diagnostic. La nuque est une région très mobile, conçue pour porter la tête et la bouger tout le jour, et elle peut devenir sensible après un effort inhabituel, une nuit mal dormie, une période de stress, ou parfois sans raison évidente.",
        "Pensez à un bras blessé que vous tenez instinctivement contre vous. Quand la nuque se « bloque », elle fait la même chose : les muscles se raidissent pour la garder. La douleur est une décision protectrice du cerveau, qui tient compte des tissus mais aussi du sommeil, de la fatigue, des inquiétudes. Cela explique qu'un torticolis puisse être très douloureux sans qu'aucun dégât ne soit en cause, et qu'il se desserre souvent quand on recommence à bouger doucement.",
      ],
    },
    {
      heading: "L'imagerie montre l'âge de la nuque, pas forcément sa douleur",
      paragraphs: [
        "Les rides renseignent sur l'âge, pas sur la santé de la peau. Les images de la nuque fonctionnent de la même façon. Dans une étude japonaise de plus de 1 200 volontaires sans symptômes, la grande majorité présentait des bombements de disque à l'IRM, y compris la plupart des personnes de 20 à 29 ans, et ces trouvailles augmentaient avec l'âge.",
        "Cela ne veut pas dire que l'imagerie ne sert jamais : elle est utile en présence de signes d'alerte, de signes neurologiques ou avant un geste chirurgical. Mais pour une cervicalgie banale, « arthrose cervicale », « discopathie » ou « bec de perroquet » sur un compte rendu ne suffisent presque jamais à expliquer la douleur ni à prédire son évolution. Le bilan clinique, c'est-à-dire l'examen et votre histoire, compte davantage.",
      ],
    },
    {
      heading: "Quand la douleur descend dans le bras ou monte dans la tête",
      paragraphs: [
        "La nuque est aussi le point de départ des nerfs qui vont vers le bras et de zones qui peuvent donner mal de tête. Une radiculopathie (névralgie cervico-brachiale) correspond à une racine nerveuse irritée : douleur dans le bras, parfois fourmillements ou perte de force. Dans une grande étude de population, la majorité des patients étaient peu gênés voire sans symptômes au dernier suivi, même si des récidives et des opérations ont existé chez une minorité.",
        "Certains maux de tête sont dits « cervicogéniques » : ils semblent provenir de la nuque et se modifient avec ses mouvements. Ce diagnostic est complexe et se pose après avoir écarté d'autres causes de céphalées. C'est un des rôles du bilan.",
      ],
    },
  ],
  myths: [
    {
      myth: "« J'ai une vertèbre déplacée, mon cou est bloqué »",
      reality: [
        "On vous a peut-être dit qu'une vertèbre était « sortie » ou « déplacée ». Rien ne le montre : les vertèbres sont solidement tenues par des ligaments et des muscles, et ne « sortent » pas de leur place lors d'un torticolis.",
        "Ce qui se passe plutôt, c'est une protection : les muscles se contractent et la nuque se raidit, comme pour garder une zone sensible. C'est inconfortable, mais en général sans danger, et cela se détend le plus souvent avec le temps et un mouvement doux.",
      ],
    },
    {
      myth: "« Il faut porter un collier cervical pour que ça guérisse »",
      reality: [
        "Un collier peut rassurer quelques heures, mais il n'aide pas à guérir. Les recommandations OPTIMa pour la cervicalgie et le coup du lapin conseillent de ne pas proposer de collier cervical, à cause de l'absence de bénéfice.",
        "Une étude randomisée allemande après coup du lapin a même trouvé, à six semaines, moins de douleur et de gêne avec une mobilisation précoce qu'avec un collier. La nuque a besoin de bouger, par petits mouvements. Il y a des exceptions, notamment après une fracture ou une opération : c'est alors votre médecin ou chirurgien qui décide.",
      ],
    },
    {
      myth: "« Mon arthrose cervicale explique forcément ma douleur »",
      reality: [
        "Les signes d'arthrose et de disques « abîmés » à l'imagerie sont très fréquents chez des personnes sans aucune douleur de nuque, et augmentent avec l'âge. Ils font partie du vieillissement normal, comme des cheveux gris.",
        "Une nuque avec arthrose peut donc être tout à fait confortable, et une nuque sans aucune anomalie peut être douloureuse. Ce qui compte, c'est comment votre nuque bouge, se renforce et se sent, pas seulement ce que montre l'image.",
      ],
    },
    {
      myth: "« Je dois faire craquer ma nuque pour me soulager »",
      reality: [
        "Le craquement est un bruit de gaz dans l'articulation, pas la remise en place de quelque chose. Le soulagement vient du moment, pas d'un réalignement. La littérature est partagée : les manipulations cervicales donnent des résultats comparables aux mobilisations douces, avec des preuves de qualité variable.",
        "Elles comportent aussi un risque rare mais grave, l'atteinte d'une artère du cou, dont la fréquence exacte est inconnue. Il n'y a donc aucune raison de les rechercher ou de les répéter soi-même.",
      ],
    },
    {
      myth: "« Ma posture est mauvaise, c'est la cause de ma douleur »",
      reality: [
        "Il n'existe pas de posture idéale unique, et les liens entre « mauvaise posture » (tête en avant, épaules enroulées) et douleur de nuque restent faibles. Beaucoup de personnes avec une posture « imparfaite » n'ont aucune douleur.",
        "Ce qui semble compter davantage, c'est de rester trop longtemps dans la même position, sans variation. Bouger souvent, alterner les positions et renforcer la nuque et les épaules aide généralement plus que chercher à se tenir parfaitement droit.",
      ],
    },
  ],
  careIntro:
    "Les recommandations internationales sont cohérentes : écarter ce qui nécessite un avis médical, éduquer, maintenir le mouvement et renforcer. Voici comment je procède au cabinet.",
  care: [
    {
      title: "Un bilan complet",
      text: "Nous commençons par votre histoire, vos activités, votre travail, votre sommeil et vos inquiétudes. J'examine la nuque, les épaules, le haut du dos et, si besoin, les nerfs du bras. Je vérifie qu'aucun signe d'alerte ne nécessite un avis médical rapide.",
    },
    {
      title: "Comprendre pour moins craindre",
      text: "J'explique ce que l'on sait de votre douleur, ce que l'imagerie dit et ne dit pas, et pourquoi, dans la plupart des cas, bouger de façon dosée est sans danger pour la nuque. Rassurer et expliquer est une vraie intervention : la peur de bouger entretient souvent la raideur.",
    },
    {
      title: "Retrouver le mouvement dès que possible",
      text: "Des mouvements doux, dans le confort, sont réintroduits rapidement, sans attendre que la douleur ait totalement disparu, mais sans forcer à travers une douleur vive ou qui s'aggrave. La marche et la reprise des activités habituelles en font partie, dosées selon votre douleur du moment : quand une position ou un geste irrite, on le réduit ou on le fractionne, puis on remonte par paliers pendant que la nuque se renforce.",
    },
    {
      title: "Un programme d'exercices qui vous ressemble",
      text: "Renforcement de la nuque, des épaules et du haut du dos, endurance, mobilité : on choisit ce qui a du sens pour vous et que vous aurez envie de poursuivre. Pour la douleur de nuque chronique, les revues Cochrane trouvent un bénéfice plutôt pour les exercices de renforcement que pour les étirements seuls.",
    },
    {
      title: "Thérapie manuelle, en complément",
      text: "Mobilisations douces et techniques manuelles peuvent apaiser à court terme et faciliter le mouvement. Elles ne remplacent pas l'exercice et je les utilise comme appui, jamais comme seule solution.",
    },
    {
      title: "Travail, sport, sommeil et prévention",
      text: "Nous adaptons le poste de travail et l'écran sans chercher la posture parfaite, planifions la reprise du sport et regardons le sommeil et le stress. Je peux vous accompagner en téléconsultation entre deux séances et travailler avec votre médecin ou chirurgien si nécessaire.",
    },
  ],
  redFlags: [
    "Douleur apparue après un traumatisme important (accident de la route à grande vitesse, chute de hauteur, choc violent), surtout après 65 ans ou en cas d'ostéoporose",
    "Maladresse nouvelle des mains (boutons, écriture), jambes qui « se dérobent » ou troubles de la marche, ou perte de contrôle de la vessie ou de l'intestin",
    "Faiblesse du bras ou de la main qui s'installe ou s'aggrave progressivement",
    "Mal de tête ou de nuque soudain, d'une violence inhabituelle, surtout avec vertiges intenses, trouble de la parole, de la vue, paupière tombante ou faiblesse d'un côté du corps : appelez les urgences (112)",
    "Fièvre, frissons, perte de poids inexpliquée, ou antécédent de cancer",
    "Douleur intense, constante, qui ne change pas avec la position et vous réveille la nuit",
    "Douleur qui s'aggrave rapidement malgré un traitement adapté",
  ],
  faq: [
    {
      q: "Faut-il faire une radio ou une IRM de la nuque ?",
      a: [
        "Dans la plupart des cas, non, surtout au début. Les bombements de disque et l'arthrose sont très fréquents chez des personnes sans douleur et augmentent avec l'âge. Une image peut donc inquiéter pour rien.",
        "Elle est utile en présence de signes d'alerte, de signes neurologiques (faiblesse, troubles de la marche), après un traumatisme important, ou si une chirurgie est envisagée. C'est votre médecin qui en décide.",
      ],
    },
    {
      q: "Combien de temps dure un torticolis ou une cervicalgie ?",
      a: [
        "Un torticolis simple s'améliore souvent en quelques jours à quelques semaines, et beaucoup de cervicalgies récentes s'estompent en quelques semaines. Mais cela varie beaucoup d'une personne à l'autre, et certaines douleurs persistent ou reviennent.",
        "Je ne peux donc pas vous promettre de délai. Ce qui aide : rester actif de façon dosée (ni immobilisation, ni gestes forcés malgré la douleur), éviter la peur de bouger, bien dormir, et renforcer la nuque et les épaules.",
      ],
    },
    {
      q: "Dois-je faire craquer ma nuque, et les manipulations sont-elles dangereuses ?",
      a: [
        "Les preuves sont modestes. Selon la revue Cochrane de 2015, les manipulations et les mobilisations donnent des résultats comparables sur la douleur de nuque, avec des données de qualité variable. Le craquement n'est pas nécessaire pour que cela fonctionne.",
        "Les manipulations cervicales comportent un risque rare mais grave d'atteinte artérielle. Sa fréquence exacte est inconnue et les cas rapportés sont de qualité inégale. Je privilégie les techniques douces et l'exercice, et je dépiste les signes de risque avant tout geste manuel. Évitez de faire craquer vous-même votre nuque en force.",
      ],
    },
    {
      q: "Dois-je porter un collier cervical ?",
      a: [
        "En général, non. Les recommandations OPTIMa conseillent de ne pas proposer de collier cervical pour une cervicalgie ou un coup du lapin, faute de bénéfice. Porté longtemps, il peut raidir la nuque et entretenir la peur de bouger.",
        "Il existe des situations où un collier est prescrit, par exemple après une fracture ou certaines opérations. Suivez alors les consignes de votre médecin ou de votre chirurgien.",
      ],
    },
    {
      q: "J'ai eu un coup du lapin : comment cela évolue-t-il, et dois-je rester au repos ?",
      a: [
        "Le pronostic d'un coup du lapin est souvent favorable, mais il varie selon les personnes, et une part des patients garde des douleurs plus longtemps. L'intensité de départ de la douleur et des maux de tête compte parmi les facteurs associés à une récupération plus lente.",
        "Le repos prolongé n'est pas recommandé : les guidelines conseillent de rassurer et de maintenir l'activité et le mouvement, dans la mesure de ce qui est tolérable, en dosant les efforts tant que la douleur est vive. Les revues restent prudentes, car la qualité des études est modeste et aucun traitement n'a fait clairement la preuve de sa supériorité.",
      ],
    },
    {
      q: "J'ai une névralgie cervico-brachiale : combien de temps cela dure-t-il, faut-il opérer ?",
      a: [
        "Dans une grande étude de population, la majorité des patients étaient peu ou pas gênés au dernier suivi, mais certains ont eu des récidives et une minorité a été opérée. L'évolution est souvent plus lente que celle d'une cervicalgie simple.",
        "La chirurgie se discute avec un médecin ou un chirurgien si la douleur reste très forte malgré un traitement bien conduit, ou en cas de faiblesse importante ou qui s'aggrave. Les signes de myélopathie (maladresse des mains, troubles de la marche) sont une urgence relative à signaler vite.",
      ],
    },
    {
      q: "Mes maux de tête viennent-ils de ma nuque ?",
      a: [
        "Parfois. Des céphalées dites cervicogéniques semblent venir de la nuque, avec une douleur qui démarre à l'arrière et se modifie avec ses mouvements. Le diagnostic est délicat : on écarte d'abord d'autres causes, comme la migraine.",
        "Pour les maux de tête associés à une douleur de nuque persistante, les recommandations OPTIMa suggèrent des exercices d'endurance ciblés sur la nuque, et, pour les céphalées cervicogéniques de plus de 3 mois, une thérapie manuelle à considérer en complément.",
      ],
    },
    {
      q: "Quel oreiller, et la posture de travail est-elle en cause ?",
      a: [
        "Il n'existe pas d'oreiller ni de posture idéale démontrés. Choisissez celui avec lequel vous vous réveillez le plus confortablement. Une nuque qui dort mal est souvent le signe d'un sommeil, d'une tension ou d'un stress qui pèsent, plus que d'un oreiller « mauvais ».",
        "Au bureau, le plus utile est de varier : se lever, bouger, alterner les positions, placer l'écran à une hauteur confortable. Chercher à « se tenir droit » en permanence est fatigant et pas démontré plus protecteur.",
      ],
    },
    {
      q: "Quels exercices dois-je faire ?",
      a: [
        "Il n'y a pas d'exercice miracle. Selon la revue Cochrane de 2015, le renforcement de la nuque, de l'épaule et du haut du dos soulage la douleur chronique de nuque, alors que les étirements seuls n'ont pas montré de bénéfice. Les preuves restent de qualité modérée.",
        "Le meilleur programme est celui qui vous convient et que vous tiendrez dans le temps. Nous le construisons ensemble, avec une progression adaptée à votre douleur.",
      ],
    },
    {
      q: "Le stress et le sommeil jouent-ils un rôle, et qu'en est-il des vertiges ?",
      a: [
        "Oui. Le stress, la fatigue et un mauvais sommeil augmentent la sensibilité de la nuque et entretiennent la douleur. Ce n'est pas « dans la tête » : c'est une douleur réelle, influencée par tout ce qui vous entoure.",
        "Les vertiges dits cervicogéniques existent mais restent un diagnostic d'exclusion, avec une littérature limitée. Des vertiges persistants nécessitent d'abord un avis médical, pour écarter d'autres causes.",
      ],
    },
  ],
  related: [
    { href: "/kinesitherapie/lombalgie", label: "Lombalgie et douleurs du dos : une approche commune" },
    { href: "/kinesitherapie/reeducation-post-operatoire", label: "Rééducation post-opératoire" },
    { href: "/kinesitherapie/douleur-epaule", label: "Douleur d'épaule" },
    { href: "/blog/approche-biopsychosociale-kinesitherapie", label: "Article : l'approche biopsychosociale en kinésithérapie" },
  ],
  references: [
    {
      citation:
        "Blanpied PR, Gross AR, Elliott JM, et al. Neck pain: revision 2017. J Orthop Sports Phys Ther. 2017;47(7):A1-A83.",
      pmid: "28666405",
    },
    {
      citation:
        "Côté P, Wong JJ, Sutton D, et al. Management of neck pain and associated disorders: a clinical practice guideline from the Ontario Protocol for Traffic Injury Management (OPTIMa) Collaboration. Eur Spine J. 2016;25(7):2000-2022.",
      pmid: "26984876",
    },
    {
      citation:
        "Côté P, Yu H, Shearer HM, et al. Non-pharmacological management of persistent headaches associated with neck pain: a clinical practice guideline from the OPTIMa collaboration. Eur J Pain. 2019;23(6):1051-1070.",
      pmid: "30707486",
    },
    {
      citation:
        "Gross A, Kay TM, Paquin JP, et al. Exercises for mechanical neck disorders. Cochrane Database Syst Rev. 2015;(1):CD004250.",
      pmid: "25629215",
    },
    {
      citation:
        "Gross A, Langevin P, Burnie SJ, et al. Manipulation and mobilisation for neck pain contrasted against an inactive control or another active treatment. Cochrane Database Syst Rev. 2015;(9):CD004249.",
      pmid: "26397370",
    },
    {
      citation:
        "Rushton A, Carlesso LC, Flynn T, et al. International framework for examination of the cervical region for potential of vascular pathologies of the neck prior to musculoskeletal intervention: International IFOMPT Cervical Framework. J Orthop Sports Phys Ther. 2023;53(1):7-22.",
      pmid: "36099171",
    },
    {
      citation:
        "Chung CLR, Côté P, Stern P, et al. The association between cervical spine manipulation and carotid artery dissection: a systematic review of the literature. J Manipulative Physiol Ther. 2015;38(9):672-676.",
      pmid: "24387889",
    },
    {
      citation:
        "Nakashima H, Yukawa Y, Suda K, et al. Abnormal findings on magnetic resonance images of the cervical spines in 1211 asymptomatic subjects. Spine. 2015;40(6):392-398.",
      pmid: "25584950",
    },
    {
      citation:
        "Verhagen AP, Scholten-Peeters GGM, van Wijngaarden S, et al. Conservative treatments for whiplash. Cochrane Database Syst Rev. 2007;(2):CD003338.",
      pmid: "17443525",
    },
    {
      citation:
        "Radhakrishnan K, Litchy WJ, O'Fallon WM, Kurland LT. Epidemiology of cervical radiculopathy: a population-based study from Rochester, Minnesota, 1976 through 1990. Brain. 1994;117(2):325-335.",
      pmid: "8186959",
    },
  ],
};
