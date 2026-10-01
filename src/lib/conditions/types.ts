export type ConditionSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Subtype = {
  /** Terme tel qu'il peut figurer sur une prescription (ex. « Tendinopathie d'Achille ») */
  name: string;
  /** Précision courte (max ~12 mots), facultative */
  note?: string;
  /** Lien interne vers une page dédiée, facultatif */
  href?: string;
};

export type SubtypeGroup = {
  heading: string;
  items: Subtype[];
};

export type CareStep = {
  title: string;
  text: string;
};

export type Faq = {
  q: string;
  /** Une réponse = 1 à 3 paragraphes courts */
  a: string[];
};

export type Myth = {
  /** La croyance, formulée comme un patient la dirait (entre guillemets français) */
  myth: string;
  /** Ce que dit réellement la science : 1 à 3 paragraphes courts, nuancés */
  reality: string[];
};

export type Reference = {
  /** Citation courte : Auteurs. Titre. Revue. Année;vol(n):pages. */
  citation: string;
  /** PMID PubMed vérifié */
  pmid: string;
};

export type Condition = {
  slug: string;
  /** Libellé court pour liens, fil d'Ariane, cartes */
  label: string;
  /** <title> (sans suffixe, ~55 caractères max) */
  title: string;
  /** meta description, 140-160 caractères */
  description: string;
  h1: string;
  lead: string;
  /** « À retenir » : une seule phrase, en rupture avec une croyance courante (absent sur la page locale) */
  takeaway?: string;
  /** Tous les diagnostics/termes de prescription couverts par ce groupe */
  subtypeGroups: SubtypeGroup[];
  /** « Comprendre » : ce que c'est, modèle scientifique actuel, mythes */
  sections: ConditionSection[];
  /** 3 à 5 idées reçues déconstruites (fausses croyances fréquentes des patients) */
  myths: Myth[];
  /** « À quoi sert la kiné » : étapes de la prise en charge */
  careIntro?: string;
  care: CareStep[];
  /** Schéma pédagogique affiché sous « Comprendre » (facultatif) */
  diagram?: "charge-capacite";
  /** Signes d'alerte → avis médical (facultatif) */
  redFlags?: string[];
  /** Questions clés que se pose un patient */
  faq: Faq[];
  related: { href: string; label: string }[];
  /** Avis patient réel (déjà publié sur la fiche Google), affiché avant l'appel à l'action */
  testimonial?: { quote: string; author: string };
  /** Références scientifiques vérifiées (PubMed) */
  references: Reference[];
};
