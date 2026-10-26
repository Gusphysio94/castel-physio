/**
 * Pour chaque article, les pages de pathologie (slugs de src/lib/conditions) auxquelles il se rattache.
 * Sert à relier automatiquement articles et pathologies, dans les deux sens.
 */
export const articleTopics: Record<string, string[]> = {
  "mal-de-dos-hernie-discale": ["lombalgie"],
  "vertebre-deplacee-remettre-en-place": ["lombalgie", "cervicalgie"],
  "mal-de-dos-repos-au-lit": ["lombalgie"],
  "douleur-egale-degats": ["lombalgie", "douleur-genou"],
  "cartilage-use-arthrose-course": ["douleur-genou", "blessures-course-a-pied"],
  "tendinite-inflammation-repos": ["tendinopathie"],
  "irm-dechirure-operation": ["douleur-genou", "douleur-epaule"],
  "mauvaise-posture-mal-de-dos": ["lombalgie", "cervicalgie"],
  "etirements-eviter-blessures": ["blessures-course-a-pied"],
  "soulever-lourd-dos-rond": ["lombalgie"],
  "entorse-cheville-premiers-jours": ["entorse-cheville"],
  "rupture-lca-operation-ou-non": ["reeducation-lca"],
  "tendinopathie-achille-duree": ["tendinopathie", "blessures-course-a-pied"],
  "courir-avec-douleur-genou": ["douleur-genou", "blessures-course-a-pied"],
  "courir-a-woluwe-sans-se-blesser": ["blessures-course-a-pied", "woluwe-saint-lambert"],
  "lumbago-premiers-jours": ["lombalgie"],
  "douleur-epaule-irm-ou-non": ["douleur-epaule"],
  "torticolis-duree-que-faire": ["cervicalgie"],
  "prothese-de-genou-premieres-semaines": ["reeducation-post-operatoire"],
  "reprendre-le-sport-apres-une-blessure": ["blessures-course-a-pied", "reeducation-lca", "entorse-cheville"],
  "retour-sport-apres-lca": ["reeducation-lca"],
  "exercice-therapeutique-tendinopathie": ["tendinopathie"],
  "approche-biopsychosociale-kinesitherapie": ["lombalgie"],
};
