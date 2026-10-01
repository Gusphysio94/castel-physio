export type ArticleReference = {
  /** Citation courte : Auteurs. Titre. Revue. Année;vol(n):pages. */
  citation: string;
  /** PMID PubMed vérifié */
  pmid: string;
};

export type MythVerdict = "faux" | "plutot-faux" | "nuance";

/** Mini-article « mythe et réalité » : mise en page visuelle dédiée, lecture < 5 minutes */
export type MythMeta = {
  /** La croyance, telle qu'un patient la dirait (sans guillemets) */
  claim: string;
  verdict: MythVerdict;
  /** La réponse en une phrase (160 caractères max) */
  oneLiner: string;
  /** « Pourquoi on y croit » : 1 à 2 phrases bienveillantes (sans humilier) */
  whyBelieved: string;
  /** 1 à 3 chiffres clés, issus de sources vérifiées */
  stats?: { value: string; label: string }[];
  /** 2 à 4 conseils chacun, formulés pour le patient */
  doList?: string[];
  dontList?: string[];
};

export type Article = {
  /** « mythe » = mini-article visuel ; « guide » (défaut) = article complet */
  kind?: "guide" | "mythe";
  myth?: MythMeta;
  slug: string;
  /** H1 de l'article (idéalement 70 caractères max) */
  title: string;
  /** <title> sans suffixe, 55 caractères max (par défaut : title) */
  metaTitle?: string;
  /** meta description, 140-160 caractères */
  description: string;
  /** 1 à 2 phrases pour la liste du blog */
  excerpt: string;
  /** Date de publication, AAAA-MM-JJ */
  isoDate: string;
  /** Thème court affiché en pastille : « Tendon », « Genou », « Dos »… */
  category: string;
  audience: "patients" | "professionnels";
  /** « L'essentiel » : 3 à 4 phrases courtes */
  takeaways: string[];
  /**
   * Corps de l'article en « markdown léger » :
   * paragraphes séparés par une ligne vide ; « ## Titre » ; « ### Sous-titre » ;
   * listes « - » ou « 1. » ; « > remarque » pour un encadré ;
   * inline : **gras**, *italique*, [texte](/chemin-interne)
   */
  content: string;
  /** 3 à 5 questions-réponses courtes (facultatif) */
  faq?: { q: string; a: string }[];
  /** Liens internes (pages de pathologie, autres articles) */
  related: { href: string; label: string }[];
  /** Références scientifiques vérifiées (PubMed) */
  references: ArticleReference[];
};
